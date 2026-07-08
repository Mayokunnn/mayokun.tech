export const GITHUB_USERNAME = "Mayokunnn";

// GitHub's unauthenticated REST/Search endpoints are rate-limited (60/hr and
// 10/min respectively). This app mounts both a desktop and a mobile layout
// simultaneously (toggled via CSS, not conditional rendering), so every
// navigation would otherwise fire each request twice. Cache in-flight and
// recent responses per key to keep real request volume down.
const CACHE_TTL_MS = 60_000;
const cache = new Map<string, { promise: Promise<unknown>; timestamp: number }>();

function cached<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
  const entry = cache.get(key);
  if (entry && Date.now() - entry.timestamp < CACHE_TTL_MS) {
    return entry.promise as Promise<T>;
  }
  const promise = fetcher();
  cache.set(key, { promise, timestamp: Date.now() });
  promise.catch(() => cache.delete(key));
  return promise;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface ContributionsResponse {
  total: { lastYear: number };
  contributions: ContributionDay[];
}

export function computeCurrentStreak(days: ContributionDay[]): number {
  let streak = 0;
  let i = days.length - 1;
  // Don't break the streak just because today hasn't happened yet.
  if (i >= 0 && days[i].count === 0) i--;
  for (; i >= 0; i--) {
    if (days[i].count > 0) streak++;
    else break;
  }
  return streak;
}

export function fetchContributions(): Promise<ContributionsResponse> {
  return cached("contributions", async () => {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
    );
    if (!res.ok) throw new Error("Failed to fetch contributions");
    return res.json();
  });
}

export interface GithubUser {
  publicRepos: number;
  followers: number;
}

export function fetchUser(): Promise<GithubUser> {
  return cached("user", async () => {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!res.ok) throw new Error("Failed to fetch user");
    const data = await res.json();
    return { publicRepos: data.public_repos, followers: data.followers };
  });
}

export interface LanguageStat {
  name: string;
  count: number;
  percent: number;
}

export interface RepoStats {
  languages: LanguageStat[];
  totalStars: number;
}

interface GithubRepo {
  language: string | null;
  stargazers_count: number;
}

export function fetchRepoStats(): Promise<RepoStats> {
  return cached("repoStats", async () => {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&type=owner`
    );
    if (!res.ok) throw new Error("Failed to fetch repos");
    const repos: GithubRepo[] = await res.json();

    const counts = new Map<string, number>();
    let totalStars = 0;
    for (const repo of repos) {
      totalStars += repo.stargazers_count ?? 0;
      if (repo.language) {
        counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
      }
    }

    const totalWithLang = [...counts.values()].reduce((a, b) => a + b, 0);
    const languages = [...counts.entries()]
      .map(([name, count]) => ({
        name,
        count,
        percent: totalWithLang ? Math.round((count / totalWithLang) * 100) : 0,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);

    return { languages, totalStars };
  });
}

export type PullRequestState = "open" | "closed" | "merged";

export interface PullRequest {
  id: number;
  title: string;
  htmlUrl: string;
  repo: string;
  number: number;
  state: PullRequestState;
  createdAt: string;
}

export interface PullRequestsPage {
  items: PullRequest[];
  totalCount: number;
}

interface GithubSearchIssueItem {
  id: number;
  title: string;
  html_url: string;
  repository_url: string;
  number: number;
  state: "open" | "closed";
  created_at: string;
  pull_request?: { merged_at: string | null };
}

export function fetchPullRequests(
  page: number,
  perPage = 8
): Promise<PullRequestsPage> {
  return cached(`pulls:${page}:${perPage}`, async () => {
    const res = await fetch(
      `https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+type:pr&sort=created&order=desc&per_page=${perPage}&page=${page}`
    );
    if (!res.ok) throw new Error("Failed to fetch pull requests");
    const data: { items: GithubSearchIssueItem[]; total_count: number } =
      await res.json();

    const items: PullRequest[] = data.items.map((item) => {
      const repo = item.repository_url.split("/repos/")[1];
      const state: PullRequestState =
        item.state === "closed" && item.pull_request?.merged_at
          ? "merged"
          : item.state;

      return {
        id: item.id,
        title: item.title,
        htmlUrl: item.html_url,
        repo,
        number: item.number,
        state,
        createdAt: item.created_at,
      };
    });

    return { items, totalCount: data.total_count };
  });
}

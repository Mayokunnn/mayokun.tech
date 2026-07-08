import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { useTheme } from "styled-components";
import { ActivityCalendar } from "react-activity-calendar";
import "react-activity-calendar/tooltips.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  View,
  Wrapper,
  Heading,
  Paragraph,
  Panel,
  PanelHeading,
  CalendarRow,
  CalendarScroll,
  StreakBlock,
  StreakRingWrap,
  StreakRingSvg,
  StreakValue,
  StreakLabel,
  StatsGrid,
  StatList,
  StatRow,
  LanguageList,
  LanguageRow,
  LanguageMeta,
  LanguageBarTrack,
  LanguageBarFill,
  Fallback,
  PRList,
  PRRow,
  PRLink,
  PRTitle,
  PRMeta,
  PRState,
  PaginationRow,
  PaginationButton,
  PaginationStatus,
  CTARow,
  CTALink,
} from "../styles/Activity.style";
import { MenuButtonContainer, MenuButtonWrapper, MenuLink } from "../UI/Button";
import { ThemeType } from "../utils/types";
import {
  GITHUB_USERNAME,
  ContributionDay,
  LanguageStat,
  PullRequest,
  fetchContributions,
  fetchUser,
  fetchRepoStats,
  fetchPullRequests,
  computeCurrentStreak,
} from "../utils/github";

const STREAK_GOAL_DAYS = 30;
const RING_RADIUS = 40;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

const PRS_PER_PAGE = 8;

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

type FetchState<T> = {
  status: "loading" | "error" | "success";
  data: T | null;
};

export default function Activity() {
  const theme = useTheme() as ThemeType;

  const [contributions, setContributions] = useState<
    FetchState<{ days: ContributionDay[]; lastYear: number }>
  >({ status: "loading", data: null });

  const [stats, setStats] = useState<
    FetchState<{ publicRepos: number; followers: number; totalStars: number }>
  >({ status: "loading", data: null });

  const [languages, setLanguages] = useState<FetchState<LanguageStat[]>>({
    status: "loading",
    data: null,
  });

  const [prPage, setPrPage] = useState(1);
  const [prs, setPrs] = useState<
    FetchState<{ items: PullRequest[]; totalCount: number }>
  >({ status: "loading", data: null });

  useEffect(() => {
    fetchContributions()
      .then((res) =>
        setContributions({
          status: "success",
          data: { days: res.contributions, lastYear: res.total.lastYear },
        })
      )
      .catch(() => setContributions({ status: "error", data: null }));
  }, []);

  useEffect(() => {
    fetchUser()
      .then((user) =>
        fetchRepoStats().then((repoStats) => {
          setStats({
            status: "success",
            data: {
              publicRepos: user.publicRepos,
              followers: user.followers,
              totalStars: repoStats.totalStars,
            },
          });
          setLanguages({ status: "success", data: repoStats.languages });
        })
      )
      .catch(() => {
        setStats({ status: "error", data: null });
        setLanguages({ status: "error", data: null });
      });
  }, []);

  useEffect(() => {
    let cancelled = false;
    setPrs((prev) => ({ status: "loading", data: prev.data }));
    fetchPullRequests(prPage, PRS_PER_PAGE)
      .then((res) => {
        if (cancelled) return;
        setPrs({
          status: "success",
          data: { items: res.items, totalCount: res.totalCount },
        });
      })
      .catch(() => {
        if (cancelled) return;
        setPrs({ status: "error", data: null });
      });
    return () => {
      cancelled = true;
    };
  }, [prPage]);

  const totalPrPages = prs.data
    ? Math.ceil(prs.data.totalCount / PRS_PER_PAGE)
    : 1;

  const streak = useMemo(
    () => computeCurrentStreak(contributions.data?.days ?? []),
    [contributions.data]
  );

  return (
    <View>
      <Helmet>
        <title> Activity | Mayokun Areola </title>
      </Helmet>
      <Wrapper>
        <Heading>Activity</Heading>
        <Paragraph>
          A live pull from GitHub — commits, contribution streaks, and the
          languages I reach for most.
        </Paragraph>

        <Panel $delay={0}>
          <PanelHeading>Contribution graph</PanelHeading>
          {contributions.status === "error" ? (
            <Fallback>
              Couldn't load the live contribution graph — see it directly on{" "}
              <a href={`https://github.com/${GITHUB_USERNAME}`}>GitHub</a>.
            </Fallback>
          ) : (
            <>
              <CalendarRow>
                <CalendarScroll>
                  <ActivityCalendar
                    data={contributions.data?.days ?? []}
                    loading={contributions.status === "loading"}
                    blockSize={9}
                    blockMargin={3}
                    blockRadius={2}
                    colorScheme={theme.mode}
                    showColorLegend={false}
                    showTotalCount={false}
                    theme={{
                      light: ["#ebebeb", "#ffd6bd", "#ffab7a", "#ff7f3f", "#ff5b2e"],
                      dark: ["#242424", "#5c2c1c", "#9a3f22", "#d15530", "#ff6b40"],
                    }}
                    tooltips={{
                      activity: {
                        text: (activity) =>
                          `${activity.count} contribution${
                            activity.count === 1 ? "" : "s"
                          } on ${formatDate(activity.date)}`,
                      },
                    }}
                  />
                </CalendarScroll>
                {contributions.data && (
                  <StreakBlock>
                    <StreakRingWrap>
                      <StreakRingSvg width={96} height={96} viewBox="0 0 96 96">
                        <circle
                          className="track"
                          cx={48}
                          cy={48}
                          r={RING_RADIUS}
                        />
                        <circle
                          className="fill"
                          cx={48}
                          cy={48}
                          r={RING_RADIUS}
                          strokeDasharray={RING_CIRCUMFERENCE}
                          strokeDashoffset={
                            RING_CIRCUMFERENCE *
                            (1 -
                              Math.min(
                                streak / STREAK_GOAL_DAYS,
                                1
                              ))
                          }
                        />
                      </StreakRingSvg>
                      <StreakValue>
                        <span className="count">{streak}</span>
                        <span className="unit">
                          {streak === 1 ? "day" : "days"}
                        </span>
                      </StreakValue>
                    </StreakRingWrap>
                    <StreakLabel>Current streak</StreakLabel>
                  </StreakBlock>
                )}
              </CalendarRow>
              {contributions.data && (
                <Fallback style={{ paddingTop: 0 }}>
                  {contributions.data.lastYear.toLocaleString()} contributions
                  in the last year
                </Fallback>
              )}
            </>
          )}
        </Panel>

        <StatsGrid>
          <Panel $delay={100}>
            <PanelHeading>Stats</PanelHeading>
            {stats.status === "error" ? (
              <Fallback>Live stats are unavailable right now.</Fallback>
            ) : (
              <StatList>
                {stats.data && (
                  <>
                    <StatRow>
                      <dt>Public repos</dt>
                      <dd>{stats.data.publicRepos}</dd>
                    </StatRow>
                    <StatRow>
                      <dt>Followers</dt>
                      <dd>{stats.data.followers}</dd>
                    </StatRow>
                    <StatRow>
                      <dt>Total stars</dt>
                      <dd>{stats.data.totalStars}</dd>
                    </StatRow>
                  </>
                )}
                {contributions.data && (
                  <StatRow>
                    <dt>Contributions (last year)</dt>
                    <dd>{contributions.data.lastYear.toLocaleString()}</dd>
                  </StatRow>
                )}
              </StatList>
            )}
          </Panel>
          <Panel $delay={200}>
            <PanelHeading>Top languages</PanelHeading>
            {languages.status === "error" ? (
              <Fallback>Language breakdown is unavailable right now.</Fallback>
            ) : (
              <LanguageList>
                {languages.data?.map((lang) => (
                  <LanguageRow key={lang.name}>
                    <LanguageMeta>
                      <span className="name">{lang.name}</span>
                      <span>{lang.percent}%</span>
                    </LanguageMeta>
                    <LanguageBarTrack>
                      <LanguageBarFill $percent={lang.percent} />
                    </LanguageBarTrack>
                  </LanguageRow>
                ))}
              </LanguageList>
            )}
          </Panel>
        </StatsGrid>

        <Panel $delay={300}>
          <PanelHeading>Pull requests</PanelHeading>
          {prs.status === "error" ? (
            <Fallback>Pull requests are unavailable right now.</Fallback>
          ) : prs.data && prs.data.items.length === 0 ? (
            <Fallback>No pull requests found.</Fallback>
          ) : (
            <>
              <PRList>
                {(prs.data?.items ?? []).map((pr) => (
                  <PRRow key={pr.id}>
                    <PRLink
                      href={pr.htmlUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PRTitle>{pr.title}</PRTitle>
                      <PRState $state={pr.state}>{pr.state}</PRState>
                    </PRLink>
                    <PRMeta>
                      <span>{pr.repo}</span>
                      <span>#{pr.number}</span>
                      <span>{formatDate(pr.createdAt)}</span>
                    </PRMeta>
                  </PRRow>
                ))}
              </PRList>
              <PaginationRow>
                <PaginationButton
                  onClick={() => setPrPage((p) => Math.max(1, p - 1))}
                  disabled={prPage <= 1 || prs.status === "loading"}
                >
                  &larr; Prev
                </PaginationButton>
                <PaginationStatus>
                  Page {prPage} of {totalPrPages}
                  {prs.data ? ` · ${prs.data.totalCount} total` : ""}
                </PaginationStatus>
                <PaginationButton
                  onClick={() => setPrPage((p) => Math.min(totalPrPages, p + 1))}
                  disabled={prPage >= totalPrPages || prs.status === "loading"}
                >
                  Next &rarr;
                </PaginationButton>
              </PaginationRow>
            </>
          )}
        </Panel>

        <CTARow>
          <CTALink
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span>View full profile on GitHub</span>
            <FaExternalLinkAlt />
          </CTALink>
        </CTARow>
      </Wrapper>

      <MenuButtonContainer>
        <MenuButtonWrapper>
          <MenuLink to={"/work"}>Work</MenuLink>
          <MenuLink to={"/resume"}>Resume</MenuLink>
          <MenuLink to={"/contact"}>Contact</MenuLink>
        </MenuButtonWrapper>
      </MenuButtonContainer>
    </View>
  );
}

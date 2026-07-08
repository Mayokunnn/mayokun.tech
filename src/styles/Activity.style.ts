import styled, { keyframes } from "styled-components";

const rise = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const View = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 990px) {
    margin: 0 1rem;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
`;

export const Heading = styled.h1`
  margin: 20px 0;
  font-size: 12px;
  font-weight: 800;
  line-height: 16px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.workHeading};
`;

export const Paragraph = styled.p`
  max-width: 60ch;
  margin-bottom: 24px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.paragraph};
  line-height: 25px;
`;

export const Panel = styled.div<{ $delay?: number }>`
  min-width: 0;
  background: ${({ theme }) => theme.card};
  padding: 1.5rem;
  border: 1px solid transparent;
  transition: border-color 300ms;
  animation: ${rise} 500ms cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: ${({ $delay }) => $delay ?? 0}ms;

  &:hover {
    border-color: ${({ theme }) => theme.btn_border};
  }

  @media only screen and (max-width: 990px) {
    padding: 1rem;
  }
`;

export const PanelHeading = styled.h2`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.cardHeader};
`;

export const CalendarScroll = styled.div`
  overflow-x: auto;
  padding-bottom: 4px;

  &::-webkit-scrollbar {
    display: none;
  }

  .react-activity-calendar {
    font-family: "JetBrains Mono", monospace;
    color: ${({ theme }) => theme.cardStack};
  }

  .react-activity-calendar__count {
    color: ${({ theme }) => theme.cardStack};
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 16px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StatList = styled.dl`
  display: flex;
  flex-direction: column;
`;

export const StatRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.btn_border};

  &:last-child {
    border-bottom: none;
  }

  dt {
    font-size: 12px;
    color: ${({ theme }) => theme.cardStack};
  }

  dd {
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.cardHeader};
  }
`;

export const LanguageList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LanguageRow = styled.li`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const LanguageMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: ${({ theme }) => theme.cardDescription};

  span.name {
    color: ${({ theme }) => theme.cardHeader};
    font-weight: 600;
  }
`;

export const LanguageBarTrack = styled.div`
  height: 4px;
  background: ${({ theme }) => theme.btn_border};
`;

export const LanguageBarFill = styled.div<{ $percent: number }>`
  height: 100%;
  width: 100%;
  transform: scaleX(${({ $percent }) => $percent / 100});
  transform-origin: left;
  background: ${({ theme }) => theme.accent};
  transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
`;

export const Fallback = styled.div`
  padding: 2rem 0;
  font-size: 13px;
  color: ${({ theme }) => theme.cardDescription};
  text-align: center;
`;

export const PRList = styled.ul`
  list-style-type: none;
  border-top: 1px solid ${({ theme }) => theme.btn_border};
`;

export const PRRow = styled.li`
  padding: 14px 4px;
  border-bottom: 1px solid ${({ theme }) => theme.btn_border};
`;

export const PRLink = styled.a`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.cardHeader};
  transition: color 150ms ease-out;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.accentText};
  }
`;

export const PRTitle = styled.span`
  min-width: 0;
  font-size: 13px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PRMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px 10px;
  margin-top: 6px;
  font-size: 11px;
  color: ${({ theme }) => theme.cardStack};
`;

export const PRState = styled.span<{ $state: "open" | "closed" | "merged" }>`
  flex-shrink: 0;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 2px 6px;
  color: ${({ theme, $state }) =>
    $state === "merged" ? theme.accentInk : theme.card};
  background: ${({ theme, $state }) =>
    $state === "merged"
      ? theme.accent
      : $state === "open"
      ? theme.success
      : theme.text};
`;

export const PaginationRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 16px;

  @media only screen and (max-width: 600px) {
    justify-content: center;
    text-align: center;
  }
`;

export const PaginationButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.btn_border};
  color: ${({ theme }) => theme.text};
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  font-weight: 600;
  padding: 8px 14px;
  cursor: pointer;
  transition: border-color 200ms, color 200ms;

  &:hover:not(:disabled),
  &:focus-visible:not(:disabled) {
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accentText};
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;

export const PaginationStatus = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.cardStack};
`;

export const CTARow = styled.div`
  margin-top: 24px;
  animation: ${rise} 500ms cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: 300ms;
`;

export const CTALink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.active};
  transition: color 200ms ease-out, gap 200ms ease-out;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.accentText};
    gap: 12px;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

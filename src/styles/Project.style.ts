import styled from "styled-components";

export const Record = styled.li`
  padding: 28px 4px;
  border-bottom: 1px solid ${({ theme }) => theme.btn_border};
  transition: background-color 200ms ease-out;

  &:hover,
  &:focus-within {
    background: ${({ theme }) => theme.card};

    .prompt {
      opacity: 1;
      transform: translateX(0);
    }

    .index {
      color: ${({ theme }) => theme.accent};
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 22px 4px;
  }
`;

export const RecordHead = styled.div`
  display: flex;
  align-items: baseline;
  gap: 14px;
`;

export const RecordIndex = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.cardStack};
  transition: color 200ms ease-out;
`;

export const Prompt = styled.span`
  color: ${({ theme }) => theme.accent};
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 200ms ease-out, transform 200ms ease-out;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  backface-visibility: hidden;
  height: 100%;
  width: 100%;
`;

export const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  backface-visibility: hidden;
`;

export const ProjectHeading = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 30px;
  color: ${({ theme }) => theme.cardHeader};
  backface-visibility: hidden;

  @media only screen and (max-width: 600px) {
    font-size: 19px;
    line-height: 24px;
  }
`;

export const ProjectStack = styled.p`
  margin-top: 10px;
  margin-left: 26px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 16px;
  color: ${({ theme }) => theme.cardStack};
  backface-visibility: hidden;
`;

export const ProjectDescription = styled.p`
  margin-top: 12px;
  margin-bottom: 12px;
  margin-left: 26px;
  max-width: 70ch;
  font-size: 13px;
  line-height: 22px;
  color: ${({ theme }) => theme.cardDescription};
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (max-width: 600px) {
    font-size: 12.5px;
    line-height: 20px;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-left: 26px;
  justify-content: space-between;
`;

export const ProjectFeatured = styled.div<{ $accent?: boolean }>`
  font-size: 10px;
  font-weight: 700;
  color: ${({ theme, $accent }) => ($accent ? theme.accentInk : theme.card)};
  background-color: ${({ theme, $accent }) =>
    $accent ? theme.accent : theme.text};
  padding: 2px 6px;
  align-self: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const CardLinkContainer = styled.div`
  gap: 16px;
  display: flex;
`;

export const CardLink = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  line-height: 21px;
  color: ${({ theme }) => theme.cardStack};
  text-decoration: none;
  transition: color 200ms;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.accentText};
  }

  &:hover span.icon,
  &:focus-visible span.icon {
    color: ${({ theme }) => theme.accentText};
  }

  span.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.workHeading};
    width: 14px;
    height: 14px;
    transition: color 200ms;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

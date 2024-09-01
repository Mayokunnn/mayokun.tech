import styled from "styled-components";

export const View = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 200px; */
`;


export const Container = styled.div`
    padding: 30px;
    background: ${({ theme }) => theme.resumeCard};
    margin-top: 10%;

    @media only screen and (max-width: 600px) {
        padding: 15px;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Heading = styled.h1`
    font-size: 27px;
    font-weight: 600;
    line-height: 33px;
    color: ${({ theme }) => theme.text};
    text-align: left;

    @media only screen and (max-width: 600px) {
        font-size: 22px;
        line-height: 28px;
    }
`;

export const Actions = styled.div`
    display: flex;
    gap: 20px;

    @media only screen and (max-width: 1140px) {
        gap: 10px;
    }

    @media only screen and (max-width: 990px) {
        gap: 20px;
    }

    @media only screen and (max-width: 600px) {
        gap: 10px;
    }
`;

export const ActionButton = styled.a`
    display: flex;
    gap: 3px;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    align-self: start;

    @media only screen and (max-width: 1140px) {
        font-size: 14px;
        line-height: 15px;
        gap: 2px;
    }


    span {
        @media only screen and (max-width: 990px) {
            display: none;
        }
    }

    span.icon {
        color: ${({ theme }) => theme.inactive};
        display: flex;
        align-items: center;
        justify-content: center;

        @media only screen and (max-width: 1140px) {
            display: flex;
        }

        @media only screen and (max-width: 990px) {
            color: ${({ theme }) => theme.active};
        }

        svg {
            width: 14px;
            height: 14px;

            @media only screen and (max-width: 1140px) {
                width: 12px;
                height: 12px;
            }

            @media only screen and (max-width: 990px) {
                width: 24px;
                height: 24px;
            }

            @media only screen and (max-width: 600px) {
                width: 18px;
                height: 18px;
            }
        }
    }
`;

export const Title = styled.p`
    margin-top: 10px;
    font-size: 16px;
    font-weight: 300;
    line-height: 23px;
    text-align: left;
    text-transform: uppercase;
    color: ${({ theme }) => theme.resumeTitle};

    @media only screen and (max-width: 600px) {
        font-size: 14px;
        line-height: 23px;
    }
`;

export const Email = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 23px;
  text-align: left;
  color: ${({ theme }) => theme.resumeTitle};

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    line-height: 23px;
  }
`;

export const Summary = styled.p`
    padding-top: 30px;
    padding-bottom: 15px;
    font-size: 14px;
    font-weight: 400;
    line-height: 23px;
    text-align: left;
    color: ${({ theme }) => theme.workHeading};

    @media only screen and (max-width: 600px) {
        padding-top: 15px;
    }
`;

export const Divider = styled.div`
    display: flex;
    margin: 15px 0;
    align-items: center;
    gap: 5px;
`;

export const DividerTitle = styled.h3`
    font-size: 15px;
    font-weight: 600;
    line-height: 23px;
    text-align: left;
    color: ${({ theme }) => theme.resumeDivider};
`;

export const Line = styled.span`
    height: 1px;
    flex-grow: 1;
    background: ${({ theme }) => theme.resumeUnderline};
`;

export const Skills = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 23px;
    text-align: left;
    color: ${({ theme }) => theme.workHeading};
`;

export const ExperienceContainer = styled.div`
    display: grid;
    gap: 20px;
`;

export const Experience = styled.ul`
    list-style-type: none;
`;


export const ExperienceTitle = styled.h1`
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: 300;
    font-style: italic;
    line-height: 25px;
    text-align: left;
    color: ${({ theme }) => theme.active};
`;

export const ExperienceDate = styled.p`
    margin-top: 10px;
    margin-bottom: 15px;
    font-size: 11px;
    font-weight: 300;
    line-height: 16px;
    text-align: left;
    color: ${({ theme }) => theme.workHeading};
`;

export const ExperienceDescription = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 23px;
    text-align: left;
    color: ${({ theme }) => theme.workHeading};
`;

export const ExperienceAchievements = styled.ul`
    margin-top: 10px;
    list-style-type: none;
`;

export const ExperienceItem = styled.li`
    display: flex;
    gap: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 23px;
    text-align: left;
    color: ${({ theme }) => theme.workHeading};
    margin: 4px 0;

    span.icon {
        line-height: 24px;
        vertical-align: middle;
    }
`;

export const EducationTitle = styled.h1`
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 300;
  font-style: italic;
  line-height: 25px;
  text-align: left;
  color: ${({ theme }) => theme.active};
`;

export const EducationDate = styled.p`
  margin-top: 10px;
  margin-bottom: 15px;
  font-size: 11px;
  font-weight: 300;
  line-height: 16px;
  text-align: left;
  color: ${({ theme }) => theme.workHeading};
`;


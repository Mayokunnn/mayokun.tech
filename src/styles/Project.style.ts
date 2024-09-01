import styled from "styled-components";

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
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 30px;
  color: ${({ theme }) => theme.cardHeader};
  backface-visibility: hidden;

  @media only screen and (max-width: 600px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const ProjectStack = styled.p`
  margin-top: 10px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  line-height: 16px;
  color: ${({ theme }) => theme.cardStack};
  backface-visibility: hidden;
`;

export const ProjectDescription = styled.p`
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: ${({ theme }) => theme.cardDescription};
  min-height: ${({ className }) => (className ? "90px" : "auto")};
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (max-width: 990px) {
    min-height: 72px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;

  &.footer {
    @media only screen and (max-width: 990px) {
      font-size: 10px;
    }
  }


`;

export const ProjectFeatured = styled.div`
  font-size: 8px;
  font-weight: 700;
  color: ${({ theme }) => theme.card};
  background-color: ${({ theme }) => theme.text};
  border-radius: 8px;
  padding: 1.8px 3px;
  align-self: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  @media only screen and (max-width: 990px) {
    font-size: 10px;
  }
`;


export const CardLinkContainer = styled.div`
  gap: 14px;
  display: flex;
`;


export const CardLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 300;
  line-height: 21px;
  color: ${({ theme }) => theme.cardStack};
  text-decoration: none;
  transition: all 300ms;

  &:hover {
    color: ${({ theme }) => theme.active};
  }

  &:hover span.icon {
    color: ${({ theme }) => theme.active};
  }

  span.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.workHeading};
    width: 14px;
    height: 14px;
    transition: all 300ms;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

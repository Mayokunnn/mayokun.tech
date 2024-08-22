import styled from "styled-components";

export const WorkView = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 990px) {
    margin: 0 1rem;
  }
`;

export const WorkWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const WorkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-bottom: 32px;
  backface-visibility: hidden;

  @media only screen and (max-width: 990px) {
    gap: 32px;
  }

  @media only screen and (max-width: 600px) {
    gap: 16px;
  }

  & p.paragraph {
    height: auto;
    min-height: auto;

    @media only screen and (max-width: 990px) {
      min-height: 72px;
    }
  }

  &:hover .card {
    opacity: 0.5;

    @media only screen and (max-width: 990px) {
      opacity: 1;
    }
  }

  .card:hover {
    opacity: 1;
  }
`;

export const WorkContainerHalf = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  backface-visibility: hidden;

  @media only screen and (max-width: 990px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 32px;
    margin-bottom: 16px;
  }

  @media only screen and (max-width: 600px) {
    gap: 16px;
  }

  & div.footer {
    margin-top: calc(12px + 4px);
  }

  &:hover .card {
    opacity: 0.5;

    @media only screen and (max-width: 990px) {
      opacity: 1;
    }
  }

  .card:hover {
    opacity: 1;
  }
`;

export const WorkHeading = styled.h1`
  margin: 14px 0;
  font-size: 12px;
  font-weight: 800;
  line-height: 16px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.workHeading};

  &.span--2 {
    grid-column: span 2;
  }
`;

export const WorkContainerHeader = styled.div`
  display: block;
`;

export const WorkList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-column: span 2;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  backface-visibility: hidden;

  @media only screen and (max-width: 990px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }

  &:nth-child(3) {
    margin-top: 12px;
  }
`;

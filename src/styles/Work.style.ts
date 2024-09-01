import styled from "styled-components";

export const View = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 200px;  */
  @media only screen and (max-width: 990px) {
    margin: 0 1rem;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const Container = styled.div`
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
    margin-top: calc(20px + 4px);
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

export const Heading = styled.h1`
  margin: 20px 0;
  font-size: 12px;
  font-weight: 800;
  line-height: 16px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.workHeading};

  &.span--2 {
    grid-column: span 2;
  }
`;

export const ContainerHeader = styled.div`
  display: block;
`;

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-column: span 2;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  backface-visibility: hidden;

  @media only screen and (max-width: 990px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }

  &:nth-child(3) {
    margin-top: 20px;
  }
`;

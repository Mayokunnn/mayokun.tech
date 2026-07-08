import styled from "styled-components";

export const View = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 990px) {
    margin: 0 1rem;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h1`
  margin: 20px 0;
  font-size: 12px;
  font-weight: 800;
  line-height: 16px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.workHeading};
`;

export const ContainerHeader = styled.div`
  display: block;
`;

export const List = styled.ul`
  list-style-type: none;
  border-top: 1px solid ${({ theme }) => theme.btn_border};
`;

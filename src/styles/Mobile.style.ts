import styled from "styled-components";



export const MobileView = styled.div`
  height: 100vh;
  overflow-y: scroll;
  padding: 40px;
  display: none;

  @media only screen and (max-width: 990px) {
    display: block;
  }

  @media only screen and (max-width: 768px) {
    padding: 30px;
  }

  @media only screen and (max-width: 600px) {
    padding: 20px;
  }
`;


export const MobileViewWrapper = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
`;
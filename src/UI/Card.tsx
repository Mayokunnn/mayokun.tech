import { ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
  className: string;
  children : ReactNode;
}

const CardWrapper = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 2rem;
  transition: all 300ms;
  cursor: default;
  backface-visibility: hidden;

  @media only screen and (max-width: 990px) {
    padding-left: 13px;
  }

  &.card--pad {
    transform: translateY(24px);

    @media only screen and (max-width: 990px) {
      transform: translateY(0);
    }
  }

  &:hover {
    backface-visibility: hidden;
    transform: scale(1.1);

    @media only screen and (max-width: 990px) {
      transform: scale(1);
    }
  }
`;



export default function Card({className, children}: CardProps) {
  return <CardWrapper className={className}>{children}</CardWrapper>;
}

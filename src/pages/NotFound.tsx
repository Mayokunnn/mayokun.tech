import { Helmet } from "react-helmet";
import {
  ErrorContainer,
  ErrorHeading,
  ErrorParagraph,
  ErrorLink,
} from "../styles/NotFound.style";

export default function NotFound() {
  return (
    <div>
      <Helmet>
        <title> 404 | Mayokun Areola</title>
      </Helmet>
      <ErrorContainer>
        <ErrorHeading>404</ErrorHeading>
        <ErrorParagraph>Seems like you got lost.</ErrorParagraph>
        <ErrorLink to="/" >
          Home
        </ErrorLink>
      </ErrorContainer>
    </div>
  );
}

import { Helmet } from "react-helmet";
import {
  ErrorContainer,
  ErrorPrompt,
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
        <ErrorPrompt>
          <span className="accent">$</span> cat {window.location.pathname}
        </ErrorPrompt>
        <ErrorHeading>404</ErrorHeading>
        <ErrorParagraph>No such file or directory.</ErrorParagraph>
        <ErrorLink to="/">~</ErrorLink>
      </ErrorContainer>
    </div>
  );
}

import { FaEye } from "react-icons/fa6";
import Card from "../UI/Card";
import {
  ProjectHeading,
  CardContainer,
  ProjectDetails,
  ProjectStack,
  ProjectDescription,
  CardFooter,
  CardLink,
} from "../styles/Project.style";
import { FiGitMerge } from "react-icons/fi";

const Project = function (props) {
  const classes = `${props.className} ${
    props.index % 2 !== 0 && props.index ? "card--pad" : ""
  }`;

  return (
    <Card className={classes}>
      <CardContainer>
        <ProjectDetails>
          <ProjectHeading>{props.title}</ProjectHeading>
          <ProjectStack>{props.stack}</ProjectStack>
          <ProjectDescription className="paragraph">
            {props.description}
          </ProjectDescription>
        </ProjectDetails>
        <CardFooter className="footer">
          <CardLink href={props.live} target="_blank" rel="noopener noreferrer">
            <span className="icon">{<FaEye />}</span>
            <span>Live</span>
          </CardLink>
          {!props.isPrivate && (
            <CardLink
              href={props.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">{<FiGitMerge />}</span>
              <span>Code</span>
            </CardLink>
          )}
        </CardFooter>
      </CardContainer>
     </Card>
  );
};

export default Project;

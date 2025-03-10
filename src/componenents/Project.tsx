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
  ProjectFeatured,
  CardLinkContainer,
} from "../styles/Project.style";
import { FiGitMerge } from "react-icons/fi";

interface Props {
  className: string;
  title: string;
  stack: string;
  live: string;
  description: string;
  isPrivate?: boolean;
  github: string;
  index: number;
  featured: boolean;
}

const Project = function (props: Props) {
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
          <CardLinkContainer>
            {props.live && <CardLink
              href={props.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">{<FaEye />}</span>
              <span>Live</span>
            </CardLink>}
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
          </CardLinkContainer>
          <CardLinkContainer>
            <ProjectFeatured>
              {props.featured ? "Featured" : "Personal"}
            </ProjectFeatured>
            {props.isPrivate && <ProjectFeatured>Private</ProjectFeatured>}
          </CardLinkContainer>
        </CardFooter>
      </CardContainer>
    </Card>
  );
};

export default Project;

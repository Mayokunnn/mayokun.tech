import { FaEye } from "react-icons/fa6";
import {
  Record,
  RecordHead,
  RecordIndex,
  Prompt,
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
  return (
    <Record className={props.className}>
      <CardContainer>
        <ProjectDetails>
          <RecordHead>
            <RecordIndex className="index">
              0{props.index}
            </RecordIndex>
            <Prompt className="prompt">&gt;</Prompt>
            <ProjectHeading>{props.title}</ProjectHeading>
          </RecordHead>
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
            <ProjectFeatured $accent={props.featured}>
              {props.featured ? "Featured" : "Personal"}
            </ProjectFeatured>
            {props.isPrivate && <ProjectFeatured>Private</ProjectFeatured>}
          </CardLinkContainer>
        </CardFooter>
      </CardContainer>
    </Record>
  );
};

export default Project;

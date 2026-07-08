import { FaExternalLinkAlt } from "react-icons/fa";
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
  CardLinkContainer,
} from "../styles/Project.style";

interface Props {
  title: string;
  role: string;
  stack: string;
  description: string;
  url: string;
  index: number;
}

const CurrentWork = function (props: Props) {
  return (
    <Record>
      <CardContainer>
        <ProjectDetails>
          <RecordHead>
            <RecordIndex className="index">0{props.index}</RecordIndex>
            <Prompt className="prompt">&gt;</Prompt>
            <ProjectHeading>{props.title}</ProjectHeading>
          </RecordHead>
          <ProjectStack>
            {props.role} · {props.stack}
          </ProjectStack>
          <ProjectDescription className="paragraph">
            {props.description}
          </ProjectDescription>
        </ProjectDetails>
        <CardFooter className="footer">
          <CardLinkContainer>
            <CardLink href={props.url} target="_blank" rel="noopener noreferrer">
              <span className="icon">
                <FaExternalLinkAlt />
              </span>
              <span>Visit</span>
            </CardLink>
          </CardLinkContainer>
        </CardFooter>
      </CardContainer>
    </Record>
  );
};

export default CurrentWork;

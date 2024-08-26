import { Helmet } from "react-helmet";
import {
  WorkContainer,
  WorkContainerHalf,
  WorkHeading,
  WorkList,
  WorkView,
  WorkWrapper,
} from "../styles/Work.style";
import { FeaturedProjects, projects } from "../utils/helpers";
import Project from "../componenents/Project";

export default function Work() {
  return (
    <WorkView>
      <Helmet>
        <title> Work | Mayokun Areola </title>
      </Helmet>
      <WorkWrapper>
        {FeaturedProjects.length > 0 && (
          <WorkContainer>
            <WorkHeading>Featured</WorkHeading>
            {FeaturedProjects.map((project) => (
              <Project
                className="card"
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                isPrivate={project.isPrivate}
                github={project.github}
                live={project.liveLink}
                stack={project.stack}
                // theme={props.theme}
              />
            ))}
          </WorkContainer>
        )}
        {projects.length && (
          <WorkContainerHalf>
            <WorkHeading className="span--2">other</WorkHeading>
            <WorkList>
              {projects.map((project, i) => (
                <Project
                  className="card"
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  isPrivate={project.isPrivate}
                  github={project.github}
                  live={project.liveLink}
                  stack={project.stack}
                  index={i}
                  // theme={props.theme}
                />
              ))}
            </WorkList>
          </WorkContainerHalf>
        )}
      </WorkWrapper>
    </WorkView>
  );
}

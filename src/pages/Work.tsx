import { Helmet } from "react-helmet";
import { Container, Heading, List, View, Wrapper } from "../styles/Work.style";
import { currentWork, projects } from "../utils/helpers";
import Project from "../componenents/Project";
import CurrentWork from "../componenents/CurrentWork";
import { MenuButtonContainer, MenuButtonWrapper, MenuLink } from "../UI/Button";

export default function Work() {
  return (
    <View>
      <Helmet>
        <title> Work | Mayokun Areola </title>
      </Helmet>
      <Wrapper>
        {currentWork.length && (
          <Container>
            <Heading>Currently building</Heading>
            <List>
              {currentWork.map((job, i) => (
                <CurrentWork
                  key={job.id}
                  title={job.title}
                  role={job.role}
                  description={job.description}
                  stack={job.stack}
                  url={job.url}
                  index={i}
                />
              ))}
            </List>
          </Container>
        )}
        {projects.length && (
          <Container>
            <Heading>Projects</Heading>
            <List>
              {projects.map((project, i) => (
                <Project
                  className=""
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  isPrivate={project.isPrivate}
                  github={project.github}
                  live={project.liveLink}
                  stack={project.stack}
                  featured={project.featured}
                  index={i}
                />
              ))}
            </List>
          </Container>
        )}
      </Wrapper>
      <MenuButtonContainer>
        <MenuButtonWrapper>
          <MenuLink to={"/resume"}>Resume</MenuLink>
          <MenuLink to={"/activity"}>Activity</MenuLink>
          <MenuLink to={"/contact"}>Contact</MenuLink>
        </MenuButtonWrapper>
      </MenuButtonContainer>
    </View>
  );
}

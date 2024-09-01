import { Helmet } from "react-helmet";
import { Container, Heading, List, View, Wrapper } from "../styles/Work.style";
import { projects } from "../utils/helpers";
import Project from "../componenents/Project";
import { MenuButtonContainer, MenuButtonWrapper, MenuLink } from "../UI/Button";

export default function Work() {
  return (
    <View>
      <Helmet>
        <title> Work | Mayokun Areola </title>
      </Helmet>
      <Wrapper>
        {projects.length && (
          <Container>
            <Heading className="span--2">Projects</Heading>
            <List>
              {projects.map((project, i) => (
                <Project
                  className="card"
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  isPrivate={project.isPrivate}
                  github={project.github}
                  live={project.liveLink}
                  stack={project.stack}
                  featured={project.featured}
                  index={i}
                  // theme={props.theme}
                />
              ))}
            </List>
          </Container>
        )}
      </Wrapper>
      <MenuButtonContainer>
        <MenuButtonWrapper>
          <MenuLink to={"/resume"}>Resume</MenuLink>
          <MenuLink to={"/contact"}>Contact</MenuLink>
        </MenuButtonWrapper>
      </MenuButtonContainer>
    </View>
  );
}

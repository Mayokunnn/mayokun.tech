import { Fragment } from "react";
import { Helmet } from "react-helmet";
import resume from "../assets/MAYOKUN AREOLA RESUME.pdf";
import { MenuButtonContainer, MenuButtonWrapper, MenuLink } from "../UI/Button";
import {
  ActionButton,
  Actions,
  Body,
  Divider,
  Line,
  DividerTitle,
  Experience,
  ExperienceAchievements,
  ExperienceContainer,
  ExperienceDate,
  ExperienceDescription,
  ExperienceItem,
  ExperienceTitle,
  Header,
  Heading,
  Skills,
  Summary,
  Title,
  Container,
  EducationTitle,
  EducationDate,
  Email,
  View,
} from "../styles/Resume.style";
import { resumeObj } from "../utils/helpers";
import { FaDownload, FaLinkedinIn } from "react-icons/fa";

const Resume = () => (
  <View>
    <Helmet>
      <title> Resume | Mayokun Areola </title>
    </Helmet>
    <Container>
      <Body>
        <Header>
          <Heading>Mayokun Areola</Heading>
          <Actions>
            <ActionButton
              href="https://www.linkedin.com/in/kelvin-mayokun-areola/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <FaLinkedinIn />
              </span>
              <span>LinkedIn</span>
            </ActionButton>
            <ActionButton
              download={true}
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <FaDownload />
              </span>
              <span>Download</span>
            </ActionButton>
          </Actions>
        </Header>
        <Title>Software Engineer - Full-Stack & Backend Systems</Title>
        <Email>kareola960@gmail.com</Email>
        <Summary>
          Software engineer building reliable product experiences across fintech,
          payments, commerce, event ticketing, and automation. I work across
          React/Next.js and TypeScript on the product side, with practical
          backend experience in Node.js, Python, relational data,
          authentication, and third-party payment integrations.
        </Summary>
        <Divider>
          <DividerTitle>Core Technologies</DividerTitle>
          <Line />
        </Divider>
        <Skills>{resumeObj.coreTechnologies.join(", ")}.</Skills>
        <Divider>
          <DividerTitle>Familiar With</DividerTitle>
          <Line />
        </Divider>
        <Skills>{resumeObj.familiarWith.join(", ")}.</Skills>
        <Divider>
          <DividerTitle>Work Experience</DividerTitle>
          <Line />
        </Divider>
        <ExperienceContainer>
          {resumeObj.experience.map((experience, i) => (
            <Experience key={i}>
              <ExperienceTitle>
                {experience.company} - {experience.position}
              </ExperienceTitle>
              <ExperienceDate>
                {experience.endDate
                  ? `${experience.startDate} - ${experience.endDate}`
                  : experience.startDate}
              </ExperienceDate>
              <ExperienceDescription>
                {experience.description}
              </ExperienceDescription>
              {experience.achievements.map((achievement, j) => (
                <ExperienceAchievements key={`${experience.id}__${j}`}>
                  <ExperienceItem>
                    <span className="icon">■</span>
                    <span>{achievement}</span>
                  </ExperienceItem>
                </ExperienceAchievements>
              ))}
            </Experience>
          ))}
        </ExperienceContainer>
        <Divider>
          <DividerTitle>Education</DividerTitle>
          <Line />
        </Divider>
        {resumeObj.education.map((education, i) => (
          <Fragment key={`${education.school}__${i}`}>
            <EducationTitle>{education.school}</EducationTitle>
            <EducationDate>
              {education.startDate} -{" "}
              {!education.endDate ? "Present" : education.endDate}
            </EducationDate>
          </Fragment>
        ))}
        <Divider>
          <DividerTitle>Hobbies</DividerTitle>
          <Line />
        </Divider>
        <Skills>{resumeObj.hobbies.join(", ")}.</Skills>
      </Body>
    </Container>
    <MenuButtonContainer>
      <MenuButtonWrapper>
        <MenuLink to={"/work"}>Work</MenuLink>
        <MenuLink to={"/activity"}>Activity</MenuLink>
        <MenuLink to={"/contact"}>Contact</MenuLink>
      </MenuButtonWrapper>
    </MenuButtonContainer>
  </View>
);

export default Resume;

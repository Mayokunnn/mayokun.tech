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
        <Title>Fullstack Developer (Frontend-Heavy)</Title>
        <Email>kareola960@gmail.com</Email>
        <Summary>
          I'm a full-stack developer with a strong focus on frontend development and smart contract engineering. I prioritize building responsive, user-centric applications while ensuring seamless backend and blockchain integration for high-performance solutions.
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
                {experience.startDate} -{" "}
                {!experience.endDate ? "Present" : experience.endDate}
              </ExperienceDate>
              <ExperienceDescription>
                {experience.description}
              </ExperienceDescription>
              {experience.achievements.map((achievement) => (
                <ExperienceAchievements key={`${experience.id}__`}>
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
        {resumeObj.education.map((education) => (
          <>
            <EducationTitle>{education.school}</EducationTitle>
            <EducationDate>
              {education.startDate} -{" "}
              {!education.endDate ? "Present" : education.endDate}
            </EducationDate>
          </>
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
        <MenuLink to={"/contact"}>Contact</MenuLink>
      </MenuButtonWrapper>
    </MenuButtonContainer>
  </View>
);

export default Resume;

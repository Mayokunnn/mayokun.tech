import { Helmet } from "react-helmet";
import profilePic from "../assets/profile.png";
import {
  Container,
  HomeView,
  ImageContainer,
  Image,
  Heading,
  Paragraph,
  ParagraphHighlight,
  MenuLink,
  Button,
} from "../styles/Home.style";
import { FaChevronRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Helmet>
        <title> Mayokun Areola </title>
      </Helmet>

      <Container>
        <HomeView>
          <ImageContainer>
            <Image src={profilePic} alt="Profile Pic"></Image>
          </ImageContainer>
          <Heading>
            <span>Hello, I'm</span> Mayokun Areola
          </Heading>
          <Paragraph>
           I'm a <ParagraphHighlight>results-driven</ParagraphHighlight> Full-stack developer with
            <ParagraphHighlight> experience </ParagraphHighlight> in frontend development and in backend development. 
            My <ParagraphHighlight>expertise</ParagraphHighlight> includes <ParagraphHighlight>HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS, Next.js, PHP, Laravel</ParagraphHighlight>.
           I am committed to
            <ParagraphHighlight> creating and optimizing  </ParagraphHighlight>
            user-friendly web solutions and interactions,
            <ParagraphHighlight> helping</ParagraphHighlight> organizations achieve their goals 
            <ParagraphHighlight> effectively.</ParagraphHighlight>.
          </Paragraph>
          <MenuLink to="/work">
            <Button>
              <span>Explore</span>{" "}
              <span className="icon">{<FaChevronRight />}</span>
            </Button>
          </MenuLink>
        </HomeView>
      </Container>
    </>
  );
}

import { Helmet } from "react-helmet";
import profilePic from "../assets/profile.png";
import {
  Container,
  HomeView,
  ImageContainer,
  Image,
  Heading,
  CommentLabel,
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
          <CommentLabel>// about</CommentLabel>
          <Paragraph>
            I'm a <ParagraphHighlight>full-stack developer</ParagraphHighlight> with a
            focus on frontend craft. I build{" "}
            <ParagraphHighlight>user-centric, high-performance applications</ParagraphHighlight>{" "}
            with <ParagraphHighlight>React, TypeScript, and Next.js</ParagraphHighlight>{" "}
            — and the backend systems that support them. I{" "}
            <ParagraphHighlight>sweat the details</ParagraphHighlight> other
            engineers skip.
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

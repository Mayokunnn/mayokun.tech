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
            I'm a frontend developer. I create interactive
            <ParagraphHighlight> experiences </ParagraphHighlight>
            with modern
            <ParagraphHighlight> web technologies. </ParagraphHighlight>
            I'm currently learning how to
            <ParagraphHighlight> design products</ParagraphHighlight> and create
            beautiful web
            <ParagraphHighlight> animations</ParagraphHighlight>.
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

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
  MenuLink,
  Button,
} from "../styles/Home.style";
import { FaChevronRight } from "react-icons/fa";
import { aboutCopy } from "../utils/helpers";

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
          <Paragraph>{aboutCopy}</Paragraph>
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

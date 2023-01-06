import {
  Facebook,
  GitHub,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import Loader from "./Loader";

const Container = styled.div`
  box-sizing: border-box;
  padding: 1.5rem 2rem;
  display: flex;
  background-color: #262626;
  color: white;
  position: relative;
  z-index: 5;
  overflow: hidden;
`;
const Left = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-sizing: border-box;
  padding-top: 5px;
  color: black;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h2`
  margin-bottom: 20px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  &:active {
    color: #bc0000;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Loader />
        <Desc>
          Aspiring web developer with a passion for creating intuitive and
          responsive user experiences. Skilled in HTML, CSS, and JavaScript,
          with experience building projects using React and NodeJS.
        </Desc>
      </Left>
      <Center>
        <Title>Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Timeline</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Resume</ListItem>
          <ListItem>People</ListItem>
          <ListItem>Projects</ListItem>
          <ListItem>Contact Me</ListItem>
        </List>
        <SocialContainer>
          <SocialIcon>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://www.facebook.com/ravipatil.ravipatil.526/"
            >
              <Facebook />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://www.instagram.com/r_a_v_i_i_i_i/"
            >
              <Instagram />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://twitter.com/home"
            >
              <Twitter />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://github.com/Ravip925"
            >
              <GitHub />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://in.pinterest.com/"
            >
              <Pinterest />
            </a>
          </SocialIcon>
        </SocialContainer>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Belgaum, Karnataka, India
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +91-9964812196
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          patilravi400@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;

import {
  Facebook,
  GitHub,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../Responsive";
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
  ${mobile({ flexDirection: "column", padding: "1.5rem 1rem" })}
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
  cursor: pointer;
  margin: 0 10px;
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

  a {
    display: block;
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    &:active {
      color: #bc0000;
    }
  }
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
          <NavLink to="/">
            <ListItem>Home</ListItem>
          </NavLink>
          <NavLink to="/about">
            <ListItem>About</ListItem>
          </NavLink>
          <NavLink to="/resume">
            <ListItem>Resume</ListItem>
          </NavLink>
          <NavLink to="/projects">
            <ListItem>Projects</ListItem>
          </NavLink>
          <NavLink to="/contact">
            <ListItem>Contact</ListItem>
          </NavLink>
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

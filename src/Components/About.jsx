import { useLayoutEffect } from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";

const AboutWrapper = styled.section`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  font-family: "Raleway", sans-serif;
  background-color: #01e37f;
  ${mobile({ overflow: "hidden", height: "130vh", backgroundColor: "white" })}
`;
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  margin: auto;
  padding: 2em 2em;
  min-width: 600px;
  background-color: white;
  border-radius: 5px;
  height: 87vh;
  width: 70%;
  ${mobile({
    overflow: "hidden",
    height: "130vh",
    padding: "1rem",
    borderRadius: "none",
  })}

  img {
    max-width: 100%;
    filter: drop-shadow(3px 3px 5px #a6a6a6);
    animation: rotate 8s linear infinite;
  }
  .react_png {
    width: 28%;
    position: absolute;
    left: 36.5%;
    animation: none;
  }
  .product__photo {
    position: relative;
    ${mobile({ display: "none" })}
  }

  .photo-container {
    position: absolute;
    left: -5em;
    display: grid;
    grid-template-rows: 1fr;
    width: 100%;
    height: 78vh;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }

  .photo-main {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    border-radius: 10px;
    background-color: #aedaa6;
    background: radial-gradient(#ffffff, #aedaa6);
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .photo-album {
    padding: 0.7em 1em;
    border-radius: 0 0 6px 6px;
    background-color: #fff;
  }
  .product__info {
    padding: 2em 0;
  }

  .title {
    h2 {
      margin-bottom: 0.1em;
      font-size: 1.8em;
      font-weight: 800;
      text-shadow: none;
      text-align: start;
      font-family: "Montserrat";
      text-transform: none;
      text-transform: uppercase;
      ${mobile({ marginLeft: "1.5rem" })}
    }
  }

  .description {
    clear: left;
    margin: 2em 0;
    line-height: 25px;
    white-space: pre-line;
    font-family: "roboto mono", sans-serif;
    overflow-wrap: break-word;
    ${mobile({ margin: "2rem 1.5rem", width: "100%" })}
    h3 {
      margin-bottom: 1em;
    }
  }
`;

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <AboutWrapper>
      <Wrapper className="product">
        <div className="product__photo">
          <div className="photo-container">
            <div className="photo-main">
              <img src="https://i.ibb.co/mN4Z4cq/mern.png" alt="cover" />
              <img
                className="react_png"
                src="https://i.ibb.co/wL1B7YK/react.png"
                alt="cover"
              />
            </div>
          </div>
        </div>
        <div className="product__info">
          <div className="title">
            <h2>About Me</h2>
          </div>
          <div className="description">
            I'm a <strong>MERN</strong> developer seeking a beginner role to
            enhance and explore my technical knowledge gained at{" "}
            <u>
              <i>PrepBytes</i>
            </u>
            . My primary focus is developing responsive web applications for
            <strong> web</strong>, <strong>mobile</strong> &{" "}
            <strong>tablet </strong>
            and strengthening the security level for <u>backend</u> apps.
            Looking to start my career as an entry-level software developer with
            a reputed firm driven by technology and interfaces. <br />
            <br />
            Strong in design and integration with intuitive problem-solving
            skills. Proficient in{" "}
            <strong>HTML, CSS, JavaScript, Reactjs, Nodejs</strong>, and{" "}
            <strong>MongoDB</strong>. Passionate about implementing and
            launching new projects. Ability to translate business requirements
            into technical solutions.
          </div>
        </div>
      </Wrapper>
    </AboutWrapper>
  );
};

export default About;

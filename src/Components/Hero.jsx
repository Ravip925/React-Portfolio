import styled from "styled-components";
import "../app.sass";
import { mobile } from "../Responsive";

const HeroContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: -6;
  height: 500px;
  color: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;

  ${mobile({
    height: "350px",
  })}

  #stars,#stars2,#stars3 {
    ${mobile({
      display: "none",
    })}
  }
`;
const TextContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  ${mobile({ height: "25vh", padding: "0 10%", gap: "5px" })}

  h1 {
    width: 100%;
    width: 30ch;
    height: 45px;
    box-sizing: border-box;
    padding: 0 0 50px 0;
    text-align: center;
    font-size: 45px;
    text-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    text-transform: uppercase;
    letter-spacing: 5px;
    font-family: "work sans", sans-serif;
    font-weight: 900;
    border-right: 0;
    white-space: nowrap;
    overflow: hidden;
    animation: animated-text__1 5s steps(40, end) 1s 1 normal both,
      animated-cursor__1 900ms steps(40, end) 7;

    ${mobile({
      fontSize: "1.2rem",
      width: "auto",
      letterSpacing: "0",
      paddingBottom: "0",
      animation: "none",
    })}

    @keyframes animated-text__1 {
      from {
        width: 0;
      }
      to {
        width: 56rem;
      }
    }
    @keyframes animated-cursor__1 {
      from {
        border-right: 5px solid;
        border-right-color: red;
      }
      to {
        border-right-color: #55555520;
        border-right: 0;
      }
    }
  }
  h2 {
    width: 100%;
    width: 28ch;
    box-sizing: border-box;
    text-align: center;
    font-weight: 400;
    white-space: nowrap;
    border-right: 0;
    overflow: hidden;
    letter-spacing: 5px;
    animation: animated-text__2 5s steps(30, end) 1s 1 normal both,
      animated-cursor__2 900ms steps(30, end) 6;
    animation-delay: 7s;

    ${mobile({
      fontSize: "1.2rem",
      width: "auto",
      letterSpacing: "0",
      animation: "none",
    })}

    @keyframes animated-text__2 {
      from {
        width: 0;
      }
      to {
        width: 28rem;
      }
    }
    @keyframes animated-cursor__2 {
      from {
        border-right: 3px solid;
        border-right-color: rgba(250, 0, 0, 0.9);
      }
      to {
        border-right-color: #55555520;
        border-right: 0;
      }
    }
  }
  h4 {
    font-weight: 500;
    text-align: center;
    letter-spacing: 3px;
    white-space: nowrap;
    overflow: hidden;
    animation: animated-text__3 5s steps(30, end) 1s 1 normal both,
      animated-cursor__3 900ms steps(30, end) infinite;
    animation-delay: 13s;

    ${mobile({
      fontSize: "0.6rem",
      width: "100%",
      letterSpacing: "0",
      marginTop: "15px",
      animation: "none",
      overflow: "visible",
    })}

    @keyframes animated-text__3 {
      from {
        width: 0;
      }
      to {
        width: 43rem;
      }
    }
    @keyframes animated-cursor__3 {
      from {
        border-right: 3px solid;
        border-color: red;
      }
      to {
        border-right: 3px solid;
        border-color: #55555520;
      }
    }
  }
`;

const Hero = () => {
  return (
    <HeroContainer id="main">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <TextContainer>
        <h1>HI, WELCOME TO MY PORTFOLIO</h1>
        <h2>I AM RAVICHANDRA PATIL</h2>
        <h4> I am a full-stack developer specializing in React and Node.js</h4>
      </TextContainer>
    </HeroContainer>
  );
};

export default Hero;

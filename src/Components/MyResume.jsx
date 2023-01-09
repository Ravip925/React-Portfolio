import styled from "styled-components";
import { mobile } from "../Responsive";
import DownloadButton from "./DownloadButton";

const Container = styled.div`
  height: 102vh;
  background: #f0f2f5;
  font-family: "Muli";
  color: rgba(51, 51, 51, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({
    height: "160vh",
  })}
`;
const ResumeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentBox = styled.div`
  display: flex;
  gap: 20px;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  height: 85vh;
  background: #f1f3f6;
  border-radius: 20px;
  box-shadow: inset 0 0 15px rgba(55, 84, 170, 0),
    inset 0 0 20px rgba(255, 255, 255, 0), 7px 7px 15px rgba(55, 84, 170, 0.15),
    -7px -7px 20px rgba(255, 255, 255, 1),
    inset 0px 0px 4px rgba(255, 255, 255, 0.2);

  ${mobile({
    flexDirection: "column",
    height: "140vh",
    width: "90%",
  })}
`;

const Left = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  overflow: hidden;

  ${mobile({
    flex: "0.4",
  })}
  img {
    width: 100%;
    height: 100%;
    background-size: cover;
    object-fit: cover;
    background-position: center;

    --g: #0000, #000 0.5deg 90deg, #0000 91deg;
    --m: conic-gradient(from 45deg, var(--g)) 20px 0 no-repeat,
      conic-gradient(from 135deg, var(--g)) 0 20px no-repeat,
      conic-gradient(from 225deg, var(--g)) -20px 0 no-repeat,
      conic-gradient(from 315deg, var(--g)) 0 -20px no-repeat;
    -webkit-mask: var(--m);
    mask: var(--m);
    transition: 0.3s linear;
    filter: grayscale(0.5);
    cursor: pointer;

    &:hover {
      -webkit-mask-position: 0 0;
      mask-position: 0 0;
      filter: grayscale(0);
      transform: scale(1.1);
    }
  }
`;
const Right = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .h1 {
    font-size: 1.8em;
    font-weight: 800;
    text-shadow: none;
    text-align: start;
    font-family: "Montserrat";
    text-transform: none;
    position: absolute;
    top: 0;
    left: 0;

    ${mobile({
      marginTop: "15px",
    })}
  }
`;
const TextContainer = styled.div`
  width: 100%;
  height: 90%;
  position: relative;
  top: 20px;
  display: flex;
  gap: 3%;
  flex-direction: column;

  ${mobile({
    marginTop: "20px",
  })}
`;
const TextBox = styled.div`
  width: 100%;
  height: 34vh;
  overflow: hidden;
  div {
    position: relative;
    div {
      margin: 20px 0 0 40px;
    }
    .p1,
    .p2 {
      height: 0;
      width: 3px;
      background-color: #26de81;
      border-radius: 3px;
      position: absolute;
      left: 6px;
      top: 0px;
    }
    .p1 {
      animation: bar1 3s linear forwards;
    }
    .p2 {
      animation: bar2 2s linear forwards 3.7s;
    }

    @keyframes bar1 {
      0% {
        height: 0;
      }
      100% {
        height: 72%;
      }
    }
    @keyframes bar2 {
      0% {
        height: 0;
      }
      100% {
        height: 60px;
      }
    }
    span::before {
      content: none;
    }
    span::after {
      content: none;
    }
    #span1,
    #span2,
    #span3 {
      display: inline-block;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #fc5c65;
      position: absolute;
    }
    #span1 {
      top: 8vh;
      left: 0;
      opacity: 0;
      animation: sphere1 0.5s linear forwards 1.2s;
    }
    @keyframes sphere1 {
      100% {
        opacity: 1;
      }
    }
    #span2 {
      top: 74%;
      opacity: 0;
      animation: sphere2 0.5s linear forwards 3s;
    }
    @keyframes sphere2 {
      100% {
        opacity: 1;
      }
    }
    #span3 {
      top: 8.5vh;
      left: 0;
      opacity: 0;
      animation: sphere3 0.4s linear forwards 5.7s;
    }
    @keyframes sphere3 {
      100% {
        opacity: 1;
      }
    }
  }
  h3 {
    font-size: 1.4em;
    margin: 0.8rem 0;
    font-family: "Montserrat", sans-serif;
  }
  h5 {
    font-size: 1em;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
  }
  hr {
    border: none;
    margin: 10px 0;
    height: 1.5px;
    background-color: #c1c1c1;
  }
  p {
    font-size: 0.9em;
    margin: 5px 0;
  }
`;

const MyResume = () => {
  return (
    <Container>
      <ResumeWrapper>
        <ContentBox>
          <Left>
            <img src="https://i.ibb.co/p2WDjDT/resume.jpg" alt="cover" />
          </Left>
          <Right>
            <h2 className="h1">RESUME</h2>
            <TextContainer>
              <TextBox>
                <div>
                  <div>
                    <h3>Education</h3>
                    <hr />
                    <h5>Maratha Mandal's Compo. Pre-University College</h5>
                    <p>Science</p>
                    <br />

                    <h5>Maratha Mandal's Engineering College</h5>
                    <p>ME</p>
                  </div>
                  <p className="p1"></p>
                  <span id="span1"></span>
                  <span id="span2"></span>
                </div>
              </TextBox>
              <TextBox style={{ height: "22vh" }}>
                <div>
                  <div>
                    <h3>Certification</h3>
                    <hr />
                    <h5>Full-Stack (MERN) Web Developer</h5>
                    <p>PrepBytes</p>
                  </div>
                  <p className="p2"></p>
                  <span id="span3"></span>
                </div>
              </TextBox>
              <DownloadButton />
            </TextContainer>
          </Right>
        </ContentBox>
      </ResumeWrapper>
    </Container>
  );
};

export default MyResume;

import styled from "styled-components";
import { mobile } from "../Responsive";
import "./Projects.css";

const Container = styled.div`
  width: 100%;
  height: 235vh;
  margin: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: #71d0f9;
  ${mobile({
    height: "205vh",
  })}

  .H2 {
    margin-top: -5%;
    color: white;
    font-size: 3rem;
    font-weight: bold;
    text-shadow: 0px 0px 0 rgb(245, 245, 245), 1px 0px 0 rgb(235, 235, 235),
      2px 0px 0 rgb(224, 224, 224), 3px 0px 0 rgb(214, 214, 214),
      4px 0px 0 rgb(204, 204, 204), 5px 0px 0 rgb(194, 194, 194),
      6px 0px 0 rgb(184, 184, 184), 7px 0px 0 rgb(173, 173, 173),
      8px 0px 0 rgb(163, 163, 163), 9px 0px 0 rgb(153, 153, 153),
      10px 0px 0 rgb(143, 143, 143), 11px 0px 10px rgba(0, 0, 0, 0.42),
      11px 0px 1px rgba(0, 0, 0, 0.5), 0px 0px 10px rgba(0, 0, 0, 0.2);

    ${mobile({
      fontSize: "2rem",
      marginTop: "-10%",
    })}
  }
`;
const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  height: auto;
  background: #71d0f9;
  border-radius: 20px;
  box-shadow: 19px 19px 37px #2d5364, -19px -19px 37px #b5ffff;

  ${mobile({
    width: "100%",
  })}
`;
const ProjectsBoxes = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px 0;
  width: 100%;
  height: 100%;
`;
const Top = styled.div`
  width: 90%;
  height: 50vh;
  background-color: #ffff00;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;
const Middle = styled.div`
  width: 90%;
  height: 50vh;
  background-color: #ffff00;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;
const Bottom = styled.div`
  width: 90%;
  height: 60vh;
  background-color: #ffff00;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;
const Left = styled.div`
  flex: 1;
  height: 100%;
  background-color: #a6f0cb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 0.3s all;
  overflow: hidden;
  ${mobile({
    display: "none",
  })}

  img {
    width: 60%;
    margin-bottom: 30px;
    background-position: center;
    animation: rotate 7s linear infinite;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &:hover {
    transform: scale(0.9);
  }
`;
const Right = styled.div`
  overflow: hidden;
  flex: 1.2;
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
`;

const Projects = () => {
  return (
    <Container>
      <h2 className="H2">MY PROJECTS</h2>
      <ProjectsWrapper>
        <ProjectsBoxes>
          <Top>
            <Left>
              <img src="https://i.ibb.co/mN4Z4cq/mern.png" alt="cover" />
              <img
                className="react_img"
                style={{ width: "18%", animation: "none" }}
                src="https://i.ibb.co/wL1B7YK/react.png"
                alt="cover"
              />
              <h2>MERN Stack</h2>
            </Left>
            <Right>
              <a
                href="https://e-commerce-ravi.netlify.app/"
                className="box top-box-1"
              >
                <div class="card-body" style={{ animationDelay: "0.5s" }}>
                  <div class="front top1-front">
                    <div class="text">
                      <h4>Ecommerce App</h4>
                    </div>
                  </div>
                  <div class="back top1-back">
                    <div class="text">
                      <h4>Ecommerce App</h4>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://bookstore-crud.netlify.app/"
                className="box top-box-2"
              >
                <div class="card-body">
                  <div class="front top2-front">
                    <div class="text">
                      <h4>Book Store</h4>
                    </div>
                  </div>
                  <div class="back top2-back">
                    <div class="text">
                      <h4>Book Store</h4>
                    </div>
                  </div>
                </div>
              </a>
            </Right>
          </Top>
          <Middle>
            <Right>
              <a
                href="https://react-blog-app-ravi.netlify.app/"
                className="box top-box-1"
              >
                <div class="card-body" style={{ animationDelay: "0.1s" }}>
                  <div class="front middle1-front">
                    <div class="text">
                      <h4>Blog</h4>
                    </div>
                  </div>
                  <div class="back middle1-back">
                    <div class="text">
                      <h4>Blog</h4>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://blog-app-backend-ravi.netlify.app/"
                className="box top-box-2"
              >
                <div class="card-body" style={{ animationDelay: "2.5s" }}>
                  <div class="front middle2-front">
                    <div class="text">
                      <h4>Blog MERN App</h4>
                    </div>
                  </div>
                  <div class="back middle2-back">
                    <div class="text">
                      <h4>Blog MERN App</h4>
                    </div>
                  </div>
                </div>
              </a>
            </Right>
            <Left>
              <img src="https://i.ibb.co/VVGxQK8/reactjs.png" alt="cover" />
              <h2>React</h2>
            </Left>
          </Middle>
          <Bottom>
            <Left>
              <img
                id="js_img"
                src="https://i.ibb.co/7XvfQqB/js.png"
                alt="cover"
              />
              <h2>JavaScript</h2>
            </Left>
            <Right style={{ flex: 1.5 }}>
              <a
                href="https://ravip925.github.io/PrepByte-Projects/JavaScript_Projects/Digital%20Clock/index.html"
                className="box bottom-box-1"
                style={{ width: "45%", marginLeft: "-50%" }}
              >
                <div class="card-body" style={{ animationDelay: "3s" }}>
                  <div class="front bottom1-front">
                    <div class="text">
                      <h4>Digital Clock</h4>
                    </div>
                  </div>
                  <div class="back bottom1-back">
                    <div class="text">
                      <h4>Digital Clock</h4>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://ravip925.github.io/PrepByte-Projects/JavaScript_Projects/ToDo%20List%20JS/index.html"
                className="box bottom-box-2"
              >
                <div class="card-body" style={{ animationDelay: "0.7s" }}>
                  <div class="front bottom2-front">
                    <div class="text">
                      <h4>Todo List JS</h4>
                    </div>
                  </div>
                  <div class="back bottom2-back">
                    <div class="text">
                      <h4>Todo List JS</h4>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://portfolio-ravipatil.netlify.app/"
                className="box bottom-box-3"
              >
                <div class="card-body" style={{ animationDelay: "1.6s" }}>
                  <div class="front bottom3-front">
                    <div class="text">
                      <h4>PortFolio JS</h4>
                    </div>
                  </div>
                  <div class="back bottom3-back">
                    <div class="text">
                      <h4>PortFolio JS</h4>
                    </div>
                  </div>
                </div>
              </a>
            </Right>
          </Bottom>
        </ProjectsBoxes>
      </ProjectsWrapper>
    </Container>
  );
};

export default Projects;

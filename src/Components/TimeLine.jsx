import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../Responsive";
import "./TimeLine.css";
const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, #000111 0%, #000000 100%);
`;

const InnerContainer = styled.div`
  margin: 10px 150px 10px 150px;
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${mobile({ width: "90%", margin: "15px" })}
`;
const Title = styled.h3`
  margin: 30px 0px 0 20px;
  color: aliceblue;
  text-align: center;
  ${mobile({ margin: "10px 10px" })}
`;

const Wrapper = styled.div`
  width: 100%;
  background: linear-gradient(109.61deg, #4c4f5a 4.26%, #202125 84.84%);
  border-radius: 10px;
  height: auto;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
  ${mobile({ paddingTop: "30%" })}
`;
const Left = styled.div`
  margin-top: -240px;
  flex: 1;
  gap: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ marginRight: "-10%", marginBottom: "25vh" })}
`;
const Right = styled.div`
  margin-top: 280px;
  flex: 1;
  gap: 120px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  ${mobile({ marginLeft: "-95%" })}
`;
const Items = styled.div``;

const ButtonContainer = styled.div`
  margin: 80px 0;
  box-sizing: border-box;
`;

const Img = styled.img`
  position: absolute;
  width: 11vw;
  ${mobile({ display: "none" })}
`;
const ImgIcon = styled.img`
  width: 55px;
`;

const TimeLine = () => {
  return (
    <>
      <Container>
        <InnerContainer>
          <Title>HERE IS MY TIMELINE TO BECOME A FULL-STACK DEVELOPER</Title>
          <Wrapper>
            <Left>
              <Items>
                <div className="container">
                  <div className="card">
                    <div className="face face1">
                      <div className="content">
                        <i className="fa fa-html5"></i>
                        <h3>HTML-5</h3>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <p>
                          HTML (Hypertext Markup Language) is a language used to
                          structure and format content on the web. It is used to
                          structure the content of a webpage, with different
                          elements representing different parts of the content.
                          HTML documents are saved with the .html.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Items>
              <Img
                src="https://i.ibb.co/gw6jwh4/green-arrow-L.png"
                style={{ top: "9%", right: "35%" }}
              />
              <Items>
                <div className="container">
                  <div className="card">
                    <div className="face face1">
                      <div className="content">
                        <i className="fab fa-js"></i>
                        <h3>JavaScript</h3>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <p>
                          JavaScript is a programming language that is commonly
                          used to add interactivity to web pages. It is often
                          used to create things like Dynamic content, Form
                          validation, Asynchronous requests, and Animations.
                          JavaScript is a powerful and flexible language.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Items>
              <Img
                src="https://i.ibb.co/kDSWZ8P/green-arrow-R.png"
                style={{ width: "12vw", top: "24%", left: "30%" }}
              />
              <Items>
                <div className="container">
                  <div className="card">
                    <div className="face face1">
                      <div className="content">
                        <ImgIcon
                          style={{ width: "70px" }}
                          src="https://i.ibb.co/Q8jC2Px/node.png"
                        />
                        <h3>Node.js</h3>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <p>
                          Node.js is a JavaScript runtime built on Chrome's V8
                          engine. It allows you to run js on the server side,
                          which can be useful for building server-side
                          applications with js. Node.js is built on an
                          event-driven architecture, which makes it efficient
                          and scalable.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Items>
              <Img
                src="https://i.ibb.co/gw6jwh4/green-arrow-L.png"
                style={{ top: "40%", right: "35%" }}
              />
            </Left>
            <Right>
              <Items>
                <div className="container">
                  <div className="card">
                    <div className="face face1">
                      <div className="content">
                        <i className="fa fa-css3"></i>
                        <h3>CSS3</h3>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <p>
                          CSS (Cascading Style Sheets) is a stylesheet language
                          used to describe the look and formatting of a document
                          written in HTML. It is used to control the appearance
                          of web pages. It is used to create more advanced
                          layouts and responsive designs that adjust to
                          different screen sizes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Items>
              <Img
                src="https://i.ibb.co/kDSWZ8P/green-arrow-R.png"
                style={{ width: "12vw", top: "54%", left: "30%" }}
              />
              <Items>
                <div className="container">
                  <div className="card">
                    <div className="face face1">
                      <div className="content">
                        <ImgIcon src="https://i.ibb.co/NLsq7wj/react.png" />
                        <h3>React</h3>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <p>
                          React is a JavaScript library for building user
                          interfaces. It is often used for building single-page
                          applications and mobile applications. React allows you
                          to create reusable components and it uses virtual DOM
                          to update changes on interface. This makes react
                          faster and responsive.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Items>
              <Img
                src="https://i.ibb.co/gw6jwh4/green-arrow-L.png"
                style={{ top: "70%", right: "35%" }}
              />
              <Items>
                <div className="container">
                  <div className="card">
                    <div className="face face1">
                      <div className="content">
                        <ImgIcon
                          style={{ width: "70px" }}
                          src="https://i.ibb.co/nRrXKFV/mongodb1.png"
                        />
                        <h3>MongoDB</h3>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <p>
                          MongoDB is a cross-platform, document-oriented
                          database program. It is NoSQL db and it uses JSON-like
                          documents with optional schemas. It has ability to
                          store large amounts of data in a flexible, JSON-like
                          format called BSON. This makes it easy to store and
                          work with unstructured data,
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Items>
            </Right>
          </Wrapper>
          <ButtonContainer>
            <NavLink to="/about" className="button-anon-pen">
              <span>To know more about me, click here.</span>
            </NavLink>
          </ButtonContainer>
        </InnerContainer>
      </Container>
    </>
  );
};

export default TimeLine;

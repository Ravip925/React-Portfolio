import styled from "styled-components";
import "./Contact.css";

const Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: #c8e7d8;
  color: #4e5e72;
  text-align: center;
  font-family: monospace;
  overflow: hidden;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contact = () => {
  return (
    <Container>
      <div class="wrapper centered">
        <form class="letter">
          <div class="side">
            <h1 className="cont_h1">Contact Me</h1>
            <p>
              <textarea placeholder="Your message"></textarea>
            </p>
          </div>
          <div class="side">
            <p>
              <input type="text" placeholder="Your name" />
            </p>
            <p>
              <input type="email" placeholder="Your email" />
            </p>
            <p>
              <button id="sendLetter">Send</button>
            </p>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Contact;

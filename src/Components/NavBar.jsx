import styled from "styled-components";
import Bar from "./Bar";
import "../index.scss";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  width: 100%;
`;

const NavbarWrapper = styled.nav`
  width: 100%;
  box-sizing: border-box;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #282828;
  position: relative;
  z-index: 1;
  overflow: hidden;
  h2 {
    position: relative;
    z-index: 3;
    display: inline-block;
    color: white;
    font-size: 2rem;
    font-weight: 800;
    cursor: pointer;
    text-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    text-transform: uppercase;
    letter-spacing: 5px;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <NavbarWrapper>
        <h2>
          <NavLink to="/">My Portfolio</NavLink>
        </h2>
        <div className="request-loader">
          <Bar/>
        </div>
      </NavbarWrapper>
    </Container>
  );
};
export default Navbar;

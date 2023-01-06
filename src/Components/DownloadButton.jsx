import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 10vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0;
  text-align: center;
`;
const Wrapper = styled.div`
  position: relative;
  width: 73%;
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: 0.3s all;

  &:hover {
    transform: translateY(-8px);
  }

  input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    cursor: pointer;
  }
  span {
    text-align: center;
    width: 100%;
    padding: 20px;
    background: linear-gradient(90deg, #0bc467 50%, #0085f2 50%) no-repeat;
    background-position: right center;
    background-size: 200% 100%;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;

    &:hover,
    .radio:hover + span {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
    }

    &:active {
      box-shadow: none;
      transform: scale(0.95);
      transition: all 0.3s ease;
    }
  }
  .open {
    display: none;
  }
  .radio:checked ~ span {
    animation: loading 1.5s linear forwards 1;

    @keyframes loading {
      0% {
        height: 100%;
        padding: 20px;
        background-position: right center;
        color: #0d3f67;
        box-shadow: none;
        pointer-events: none;
      }
      2% {
        height: 5px;
        padding: 0 20px;
      }
      95% {
        height: 5px;
        padding: 0 20px;
        background-position: left center;
      }
      100% {
        height: 100%;
        padding: 18px 20px;
        background-position: left center;
        color: #fff;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        z-index: 4;
        pointer-events: auto;
      }
    }
  }
  .radio:checked + .download {
    display: none;
  }
  .radio:checked ~ .open {
    display: block;
  }
`;

const DownloadButton = () => {
  const [click, setClick] = useState(true);
  const downloadRes = () => {
    fetch("Ravichandra_Patil_Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Ravichandra_Patil_Resume.pdf";
        alink.click();
      });
    });
  };

  const handleClick = () => {
    if(click){
        downloadRes();
      }
    setClick(false);
  };
  
  return (
    <Container>
      <Wrapper onClick={handleClick}>
        <input type="radio" class="radio" />
        <span class="download">Click to download my resume</span>
        <span class="open">Downloaded</span>
      </Wrapper>
    </Container>
  );
};

export default DownloadButton;

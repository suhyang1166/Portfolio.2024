import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import arr from "../../../assets/json/arr.json";
import styled, { keyframes, css } from "styled-components";
import Green from "./Green";
import LottieIntro from "./LottieIntro";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const fadeOn = keyframes`
  0% { opacity: 0; width: 0; }
  100% { opacity: 1; width: 100%; }
`;

const MainWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  ${({ shouldFadeOn }) =>
    shouldFadeOn &&
    css`
      animation: ${fadeOn} 1.5s forwards;
      animation-delay: 1.5s;
    `}
`;

const Title = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18vw;
    text-align: center;
    font-family: "G B";
    line-height: 16vw;
  }
`;

const textMove = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const hide = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const TextAni = styled.div`
  width: 100%;
  height: 5.8vmin;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 100;
  background: #000;
  color: #bbf744;
`;

const TextMove = styled.div`
  position: relative;
  width: 350vmin;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  ${({ hideText }) =>
    hideText &&
    css`
      animation: ${hide} 1s forwards;
      animation-delay: 3s;
    `}
  p {
    width: 100%;
    font-family: "G L";
    font-size: 3vmin;
    text-align: center;
    line-height: 5.4vmin;
    animation: ${textMove} 15s linear infinite;
    animation-delay: 5s;
    /* opacity: 0; */
  }
`;

const ArrLottie = styled(Lottie)`
  width: 150px;
  height: 150px;
  margin-bottom: 50px;
  opacity: 0;
  ${({ shouldFadeOn }) =>
    shouldFadeOn &&
    css`
      animation: ${fadeOn} 1s forwards;
      animation-delay: 3.5s;
    `}
`;

const Intro = () => {
  const [shouldFadeOut, setShouldFadeOut] = useState(false);
  const [shouldFadeOn, setShouldFadeOn] = useState(false);
  const [hideText, setHideText] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setShouldFadeOut(true);
      setShouldFadeOn(true);
    }, 800);

    const hideTimer = setTimeout(() => {
      setHideText(true);
    }, 1000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <Container>
      {/* <LottieIntro shouldFadeOut={shouldFadeOut} /> */}
      <MainWrap shouldFadeOn={shouldFadeOn}>
        <Title>
          <h1>SUHYANG</h1>
          <TextAni>
            <TextMove hideText={hideText}>
              <p>
                Hello, Thank you for visiting my site! Click the menu for more
                information
              </p>
              <p>
                Hello, Thank you for visiting my site! Click the menu for more
                information
              </p>
              <p>
                Hello, Thank you for visiting my site! Click the menu for more
                information
              </p>
            </TextMove>
          </TextAni>
        </Title>
        <Green shouldFadeOn={shouldFadeOn} />
        <ArrLottie shouldFadeOn={shouldFadeOn} animationData={arr} />
      </MainWrap>
    </Container>
  );
};

export default Intro;

import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import arr from "../../../assets/json/arr.json";
import styled, { keyframes, css } from "styled-components";
import Green from "./Green";

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
  ${({ $shouldFadeOn }) =>
    $shouldFadeOn &&
    css`
      animation: ${fadeOn} 1.5s forwards;
      animation-delay: 1.5s;
    `}
`;

const Title = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const Name = styled.h1`
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 17.5vw;
  text-align: center;
  font-family: "G B";
  line-height: 16vw;
`;

const textMove = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const hide = keyframes`
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const textFadeOn = keyframes`
  0% { 
    opacity: 0; 
    width: 0; 
    transform: translateX(50%); 
  }
  100% { 
    opacity: 1; 
    width: 100%; 
    transform: translateX(0); 
  }
`;

const TextAni = styled.div`
  width: 100%;
  height: 5.8vmin;
  position: absolute;
  top: 48%;
  left: 0;
  transform: translateY(-50%);
  z-index: 100;
  background: #000;
  color: #bbf744;
  overflow: hidden;
  ${({ $shouldFadeOn }) =>
    $shouldFadeOn &&
    css`
      animation: ${textFadeOn} 1s forwards;
      animation-delay: 1.5s;
    `}
`;

const TextMove = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 5.8vmin;
  transform: translateX(0);
  ${({ $hideText }) =>
    $hideText &&
    css`
      animation: ${hide} 4s forwards, ${textMove} 12s linear infinite 3s;
    `}
`;

const Text = styled.div`
  display: flex;
  font-family: "G L";
  font-size: 3vmin;
  line-height: 5.4vmin;
  white-space: nowrap;
`;

const ArrLottie = styled(Lottie)`
  position: absolute;
  bottom: 0;
  width: 150px;
  height: 150px;
  margin-bottom: 50px;
  opacity: 0;
  ${({ $shouldFadeOn }) =>
    $shouldFadeOn &&
    css`
      animation: ${fadeOn} 1s forwards;
      animation-delay: 2.5s;
    `}
`;

const Intro = () => {
  const [shouldFadeOn, setShouldFadeOn] = useState(false);
  const [hideText, setHideText] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setShouldFadeOn(true);
    }, 800);

    const hideTimer = setTimeout(() => {
      setHideText(true);
    }, 2000); // Ensure text is visible for 2 seconds before starting animation

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <Container>
      <MainWrap $shouldFadeOn={shouldFadeOn}>
        <Title>
          <Name $shouldFadeOn={shouldFadeOn}>SUHYANG</Name>
          <TextAni $shouldFadeOn={shouldFadeOn}>
            <TextMove $hideText={hideText}>
              <Text>
                Hello and welcome to my site! I appreciate your visit and am
                excited to showcase my work and skills. Combining innovative
                design with functionality, I create solutions that are not only
                visually appealing but also highly effective in meeting user
                needs. I ensure a perfect balance between design and user
                experience, striving to create interfaces that are both
                beautiful and intuitive to use. I bring your ideas to life by
                applying user-centered design principles and leveraging
                cutting-edge technology to build solutions that stand out.
              </Text>
            </TextMove>
          </TextAni>
          <ArrLottie $shouldFadeOn={shouldFadeOn} animationData={arr} />
        </Title>
        <Green $shouldFadeOn={shouldFadeOn} />
      </MainWrap>
    </Container>
  );
};

export default Intro;

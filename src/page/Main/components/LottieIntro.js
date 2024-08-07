import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import introLottie from "../../../assets/json/intro.json";
import styled, { keyframes, css } from "styled-components";

// 사라지는 애니메이션 정의
const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { 
    opacity: 0;
    display: none;
  }
`;

const StyledLottie = styled(Lottie)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  ${({ $shouldFadeOut }) =>
    $shouldFadeOut &&
    css`
      animation: ${fadeOut} 0.8s forwards;
      animation-delay: 0.8s;
    `}
`;

const LottieIntro = () => {
  const [shouldFadeOut, setShouldFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setShouldFadeOut(true);
    }, 800);

    return () => {
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <StyledLottie animationData={introLottie} $shouldFadeOut={shouldFadeOut} />
  );
};

export default LottieIntro;

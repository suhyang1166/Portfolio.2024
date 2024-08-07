import React, { useEffect } from "react";
import styled from "styled-components";
import green from "../../../assets/img/deco/3d.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImgWrap = styled.div`
  height: 300vh;
  position: absolute;
  top: 100px;
  right: 80px;
  z-index: -100;
`;

const Green3D = styled.div`
  width: 350px;
  height: 380px;
  position: sticky;
  top: 60px;
  background-image: url(${green});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transform: rotate3d(1, 1, 10, 45deg);
  opacity: ${({ $shouldFadeOn }) => ($shouldFadeOn ? 1 : 0)};
  transition: opacity 1.5s;

  @media (max-width: 1270px) {
    width: 200px;
  }
  @media (max-width: 600px) {
    width: 150px;
  }
`;

const Green = ({ $shouldFadeOn }) => {
  useEffect(() => {
    gsap.to("#green", {
      scrollTrigger: {
        trigger: "#greenWrap",
        start: "top top",
        end: "+=5000",
        scrub: 3,
      },
      scale: 0.8,
      rotateZ: 420,
      x: 50,
      y: 200,
      duration: 2,
      zIndex: -100,
    });
  }, []);

  return (
    <ImgWrap id="greenWrap">
      <Green3D id="green" $shouldFadeOn={$shouldFadeOn} />
    </ImgWrap>
  );
};

export default Green;

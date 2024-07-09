import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import bg from "../../assets/img/deco/deco-bg.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";

gsap.registerPlugin(ScrollTrigger);

const BG = bg;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Background = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${BG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.2;
  z-index: -1000;
  transform: scale(0);
`;

const BR = styled.div`
  width: 100%;
  height: 50vh;
`;

const MyContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Form = () => {
  const BgRef = useRef(null);

  useEffect(() => {
    const bgContainer = BgRef.current;

    gsap.to(bgContainer, {
      scrollTrigger: {
        trigger: bgContainer,
        start: "top top", // 시작 지점을 스크롤 요소의 맨 위로 설정
        end: "bottom 100vh", // 끝 지점을 스크롤 요소의 맨 아래로 설정
        scrub: 1,
        markers: true,
      },
      scale: 1,
      duration: 3,
    });
  }, []);

  return (
    <Container>
      <Background ref={BgRef} />
      <MyContent>
        <BR />
        <About />
        <BR />
        <Project />
        <BR />
        <Contact />
      </MyContent>
    </Container>
  );
};

export default Form;

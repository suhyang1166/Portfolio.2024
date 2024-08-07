import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import projectList from "../../../data/projectdata";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ProjectContainer = styled.div`
  width: 100vw;
  height: 105vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 100px;
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  h1 {
    font-family: "G B";
    font-size: 60px;
    text-align: center;
    color: #bbf744;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

const Wrap = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: start;
  align-items: center;
  z-index: 100;
  @media (max-width: 600px) {
    height: 100%;
  }
`;

const CardWrap = styled.div`
  width: ${({ $cardCount }) => $cardCount * 100}vw;
  display: flex;
  justify-content: center;
  align-items: cneter;
  height: 100%;
  @media (max-width: 600px) {
    height: 100%;
  }
`;

const CircleWrap = styled.div`
  width: 100vw;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background: #fff;
  opacity: 0.3;
  transition: all 0.3;
  cursor: pointer;
  &.active {
    opacity: 1;
  }
  &:hover {
    opacity: 1;
  }
`;

const Project = () => {
  const containerRef = useRef(null);
  const projectRef = useRef(null);
  const cardWrapRef = useRef(null);
  const circlesRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const project = projectRef.current;
    const cardWrap = cardWrapRef.current;

    // ProjectTitle 애니메이션
    gsap.fromTo(
      project,
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: project,
          start: "center 60%",
          end: "center 30%",
          scrub: 1, // 스크롤과 애니메이션의 동기화를 조절
          // markers: true,
          toggleActions: "play none none none", // 스크롤 동작에 따른 제
        },
      }
    );

    const startValue = window.innerHeight < 900 ? "top+=25 top" : "-70vh 0";

    const scrollTween = gsap.to(cardWrap, {
      x: () => -(cardWrap.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        // start: "top+=50 top",
        start: startValue,
        scrub: 0.7,
        // markers: true,
        snap: {
          snapTo: 1 / (projectList.length - 1),
          inertia: false,
          duration: 0.05,
        },
        end: () => "+=" + cardWrap.offsetWidth,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.round(progress * (projectList.length - 1));
          circlesRef.current.forEach((circle, i) => {
            if (i === index) {
              circle.classList.add("active");
            } else {
              circle.classList.remove("active");
            }
          });
        },
      },
    });

    return () => {
      scrollTween.scrollTrigger.kill();
    };
  });

  const handleCircleClick = (e, id) => {
    e.stopPropagation();
    const index = projectList.findIndex((item) => item.id === id);

    gsap.to(cardWrapRef.current, {
      x: -index * window.innerWidth,
      duration: 1,
      ease: "power2.inOut",
      onUpdate: () => {
        circlesRef.current.forEach((circle, i) => {
          if (i === index) {
            circle.classList.add("active");
          } else {
            circle.classList.remove("active");
          }
        });
      },
    });
  };

  return (
    <ProjectContainer ref={containerRef}>
      <h1 ref={projectRef}>PROJECT</h1>
      <Wrap>
        <CardWrap ref={cardWrapRef} $cardCount={projectList.length}>
          {projectList.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </CardWrap>
      </Wrap>
      <CircleWrap>
        {projectList.map((item, index) => (
          <Circle
            key={item.id}
            ref={(el) => (circlesRef.current[index] = el)}
            onClick={(e) => handleCircleClick(e, item.id)}
          />
        ))}
      </CircleWrap>
    </ProjectContainer>
  );
};

export default Project;

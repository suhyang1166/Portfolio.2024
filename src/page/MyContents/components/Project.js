import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import projectList from "../../../data/projectdata";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ProjectContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 100px;
  gap: 100px;
  h1 {
    font-family: "G B";
    font-size: 60px;
    text-align: center;
    color: #bbf744;
  }
`;

const Wrap = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  overflow: hidden;
`;

const CardWrap = styled.div`
  width: ${({ cardCount }) => cardCount * 100}vw;
  display: flex;
  height: 100%;
`;

const CircleWrap = styled.div`
  width: 100vw;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
  const cardWrapRef = useRef(null);
  const circlesRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const cardWrap = cardWrapRef.current;

    const scrollTween = gsap.to(cardWrap, {
      x: () => -(cardWrap.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        start: "top+=50 top",
        scrub: 1,
        // markers: true,
        snap: {
          snapTo: 1 / (projectList.length - 1),
          // inertia: false,
          duration: { min: 0.01, max: 0.1 },
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

  const handleCircleClick = (id) => {
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
      <h1>PROJECT</h1>
      <Wrap>
        <CardWrap ref={cardWrapRef} cardCount={projectList.length}>
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
            onClick={() => handleCircleClick(item.id)}
          />
        ))}
      </CircleWrap>
    </ProjectContainer>
  );
};

export default Project;

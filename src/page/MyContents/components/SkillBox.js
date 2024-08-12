import React, { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 20%;
  min-width: 240px;
  height: 320px;
  /* border: 0.5px solid rgba(187, 247, 68, 0.8); */
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  /* box-shadow: 0 0 10px rgba(187, 247, 68, 0.5); */
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    border: 2px solid #bbf744;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.8); */
    box-shadow: 0 0 10px rgba(187, 247, 68, 0.8);
    background: rgba(0, 0, 0, 1);
    /* background: rgba(187, 247, 68, 1); */
    color: #fff;
  }
  h3 {
    font-family: "G B";
    font-size: 24px;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
  }
  &:hover h3 {
    opacity: 1;
    text-shadow: none;
  }
  ul {
    width: 100%;
    font-family: "G L";
    line-height: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    opacity: 0;
  }
  &:hover ul {
    opacity: 1;
  }
`;

const SkillWrap = styled.div`
  width: 100%;
  flex-grow: 1; /* 남은 공간을 채우도록 설정 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 시작 부분에 정렬 */
  align-items: start;
  gap: 20px;
  max-height: 100%; /* 부모 요소의 높이를 채우도록 설정 */
  overflow-x: hidden;
  overflow-y: auto; /* 세로 스크롤바를 표시 */
  padding: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
  /* &::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.5);
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: rgba(255, 255, 255, 1);
  }
  &::-webkit-scrollbar-button {
    width: 2px;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.8);
  } */
`;

const SkillImgWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 40px);
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;

const SkillImg = styled.div`
  width: 40px;
  height: 40px;
  background-image: ${({ $imageUrl }) => `url(${$imageUrl}) `};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  /* background-color: rgba(255, 255, 255, 0.8); */
  border-radius: 5px;
  padding: 20px;
`;

const SkillBox = ({ skill }) => {
  const skillWrapRef = useRef(null);

  const handleMouseEnter = () => {
    skillWrapRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleMouseLeave = () => {
    skillWrapRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <SkillWrap ref={skillWrapRef}>
        <h3>{skill.skill}</h3>
        <SkillImgWrap>
          {skill.img.map((imgName, idx) => {
            const imageUrl = require(`../../../assets/img/skills/${imgName}.png`);
            return <SkillImg key={idx} $imageUrl={imageUrl} />;
          })}
        </SkillImgWrap>
        <ul>
          {skill.text.map((li, idx) => (
            <li key={idx}>
              <b>{">"}</b> {li}
            </li>
          ))}
        </ul>
      </SkillWrap>
    </Container>
  );
};

export default SkillBox;

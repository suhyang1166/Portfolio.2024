import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 20%;
  min-width: 240px;
  height: 320px;
  border-radius: 30px;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
    border: 2px solid #bbf744;
    box-shadow: 0 0 10px rgba(187, 247, 68, 0.8);
    background: rgba(0, 0, 0, 1);
    color: #fff;
  }
  &:hover h3 {
    color: #bbf744;
  }
  h3 {
    font-family: "G B";
    font-size: 24px;
  }
  ul {
    font-family: "G L";
    line-height: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
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
  background-color: rgba(255, 255, 255, 1);
  border-radius: 5px;
  padding: 20px;
`;

const SkillBox = ({ skill }) => {
  return (
    <Container>
      <SkillWrap>
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

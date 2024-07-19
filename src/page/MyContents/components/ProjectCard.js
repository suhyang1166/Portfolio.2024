import React from "react";
import styled from "styled-components";
import NOT from "../../../assets/img/notfoundpage.jpg"; // 기본 이미지
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  width: 100%;
  min-width: 100vw;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 0 50px;
  background: rgba(0, 0, 0, 0.5);
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: start;
    gap: 10px;
    padding: 0 20px;
    height: 600px;
  }
`;

const ImgWrap = styled.div`
  width: 100%;
  min-width: 500px;
  max-width: 800px;
  height: 550px;
  background-image: ${({ $imageUrl }) => `url(${$imageUrl}) `};
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 30px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 1.5s;
  &:hover {
    background-position: bottom;
  }
  @media (max-width: 1270px) {
    min-width: 300px;
    max-width: 500px;
  }
  @media (max-width: 600px) {
    min-width: 300px;
    max-width: 500px;
    height: 300px;
  }
`;

const Contents = styled.div`
  width: 100%;
  min-width: 700px;
  max-width: 800px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 100px;
  padding: 30px;
  @media (max-width: 1270px) {
    min-width: 300px;
    max-width: 500px;
  }
  @media (max-width: 600px) {
    min-width: 300px;
    max-width: 500px;
    height: 220px;
    justify-content: space-around;
    gap: 15px;
    padding: 0px;
  }
`;

const MainContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 50px;
  h3 {
    font-size: 32px;
    @media (max-width: 600px) {
      font-size: 24px;
    }
  }
`;

const ToolWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;
`;

const Tool = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  h3 {
    width: 85px;
    font-size: 24px;
  }
`;

const IndexList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 0 3px;
  font-size: 10px;
  font-size: 18px;
  font-family: "G L";
`;

const MainText = styled.p`
  font-family: "G L";
  font-size: 18px;
`;

const MoreInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const MoreBtn = styled.button`
  width: 120px;
  height: 50px;
  background: #000;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 50px;
  padding: 10px 30px;
  font-family: "G M";
  font-size: 18px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    border: 1px solid #bbf744;
    background: #bbf744;
    color: #000;
  }
  @media (max-width: 600px) {
    width: 90px;
    height: 50px;
    font-size: 16px;
    padding: 10px;
  }
`;

const Icons = styled.ul`
  display: flex;
  gap: 10px;
`;

const Icon = styled.li`
  width: 100%;
  height: 100%;
  cursor: pointer;
  .icon {
    width: 30px;
    height: 30px;
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 100%;
    color: #fff;
    transition: all 0.2s;
    &:hover {
      border: 1px solid #bbf744;
      background: #bbf744;
      color: #000;
    }
  }
`;

const ProjectCard = ({ item }) => {
  const goToSite = () => {
    window.open(item.site, "_blank");
  };

  const goToFigma = () => {
    window.open(item.figma, "_blank");
  };

  const goToGithub = () => {
    window.open(item.github, "_blank");
  };

  let imageUrl;
  try {
    imageUrl = require("../../../assets/img/project/" +
      `${item?.img}` +
      ".png");
  } catch (err) {
    console.error(`Could not find image: ${item?.img}`, err);
    imageUrl = NOT; // 기본 이미지 설정
  }

  const onClick = () => {
    alert("모달창 준비중");
  };

  return (
    <Container>
      {window.innerWidth < 600 ? (
        <>
          <ImgWrap onClick={goToSite} $imageUrl={imageUrl} />
          <Contents>
            <MainContents>
              <h3>{item?.projectNM}</h3>
            </MainContents>
            <MoreInfo>
              <MoreBtn onClick={onClick}>MORE</MoreBtn>
              <Icons>
                {item?.figma ? (
                  <Icon onClick={goToFigma}>
                    <FontAwesomeIcon icon={faFigma} className="icon" />
                  </Icon>
                ) : null}
                <Icon onClick={goToGithub}>
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                </Icon>
              </Icons>
            </MoreInfo>
          </Contents>
        </>
      ) : (
        <>
          <Contents>
            <MainContents>
              <h3>{item?.projectNM}</h3>
              <ToolWrap>
                <Tool>
                  <h3>PAGE</h3>
                  {item.page.map((page, index) => (
                    <IndexList key={index}>{page}</IndexList>
                  ))}
                </Tool>
                <Tool>
                  <h3>TOOL</h3>
                  {item.skill.map((tool, index) => (
                    <IndexList key={index}>{tool}</IndexList>
                  ))}
                </Tool>
                <Tool>
                  <h3>참여도</h3>
                  <IndexList>{item?.part}</IndexList>
                </Tool>
              </ToolWrap>
              <MainText>{item?.text}</MainText>
            </MainContents>
            <MoreInfo>
              <MoreBtn onClick={onClick}>MORE</MoreBtn>
              <Icons>
                {item?.figma ? (
                  <Icon onClick={goToFigma}>
                    <FontAwesomeIcon icon={faFigma} className="icon" />
                  </Icon>
                ) : null}
                <Icon onClick={goToGithub}>
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                </Icon>
              </Icons>
            </MoreInfo>
          </Contents>
          <ImgWrap onClick={goToSite} $imageUrl={imageUrl} />
        </>
      )}
    </Container>
  );
};

export default ProjectCard;

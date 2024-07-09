import React, { useRef, useState } from "react";
import styled from "styled-components";
import EX from "../../../assets/img/project/selecto.png"; // 기본 이미지
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    background: rgba(0, 0, 0, 0.5);
    padding: 0 50px;
`;

const ImgWrap = styled.div`
    width: 100%;
    max-width: 800px;
    height: 100%;
    background-image: ${({ $imageUrl }) => `url(${$imageUrl}) `};
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 30px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
        transform: scale(1.05);
        background-position: bottom;
    }
`;

const Contents = styled.div`
    width: 100%;
    max-width: 800px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 100px;
    padding: 30px;
`;

const MainContents = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 50px;
    h3 {
        font-size: 32px;
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
        imageUrl = EX; // 기본 이미지 설정
    }

    const onClick = () => {
        window.open(item.site, "_blank");
    };

    return (
        <Container>
            <Contents>
                <MainContents>
                    <h3>{item?.projectNM}</h3>
                    <ToolWrap>
                        <Tool>
                            <h3>TOOL</h3>
                            {item.skill.map((tool, index) => (
                                <IndexList key={index}>{tool}</IndexList>
                            ))}
                        </Tool>
                        <Tool>
                            <h3>참여도</h3>
                            <IndexList>{item?.who}</IndexList>
                        </Tool>
                    </ToolWrap>
                    <MainText>{item?.text}</MainText>
                </MainContents>
                <MoreInfo>
                    <MoreBtn onClick={onClick}>MORE</MoreBtn>
                    <Icons>
                        <Icon onClick={goToSite}>
                            <FontAwesomeIcon
                                icon={faDesktop}
                                className="icon"
                            />
                        </Icon>
                        <Icon onClick={goToGithub}>
                            <FontAwesomeIcon icon={faGithub} className="icon" />
                        </Icon>
                    </Icons>
                </MoreInfo>
            </Contents>
            <ImgWrap onClick={onClick} $imageUrl={imageUrl} />
        </Container>
    );
};

export default ProjectCard;

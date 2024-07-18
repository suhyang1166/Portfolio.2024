import React from "react";
import styled from "styled-components";
import img01 from "../../../assets/img/deco/01.jpg";
import img02 from "../../../assets/img/deco/02.jpg";
import img03 from "../../../assets/img/deco/03.jpg";
import img04 from "../../../assets/img/deco/04.jpg";

// 이미지 변수 정의
const Img01 = img01;
const Img02 = img02;
const Img03 = img03;
const Img04 = img04;

const TextWrap01 = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid #00f; */
`;

const WhText = styled.p`
    margin: 0 10px;
    height: 100px;
    font-size: 4.2vw;
    text-align: center;
    line-height: 110px;
    @media (max-width: 1270px) {
        font-size: 6vw;
    }
    @media (max-width: 600px) {
        font-size: 10vw;
    }
`;

const YgText = styled.p`
    margin: 0 10px;
    height: 100px;
    font-size: 4.2vw;
    text-align: center;
    line-height: 110px;
    color: #bbf744;
    @media (max-width: 1270px) {
        font-size: 6vw;
    }
    @media (max-width: 600px) {
        font-size: 10vw;
    }
`;

const MoveImg = styled.div`
    width: 360px;
    height: 100px;
    background-image: url(${Img01});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
`;

const FixedImg01 = styled.div`
    width: 80px;
    height: 100px;
    background-image: url(${Img02});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
`;

const TextWrap02 = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FixedImg02 = styled.div`
    width: 420px;
    height: 100px;
    background-image: url(${Img03});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
`;

const FixedImg03 = styled.div`
    width: 180px;
    height: 100px;
    background-image: url(${Img04});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
`;

const ScrollText = () => {
    return (
        <>
            <TextWrap01>
                <WhText>Hello,</WhText>
                <YgText>thank you</YgText>
                <MoveImg />
                <WhText>for visiting</WhText>
                <FixedImg01 />
                <WhText>my site</WhText>
            </TextWrap01>
            <TextWrap02>
                <FixedImg02 />
                <WhText>This site is</WhText>
                <FixedImg03 />
                <YgText>front-end portfolio</YgText>
            </TextWrap02>
            <TextWrap01>
                <WhText>Hello,</WhText>
                <YgText>thank you</YgText>
                <MoveImg />
                <WhText>for visiting</WhText>
                <FixedImg01 />
                <WhText>my site</WhText>
            </TextWrap01>
            <TextWrap02>
                <FixedImg02 />
                <WhText>This site is</WhText>
                <FixedImg03 />
                <YgText>front-end portfolio</YgText>
            </TextWrap02>
        </>
    );
};

export default ScrollText;

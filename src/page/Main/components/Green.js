import React, { useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import green from "../../../assets/img/deco/3d.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const GreenImg = green;

const ImgWrap = styled.div`
    height: 300vh;
    position: absolute;
    top: 100px;
    right: 50px;
    z-index: -100;
`;

const Green3D = styled.div`
    width: 350px;
    height: 380px;
    position: sticky;
    top: 60px;
    background-image: url(${GreenImg});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transform: rotate3d(1, 1, 10, 45deg);
    @media (max-width: 1270px) {
        width: 200px;
    }
    @media (max-width: 600px) {
        width: 150px;
    }
`;

const Green = ({ shouldFadeOn }) => {
    useGSAP(() => {
        gsap.to("#green", {
            scrollTrigger: {
                trigger: "#greenWrap", //객체기준범위
                start: "top top", //시작 지점
                end: "+=5000", //끝 지점
                // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
                scrub: 3, //부드러운 스크러빙
                // markers: true, //개발가이드선
            },
            scale: 0.8,
            rotateZ: 360,
            x: 50,
            y: 200,
            duration: 2,
            zIndex: -100,
        });
    }, []);

    return (
        <ImgWrap id="greenWrap">
            <Green3D id="green" shouldFadeOn={shouldFadeOn} green={green} />
        </ImgWrap>
    );
};

export default Green;

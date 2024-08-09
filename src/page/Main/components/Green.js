import React, { useRef } from "react";
import styled from "styled-components";
import green from "../../../assets/img/deco/3d.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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

const Green = () => {
    const greenWrapRef = useRef(null);
    const greenRef = useRef(null);

    useGSAP(() => {
        const greenWrap = greenWrapRef.current;
        const green = greenRef.current;

        gsap.fromTo(
            greenWrap,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                delay: 3.2,
            }
        );
        gsap.fromTo(
            greenWrap,
            {
                scale: 1,
            },
            {
                scale: 1.02, // 움직이는 거리
                repeat: -1, // 무한 반복
                yoyo: true, // 애니메이션을 되감기
                duration: 2, // 애니메이션 한 사이클의 시간
                ease: "sine.inOut",
            }
        );

        gsap.to(green, {
            scrollTrigger: {
                trigger: greenWrap,
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
        <ImgWrap ref={greenWrapRef}>
            <Green3D ref={greenRef} />
        </ImgWrap>
    );
};

export default Green;

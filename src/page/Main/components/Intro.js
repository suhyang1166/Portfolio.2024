import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import scroll from "../../../assets/json/scroll.json";
import styled from "styled-components";
import Green from "./Green";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #fff;
    color: #000;
    z-index: -101;
`;

const MainWrap = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const NameContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Name01 = styled.h1`
    width: auto;
    height: auto;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-size: 12vw;
    text-align: center;
    font-family: "G B";
    line-height: 16vw;
    z-index: 2;
`;

const Name02 = styled.h1`
    width: auto;
    height: auto;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-size: 12vw;
    text-align: center;
    font-family: "G B";
    line-height: 16vw;
    z-index: 2;
`;

const BlackBox = styled.div`
    position: absolute;
    top: 50%;
    left: 25vw;
    transform: translateY(-50%);
    width: 18vw;
    height: 20px;
    border-radius: 20px;
    background: #000;
    z-index: -101;
`;

const TextAni = styled.div`
    width: 100%;
    height: 5.8vmin;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 100;
    background: #000;
    color: #bbf744;
    overflow: hidden;
`;

const TextMove = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 5.8vmin;
    transform: translateX(0);
`;

const Text = styled.div`
    display: flex;
    font-family: "G L";
    font-size: 3vmin;
    line-height: 5.4vmin;
    white-space: nowrap;
`;

const ScrollLottie = styled(Lottie)`
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: 0;
    margin: 50px;
`;

const Intro = () => {
    const mainWrapRef = useRef(null);
    const name01Ref = useRef(null);
    const name02Ref = useRef(null);
    const textWrapRef = useRef(null);
    const blackBoxRef = useRef(null);
    const textMoveRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            document.body.style.overflow = "auto";
        }, 1800);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "auto";
        };
    }, []);

    useGSAP(() => {
        const mainWrap = mainWrapRef.current;
        const name01 = name01Ref.current;
        const name02 = name02Ref.current;
        const textWrap = textWrapRef.current;
        const blackBox = blackBoxRef.current;
        const textMove = textMoveRef.current;

        const introTl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

        introTl
            .to(mainWrap, {
                backgroundColor: "white",
                duration: 0.5,
            })
            .to(blackBox, {
                width: "100vw",
                height: "100vh",
                borderRadius: 0,
                left: 0,
                duration: 2,
                backgroundColor: "#000",
            })
            .to([name01, name02], {
                fontSize: "17vw",
                color: "#fff",
                duration: 2,
                ease: "power2.inOut",
                delay: -2,
            })
            .fromTo(
                textWrap,
                { height: 0 },
                {
                    height: "5.8vmin",
                    zIndex: 10,
                    duration: 0.7,
                }
            )
            .fromTo(
                textMove,
                { opacity: 0 },
                {
                    opacity: 1,
                    zIndex: 10,
                    duration: 1,
                    ease: "none",
                }
            )
            .fromTo(
                textMove,
                { x: "0" },
                {
                    x: "-100%",
                    zIndex: 10,
                    duration: 15,
                    repeat: -1,
                    ease: "none",
                }
            );
    });

    return (
        <Container ref={mainWrapRef}>
            <MainWrap>
                <Title>
                    <NameContainer>
                        <Name01 ref={name01Ref}>SU</Name01>
                        <BlackBox ref={blackBoxRef} />
                        <Name02 ref={name02Ref}>HYANG</Name02>
                    </NameContainer>
                    <TextAni ref={textWrapRef}>
                        <TextMove ref={textMoveRef}>
                            <Text>
                                Hello and welcome to my site! I appreciate your
                                visit and am excited to showcase my work and
                                skills. Combining innovative design with
                                functionality, I create solutions that are not
                                only visually appealing but also highly
                                effective in meeting user needs. I ensure a
                                perfect balance between design and user
                                experience, striving to create interfaces that
                                are both beautiful and intuitive to use. I bring
                                your ideas to life by applying user-centered
                                design principles and leveraging cutting-edge
                                technology to build solutions that stand out.
                            </Text>
                        </TextMove>
                    </TextAni>
                    <ScrollLottie animationData={scroll} />
                </Title>
                <Green />
            </MainWrap>
        </Container>
    );
};

export default Intro;

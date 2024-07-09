import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import ScrollText from "./ScrollText";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
    width: 100%;
    height: 150vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Test = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const ScrollWrap = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 20px;
    margin-bottom: 20px;
`;

const ScrollWrap02 = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    gap: 20px;
`;

const TextContainer = styled.div`
    width: 470vmax;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: sticky;
    left: 0;
`;

const ScrollIntro = () => {
    const textContainerRef01 = useRef(null);
    const textContainerRef02 = useRef(null);

    useEffect(() => {
        const textContainer01 = textContainerRef01.current;
        const textContainer02 = textContainerRef02.current;

        gsap.to(textContainer01, {
            scrollTrigger: {
                trigger: textContainer01,
                start: "top+=120 center",
                end: "+=1000", // 가로 스크롤 범위 설정
                scrub: true,
                pin: true,
                // markers: true,
            },
            x: "-20%", // 가로로 왼쪽으로 이동
            ease: "none",
        });

        gsap.to(textContainer02, {
            scrollTrigger: {
                trigger: textContainer02,
                start: "top center",
                end: "+=1000", // 가로 스크롤 범위 설정
                scrub: true,
                pin: true,
                // markers: true,
            },
            x: "20%", // 가로로 오른쪽으로 이동
            ease: "none",
        });
    }, []);

    return (
        <Container>
            <Test>
                <ScrollWrap>
                    <TextContainer ref={textContainerRef01}>
                        <ScrollText textContainerRef01={textContainerRef01} />
                    </TextContainer>
                </ScrollWrap>
                <ScrollWrap02>
                    <TextContainer ref={textContainerRef02}>
                        <ScrollText />
                    </TextContainer>
                </ScrollWrap02>
            </Test>
        </Container>
    );
};

export default ScrollIntro;

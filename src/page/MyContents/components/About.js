import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import mydata from "../../../data/mydata";
import SkillBox from "../components/SkillBox";
import ME from "../../../assets/img/me.jpeg";
import ICON01 from "../../../assets/img/deco/icon01.svg";
import ICON02 from "../../../assets/img/deco/icon04.svg";
import ICON03 from "../../../assets/img/deco/icon03.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 80vh;
`;

const AboutWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10vh;
  margin-top: 20vh;
  @media (max-width: 600px) {
    transform: scale(0.55);
  }
`;

const Me = styled.div`
  width: 660px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const MyImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 320px;
  height: 320px;
  border-radius: 100%;
  background: url(${ME}) center/cover no-repeat;
`;

const Title = styled.h1`
  width: 480px;
  position: absolute;
  bottom: -20px;
  right: -20px;
  font-size: 110px;
  font-family: "G B";
  color: #bbf744;
`;

const MyName = styled.div`
  position: absolute;
  top: 100px;
  left: 350px;
  width: auto;
  gap: 15px;
  p {
    font-family: "G L";
    font-size: 20px;
    padding-bottom: 15px;
    b {
      font-family: "G M";
    }
  }
  h3 {
    font-size: 32px;
    padding-bottom: 15px;
  }
`;

const Text = styled.div`
  font-size: 24px;
  font-family: "G L";
  text-align: center;
  b {
    color: #bbf744;
  }
`;

const WorkWrap = styled.div`
  width: 660px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
`;

const EducationUI = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  h2 {
    font-size: 20px;
    font-weight: "G B";
  }
`;

const WorkUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 30px;
  h2 {
    font-size: 20px;
    font-weight: "G B";
  }
`;

const WorkList = styled.li`
  width: 100%;
  font-size: 16px;
  h3 {
    font-size: 16px;
    margin-bottom: 5px;
  }
  p {
    font-family: "G L";
  }
`;

const Skills = styled.div`
  width: 100%;
  height: 200vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
`;

const SkillTitle = styled.h1`
  width: 100%;
  /* height: 280vh; */
  z-index: -100;
  /* transition: all 0.5s ease; */
  position: relative;
  h3 {
    width: 100%;
    height: 70px;
    font-family: "G B";
    /* font-size: 17.5vw; */
    text-align: center;
    color: #bbf744;
    position: sticky; /* 스크롤에 따라 고정 */
    top: 50%;
    transform: translateY(-40%);
    /* padding-bottom: 100px; */
  }
`;

const SkillWrap = styled.div`
  width: 100%;
  height: 300px;
  position: sticky;
  top: 45%;
  transform: translateY(-50%);
`;

const Skill = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 0 50px;
  position: relative;
`;

const rotate01 = keyframes`
  0% { transform: rotate3d(1, 1, 10, 0deg);}
  100% { transform: rotate3d(1, 1, 10, 360deg); }
`;

const rotate02 = keyframes`
  0% { transform: rotate3d(1, 1, 10, 0deg);}
  100% { transform: rotate3d(1, 1, 10, -360deg); }
`;

const Icon01 = styled.div`
  width: 18vw;
  height: 18vw;
  background: url(${(props) => props.$icon}) center/contain no-repeat;
  position: absolute;
  top: -25vh;
  left: 0;
  animation: ${rotate01} 5s infinite linear;
`;

const Icon02 = styled.div`
  width: 2vw;
  height: 2vw;
  background: url(${(props) => props.$icon}) center/contain no-repeat;
  position: absolute;
  top: -16vh;
  left: 58%;
`;

const Icon03 = styled.div`
  width: 20vw;
  height: 20vw;
  background: url(${(props) => props.$icon}) center/contain no-repeat;
  position: absolute;
  bottom: -15vh;
  right: -10vh;
  animation: ${rotate02} 5s infinite linear;
`;

const About = () => {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const skillBoxRef = useRef(null);

  useGSAP(() => {
    const about = aboutRef.current;
    const skill = skillRef.current;
    const skillBoxes = skillBoxRef.current;

    // About 애니메이션
    gsap.fromTo(
      about,
      {
        // x: -120,
        opacity: 0,
      },
      {
        // x: 0,
        opacity: 1,
        duration: 1.5, // 애니메이션의 지속 시간을 조정
        ease: "none",
        scrollTrigger: {
          trigger: about,
          start: "top 90%",
          end: "center 60%",
          scrub: 1, // 스크롤과 애니메이션의 동기화를 조절
          // markers: true,
          toggleActions: "play none none none", // 스크롤 동작에 따른 제
        },
      }
    );

    // SkillTitle 애니메이션
    const skillTitleTl = gsap.timeline({
      scrollTrigger: {
        trigger: skill,
        start: "top-=50 60%",
        end: "200vh+=200 200vh",
        scrub: 1,
        // markers: true,
      },
    });

    skillTitleTl
      .fromTo(
        skill,
        {
          y: 150,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 10,
          ease: "none",
        }
      )
      .fromTo(
        skill,
        {
          fontSize: "20vw",
        },
        {
          duration: 200,
          ease: "none",
          fontSize: "60px",
          scrub: 0.01,
        }
      )
      .fromTo(
        skill,
        {
          // fontSize: "20vw",
        },
        {
          duration: 10,
          ease: "none",
          color: "#fff",
          scrub: 0.01,
        }
      )
      .fromTo(
        skillBoxes,
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 50,
          opacity: 1,
          duration: 2,
          ease: "none",
        }
      );

    // 둥실둥실 애니메이션
    gsap.fromTo(
      [skill, skillBoxes],
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

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });

  return (
    <Container>
      <AboutWrap ref={aboutRef}>
        <Me>
          <MyImg />
          <Title>ABOUT</Title>
          <MyName>
            <p>KIM SU HYANG</p>
            <h3>김 수 향</h3>
          </MyName>
        </Me>
        <Text>
          빠르게 트렌드를 캐치하고 끝없이 배움에 도전하며,
          <br />
          현재에 안주하지않고 발전해 나가는
          <br />
          <b>프론트엔드</b> 개발자가 되겠습니다.
        </Text>
        <WorkWrap>
          <EducationUI>
            <h2>Education</h2>
            {mydata.work.map((list, idx) =>
              list.title === "Education" ? (
                <WorkList key={idx}>
                  <h3>{list.date}</h3>
                  <p>{list.work}</p>
                </WorkList>
              ) : null
            )}
          </EducationUI>
          <WorkUl>
            <h2>Career</h2>
            {mydata.work.map((list, idx) =>
              list.title === "Career" ? (
                <WorkList key={idx}>
                  <h3>{list.date}</h3>
                  <p>{list.work}</p>
                </WorkList>
              ) : null
            )}
          </WorkUl>
        </WorkWrap>
      </AboutWrap>
      <Skills>
        <SkillWrap>
          <SkillTitle>
            <h3 ref={skillRef}>SKILLS</h3>
          </SkillTitle>
          <Skill ref={skillBoxRef}>
            <Icon01 $icon={ICON01} />
            <Icon02 $icon={ICON02} />
            <Icon03 $icon={ICON03} />
            {mydata.skills.map((skill, idx) => (
              <SkillBox key={skill.id} skill={skill} />
            ))}
          </Skill>
        </SkillWrap>
      </Skills>
    </Container>
  );
};

export default About;

import React from "react";
import styled from "styled-components";
import mydata from "../../../data/mydata";
import SkillBox from "../components/SkillBox";
import ME from "../../../assets/img/me.jpeg";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const AboutWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10vh;
  margin: 25vh;
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
  top: 60px;
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
  p:last-of-type {
    padding-top: 15px;
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
  justify-content: center;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "G B";
    font-size: 60px;
    text-align: center;
    color: #bbf744;
    padding-bottom: 100px;
  }
`;

const Skill = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 0 50px;
`;

const About = () => {
  return (
    <Container>
      <AboutWrap>
        <Me>
          <MyImg />
          <Title>ABOUT</Title>
          <MyName>
            <p>KIM SU HYANG</p>
            <h3>김 수 향</h3>
            <p>1997.10.06</p>
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
        <h1>SKILLS</h1>
        <Skill>
          {mydata.skills.map((skill) => (
            <SkillBox key={skill.id} skill={skill} />
          ))}
        </Skill>
      </Skills>
    </Container>
  );
};

export default About;

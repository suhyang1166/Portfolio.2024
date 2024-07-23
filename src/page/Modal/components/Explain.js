import React from "react";
import styled from "styled-components";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  width: 100%;
  height: 100%;
  font-family: "G L";
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 60px;
  line-height: 24px;
  position: relative;
`;

const Span = styled.span`
  position: relative;
  width: 100%;
  position: sticky;
  top: 0;
  right: 0;
  line-height: 30px;
  font-size: 28px;
  text-align: end;
  cursor: pointer;
  z-index: 100;
  mix-blend-mode: difference;
`;

const Close = styled(FontAwesomeIcon)`
  width: 30px;
  height: 30px;
`;

const MainTitle = styled.div`
  font-size: 40px;
  font-family: "G B";
  color: #bbf744;
`;

const MainContents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  border-top: 1px solid #333;
  padding-top: 20px;
  /* align-content: space-between; */
  gap: 20px;
`;

const ContentsTitle = styled.div`
  width: auto;
  font-size: 24px;
  font-family: "G M";
  /* padding-top: 30px; */
  padding: 6px;
  color: #000;
  /* background: #fff; */
  background: rgba(187, 247, 68, 1);
  border-radius: 3px;
`;

const ContentsWrap = styled.div`
  width: 100%;
  p {
    width: 100%;
    word-break: keep-all;
  }
`;

const Text = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const TechWrap = styled.div``;

const Tech = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
  b {
    font-family: "G M";
    font-size: 18px;
  }
`;

const Ul = styled.ul`
  display: flex;
  gap: 5px;
  li {
  }
`;

const Explain = ({ item, setModalOpen }) => {
  return (
    <>
      <Span onClick={() => setModalOpen(false)}>
        <div>
          <Close icon={faCircleXmark} />
        </div>
      </Span>
      <Container>
        <MainTitle>{item.projectNM}</MainTitle>
        {item.contents.map((content, idx) => (
          <MainContents key={idx}>
            <ContentsTitle>{content.title}</ContentsTitle>
            <ContentsWrap>
              {content.explain.length > 1 ? (
                content.explain.map((explanation, idx) => (
                  <div key={idx}>
                    {typeof explanation === "string" ? (
                      <Text>• {explanation}</Text>
                    ) : (
                      <TechWrap>
                        <Tech>
                          <b>{explanation.category}:</b>
                          <Ul>
                            {explanation.technologies.map((tech, idx) => (
                              <li key={idx}>{tech}</li>
                            ))}
                          </Ul>
                        </Tech>
                      </TechWrap>
                    )}
                  </div>
                ))
              ) : (
                <p>{content.explain}</p>
              )}
            </ContentsWrap>
          </MainContents>
        ))}
      </Container>
    </>
  );
};

export default Explain;

import React from "react";
import styled from "styled-components";
import mydata from "../../../data/mydata";
import ContactBox from "../components/ContactBox";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    width: 100%;
    position: absolute;
    bottom: -8%;
    left: 50%;
    margin: 0 auto;
    transform: translateX(-50%);
    font-size: 18vw;
    text-align: center;
    color: #bbf744;
    overflow: hidden;
  }
`;

const Contents = styled.div`
  width: 80vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding-bottom: 80px;
  @media (max-width: 600px) {
    justify-content: end;
    margin-bottom: 15vh;
  }
`;

const Contact = () => {
  return (
    <Container>
      <h1>CONTACT</h1>
      <Contents>
        {mydata.contact.map((item, idx) => (
          <ContactBox item={item} key={idx} />
        ))}
      </Contents>
    </Container>
  );
};

export default Contact;

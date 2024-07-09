import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  width: 100%;
  min-width: 360px;
`;

const Ul = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #bbf744;
  border-bottom: 1px solid #bbf744;
  padding-bottom: 10px;
`;

const Li = styled.li`
  &:first-child {
    font-family: "G B";
    font-size: 28px;
  }
  &:last-child {
    font-size: 24px;
  }
  .icon {
    width: 50px;
    height: 50px;
    border: 1px solid #bbf744;
    border-radius: 100%;
    color: #000;
    background: #bbf744;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      border: 1px solid #000;
      border-radius: 100%;
      color: #bbf744;
      background: #000;
    }
  }
`;

const ContactBox = ({ item }) => {
  const goToGit = () => {
    window.open(item.text, "_blank");
  };
  return (
    <Container>
      <Ul>
        <Li>{item.title}</Li>
        {item.title === "Git-Hub" ? (
          <Li onClick={goToGit}>
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </Li>
        ) : (
          <Li>{item.text}</Li>
        )}
      </Ul>
    </Container>
  );
};

export default ContactBox;

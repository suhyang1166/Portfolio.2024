import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import projectList from "../../../data/projectdata";

const ProjectContainer = styled.div`
  width: 100%;
  h1 {
    font-family: "G B";
    font-size: 60px;
    text-align: center;
    color: #bbf744;
    margin-bottom: 100px;
  }
`;

const CardWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Project = () => {
  return (
    <ProjectContainer>
      <h1>PROJECT</h1>
      <CardWrap>
        {projectList.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </CardWrap>
    </ProjectContainer>
  );
};

export default Project;

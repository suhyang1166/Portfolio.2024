import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import projectData from "../../data/projectdata";

const Container = styled.div``;

const DetailPage = () => {
  const { id } = useParams();
  const project = projectData.find((project) => project.id == id);

  if (!project) {
    return (
      <Container>
        <div>Project not found</div>
      </Container>
    );
  }

  return (
    <Container>
      <div>{project.projectNM}</div>
    </Container>
  );
};

export default DetailPage;

import React from "react";
import styled from "styled-components";
import NOTFOUND from "../assets/img/notfoundpage.jpg";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Bebas Neue", sans-serif;
  background: #fff;
  color: #000;
`;

const Browser = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  padding-top: 90px;
  h1 {
    font-size: 60px;
    line-height: 100px;
  }
  p {
    font-size: 30px;
    line-height: 100px;
  }
`;

const Img = styled.div`
  width: 500px;
  height: 500px;
  background: url(${NOTFOUND}) center/contain no-repeat;
  position: relative;
  p {
    position: absolute;
    top: 80px;
    right: 160px;
    font-size: 24px;
  }
`;

const NotFound = () => {
  return (
    <Wrap className="notFound">
      <Browser className="browser">
        <h1>ERROR</h1>
        <h1>404</h1>
        <p>Page Not Found</p>
      </Browser>
      <Img className="img">
        <p>냐~</p>
      </Img>
    </Wrap>
  );
};

export default NotFound;

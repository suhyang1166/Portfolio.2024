import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./assets/font/Font.css";

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  body {
    font-family: "G M";
    width: 100%;
    margin: 0 auto;
    /* max-width: 1920px; */
    overflow-x: hidden;
    background: #000;
    color: #fff;
      &::-webkit-scrollbar {
    display: none;
  }
  }
  ul,li {
    list-style: none
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <GlobalStyle />
        <App />
    </BrowserRouter>
);

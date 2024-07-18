import React, { useRef } from "react";
import Header from "../components/Header";
import Main from "./Main/Main";
import Form from "./MyContents/Form";
import LottieIntro from "./Main/components/LottieIntro";

const Content = () => {
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    MAIN: mainRef,
    ABOUT: aboutRef,
    PROJECT: projectRef,
    CONTACT: contactRef,
  };

  const handleMenuClick = (menu) => {
    if (sectionRefs[menu]) {
      sectionRefs[menu].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <LottieIntro />
      <Header handleMenuClick={handleMenuClick} />
      <Main ref={mainRef} />
      <Form refs={sectionRefs} />
    </div>
  );
};

export default Content;

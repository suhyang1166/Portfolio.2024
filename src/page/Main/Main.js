import React, { forwardRef } from "react";
import Intro from "./components/Intro";
import ScrollIntro from "./components/ScrollIntro";

const Main = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref}>
        <Intro />
      </div>
      <ScrollIntro />
    </>
  );
});

export default Main;

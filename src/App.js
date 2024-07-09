import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./page/NotFound";
import Content from "./page/Content";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

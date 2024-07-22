import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./page/NotFound";
import Content from "./page/Content";
import DetailPage from "./page/Detail/DetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/:id" element={<DetailPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

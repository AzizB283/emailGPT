import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Headerbar from "./components/header/Header";

import Main from "./components/main/layout/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Headerbar /> */}
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import { IoIosArrowDown as ArrowDown } from "react-icons/io";

import "./global.css";
import "./App.css";
import Chapter from "./Chapter";

function App() {
  return (
    <>
    <main id="title">
      <h1>Kindred</h1>
      <h3>Octavia Butler</h3>
      <a href="#chapter-1">
        <p>Começar</p>
        <ArrowDown color="#ffffff" size="32"/>
      </a>
    </main>
    <Chapter id="chapter-1"/>
  </>
  );
}

export default App;

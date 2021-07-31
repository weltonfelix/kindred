import React from "react";
import { IoIosArrowDown as ArrowDown } from "react-icons/io";

import Chapter from "./Chapter";
import Navigator from "./Navigator";

import "./global.css";
import "./App.css";

function App() {
  return (
    <>
      <Navigator homeId="title" authorId="chapter-1" chapters={["chapter-1"]} />
      <main id="title" style={{ height: window.innerHeight }}>
        <h1>Kindred</h1>
        <h3>Octavia Butler</h3>
        <a href="#chapter-1">
          <p>Começar</p>
          <ArrowDown color="#ffffff" size="32" />
        </a>
      </main>
      <Chapter id="chapter-1" />
    </>
  );
}

export default App;

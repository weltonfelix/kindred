import React from "react";
import { IoIosArrowDown as ArrowDown } from "react-icons/io";

import Chapter from "./Chapter";
import Navigator from "./Navigator";

import "./global.css";
import "./App.css";

function App() {
  return (
    <>
      <Navigator homeId="title" authorId="author" chapters={["chapter-1"]} />
      <main id="title">
        <h1>Kindred</h1>
        <h3>Octavia Butler</h3>
        <a href="#chapter-1">
          <p>Começar</p>
          <ArrowDown color="#ffffff" size="32" />
        </a>
      </main>
      <Chapter id="chapter-1" />
      <div id="author">
        <div>
          <h2>Sobre a autora</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
            iste corporis nisi eum sequi provident natus facilis dolor, dicta
            voluptas optio quo id ex itaque, sit laudantium omnis cupiditate
            placeat!
          </p>
        </div>
        <img src="octaviabutler.png" alt="Octavia Butler" />
      </div>
    </>
  );
}

export default App;

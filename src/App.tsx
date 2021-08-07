import { IoIosArrowDown as ArrowDown } from "react-icons/io";
import { BiCodeAlt } from "react-icons/bi";

import Chapter from "./Chapter";
import Navigator from "./Navigator";

import "./global.css";
import "./App.css";

import chaptersContent from "./chapters.json";
import { useState } from "react";

function App() {
  const [scrollLock, setScrollLock] = useState(true);

  function enableScroll() {
    setScrollLock(false);
  }

  return (
    <>
      <Navigator
        home={{
          id: "title",
          isActive: true,
        }}
        author={{
          id: "author",
          isActive: true,
        }}
        chapters={[
          { id: "chapter-1", isActive: false },
          { id: "chapter-2", isActive: false },
          { id: "chapter-3", isActive: false },
          { id: "chapter-4", isActive: false },
          { id: "chapter-5", isActive: false },
          { id: "chapter-6", isActive: false },
        ]}
      />
      <div
        onClick={enableScroll}
        style={{ overflow: `${scrollLock ? "hidden" : "scroll"}` }}
        id="container"
      >
        <div className="snap-section">
          <header className="instructions">
            <p>Tenha uma melhor experiência no computador, apertando F11</p>
          </header>
          <main id="title">
            <h1>Kindred</h1>
            <h3>Octavia Butler</h3>
            <a onClick={enableScroll} href="#chapter-1">
              <p>Começar</p>
              <ArrowDown color="#ffffff" size="32" />
            </a>
          </main>
        </div>
        {chaptersContent.map((chapter, index) => (
          <Chapter
            key={index}
            id={chapter.id}
            title={chapter.title}
            colors={chapter.colors}
            images={chapter.images}
            texts={chapter.texts}
            audio={chapter.audio}
            sectionTime={chapter.sectionTime}
          />
        ))}
        <div className="snap-section">
          <div id="author">
            <div>
              <h2>Sobre a autora</h2>
              <p>
                <b>Octavia Estelle Butler</b> foi uma escritora conhecida por
                seus livros de ficção científica, e mais especialmente por
                retratar e mostrar o preconceito, o racismo e o feminismo m suas
                obras. Entre suas obras mais conhecidas destacam-se:{" "}
                <i>Kindred</i>, <i>The Patternist Series</i>,
                <i>The Xenogenesis Series</i> e <i>Parable</i>.
              </p>
              <p id="citation"><i>"Comecei a escrever sobre poder já que eu tinha tão pouco dele"</i> - Octavia E. Butler, “The Science Fiction of Octavia Butler”</p> 
            </div>
            <img src="octaviabutler.png" alt="Octavia Butler" />
          </div>
          <footer>
            <div>
              <p>
                Ilustrações por{" "}
                <a
                  href="https://www.instagram.com/mh_drawing_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Marcelo Henrique
                </a>
              </p>
              <p>
                Site por{" "}
                <a
                  href="https://github.com/fabiopapais"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fábio Papais
                </a>{" "}
                e{" "}
                <a
                  href="https://github.com/weltonfelix"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Welton Felix
                </a>
              </p>
            </div>
            <div>
              <p>
                <BiCodeAlt className="text-icon" size="20" color="#c54747" />
                Veja o{" "}
                <a
                  href="https://github.com/weltonfelix/kindred"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  código fonte da página
                </a>
              </p>
              <p>
                <span className="text-icon" />
                Conheça o{" "}
                <a
                  href="https://www.ifpeopensource.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IFPE Open Source
                </a>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;

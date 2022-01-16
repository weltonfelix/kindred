import { IoIosArrowDown as ArrowDown } from "react-icons/io";
import { BiCodeAlt } from "react-icons/bi";

import Chapter from "./Chapter";

import "./global.css";
import "./App.css";

import chaptersContent from "./chapters.json";
import { useState } from "react";

import ReactHowler from "react-howler";

function App() {
  const [scrollLock, setScrollLock] = useState(true);

  function enableScroll() {
    setScrollLock(false);
  }

  return (
    <>
      <ReactHowler
        src={'/assets/audios/lamentosertanejo.mp3'}
        format={["mp3", "mpeg"]}
        preload={false}
        onLoad={() => console.log("iniciando áudio")}
        onLoadError={() => console.warn("deu ruim aí no áudio mané")}
        playing={!scrollLock}
        loop={true}
      />
      <div
        onClick={enableScroll}
        style={{ overflow: `${scrollLock ? "hidden" : "scroll"}` }}
        id="container"
      >
        <div className="snap-section">
          <header className="instructions">
            <p>Tenha uma melhor experiência no computador, aumentando o volume</p>
          </header>
          <main id="title">
            <h1>Vidas Secas</h1>
            <h3>Graciliano Ramos</h3>
            <a onClick={enableScroll} href="#chapter-1">
              <p>Começar</p>
              <ArrowDown color="#ffd9b1" size="32" />
            </a>
          </main>
        </div>
        {chaptersContent.map((chapter, index) => (
          <Chapter
            key={index}
            id={chapter.id}
            title={chapter.title}
            image={chapter.image}
            titles={chapter.titles}
            texts={chapter.texts}
            coords={chapter.coords}
          />
        ))}
        <div className="snap-section">
          <div id="author">
            <div>
              <h2>Sobre o autor</h2>
              <p>
                <b>Graciliano Ramos</b> foi um escritor e jornalista nordestino 
                conhecido por sua literatura modernista e regionalista, em especial
                o clássico da literatura brasileira <i>Vidas Secas</i>. Entre suas outras obras mais conhecidas destacam-se:{" "}
                <i>Caetés</i>, <i>São Bernardo</i>,
                <i>Angústia</i> e <i>A terra dos meninos pelados</i>.
              </p>
              <p id="citation">
                <i>
                "Só posso escrever o que sou. E se os personagens se comportam de modos diferentes, é porque não sou um só."
                </i>{" "}
                - Graciliano Ramos, em entrevista.
              </p>
            </div>
            <img src="gracilianoramos.jpg" alt="Graciliano Ramos" />
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

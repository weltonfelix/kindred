import { IoIosArrowDown as ArrowDown } from "react-icons/io";
import { BiCodeAlt } from "react-icons/bi";

import Chapter from "./Chapter";
// import Navigator from "./Navigator";

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
      {/* <Navigator
        home={{
          id: "title",
          isActive: true,
        }}
        author={{
          id: "author",
          isActive: true,
        }}
        comments={{
          id: "comments",
          isActive: true,
        }}
        chapters={[
          { id: "chapter-1", isActive: false },
          { id: "chapter-2", isActive: false },
          { id: "chapter-3", isActive: false },
          { id: "chapter-4", isActive: false },
          { id: "chapter-5", isActive: false },
          { id: "chapter-6", isActive: false },
          { id: "chapter-7", isActive: false },
          { id: "chapter-8", isActive: false },
          { id: "chapter-9", isActive: false },
          { id: "chapter-10", isActive: false },
          { id: "chapter-11", isActive: false },
          { id: "chapter-12", isActive: false },
          { id: "chapter-13", isActive: false }
        ]}
      /> */}
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
            <p>Tenha uma melhor experiência no computador, apertando F11</p>
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
          <div id="comments">
            <h2>Comentários</h2>
            <p>
              A obra utiliza a fantasia para levar o leitor junto com a
              personagem principal ao século XIX, conseguindo assim nos deixar
              mais próximo da personagem e transmitir seus sentimentos, de certa
              forma quebrando a barreira temporal. É como se, assim como a
              personagem, o leitor também pudesse se ver no período que é
              retratado.
            </p>
            <p>
              A escrita simples do livro contribui ainda mais para isso, como se
              fosse uma conversa entre o leitor e a personagem. Além disso, a
              forma como as cenas mais tensas são descritas nos permite entender
              um pouco mais como a personagem está se sentindo.
            </p>
            <p>
              A forma como a personagem principal é imersa no ambiente
              escravista e submetida à escravidão nos faz refletir sobre o como
              a escravidão era, infelizmente, algo tratado como completamente
              normal naquela época e como ela é levada a aceitar sua posição de
              escravizada tão facilmente, assim como ela própria narra no livro.
            </p>
          </div>
        </div>
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
              <p id="citation">
                <i>
                  "Comecei a escrever sobre poder já que eu tinha tão pouco
                  dele"
                </i>{" "}
                - Octavia E. Butler, “The Science Fiction of Octavia Butler”
              </p>
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

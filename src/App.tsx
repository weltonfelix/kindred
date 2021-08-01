import { IoIosArrowDown as ArrowDown } from "react-icons/io";
import { BiCodeAlt } from "react-icons/bi";

import Chapter from "./Chapter";
import Navigator from "./Navigator";

import "./global.css";
import "./App.css";

function App() {
  return (
    <>
      <Navigator
        home={{
          id: "title",
          isActive: true,
        }}
        author={{
          id: "author",
          isActive: false,
        }}
        chapters={[{ id: "chapter-1", isActive: false }]}
      />
      <div id="container">
        <div className="snap-section">
          <main id="title">
            <h1>Kindred</h1>
            <h3>Octavia Butler</h3>
            <a href="#chapter-1">
              <p>Começar</p>
              <ArrowDown color="#ffffff" size="32" />
            </a>
          </main>
        </div>
        <Chapter id="chapter-1">
          <p>Chapter</p>
        </Chapter>
        <div className="snap-section">
          <div id="author">
            <div>
              <h2>Sobre a autora</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur iste corporis nisi eum sequi provident natus facilis
                dolor, dicta voluptas optio quo id ex itaque, sit laudantium
                omnis cupiditate placeat!
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
                  href="https://github.com/weltonfelix"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Welton Felix
                </a>{" "}
                e{" "}
                <a
                  href="https://github.com/fabiopapais"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fábio Papais
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

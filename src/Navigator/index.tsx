import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { FaUserCircle, FaRegUserCircle } from "react-icons/fa";

import "./Navigator.css";

type Chapter = {
  isActive: boolean;
  id: string;
};

type Home = {
  isActive: boolean;
  id: string;
};

type Author = {
  isActive: boolean;
  id: string;
};

interface NavigatorProps {
  home: Home;
  author: Author;
  chapters: Chapter[];
}

const Navigator: React.FC<NavigatorProps> = ({ home, author, chapters }) => {
  return (
    <>
      <nav>
        <a href={`#${home.id}`}>
          {home.isActive ? (
            <AiFillHome size="28" color="#c54747" className="nav-item" />
          ) : (
            <AiOutlineHome size="28" color="#c54747" className="nav-item" />
          )}
        </a>
        {chapters.map(({ id, isActive }) => (
          <a
            href={`#${id}`}
            className={`nav-item chapterNav ${isActive ? "active" : ""}`}
          >
            <div />
          </a>
        ))}
        <a href={`#${author.id}`}>
          {author.isActive ? (
            <FaUserCircle size="28" color="#c54747" className="nav-item" />
          ) : (
            <FaRegUserCircle size="28" color="#c54747" className="nav-item" />
          )}
        </a>
      </nav>
    </>
  );
};

export default Navigator;

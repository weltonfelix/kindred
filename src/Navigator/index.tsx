import { AiFillHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

import "./Navigator.css";

interface NavigatorProps {
  homeId: string;
  authorId: string;
  chapters: string[];
}

const Navigator: React.FC<NavigatorProps> = ({
  homeId,
  authorId,
  chapters,
}) => {
  return (
    <>
      <nav>
        <a href={`#${homeId}`}>
          <AiFillHome size="28" color="#c54747" />
        </a>
        {chapters.map((chapterId) => (
          <a href={`#${chapterId}`} className="chapterNav">
            <div />
          </a>
        ))}
        <a href={`#${authorId}`}>
          <FaUserCircle size="28" color="#c54747" />
        </a>
      </nav>
    </>
  );
};

export default Navigator;

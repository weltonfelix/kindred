import "./Chapter.css";

interface ChapterProps {
  id?: string;
}

const Chapter: React.FC<ChapterProps> = ({ children, id, ...props }) => {
  return (
    <div id={id} className="chapter-container">
      <div className="chapter">{children}</div>
    </div>
  );
};

export default Chapter;

import "./Chapter.css";

interface ChapterProps {
  id?: string;
}

const Chapter: React.FC<ChapterProps> = ({ id }) => {
  return (
    <div className="chapter" id={id}>
      <h1>Chapter</h1>
    </div>
  );
};

export default Chapter;

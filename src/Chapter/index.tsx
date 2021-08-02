import "./Chapter.css";

interface ChapterProps {
  id?: string;
  title?: string;
  colors?: string[];
}

const Chapter: React.FC<ChapterProps> = ({ children, id, title, colors }) => {
  return (
    <div
      id={id}
      className="chapter-container"
      style={colors && {
        background: `linear-gradient(220deg, ${colors[0]}, ${colors[1]})`,
        backgroundSize: "400% 400%",
      }}
    >
      <div className="chapter">
        {title && <h1 className="chapter-title">{title}</h1>}
          {children}
      </div>
    </div>
  );
};

export default Chapter;

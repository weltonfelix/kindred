import "./Chapter.css";

interface ChapterProps {
  id?: string;
  bgImage: string;
}

const Chapter: React.FC<ChapterProps> = ({ children, id, bgImage }) => {
  return (
    <>
      <div className="chapter">{children}</div>
      <div className="chapter-bg" id={id}>
        <img
          className="chapter-image"
          src={`/assets/images/${bgImage}`}
          alt=""
        />
        <img
          className="chapter-image-bg"
          src={`/assets/images/${bgImage}`}
          alt=""
        />
      </div>
    </>
  );
};

export default Chapter;

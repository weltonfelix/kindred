import "./Chapter.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { useEffect } from "react";

interface ChapterProps {
  id?: string;
  colors?: string[];
  title?: string;
  images: string[];
  texts: string[];
}

const Chapter: React.FC<ChapterProps> = ({
  id,
  colors,
  title,
  images,
  texts,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [textsActiveList, setTextsActiveList] = useState([
    "active",
    ...Array(images.length - 1).fill(""),
  ]);

  useEffect(() => {
    let newTextList = textsActiveList.map((text, text_index) => {
      if (text_index === currentImageIndex) {
        return "active";
      } else if (text === "active") {
        return "";
      } else return "";
    });
    setTextsActiveList(newTextList);
  }, [currentImageIndex]);

  function updateCurrentImage(index: number) {
    setCurrentImageIndex(index);
  }

  function handleTextClick(index: number) {
    updateCurrentImage(index)
  }

  return (
    <div
      id={id}
      className="chapter-container"
      style={
        colors && {
          background: `linear-gradient(220deg, ${colors[0]}, ${colors[1]})`,
          backgroundSize: "150% 150%",
        }
      }
    >
      <div className="chapter">
        {title && <h1 className="chapter-title">{title}</h1>}
        <div className="chapter-content" id={`${id}-content`}>
          <div className="chapter-carousel">
            <Carousel
              emulateTouch={true}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              dynamicHeight={true}
              onChange={updateCurrentImage}
              selectedItem={currentImageIndex}
            >
              {images.map((url, index) => (
                <img src={url} alt={`scene-${index}`} />
              ))}
            </Carousel>
          </div>
          <div className="chapter-texts">
            <div className="texts-container">
              {texts.map((text, index) => (
                <p className={textsActiveList[index]} id={`${index}`} onClick={() => handleTextClick(index)}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter;

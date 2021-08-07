import { useState, useEffect } from "react";
import "./Chapter.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import VisibilitySensor from "react-visibility-sensor";
import ReactHowler from "react-howler";

interface ChapterProps {
  id?: string;
  colors?: string[];
  title?: string;
  images: string[];
  texts: string[];
  audio?: string;
  sectionTime?: number;
}

const Chapter: React.FC<ChapterProps> = ({
  id,
  colors,
  title,
  images,
  texts,
  audio,
  sectionTime,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [textsActiveList, setTextsActiveList] = useState([
    "active",
    ...Array(images.length - 1).fill(""),
  ]);
  const [chapterVisibility, setChapterVisibility] = useState(false);

  useEffect(() => {
    let newTextList = textsActiveList.map((text, text_index) => {
      if (text_index === currentImageIndex) {
        return "active";
      } else if (text === "active") {
        return "";
      } else return "";
    });
    setTextsActiveList(newTextList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImageIndex]);

  function updateCurrentImage(index: number) {
    setCurrentImageIndex(index);
  }

  function handleTextClick(index: number) {
    updateCurrentImage(index);
  }

  function changeChapterVisibility(state: boolean) {
    setChapterVisibility(state);
  }

  return (
    <>
      <ReactHowler
        src={`${audio}`}
        format={["mp3", "mpeg"]}
        preload={false}
        onLoad={() => console.log("oi")}
        onLoadError={() => console.log("oi")}
        playing={chapterVisibility}
        loop={true}
      />
      <VisibilitySensor onChange={(event) => changeChapterVisibility(event)}>
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
                  interval={sectionTime ? sectionTime / images.length : 5000}
                  showThumbs={false}
                  showStatus={false}
                  showIndicators={false}
                  dynamicHeight={true}
                  onChange={updateCurrentImage}
                  selectedItem={currentImageIndex}
                >
                  {images.map((url, index) => (
                    <img key={index} src={url} alt={`scene-${index}`} />
                  ))}
                </Carousel>
              </div>
              <div className="chapter-texts">
                <div className="texts-container">
                  {texts.map((text, index) => (
                    <p
                      key={index}
                      className={textsActiveList[index]}
                      id={`${index}`}
                      onClick={() => handleTextClick(index)}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </VisibilitySensor>
    </>
  );
};

export default Chapter;

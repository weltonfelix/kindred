import "./Chapter.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              dynamicHeight={true}
            >
              <img src="assets/images/chapter-1/scene1.png" alt="Scene1" />
              <img src="/assets/images/chapter-1/scene2.jpeg" alt="Scene2" />
            </Carousel>
          </div>
          <div className="chapter-texts">
            <div className="texts-container">
              <p id="1" className="active">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ullamcorper morbi tincidunt ornare massa eget egestas purus
                viverra. Justo eget magna fermentum iaculis. Leo duis ut diam
                quam nulla porttitor massa.
              </p>
              <p id="2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ullamcorper morbi tincidunt ornare massa eget egestas purus
                viverra. Justo eget magna fermentum iaculis. Leo duis ut diam
                quam nulla porttitor massa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter;

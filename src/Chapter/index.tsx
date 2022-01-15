import { useState } from "react";
import "./Chapter.css";

import { usePalette } from "react-palette";
import Modal from "react-modal";

interface Coords {
  left: number;
  top: number;
}

interface ChapterProps {
  id?: string;
  title?: string;
  image: string;
  texts: string[];
  titles: string[];
  coords: Coords[];
}

const Chapter: React.FC<ChapterProps> = ({
  id,
  title,
  image,
  texts,
  titles,
  coords,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [currentModalIndex, setCurrentModalIndex] = useState(0);

  const { data } = usePalette(image);

  function openModal(modalIndex: number) {
    setShowModal(true)
    setCurrentModalIndex(modalIndex)
  }

  function closeModal() {
    setShowModal(false)
  }

  return (
    <>
      <Modal
      isOpen={showModal}
      onRequestClose={closeModal}>
        <h1 className="modal-title">{titles[currentModalIndex]}</h1>
        <p className="modal-text">{texts[currentModalIndex]}</p>
      </Modal>
      <div
        id={id}
        className="chapter-container"
        style={{
          background: `linear-gradient(220deg, ${data.darkMuted}, ${data.darkVibrant})`,
          backgroundSize: "300% 300%",
        }}
      >
        <div className="chapter">
          <h1 className="chapter-title" style={{ color: '#fff' }}>
            {title}
          </h1>
          <div className="chapter-content" id={`${id}-content`}>
            <img
              alt={title}
              src={image}
              style={{ border: `10px solid ${data.vibrant}`}}
            />
            <div className="imap">
              {coords.map((coord, index) => (
                <div
                  onClick={() => openModal(index)}
                  className="imap-item"
                  style={{ left: coord.left, top: coord.top }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chapter;

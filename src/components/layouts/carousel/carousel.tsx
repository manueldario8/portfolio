import { useState } from 'react';
import './carousel1.css';

type CarouselProps = {
  images: string[];
};



const Carousel = ({ images }: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const handlePrev = () => {
    setIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="carousel">
        <button onClick={handlePrev} className="btn-carousel">
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${index * 100}%)`,
              transition: 'transform 0.3s ease'
            }}
          >
            {images.map((src, i) => (
              <img key={i} src={src} alt={`slide-${i}`} />
            ))}
          </div>
        </div>

        <button onClick={handleNext} className="btn-carousel">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>


    </>
  );
};

export default Carousel;
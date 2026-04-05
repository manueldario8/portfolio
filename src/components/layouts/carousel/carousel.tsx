import { useState } from 'react';
import './carousel.css';

type CarouselProps = {
  images: string[];
};

const Carousel = ({ images }: CarouselProps) => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="carousel" style={{ transform: `translateX(-${index * 100}%)`, transition: 'transform 0.3s ease' }}>

        <button onClick={() => setIndex(index - 1)} className='btn-carousel'><i className="fa-solid fa-chevron-left"></i></button>

        {images.map((src, i) => (
          <img key={i} src={src} alt={`slide-${i}`} />
        ))}
        <button onClick={() => setIndex(index + 1)} className='btn-carousel'><i className="fa-solid fa-chevron-right"></i></button>
      </div>
      

    </>
  );
};

export default Carousel;
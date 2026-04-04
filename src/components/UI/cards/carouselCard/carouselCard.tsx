import './carouselCard.css';

type CardProps = {
  children?: React.ReactNode;
};

const CarouselCard = ({ children }: CardProps) => {
  return (
    <div className="card-container">
      <div className="card-inner">
        <div className="carousel-container">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
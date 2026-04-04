import './cards.css';

type CardProps = {
  image?: string;
  title: string;
  description: string;
  link: string;
  children?: React.ReactNode;
};

const Card = ({ title, description, link, children }: CardProps) => {
  return (
    <div className="card-container">
      <div className="card-inner">
        
        <section className="carousel-container">
          {children}
        </section>

        <span className="card-title">
          <p>{title}</p>
        </span>

        <span className="card-information">
          <p>{description}</p>
        </span>

        <span className="card-link">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </span>

      </div>
    </div>
  );
};

export default Card;
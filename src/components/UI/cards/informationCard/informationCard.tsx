import './informationCard.css';
import { useState } from 'react';

type SectionKey = 'Resumen' | 'Desarrollo' | 'Frontend' | 'Backend';

type SectionData = {
  title: string;
  description: string;
};

type ProjectData = {
  name: string;
  sections: Record<SectionKey, SectionData>;
  technologies: string[];
  github: string;
  demo: string;
};

type InformationCardProps = {
  data: ProjectData;
};

const sections: SectionKey[] = ['Resumen', 'Desarrollo', 'Frontend', 'Backend'];

const InformationCard = ({ data }: InformationCardProps) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const activeSection = sections[activeIndex];
  const current = data.sections[activeSection];

  const handlePrev = () => { setActiveIndex(prev => (prev === 0 ? sections.length - 1 : prev - 1)); };

  const handleNext = () => { setActiveIndex(prev => (prev === sections.length - 1 ? 0 : prev + 1)); };

  return (
    <div className="inner-information">
      <div className="up-inner">
        <h3 className='main-pj-title'>{data.name}</h3>

        <div className="view-actions">
          <button onClick={handlePrev}><i className="fa-solid fa-angles-left"></i></button>
          {sections.map((section, index) => (
            <button key={section} className={`btn-action mini-${activeIndex === index ? 'active' : ''}`} onClick={() => setActiveIndex(index)}>
              {section}
            </button>
          ))}

          <button onClick={handleNext}>
            <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>

        <section className='card-screem'>
          <h3>{current.title}</h3>
          <section>
            <p>{current.description}</p>
          </section>
        </section>

        <section className=' btn-reviewCode'>
          <a href={data.github} target="_blank">
            <button className="btn-code">Github</button>
          </a>

          <a href={data.demo} target="_blank">
            <button className="btn-code">Demo</button>
          </a>
        </section>

        <div className="view-tecnologies">
          {data.technologies.map((tech, i) => (
            <span key={i}>
              <p>{tech}</p>
            </span>
          ))}
        </div>

      </div>

    </div>
  );
};

export default InformationCard;
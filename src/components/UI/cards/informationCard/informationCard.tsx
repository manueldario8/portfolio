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

  const [activeSection, setActiveSection] = useState<SectionKey>('Resumen');

  const current = data.sections[activeSection];

  return (
    <div className="information-container">
      <div className="inner-information">

        <div className="up-inner">
          <h3 className='main-sc-title'>Proyecto</h3>
          <h4 className='main-pj-title'>{data.name}</h4>

          <div className="view-actions">
            {sections.map(section => (
              <button key={section} className="btn-action" onClick={() => setActiveSection(section)}>
                {section}
              </button>
            ))}
          </div>
          <section className='card-screem'>
          <h3>{current.title}</h3>
          <section>
            <p>{current.description}</p>
          </section>
          </section>

          <section className=' btn-reviewCode'>
            <a href={data.github} target="_blank" rel="noopener noreferrer">
              <button className="btn-code">Github</button>
            </a>

            <a href={data.demo} target="_blank" rel="noopener noreferrer">
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
    </div>
  );
};

export default InformationCard;
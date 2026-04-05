import './informationCard.css';
import { useState } from 'react';

type SectionKey = 'summary' | 'development' | 'frontend' | 'backend';

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

const sections: SectionKey[] = ['summary', 'development', 'frontend', 'backend'];

const InformationCard = ({ data }: InformationCardProps) => {

  const [activeSection, setActiveSection] = useState<SectionKey>('summary');

  const current = data.sections[activeSection];

  return (
    <div className="information-container">
      <div className="inner-information">

        <div className="up-inner">
          <h3>Proyecto</h3>
          <h4>{data.name}</h4>

          <div className="view-actions">
            {sections.map(section => (
              <button
                key={section}
                className="btn-action"
                onClick={() => setActiveSection(section)}
              >
                {section}
              </button>
            ))}
          </div>
        </div>

        <div className="dw-inner">
          <h3>{current.title}</h3>

          <h4>{current.title}</h4>

          <section>
            <p>{current.description}</p>
          </section>

          <section>
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
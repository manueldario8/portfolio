import './dashboard.css';
import { Carousel, CarouselCard, Button, InformationCard } from '../../exports';
import { useTheme } from '../../../context/ThemeContext';
import { Naruto, Sasuke, Sakura, Gaara, Temari, Kankuro, Rocklee, Tenten, Neji } from '../../../assets/exports';

const projects = [
    {
        name: 'Proyecto Naruto',
        sections: {
            summary: {
                title: 'Resumen',
                description: 'Descripción general del proyecto Naruto'
            },
            development: {
                title: 'Desarrollo',
                description: 'Cómo se desarrolló el proyecto Naruto'
            },
            frontend: {
                title: 'Frontend',
                description: 'React, UI, etc'
            },
            backend: {
                title: 'Backend',
                description: '.NET, API, base de datos'
            }
        },
        technologies: ['React', '.NET', 'SQL Server'],
        github: 'https://github.com',
        demo: 'https://demo.com'
    },
    {
        name: 'Proyecto Gaara',
        sections: {
            summary: {
                title: 'Resumen',
                description: 'Descripción general del proyecto Gaara'
            },
            development: {
                title: 'Desarrollo',
                description: 'Detalles de desarrollo'
            },
            frontend: {
                title: 'Frontend',
                description: 'Interfaz y lógica cliente'
            },
            backend: {
                title: 'Backend',
                description: 'Servicios y base de datos'
            }
        },
        technologies: ['React', 'Node', 'MongoDB'],
        github: 'https://github.com',
        demo: 'https://demo.com'
    },
    {
        name: 'Proyecto Lee',
        sections: {
            summary: {
                title: 'Resumen',
                description: 'Descripción general del proyecto Lee'
            },
            development: {
                title: 'Desarrollo',
                description: 'Proceso de desarrollo'
            },
            frontend: {
                title: 'Frontend',
                description: 'UI y experiencia'
            },
            backend: {
                title: 'Backend',
                description: 'API y lógica'
            }
        },
        technologies: ['Angular', '.NET', 'MySQL'],
        github: 'https://github.com',
        demo: 'https://demo.com'
    }
];

const Dashboard = () => {
    const { theme } = useTheme();
    return (
        <>
            <header className={`preview pv-${theme}`}>
                <div className="devname">
                    <h2>Software Developer</h2>
                    <h1>Manuel Darío</h1>
                </div>
                <span><p>Fullstack .NET & React</p></span>
                <span className="buttons-contact">
                    <Button onClick={() => window.open("https://www.linkedin.com/in/manueldario8")}>
                        LinkedIn
                    </Button>
                    <Button onClick={() => window.open("https://google.com")}>
                        Descargar CV
                    </Button>
                </span>
            </header>
            <main className={`dashboard txtc-${theme}`}>
                <InformationCard data={projects[0]} />
                <CarouselCard>
                    <Carousel images={[Naruto, Sakura, Sasuke]} />
                </CarouselCard>

                <InformationCard data={projects[1]} />
                <CarouselCard>
                    <Carousel images={[Gaara, Kankuro, Temari]} />
                </CarouselCard>

                <InformationCard data={projects[2]} />
                <CarouselCard>
                    <Carousel images={[Tenten, Neji, Rocklee]} />
                </CarouselCard>
            </main>
        </>
    );
}

export default Dashboard;
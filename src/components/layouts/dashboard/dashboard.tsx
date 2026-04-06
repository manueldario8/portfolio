import './dashboard.css';
import { Carousel, CarouselCard, Button, InformationCard } from '../../exports';
import { useTheme } from '../../../context/ThemeContext';
import { Naruto, Sasuke, Sakura, Gaara, Temari, Kankuro, Rocklee, Tenten, Neji} from '../../../assets/exports';

const projects = [
    {
        name: 'Stock manager con login de usuarios',
        sections: {
            Resumen: {
                title: 'Resumen',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, temporibus quam animi, quae fugit odit non laborum nam quas soluta nostrum debitis, vero totam! Consectetur ipsum autem beatae esse mollitia. Una aplicación web que maneja la subida, edición y administración de productos, proveedores y categorías, con interfaz de usuario amigable'
            },
            Desarrollo: {
                title: 'Desarrollo',
                description: 'En esta aplicación los puntos claves a desarrollar era la posibilidad de integrar procesos de autentificación de ususarios, roles, manejo de datos usando Entity Framework'
            },
            Frontend: {
                title: 'Frontend',
                description: 'Para el desarrollo del frontend de esta aplicación utilicé React, CSS, HTML y TypeScript'
            },
            Backend: {
                title: 'Backend',
                description: 'El backend de este proyecto está compuesto por tecnologías del ambiente .NET, principalmente C# y EntityFramework, también su base de datos se maneja con SQL Server, sus sistemas de autentificación se implementan con JWT y la subida de imáenes en el storage con Cloudinary'
            }
        },
        technologies: ['React', 'C#', 'SQL Server', 'HTML', 'CSS', 'Entity Framework'],
        github: 'https://github.com',
        demo: 'https://demo.com'
    },
    {
        name: 'ECommerce',
        sections: {
            Resumen: {
                title: 'Resumen',
                description: 'Descripción general del proyecto Gaara'
            },
            Desarrollo: {
                title: 'Desarrollo',
                description: 'Detalles de desarrollo'
            },
            Frontend: {
                title: 'Frontend',
                description: 'Interfaz y lógica cliente'
            },
            Backend: {
                title: 'Backend',
                description: 'Servicios y base de datos'
            }
        },
        technologies: ['React', 'Node', 'MongoDB'],
        github: 'https://github.com',
        demo: 'https://demo.com'
    },
    {
        name: 'Chess game vs IA',
        sections: {
            Resumen: {
                title: 'Resumen',
                description: 'Descripción general del proyecto Lee'
            },
            Desarrollo: {
                title: 'Desarrollo',
                description: 'Proceso de desarrollo'
            },
            Frontend: {
                title: 'Frontend',
                description: 'UI y experiencia'
            },
            Backend: {
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
                        <i className="fa-brands fa-linkedin"></i> LinkedIn
                    </Button>
                    <a href='../../../../public/Manuel_Dario_Marquez.pdf' download>
                        <Button><i className="fa-solid fa-file-arrow-down"></i> Descargar CV</Button>
                    </a>
                </span>
            </header>
            <main className={`dashboard txtc-${theme}`}>

                <section className='dual-pj-card'>
                    <InformationCard data={projects[0]} />
                    <CarouselCard>
                        <Carousel images={[Naruto, Sakura, Sasuke]} />
                    </CarouselCard>
                </section>

                <section className='dual-pj-card'>
                    <InformationCard data={projects[1]} />
                    <CarouselCard>
                        <Carousel images={[Gaara, Kankuro, Temari]} />
                    </CarouselCard>
                </section>
                <section className='dual-pj-card'>
                    <InformationCard data={projects[2]} />
                    <CarouselCard>
                        <Carousel images={[Tenten, Neji, Rocklee]} />
                    </CarouselCard>
                </section>
            </main>
        </>
    );
}

export default Dashboard;
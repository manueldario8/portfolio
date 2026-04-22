import './dashboard.css';
import { Carousel, CarouselCard, Button, InformationCard } from '../../exports';
import { useTheme } from '../../../context/ThemeContext';
import { Cap1, Cap2, Cap3, ManuelDarioPDF} from '../../../assets/exports';

const projects = [
    {
        name: 'Stock manager con login de usuarios',
        sections: {
            Resumen: {
    title: 'Resumen',
    description: 'StockManager es una aplicación de gestión de inventario diseñada bajo una arquitectura cliente-servidor desacoplada. Permite administrar productos, proveedores y operaciones de stock mediante una API REST propia. El sistema incorpora autenticación segura basada en JWT, persistencia de sesión en el cliente y despliegue en infraestructura cloud (AWS), garantizando escalabilidad, mantenibilidad y separación de responsabilidades.'
},

Desarrollo: {
    title: 'Desarrollo',
    description: 'El desarrollo sigue principios de arquitectura limpia, separando el sistema en capas (Core, Infrastructure y API) para aislar la lógica de negocio de los detalles de implementación. Se aplican patrones como Repository y Service para mejorar la testabilidad y el desacoplamiento. Se implementó un pipeline de CI/CD automatizado para integración y despliegue continuo, junto con la configuración manual de infraestructura en AWS (EC2 y RDS), incluyendo gestión de variables de entorno, control de accesos mediante Security Groups y resolución de problemas en producción.'
},

Frontend: {
    title: 'Frontend',
    description: 'El frontend está desarrollado en React con una arquitectura modular y escalable. Se implementa un cliente HTTP centralizado para la comunicación con la API y manejo consistente de errores. La autenticación se gestiona mediante JWT con persistencia en localStorage, incluyendo protección de rutas y control de sesión. Se prioriza la separación de responsabilidades en componentes, reutilización de lógica y una base preparada para crecimiento (features desacopladas y mantenibles).'
},

Backend: {
    title: 'Backend',
    description: 'La API está desarrollada en ASP.NET Core utilizando Entity Framework para la persistencia de datos. Implementa autenticación y autorización mediante JWT, validaciones de dominio y una estructura basada en capas que desacopla controladores, servicios y repositorios. Se integra con Cloudinary para la gestión de archivos multimedia. Incluye manejo de configuración por entorno, despliegue en EC2 y conexión a base de datos en RDS. Se contemplan buenas prácticas como separación de contratos, manejo de errores y diseño orientado a escalabilidad.'
}
        },
        technologies: ['React', 'TypeScript', 'CSS', 'HTML', 'C#', 'Entity Framework'],
        github: 'https://github.com/manueldario8/StockManagerVercel',
        demo: 'https://stockmanager-manueldario.vercel.app/'
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
                    <h2 className={`h2-stl-${theme}`}>Software Developer</h2>
                    <h1 className={`h1-stl-${theme}`}>Manuel Darío</h1>
                </div>
                <span className={`spanp-stl-${theme}`}><p>Fullstack .NET & React</p></span>
                <span className="buttons-contact">
                    <Button onClick={() => window.open("https://www.linkedin.com/in/manueldario8")}>
                        <i className="fa-brands fa-linkedin"></i> LinkedIn
                    </Button>
                    <a href={ManuelDarioPDF} download>
                        <Button><i className="fa-solid fa-file-arrow-down"></i> Descargar CV</Button>
                    </a>
                </span>
            </header>
            <main className={`dashboard txtc-${theme}`}>
                <section className='dual-pj-card'>
                    <InformationCard data={projects[0]}/>
                    <CarouselCard>
                        <Carousel images={[Cap1, Cap2, Cap3]} />
                    </CarouselCard>
                </section>
                <section className='dual-pj-card'>
                    <InformationCard data={projects[1]} />
                    <CarouselCard>
                        <Carousel images={[Cap1, Cap2, Cap3]} />
                    </CarouselCard>
                </section>
                <section className='dual-pj-card'>
                    <InformationCard data={projects[2]} />
                    <CarouselCard>
                        <Carousel images={[Cap1, Cap2, Cap3]} />
                    </CarouselCard>
                </section>
            </main>
        </>
    );
}

export default Dashboard;
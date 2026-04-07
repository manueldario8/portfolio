import './dashboard.css';
import { Carousel, CarouselCard, Button, InformationCard } from '../../exports';
import { useTheme } from '../../../context/ThemeContext';
import { Naruto, Sasuke, Sakura, Gaara, Temari, Kankuro, Rocklee, Tenten, Neji, ManuelDarioPDF} from '../../../assets/exports';

const projects = [
    {
        name: 'Stock manager con login de usuarios',
        sections: {
            Resumen: {
                title: 'Resumen',
                description: 'Un proyecto integrador de una aplicación completa de manejo de entidades que sirve también como API para una Ecommerce. El punto fuerte de esta aplicación es el control y manejo de datos de proveedores, productos, categorías y órdenes. Así mismo se le provee al usuario que quiera manejar la API una interfaz agradable e intuitiva para que pueda hacer las típicas operaciones de datos (CRUD) sobre las entidades que requieran ser mostradas en una ECommerce.'
            },
            Desarrollo: {
                title: 'Desarrollo',
                description: 'Acerca del desarrollo de este proyecto se pueden destacar el uso de autenticación y autorización por roles para los diferentes usuarios, también los respectivos '
            },
            Frontend: {
                title: 'Frontend',
                description: 'El desarrollo de la interfaz está hecho en su totalidad con React.JS y Typescript, CSS y HTML.'
            },
            Backend: {
                title: 'Backend',
                description: 'El backend de este proyecto está compuesto por tecnologías del ambiente .NET, principalmente C# y EntityFramework, también su base de datos se maneja con SQL Server, sus sistemas de autentificación se implementan con JWT y la subida de imágenes en el storage con Cloudinary.'
            }
        },
        technologies: ['React', 'TypeScript', 'CSS', 'HTML', 'C#', 'Entity Framework'],
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
                    <a href={ManuelDarioPDF} download>
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
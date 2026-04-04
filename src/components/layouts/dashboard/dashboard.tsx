import './dashboard.css';
import { Carousel, CarouselCard, Button } from '../../exports';
import { useTheme } from '../../../context/ThemeContext';
import { Naruto, Sasuke, Sakura, Gaara, Temari, Kankuro, Rocklee, Tenten, Neji } from '../../../assets/exports';


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
            <main className="dashboard">
                <section> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, ab? Voluptas consectetur ducimus atque culpa corporis enim! Maxime dolorum facilis voluptas, cum odio molestias nam necessitatibus expedita suscipit ab et?</p></section>
                <CarouselCard>
                    <Carousel images={[Naruto, Sakura, Sasuke]} />
                </CarouselCard>
                <section> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, ab? Voluptas consectetur ducimus atque culpa corporis enim! Maxime dolorum facilis voluptas, cum odio molestias nam necessitatibus expedita suscipit ab et?</p></section>
                <CarouselCard>
                    <Carousel images={[Gaara, Kankuro, Temari]} />
                </CarouselCard>
                <section> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, ab? Voluptas consectetur ducimus atque culpa corporis enim! Maxime dolorum facilis voluptas, cum odio molestias nam necessitatibus expedita suscipit ab et?</p></section>
                <CarouselCard>
                    <Carousel images={[Tenten, Neji, Rocklee]} />
                </CarouselCard>
            </main>
        </>
    );
}

export default Dashboard;
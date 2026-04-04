import './dashboard.css';
import { Carousel, Card, Button } from '../../exports';


const Dashboard = () => {
    return (
        <>
            <header className='preview'>
                <div className="devname">
                    <h2>Software Developer</h2>
                    <h1>Manuel Darío</h1>
                </div>
                <span><p>Fullstack .NET & React</p></span>
                <span className="buttons-contact">
                    <Button onClick={() => window.open("https://linkedin.com")}>
  LinkedIn
</Button>
<Button onClick={() => window.open("https://google.com")}>
  Github
</Button>
                </span>
            </header>
            <main className="dashboard">
                <section> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, ab? Voluptas consectetur ducimus atque culpa corporis enim! Maxime dolorum facilis voluptas, cum odio molestias nam necessitatibus expedita suscipit ab et?</p></section>
                <Card title="Test1" description="Probando" link="https://google.com">
                    <Carousel />
                </Card>
                <section> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, ab? Voluptas consectetur ducimus atque culpa corporis enim! Maxime dolorum facilis voluptas, cum odio molestias nam necessitatibus expedita suscipit ab et?</p></section>
                <Card title="Test2" description="Probando" link="https://google.com">
                    <Carousel />
                </Card>
                <section> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, ab? Voluptas consectetur ducimus atque culpa corporis enim! Maxime dolorum facilis voluptas, cum odio molestias nam necessitatibus expedita suscipit ab et?</p></section>
                <Card title="Test3" description="Probando" link="https://google.com">
                    <Carousel />
                </Card>
            </main>
        </>
    );
}

export default Dashboard;
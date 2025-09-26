import Header from "./componentes/Header"
import Banner from "./componentes/Banner"
import ImgCard from "./componentes/ImgCard"
import Button from "./componentes/Button"
import img1 from "./assets/img-card1.jpg"
import img2 from "./assets/img-card2.jpg"
import img3 from "./assets/img-card3.jpg"
import "./App.css"

function App() {

    const handleClick = () => {
        alert("testes")
    }

    return (

        <main className="container">

            <Header title="Meu Site" />

            <Banner>
                <h1>Bem vindo!</h1>
                <p>Aqui você encontra as melhores ofertas</p>
            </Banner>

            <ImgCard
                caption="Uma Imagem Interessante"
                imagem={img1}
                texto="Piano"
            />

            <ImgCard
                caption=""
                imagem={img2}
                texto="Afogada"
                link="https://bahamashotelclub.com.br/"
            />

            <ImgCard
                caption=""
                imagem={img3}
                texto="Farol"
            />

            <Button
                text="Clique aqui"
                onclick={handleClick}
            />

        </main>

    )
}

export default App

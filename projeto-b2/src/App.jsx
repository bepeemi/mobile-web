import Header from "./componentes/Header"
import Banner from "./componentes/Banner"
import ImgCard from "./componentes/ImgCard"
import Button from "./componentes/Button"
import "./App.css"

function App() {

return(
<main className="container">
<Header title="Meu Site"/>
<Banner>
 <h1>Bem vindo!</h1>
 <p>Aqui você encontra as melhores ofertas</p>
</Banner>
<ImgCard caption="Uma Imagem Interessante"/>
<ImgCard caption="Uma Imagem Interessante"/>
<Button text="Clique aqui"/>
</main>
)
}

export default App

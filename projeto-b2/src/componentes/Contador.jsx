import { Fragment } from "react";
const Contador = () => {
const aumentar = () =>{
    alert ("Olá, Mundo!");
    }
const diminuir = () =>{
    alert ("Adeus, Mundo!");
    }
return (
<Fragment>
    <h1>Contador</h1>
    <section>
    <h2>Resultado</h2>
    <button onClick={aumentar} style={{marginRight: '10px'}}>Aumentar</button>
    <button onClick={diminuir}>Diminuir</button>
    </section>
</Fragment>
)
    
}
export default Contador;
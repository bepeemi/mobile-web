import { useState } from "react";
import "./Contador.css";
const Contador = () => {
// Inicializa o estado com valor 0
const [count, setCount] = useState(0);

const aumentar = () =>{
    setCount(count + 1);   
}
const diminuir = () =>{
    setCount(count - 1);
    }
return (
<div className="container">
    <h1>{count}</h1>
    <section>
    <h2>Resultado</h2>
    <button onClick={aumentar} style={{marginRight: '10px'}}>Aumentar</button>
    <button onClick={diminuir}>Diminuir</button>
    </section>
</div>
)
    
}
export default Contador;
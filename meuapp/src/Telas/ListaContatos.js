import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import axios from 'axios';


export default function ListaContatos() {
    const [contatos, setContatos] = useState([]);

    // Função para buscar contatos do servidor 

    const listaContatos = () => {
        axios
            .get("http://10.0.2.2:3000/contatos")
            .then((resposta) => {
                setContatos(resposta.data)
            })
            .catch((error) => {
                console.error("Erro ao buscar contatos", error);
            });
    }

    // Use o useEffect para buscar dados

    useEffect(() => {
        listaContatos();
    }, [])

    return (
        <View style={style.container}>
            <Text style={style.headFont}>Contatos</Text>
            {contatos.length > 0 ? (
                contatos.map((contato, index) => (
                    <View key={index}>
                        <Text style={style.textName}>{contato.nome}</Text>
                        <Text style={style.textNum}>{contato.telefone}</Text>
                    </View>
                ))
            ) : (
                <Text></Text>
            )}

        </View>
    )
}

const style = StyleSheet.create({
container: {
    padding: 20,
    backgroundColor: "#ffffffff",
},
headFont: {
    fontWeight: 'bold',
    fontSize: 30,
},
textName:{
fontSize: 15,
fontWeight: 'bold',
padding: 10,
},
textNum:{
    fontSize: 13,
    marginLeft: 12,
    marginBottom: 10,
},

});

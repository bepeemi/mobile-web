import { View, StyleSheet, Text, Button } from "react-native";
import ListaProdutos from "../Componentes/ListaProdutos";

export default function Prime() {
    return (
        <>

            <View style={estilos.topo}>
                <Text style={estilos.tituloHeader}>Delicia Pastéis</Text>
            </View>

            <View style={estilos.linha} />

            <View>
                <Text style={estilos.lojaContent}>Faça o seu pedido aqui!</Text>
            </View>

            <ListaProdutos />

        </>
    )
}

const estilos = StyleSheet.create({

    topo: {
        width: "100%",
        height: 150,
        backgroundColor: "#ff0000ff",
    },

    tituloHeader: {
        width: "100%",
        color: "#FFD700",
        textAlign: "center",
        paddingTop: 60,
        fontSize: 30,
    },

    linha: {
        height: 8,
        backgroundColor: "#FFD700",
        width: "100%",

    },

    lojaContent: {
        marginTop: 10,
        textAlign: "center",
        fontSize: 20,
        color: "#ff0000ff",
    },

});

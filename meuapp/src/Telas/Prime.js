import { View, StyleSheet, Text, Button } from "react-native";

export default function Prime() {
    return (
        <>

            <View style={estilos.topo}>
                <Text style={estilos.tituloHeader}>Delicia Pastéis</Text>
            </View>

            <View style={estilos.linha} />
            <Text style={estilos.lojaContent}>Faça o seu pedido aqui!</Text>


        </>
    )
}

const estilos = StyleSheet.create({

    topo: {
        width: "100%",
        height: 150,
        backgroundColor: "#FFD700",
    },

    tituloHeader: {
        width: "100%",
        color: "#ff0000ff",
        textAlign: "center",
        paddingTop: 60,
        fontSize: 30,
    },
    
    linha: {
        height: 2,
        backgroundColor: "#ff0000ff",
        width: "100%",

    },

    lojaContent: {
        textAlign: "center",
        fontSize: 20,
        color: "#ff0000ff",
    },

});

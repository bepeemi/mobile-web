import { View, StyleSheet, Text, Button } from "react-native";
import ListaProdutos from "../Componentes/ListaProdutos";
import ListaDoces from "../Componentes/ListaDoces";
import Lista from "../Componentes/Lista";

export default function Prime(){
    return (
        <>
            <View>

                <View style={estilos.topo}>
                    <Text style={estilos.tituloHeader}>Delícia Pastéis - Nova Branch</Text>
                </View>

                <View style={estilos.linha} />

                <View>
                    <Text style={estilos.lojaContent}>Pastéis Tradicionais</Text>
                </View>

                <ListaProdutos />
                <ListaDoces />
                <Lista />

            </View>
        </>
    )
}

const estilos = StyleSheet.create({

    project: {
        backgroundColor: "#d8d8d8ff",
    },
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
        fontWeight: "bold",
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
        fontWeight: "bold",
        color: "#ff0000ff",

    },

});

import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function ListaDoces() {
    const doces = ["Doce de Leite", "Brigadeiro", "Nutella com Morango", "Nutella com Ninho", "Romeu e Julieta"];
    return (

        <>
            <View style={estilos.topText}>
                <Text style={estilos.topText}>Pastéis Doces</Text>
            </View>

            <View style={estilos.container}>
                <FlatList
                    data={doces}
                    renderItem={({ item }) => (
                        <View style={estilos.lastItem}>
                            <Text style={estilos.bullet}>• </Text>
                            <Text style={estilos.text}>{item}</Text>
                        </View>
                    )}
                />

            </View>
        </>

    )
}
const estilos = StyleSheet.create({

    topText: {
        marginBottom: 10,
        alignItems: "center",
        fontWeight: "bold",
        fontSize: 20,
        color: "#ff0000ff",

    },
    container: {
        padding: 20,
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
    },
    bullet: {
        fontSize: 20,
        marginRight: 8,
    },
    lastItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        padding: 12,
        backgroundColor: "#FFD700",
        fontSize: 15,
        borderWidth: 2,
        borderColor: "#000000ff",
        borderRadius: 16,
        elevation: 4,
    },
})
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function Lista() {
    const lista = [

        {
            id: 1,
            nome: 'Água',
            valor: 5,

        },
        {
            id: 2,
            nome: 'Coca-cola Lata 350ml',
            valor: 7,
        },
        {
            id: 3,
            nome: 'Suco Natural',
            valor: 8,
        },
    ];
    return (
    <View style={estilos.container}>
        <Text style={estilos.titulo}>Bebidas</Text>

        {lista.map((lista) => (
            <View style={estilos.card}>
                <Text>{lista.nome}</Text>
                <Text>{lista.valor}</Text>
            </View>
        ))}
    </View>
  )
}

const estilos = StyleSheet.create({ 
    container: {
        padding: 20,
        marginTop: 40,
    }, 
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center'
    },
    card: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        borderColor: "#dedede",
        borderWidth: 1,
        marginBottom: 10
    }
})
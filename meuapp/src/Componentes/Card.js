import { Button, StyleSheet, View, Text } from "react-native";


export default function Card() {
    return (
        <View style={style.container}>
            <Text style={style.cardTitle}>Sobre</Text>
            <Text style={style.cardContent}>Saiba mais sobre nós</Text>
            <Button
                title="Ir para Sobre"
                onPress={
                    () => alert("Botão Pressionado")
                }
            />
        </View>
    )
}


const style = StyleSheet.create({

    container: {
        backgroundColor: '#b2b2b2ff',
        borderRadius: 1.41,
        shadowColor: '#b1b1b1ff',
        shadowOpacity: 0.5,
        elevation: 2,
        margin: 20,
        padding: 20,

    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,


    },
    cardContent: {
        fontSize: 14,
        marginBottom: 10,
    },


});
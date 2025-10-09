import { Text, View, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={estilos.header}>
            <Text style={estilos.textHeader}>Futmisas</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    header: {

        width: '100%',
        height: 120,
        backgroundColor: '#008fbbff',

    },
    textHeader: {

        width: '100%',
        textAlign: 'center',
        color: '#bbff00ff',
        fontWeight: 'bold',
        fontSize: 25,
        paddingTop: 40,

    }

});
import { Text, View, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={style.header}>
            <Text style={style.textHeader}>Ikigai Sushi</Text>
        </View>
    )
}

const style = StyleSheet.create({
    header: {

        width: '100%',
        height: 120,
        backgroundColor: '#ff5e00ff',
        borderBottomColor: '#7bff00ff',
        borderBottomWidth: 4,

    },
    textHeader: {

        width: '100%',
        textAlign: 'center',
        color: '#7bff00ff',
        fontWeight: 'bold',
        fontSize: 25,
        paddingTop: 40,

    }

});
import { Text, View, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={style.header}>
            <Text style={style.textHeader}>IKIGAI</Text>
        </View>
    )
}

const style = StyleSheet.create({
    header: {

        width: '100%',
        height: 120,
        backgroundColor: '#004d64ff',
        borderBottomColor: '#bbff00ff',
        borderBottomWidth: 3,

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
import React from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity } from "react-native";


export default function Card(props) {

    return (
        <View style={style.container}>
            <Text style={style.cardTitle}>{props.title}</Text>
            <Text style={style.cardContent}>{props.content}</Text>

            <TouchableOpacity
                
                style={style.button}
                title={props.textButton}
                onPress={props.onPress}>
            
            <Text style={style.buttonTitle}>Clique aqui</Text>

            </TouchableOpacity>
        </View>
    )
}


const style = StyleSheet.create({

    container: {
        backgroundColor: '#c6c6c6ff',
        borderRadius: 26,
        shadowColor: '#000000ff',
        shadowOpacity: 10,
        elevation: 4,
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
    button: {
        backgroundColor: '#004d64ff',
        padding: 12,
        borderRadius: 26,
        alignItems: 'center',

    },
    buttonTitle: {
        color: '#bbff00ff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
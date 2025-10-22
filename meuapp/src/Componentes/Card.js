import React from 'react';
import { Button, StyleSheet, View, Text } from "react-native";


export default function Card(props) {
    
    return (
        <View style={style.container}>
            <Text style={style.cardTitle}>{props.title}</Text>
            <Text style={style.cardContent}>{props.content}</Text>
            <Button 
                
                title={props.textButton}
                onPress={props.onPress}
                
            />
        </View>
    )
}


const style = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        borderRadius: 16,
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
    button:{
        borderRadius: 16,
    },


});
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Button, Alert, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function Cadastro() {

    const [name, setName] = useState('');
    const [tel, setTel] = useState('');

    const sendContact = async () => {
        if (!name || !tel) {
            Alert.alert('Erro, preencha todos os campos');
            return;
        }

        const newContact = { name, tel };
        axios.post(`http://10.0.2.2:3000/contatos`, newContact)
            .then((resposta) => {
                if (resposta.status === 201) {
                    Alert.alert('Contato salvo!')
                    setName('');
                    setTel('');
                } else {
                    Alert.alert('Falha ao salvar contato')
                }

            })
    }

    return (

        <View style={style.container}>
            <Text style={style.label}>Nome:</Text>
            <TextInput
                style={style.input}
                value={name}
                onChangeText={setName}
                placeholder='Digite o nome'
            />
            <Text style={style.label}>Telefone:</Text>
            <TextInput
                style={style.input}
                value={tel}
                onChangeText={setTel}
                placeholder='Digite o número de telefone'
            />
            {/* <Button title="Cadastrar" onPress={sendContact} /> */}
            <TouchableOpacity onPress={sendContact} style={style.button}>
                <Text style={style.buttonTitle}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#e9e9e9ff',
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: '600'
    },
    input: {
        borderWidth: 1,
        borderColor: '#c6c6c6ff',
        padding: 10,
        marginBottom: 20,
        borderRadius: 26,
        backgroundColor: '#ffffffff',
        elevation: 6,
        shadowOpacity: 2,
        shadowColor: '#000000',
    },
    button: {
        backgroundColor: '#004d64ff',
        maxWidth: '50%',
        width: 125,
        maxHeight: 60,
        marginLeft: 245,
        padding: 10,
        borderRadius: 26,
        alignItems: 'center',
        elevation: 6,
        shadowOpacity: 2,
        shadowColor: '#000000',

    },
    buttonTitle: {
        color: '#bbff00ff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

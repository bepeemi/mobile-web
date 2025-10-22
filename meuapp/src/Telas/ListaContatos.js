import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Button, Alert } from 'react-native';
import axios from 'axios';

export default function ListaContatos() {
  const [contatos, setContatos] = useState([]);

  const listaContatos = () => {
    axios
      .get('http://10.0.2.2:3000/contatos')

      .then((resposta) => {
        setContatos(resposta.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar contatos", error);
      });
  };

  const deleteContato = (id) => {
    axios
      .delete(`http://10.0.2.2:3000/contatos/${id}`)
      .then(() => {
        setContatos(contatos.filter((contato) => contato.id !== id));
        Alert.alert("Sucesso", "Contato Excluído");
      })
      .catch((error) => {
        console.log("Erro", error);
        Alert.alert("Erro ao excluir");
      });
  }

  useEffect(() => {
    listaContatos();
  }, []);

  return (
    <View style={style.container}>
      <Text style={style.title}>Lista de Contatos</Text>

      <ScrollView contentContainerStyle={style.listContainer}>
        {contatos.length > 0 ? (
          contatos.map((contato, index) => (
            <View key={index} style={style.card}>
              <Text style={style.textName}>{contato.name}</Text>
              <Text style={style.textNum}>{contato.tel}</Text>
              <Button
                title="Excluir"
                onPress={() => deleteContato(contato.id)}
              />
            </View>
          ))
        ) : (
          <Text style={style.emptyText}>Nenhum contato disponível</Text>
        )}
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#c6c6c6",
  },
  listContainer: {
    paddingBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 15,
    color: '#000000ff',
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderColor: "#c6c6c6",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 16,
    borderRadius: 16,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 10,
    shadowRadius: 4,
    elevation: 4,
  },
  textName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000ff',
  },
  textNum: {
    fontSize: 15,
    color: '#5e5e5eff',
    marginTop: 4,
  },
  errorText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#ff0000ff',
    marginTop: 20,
  },
  button: {
    borderRadius: 60,
  },
});

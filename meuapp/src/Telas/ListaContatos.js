import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

export default function ListaContatos() {
  const [contatos, setContatos] = useState([]);

  const listaContatos = () => {
    axios
      .get("http://10.0.2.2:3000/contatos")
      .then((resposta) => {
        setContatos(resposta.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar contatos", error);
      });
  };

  useEffect(() => {
    listaContatos();
  }, []);

  return (
    <ScrollView style={style.container}>
      <Text style={style.headFont}>Contatos</Text>
      {contatos.length > 0 ? (
        contatos.map((contato, index) => (
          <View key={index} style={style.card}>
            <Text style={style.textName}>{contato.nome}</Text>
            <Text style={style.textNum}>{contato.telefone}</Text>
          </View>
        ))
      ) : (
        <Text style={style.errorText}>Nenhum contato encontrado.</Text>
      )}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffffff",
  },
  headFont: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 15,
    color: '#000000ff',
  },
  card: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6, 
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
});

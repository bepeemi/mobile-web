import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

export default function Faq() {
  const [faq, setFaq] = useState([]);

  const listarFaq = () => {
    axios
      .get("http://10.0.2.2:3000/faq")
      .then((resposta) => {
        setFaq(resposta.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar FAQ", error);
      });
  };

  useEffect(() => {
    listarFaq();
  }, []);

  return (
    <ScrollView style={style.container}>
      <Text style={style.headFont}>Perguntas Frequentes</Text>
      {faq.length > 0 ? (
        faq.map((item, index) => (
          <View key={index} style={style.card}>
            <Text style={style.question}>{item.pergunta}</Text>
            <Text style={style.answer}>{item.resposta}</Text>
          </View>
        ))
      ) : (
        <Text style={style.errorText}>Nenhuma pergunta encontrada.</Text>
      )}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#d1d1d1ff",
  },
  headFont: {
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 15,
    color: '#000000ff',
  },
  card: {
    backgroundColor: "#ffffffff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderRadius: 20,
    shadowColor: "#000000ff",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6,
  },
  question: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000ff',
    marginBottom: 6,
  },
  answer: {
    fontSize: 15,
    color: '#5e5e5eff',
    lineHeight: 20,
  },
  errorText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#ff0000ff',
    marginTop: 20,
  },
});

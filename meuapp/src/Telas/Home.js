import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from '../Componentes/Card'

export default function Home() {
  const navigation = useNavigation();

  return (
    <View>
      <Card
        title="Sobre"
        content="Saiba mais sobre nós e nossos serviços."
        textButton="Saiba Mais"
        onPress={() => navigation.navigate('Sobre')}
      />
      <Card
        title="Faq"
        content="Saiba mais Faq."
        textButton="FAQ "
        onPress={() => navigation.navigate('Faq')}
      />
      <Card
        title="Lista Contatos"
        content="Lista de contatos cadastrados"
        textButton="Contatos"
        onPress={() => navigation.navigate('ListaContatos')}
      />
      <Card
        title="Cadastro"
        content="Cadastro"
        textButton="Cadastrar"
        onPress={() => navigation.navigate('Cadastro')}
      />
    </View>
  )
}


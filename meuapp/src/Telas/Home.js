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
      textButton="Ir para sobre "
      onPress={() => navigation.navigate('Sobre')}
      />
      <Card 
      title="Faq"
      content="Saiba mais Faq."
      textButton="Ir para Faq "
      onPress={() => navigation.navigate('Faq')}
      />
    </View>
  )
}

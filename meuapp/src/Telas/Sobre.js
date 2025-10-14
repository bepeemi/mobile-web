import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import ImageOne from "../../assets/img1.jpg";
import ImageTwo from "../../assets/img2.jpg";



export default function Sobre() {
  const info = {
    nomeApp: 'DiTabela',
    versao: '1.0.0',
    desenvolvedor: 'Nobru'
  };
  return (
    <ScrollView style={style.container}>

      <Text>Nossos Serviços:</Text>

      <Image source={ImageOne} style={style.image} />
      <Text>Suporte Técnico Acertivo</Text>
      <View style={style.line} />

      <Image source={ImageTwo} style={style.image} />
      <Text>Detalhes de Jogabilidade</Text>

      <View style={style.line} />

      <View style={style.titleContainer}>
        <Text style={style.title}>Sobre o app:</Text>

        <Text>Nome: {info.nomeApp}</Text>
        <Text>Versão: {info.versao}</Text>
        <Text>Desenvolvido por: {info.desenvolvedor}</Text>
      </View>

    </ScrollView>
  )
}
const style = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ddddddff'
  },
  image: {
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000000ff',
    shadowOpacity: 300,
    elevation: 6,
    borderRadius: 360,
    borderWidth: 0.2,
  },
  line: {
    width: '90%',
    height: 1,
    backgroundColor: "#c7c7c7ff",
    marginVertical: 10,
  },
  titleContainer:{
    padding: 10,
    width: '90%',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

});

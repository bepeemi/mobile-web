import { Text, View, StyleSheet, Image } from "react-native";
import ImageOne from "../../assets/img1.jpg";
import ImageTwo from "../../assets/img2.jpg";



export default function Sobre() {
  const info = {
    nomeApp: 'DiTabela',
    versao: '1.0.0',
    desenvolvedor: 'Nobru'
  };
  return (
    <View style={style.container}>
      <Text>SOBRE</Text>
      <Image source={ImageOne} style={style.image} />
      <View style={style.line} />
      <Image source={ImageTwo} style={style.image} />
      <View style={style.line} />
     <Text style={style.titulo}>Sobre o app:</Text>
      <Text>Nome: {info.nomeApp}</Text>
      <Text>Versão: {info.versao}</Text>
      <Text>Desenvolvido por: {info.desenvolvedor}</Text>
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    borderRadius: 16,
    borderColor: "#bbff00ff",
    borderWidth: 2,
    margin: 10,
  },
  line: {
    width: '90%',
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  titulo:{
    fontSize: 20,
    fontWeight:"bold",
    marginBottom: 10,
  }

});

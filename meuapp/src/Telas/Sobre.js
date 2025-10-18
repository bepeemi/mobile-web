import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import ImageOne from "../../assets/img1.jpg";
import ImageTwo from "../../assets/img2.jpg";

export default function Sobre() {
  const info = {
    nomeApp: "DiTabela",
    versao: "1.0.0",
    desenvolvedor: "Nobru",
  };

  return (
    <ScrollView style={style.container}>
      <Text style={style.header}>Nossos Serviços</Text>

      <View style={style.card}>
        <Image source={ImageOne} style={style.image} />
        <Text style={style.cardTitle}>Suporte Técnico Acertivo</Text>
      </View>

      <View style={style.card}>
        <Image source={ImageTwo} style={style.image} />
        <Text style={style.cardTitle}>Detalhes de Jogabilidade</Text>
      </View>

      <View style={style.aboutSection}>
        <Text style={style.aboutTitle}>Sobre o app</Text>
        <View style={style.aboutBox}>
          <Text style={style.aboutText}>📱 Nome: {info.nomeApp}</Text>
          <Text style={style.aboutText}>🧩 Versão: {info.versao}</Text>
          <Text style={style.aboutText}>👨‍💻 Desenvolvido por: {info.desenvolvedor}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d1d1d1ff",
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000000ff",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#ffffffff",
    borderRadius: 20,
    paddingVertical: 20,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000000ff",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 360,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000000ff",
  },
  aboutSection: {
    marginTop: 10,
  },
  aboutTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000ff",
    marginBottom: 25,
  },
  aboutBox: {
    backgroundColor: "#ffffffff",
    borderRadius: 20,
    padding: 15,
    shadowColor: "#000000ff",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 6,
  },
  aboutText: {
    fontSize: 16,
    color: "#5e5e5eff",
    marginBottom: 6,
  },
});

import { View, Text, StyleSheet, FlatList } from "react-native";

export default function ListaProdutos() {
  return (
    <View style={estilos.container}>
      <FlatList
        data={["Pastel de Frango c/ Catupiry", "Pastel de Carne Seca", "Pastel de Pizza", "Patel de Vento", "Pastel de Pelo"]}
        renderItem={({ item }) => <Text>• {item}</Text>}
      />
    </View>

  )
}
const estilos = StyleSheet.create({

  container: {
    marginTop: 10,
    padding: 20,
  },

  textProduct: {
    textAlign: "center",
    fontSize: 16,
    color: "#000000ff",
  },

});
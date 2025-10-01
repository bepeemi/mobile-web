import { View, Text, StyleSheet, FlatList } from "react-native";

export default function ListaProdutos() {
  const data = ["Pastel de Frango", "Pastel de Carne"];
  return (
    <View style={estilos.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={estilos.lastItem}>
            <Text style={estilos.bullet}>• </Text>
            <Text style={estilos.text}>{item}</Text>
          </View>
        )}
      />
    </View>

  )
}
const estilos = StyleSheet.create({

  container: {
    marginTop: 40,
    padding: 20,
  },
  lastItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    padding: 12,
  },
  bullet: {
    fontSize: 20,
    marginRight: 8,
  },
  text: {
    fontSize: 16,

  },
});
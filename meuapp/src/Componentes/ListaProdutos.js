import { View, Text, StyleSheet, FlatList } from "react-native";

export default function ListaProdutos() {
  const data = ["Pastel de Frango", "Pastel de Carne", "Pastel de Pizza"];
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
    marginTop: 10,
    padding: 20,
  
  },
  lastItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    padding: 12,
    backgroundColor: "#FFD700",
    fontSize: 15,
    borderWidth: 2,
    borderColor: "#000000ff",
    borderRadius: 16,
    elevation: 4,
  },
  bullet: {
    fontSize: 20,
    marginRight: 8,
  },
  text: {
    fontSize: 20,
    borderColor: "white",
    fontWeight: "bold",
  },
});
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (
    <>

      <View style={estilos.topo}>
        <Text style={estilos.tituloHeader}>Delicia Pastéis</Text>
      </View>

      <View>
        <Text>Faça o seu pedido aqui!</Text>
      </View>

    </>
  );
}

const estilos = StyleSheet.create({

  topo: {
    width: "100%",
    height: 150,
    backgroundColor: "#920606ff",
  },

  tituloHeader: {
    width: "100%",
    color: "#ffaa00ff",
    textAlign: "center",
    paddingTop: 60,
    fontSize: 30,
  },

});

import { View, Text, ScrollView } from "react-native";
import Header from "./src/Componentes/Header";
import Card from "./src/Componentes/Card";


export default function App() {

  return (
    <>
      <ScrollView>
        <Header />
        <Card />
      </ScrollView>
    </>
  );
}



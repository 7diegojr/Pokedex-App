import { StyleSheet, Text, View } from "react-native";
import Header from '@/components/Header';
import { pokemons } from "@/data/pokemons"

export default function Index() {

  const renderPokeomns = ({ item }) => (
    <Text>{item.nome}</Text>
  )

  return (
    <View style={styles.container}>
      <Header title="Pokédex"/>
      <FlatList
        data={pokemons}
        style={styles.cards}
        keyExtractor={(pokemons) => pokemon.Numero.toString()}
        renderItem={renderPokeomns}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  cards: {
    padding: 15,
  },
});
import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { Block, Text, Input } from "galio-framework";

const { width } = Dimensions.get("screen");
const DATA = [
  {
    id: "1",
    title: "kurtas and Shalwar Qamees",
  },
  {
    id: "2",
    title: "Pants and Jeans",
  },
  {
    id: "3",
    title: "T-shirts",
  },

  {
    id: "4",
    title: "Polo Shirts",
  },
  {
    id: "5",
    title: "Shorts",
  },
  {
    id: "6",
    title: "Dress",
  },
  {
    id: "7",
    title: "Winter clothing",
  },
  {
    id: "8",
    title: "Abayas and hijbas",
  },
  {
    id: "9",
    title: "Sleepwear",
  },
  {
    id: "10",
    title: "Handbag",
  },
  {
    id: "11",
    title: "Sneakers",
  },
  {
    id: "12",
    title: "Boots",
  },
  {
    id: "13",
    title: "Heels",
  },
  {
    id: "14",
    title: "Cap",
  },
  {
    id: "15",
    title: "Hats",
  },
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Garments = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.head}>Garments</Text>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="search"
            keyboardType="default"
          />
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  head: {
    marginTop: 20,
    color: "blue",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 15,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 150,
  },
});
export default Garments;

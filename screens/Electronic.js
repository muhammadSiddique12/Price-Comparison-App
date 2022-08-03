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
import { render } from "react-dom";

const { width } = Dimensions.get("screen");
const DATA = [
  {
    id: "1",
    title: "Computers",
  },
  {
    id: "2",
    title: "Laptops",
  },
  {
    id: "3",
    title: "Smart Phones",
  },
  {
    id: "4",
    title: "Tablets",
  },
  {
    id: "5",
    title: "Watches",
  },
  {
    id: "6",
    title: "Cameras",
  },
  {
    id: "7",
    title: "Printers",
  },
  {
    id: "8",
    title: "Bluetooth speaker",
  },
  {
    id: "9",
    title: "Calculator",
  },
  {
    id: "10",
    title: "Security  cameras",
  },
  {
    id: "12",
    title: "Earphones",
  },
  {
    id: "13",
    title: "Electric Devies",
  },
  {
    id: "14",
    title: "TV",
  },
  {
    id: "15",
    title: "Game controller",
  },
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Electronic = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.head}>Electronic</Text>
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
export default Electronic;

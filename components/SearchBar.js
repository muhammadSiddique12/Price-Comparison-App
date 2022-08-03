import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ search, setSearch, onPress }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search for product"
        style={styles.textInput}
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <TouchableOpacity onPress={onPress}>
        <AntDesign name="search1" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0.5,
    borderTopColor: "lightgray",
    borderBottomWidth: 0.5,
    borderBottomColor: "lightgray",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
    elevation: 1,
  },
  textInput: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    flex: 1,
    height: 50,
    paddingLeft: 20,
    margin: 3,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
});

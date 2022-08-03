import React from "react";
import {
  StyleSheet,
  View,
  Text,
  number,
  SafeAreaView,
  TextInput,
} from "react-native";

const Separator = () => <View style={styles.separator} />;
class Delete extends React.Component {


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.h1}>Delete Product</Text>
        </View>
        <Separator />
        <View>
          <Text style={styles.h2}>Which Product do you want to Delete</Text>
          <Separator />
          <TextInput
            style={styles.input}
            value={number}
            placeholder="Name"
            keyboardType="default"
          />
        </View>
      </SafeAreaView>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: 10,
    paddingTop: 40,
    justifyContent: "center",
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
 
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  h2: {
    marginTop:20,
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginHorizontal: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
  },
});
export default Delete;

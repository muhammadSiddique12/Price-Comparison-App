import React from "react";
import {
  StyleSheet,
  View,
  Text,
  number,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";


const Separator = () => <View style={styles.separator} />;
class AddNewProduct extends React.Component {


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.h1}>Add New Product</Text>
        </View>
        <Separator />
        <View>
          <Text style={styles.h2}>Product Information</Text>
          <Separator />
          <TextInput
            style={styles.input}
            value={number}
            placeholder="Name"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            value={number}
            placeholder="Price"
            keyboardType="number"
          />
          <TextInput
            style={styles.input}
            value={number}
            placeholder="Description"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            value={number}
            placeholder="Category"
            keyboardType="default"
          />
        </View>
      <View>
      <Button
            title="Add Now"
            color="#aa02f2"
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
export default AddNewProduct;

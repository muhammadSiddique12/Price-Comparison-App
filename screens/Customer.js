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
class Customer extends React.Component {


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.h1}>Customer</Text>
        </View>
        <Separator />
        <View>
          <Text style={styles.h2}>Byer Information</Text>
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
            placeholder="Email"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            value={number}
            placeholder="P"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            value={number}
            placeholder="Address"
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
export default Customer;

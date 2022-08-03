import { Block } from "galio-framework";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
  TextInput,
  number,
} from "react-native";
import Firebase from "../Firebase/Firebase";

const Separator = () => <View style={styles.separator} />;
class Admin extends React.Component {
  SignInHanlder = () => {
    this.props.navigation.push("AddNewProduct");
  };
  SignAmHanlder = () => {
    this.props.navigation.push("Update");
  };

  productHandler = async () => {
    const data = await Firebase.firestore().collection("products").doc().get();
    console.log(data)
  };

  componentDidMount() {
    this.productHandler();
  }
  render() {
    return (
      <Block safe flex>
        <View style={styles.header}>
          <Text style={styles.h1}>Product</Text>
        </View>
        <Separator />
        <Block row space="between">
          <Button
            title="Add New Product"
            color="#aa02f2"
            style={styles.ButtonLeft}
            onPress={this.SignInHanlder}
          />
          <Button
            title="Update Product"
            color="#ff00f2"
            style={styles.ButtonRight}
            onPress={this.SignAmHanlder}
          />
        </Block>

      </Block>
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
  h2: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginHorizontal: 15,
  },
  fixToText: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
  },
});
export default Admin;

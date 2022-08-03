import React from "react";
import { StyleSheet, View, Text, Button, SafeAreaView } from "react-native";

const Separator = () => <View style={styles.separator} />;

class Admin extends React.Component {
  SignInHanlder = () => {
    this.props.navigation.push("Orders");
  };
  SigninHanlder = () => {
    this.props.navigation.push("Product");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.h1}>Dashboard</Text>
        </View>
        <Separator />
        <View style={styles.fixToText}>
          <Button
            title="Orders"
            color="#f194ff"
            style={styles.ButtonLeft}
            onPress={this.SignInHanlder}
          />
          <Button
            title="Product"
            style={styles.ButtonRight}
            onPress={this.SigninHanlder}
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
    paddingBottom: 10,
    paddingTop: 40,
    justifyContent: "center",
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 50,
  },
  separator: {
    // marginVertical: 8,
    borderBottomColor: "#737373",
    // borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Admin;

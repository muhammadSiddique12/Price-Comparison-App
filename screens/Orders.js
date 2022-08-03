import { Block } from "galio-framework";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
  Pending,
  ps4,
  Electronic,
  Osama,
} from "react-native";

const Separator = () => <View style={styles.separator} />;
class Orders extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.h1}>Orders</Text>
        </View>
        <Separator />

        <View>
          <Text style={styles.h2}>Byer Information</Text>
          <Separator />
          <Block card>
            <Text style={{ textAlign: "center" }}>Status : Pending</Text>
            <Block card row space="around">
              <Block style={{marginTop : 10}}>
                <Text>Product : ps4</Text>
                <Text>category : Electronic</Text>
              </Block>
              <Block style={{ marginTop: 10 }}>
                <Text>Buyer : Osama</Text>
                <Text>Date : {JSON.stringify(new Date())}</Text>
              </Block>
            </Block>
          </Block>
        </View>
        <View>
          <Text style={styles.h2}>Price : 45000 PKR</Text>
          <Separator />
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
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  Image: {
    marginTop: 20,
    alignItems: "center",
    width: 100,
    height: 100,
    marginHorizontal: 120,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
  },
});
export default Orders;

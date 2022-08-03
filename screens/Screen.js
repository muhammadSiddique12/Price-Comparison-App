import React from "react";
import { StyleSheet, Dimensions, Text, Image, View } from "react-native";

const { width } = Dimensions.get("screen");

class Screen extends React.Component {
  render() {
    return (
      <View style={styles.menuItems}>
        <Image source={this.props.itemImage} style={styles.image} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  menuItems: {
    width: "50%",
    height: "50%",
    padding: 20,
    backgroundColor: "#ccc",
    borderColor: "#000",
  },
  image: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
    borderColor: "#fff",
    borderWidth: 3,
  },
});

export default Screen;

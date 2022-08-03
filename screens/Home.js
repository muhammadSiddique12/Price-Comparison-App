import React from "react";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Modal,
  FlatList,
  DATA,
  renderItem,
  Pressable,
  Alert,
} from "react-native";
import { Block, theme } from "galio-framework";
import Cosmetics from "../assets/imgs/Cosmetic.png";
import Electronic from "../assets/imgs/Electronic.png";
import Garments from "../assets/imgs/Garments.png";
import Grocery from "../assets/imgs/Grocery.png";
import Products from "../products.json";

const SearchButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity
    style={[styles.button, style]}
    onPress={() => navigation.navigate("Pro")}
  >
    <Icon
      size={16}
      family="Galio"
      name="search-zoom-in"
      color={theme.COLORS[isWhite ? "WHITE" : "ICON"]}
    />
  </TouchableOpacity>
);

const categories = [
  {
    img: Cosmetics,
    category: "cosmetics",
  },
  {
    img: Electronic,
    category: "electronic",
  },
  {
    img: Garments,
    category: "garments",
  },
  {
    img: Grocery,
    category: "grocery",
  },
];

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.name}</Text>
  </TouchableOpacity>
);

class Home extends React.Component {
  state = {
    modalVisible: false,
    target: "",
  };

  productHandler = () => {
    this.setState({
      target: "",
      modalVisible: false,
    });
    this.props.navigation.navigate("price", {
      target: this.state.target,
      site: "daraz",
    });
  };
  SearchProductHandler = () => {
    this.props.navigation.navigate("SearchProduct");
  };

  renderItem = ({ item }) => {
    return <Item item={item} />;
  };
  render() {
    return (
      <>
        <View style={styles.background}>
          <FlatList
            data={Products}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
          <Text style={styles.header}>Top Brands</Text>
        </View>

        <View style={styles.itemContainer}>
          {categories.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  //this.setState({ modalVisible: true, target: item.category })
                  this.SearchProductHandler()
                }
                key={index}
              >
                <ImageBackground
                  source={item.img}
                  style={styles.image}
                  resizeMode="cover"
                >
                  <Text style={styles.text}>{item.category}</Text>
                </ImageBackground>
              </TouchableOpacity>
            );
          })}
        </View>
        {this.state.modalVisible && (
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                this.setState({ modalVisible: !this.state.modalVisible });
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Check Price On:</Text>
                  <Block row>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => this.productHandler()}
                    >
                      <Text style={styles.textStyle}>Check on Daraz</Text>
                    </Pressable>
                    <Pressable
                      style={[
                        styles.button,
                        styles.buttonClose,
                        styles.marginLeft,
                      ]}
                      onPress={() => this.productHandler()}
                    >
                      <Text style={styles.textStyle}>Check On AliExpress</Text>
                    </Pressable>
                  </Block>
                </View>
              </View>
            </Modal>
          </View>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  marginLeft: {
    marginLeft: 10,
  },
  itemContainer: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#ededed",
    flexWrap: "wrap",
  },
  header: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
  background: {
    flexDirection: "column",
    backgroundColor: "#ededed",
  },
  image: {
    width: windowWidth / 2,
    height: windowHeight / 2,
  },

  text: {
    color: "white",
    fontSize: 24,
    lineHeight: 44,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Home;

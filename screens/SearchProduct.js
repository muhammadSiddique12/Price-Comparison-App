import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Linking,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import axios from "axios";

const YOUR_IP_ADDRESS = "192.168.43.121"; // TODO: Replace it with your PC ip address on which you are running your flask server

const SearchProduct = () => {
  const [search, setSearch] = useState("");
  const [daraz, setDaraz] = useState([]);
  const [aliexpress, setAliexpress] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = (product_name) => {
    const base_url = `http://${YOUR_IP_ADDRESS}:8000`;
    setLoading(true);
    alert("Please wait while we fetching your products...");
    axios
      .post(base_url, {
        product_name: product_name,
      })
      .then((res) => {
        setDaraz(res?.data.daraz_products); // product data will be set to product state
        setAliexpress(res?.data.ali_express_products); // product data will be set to product state
        alert("Product fetched");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        search={search}
        setSearch={setSearch}
        onPress={() => {
          if (search !== "") {
            fetchData(search);
          } else {
            alert("please provide search name");
          }
        }}
      />
      <Text style={styles.h1}>Daraz</Text>
      <FlatList
        data={daraz}
        style={{ height: "50%" }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            onPress={() => Linking.openURL(`https://${item.link}`)}
          >
            <View
              style={{
                marginRight: 20,
                marginLeft: 20,
                borderColor: "silver",
                borderWidth: 1,
                elevation: 1,
                marginBottom: 20,
                padding: 10,
              }}
            >
              <Text>Name: {item.name}</Text>
              <Text>Price: {item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <Text style={styles.h2}>Ali Express</Text>
      <FlatList
        data={aliexpress}
        style={{ height: "50%" }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            onPress={() => Linking.openURL(`https://${item.link}`)}
          >
            <View
              style={{
                marginRight: 20,
                marginLeft: 20,
                borderColor: "silver",
                borderWidth: 1,
                elevation: 1,
                marginBottom: 20,
                padding: 10,
              }}
            >
              <Text>Name: {item.name}</Text>
              <Text>Price: {item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* <FlatList
        data={aliexpress}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />

     /* <View style={styles.card}>
        <View style={styles.cardContainer}>
          <View style={styles.imageWrapper}>
            <Avatar.Image
              size={50}
              source={require("../assets/imgs/Electronic.png")}
            />
          </View>
          <View style={[styles.sub_wrapper, { marginLeft: 10 }]}>
            <Text style={styles.label}>You searched for: </Text>
            <Text>{search}</Text>
          </View>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.sub_wrapper}>
            <Text style={styles.label}>Item listing from Daraz:</Text>
            <Text>{`10`}</Text>
          </View>
          <View style={styles.sub_wrapper}>
            <Text style={styles.label}>Item listing from Ali Express:</Text>
            <Text>{`10`}</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <View style={styles.sub_wrapper}>
              <Text style={styles.label}>Lowest offering on Daraz: </Text>
              <Text>{`Rs. 10`}</Text>
            </View>
            <Text>{`Price Range (${`Rs. 10`} - ${`Rs. 500`})`}</Text>
            <View style={styles.sub_wrapper}>
              <Text style={styles.label}>Lowest offering on Ali Express: </Text>
              <Text>{`Rs. 10`}</Text>
            </View>
            <Text>{`Price Range (${`Rs. 10`} - ${`Rs. 500`})`}</Text>
          </View>
        </View>
      </View>*/}
      {loading && <ActivityIndicator size="large" color="blue" />}
    </SafeAreaView>
  );
};

export default SearchProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "lightgray",
    height: 230,
    margin: 5,
    elevation: 3,
    borderRadius: 5,
    flexDirection: "column",
    padding: 20,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapper: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
  sub_wrapper: {
    flexDirection: "row",
  },
  imageWrapper: {
    width: 50,
    height: 50,
    borderWidth: 1.5,
    borderRadius: 50 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  container: {
    flex: 1,
    paddingTop: 22,
  },
  productContainer: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#ededed",
    flexWrap: "wrap",
  },
  h1: {
    color: "blue",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 15,
  },
  h2: {
    marginTop: 10,
    color: "blue",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 15,
  },
  item: {
    fontSize: 18,
  },
});

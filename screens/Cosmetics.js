import React, { useState } from "react";
import { StyleSheet, View, Dimensions ,SafeAreaView,StatusBar} from "react-native";
import { FlatList,TextInput, } from "react-native-gesture-handler";
import { Block, Text, Input } from "galio-framework";

const { width } = Dimensions.get("screen");
const DATA = [
    {
      id: '1',
      title: "Hair Shampoo",
    },
    {
      id: '2',
      title: 'Hair Oil',
    },
    {
      id: '3',
      title: 'Hair Color',
    },
    {
        id: '4',
        title: 'Hair Spray',
      },
      {
        id: '5',
        title: 'Beauty Cream',
      },
      {
        id: '6',
        title: 'Skin Lightening Cream',
      },
      {
        id: '7',
        title: 'Face Cream',
      },
      {
        id: '8',
        title: 'Sunscreen',
      },
      {
        id: '9',
        title: 'Skin Cleansing Cream',
      },
      {
        id: '10',
        title: 'Skin Gel',
      },
      {
        id: '12',
        title: 'Facial Kit',
      },
      {
        id: '13',
        title: 'Makeup Palettes',
      },
      {
        id: '14',
        title: 'Lipstick',
      },
      {
        id: '15',
        title: 'Matte Lipstick',
      },
      {
        id: '16',
        title: 'Lip Gloss',
      },


  ];
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  

  const Cosmetic = () => {
    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );
    const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.head}>
                Cosmetic
            </Text>
            <View >
            <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="search"
        keyboardType="default"
      /> 
             </View>
        </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      head: {
        marginTop:20,
        color: "blue",
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 15,
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 20,
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width:150,
      },
    });
export default Cosmetic;

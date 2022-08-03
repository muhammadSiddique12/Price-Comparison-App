import React from "react";
import { StyleSheet, View, Dimensions ,SafeAreaView,StatusBar} from "react-native";
import { FlatList,TextInput } from "react-native-gesture-handler";
import { Block, Text, Input } from "galio-framework";

const { width } = Dimensions.get("screen");
const DATA = [
    {
      id: '1',
      title: "Bakery and Bread",
    },
    {
      id: '2',
      title: 'Meat',
    },
    {
      id: '3',
      title: 'Seafood',
    },
    {
        id: '4',
        title: 'Pasta',
      },
      {
        id: '5',
        title: 'Rice',
      },
      {
        id: '6',
        title: 'Oils',
      },
      {
        id: '7',
        title: 'Sauces',
      },
      {
        id: '8',
        title: 'Salad Dressings',
      },
      {
        id: '9',
        title: 'Condiments',
      },
      {
        id: '10',
        title: 'Cereals',
      },
      {
        id: '12',
        title: 'Breakfast Foods',
      },
      {
        id: '13',
        title: 'Soups',
      },
      {
        id: '14',
        title: 'Canned Goods',
      },
      {
        id: '15',
        title: 'Frozen Foods',
      },
      {
        id: '16',
        title: 'Cheese',
      },


  ];
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  

  const Grocery = () => {
    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );
    const [number, onChangeNumber] = React.useState(null);
  

  
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.head}>
                Grocery
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
export default Grocery;

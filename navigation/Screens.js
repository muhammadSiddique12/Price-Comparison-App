import React from "react";
import { Easing, Animated, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Block } from "galio-framework";

// screens
import Home from "../screens/Home";
import SignUp from "../screens/Register";
import SignIn from "../screens/SignUp";
import Pro from "../screens/Pro";
import Profile from "../screens/Profile";
import Register from "../screens/Register";
import Electronics from "../screens/Electronic";
import Garments from "../screens/Garments";
import Grocery from "../screens/Grocery";
import Cosmetic from "../screens/Cosmetics";
import Admin from "../screens/Admin";
import Orders from "../screens/Orders";
import Product from "../screens/Product";
import SearchProduct from "../screens/SearchProduct";

// drawer
import CustomDrawerContent from "./Menu";

// header for screens
import { Icon, Header } from "../components";
import { argonTheme, tabs } from "../constants";
import AddNewProduct from "../screens/AddNewProduct";
import Update from "../screens/Update";
import Customer from "../screens/Customer";
import addComment from "../screens/addComment";
import Delete from "../screens/Delete";
import PriceInner from "../screens/priceInner";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="addComment"
        component={addComment}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Home" navigation={navigation} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="SearchProduct"
        component={SearchProduct}
        // options={{
        //   header: ({ navigation, scene }) => (
        //     <Header
        //       title=""
        //       back
        //       white
        //       transparent
        //       navigation={navigation}
        //       scene={scene}
        //     />
        //   ),
        //   headerTransparent: true,
        // }}
      />

      <Stack.Screen
        name="price"
        component={PriceInner}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen name="App" component={AppStack} />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        option={{
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function adminStack() {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Admin"
        component={Admin}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Home" navigation={navigation} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Product"
        component={productStack}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
function productStack() {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Product"
        component={Product}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="" navigation={navigation} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="AddNewProduct"
        component={AddNewProduct}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Update"
        component={Update}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
function ordersStack() {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Home" navigation={navigation} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="Customer"
        component={Customer}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Delete"
        component={Delete}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function AppStack() {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal",
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Account" component={Register} />
      <Drawer.Screen name="Electronics" component={Electronics} />
      <Drawer.Screen name="Garments" component={Garments} />
      <Drawer.Screen name="Grocery" component={Grocery} />
      <Drawer.Screen name="Cosmetics" component={Cosmetic} />
      <Drawer.Screen name="Admin" component={adminStack} />
      <Drawer.Screen name="Product" component={productStack} />
      <Drawer.Screen name="Orders" component={ordersStack} />
    </Drawer.Navigator>
  );
}

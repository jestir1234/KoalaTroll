import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from "react-native";

import { StackNavigator } from "react-navigation";
import HomeScreen from "./Views/HomeScreen";
import MenuScreen from "./Views/Menu";

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Menu: {
      screen: MenuScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

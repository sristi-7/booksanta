import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./Screens/WelcomeScreen";
import BookDonateScreen from "./Screens/BookDonateScreen";
import BookRequestScreen from "./Screens/BookRequestScreen";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
var TabNavigator = createBottomTabNavigator({
  BookDonateScreen: BookDonateScreen,
  BookRequestScreen: BookRequestScreen,
});
var switchNavigator = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  TabNavigator: TabNavigator,
});
var AppContainer = createAppContainer(switchNavigator);

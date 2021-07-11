import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./Screens/WelcomeScreen";
import { AppDrawerNavigator } from "./components/AppDrawerNavigator" 
import { createSwitchNavigator, createAppContainer } from "react-navigation";


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

var switchNavigator = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  AppDrawerNavigator: AppDrawerNavigator,
});
var AppContainer = createAppContainer(switchNavigator);

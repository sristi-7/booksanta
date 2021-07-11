import React from "react"
import firebase from 'firebase';
import CustomSideBarMenu from "./customSideBarMenu"; 
import { createDrawerNavigator } from "react-navigation-drawer";
import {TabNavigator} from "./AppTabNavigator"
export const AppDrawerNavigator = createDrawerNavigator({
    home:{screen:TabNavigator}
},{
    contentComponent: CustomSideBarMenu
},{
    initialRouteName:"home"
})
    
   
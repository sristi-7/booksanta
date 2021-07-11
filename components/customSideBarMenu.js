import * as React from "react";
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    View
  } from "react-native";
  import{DrawerItems} from "react-navigation-drawer"
  import firebase from 'firebase';
  export default class CustomSideBarMenu extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:0.8,backgroundColor:"blue"}}>
                    <DrawerItems {...this.props}/>
                </View> 
                <View style={{flex:0.2}}><TouchableOpacity style={styles.Button} onPress={()=>{
                    this.props.navigation.navigate("WelcomeScreen")
                    firebase.auth().signOut()
                }}><Text>logout</Text></TouchableOpacity></View>
            </View>
        )
    }
  
  }
  const styles=StyleSheet.create({
    Button: {
        borderWidth: 5,
        width: "70%",
        padding: 10,
        margin: 20,
        textAlign: "center",
        backgroundColor:"yellow",
      },
  })
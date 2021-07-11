
import * as React from "react"
import db from "../config";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Image,
  Alert,
  Modal,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import firebase from "firebase";
export default class BookDonateScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>BookDonateScreen</Text>
            </View>
        )
    }
} 
var styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    inputBox: {
      borderWidth: 5,
      width: "70%",
      padding: 10,
      margin: 20,
      textAlign: "center",
    },
    button: {
      borderWidth: 5,
      borderRadius: 10,
      padding: 10,
      margin: 20,
      backgroundColor: "grey",
    },

  });
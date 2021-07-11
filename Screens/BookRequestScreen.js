import * as React from "react";
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
export default class BookRequestScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      bookName: "",
      reasonToRequest: "",
      userID: firebase.auth().currentUser.email,
    };
  }
  createUniqueID = () => {
    return Math.random().toString(36).substring(7);
  };
  addRequest = () => {
    var requestID = this.createUniqueID();
    db.collection("RequestedBooks").add({
      userID: this.state.userID,
      bookName: this.state.bookName,
      reasonToRequest: this.state.reasonToRequest,
      requestID: requestID,
    });
    this.setState({
      bookName: "",
      reasonToRequest: "",
    });
    return Alert.alert("bookRequestedSuccessfully");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>BookRequestScreen</Text>
        <TextInput
          style={styles.inputBox}
          placeholder={"BookName"}
          onChangeText={(text) => {
            this.setState({ bookName: text });
          }}
        />
        <TextInput
          style={styles.inputBox}
          multiline
          placeholder={"ReasonToRequest"}
          onChangeText={(text) => {
            this.setState({ reasonToRequest: text });
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.addRequest()
          }}
        >
          <Text>submit</Text>
        </TouchableOpacity>
      </View> 
    );
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

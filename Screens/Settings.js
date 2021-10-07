import * as React from "react";
import db from "../config";
import firebase from "firebase";
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
export default class SettingsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      userID: firebase.auth().currentUser.email,
      docID: "",
    };
  }
  componentDidMount(){
    db.collection("User").where("email","==",this.state.userID).get()
    .then(snapshot=>{
      snapshot.forEach(doc=>{
        this.setState({
          firstName:doc.data().firstName, lastName:doc.data().lastName, phoneNumber:doc.data().phoneNumber,
          address:doc.data().address, docID:doc.id
        })
      })
    })
  }
  render() {
    return (
      <View>
        <TextInput
          style={styles.inputBox}
          placeholder={"First Name"}
          onChangeText={(text) => {
            this.setState({ firstName: text });
          }}
          value={this.state.firstName}
        />
        <TextInput
          style={styles.inputBox}
          placeholder={"Last Name"}
          onChangeText={(text) => {
            this.setState({ lastName: text });
          }}
          value={this.state.lastName}
        />
        <TextInput
          style={styles.inputBox}
          placeholder={"phoneNumber"}
          onChangeText={(text) => {
            this.setState({ phoneNumber: text });
          }}
          value={this.state.phoneNumber}
        />
        <TextInput
          style={styles.inputBox}
          placeholder={"address"}
          onChangeText={(text) => {
            this.setState({ address: text });
          }}
          value={this.state.address}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            db.collection("User").doc(this.state.docID).update({
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              phoneNumber: this.state.phoneNumber,
              address: this.state.address,
            });
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
  modalStyle: {
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
  },
});

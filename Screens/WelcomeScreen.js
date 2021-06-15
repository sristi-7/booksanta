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

export default class WelcomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      confirmPassword: "",
      isModalVisible: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View>{this.showModal()}</View>
        <Text>login Screen</Text>
        <TextInput
          style={styles.inputBox}
          placeholder={"email ID"}
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
        />

        <TextInput
          style={styles.inputBox}
          placeholder={"password"}
          onChangeText={(text) => {
            this.setState({ password: text });
          }}
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.login();
          }}
        >
          <Text>login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.setState({ isModalVisible: true });
          }}
        >
          <Text>signUp</Text>
        </TouchableOpacity>
      </View>
    );
  }
  showModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}
      >
        <ScrollView style={{ width: "100%" }}>
          <KeyboardAvoidingView style={styles.modalStyle}>
            <Text>registration</Text>
            <TextInput
              style={styles.inputBox}
              placeholder={"firstName"}
              onChangeText={(text) => {
                this.setState({ firstName: text });
              }}
            />

            <TextInput
              style={styles.inputBox}
              placeholder={"lastName"}
              onChangeText={(text) => {
                this.setState({ lastName: text });
              }}
            />
            <TextInput
              style={styles.inputBox}
              placeholder={"address"}
              onChangeText={(text) => {
                this.setState({ address: text });
              }}
            />

            <TextInput
              style={styles.inputBox}
              placeholder={"phoneNumber"}
              onChangeText={(text) => {
                this.setState({ phoneNumber: text });
              }}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.inputBox}
              placeholder={"email ID"}
              onChangeText={(text) => {
                this.setState({ email: text });
              }}
            />

            <TextInput
              style={styles.inputBox}
              placeholder={"password"}
              onChangeText={(text) => {
                this.setState({ password: text });
              }}
              secureTextEntry={true}
            />
            <TextInput
              style={styles.inputBox}
              placeholder={"confirmPassword"}
              onChangeText={(text) => {
                this.setState({ confirmPassword: text });
              }}
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.signUp();
              }}
            >
              <Text>submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.setState({ isModalVisible: false });
              }}
            >
              <Text>cancel</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </Modal>
    );
  };
  signUp = () => {
    if (this.state.password !== this.state.confirmPassword) {
      return Alert.alert("wrong password");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((response) => {
          db.collection("User").add({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            address: this.state.address,
          });
          return Alert.alert("userAddedSuccesfully");
        })
        .catch((error) => {
          return Alert.alert(error.message);
        });
    }
  };
  login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((response) => {
        return Alert.alert("userLoggedInSuccesfully");
      })
      .catch((error) => {
        return Alert.alert(error.message);
      });
  };
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

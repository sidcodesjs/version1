import React, { useState } from "react";
import {
  TextInput,
  ImageBackground,
  Image,
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  TouchableHighlight,
  Touchable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Login from "./Login";

const Form = ({ navigation }) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    // return Alert.alert("Welcome  ${userName}");
    if (userName === "siddhesh" && password === "siddhesh") {
      Alert.alert("Welcome", userName);
      navigation.navigate("Home");
    } else {
      Alert.alert("Username or Password incorrect, Please try again!!");
    }
  };

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: 1,
        // borderColor: "grey",
        // padding: 30,
        // borderRadius: 13,
        // marginTop: 10,
        // marginBottom: 20,
        backgroundColor: "white",
        // height: 450,
        // elevation: 10,
        // shadowColor: "black",
      }}
    >
      <View style={styles.InputContainer}>
        <ImageBackground
          style={{
            borderColor: "black",
            width: 420,
            height: 160,
            //   position: "absolute",
            //   borderRadius: "100px",
            marginTop: 30,
          }}
          source={{
            uri: "https://img.freepik.com/free-vector/loading-workman-carrying-boxes_74855-14096.jpg?size=626&ext=jpg&uid=R43369895&semt=sph",
          }}
        />
        {/* <Text>Login.</Text> */}

        {/* <Text style={styles.name}>Username</Text> */}
        <TextInput
          placeholder="Username"
          autoCapitalize="none"
          autoCorrect={false}
          value={userName}
          onChangeText={(actualData) => setUsername(actualData)}
          style={{
            borderColor: "grey",
            borderWidth: 1,
            width: 300,
            borderRadius: 10,
            color: "black",
            // fontWeight: "bold",
            padding: 6,
            marginTop: 60,
            // backgroundColor: "#E9E8E8",
          }}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(actualpass) => setPassword(actualpass)}
          style={{
            borderColor: "grey",
            borderWidth: 1,
            width: 300,
            borderRadius: 10,
            color: "black",
            // fontWeight: "bold",
            padding: 6,
            marginTop: 30,
            // backgroundColor: "#E9E8E8",
          }}
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => submit()}>
        <Text
          style={{
            color: "white",
            fontSize: 17,
            fontStyle: "italic",
            fontWeight: "bold",
            width: 100,

            marginLeft: 55,
            alignItems: "center",
            padding: 4,
          }}
        >
          Login.
        </Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 10, fontStyle: "italic" }}>---OR---</Text>
      <TouchableOpacity style={styles.btn2}>
        <Text
          style={{
            color: "white",
            fontSize: 17,
            fontStyle: "italic",
            fontWeight: "bold",
            width: 100,
            marginLeft: 75,
            alignItems: "center",
            // padding: ,
          }}
        >
          <AntDesign name="google" size={24} color="white" />
        </Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 20, fontStyle: "italic" }}>
        By continuing you agree to our terms and conditions and privacy policy.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginTop: 55,
    lineHeight: 23,
    fontFamily: "regular",
  },

  submit: {
    color: "black",
  },

  btn: {
    marginTop: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "black",
    borderRadius: 10,
  },
  btn2: {
    marginTop: 17,
    display: "flex",
    height: 55,
    // marginLeft: 130,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "black",
    borderRadius: 30,
  },
  InputContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  submitText: {
    // paddingTop: 20,
    // paddingBottom: 20,
    color: "black",
    backgroundColor: "black",
    textAlign: "center",
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: 200,
  },
});

export default Form;

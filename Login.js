import React from "react";
import { ImageBackground, Image, Text, View, StyleSheet } from "react-native";
import Form from "./Form";

const Login = ({ navigation }) => {
  return (
    <View style={styles.parent}>
      <ImageBackground
        style={{
          borderColor: "black",
          width: 380,
          height: 140,
          //   position: "absolute",
          //   borderRadius: "100px",
          marginTop: 50,
        }}
        source={{
          uri: "https://img.freepik.com/free-vector/loading-workman-carrying-boxes_74855-14096.jpg?size=626&ext=jpg&uid=R43369895&semt=sph",
        }}
      />
      {/* <Text style={styles.main}>Welcome to My Driver App</Text> */}
      <Text style={styles.sec}>WELCOME!</Text>
      <Form />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    // flex:,
  },

  main: {
    marginTop: 10,
    fontSize: 25,
    color: "darkgrey",

    fontFamily: "sans-serif",
    position: "relative",
    fontWeight: "bold",
  },
  sec: {
    fontSize: 25,
    fontStyle: "italic",
    fontFamily: "sans-serif",
    position: "relative",
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default Login;

import React from "react";
import {
  Button,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView from "react-native-maps";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const Home = () => {
  return (
    <View style={styles.parent}>
      {/* // <Text
    //     style={{
    //       fontSize: 20,
    //       // fontWeight: "bold",
    //       // color: "grey",
    //       position: "relative",
    //     }}
    //   >
    //     Your delivery is from
    //     {"\n"}
    //     <Text>Pune to Mumbai</Text>
    //   </Text> */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 18.516726,
          longitude: 73.856255,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      ></MapView>
      <View style={styles.bottom}>
        <Text
          style={{
            fontSize: 15,
            padding: 10,
            marginTop: 10,
            color: "white",
            justifyContent: "space-between",
            bottom: 1,
            right: 107,
            // fontWeight: "bold",
          }}
        >
          Pickup Point:- PUNE {"\n"}
          {"\n"}
          Dropping point:- MUMBAI
        </Text>
        <TouchableOpacity style={{ left: 230, bottom: 64 }}>
          <FontAwesome5 name="directions" size={45} color="#FFE87C" />
          <Text style={{ color: "white", marginLeft: 14 }}>Go</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: "flex",
            left: 130,
            bottom: 120,
            backgroundColor: "white",
            borderRadius: 10,
            padding: 5,
            width: 80,
          }}
        >
          <Text style={{ color: "grey", fontWeight: "bold" }}>
            <MaterialIcons name="attach-money" size={17} color="green" />
            ₹100.0
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            bottom: 240,
            left: 25,
            position: "relative",
            backgroundColor: "white",
            padding: 12,
            borderRadius: 15,
            elevation: 15,
          }}
        >
          <Text style={{ fontFamily: "sans-serif" }}>
            <Ionicons name="alert-circle" size={17} color="red" />
            EMERGENCY
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            bottom: 650,
            left: 240,
            position: "relative",
            backgroundColor: "white",
            padding: 12,
            borderRadius: 15,
            elevation: 15,
          }}
        >
          <Text style={{ fontFamily: "sans-serif" }}>
            <Ionicons name="notifications" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            bottom: 640,
            left: 240,
            position: "relative",
            backgroundColor: "white",
            padding: 12,
            borderRadius: 15,
            elevation: 15,
          }}
        >
          <Text style={{ fontFamily: "sans-serif" }}>
            <Entypo name="menu" size={24} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    display: "flex",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: Dimensions.get("window").height - 200,
    borderRadius: 20,
    // position: "absolute",
  },
  bottom: {
    display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "flex-start",
    // alignItems: "center",
    backgroundColor: "black",
  },
});

export default Home;

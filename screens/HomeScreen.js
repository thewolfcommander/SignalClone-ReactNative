import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { auth } from "../firebase";

const HomeScreen = ({ navigation }) => {
  //   useEffect(() => {
  //     if (auth.currentUser) {
  //       alert("user logged in");
  //     } else {
  //       navigation.replace("Login");
  //     }
  //   }, [navigation]);
  return (
    <View>
      <Text>Hey I am Homescreen</Text>
    </View>
  );
};

export default HomeScreen;

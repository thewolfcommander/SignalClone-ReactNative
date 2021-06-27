import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-elements";

const UpperHeaderAvatar = () => {
  return (
    <View>
      <TouchableOpacity onPress={alert("hel")}>
        <Avatar
          rounded
          source={{
            uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default UpperHeaderAvatar;

const styles = StyleSheet.create({});

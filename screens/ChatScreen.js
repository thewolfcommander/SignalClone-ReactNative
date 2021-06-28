import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const ChatScreen = ({ navigation, id, chatName }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerBackTitle: "Chats",
    });
  }, [navigation]);
  return (
    <View>
      <Text>I am chat screen</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});

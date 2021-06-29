import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../firebase";

const AddChatScreen = ({ navigation }) => {
  const [chatName, setChatName] = useState("");

  const createChat = async () => {
    if (chatName === "") {
      alert("you have to provide the chat name");
    } else {
      await db
        .collection("chats")
        .add({
          chatName: chatName,
        })
        .then(() => {
          navigation.goBack();
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerBackTitle: "Chats",
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text h5 style={{ marginTop: 50 }}>
        Fill up the below details to create a chat
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Enter chat name"
          autoFocus
          value={chatName}
          onChangeText={(text) => setChatName(text)}
          type="text"
          onSubmitEditing={createChat}
          leftIcon={
            <Icon
              name="wechat"
              type="antdesign"
              size={24}
              color="black"
              style={{ marginRight: 10 }}
            />
          }
        />
      </View>
      <Button
        containerStyle={styles.button}
        onPress={createChat}
        disabled={!chatName}
        raised
        title="Create new Chat"
      />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    padding: 30,
  },
  inputContainer: {
    width: 300,
    marginTop: 30,
  },
});

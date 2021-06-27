import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";

const AddChatScreen = ({ navigation }) => {
  const [chatName, setChatName] = useState("");

  const createChat = () => {
    alert(chatName);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add Chat",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
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
        />
      </View>
      <Button
        containerStyle={styles.button}
        onPress={createChat}
        raised
        title="Create Chat"
      />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: 300,
    marginTop: 30,
  },
});

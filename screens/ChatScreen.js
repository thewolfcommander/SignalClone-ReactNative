import React, { useLayoutEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Avatar } from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { db, auth } from "../firebase";
import * as firebase from "firebase";

const ChatScreen = ({ navigation, route }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    Keyboard.dismiss();

    db.collection("chats").doc(route.params.id).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      displayName: auth.currentUser.displayName,
      email: auth.currentUser.email,
      photoURL: auth.currentUser.photoURL,
    });

    setInput("");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.chatName,
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: -20,
          }}
        >
          <Avatar
            rounded
            source={{
              uri: "https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png",
            }}
          />
          <Text
            style={{
              color: "#fff",
              marginLeft: 20,
              fontWeight: "700",
              fontSize: 18,
            }}
          >
            {route.params.chatName.length > 20
              ? `${route.params.chatName.slice(0, 20)}...`
              : route.params.chatName}
          </Text>
        </View>
      ),
      headerTitleAlign: "left",
      headerBackTitleVisible: false,
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={navigation.goBack}
        >
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 20,
          }}
        >
          <TouchableOpacity>
            <FontAwesome name="video-camera" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="call" size={24} color="#fff" />
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <Ionicons name="ios-ellipse" size={24} color="#fff" />
          </TouchableOpacity> */}
        </View>
      ),
    });
  }, [navigation]);

  //   Layout effect for messages

  useLayoutEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(route.params.id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    // alert(JSON.stringify(messages));
    return unsubscribe;
  }, [route]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar style="light" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <ScrollView>
              {messages.map(({ id, data }) =>
                data.email === auth.currentUser.email ? (
                  <View key={id} style={styles.receiver}>
                    {/* This will be the sender */}
                    <Avatar
                      size={30}
                      rounded
                      position="absolute"
                      bottom={-15}
                      right={-5}
                      //   For web
                      containerStyle={{
                        position: "absolute",
                        bottom: -15,
                        right: -5,
                      }}
                      source={{
                        uri: data.photoURL
                          ? data.photoURL
                          : "https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png",
                      }}
                    />
                    <Text style={styles.receiverText}>{data.message}</Text>
                  </View>
                ) : (
                  <View key={id} style={styles.sender}>
                    {/* This will be the receiver */}
                    <Avatar
                      size={30}
                      rounded
                      position="absolute"
                      bottom={-15}
                      left={-5}
                      //   For web
                      containerStyle={{
                        position: "absolute",
                        bottom: -15,
                        left: -5,
                      }}
                      source={{
                        uri: data.photoURL
                          ? data.photoURL
                          : "https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png",
                      }}
                    />
                    <Text style={styles.senderText}>{data.messsage}</Text>
                  </View>
                )
              )}
            </ScrollView>
            <View style={styles.footer}>
              <TextInput
                placeholder="Signal Message"
                style={styles.textInput}
                value={input}
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={sendMessage}
              />
              <TouchableOpacity activeOpacity={0.5} onPress={sendMessage}>
                <Ionicons name="send" color="#2b68e6" size={24} />
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  receiver: {
    padding: 15,
    backgroundColor: "#ececec",
    alignSelf: "flex-end",
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 25,
    maxWidth: "80%",
    position: "relative",
  },
  receiverText: {},
  sender: {
    padding: 15,
    backgroundColor: "#2b68e6",
    alignSelf: "flex-start",
    borderRadius: 20,
    margin: 15,
    maxWidth: "80%",
    position: "relative",
  },
  senderText: {},
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 15,
  },
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,

    backgroundColor: "#ececec",
    padding: 10,
    color: "grey",
    borderRadius: 30,
  },
});

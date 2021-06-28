import React, { useLayoutEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar } from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const ChatScreen = ({ navigation, route }) => {
  const [input, setInput] = useState("");

  const sendMessage = () => {
    alert(input);
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
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar style="light" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <>
          <ScrollView>{/* Chat goes here */}</ScrollView>
          <View style={styles.footer}>
            <TextInput
              placeholder="Signal Message"
              style={styles.textInput}
              value={input}
              onChangeText={(text) => setInput(text)}
              onSubmitEditing={sendMessage}
            />
          </View>
        </>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {},
  footer: {},
  textInput: {},
});

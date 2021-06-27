import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View, Text } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [fullName, setFullName] = useState();
  const [password, setPassword] = useState();

  function signIn() {}
  function register() {}
  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://logowik.com/content/uploads/images/signal-messenger-icon9117.jpg",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          type="email"
        />
        <Input
          placeholder="Full name"
          autoFocus
          value={fullName}
          onChangeText={(text) => setFullName(text)}
          type="text"
        />

        <Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          type="password"
        />
      </View>
      <Button
        containerStyle={styles.button}
        onPress={register}
        title="Register"
      />
      <Button
        containerStyle={styles.button}
        onPress={() => navigation.navigate("Login")}
        type="outline"
        title="Login"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    marginTop: 50,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
});

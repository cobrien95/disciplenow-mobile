import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoView}>
        <Image
          source={require("../assets/logo-no-background.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={email}
          style={styles.inputText}
          placeholder="doe@email.com"
          placeholderTextColor="#777777"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={password}
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#777777"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.actions}>
        <TouchableOpacity style={{ marginHorizontal: 15 }}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signUp}>Signup</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1CA5D5",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    width: "70%",
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    marginBottom: 15,
    justifyContent: "center",
    padding: 10,
  },
  inputText: {
    height: 50,
    color: "#000",
    fontWeight: "800",
    textAlign: "center",
  },
  signUp: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 15,
  },
  loginBtn: {
    width: "70%",
    backgroundColor: "#000",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  loginText: {
    color: "#ffffff",
    fontWeight: "800",
  },
  actions: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  logo: {
    height: 300,
    width: 300,
  },
  forgot: {
    fontWeight: "300",
    fontSize: 15,
  },
});

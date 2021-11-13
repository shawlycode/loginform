import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.login}> Log in</Text>
        <TextInput
          placeholder="Username"
          style={[styles.inputField, styles.placeholderText]}
        ></TextInput>
        <TextInput
          placeholder="password"
          style={[styles.inputField, styles.placeholderText]}
        ></TextInput>
        <TouchableOpacity>
          <Text style={styles.forgetpassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.logintext}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ fontSize: 20, margin: 10, padding: 10 }}>
            Don't have an account?{" "}
            <Text style={{ color: "#4A235A", fontSize: 24 }}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    height: 450,
    width: 380,
    borderRadius: 10,
    shadowRadius: 5,
    borderWidth: 3,
    borderColor: "#E5E8E8",
  },
  inputField: {
    borderBottomWidth: 3,
    borderColor: "#5F2585",
    width: 300,
    padding: 20,
  },
  login: {
    position: "relative",
    top: -20,
    left: -100,
    fontSize: 40,
    fontWeight: "bold",
    color: "#5F2585",
  },
  logintext: {
    textAlign: "center",
    fontSize: 30,
    color: "#FEF9E7",
    fontWeight: "700",
    padding: 8,
  },
  forgetpassword: {
    color: "#2E86C1",
    margin: 10,
    fontSize: 18,
    marginLeft: 190,
  },
  placeholderText: {
    fontSize: 20,
    paddingLeft: 0,
  },
  btn: {
    backgroundColor: "#5F2585",
    width: 300,
    height: 50,
    borderRadius: 10,
    marginTop: 30,
  },
});

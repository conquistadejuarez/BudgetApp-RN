import React, {useState, useContext} from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from 'axios';

const Register = ({ navigation }) => {

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [first_name, setFirstName] = React.useState("");
  const [last_name, setLastName] = React.useState("");


  const onPressHander = () => {
    navigation.navigate("Login");
  };

  const register = () => {

    let body = {

      username: username,
      password: password,
      first_name: first_name,
      last_name: last_name,
    };
    axios
    .post("https://budgetapp.digitalcube.rs/api/tenants/ca346095-7475-4667-b6d7-c5bfb5e7aef3/users", body)
    .then((r) => console.log(r.data))
    .catch((e) => console.log(e));

    onPressHander()
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../src/images/logo.png")}
        />
      </View>

      <View style={styles.landing}>
        <Text style={styles.landingMainText}>Welcome message</Text>
        <Text style={styles.landingUnderline}>
          Please fill in fields to continue
        </Text>
      </View>

      <View style={styles.form}>
        <TextInput
          value={username}
          onChangeText={(value) => setUsername(value)}
          style={styles.input}
          placeholder={"Username*"}
          placeholderTextColor={"#000"}
        />
      </View>

      <View style={styles.form}>
        <TextInput
          value={password}
          onChangeText={(value) => setPassword(value)}
          style={styles.input}
          placeholder={"Password*"}
          placeholderTextColor={"#000"}
        />
      </View>

      <View style={styles.form}>
        <TextInput
          value={first_name}
          onChangeText={(value) => setFirstName(value)}
          style={styles.input}
          placeholder={"First name*"}
          placeholderTextColor={"#000"}
        />
      </View>

      <View style={styles.form}>
        <TextInput
          value={last_name}
          onChangeText={(value) => setLastName(value)}
          style={styles.input}
          placeholder={"Last name*"}
          placeholderTextColor={"#000"}
        />
      </View>

      <TouchableOpacity 
      onPress={() => register()}
      style={styles.big_btn}>
        <Text style={styles.big_btn_text}>Register</Text>
      </TouchableOpacity>
      <Text onPress={onPressHander} style={styles.underall}>Already have an account?<Text style={{color:'#5E9C60'}}> Log in</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
    backgroundColor: "#FFF",
    paddingHorizontal: 18,
  },

  header: {
    width: "100%",
    backgroundColor: "#FBFBFB",
    height: "20%",
    top: 0,
    marginBottom:5,
  },

  logo: {
    alignSelf: "center",
    marginTop: 55,
  },

  landing: {
    padding: 10,
  },

  landingMainText: {
    alignSelf: "center",
    fontSize: 16,
  },

  landingUnderline: {
    alignSelf: "center",
    fontSize: 12,
    marginBottom:20,
  },

  form: {
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0, 0, 0, 0.38)",
    marginBottom: 40,
  },

  input: {
    color: "#000",
    width: "100%",
  },

  big_btn: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#5E9C60",
    paddingHorizontal: 20,
    height: "5%",
    borderRadius: 5,
  },

  big_btn_text: {
    fontSize: 16,
    color: "#FFF",
  },

  underall: {
    alignSelf:'center',
    fontSize:12,
    paddingVertical:10,
},
});

export default Register;

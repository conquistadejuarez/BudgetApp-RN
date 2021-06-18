import axios from "axios";
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
import {Context} from '../context/Store';


const Login = ({navigation}) => {

  const [state, dispatch] = useContext(Context);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");


  const login = () => {

    let body = {
      username : username,
      password : password,
    }

    axios
    .post("https://budgetapp.digitalcube.rs/api/tenants/ca346095-7475-4667-b6d7-c5bfb5e7aef3/sessions?", body)
    .then(r => {console.log(r.data); dispatch({type: 'SET_TOKEN',payload:r.data.token}); dispatch({type:'SET_NAME', payload:r.data.id})})
    .catch(e => console.log(e))
  }



    const onPressHandler = () => {

        navigation.navigate('Register');
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
          secureTextEntry={true}
          style={styles.input}
          placeholder={"Password*"}
          placeholderTextColor={"#000"}
        />
      </View>

      <Text style={styles.forgotPW}>Forgot password?</Text>

      <TouchableOpacity
      onPress={() => login()}
      style={styles.big_btn}
      >
          <Text style={styles.big_btn_text}>Log in</Text>

      </TouchableOpacity>

      <Text onPress={onPressHandler} style={styles.underall}>Don't have an account? <Text style={{color:'#5E9C60'}}>Register</Text></Text>
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

  forgotPW: {

    color: '#5E9C60',
    fontSize:12,
  },

  big_btn: {
    alignItems:'center',
    justifyContent:'center',
    marginTop: 30,
    backgroundColor: '#5E9C60',
    paddingHorizontal:20,
    height: '5%',
    borderRadius:5,
  },

  big_btn_text: {
      fontSize:16,
      color:'#FFF',
  },

  underall: {
      alignSelf:'center',
      fontSize:12,
      paddingVertical:10,
  }
});

export default Login;

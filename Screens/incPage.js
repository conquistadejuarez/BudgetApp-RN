import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";

const INC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form1}>
        <TextInput
          style={styles.input}
          placeholder={"Enter amount here"}
          placeholderTextColor={"#000"}
        />
        <View style={styles.muka}>
          <TextInput
            style={styles.input1}
            placeholder={"$"}
            placeholderTextColor={"#5E9C60"}
          />
          <Image
            style={styles.menu}
            source={require("../src/images/Vector.svg")}
          />
        </View>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder={"Enter description"}
          placeholderTextColor={"#000"}
        />
      </View>

      <TouchableOpacity
      style={styles.big_btn}>
        <Text style={styles.big_btn_text}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
  },
  form1: {
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0, 0, 0, 0.38)",
    marginBottom: 40,
    flexDirection: "row",
    padding: 10,
    marginTop: 20,
  },

  form: {
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0, 0, 0, 0.38)",
    marginBottom: 40,
    padding: 10,
  },

  input: {
    color: "#000",
    width: "80%",
  },

  input1: {
    width: "20%",
    borderLeftWidth: 1,
    paddingLeft: 10,
  },

  muka: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
  },

  menu: {
    height: 10,
    width: 20,
  },

  big_btn: {
    alignItems:'center',
    justifyContent:'center',
    marginTop:300,
    backgroundColor: '#5E9C60',
    paddingHorizontal:20,
    height: '5%',
    borderRadius:5,
  },

  big_btn_text: {
    fontSize:16,
    color:'#FFF',
},
});

export default INC;

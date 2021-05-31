import React, {useState, useContext} from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import {Context} from '../context/Store';




const Incomes = () => {

const [state, dispatch] = React.useContext(Context);

const logout = () => {
    dispatch({type:'SET_TOKEN', payload:""});
    dispatch({type:'SET_ID', payload:""});
   }

  return (
    <View style={styles.container}>

      <Image
          style={styles.logo}
          source={require("../src/images/herologout.png")}
        />
        <View style={{alignItems:'center'}}>
        <Text style={{fontSize:16, fontWeight:'700',}}>We hope Budget App has lived {"\n"} &nbsp;&nbsp;   up to your expectations</Text>
        <Text style={{fontSize:12,}}>Our main pirority is to improve your budget</Text>
        </View>

        <TouchableOpacity 
      onPress={() => logout()}
      style={styles.big_btn}>
        <Text style={styles.big_btn_text}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
    paddingHorizontal: 18,
    backgroundColor:'#FFF'
  },

  logo: {

    marginTop:100,
  },

  UC: {

    alignSelf:'center',
    color:'#000',
    fontSize:20,
    marginTop:100,

  },

  big_btn: {
    alignItems: "center",
    justifyContent: "center",
    position:'absolute',
    bottom:100,
    width:'100%',
    alignSelf:'center',
    backgroundColor: "#5E9C60",
    paddingHorizontal: 20,
    height: "5%",
    borderRadius: 5,
  },

  big_btn_text: {
    fontSize: 16,
    color: "#FFF",
  
  },
});

export default Incomes;

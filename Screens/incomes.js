import React, {useState, useContext} from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import {Context} from '../context/Store';




const Incomes = () => {

const [state, dispatch] = React.useContext(Context);

const logout = () => {
    dispatch({type:'SET_TOKEN', payload:""});
    dispatch({type:'SET_ID', payload:""});
   }

  return (
    <View style={styles.container}>
      <Text style={styles.UC}>Under Construction!</Text>

      <TouchableOpacity onPress={() => logout()}>
          <Text style={{fontSize:20,color:'#000', marginTop:100, alignSelf:'center'}}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
    backgroundColor: "rgba(127, 196, 129, 0.08)",
    paddingHorizontal: 18,
  },

  UC: {

    alignSelf:'center',
    color:'#000',
    fontSize:20,
    marginTop:100,

  }
});

export default Incomes;

import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const Expenses = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.UC}>Under Construction!</Text>
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

export default Expenses;
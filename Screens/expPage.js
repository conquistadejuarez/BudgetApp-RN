import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";
import { RadioButton } from "react-native-paper";
import { Context } from "../context/Store";

const EXP = () => {
  const [state, dispatch] = useContext(Context);

  const [checked, setChecked] = React.useState("first");

  console.log(checked)

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

      <View style={styles.datesMain}>
        <Text style={{ fontSize: 16, color: "#000" }}>Chose category</Text>
        <Text style={{ fontSize: 13, color: "#5E9C60" }}>Add new category</Text>
      </View>

      <View style={checked === 'first' ? styles.choser : styles.choser1}>
        <View>
          <Image
            style={styles.icons}
            source={require("../src/images/fork.png")}
          />
        </View>

        <View style={styles.mid}>
          <Text style={styles.title}>Eating out</Text>
          <Text style={styles.subtitle}>Restaurants,fast food...</Text>
        </View>

        <View>
          <RadioButton
            color="#5E9C60"
            uncheckedColor="#000"
            value="first"
            status={ checked === 'first' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('first')}
    
          />
        </View>
      </View>


      <View style={checked === 'second' ? styles.choser : styles.choser1}>
        <View>
          <Image
            style={styles.icons}
            source={require("../src/images/shopping.png")}
          />
        </View>

        <View style={styles.mid}>
          <Text style={styles.title}>Groceries</Text>
          <Text style={styles.subtitle}>Green market, supermarket...</Text>
        </View>

        <View>
          <RadioButton
            color="#5E9C60"
            uncheckedColor="#000"
            value="second"
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('second')}
    
          />
        </View>
      </View>



      <View style={checked === 'third' ? styles.choser : styles.choser1}>
        <View>
          <Image
            style={styles.icons}
            source={require("../src/images/clothes.png")}
          />
        </View>

        <View style={styles.mid}>
          <Text style={styles.title}>Clotes</Text>
          <Text style={styles.subtitle}>T-shirts,sneakers</Text>
        </View>

        <View>
          <RadioButton
            color="#5E9C60"
            uncheckedColor="#000"
            value="third"
            status={ checked === 'third' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('third')}
    
          />
        </View>
      </View>



      <View style={checked === 'forth' ? styles.choser : styles.choser1}>
        <View>
          <Image
            style={styles.icons}
            source={require("../src/images/toiletries.png")}
          />
        </View>

        <View style={styles.mid}>
          <Text style={styles.title}>Toiletry</Text>
          <Text style={styles.subtitle}>Tooth paste, soap...</Text>
        </View>

        <View>
          <RadioButton
            color="#5E9C60"
            uncheckedColor="#000"
            value="forth"
            status={ checked === 'forth' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('forth')}
    
          />
        </View>
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
    width: "30%",
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
  datesMain: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom:20,
  },

  choser: {

    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    padding:8,
    marginTop:10,
    backgroundColor:'rgba(127, 196, 129, 0.08)',
    borderRadius:10,
  },

  choser1: {
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    padding:8,
    marginTop:10,
    borderRadius:10,
  },

  mid: {
      position:'absolute',
      marginLeft:('20%'),
  },

  title: {
      color:'rgba(0,0,0,0.9)',
      fontSize:14,
  },

  subtitle: {
      color:'rgba(0,0,0,0.6)',
      fontSize:12,
  },

  big_btn: {
    alignItems:'center',
    justifyContent:'center',
    marginTop: 50,
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

export default EXP;

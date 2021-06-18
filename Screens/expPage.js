import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";
import { Context } from "../context/Store";
import axios from "axios";
import { useEffect } from "react";
import SvgImage from "../Components/SvgImage";

const EXP = ({navigation}) => {
  const [state, dispatch] = useContext(Context);

  const [checked, setChecked] = React.useState(
    "1a3b56ef-02a4-4c2d-b6f6-0cae6281811e"
  );
  const [amount, setAmount] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [description, setDescription] = React.useState("");


  const menjaj = () => {
    navigation.navigate('Main')
  }

  console.log(checked);

  const AuthStr = "Bearer " + state.token;

  useEffect(() => {
    axios
      .get(
        "https://budgetapp.digitalcube.rs/api/transactions/categories?category_type=outcome",
        { headers: { Authorization: AuthStr } }
      )
      .then((response) => {
        console.log(response.data);
        setLista(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [lista, setLista] = React.useState([]);

  const createTransaction = () => {
    let body = {
      amount: amount,
      category: category,
      currency: "RSD",
      description: description,
    };

    const AuthStr1 = "Bearer " + state.token;

    axios
      .post("https://budgetapp.digitalcube.rs/api/transactions", body, {
        headers: { Authorization: AuthStr1 },
      })
      .then((r) => {
        console.log(r.data);
      })
      .catch((error) => {
        console.log(error);
      });

      menjaj();
  };

  return (
    <View style={styles.container}>
      <View style={styles.form1}>
        <TextInput
          style={styles.input}
          placeholder={"Enter amount here"}
          placeholderTextColor={"#000"}
          value={amount}
          keyboardType={"numeric" }
          onChangeText={(value) => setAmount(value)}
        />
        <View style={styles.muka}>
          <TextInput
            style={styles.input1}
            placeholder={"RSD"}
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
          value={description}
          onChangeText={(value) => setDescription(value)}
        />
      </View>

      <View style={styles.datesMain}>
        <Text style={{ fontSize: 16, color: "#000", marginBottom: 15, }}>Chose category</Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 160 }}
        data={lista}
        renderItem={({ item, index }) => {
          return (
            <View style={checked === item.id ? styles.choser : styles.choser1}>
              <View>
                <SvgImage
                  size={34}
                  uri={
                    "https://budgetapp.digitalcube.rs/assets/icons/categories/" +
                    item.icon_svg
                  }
                />
              </View>

              <View style={styles.mid}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.subtitle}>{item.description}</Text>
              </View>

              <View>
                <RadioButton
                  color="#5E9C60"
                  uncheckedColor="#000"
                  value={item.id}
                  status={checked === item.id ? "checked" : "unchecked"}
                  onPress={() =>  {

                    setChecked(item.id)
                    setCategory(item.id)
                  }}
                />
              </View>
            </View>
          );
        }}
      />

      <TouchableOpacity style={styles.big_btn}>
        <Text  onPress={() =>createTransaction()} style={styles.big_btn_text}>Add and expense</Text>
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
    fontFamily:'Regular'

  },

  input1: {
    width: "30%",
    borderLeftWidth: 1,
    paddingLeft: 10,
    fontFamily:'Regular'
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

  choser: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 8,
    marginTop: 10,
    backgroundColor: "rgba(127, 196, 129, 0.08)",
    borderRadius: 10,
  },

  choser1: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 8,
    marginTop: 10,
    borderRadius: 10,
  },

  mid: {
    position: "absolute",
    marginLeft: "20%",
    alignSelf:'center'
  },

  title: {
    color: "rgba(0,0,0,0.9)",
    fontSize: 16,
    fontFamily:'Regular'

  },

  subtitle: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 12,
    fontFamily:'Regular'

  },

  big_btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5E9C60",
    paddingHorizontal: 20,
    height: "5%",
    borderRadius: 5,
    position: "absolute",
    width: "100%",
    bottom: 120,
    alignSelf: "center",
  },

  big_btn_text: {
    fontSize: 16,
    color: "#FFF",
    fontFamily:'Regular'

  },
});

export default EXP;

import React, {useState, useEffect, useContext} from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import Header from "../Components/Header/index";
import {Context} from '../context/Store';
import axios from 'axios';
import moment from 'moment';
import { useIsFocused } from '@react-navigation/native';



const StatsMain = ({navigation}) => {



  const [state, dispatch] = useContext(Context);


  const isFocused = useIsFocused();


  const onPressHandler = () => {

    navigation.navigate('Expenses')
    
  }

  const onPressHandler1 = () => {

    navigation.navigate('Incomes')
  }


  const AuthStr = 'Bearer ' + state.token

  useEffect(() => {
  if (isFocused) 

    refresh()
   


  },[isFocused]);



  const refresh = () => {
    axios.get('https://budgetapp.digitalcube.rs/api/transactions?', { 'headers' : {'Authorization': AuthStr }} )
    .then((response => { console.log(response.data); setBalance(response.data.summary.balance); setHistoryList(response.data.transactions)}))
    .catch((error) => { console.log(error);});
  }

  const [historyList, setHistoryList] = React.useState([]);
  const [balance, setBalance] = React.useState(0);


  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.header}>
        <Text style={styles.smallText}>Current balance</Text>
        <Text style={styles.bigInt}>
          {balance}<Text style={{ fontSize: 15,}}>RSD</Text>
        </Text>
      </View>

      <View style={styles.general}>

      <TouchableOpacity
      onPress={() => onPressHandler1()}
      >

        <View style={styles.buttons}>
          <View style={styles.left}>
            <Text style={styles.nijeZnak}>Add an income</Text>
          </View>
          <View style={styles.right}>
            <Image
              style={styles.znak}
              source={require("../src/images/plus.png")}
            />
          </View>
        </View>

        </TouchableOpacity>

        <TouchableOpacity
      onPress={() => onPressHandler()}
      >

        <View style={styles.buttons1}>
          <View style={styles.left}>
            <Text style={styles.nijeZnak1}>Add an expense</Text>
          </View>
          <View style={styles.right1}>
            <Image
              style={styles.znak1}
              source={require("../src/images/nusmi.png")}
            />
          </View>
        </View>

        </TouchableOpacity>



      </View>


      <View
        style={{
          borderBottomColor: "rgba(0, 0, 0, 0.1)",
          borderBottomWidth: 1,
          marginTop: 40,
        }}
      />
      <Text style={{marginTop:20,marginBottom:20,}}>History</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={historyList}
        renderItem={({ item, index }) => {
          return (

            <View style={styles.row}>
              <View style={styles.lefts}>
                <Text style={styles.textDate}>{moment(item.created).format("MMM[\n]YY")}</Text>
                <Image
                  style={{width:30,height:30, resizeMode:'contain', marginLeft:10}}
                  source={{ uri: 'https://budgetapp.digitalcube.rs/assets/icons/history/' + item.icon_png}}
                />
              </View>

              <View style={styles.rights}>
                <Text style={styles.textDesc}>{item.description}</Text>
                <Text style={styles.textAmount}>{item.amount.toFixed(0)} <Text style={{fontSize:10}}>RSD</Text></Text>
              </View>
            </View>

          );
        }}
      />



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

  header: {
    marginTop: "25%",
    alignSelf:'center',
    paddingBottom:20,
  },
  smallText: {
    fontSize: 16,
    fontWeight:'600',
  },

  bigInt: {
    fontSize: 30,
    color: "#5E9C60",
    marginBottom:15,
  },

  general: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#F2F9F2",
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 12,
  },

  buttons1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#FDECEC",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  nijeZnak: {
    fontSize: 12,
    color: "#5E9C60",
  },

  nijeZnak1: {
    fontSize: 12,
    color: '#E35959',
  },

  znak: {
    width:16,
    height:16,
  },

  znak1: {

    width:17,
    marginTop:5,


  },

  right: {
    backgroundColor: "rgba(217, 239, 217, 0.6)",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: 5,
  },

  right1: {
    backgroundColor: 'rgba(249, 196, 196, 0.6)',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: 5,
    height:35,
  },

  left:{
    alignSelf:'center',
  },

  lefts: {
    flexDirection:'row',
    padding:5,
  },

  rights: {
  },

  row: {
    flexDirection:'row',
    justifyContent:'space-between',
    
  },

  textDate: {
    fontSize:14,
    fontWeight:'600',
    color:'rgba(0, 0, 0, 0.85)',

  },

  textDesc: {

    fontSize:14,
    fontWeight:'400',
    color:'#000',
    alignSelf:'flex-end'

  },

  textAmount: {
    fontSize:16,
    fontWeight:'700',
  }
});

export default StatsMain;

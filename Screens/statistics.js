import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Image,
  FlatList,
} from "react-native";
import { Context } from "../context/Store";
import Header from "../Components/Header/index";
import moment from "moment";
import SvgImage from "../Components/SvgImage";
import axios from "axios";
import { useIsFocused } from '@react-navigation/native';
import { TouchableOpacity } from "react-native-gesture-handler";


const Stats = ({ navigation }) => {
  const [state, dispatch] = useContext(Context);

  const [income, setIncome] = useState('');
  const [outcome, setOutcome] = useState('');
  const [date, setDate] = useState('05')

  const AuthStr = "Bearer " + state.token;



  const isFocused = useIsFocused();

  useEffect(() => {

    axios
      .get("https://budgetapp.digitalcube.rs/api/transactions?", {
        headers: { Authorization: AuthStr },
      })
      .then((response) => {
       // console.log(response.data);
        setBalance(response.data.summary.balance);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [balance, setBalance] = React.useState(0);


  useEffect(() => {

    if (isFocused) {

      axios
      .get(
        `https://budgetapp.digitalcube.rs/api/transactions/statistics?year=2021&month=${date}`,
        { headers: { Authorization: AuthStr } }
      )
      .then((res) => {
        console.log(res.data);
        setNiz(res.data.by_category);
        setIncome(res.data.income)
        setOutcome(res.data.outcome)
      })
      .catch((error) => {
        console.log(error);
      });

    }
    
  }, [isFocused]);

  const [niz, setNiz] = useState([]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.middle}>
        <View style={styles.dates}>
          <View style={styles.left}>
            <Text style={{ fontSize: 28, fontWeight: "600" }}>
              {moment().format("MMM YYYY")}
            </Text>
          </View>

          <View style={styles.right}>
            <TouchableOpacity
            
            >
            <Image
              source={require("../src/images/chevron-left.png")}
              style={{ marginRight: 20 }}
            />
            </TouchableOpacity>

            <TouchableOpacity
            >
            <Image source={require("../src/images/chevron-left-1.png")} />
            </TouchableOpacity>

          </View>
        </View>

        <View style={styles.center}>
          <Text style={styles.miniText}>Total in may</Text>
          <Text style={styles.bigNumber}>
            {balance}
            <Text style={{ fontSize: 12 }}>&nbsp;RSD</Text>
          </Text>
        </View>

        <View style={styles.expenses}>
          <Text style={styles.expensesBlackSmall}>Expenses</Text>
          <View style={styles.expensesRow}>
            <Text style={styles.expensesBlackNumber}>
              {outcome}<Text style={{ fontSize: 10 }}>&nbsp;RSD</Text>
            </Text>
          </View>
        </View>

        <View style={styles.expenses1}>
          <Text style={styles.incomesGreenSmall}>Income</Text>
          <View style={styles.expensesRow1}>
            <Text style={styles.incomesGreenNumber}>
              {income}<Text style={{ fontSize: 10 }}>&nbsp;RSD</Text>
            </Text>
          </View>
        </View>

        <View style={styles.datesMain}>
          <Text>Most spent on</Text>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={niz}
          horizontal={true}
          keyExtractor={(item, index) => item.id_category}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.circle}>
                <Text style={styles.title}>{item.category_name}</Text>
                <Text style={styles.numa}>{item.amount}</Text>
                <Text
                  style={{
                    paddingBottom: 20,
                    color: "rgba(0, 0, 0, 0.6)",
                    fontSize: 12,
                  }}
                >
                  RSD
                </Text>
                <SvgImage
                  size={34}
                  uri={
                    "https://budgetapp.digitalcube.rs/assets/icons/history/" +
                    item.category_icon
                  }
                />
              </View>
            );
          }}
        />
      </View>
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

  button: {
    opacity: 10,
    marginTop: "20%",
    alignSelf: "flex-start",
    paddingHorizontal: 8,
  },

  buttonText: {
    color: "#000",
    fontSize: 15,
  },

  middle: {
    marginTop: "23%",
  },

  dates: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },

  right: {
    flexDirection: "row",
  },

  datesMain: {
    width: "100%",
    marginTop: 20,
  },

  center: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },

  miniText: {
    fontSize: 12,
  },

  bigNumber: {
    fontSize: 30,
    color: "#5E9C60",
  },

  expenses: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },

  expenses1: {
    backgroundColor: "rgba(127, 196, 129, 0.14)",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },

  expensesBlackSmall: {
    alignSelf: "center",
    fontSize: 12,
    color: "#000",
  },

  expensesBlackNumber: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "600",
  },

  incomesGreenSmall: {
    alignSelf: "center",
    fontSize: 12,
    color: "#5E9C60",
  },

  incomesGreenNumber: {
    alignSelf: "center",
    fontSize: 20,
    color: "#5E9C60",
  },

  rows: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },

  circle: {
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 0.22,
    height: Dimensions.get("window").width * 0.35,
    backgroundColor: "#FAFAFA",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    marginRight: 10,
    marginTop: 30,
  },

  title: {
    fontSize: 10,
    color: "rgba(0, 0, 0, 0.6)",
  },

  numa: {
    fontSize: 14,
    color: "#101010",
  },
});

export default Stats;

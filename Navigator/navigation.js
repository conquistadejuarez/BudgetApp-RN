import React, { useContext } from "react";
import { View, Text, StyleSheet, Image , Dimensions} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Context } from "../context/Store";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import Stats from "../Screens/main";
import StatsMain from "../Screens/statistics";
import Incomes from "../Screens/incomes";
import Navigator1 from "./nav";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigator = () => {
  const [state, dispatch] = useContext(Context);

  return (
    <NavigationContainer>
      {state.token === "" ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              header: () => null,
            }}
          />

        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          tabBarOptions={{
            showLabel: false,
            style: {
              position: "absolute",
              elevation: 0,
              backgroundColor: "#FFF",
              borderTopColor: "transparent",
            },
          }}
        >
          <Tab.Screen
            name="MainPage"
            component={Navigator1}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.nav}>
                  <Image
                    source={require("../src/images/wallets.png")}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 20,
                      tintColor: focused ? "#98B279" : "#333333",
                    }}
                  />
                  <Text style={styles.ltext}>Wallet</Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="StatsMain"
            component={StatsMain}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.nav}>
                  <Image
                    source={require("../src/images/statts.png")}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 20,
                      tintColor: focused ? "#98B279" : "#333333",
                    }}
                  />
                  <Text style={styles.ltext}>Stats</Text>
                </View>
              ),
            }}
          />

          <Tab.Screen
            name="Incomes"
            component={Incomes}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.nav}>
                  <Image
                    source={require("../src/images/more.png")}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 20,
                      tintColor: focused ? "#98B279" : "#333333",
                    }}
                  />
                  <Text style={styles.ltext}>More</Text>
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  nav: {

    justifyContent:'space-around',
    flex:1,
  },

  ltext: {
    fontSize:10,
  }
});

export default Navigator;
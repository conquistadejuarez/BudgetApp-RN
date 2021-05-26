import React, { useContext } from "react";
import { View, Text, StyleSheet, Image , Dimensions} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Context } from "../context/Store";
import EXP from '../Screens/expPage';
import INC from '../Screens/incPage';
import MainPage from "../Screens/main";


const Stack = createStackNavigator();


const Navigator1 = () => {

    const [state, dispatch] = useContext(Context);


    return(

        <Stack.Navigator>

        <Stack.Screen
            name="Main"
            component={MainPage}
            options={{
                header: () => null,
              }}
        />
        <Stack.Screen
            name="Expenses"
            component={EXP}
         />

        <Stack.Screen
            name="Incomes"
            component={INC}
         />
    </Stack.Navigator>

    )




}

const styles = StyleSheet.create({});

export default Navigator1
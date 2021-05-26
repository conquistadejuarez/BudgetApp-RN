import React, {useContext} from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableHighlight, Image} from 'react-native';
import {Context} from '../context/Store';
import Header from '../Components/Header/index';

const MainPage = ({navigation}) => {



    const [state, dispatch] = useContext(Context);

    const logout = () => {
        dispatch({type:'SET_TOKEN', payload:""});
        dispatch({type:'SET_ID', payload:""});
       }

    const onPressHander = () => {

        navigation.navigate('Expenses')
    }

    const onPressHander1 = () => {

        navigation.navigate('Incomes')
    }


    return(

        <View style={styles.container}>

        <Header />
        <View style={styles.middle}>

            <Text style={{marginBottom:10,}}>Date range</Text>

        <View style={styles.dates}>
                <Text>Date</Text>

                <View style={styles.datesMain}>
                    <Text>5/13/2021 - 5/16/2021</Text>
                    <Image style={styles.menu} source={require('..//src/images/blackCalendar.png')}/>
                </View>

            </View>
            
            <View style={styles.datesMain}>
                <Text>Balance</Text>
                <Text style={{color:'rgba(0, 0, 0, 0.5)'}}>Details</Text>
            </View>

            <View style={styles.center}>
                <Text style={styles.miniText}>Total</Text>
                <Text style={styles.bigNumber}>$4,981.87</Text>
            </View>

            <View style={styles.expenses}>
            <Text>Expenses</Text>
            <View style={styles.expensesRow}>
                <Text>$350.87</Text>
                <TouchableHighlight onPress={onPressHander}>
                <Image style={styles.menu} source={require('..//src/images/plus-circle.png')}/>
                </TouchableHighlight>
            </View>
                

            </View>

            <View style={styles.expenses1}>
            <Text>Income</Text>
            <View style={styles.expensesRow1}>
                <Text>$3400</Text>
                <TouchableHighlight onPress={onPressHander1}>
                <Image style={styles.menu} source={require('..//src/images/plus-circle-green.png')}/>
                </TouchableHighlight>
            </View>
            </View>

            <View style={styles.datesMain}>
                <Text>Most spent on</Text>
                <Text style={{color:'rgba(0, 0, 0, 0.5)'}}>See all</Text>
            </View>

            <View style={styles.rows}>

            <View style={styles.circle}>
                <Text style={styles.title}>Eating out</Text>
                <Text style={styles.numa}>$50.89</Text>
                <Image style={styles.icons} source={require('..//src/images/fork.png')}/>
            </View>

            <View style={styles.circle}>
                <Text style={styles.title}>Groceries</Text>
                <Text style={styles.numa}>$32.19</Text>
                <Image style={styles.icons} source={require('../src/images/shopping.png')}/>
            </View>

            <View style={styles.circle}>
                <Text style={styles.title}>Clothes</Text>
                <Text style={styles.numa}>$140</Text>
                <Image style={styles.icons} source={require('..//src/images/clothes.png')}/>
            </View>

            <View style={styles.circle}>
                <Text style={styles.title}>Toiletry</Text>
                <Text style={styles.numa}>$22.999</Text>
                <Image style={styles.icons} source={require('../src/images/toiletries.png')}/>
            </View>




            </View>
            {/* END ROWS */}

        </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        width: "100%",
        height: Dimensions.get("window").height,
        backgroundColor: "#FFF",
        paddingHorizontal:10,
      },

      button: {
        opacity:10,
        marginTop:'20%',
        alignSelf:'flex-start',
        paddingHorizontal:8,
      
        },

      buttonText: {
        color:'#000',
        fontSize:15,
      },

      middle: {
          marginTop:'23%',
      },

      dates: {
        backgroundColor:'#F5F5F5',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        paddingHorizontal:10,
        alignContent:'center',
        paddingBottom:5,
        borderBottomWidth:0.5,
      },
      
      datesMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop:20,
      },

      center: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20,
      },

      miniText: {

        fontSize:12,
      },

      bigNumber: {
          fontSize:30,
          color: '#5E9C60',
      },

      expenses: {
         
          backgroundColor:'#F5F5F5',
          borderRadius:10,
          paddingVertical:10,
          paddingHorizontal:10,
          marginTop:10,
      },

      expensesRow: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop:10,

      },

      expenses1: {
        backgroundColor:'rgba(127, 196, 129, 0.14)',
        borderRadius:10,
        paddingVertical:10,
        paddingHorizontal:10,
        marginTop:10,
    },

    expensesRow1: {

      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginTop:10,

    },

    rows:{

        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop:20,
    },

    circle: {
        borderRadius:
          Math.round(
            Dimensions.get("window").width + Dimensions.get("window").height
          ) / 2,
        width: Dimensions.get("window").width * 0.22,
        height: Dimensions.get("window").width * 0.35,
        backgroundColor: "#FAFAFA",
        justifyContent:'center',
        alignItems:'center',
        padding:5,
      },

      title: {
        fontSize:10,
        color:'rgba(0, 0, 0, 0.6)',
      },

      numa: {
        fontSize:14,
        color:'#101010',
        paddingBottom: 20,

      },

      icons: {


      },


});

export default MainPage;


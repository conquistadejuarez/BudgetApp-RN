import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Header = () => {
    return(

        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../src/images/logo.png')}/>
            <Image style={styles.menu} source={require('../../src/images/menu.png')}/>
        </View>

    );
};


const styles = StyleSheet.create({

    container: {

        position: 'absolute',
        top: 40,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',

    },

    logo: {

        width: 50,
        height: 30,
        resizeMode: 'contain',

    },

    menu: {
        
        width: 50,
        height: 30,
        resizeMode: 'contain',

    },

});

export default Header;
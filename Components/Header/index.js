import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Header = () => {
    return(

        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../src/images/logo.png')}/>
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

        width: 70,
        height: 50,
        resizeMode: 'contain',

    },

    menu: {
        
        width: 70,
        height: 50,
        resizeMode: 'contain',

    },

});

export default Header;
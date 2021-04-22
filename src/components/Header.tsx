import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import userimg from '../assets/waterdrop.png'
import fonts from '../../styles/fonts';

export function Header(){
    return(
        <View style={styles.container}>
            <View>
            <Text style={styles.greeting}>Olá,</Text>
            <Text style={styles.username}>André</Text>
            </View>
            <Image style={styles.image} source={userimg}/>
          
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: getStatusBarHeight()
        
    },
    image:{
        height: 70,
        width: 70,
        borderRadius: 40
    },
    greeting:{
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,
        lineHeight: 40
    },
    username:{
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    }
});
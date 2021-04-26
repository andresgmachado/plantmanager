import React, {useEffect, useState} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import AsyncStorage from '@react-native-async-storage/async-storage'
import userimg from '../assets/download.png'
import fonts from '../../styles/fonts';

export function Header(){
    const [userName, SetUserName] = useState<string>();

    useEffect(()=>{
        async function loadStorageUserName() {
            const User = await AsyncStorage.getItem('@plantmanager:user');
            SetUserName(User || '');
        }
        loadStorageUserName();
    },[]);
    return(
        <View style={styles.container}>
            <View>
            <Text style={styles.greeting}>Olá,</Text>
            <Text style={styles.username}>{userName}</Text>
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
        marginTop: getStatusBarHeight()+20
        
    },
    image:{
        height: 85,
        width: 85,
        borderRadius: 40,
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
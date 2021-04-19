import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import colors from '../../styles/colors';

interface ButtonPropos extends TouchableOpacityProps{
    tittle: string;
}

export function Button( {tittle, ...rest}: ButtonPropos) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
    <Text style={styles.buttontext}>
        {tittle}
    </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttontext:{
        color: colors.white,
        fontSize: 24
    },
});

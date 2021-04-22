import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface EnviButtonProps extends RectButtonProps{
    title: string;
    active?: boolean;
}

export function EnvButton({title, active =false, ...rest}: EnviButtonProps){
    return(
        <RectButton  
            style={[
                styles.container,
                active && styles.containerActive]}   
                {...rest}>
            
            <Text style={[
                styles.text,
                active && styles.textActive]}>
                {title}
            </Text>
        </RectButton>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.shape,
        height: 40,
        width: 76,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
       
        margin: 10

    },
    containerActive:{
        backgroundColor: colors.green_light
    },
    text:{
        color: colors.heading,
        fontFamily: fonts.text,
        fontSize: 17
    },
    textActive:{
        fontFamily: fonts.heading,
        color: colors.green_dark,
        fontSize: 17
    }
})
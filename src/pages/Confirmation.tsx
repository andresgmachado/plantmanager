import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView
} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Button } from '../components/Button';

interface Params{
    title: string;
    subtitle: string;
    buttonTitle: string;
    icon: 'smile' | 'hug',
    nextScreen: string;
}

const emojis ={
    hug: '🤗',
    smile: '😆'
}

export function Confirmation(){
    const navigation = useNavigation();
    const routes = useRoute();

    const {
        title,
        subtitle,
        buttonTitle,
        icon,
        nextScreen
    } = routes.params as Params

    function handleSubmit(){
      navigation.navigate(nextScreen);
    }
    
    return(
    <SafeAreaView style={styles.container}>
       <View style={styles.content}>
           <Text style={styles.emoji}>
                {emojis[icon]}
           </Text>
           <Text style={styles.tittle}>
               {title}
           </Text>
           <Text style={styles.subtittle}>
            {subtitle}
           </Text>
           <View style={styles.footer}>
            <Button
            title={buttonTitle}
            onPress={handleSubmit}
            />
        </View>
        </View>


    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 30
    },
    emoji:{
        fontSize: 78
    },
    tittle:{
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15
    },
    subtittle:{
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize:17,
        paddingVertical: 10,
        color: colors.heading
    },
    footer:{
        width: '100%',
        paddingHorizontal: 45,
        marginTop: 20
    }
});
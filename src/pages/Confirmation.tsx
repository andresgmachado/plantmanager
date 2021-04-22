import { useNavigation } from '@react-navigation/core';
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

export function Confirmation(){
    const navigation = useNavigation();

    function handleSubmit(){
      navigation.navigate('PlantSelect');
    }
    
    return(
    <SafeAreaView style={styles.container}>
       <View style={styles.content}>
           <Text style={styles.emoji}>
                😉
           </Text>
           <Text style={styles.tittle}>
               Prontinho
           </Text>
           <Text style={styles.subtittle}>
                Agora vamos começar a cuidar das suas
                plantinhas com muito cuidado.
           </Text>
           <View style={styles.footer}>
            <Button
            title='Avançar'
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
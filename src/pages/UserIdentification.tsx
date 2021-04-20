import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Button } from '../components/Button';


export function UserIdentification(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.form}>
                    <Text style={styles.emoji}>
                        😄
                    </Text>
                    <Text style={styles.tittle}>
                        Como podemos {'\n'} 
                        chamar você?
                    </Text>
                    <TextInput 
                        style={styles.input}
                    />
                    <View style={styles.footer}>
                        <Button/>
                    </View>
                    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content:{
        flex: 1,
        width: '100%'
    },
    emoji:{
        fontSize: 64
    },
    form:{
        flex:1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },
    input:{
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 10,
        textAlign: 'center'
    },
    tittle:{
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20
    },
    footer:{
        marginTop: 40,
        width: '100%'
    }

});


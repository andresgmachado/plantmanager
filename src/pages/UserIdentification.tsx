import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Button } from '../components/Button';


export function UserIdentification(){

    const [isFocused, setIsFocused]= useState(false);
    const[isFilled, setIsFilled] = useState(false);
    const[Name, setName] = useState<string>();

    const navigation = useNavigation();

    function handleSubmit(){
      navigation.navigate('Confirmation');
    }

    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!Name);
    }
    function handleInputFocus(){
        setIsFocused(true);
    }

    function handleInputChange(value: string){
        setIsFilled(!!value);
        setName(value);
    }

    return(
        <View style={styles.container}>
        <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS ==='ios' ? 'padding': 'height'}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.content}>
                <View style={styles.form}>   
                    <Text style={styles.emoji}>
                        {!isFilled ? '😃' : '😄'}
                    </Text>
                    <Text style={styles.tittle}>
                        Como podemos {'\n'} 
                        chamar você?
                    </Text>
                    <TextInput 
                        style={[
                                styles.input,
                                (isFocused || isFilled) && {borderColor: colors.green}
                        ]}
                        placeholder="Digite o Nome"
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        onChangeText={handleInputChange}
                    />

                    <View style={styles.footer}>
                        <Button
                        title='Confirmado'
                        onPress={handleSubmit}
                        />
                    
                    </View> 
                </View>
            </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
        alignItems: 'baseline',
        justifyContent: 'space-around',
        paddingBottom: 32
    },
    content:{
        flex: 1,
        width: '100%'
    },
    header:{
        alignItems: 'center'
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


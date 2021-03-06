import React, { useEffect, useState } from 'react';
import { 
        StyleSheet, 
        Text, 
        View, 
        Image,
        TouchableOpacity, 
        Dimensions} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts'
import {Entypo} from '@expo/vector-icons'
import wateringimg from '../assets/watering.png';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage'

export function Welcome() {

  const [userName, SetUserName] = useState<string>();

  useEffect(()=>{
      async function loadStorageUserName() {
          const User = await AsyncStorage.getItem('@plantmanager:user');
          SetUserName(User || '');
      }
      loadStorageUserName();
  },[]);


  const navigation = useNavigation();

  function handleStart(){
    if (!userName){
    navigation.navigate('UserIdentification');
    } else{
      navigation.navigate('PlantSelect');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.tittle}>
            Gerencie{'\n'}
            suas plantas de
            {'\n'}forma fácil
        </Text>

        <Image  
        source={wateringimg}   
        style={styles.image} 
        resizeMode= "contain"/>

        
        <Text style={styles.subtittle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
        </Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={handleStart}
        >
          <Text style={styles.buttonIcon}>
             <Entypo name="chevron-thin-right"/>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  button:{
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10,
    height: 56,
    width: 56
},
buttonIcon:{
    color: colors.white,
    fontSize: 28
},
  tittle:{
      fontSize: 28,
      paddingTop: 15,
      paddingBottom: 5,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colors.heading,
      fontFamily: fonts.heading,
      lineHeight: 38
  },
  subtittle:{
      textAlign: 'center',
      fontSize: 18,
      paddingTop: 15,
      paddingBottom: 18,
      color: colors.heading,
      fontFamily: fonts.text
  },
  image:{
      height: Dimensions.get('window').width * 0.8
  }
});

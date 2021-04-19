import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import colors from '../../styles/colors';
import wateringimg from '../assets/watering.png';
import {Button} from '../components/button';

export function Welcome() {
    const [visibles, setVisible]= useState(false);

    function handleVisibility(){
        setVisible(true);
    }


  return (
    <View style={styles.container}>

        <Text style={styles.tittle}>
            Gerencie{'\n'}
            suas plantas
            {'\n'}de forma fácil
        </Text>
        { visibles &&
        <Image  source={wateringimg}   style={styles.image} />
        }
        
        <Text style={styles.subtittle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
        </Text>
        <Button tittle=">" onPress={handleVisibility}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tittle:{
      fontSize: 32,
      paddingTop: 15,
      paddingBottom: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colors.heading
  },
  subtittle:{
      textAlign: 'center',
      fontSize: 18,
      paddingTop: 15,
      paddingBottom: 18,
      paddingHorizontal: 20,
      color: colors.heading
  },
  image:{
      height: 292,
      width: 284
  }
});

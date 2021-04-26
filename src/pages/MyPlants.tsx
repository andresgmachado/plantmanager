import React, { useEffect, useState } from 'react';
import {View,StyleSheet,Text, Image, FlatList, ScrollView, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import colors from '../../styles/colors';
import { Header } from '../components/Header';
import waterDrop from '../../src/assets/waterdrop.png'
import { PlantProps, loadPlant, StoragePlantProps, removePlant } from '../libs/storage';
import {formatDistance} from 'date-fns';
import {pt} from 'date-fns/locale'
import fonts from '../../styles/fonts';
import { PlantCardSecundary } from '../components/PlantCardSecundary';
import { Load } from '../components/Load';


export function MyPlants(){

    const [myplants, setMyplants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [next, setNext] = useState<string>();
    const navigation = useNavigation();

    useEffect(() =>{
        async function loadstorageData() {
            const  plantsStorage = await loadPlant();
            const nextTime = formatDistance(
                new Date(plantsStorage[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                { locale: pt}
            );
        
            setNext(
                 `Não esqueça de regar a ${plantsStorage[0].name} à ${nextTime}.`   
            )

            setMyplants(plantsStorage);
            setLoading(false);
        }
            loadstorageData();
    },[])

    function handleSubmit(){
      navigation.navigate('PlantSelect');
    }

    function handleRemove(plant: PlantProps){
        Alert.alert('Remover',`Deseja remover a ${plant.name}?`,[
            {
                text: 'Não 🙏',
                style: 'cancel'
            },
            {
                text : 'Sim 😓',
                onPress: async() => {
                    try {

                        await removePlant(plant.id);
                        setMyplants((oldData) =>
                            oldData.filter((item)=> item.id !== plant.id)
                        );

                    }catch{
                        Alert.alert('Não foi possível deletar🙄')
                    }
                }
            }
        ])
    }

    if(loading)
    return <Load />
    
    return(
    <View style={styles.container}>
       <Header />

        <View style={styles.spotlight}>
            <Image source={waterDrop}
                style={styles.spotlightImage}
            />
            <Text style={styles.spotlightText}>
                {next}
            </Text>
        </View>

        <View style={styles.plants}>
            <Text style={styles.plantsTitle}>
                Proximas regadas
            </Text>
            <FlatList
             data={myplants}
             keyExtractor={(item) => String(item.id)}
             renderItem={({item}) => (
                 <PlantCardSecundary 
                    data={item}
                    handleRemove={() => {handleRemove(item)}}
                 />
                
             )}
             
             >
            <ScrollView 
    
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollListContainer}
            />
            </FlatList>

        </View>

    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: 50,
        backgroundColor: colors.background
    },
    scrollListContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.shape
      },
    spotlight:{
        backgroundColor: colors.blue_light,
        paddingHorizontal: 20,
        borderRadius: 20,
        height: 110,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    spotlightImage:{
        width: 60,
        height: 60
    },
    spotlightText:{
        flex: 1,
        color: colors.blue,
        paddingHorizontal: 20
    },
    plants:{
        flex: 1,
        width: '100%'
    },
    plantsTitle:{ 
        fontSize: 24,
        fontFamily :fonts.heading,
        color: colors.heading,
        marginVertical: 20
    }
});
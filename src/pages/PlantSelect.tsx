import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import {Header} from '../components/Header';
import {EnvButton} from '../components/EnvButton';
import api from '../Services/api';
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import {Load} from '../components/Load';

interface EnviorementProps{
    key: string;
    title: string;
}

interface PlantProps{
    id: string,
    name: string,
    about: string,
    water_tips: string,
    photo: string,
    environments: [string];
    frequency: {
      times: number,
      repeat_every: string
    }
}

export function PlantSelect(){
    const [enviroments, setEnviroments] = useState<EnviorementProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [filteredplants, setFilteredPlants] = useState<PlantProps[]>([]);
    const [enviromentsSelected, setenviromentsSelected] = useState('all');
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [loadingMore, setloadingMore] = useState(false);
    const [loadingAll, setLoadingAll]= useState(false);

    function handleenviromentsSelected(enviroment: string){
        setenviromentsSelected(enviroment);
        if(enviroment == 'all')
        return setFilteredPlants(plants);

        const filtred = plants.filter(plant =>
            plant.environments.includes(enviroment)
            );

        setFilteredPlants(filtred);
    }

    async function fetchPlants() {
        const { data } = await api.get('plants', {
            params: {
                _sort: 'name',
                _order: 'asc',
                _page: page,
                _limit: 8,
            },
        });
        if(!data){
            return setLoading(true);
        }
        if(page >1){
            setPlants(oldValue => [...oldValue, ...data])
        }else{
            setPlants(data);
            setFilteredPlants(data);
        }
        setLoading(false);
        setloadingMore(false);
    }

    function HandleFetchMore(distance: number){
        if(distance < 1)
            return;
        setloadingMore(true);
        setPage(oldValue => oldValue+1);
        fetchPlants();

    }

    useEffect(() =>{
        async function fetchEnviorement() {
            const { data} = await api
            .get('plants_environments?_sort=title&_order=asc');
            setEnviroments([
                {
                    key: 'all',
                    title: 'Todos',
                },
                ...data
            ]);
        }

        fetchEnviorement();
    },[]);


    useEffect(() =>{
        fetchPlants();
    },[]);

    if(loading)
        return <Load />
    return(
        <View style={styles.container}>
        <View style={styles.header} > 
        <Header/>
            <Text style={styles.title}>
                Em qual ambiente
            </Text >
            <Text style={styles.subtitle}>
                Você quer colocar a sua planta?
            </Text>
        </View>
        <View>
            <FlatList
                data={enviroments}
                renderItem={ ({item}) => (
                    <EnvButton 
                        title={item.title} 
                        active={item.key === enviromentsSelected}
                        onPress={() => handleenviromentsSelected(item.key)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.envList}
            />
        </View>

        <View style={styles.plants}>
               <FlatList
                    data={filteredplants}
                    renderItem={({item})=>(
                        <PlantCardPrimary data={item}/>
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    onEndReachedThreshold={0.1}
                    onEndReached={({distanceFromEnd}) =>
                    HandleFetchMore(distanceFromEnd)
                     }
                     ListFooterComponent={
                         loadingMore
                         ? <ActivityIndicator color={colors.green} />
                         : <></>
                     }
               />     
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background
    },
    title:{
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15
    },
    subtitle:{
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.text,
        lineHeight: 20
    },
    header:{
        paddingHorizontal: 30
    },
    envList:{
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32
    },
    plants:{
        flex:1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    }
});

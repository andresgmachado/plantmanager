import React from 'react';
import Routes  from './src/Routes/';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'
import AppLoading from 'expo-app-loading';

export default function App() {

  const [fontsloaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontsloaded)
    return  <AppLoading/>
 
    return (
    <Routes/>
  );
}



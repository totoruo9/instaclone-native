import AppLoading from 'expo-app-loading';
import React from 'react';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import LoggedOutNav from './navigators/LoggedOutNav';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  const preload = () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map(font => Font.loadAsync(font));
    const imagesToLoad = [require("./assets/logo.png"), "https://upload.wikimedia.org/wikipedia/commons/2/2a/Instagram_logo.svg"];
    const imagePromises = imagesToLoad.map(image => Asset.loadAsync(image));
    //@ts-ignore
    return Promise.all([...fontPromises, ...imagePromises]);
  };
  if(loading){
    return (
      <AppLoading
        //@ts-ignore
        startAsync={preload}
        onError={console.warn}
        onFinish={onFinish}
      />
    );
  }
  return (
    <NavigationContainer>
      <LoggedOutNav />
    </NavigationContainer>
  );
}
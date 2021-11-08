import AppLoading from 'expo-app-loading';
import React from 'react';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import LoggedOutNav from './navigators/LoggedOutNav';
import { NavigationContainer } from '@react-navigation/native';
import { Appearance, AppearanceProvider } from 'react-native-appearance';
import { ApolloProvider, useReactiveVar } from '@apollo/client';
import client, { isLoggedInVar, tokenVar } from './apollo';
import LoggedInNav from './navigators/LoggedInNav';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const preloadAssets = () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map(font => Font.loadAsync(font));
    const imagesToLoad = [require("./assets/logo-white.png"), "https://upload.wikimedia.org/wikipedia/commons/2/2a/Instagram_logo.svg"];
    const imagePromises = imagesToLoad.map(image => Asset.loadAsync(image));
    //@ts-ignore
    return Promise.all([...fontPromises, ...imagePromises]);
  }
  const preload = async() => {
    const token= await AsyncStorage.getItem("token");
    if(token) {
      isLoggedInVar(true);
      tokenVar(token);
    }
    return preloadAssets();
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
  };

  const subscription = Appearance.addChangeListener(({colorScheme}) => {
    console.log(colorScheme);
  });

  

  return (
    <ApolloProvider client={client}>
      <AppearanceProvider>
          <NavigationContainer>
            {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
          </NavigationContainer>
      </AppearanceProvider>
    </ApolloProvider>
  );
}
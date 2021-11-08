import AppLoading from 'expo-app-loading';
import React from 'react';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import LoggedOutNav from './navigators/LoggedOutNav';
import { NavigationContainer } from '@react-navigation/native';
import { Appearance, AppearanceProvider } from 'react-native-appearance';
import { ApolloProvider } from '@apollo/client';
import client from './apollo';


export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  const preload = () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map(font => Font.loadAsync(font));
    const imagesToLoad = [require("./assets/logo-white.png"), "https://upload.wikimedia.org/wikipedia/commons/2/2a/Instagram_logo.svg"];
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
  };

  const subscription = Appearance.addChangeListener(({colorScheme}) => {
    console.log(colorScheme);
  });

  return (
    <ApolloProvider client={client}>
      <AppearanceProvider>
          <NavigationContainer>
            <LoggedOutNav />
          </NavigationContainer>
      </AppearanceProvider>
    </ApolloProvider>
  );
}
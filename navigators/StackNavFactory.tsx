import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Profile from "../screens/Profile";
import Photo from "../screens/Photo";
import Feed from "../screens/Feed";
import Search from "../screens/Search";
import Me from "../screens/Me";
import Notifications from "../screens/Notifications";
import { Image, StatusBar } from "react-native";


const Stack = createStackNavigator();

export default function StackNavFactory({screenName}:any) {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <Stack.Navigator
                screenOptions={{
                    headerBackTitleVisible: false,
                    headerShown:true,
                    headerTintColor:"#fff",
                    headerStyle: {
                        backgroundColor: "#000",
                        shadowColor: "rgba(255,255,255,.3 )",
                    },
                    headerMode: "screen"
                }}
            >
                {
                    screenName === "Feed"
                        ? <Stack.Screen
                            name="Feed"
                            component={Feed}
                            options={{
                                headerTitle: () =>
                                    <Image style={{ maxWidth: 88 }} resizeMode="contain" source={require("../assets/logo-white.png")} />
                            }}
                        />
                        : null
                }
                {
                    screenName === "Search"
                        ? <Stack.Screen
                            name="Search"
                            component={Search}
                        />
                        : null
                }
                {
                    screenName === "Notifications"
                        ? <Stack.Screen
                            name="Notifications"
                            component={Notifications}
                        />
                        : null
                }
                {
                    screenName === "Me"
                        ? <Stack.Screen
                            name="Me"
                            component={Me}
                        />
                        : null
                }
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Photo" component={Photo} />
            </Stack.Navigator>
        </> 
    )
}
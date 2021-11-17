import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import TabIcon from "../composition/nav/TabIcon";
import StackNavFactory from "./StackNavFactory";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNav from "./TabsNav";
import Upload from "../screens/Upload";

const Stack = createStackNavigator()

const LoggedInNav = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: "",
                headerTintColor: "#fff",
                headerShadowVisible: false,
                headerShown:false,
                presentation:"modal"
            }}
        >
            <Stack.Screen name="Tabs" component={TabsNav} />
            <Stack.Screen name="Upload" component={Upload} />
        </Stack.Navigator>
    )
}

export default LoggedInNav;
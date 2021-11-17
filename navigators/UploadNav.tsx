import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SelectPhoto from "../screens/SelectUpload";
import TakePhoto from "../screens/TakePhoto";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const UploadNav = () => {
    return (
        <Tab.Navigator
            tabBarPosition="bottom"
            screenOptions={{
                tabBarStyle: {
                    backgroundColor:"#000",
                },
                tabBarActiveTintColor:"#fff",
                tabBarIndicatorStyle: {
                    backgroundColor: "#fff",
                    top: 0
                }
            }}
        >
            <Tab.Screen name="Select">
                {() => {
                    return(
                        <Stack.Navigator>
                            <Stack.Screen name="Select" component={SelectPhoto} />
                        </Stack.Navigator>
                    )
                    
                }}
            </Tab.Screen>
            <Tab.Screen name="Take" component={TakePhoto} />
        </Tab.Navigator>
    )
}

export default UploadNav;
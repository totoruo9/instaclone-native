import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import TabIcon from "../composition/nav/TabIcon";
import StackNavFactory from "./StackNavFactory";

const Tabs = createBottomTabNavigator()

const TabsNav = () => {
    return (
        <Tabs.Navigator screenOptions={{
            headerTitle: "",
            headerTintColor: "#fff",
            headerShadowVisible: false,
            headerShown:false,
            tabBarStyle:{
                backgroundColor: "#000",
                borderTopColor: "rgba(255,255,255,.3)",
            },
            tabBarActiveTintColor:"#fff",
            tabBarShowLabel:false,
        }}>
            <Tabs.Screen
                name="Tab-Feed"
                options={{
                    tabBarIcon: ({focused, color, size}) =>
                        <TabIcon iconName={"home"} color={color} focused={focused} />
                }}
            >
                {
                    () => <StackNavFactory screenName="Feed" />
                }
            </Tabs.Screen>
            <Tabs.Screen
                name="Tab-Search"
                options={{
                    tabBarIcon: ({focused, color, size}) =>
                        <TabIcon iconName={"search"} color={color} focused={focused} />
                }}
            >
                {
                    () => <StackNavFactory screenName="Search" />
                }
            </Tabs.Screen>
            <Tabs.Screen
                name="Tab-Camera"
                component={View}
                listeners={({navigation}) => {
                    return {
                        tabPress: (event) => {
                            event.preventDefault();
                            navigation.navigate("Upload");
                        }
                    }
                }}
                options={{
                    tabBarIcon: ({focused, color, size}) =>
                        <TabIcon iconName={"camera"} color={color} focused={focused} />
                }}
            />
            <Tabs.Screen
                name="Tab-Notifications"
                options={{
                    tabBarIcon: ({focused, color, size}) =>
                        <TabIcon iconName={"heart"} color={color} focused={focused} />
                }}
            >
                {
                    () => <StackNavFactory screenName="Notifications" />
                }
            </Tabs.Screen>
            <Tabs.Screen
                name="Tab-Me"
                options={{
                    tabBarIcon: ({focused, color, size}) =>
                        <TabIcon iconName={"person"} color={color} focused={focused} />
                }}
            >
                {
                    () => <StackNavFactory screenName="Me" />
                }
            </Tabs.Screen>
        </Tabs.Navigator>
    )
}

export default TabsNav;
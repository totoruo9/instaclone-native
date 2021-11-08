import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import Feed from "../screens/Feed";
import Profile from "../screens/Profile";
import Notifications from "../screens/Notifications";
import Search from "../screens/Search";

const Tabs = createBottomTabNavigator()

const LoggedInNav = () => {
    return (
        <Tabs.Navigator screenOptions={{
            headerTitle: "",
            headerTransparent: true,
            headerTintColor: "#fff",
            headerShadowVisible: false,
            tabBarStyle:{
                backgroundColor: "#000",
                borderTopColor: "rgba(255,255,255,.3)",
            },
            tabBarActiveTintColor:"#fff",
            tabBarShowLabel:false
        }}>
            <Tabs.Screen name="Feed" component={Feed} options={{tabBarIcon: ({focused, color, size}) => <Ionicons name="home" size={focused ? 24 : 18} color={color} />}} />
            <Tabs.Screen name="Search" component={Search} options={{tabBarIcon: ({focused, color, size}) => <Ionicons name="search" size={focused ? 24 : 18} color={color} />}} />
            <Tabs.Screen name="Notifications" component={Notifications} options={{tabBarIcon: ({focused, color, size}) => <Ionicons name="heart-outline" size={focused ? 24 : 18} color={color} />}} />
            <Tabs.Screen name="Profile" component={Profile} options={{tabBarIcon: ({focused, color, size}) => <Ionicons name="person" size={focused ? 24 : 18} color={color} />}} />
        </Tabs.Navigator>
    )
}

export default LoggedInNav;
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import Feed from "../screens/Feed";
import Profile from "../screens/Profile";
import Notifications from "../screens/Notifications";
import Search from "../screens/Search";
import { View } from "react-native";
import TabIcon from "../composition/nav/TabIcon";

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
            <Tabs.Screen name="Feed" component={Feed} options={{tabBarIcon: ({focused, color, size}) => <TabIcon iconName={"home"} color={color} focused={focused} />}} />
            <Tabs.Screen name="Search" component={Search} options={{tabBarIcon: ({focused, color, size}) => <TabIcon iconName={"search"} color={color} focused={focused} />}} />
            <Tabs.Screen name="Camera" component={View} options={{tabBarIcon: ({focused, color, size}) => <TabIcon iconName={"camera"} color={color} focused={focused} />}} />
            <Tabs.Screen name="Notifications" component={Notifications} options={{tabBarIcon: ({focused, color, size}) => <TabIcon iconName={"heart"} color={color} focused={focused} />}} />
            <Tabs.Screen name="Profile" component={Profile} options={{tabBarIcon: ({focused, color, size}) => <TabIcon iconName={"person"} color={color} focused={focused} />}} />
        </Tabs.Navigator>
    )
}

export default LoggedInNav;
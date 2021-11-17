import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNav from "./TabsNav";
import UploadNav from "./UploadNav";

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
            <Stack.Screen name="Upload" component={UploadNav} />
        </Stack.Navigator>
    )
}

export default LoggedInNav;
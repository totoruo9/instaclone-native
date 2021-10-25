import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Wellcome from "../screens/Welcome";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";

const Stack = createNativeStackNavigator();

const LoggedOutNav = () => {
    return (
        //@ts-ignore
        <Stack.Navigator screenOptions={{headerBackTitleVisible:false, headerTintColor:"#ff4a5b"}}>
            <Stack.Screen name="Wellcome" component={Wellcome} options={{headerTitleAlign:"center"}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
        </Stack.Navigator>
    )
}

export default LoggedOutNav;
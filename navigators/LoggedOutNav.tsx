import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Wellcome from "../screens/Welcome";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";

const Stack = createNativeStackNavigator();

const LoggedOutNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Wellcome" component={Wellcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
        </Stack.Navigator>
    )
}

export default LoggedOutNav;
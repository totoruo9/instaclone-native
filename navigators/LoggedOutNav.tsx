import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Wellcome from "../screens/Welcome";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";

const Stack = createNativeStackNavigator();

const LoggedOutNav = () => {
    return (
        <Stack.Navigator screenOptions={{headerBackTitleVisible:false}}>
            <Stack.Screen name="Wellcome" component={Wellcome} options={{headerShown:false}} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen
                name="CreateAccount"
                component={CreateAccount}
                options={{
                    headerTitle: "",
                    headerTransparent: true,
                    headerTintColor: "#fff",
                    headerShadowVisible: false
                }}
            />
        </Stack.Navigator>
    )
}

export default LoggedOutNav;
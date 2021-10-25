import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Login = ({navigation}:any) => {
    return (
        <View>
            <Text>Login!</Text>
            <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
                <View>
                    <Text>
                        Go to CreateAccount
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Login;
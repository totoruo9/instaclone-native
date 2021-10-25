import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Wellcome:React.FC = ({navigation}:any) => {
    return (
        <View>
            <Text>Wellcome!</Text>
            <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
                <View>
                    <Text>
                        Go to CreateAccount
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <View>
                    <Text>
                        Go to Login
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Wellcome;
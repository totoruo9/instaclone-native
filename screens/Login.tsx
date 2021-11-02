import React from "react";
import { useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FullButton } from "../composition/auth/AuthButton";
import { AuthLayout } from "../composition/auth/AuthLayout";
import { TextInput } from "../composition/auth/AuthShared";

const Login = ({navigation}:any) => {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const onNext = (nextOne:any) => {
        nextOne?.current?.focus();
    };

    const onDone = () => {
        alert('Action Login');
    }
    
    return (
        <AuthLayout>
            <TextInput
                ref={usernameRef}
                placeholder="User Name"
                placeholderTextColor="rgba(255,255,255,.5)"
                returnKeyType="next"        
                onSubmitEditing={() => onNext(passwordRef)}
            />
            <TextInput
                ref={passwordRef}
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,.65)"
                secureTextEntry
                returnKeyType="join"
                lastOne={true}
                onSubmitEditing={onDone}
            />
            <FullButton text="Login" onPress={() => {}} disabled={false} />
        </AuthLayout>
    )
}

export default Login;
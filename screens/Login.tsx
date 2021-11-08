import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";
import { FullButton } from "../composition/auth/AuthButton";
import { AuthLayout } from "../composition/auth/AuthLayout";
import { TextInput } from "../composition/auth/AuthShared";

const Login = ({navigation}:any) => {
    const {register, handleSubmit, setValue} = useForm();

    const usernameRef = useRef();
    const passwordRef = useRef();

    const onNext = (nextOne:any) => {
        nextOne?.current?.focus();
    };

    const onDone = () => {
        alert('Action Login');
    };

    const onValid = (data: any) => {
        console.log(data);
    };

    useEffect(() => {
        register("username");
        register("password");
    }, [register]);
    
    return (
        <AuthLayout>
            <TextInput
                ref={usernameRef}
                placeholder="User Name"
                placeholderTextColor="rgba(255,255,255,.5)"
                returnKeyType="next"        
                onSubmitEditing={() => onNext(passwordRef)}
                onChangeText={(text) => setValue("username", text)}
            />
            <TextInput
                ref={passwordRef}
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,.65)"
                secureTextEntry
                returnKeyType="join"
                lastOne={true}
                onChangeText={(text) => setValue("password", text)}
                onSubmitEditing={handleSubmit(onValid)}
            />
            <FullButton text="Login" onPress={handleSubmit(onValid)} disabled={false} />
        </AuthLayout>
    )
}

export default Login;
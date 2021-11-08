import { gql, useMutation } from "@apollo/client";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";
import { isLoggedInVar, logUserIn } from "../apollo";
import { FullButton } from "../composition/auth/AuthButton";
import { AuthLayout } from "../composition/auth/AuthLayout";
import { TextInput } from "../composition/auth/AuthShared";

const LOGIN_MUTATION = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            ok
            token
            error
        }
    }
`;

const Login = ({route: {params}}:any) => {
    const {register, handleSubmit, setValue, watch} = useForm({
        defaultValues: {
            password: params?.password,
            username: params?.username
        }
    });
    const usernameRef = useRef();
    const passwordRef = useRef();

    const onCompleted = async(data:any) => {
        const {login: {ok, token}} = data;
        if(ok) {
            await logUserIn(token);
        }
    }
    const [logInMutation, {loading}] = useMutation(LOGIN_MUTATION, {
        onCompleted,
    });
    

    const onNext = (nextOne:any) => {
        nextOne?.current?.focus();
    };

    const onDone = () => {
        alert('Action Login');
    };

    const onValid = (data: any) => {
        if(!loading){
            logInMutation({
                variables: {
                    ...data,
                }
            })
        }
    };

    useEffect(() => {
        register("username");
        register("password");
    }, [register]);
    
    return (
        <AuthLayout>
            <TextInput
                value={watch("username")}
                ref={usernameRef}
                placeholder="User Name"
                placeholderTextColor="rgba(255,255,255,.5)"
                returnKeyType="next"
                autoCapitalize="none"
                onSubmitEditing={() => onNext(passwordRef)}
                onChangeText={(text) => setValue("username", text)}
            />
            <TextInput
                value={watch("password")}
                ref={passwordRef}
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,.65)"
                secureTextEntry
                returnKeyType="join"
                lastOne={true}
                onChangeText={(text) => setValue("password", text)}
                onSubmitEditing={handleSubmit(onValid)}
            />
            <FullButton text="Login" onPress={handleSubmit(onValid)} disabled={!watch("username") || !watch("password")} loading={loading} />
        </AuthLayout>
    )
}

export default Login;
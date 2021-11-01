import React from "react";
import { Text, TextInput, View } from "react-native";
import styled from "styled-components/native";
import { FullButton } from "../composition/auth/AuthButton";
import { AuthLayout } from "../composition/auth/AuthLayout";

const Container = styled.View`
    flex: 1;
    background-color: black;
`;

const CreateAccount = ({navigation}:any) => {
    const goLogin = () => navigation.navigate("Login");
    return (
        <AuthLayout>
            <TextInput
                placeholder="First Name"
                placeholderTextColor="gray"
                returnKeyType="next"
                style={{backgroundColor: "white", width: "100%"}}
            />
            <TextInput
                placeholder="Last Name"
                placeholderTextColor="gray"
                returnKeyType="next"
                style={{backgroundColor: "white", width: "100%"}}
            />
            <TextInput
                placeholder="User Name"
                placeholderTextColor="gray"
                returnKeyType="next"
                style={{backgroundColor: "white", width: "100%"}}
            />
            <TextInput
                placeholder="Email"
                placeholderTextColor="gray"
                keyboardType="email-address"
                returnKeyType="next"
                style={{backgroundColor: "white", width: "100%"}}
            />
            <TextInput
                placeholder="Password"
                placeholderTextColor="gray"
                secureTextEntry
                returnKeyType="join"
                style={{backgroundColor: "white", width: "100%"}}
            />
            <FullButton disabled={true} text="Join" onPress={goLogin} />
        </AuthLayout>
    )
}

export default CreateAccount;
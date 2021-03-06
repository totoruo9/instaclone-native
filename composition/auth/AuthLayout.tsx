import React from "react";
import { Keyboard, Platform } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
    flex:1;
    align-items: center;
    justify-content: center;
    background-color: black;
    padding: 0 32px;
`;
const Logo = styled.Image`
    max-width: 70%;
    width: 100%;
    height: 160px;
`;
const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    width:100%;
    flex:1;
    justify-content:center;
    align-items: center;
`;

export const AuthLayout = ({children}:any) => {
    const dismissKeyboard = () => {
        Keyboard.dismiss();
    }
    return (
        <TouchableWithoutFeedback style={{flex:1}} onPress={dismissKeyboard} disabled={Platform.OS==="web"}>
            <Container>
                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS==='ios' ? 30 : 0}>
                    <Logo resizeMode="contain" source={require("../../assets/logo-white.png")} />
                    {children}
                </KeyboardAvoidingView>
            </Container>
        </TouchableWithoutFeedback>
    )
} 
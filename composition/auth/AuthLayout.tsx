import React from "react";
import { Keyboard } from "react-native";
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

export const AuthLayout = ({children}:any) => {
    const dismissKeyboard = () => {
        Keyboard.dismiss();
    }
    return (
        <TouchableWithoutFeedback style={{flex:1}} onPress={dismissKeyboard}>
            <Container>
                <Logo resizeMode="contain" source={require("../../assets/logo-white.png")} />
                {children}
            </Container>
        </TouchableWithoutFeedback>
    )
}
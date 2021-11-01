import React from "react";
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
    return (
        <Container>
            <Logo resizeMode="contain" source={require("../../assets/logo-white.png")} />
            {children}
        </Container>
    )
}
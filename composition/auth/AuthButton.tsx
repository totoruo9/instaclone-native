import React, { ReactChild } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../colors";

interface ButtonType {
    onPress: any,
    text: string,
    disabled?: boolean,
    margin?: number
};

const Container = styled.TouchableOpacity`
    background-color: ${colors.blue};
    padding: 12px 16px;
    border-radius: 4px;
    width: 100%;
    opacity: ${props => props.disabled ? .5 : 1};
`;

const ContainerText = styled.Text`
    color: #fff;
    font-weight: 600;
    text-align: center;
`;

const LoginLink = styled.Text<{marginTop:any}>`
    color: ${colors.blue};
    font-weight: 600;
    margin-top: ${props => props.marginTop};
`;

export const FullButton:React.FC<ButtonType> = ({onPress, text, disabled=false}) => {
    return (
        <Container onPress={onPress} disabled={disabled}>
            <ContainerText>{text}</ContainerText>
        </Container>
    )
};

export const TextButton:React.FC<ButtonType> = ({onPress, text, disabled=false, margin}) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <LoginLink marginTop={margin}>{text}</LoginLink>
        </TouchableOpacity>
    )
};
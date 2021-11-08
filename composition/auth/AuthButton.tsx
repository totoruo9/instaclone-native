import React, { ReactChild } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../colors";

interface ButtonType {
    onPress: any,
    text: string,
    disabled?: boolean,
    margin?: number,
    loading?: boolean
};

const Container = styled.TouchableOpacity`
    background-color: ${colors.blue};
    padding: 16px;
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
    margin-top: ${props => props.marginTop && `${props.marginTop}px`};
`;

export const FullButton:React.FC<ButtonType> = ({onPress, text, disabled=false, loading}) => {
    return (
        <Container onPress={onPress} disabled={disabled}>
            {
                loading
                    ? <ActivityIndicator color="white" />
                    : <ContainerText>{text}</ContainerText>
            }
        </Container>
    )
};

export const TextButton:React.FC<ButtonType> = ({onPress, text, disabled=false, margin=0}) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <LoginLink marginTop={margin}>{text}</LoginLink>
        </TouchableOpacity>
    )
};
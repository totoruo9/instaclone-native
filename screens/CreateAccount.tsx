import React, { useRef } from "react";
import { KeyboardAvoidingView, Platform, Text, TextInput, View } from "react-native";
import styled from "styled-components/native";
import { FullButton } from "../composition/auth/AuthButton";
import { AuthLayout } from "../composition/auth/AuthLayout";

const Container = styled.View`
    flex: 1;
    background-color: black;
`;

const STextInput = styled.TextInput<{ref?:any}>``;

const CreateAccount = ({navigation}:any) => {
    const goLogin = () => navigation.navigate("Login");

    const lastNameRef = useRef<TextInput>();
    const userNameRef = useRef<TextInput>();
    const emailRef = useRef<TextInput>();
    const passwrodRef = useRef<TextInput>();

    const onNext = (nextOne:any) => {
        nextOne?.current?.focus();
    };

    const onDone = () => {
        alert('done');
    }
    return (
        <AuthLayout>
            <KeyboardAvoidingView style={{width:"100%"}} behavior="padding" keyboardVerticalOffset={Platform.OS==='ios' ? 30 : 0}>
                <STextInput
                    autoFocus
                    placeholder="First Name"
                    placeholderTextColor="gray"
                    returnKeyType="next"
                    style={{backgroundColor: "white", width: "100%"}}
                    onSubmitEditing={() => onNext(lastNameRef)}
                />
                <STextInput
                    ref={lastNameRef}
                    placeholder="Last Name"
                    placeholderTextColor="gray"
                    returnKeyType="next"
                    style={{backgroundColor: "white", width: "100%"}}
                    onSubmitEditing={() => onNext(userNameRef)}
                />
                <STextInput
                    ref={userNameRef}
                    placeholder="User Name"
                    placeholderTextColor="gray"
                    returnKeyType="next"
                    style={{backgroundColor: "white", width: "100%"}}
                    onSubmitEditing={() => onNext(emailRef)}
                />
                <STextInput
                    ref={emailRef}
                    placeholder="Email"
                    placeholderTextColor="gray"
                    keyboardType="email-address"
                    returnKeyType="next"
                    style={{backgroundColor: "white", width: "100%"}}
                    onSubmitEditing={() => onNext(passwrodRef)}
                />
                <STextInput
                    ref={passwrodRef}
                    placeholder="Password"
                    placeholderTextColor="gray"
                    secureTextEntry
                    returnKeyType="join"
                    style={{backgroundColor: "white", width: "100%"}}
                    onSubmitEditing={onDone}
                />
                <FullButton disabled={true} text="Join" onPress={goLogin} />
            </KeyboardAvoidingView>
        </AuthLayout>
    )
}

export default CreateAccount;
import { gql, useMutation } from "@apollo/client";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FullButton } from "../composition/auth/AuthButton";
import { AuthLayout } from "../composition/auth/AuthLayout";
import { TextInput } from "../composition/auth/AuthShared";

const CREATE_ACCOUNT_MUTATION = gql`
    mutation createAccount(
        $firstName: String!
        $lastName: String
        $username: String!
        $email: String!
        $password: String!
    ) {
        createAccount(
            firstName: $firstName
            lastName: $lastName
            username: $username
            email: $email
            password: $password
        ) {
            ok
            error
        }
    }
`;

const CreateAccount = ({navigation}:any) => {
    const {register, handleSubmit, setValue, watch, getValues} = useForm();

    const onCompleted = (data:any) => {
        console.log(data);
        const {createAccount: {ok}} = data;
        const {username, password} = getValues();
        if(ok){
            navigation.navigate("Login", {
                username,
                password
            });
        }
    }
    const [createAccountMutation, {loading}] = useMutation(CREATE_ACCOUNT_MUTATION, {
        onCompleted,
    });

    const lastNameRef = useRef();
    const userNameRef = useRef();
    const emailRef = useRef();
    const passwrodRef = useRef();

    const onNext = (nextOne:any) => {
        nextOne?.current?.focus();
    };

    const onValid = (data: any) => {
        if(!loading){
            createAccountMutation({
                variables: {
                    ...data,
                }
            })
        }
    };

    useEffect(() => {
        register("firstName", {
            required: true,
        });
        register("lastName", {
            required: true,
        });
        register("username", {
            required: true,
        });
        register("email", {
            required: true,
        });
        register("password", {
            required: true,
        });
    }, [register])

    return (
        <AuthLayout>
            <TextInput
                autoFocus
                placeholder="First Name"
                placeholderTextColor="rgba(255,255,255,.5)"
                returnKeyType="next"
                onChangeText={(text) => setValue("firstName", text)}
                onSubmitEditing={() => onNext(lastNameRef)}
            />
            <TextInput
                ref={lastNameRef}
                placeholder="Last Name"
                placeholderTextColor="rgba(255,255,255,.5)"
                returnKeyType="next"
                onChangeText={(text) => setValue("lastName", text)}
                onSubmitEditing={() => onNext(userNameRef)}
            />
            <TextInput
                ref={userNameRef}
                placeholder="User Name"
                placeholderTextColor="rgba(255,255,255,.5)" 
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={(text) => setValue("username", text)}
                onSubmitEditing={() => onNext(emailRef)}
            />
            <TextInput
                ref={emailRef}
                placeholder="Email"
                placeholderTextColor="rgba(255,255,255,.5)"
                keyboardType="email-address"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={(text) => setValue("email", text)}
                onSubmitEditing={() => onNext(passwrodRef)}
            />
            <TextInput
                ref={passwrodRef}
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,.65)"
                secureTextEntry
                returnKeyType="join"
                lastOne={true}
                onChangeText={(text) => setValue("password", text)}
                onSubmitEditing={handleSubmit(onValid)}
            />
            <FullButton
                text="Join"
                loading={loading}
                onPress={handleSubmit(onValid)}
                disabled={
                    !watch("firstName")
                    || !watch("lastName")
                    || !watch("username")
                    || !watch("email")
                    || !watch("password")
                }
            />
        </AuthLayout>
    )
}

export default CreateAccount;
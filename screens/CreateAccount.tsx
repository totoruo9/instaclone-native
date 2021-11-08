import React, { useRef } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FullButton } from "../composition/auth/AuthButton";
import { AuthLayout } from "../composition/auth/AuthLayout";
import { TextInput } from "../composition/auth/AuthShared";

const CreateAccount = ({navigation}:any) => {
    const {register, handleSubmit, setValue} = useForm();
    const goLogin = () => navigation.navigate("Login");

    const lastNameRef = useRef();
    const userNameRef = useRef();
    const emailRef = useRef();
    const passwrodRef = useRef();

    const onNext = (nextOne:any) => {
        nextOne?.current?.focus();
    };

    const onValid = (data: any) => {
        console.log(data);
    };

    useEffect(() => {
        register("firstname");
        register("lastname");
        register("username");
        register("email");
        register("password");
    }, [register])

    return (
        <AuthLayout>
            <TextInput
                autoFocus
                placeholder="First Name"
                placeholderTextColor="rgba(255,255,255,.5)"
                returnKeyType="next"
                onChangeText={(text) => setValue("firstname", text)}
                onSubmitEditing={() => onNext(lastNameRef)}
            />
            <TextInput
                ref={lastNameRef}
                placeholder="Last Name"
                placeholderTextColor="rgba(255,255,255,.5)"
                returnKeyType="next"
                onChangeText={(text) => setValue("lastname", text)}
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
            <FullButton disabled={false} text="Join" onPress={handleSubmit(onValid)} />
        </AuthLayout>
    )
}

export default CreateAccount;
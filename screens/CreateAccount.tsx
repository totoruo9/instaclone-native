import React, { useRef } from "react";
import { FullButton } from "../composition/auth/AuthButton";
import { AuthLayout } from "../composition/auth/AuthLayout";
import { TextInput } from "../composition/auth/AuthShared";

const CreateAccount = ({navigation}:any) => {
    const goLogin = () => navigation.navigate("Login");

    const lastNameRef = useRef();
    const userNameRef = useRef();
    const emailRef = useRef();
    const passwrodRef = useRef();

    const onNext = (nextOne:any) => {
        nextOne?.current?.focus();
    };

    const onDone = () => {
        alert('done');
    }
    return (
        <AuthLayout>
            <TextInput
                autoFocus
                placeholder="First Name"
                placeholderTextColor="rgba(255,255,255,.5)"
                returnKeyType="next"
                onSubmitEditing={() => onNext(lastNameRef)}
            />
            <TextInput
                ref={lastNameRef}
                placeholder="Last Name"
                placeholderTextColor="rgba(255,255,255,.5)"
                returnKeyType="next"
                onSubmitEditing={() => onNext(userNameRef)}
            />
            <TextInput
                ref={userNameRef}
                placeholder="User Name"
                placeholderTextColor="rgba(255,255,255,.5)"
                returnKeyType="next"
                onSubmitEditing={() => onNext(emailRef)}
            />
            <TextInput
                ref={emailRef}
                placeholder="Email"
                placeholderTextColor="rgba(255,255,255,.5)"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => onNext(passwrodRef)}
            />
            <TextInput
                ref={passwrodRef}
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,.65)"
                secureTextEntry
                returnKeyType="join"
                lastOne={true}
                onSubmitEditing={onDone}
            />
            <FullButton disabled={true} text="Join" onPress={goLogin} />
        </AuthLayout>
    )
}

export default CreateAccount;
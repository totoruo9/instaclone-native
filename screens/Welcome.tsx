import React from "react";
import styled from "styled-components/native";
import { FullButton, TextButton } from "../composition/auth/AuthButton";
import { AuthLayout } from "../composition/auth/AuthLayout";
interface IWellcome {
    navigation:any
}

const Wellcome:React.FunctionComponent<IWellcome> = ({navigation}) => {
    const goToCreateAccount = () => navigation.navigate("CreateAccount");
    const goToLogin = () => navigation.navigate("Login");
    return (
        <AuthLayout>
            <FullButton onPress={goToCreateAccount} disabled={false} text="Create Account" />
            <TextButton onPress={goToLogin} text="Login" margin={20} />
        </AuthLayout>
    )
}

export default Wellcome;
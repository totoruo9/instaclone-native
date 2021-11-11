import React from "react";
import { ActivityIndicator, View } from "react-native";

export default function ScreenLayout({loading, children}:any) {
    return (
        <View style={{backgroundColor:"#000", flex:1, justifyContent:"center", alignItems:"center"}}>
            {loading ? <ActivityIndicator color="white" /> : children}
        </View>
    )
}
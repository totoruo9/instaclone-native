import React from "react";
import { ActivityIndicator, View } from "react-native";

const ScreenLayout = ({loading, children}:any) => {
    return (
        <View style={{backgroundColor:"#000", flex:1, justifyContent:"center", alignItems:"center"}}>
            {loading ? <ActivityIndicator color="white" /> : children}
        </View>
    )
}

export default ScreenLayout
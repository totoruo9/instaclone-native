import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const Photo = ({navigation}) => {
    return (
        <View style={{backgroundColor:"#000", flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text style={{color:"#fff"}}>Photo!</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <Text style={{color:"#fff"}}>Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Photo;
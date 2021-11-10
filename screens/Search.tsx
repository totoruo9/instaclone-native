import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const Search = ({navigation}:any) => {
    return (
        <View style={{backgroundColor:"#000", flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text style={{color:"#fff"}}>Search!</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Photo")}>
                <Text style={{color:"#fff"}}>Photo</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Search;
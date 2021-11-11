import { useQuery, gql } from "@apollo/client";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { logUserOut } from "../apollo";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";

const FEED_QUERY = gql`
    query seeFeed {
        seeFeed {
            ...PhotoFragment
            user {
                username
                avatar
            }
            caption
            comments {
                ...CommentFragment
            }
            createAt
            isMine
        }
    }
    ${PHOTO_FRAGMENT}
    ${COMMENT_FRAGMENT}
`;

const Feed = ({navigation}: any) => {
    const {data} = useQuery(FEED_QUERY);
    console.log(data);

    return (
        <View style={{backgroundColor:"#000", flex:1, justifyContent:"center", alignItems:"center"}}>
            <TouchableOpacity onPress={() => logUserOut()}>
                <Text style={{color:"#fff"}}>Photo</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Feed;
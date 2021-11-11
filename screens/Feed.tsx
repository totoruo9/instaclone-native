import { useQuery, gql } from "@apollo/client";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { logUserOut } from "../apollo";
import ScreenLayout from "../composition/ScreenLayout";
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
    const {data, loading} = useQuery(FEED_QUERY);
    const renderPhoto = ({item:photo}:any) => {
        return <View style={{flex:1}}><Text style={{color:"#fff"}}>{photo.caption}</Text></View>
    }

    return (
        <ScreenLayout loading={loading}>
            <FlatList
                data={data?.seeFeed}
                keyExtractor={photo => "" + photo.id}
                renderItem={renderPhoto}
            />
        </ScreenLayout>
    )
}

export default Feed;
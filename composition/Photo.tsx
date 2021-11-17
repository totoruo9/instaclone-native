import React from "react";
import styled from "styled-components/native";

const Container = styled.View``;
const Header = styled.View``;
const UserAvatar = styled.Image``;
const Username = styled.Text``;
const File = styled.Image``;
const Actions = styled.View``;
const Action = styled.TouchableOpacity``;
const Likes = styled.Text``;
const Caption = styled.View``;
const CaptionText = styled.Text``;

interface PhotoType {
    id: number
    user: {
        username: string,
    }
    caption: string
    file: string
    isLiked: boolean
    likes: number
}

export default function Photo({
    id,
    user,
    caption,
    file,
    isLiked,
    likes
}:PhotoType) {
    return (
        <Container>
            <Header>
                {/* <UserAvatar /> */}
                <Username>{user.username}</Username>
            </Header>
            {/* <File /> */}
            <Actions>
                <Action />
                <Action />
            </Actions>
            <Likes></Likes>
            <Caption>
                <Username></Username>
                <CaptionText></CaptionText>
            </Caption>
        </Container>
    );
}
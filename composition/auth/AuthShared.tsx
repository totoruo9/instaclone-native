import styled from "styled-components/native";

export const TextInput = styled.TextInput<{ref?:any, lastOne?: any}>`
    background-color: rgba(255,255,255,0.15);
    color: #fff;
    padding: 8px;
    border-radius: 4px;
    margin-bottom: ${props => props.lastOne ? "16px" : "6px"};
    width: 100%;
`;
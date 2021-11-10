import React from "react";
import { Ionicons } from '@expo/vector-icons';

interface TabIconType { 
    iconName: any
    color: string
    focused: boolean
}

export default function TabIcon({ iconName, color, focused }:TabIconType) {
    return <Ionicons
            name={focused ? iconName : `${iconName}-outline`}
            size={22}
            color={color}
            />
};
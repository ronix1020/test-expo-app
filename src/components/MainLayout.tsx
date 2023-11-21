import React from "react";
import { ColorValue } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface MainLayoutProps {
    children: React.ReactNode;
    backgroundColor?: ColorValue;
}

export const MainLayout = ({ children, backgroundColor = 'white' }: MainLayoutProps) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor }}>
            {children}
        </SafeAreaView>
    )
}
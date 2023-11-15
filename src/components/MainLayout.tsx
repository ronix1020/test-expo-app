import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderBar } from "./HeaderBar";

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            {children}
        </SafeAreaView>
    )
}
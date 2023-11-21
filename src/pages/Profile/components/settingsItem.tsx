import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface OptionProps {
    options: {
        name: string;
        icon: React.ReactNode;
    }
}

export const SettingsItem = ({ options }: OptionProps) => {
    return (
        <TouchableOpacity
        style={[defaultStyles.optionContainer]}
        >
            { options.icon }
            <Text style={[defaultStyles.text]}>
                { options.name }
            </Text>
        </TouchableOpacity>
    )
}

const defaultStyles = StyleSheet.create({
    optionContainer: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    text: {
        fontFamily: 'Lato_700Bold',
        fontSize: 16,
        color: 'black'
    }
})
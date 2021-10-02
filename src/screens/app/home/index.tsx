import React from "react";
import { Pressable, Text, View } from "react-native";
import {
    Navigation,
    NavigationFunctionComponent,
} from "react-native-navigation";

export const HomeScreen: NavigationFunctionComponent = (props) => {
    const handleGoToSettings = () => {
        Navigation.push(props.componentId, {
            component: {
                name: "Settings",
                options: {
                    topBar: {
                        title: {
                            text: "Configuracoes",
                        },
                    },
                },
            },
        });
    };

    return (
        <View>
            <Text>Hello React Native Navigation 👋</Text>
            <Pressable onPress={handleGoToSettings}>
                <Text>Navigate to settings</Text>
            </Pressable>
        </View>
    );
};

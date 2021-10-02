/**
 * @format
 */

import React from "react";
import { Navigation, LayoutRoot } from "react-native-navigation";
import { HomeScreen } from "./src/screens/app/home";
import { SettingsScreen } from "./src/screens/app/settings";
import { LoginScreen } from "./src/screens/auth/login";
import { NativeBaseProvider } from "native-base";

Navigation.registerComponent("Login", () => (props) => (
    <NativeBaseProvider>
        <LoginScreen {...props} />
    </NativeBaseProvider>
));

Navigation.registerComponent("Home", () => HomeScreen);
Navigation.registerComponent("Settings", () => SettingsScreen);

Navigation.setDefaultOptions({
    statusBar: {
        backgroundColor: "#4d089a",
    },
    topBar: {
        title: {
            color: "white",
        },
        backButton: {
            color: "white",
        },
        background: {
            color: "#4d089a",
        },
    },
    bottomTab: {
        fontSize: 14,
        selectedFontSize: 16,
        textColor: "black",
    },
});

const authRoot: LayoutRoot = {
    root: {
        stack: {
            children: [
                {
                    component: {
                        name: "Login",
                    },
                },
            ],
            options: {
                topBar: {
                    visible: false,
                },
            },
        },
    },
};

const appRoot: LayoutRoot = {
    root: {
        bottomTabs: {
            children: [
                {
                    stack: {
                        children: [
                            {
                                component: {
                                    name: "Home",
                                    options: {
                                        topBar: {
                                            title: {
                                                text: "Inicio",
                                            },
                                        },
                                        bottomTab: {
                                            text: "Inicio",
                                        },
                                    },
                                },
                            },
                        ],
                    },
                },
                {
                    stack: {
                        children: [
                            {
                                component: {
                                    name: "Settings",
                                    options: {
                                        topBar: {
                                            title: {
                                                text: "Configuracoes",
                                            },
                                        },
                                        bottomTab: {
                                            text: "Configuracoes",
                                        },
                                    },
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
};

Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot(authRoot);
});

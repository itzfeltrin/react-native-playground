import React from "react";
import { Button, Column, FormControl, Heading, Input, Text } from "native-base";
import { NavigationFunctionComponent } from "react-native-navigation";
import { useRef } from "react";
import { TextInput } from "react-native";

export const LoginScreen: NavigationFunctionComponent = () => {
    const passwordRef = useRef<TextInput>();

    return (
        <Column
            flex={1}
            alignItems="center"
            justifyContent="center"
            bgColor="amber.100"
            space="2xl"
        >
            <Heading fontSize="3xl">Login</Heading>
            <FormControl w={{ base: "75%", lg: "25%" }}>
                <FormControl.Label>E-mail</FormControl.Label>
                <Input
                    placeholder="Digite seu e-mail"
                    size="xl"
                    borderWidth="2"
                    borderColor="amber.300"
                    _focus={{
                        borderColor: "amber.400",
                    }}
                    onSubmitEditing={() => passwordRef.current?.focus()}
                />
            </FormControl>
            <FormControl w={{ base: "75%", lg: "25%" }}>
                <FormControl.Label>Senha</FormControl.Label>
                <Input
                    placeholder="Digite sua senha"
                    size="xl"
                    borderWidth="2"
                    borderColor="amber.300"
                    _focus={{
                        borderColor: "amber.400",
                    }}
                    ref={passwordRef}
                />
            </FormControl>
            <Button w={{ base: "75%", lg: "25%" }} h="12" bgColor="amber.500">
                <Text fontSize="xl" fontWeight="light" color="white">
                    Entrar
                </Text>
            </Button>
        </Column>
    );
};

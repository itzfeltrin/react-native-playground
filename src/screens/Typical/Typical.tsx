import React from 'react';
// components
import {Text} from 'react-native';
import TypingText from 'react-native-typical';
import {Container} from '../../common';

const TypicalScreen = (): JSX.Element => (
    <Container>
        <Text>Typical</Text>
        <TypingText steps={['Hello there', 1000, 'Hello World !!!', 1000]} loop={Infinity} />
    </Container>
);

export default TypicalScreen;

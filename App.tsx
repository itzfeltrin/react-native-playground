import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/services/theme';
// router
import {Routes} from './src/routes';

const App = (): JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <StatusBar backgroundColor={theme.colors.bg} barStyle="dark-content" />
            <Routes />
        </ThemeProvider>
    );
};

export default App;

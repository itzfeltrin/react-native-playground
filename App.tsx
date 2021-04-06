import React from 'react';
import {StatusBar} from 'react-native';
// router
import {Routes} from './src/routes';

const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <StatusBar backgroundColor="#cdcdcd" />
            <Routes />
        </React.Fragment>
    );
};

export default App;

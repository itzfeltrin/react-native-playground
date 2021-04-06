import React from 'react';
import {StatusBar} from 'react-native';
// screens
import {AccordionScreen} from './src/screens/Accordion';

const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <StatusBar backgroundColor="#cdcdcd" />
            <AccordionScreen />
        </React.Fragment>
    );
};

export default App;

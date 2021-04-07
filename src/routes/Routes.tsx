import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RouteType} from '../constants';
// screens
import {HomeScreen} from '../screens/Home';
import {AccordionScreen} from '../screens/Accordion';
import {DraggableScreen} from '../screens/Draggable';

const Stack = createStackNavigator<RouteType>();

const Navigator = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AccordionScreen" component={AccordionScreen} />
        <Stack.Screen name="DraggableScreen" component={DraggableScreen} />
    </Stack.Navigator>
);

const Routes = (): JSX.Element => {
    return (
        <NavigationContainer>
            <Navigator />
        </NavigationContainer>
    );
};

export default Routes;

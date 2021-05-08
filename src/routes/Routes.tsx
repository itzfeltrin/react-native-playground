import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RouteType} from '../constants';
// screens
import {HomeScreen} from '../screens/Home';
import {AccordionScreen} from '../screens/Accordion';
import {DraggableScreen} from '../screens/Draggable';
import {SwipeableScreen} from '../screens/Swipeable';
import {TypicalScreen} from '../screens/Typical';
import {AnimatableScreen} from '../screens/Animatable';

const Stack = createStackNavigator<RouteType>();

const Navigator = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Accordion" component={AccordionScreen} />
        <Stack.Screen name="Draggable" component={DraggableScreen} />
        <Stack.Screen name="Swipeable" component={SwipeableScreen} />
        <Stack.Screen name="Typical" component={TypicalScreen} />
        <Stack.Screen name="Animatable" component={AnimatableScreen} />
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

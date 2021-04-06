import {Dimensions} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export type RouteType = {
    HomeScreen: undefined;
    AccordionScreen: undefined;
};

/**
 * @summary Gives you the routes you can navigate to from the current route.
 * Pass the current route's name as a generic.
 */
export type MainScreenProps<T extends keyof RouteType> = StackNavigationProp<RouteType, T>;

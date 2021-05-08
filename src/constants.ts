import {Dimensions} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export type RouteType = {
    Home: undefined;
    Accordion: undefined;
    Draggable: undefined;
    Swipeable: undefined;
    Typical: undefined;
    Animatable: undefined;
};

/**
 * @summary Gives you the routes you can navigate to from the current route.
 * Pass the current route's name as a generic.
 */
export type MainScreenProps<T extends keyof RouteType> = StackNavigationProp<RouteType, T>;

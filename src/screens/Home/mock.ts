import {RouteType} from '../../constants';

export interface HomeItemProps {
    id: number;
    name: string;
    to: keyof RouteType;
}

export const items: HomeItemProps[] = [
    {
        id: 0,
        name: 'Accordion',
        to: 'Accordion',
    },
    {
        id: 1,
        name: 'Draggable',
        to: 'Draggable',
    },
    {
        id: 2,
        name: 'Swipesable',
        to: 'Swipeable',
    },
    {
        id: 3,
        name: 'Typical',
        to: 'Typical',
    },
    {
        id: 4,
        name: 'Animatable',
        to: 'Animatable',
    },
];

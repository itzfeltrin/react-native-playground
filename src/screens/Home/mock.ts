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
        to: 'AccordionScreen',
    },
    {
        id: 1,
        name: 'Draggable',
        to: 'DraggableScreen',
    },
    {
        id: 2,
        name: 'Swipesable',
        to: 'SwipeableScreen',
    },
    {
        id: 3,
        name: 'Typical',
        to: 'TypicalScreen',
    },
];

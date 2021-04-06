export interface AccordionItemProps {
    id: number;
    name: string;
    children?: string[];
    color: string;
}

export const accordionItems: AccordionItemProps[] = [
    {
        id: 0,
        name: 'Pizza',
        children: ['calabresa', 'bacon'],
        color: '#264653',
    },
    {
        id: 1,
        name: 'Xis',
        children: ['salada', 'filé', 'costela'],
        color: '#2a9d8f',
    },
    {
        id: 2,
        name: 'Hamburguer',
        children: ['duplo', 'bacon', 'vegano'],
        color: '#e9c46a',
    },
    {
        id: 3,
        name: 'Batata frita',
        children: ['queijo', 'bacon', 'calabresa', 'tempero especial'],
        color: '#f4a261',
    },
    {
        id: 4,
        name: 'Pastel',
        children: ['frango', 'carne', 'doce'],
        color: '#e76f51',
    },
];

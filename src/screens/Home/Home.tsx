import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {MainScreenProps} from '../../constants';
import {items, HomeItemProps} from './mock';
// components
import {Container, Menus, Item, Name} from './styles';

const HomeItem = ({name, to}: HomeItemProps): JSX.Element => {
    const navigation = useNavigation<MainScreenProps<'HomeScreen'>>();

    return (
        <Item onPress={() => navigation.navigate(to)}>
            <Name>{name}</Name>
        </Item>
    );
};

const HomeScreen = (): JSX.Element => {
    return (
        <Container>
            <Menus data={items} renderItem={({item}) => <HomeItem {...item} />} keyExtractor={({id}) => `${id}`} />
        </Container>
    );
};

export default HomeScreen;

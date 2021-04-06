import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {MainScreenProps} from '../../constants';
// components
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {items, HomeItemProps} from './mock';

const HomeItem = ({name, to}: HomeItemProps): JSX.Element => {
    const navigation = useNavigation<MainScreenProps<'HomeScreen'>>();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(to)}>
            <Text>{name}</Text>
        </TouchableOpacity>
    );
};

const HomeScreen = (): JSX.Element => {
    return (
        <View>
            <FlatList data={items} renderItem={({item}) => <HomeItem {...item} />} keyExtractor={({id}) => `${id}`} />
        </View>
    );
};

export default HomeScreen;

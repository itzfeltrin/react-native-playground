import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {HomeItemProps} from './mock';

export const Title = styled.Text`
    font-weight: bold;
    font-size: 32px;
    color: #000;
    text-align: center;
`;

export const Menus = styled(FlatList as new () => FlatList<HomeItemProps>).attrs({
    showsVerticalScrollIndicator: false,
})``;

export const Item = styled.TouchableOpacity`
    border: 1px solid #000;
    padding: 12px;
    border-radius: 8px;
    margin-top: 16px;
`;

export const Name = styled.Text`
    font-size: 16px;
`;

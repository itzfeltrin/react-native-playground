import styled, {css} from 'styled-components/native';
import {FlatList} from 'react-native';
import {HomeItemProps} from './mock';

export const Container = styled.View`
    ${({theme: {colors}}) => css`
        flex: 1;
        background-color: ${colors.bg};
        padding: 16px;
    `}
`;

export const Menus = styled(FlatList as new () => FlatList<HomeItemProps>).attrs({
    showsVerticalScrollIndicator: false,
})``;

export const Item = styled.TouchableOpacity`
    border: 1px solid #000;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 8px;
`;

export const Name = styled.Text`
    font-size: 16px;
`;

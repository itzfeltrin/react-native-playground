import styled, {css} from 'styled-components/native';
import {FlatList, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import {SwipeableItemProps} from './mock';

export const BUTTON_WIDTH = 96;

export const List = styled(FlatList as new () => FlatList<SwipeableItemProps>).attrs({
    showsVerticalScrollIndicator: false,
})``;

export const Item = styled.View`
    margin-top: 16px;
    position: relative;
    overflow: hidden;
`;

export const Button = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    ${({theme: {colors}}) => css`
        background-color: ${colors.primary};
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        justify-content: center;
        align-items: center;
        width: ${BUTTON_WIDTH}px;
        z-index: -1;
        border-radius: 8px;
        overflow: hidden;
    `}
`;

export const ButtonText = styled(Animated.Text)`
    width: ${BUTTON_WIDTH}px;
    font-size: 16px;
    color: #fff;
    text-align: center;
`;

export const Row = styled(Animated.View)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 16px;
    border-color: #000;
    border-top-width: 1px;
    border-radius: 8px;
`;

export const Name = styled.Text`
    font-size: 18px;
    font-weight: 600;
`;

export const Age = styled.Text`
    font-size: 14px;
`;

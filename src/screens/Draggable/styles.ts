import Animated from 'react-native-reanimated';
import styled, {css} from 'styled-components/native';

export const DRAGGABLE_SIZE = 128;

export const Box = styled(Animated.View)`
    ${({theme: {colors}}) => css`
        width: ${DRAGGABLE_SIZE}px;
        height: ${DRAGGABLE_SIZE}px;
        background-color: ${colors.primary};
        border-radius: ${DRAGGABLE_SIZE / 2}px;
    `}
`;

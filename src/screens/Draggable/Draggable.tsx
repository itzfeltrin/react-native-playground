import React from 'react';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withDecay} from 'react-native-reanimated';
import {withBouncing} from 'react-native-redash';
// components
import {Container} from '../../common';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../constants';
import {Box, DRAGGABLE_SIZE} from './styles';

const DraggableScreen = (): JSX.Element => {
    const x = useSharedValue<number>(0);
    const y = useSharedValue<number>(0);

    const handleDrag = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.x = x.value;
            ctx.y = y.value;
        },
        onActive: (event, ctx) => {
            x.value = ctx.x + event.translationX;
            y.value = ctx.y + event.translationY;
        },
        onEnd: event => {
            x.value = withBouncing(
                withDecay({
                    velocity: event.velocityX,
                }),
                0,
                SCREEN_WIDTH - DRAGGABLE_SIZE,
            );
            y.value = withBouncing(
                withDecay({
                    velocity: event.velocityY,
                }),
                0,
                SCREEN_HEIGHT - DRAGGABLE_SIZE - 74,
            );
        },
    });

    // animated style
    const boxAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{translateX: x.value}, {translateY: y.value}],
    }));

    return (
        <Container padding={0}>
            <PanGestureHandler onGestureEvent={handleDrag}>
                <Box style={boxAnimatedStyle} />
            </PanGestureHandler>
        </Container>
    );
};

export default DraggableScreen;

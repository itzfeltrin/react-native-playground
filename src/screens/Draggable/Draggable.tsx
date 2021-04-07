import React, {useCallback} from 'react';
import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
    PinchGestureHandler,
    PinchGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withDecay,
} from 'react-native-reanimated';
import {withBouncing} from 'react-native-redash';
// components
import {Container} from '../../common';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../constants';
import {Box, DRAGGABLE_SIZE} from './styles';

const DraggableScreen = (): JSX.Element => {
    const x = useSharedValue<number>(0);
    const y = useSharedValue<number>(0);
    const scale = useSharedValue<number>(1);

    const handleDrag = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
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
                SCREEN_HEIGHT - DRAGGABLE_SIZE - 74, // 74 is the height of android's action bar (approximately)
            );
        },
    });

    // const handlePinch = useCallback(
    //     (event: PinchGestureHandlerGestureEvent) => {
    //         const {nativeEvent} = event;
    //         const value = Number(nativeEvent.scale.toFixed(2));
    //         scale.value = value;
    //     },
    //     [scale],
    // );

    const handlePinch = useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
        onStart: (evt, ctx) => {
            console.log(evt, ctx);
        },
    });

    // animated style
    const boxAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{translateX: x.value}, {translateY: y.value}, {scale: scale.value}, {perspective: 200}],
    }));

    return (
        <Container padding={0}>
            <PanGestureHandler onGestureEvent={handleDrag}>
                <Animated.View>
                    <PinchGestureHandler onGestureEvent={handlePinch}>
                        <Box style={boxAnimatedStyle} />
                    </PinchGestureHandler>
                </Animated.View>
            </PanGestureHandler>
        </Container>
    );
};

export default DraggableScreen;

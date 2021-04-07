import React, {createRef} from 'react';
import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
    PinchGestureHandler,
    PinchGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {
    interpolateColor,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withDecay,
    withTiming,
} from 'react-native-reanimated';
import {withBouncing} from 'react-native-redash';
// components
import {Container} from '../../common';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../constants';
import {Outer, Inner, DRAGGABLE_SIZE} from './styles';

const DraggableScreen = (): JSX.Element => {
    const x = useSharedValue<number>(SCREEN_WIDTH / 2 - DRAGGABLE_SIZE / 2);
    const y = useSharedValue<number>(SCREEN_HEIGHT / 2 - DRAGGABLE_SIZE / 2);
    const scale = useSharedValue<number>(1);

    // refs
    const panRef = createRef<PanGestureHandler>();
    const pinchRef = createRef<PinchGestureHandler>();

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

    const handlePinch = useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
        onActive: event => {
            scale.value = event.scale;
        },
        onEnd: () => {
            scale.value = withTiming(1, {duration: 500});
        },
    });

    // animated styles
    const outerAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{translateX: x.value}, {translateY: y.value}],
    }));
    const innerAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{scale: scale.value}],
        backgroundColor: interpolateColor(scale.value, [1, 2, 3], ['#0071ba', '#4aa548', '#ff0000']) as string,
    }));

    return (
        <Container padding={0}>
            <PanGestureHandler onGestureEvent={handleDrag} ref={panRef} simultaneousHandlers={pinchRef}>
                <Outer style={outerAnimatedStyle}>
                    <PinchGestureHandler onGestureEvent={handlePinch} ref={pinchRef} simultaneousHandlers={panRef}>
                        <Inner style={innerAnimatedStyle} />
                    </PinchGestureHandler>
                </Outer>
            </PanGestureHandler>
        </Container>
    );
};

export default DraggableScreen;

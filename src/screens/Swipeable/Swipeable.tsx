import React from 'react';
import {PanGestureHandler, PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';
import {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import {clamp} from 'react-native-redash';
import {SwipeableItemProps, swipeableItems} from './mock';
// components
import {Container} from '../../common';
import {BUTTON_WIDTH, List, Item, Row, Name, Age, Button, ButtonText} from './styles';

const SwipeableItem = ({item}: {item: SwipeableItemProps}): JSX.Element => {
    const {name, age} = item;

    const x = useSharedValue<number>(0);
    const size = useDerivedValue<number>(() => {
        return withTiming(clamp(x.value, 0, BUTTON_WIDTH), {duration: 250});
    });

    // handle swipe
    const handleSwipe = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
        onStart: (_, ctx) => {
            ctx.x = x.value;
        },
        onActive: (event, ctx) => {
            x.value = event.translationX + ctx.x;
        },
        onEnd: () => {
            x.value = withTiming(x.value > (BUTTON_WIDTH + 8) / 2 ? BUTTON_WIDTH + 8 : 0, {duration: 250});
        },
    });

    // animated styles
    const buttonStyle = useAnimatedStyle(() => ({
        width: size.value,
    }));
    const rowStyle = useAnimatedStyle(() => ({
        transform: [{translateX: clamp(x.value, 0, BUTTON_WIDTH + 8)}],
    }));

    return (
        <Item>
            <Button style={buttonStyle}>
                <ButtonText>remove</ButtonText>
            </Button>
            <PanGestureHandler onGestureEvent={handleSwipe}>
                <Row style={rowStyle}>
                    <Name>{name}</Name>
                    <Age>{age} anos</Age>
                </Row>
            </PanGestureHandler>
        </Item>
    );
};

const SwipeableScreen = (): JSX.Element => {
    return (
        <Container>
            <List
                data={swipeableItems}
                renderItem={({item}) => <SwipeableItem item={item} />}
                keyExtractor={({id}) => `swipeable-${id}`}
            />
        </Container>
    );
};

export default SwipeableScreen;

import React, {useCallback} from 'react';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import {styles} from './styles';
import {AccordionItemProps, accordionItems} from './mock';
// components
import {Text, TouchableOpacity, View} from 'react-native';
import {SCREEN_HEIGHT} from '../../constants';

interface ItemProps {
    item: AccordionItemProps;
    open: Animated.SharedValue<number>;
    handlePress: (id: number) => void;
}

const AccordionItem = ({item, open, handlePress}: ItemProps): JSX.Element => {
    const {id, name, children, color} = item;

    const isOpen = useDerivedValue<number>(() => {
        return withTiming(open.value === id ? 1 : 0, {duration: 500});
    });

    const childrenAnimatedStyle = useAnimatedStyle(() => ({
        maxHeight: interpolate(isOpen.value, [0, 1], [0, SCREEN_HEIGHT], Extrapolate.CLAMP),
    }));

    return (
        <TouchableOpacity
            style={[styles.itemContainer, {backgroundColor: color}]}
            activeOpacity={0.85}
            onPress={() => handlePress(item.id)}>
            <Text style={styles.itemName}>{name}</Text>
            <Animated.View style={[styles.itemChildren, childrenAnimatedStyle]}>
                {children?.map((child, index) => (
                    <View key={`child-${index}`} style={styles.itemChildContainer}>
                        <Text style={styles.itemChildText}>{child}</Text>
                    </View>
                ))}
            </Animated.View>
        </TouchableOpacity>
    );
};

const AccordionScreen = (): JSX.Element => {
    const open = useSharedValue<number | null>(null);

    const handlePress = useCallback(id => (open.value = open.value === id ? null : id), [open]);

    return (
        <View style={styles.container}>
            {accordionItems.map(accordionItem => (
                <AccordionItem key={`${accordionItem.id}`} item={accordionItem} open={open} handlePress={handlePress} />
            ))}
        </View>
    );
};

export default AccordionScreen;

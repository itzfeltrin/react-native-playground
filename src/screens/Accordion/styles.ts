import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cdcdcd',
    },
    itemContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemName: {
        fontSize: 32,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textShadowColor: '#fff',
        textShadowOffset: {width: 0.75, height: 0.75},
        textShadowRadius: 0.5,
    },
    itemChildren: {
        alignItems: 'center',
        overflow: 'hidden',
    },
    itemChildContainer: {
        marginVertical: 2,
    },
    itemChildText: {
        fontSize: 18,
        color: '#fff',
        textShadowColor: '#000',
        textShadowOffset: {width: 0.75, height: 0.75},
        textShadowRadius: 0.5,
    },
});

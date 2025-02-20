import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.26,
        padding: 10,
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 10
    }
})

export default Card;
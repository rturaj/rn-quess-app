import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../styles/colors'
const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',

    },
    headerText: {
        color: 'black',
        fontSize: 18
    }
})

export default Header
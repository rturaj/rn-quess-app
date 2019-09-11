import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = (Math.floor(Math.random() * (max - min)) + min);
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}
const Game = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
    return (
        <View style={styles.screen}>
            <Text>Oponent's Guess:</Text>
            <Text>{currentGuess}</Text>
            <View style={styles.btnRow}>
                <Button title="LOWER" />
                <Button title="GREATER" />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    btnRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default Game;
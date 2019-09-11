import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, Alert } from 'react-native';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Colors from '../styles/colors';
const Home = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState('');
    const [selectedNumber, setSelectedNumber] = useState('');

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9/g]/, ""))
    }
    const resetInputHandler = () => {
        setEnteredValue("")
        setConfirmed(true);
    }
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be between 1 and 99', [{ text: "OK", style: 'cancel', onPress: resetInputHandler }]);
            return;

        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);

        setEnteredValue("");
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={{ marginVertical: 10 }}>
                <Text> Selected number is {selectedNumber}</Text>
                <Button title="Start game" onPress={() => props.onStartGame(selectedNumber)} />
            </Card>
        )
    }
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>The game screen</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number</Text>
                <Input style={styles.input} onChangeText={numberInputHandler} value={enteredValue} keyboardType="number-pad" maxLength={2} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.primary} /></View>
                    <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler} color={Colors.accent} /></View>
                </View>
            </Card>
            {confirmedOutput}
        </View >
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    input: {
        width: '80%',
        textAlign: 'center'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15

    }
})
export default Home
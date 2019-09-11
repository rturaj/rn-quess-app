import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Home from './screens/Home';
import Game from './screens/Game'

export default function App() {
  const [userNumber, setUserNumber] = useState('');
  const startGameHandler = selectedNumber => {
    console.log(selectedNumber)
  }
  return (
    <View style={styles.screen}>
      <Header title="Quess App" />
      <Home onStartGame={startGameHandler} />
      {<Game userChoice={userNumber} />}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

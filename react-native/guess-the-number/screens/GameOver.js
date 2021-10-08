import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

function GameOverScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🥳 🥳 🥳 🥳 🥳 🥳</Text>
      <Text style={styles.text}>
        I successfully guessed that your number was {props.userSelected}.
      </Text>
      <Button title="Start a new Game" onPress={props.initGame} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
  },
});

export default GameOverScreen;

import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, Alert, Keyboard } from 'react-native';

import colors from '../constants/colors';
import Card from '../components/Card';
import Input from '../components/Input';

function StartGameScreen(props) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function handleNumberInput(text) {
    setEnteredNumber(text.replace(/[^0-9]/g, ''));
  }

  function confirmNumber() {
    const parsedNumber = parseInt(enteredNumber);
    Keyboard.dismiss();

    if (isNaN(parsedNumber) || parsedNumber <= 0 || parsedNumber >= 999) {
      Alert.alert(
        'Invalid Number',
        'Please enter a number between 1 and 1000',
        [
          {
            text: 'Okay',
            style: 'destructive',
          },
        ]
      );

      return;
    }

    Alert.alert('Confirm?', `You entered ${parsedNumber}. Continue?`, [
      {
        text: 'No',
        style: 'destructive',
      },
      {
        text: 'Yes',
        style: 'default',
        onPress: () => props.startGame(parsedNumber),
      },
    ]);
  }

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Start a new Game!</Text>
      <Card style={styles.card}>
        <Input
          blurOnSubmit
          placeholder="Enter a number"
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={handleNumberInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Reset"
              onPress={() => {}}
              color={colors.secondary}
              onPress={() => setEnteredNumber('')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Confirm"
              onPress={() => {}}
              color={colors.primary}
              onPress={confirmNumber}
            />
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginVertical: 20,
  },
  card: {
    width: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  button: {
    width: 100,
  },
});

export default StartGameScreen;

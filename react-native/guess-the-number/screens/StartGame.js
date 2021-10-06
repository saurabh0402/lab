import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

import colors from '../constants/colors';
import Card from '../components/Card';
import Input from '../components/Input';

function StartGameScreen(props) {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Start a new Game!</Text>
      <Card style={styles.card}>
        <Input placeholder="Enter a number" keyboardType="number-pad" />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color={colors.secondary} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color={colors.primary} />
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

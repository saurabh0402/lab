import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';
import Card from '../components/Card';

import colors from '../constants/colors';
import { GUESS_DIRECTION } from '../constants';

function generateRandomBetween(min, max, exclude) {
  min = Math.ceil(min);
  max = Math.floor(max);

  const random = Math.floor(Math.random() * (max - min)) + min;
  return random === exclude ? generateRandomBetween(min, max, exclude) : random;
}

function GameScreen(props) {
  const [guess, setGuess] = useState(
    generateRandomBetween(1, 1000, props.userSelected)
  );

  const min = useRef(1);
  const max = useRef(1000);

  useEffect(() => {
    if (guess === props.userSelected) {
      props.endGame();
    }
  }, [guess, props.userSelected]);

  function makeNextGuess(dir = GUESS_DIRECTION.HIGHER) {
    if (
      (props.userSelected > guess && dir !== GUESS_DIRECTION.HIGHER) ||
      (props.userSelected < guess && dir !== GUESS_DIRECTION.LOWER)
    ) {
      return Alert.alert(
        "Don't cheat.",
        "Seems like you are cheating. That's not fair. Please don't do that 😠",
        [
          {
            text: 'Sorry',
          },
        ]
      );
    }

    if (dir === GUESS_DIRECTION.HIGHER) {
      min.current = guess + 1;
    } else {
      max.current = guess - 1;
    }

    const nextGuess = generateRandomBetween(min.current, max.current, -1);
    setGuess(nextGuess);
  }

  return (
    <View style={styles.gameContainer}>
      <View style={styles.guessContainer}>
        <Text style={styles.number}>{guess}</Text>
      </View>
      <Card style={styles.userInputContainer}>
        <Text style={styles.textContainer}>
          Is your number lower or higher than my guess?
        </Text>
        <View style={styles.buttonsContainer}>
          <Button
            title="Lower"
            onPress={() => makeNextGuess(GUESS_DIRECTION.LOWER)}
          />
          <Button
            title="Higher"
            onPress={() => makeNextGuess(GUESS_DIRECTION.HIGHER)}
          />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    color: colors.primary,
    fontSize: 48,
    fontWeight: 'bold',
  },
  userInputContainer: {
    width: '80%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  guessContainer: {
    padding: 30,
  },
  textContainer: {
    marginBottom: 20,
    fontSize: 16,
  },
});

export default GameScreen;

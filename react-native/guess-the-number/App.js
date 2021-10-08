// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGame';
import GameScreen from './screens/Game';
import GameOverScreen from './screens/GameOver';

import { PAGE } from './constants';

export default function App() {
  const [userSelected, setUserSelected] = useState(-1);
  const [curPage, setCurPage] = useState(PAGE.START_GAME);

  function startGame(number) {
    setUserSelected(number);
    setCurPage(PAGE.GAME);
  }

  function endGame() {
    setCurPage(PAGE.GAME_OVER);
  }

  function initGame() {
    setCurPage(PAGE.START_GAME);
  }

  let screen;
  switch (curPage) {
    case PAGE.START_GAME:
      screen = <StartGameScreen startGame={startGame} />;
      break;
    case PAGE.GAME:
      screen = <GameScreen userSelected={userSelected} endGame={endGame} />;
      break;
    case PAGE.GAME_OVER:
      screen = (
        <GameOverScreen initGame={initGame} userSelected={userSelected} />
      );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.body}>
        <Header title="Guess the Number" />
        {screen}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

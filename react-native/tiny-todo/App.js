import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, View, FlatList } from 'react-native';

import TodoItem from './components/Todo-item';
import TodoInput from './components/Todo-input';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function addGoal(currentGoal) {
    setGoals((currentGoals) => [
      ...currentGoals,
      {
        key: (goals.length + 1).toString(),
        goal: currentGoal,
      },
    ]);
    setModalVisible(false);
  }

  function deleteGoal(key) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== key);
    });
  }

  function cancelAddGoal() {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Button title="Add a Goal" onPress={() => setModalVisible(true)} />
      <TodoInput
        addGoal={addGoal}
        visible={modalVisible}
        cancelAddGoal={cancelAddGoal}
      />
      <FlatList
        data={goals}
        renderItem={(item) => (
          <TodoItem item={item.item} onDelete={deleteGoal} />
        )}
      />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
});

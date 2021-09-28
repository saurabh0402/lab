import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

function TodoInput({ addGoal, visible, cancelAddGoal }) {
  const [currentGoal, setCurrentGoal] = useState('');

  function addHandler() {
    addGoal(currentGoal);
    setCurrentGoal('');
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.formContainer}>
        <TextInput
          placeholder="What do you want to do?"
          style={styles.input}
          onChangeText={(text) => setCurrentGoal(text)}
          value={currentGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={cancelAddGoal} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    marginVertical: 10,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  button: {
    width: '40%',
  },
});

export default TodoInput;

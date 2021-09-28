import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function TodoItem({ item, onDelete }) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => onDelete(item.key)}>
      <View style={styles.listItem}>
        <Text style={styles.item}>{item.goal}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#ffcccc',
    borderColor: '#cc0000',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
  },
  item: {
    color: '#cc0000',
  },
});

export default TodoItem;

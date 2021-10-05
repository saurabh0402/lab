import React from 'react';
import { View, StyleSheet } from 'react-native';

function Card(props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.26,
    shadowRadius: 5,
    backgroundColor: 'white',
    elevation: 5,
    paddingVertical: 30,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
});

export default Card;

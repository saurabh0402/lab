import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import colors from '../constants/colors';

function Input(props) {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: colors.border,
    borderBottomWidth: 2,
    marginVertical: 10,
    marginBottom: 20,
  },
});

export default Input;

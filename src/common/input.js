import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { COLORS, TEXT_COLORS, FONT_SIZE, BORDERS, SPACINGS } from '../constants';

export const Input = (props) => (
  <TextInput
    placeholderTextColor={TEXT_COLORS.light}
    style={styles.inputBox}
    {...props}
  />
);

const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    fontSize: FONT_SIZE.text,
    color: TEXT_COLORS.darkest,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical:  10,
    borderColor: COLORS.border,
    borderWidth: BORDERS.medium,
    borderRadius: BORDERS.radius,
    margin: SPACINGS.container,
  },
});

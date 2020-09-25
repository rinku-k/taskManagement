import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { COLORS, TEXT_COLORS, FONT_SIZE, BORDERS } from '../constants';
import { Legend } from './texts';

export const Input = (props) => (
  <TextInput
    placeholderTextColor={TEXT_COLORS.light}
    {...props}
    style={[styles.inputBox, styles.small, styles.border, props.style]}
  />
);

export const Textbox = (props) => (
  <View style={styles.border}>
    <TextInput
      multiline
      placeholderTextColor={TEXT_COLORS.light}
      numberOfLines={6}
      textAlignVertical="top"
      {...props}
      style={[styles.inputBox, props.style]}
    />
    <Legend text={props.legend} style={{ color: TEXT_COLORS.light, alignSelf: 'flex-end', marginRight: 10, marginBottom: 5 }} />
  </View>
);

const styles = StyleSheet.create({
  inputBox: {
    fontSize: FONT_SIZE.text,
    color: TEXT_COLORS.dark,
    paddingHorizontal: 10,
  },
  small: {
    height: 40,
    marginVertical:  10,
  },
  border: {
    borderColor: COLORS.border,
    borderWidth: BORDERS.medium,
    borderRadius: BORDERS.radius,
  },
  textbox: {
  },
});

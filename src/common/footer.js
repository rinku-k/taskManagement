import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import { COLORS, SPACINGS } from '../constants';

export const Footer = ({ title, onPress }) => (
  <View style={styles.container}>
    <Button title={title} onPress={onPress} buttonStyle={styles.button} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    padding: SPACINGS.container,
  },
  button: {
    // height: 40,
    backgroundColor: COLORS.primary,
  }
});

Footer.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

Footer.defaultProps = {
  onPress: null,
};

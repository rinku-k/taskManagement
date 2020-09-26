import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import { Title } from './texts';
import { COLORS, SPACINGS } from '../constants';

export const Header = (props) => (
  <View style={styles.container}>
    { !!props.onBackPress &&
      <TouchableOpacity
        hitSlop={{
          top: 10,
          left: 10,
          bottom: 10,
          right: 10,
        }}
        onPress={props.onBackPress}
        style={{ paddingRight: 25 }}
      >
       <Icon name="chevron-left" color="#fff" />
      </TouchableOpacity>
    }
    <View style={{ flex: 2, justifyContent: 'center' }}>
      <Title numberOfLines={1} text={props.title} style={{ color: '#fff' }} />
    </View>
    <View style={{ flex: 1 }} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACINGS.container,
    paddingVertical: 20,
    flexDirection: 'row',
  },
  headerText: {
    color: '#fff',
  }
});

Header.propTypes = {
  title: PropTypes.string,
  onBackPress: PropTypes.func,
};

Header.defaultProps = {
  onBackPress: null,
};

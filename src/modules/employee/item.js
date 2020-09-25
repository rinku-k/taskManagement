import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Avatar, Accessory } from 'react-native-elements';
import { SubHeading, Content } from '../../common';
import { onEmployeeClick } from './reducer';
import { TEXT_COLORS, SPACINGS, COLORS, ROLE_NAMES } from '../../constants';

const Employee = ({ item, selected }) => {
  const dispatch = useDispatch();
  const { id, name, photo, role, memberIds = [] } = item;
  return (
    <TouchableNativeFeedback
      onPress={() => {
        dispatch(onEmployeeClick(id));
      }}
    >
      <View style={styles.container}>
        <Avatar
          rounded
          source={{ uri: photo }}
        >
          { selected &&
            <Accessory
              name="check"
              style={{ backgroundColor: COLORS.primary }}
            />
          }
        </Avatar>
        <View style={styles.info}>
          <SubHeading
            text={name}
          />
          { !!role &&
            <Content text={ROLE_NAMES[role](memberIds.length)} style={styles.light} />
          }
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: SPACINGS.container,
    paddingVertical: 10,
    alignItems: 'center',
  },
  light: {
    color: TEXT_COLORS.light,
  },
  info: {
    paddingLeft: 10,
  },
});

Employee.propTypes = {
  item: PropTypes.object.isRequired,
  selected: PropTypes.bool,
};

Employee.defaultProps = {
  selected: true,
}

export default Employee;

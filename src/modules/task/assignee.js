import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Heading, FacePile } from '../../common';
import { COLORS } from '../../constants';

const Assignee = ({ selected, onPress }) => {
  const { byId } = useSelector(state => state.employees);
  const dispatch = useDispatch();
  
  const faces = selected.map(id => byId[id]);
  return (
    <View style={styles.container}>
      <View style={styles.inline}>
        <Heading text="Assignees" />
        { !selected.length && <Button
          title="+ Assign"
          type="clear"
          titleStyle={{ color: COLORS.primary }}
          onPress={onPress}
        />
        }
      </View>
      { !!faces.length &&
        <FacePile numFaces={3} faces={faces} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

Assignee.propTypes = {
  selected: PropTypes.array,
  onPress: PropTypes.func,
};

Assignee.defaultProps = {
  selected: [],
  onPress: null,
};

export default Assignee;
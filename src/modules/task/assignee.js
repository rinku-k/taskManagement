import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Heading } from '../../common';
import { FacePile } from '../../utils';
import { COLORS } from '../../constants';

// This shows the assigned employee face pile and allows to edit
const Assignee = ({ selected, allowAssign, onPress }) => {
  const { byId } = useSelector(state => state.employees);
  
  const faces = selected.map(id => byId[id]);
  return (
    <View style={styles.container}>
      <View style={styles.inline}>
        <Heading text="Assignees" />
        { allowAssign && <Button
          title="+ Assign"
          type="clear"
          titleStyle={{ color: COLORS.primary }}
          onPress={onPress}
        /> }
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
  allowAssign: PropTypes.bool,
};

Assignee.defaultProps = {
  selected: [],
  onPress: null,
  allowAssign: false,
};

export default Assignee;
import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Button, Icon } from 'react-native-elements';
import ModalBox from 'react-native-modalbox';
import PropTypes from 'prop-types';
import { inputStyles, Content } from '../common';
import { COLORS, BORDERS, SPACINGS, TEXT_COLORS } from '../constants';

export const DatePicker = ({ value, onSelected }) => {
  const [date, setDate] = useState();
  const [visible, setVisibility] = useState(false);

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => setVisibility(true)}>
        <View style={styles.inlineCalendar}>
          <Content
            style={{ color: !!value ? TEXT_COLORS.dark : TEXT_COLORS.light }}
            text={value || "Due date"}
          />
          <Icon size={15} name="event" color="grey" style={{ paddingRight: 5 }} />
        </View>
      </TouchableWithoutFeedback>
      <ModalBox
        coverScreen
        isOpen={visible}
        position="bottom"
        backButtonClose
        backdropPressToClose
        style={{ height: 'auto', padding: SPACINGS.container, borderTopLeftRadius: BORDERS.radius, borderTopRightRadius: BORDERS.radius, elevation: 1 }}
      >
        <Calendar
          markingType={'custom'}
          markedDates={date}
          onDayPress={(day) => {
            setDate({
              [day.dateString]: {
                customStyles: {
                  container: {
                    backgroundColor: COLORS.primary,
                    borderRadius: BORDERS.radius,
                  },
                  text: {
                    color: 'white',
                  },
                },
                selected: true,
              },
            });
          }}
          firstDay={1}
          theme={{
            todayTextColor: COLORS.primary,
            arrowColor: COLORS.primary,
            'stylesheet.calendar.header': {
              week: {
                marginTop: 7,
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderBottomWidth: BORDERS.thin,
                borderBottomColor: COLORS.border,
              },
            },
          }}
        />
        <Button
          title="Apply"
          onPress={() => {
            onSelected(Object.keys(date)[0].split('-').reverse().join('.'));
            setVisibility(false);
          }}
          buttonStyle={styles.button}
        />
      </ModalBox>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    // height: 40,
    backgroundColor: COLORS.primary,
  },
  inlineCalendar: {
    ...inputStyles.border,
    ...inputStyles.inputBox,
    ...inputStyles.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

DatePicker.propTypes = {
  onSelected: PropTypes.func,
};

DatePicker.defaultProps = {
  onSelected: null,
};

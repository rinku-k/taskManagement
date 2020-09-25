import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import { Input } from './input';
import { COLORS, TEXT_COLORS, FONT_SIZE, BORDERS, SPACINGS } from '../constants';

export const DatePicker = (props) => {
  const [date, setDate] = useState();
  return (
    <View>
      <Input
        placeholder='Due date'
        {...props}
      />
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
        onPress={() => props.onSelected(Object.keys(date)[0])}
        buttonStyle={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    // height: 40,
    backgroundColor: COLORS.primary,
  }
});

DatePicker.propTypes = {
  onSelected: PropTypes.func,
};

DatePicker.defaultProps = {
  onSelected: null,
};

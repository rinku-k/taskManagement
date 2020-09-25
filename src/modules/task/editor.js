import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Header, Footer, DatePicker, Attachment, SubHeading } from '../../common';
import { SPACINGS, MAX_TITLE_LENGTH, MAX_DESCRIPTION_LENGTH } from '../../constants';
import Assignee from './assignee';
import { updateInfo } from './reducer';

const TaskEditor = (props) => {
  const { summary, dateTime, assignee, description, attachment } = useSelector(state => state.task);
  const dispatch = useDispatch();

  const updateFields = (type, value) => dispatch(updateInfo({ type, value }));

  return (
    <View style={{ flex: 1 }}>
      <Header
        title="Create task"
      />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <SubHeading text="Summary" />
        <Input
          placeholder="Title"
          value={summary}
          maxLength={MAX_TITLE_LENGTH}
          onChangeText={text => updateFields("summary", text)}
        />
        <DatePicker value={dateTime} onSelected={(date) => updateFields("dateTime", date)} />
        <Assignee
          selected={assignee}
          onPress={() => props.navigation.navigate('Employee')}
        />
        <SubHeading text="Description" />
        <Input
          placeholder="Text"
          multiline
          value={description}
          maxLength={MAX_DESCRIPTION_LENGTH}
          onChangeText={text => updateFields("description", text)}
        />
        <Attachment
          selected={attachment}
        />
      </ScrollView>
      <Footer disabled title="Create task" onPress={() => props.navigation.navigate('Task')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACINGS.container,
  },
});

export default TaskEditor;

import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Textbox, Header, Footer, Heading } from '../../common';
import { DatePicker, Attachment } from '../../utils';
import { SPACINGS, MAX_TITLE_LENGTH, MAX_DESCRIPTION_LENGTH } from '../../constants';
import Assignee from './assignee';
import { reset as resetEmployee } from '../employee/reducer';
import { updateInfo, reset } from './reducer';

const CreateTask = (props) => {
  const { summary, dateTime, assignee, description, attachment } = useSelector(state => state.task);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetEmployee());
    dispatch(reset());
  }, []);

  const updateFields = (type, value) => dispatch(updateInfo({ type, value }));

  return (
    <View style={{ flex: 1 }}>
      <Header
        title="Create task"
      />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Heading text="Summary" />
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
          allowAssign
        />
        <Heading style={{ paddingVertical: 10 }} text="Description" />
        <Textbox
          placeholder="Text"
          value={description}
          maxLength={MAX_DESCRIPTION_LENGTH}
          onChangeText={text => updateFields("description", text)}
          legend={`${description.length}/${MAX_DESCRIPTION_LENGTH}`}
        />
        <Attachment
          file={attachment}
          setFile={file => updateFields("attachment", file)}
        />
      </ScrollView>
      <Footer
        disabled={!summary || !dateTime || !assignee.length || !description || !attachment }
        title="Create task"
        onPress={() => props.navigation.replace('Task')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACINGS.container,
  },
});

export default CreateTask;

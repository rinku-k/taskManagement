import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { Header, Footer, Heading, SubTitle, Content } from '../../common';
import { Attachment } from '../../utils';
import { Icon } from 'react-native-elements';
import { SPACINGS } from '../../constants';
import Assignee from './assignee';

// This final created task information
const Task = (props) => {
  const { summary, dateTime, assignee, description, attachment } = useSelector(state => state.task);

  return (
    <View style={{ flex: 1 }}>
      <Header
        onBackPress={() => props.navigation.replace('CreateTask')}
        title={summary}
      />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <SubTitle text={summary} />
        <Assignee selected={assignee} />
        
        <View style={styles.inline}>
          <Icon size={15} name="event" color="grey" style={{ paddingRight: 5 }} />
          <Content text={dateTime} />
        </View>

        <Heading text="Description" />
        <Content text={description} />
        
        <Attachment
          file={attachment}
          setFile={file => updateFields("attachment", file)}
          avoidDelete
        />
      </ScrollView>
      <Footer
        title="Close task"
        onPress={() => props.navigation.replace('CreateTask')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACINGS.container,
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  }
});

export default Task;

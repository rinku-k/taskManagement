import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateInfo } from '../task/reducer';
import { reset } from './reducer';
import { Input, Header, Footer } from '../../common';
import Employee from './item';
import { MAX_NAME_LENGTH, SPACINGS } from '../../constants';

const Employees = (props) => {
  const dispatch = useDispatch();
  const { byId, allIds, selectedIds } = useSelector(state => state.employees);
  const me = useSelector(state => state.auth);
  const [searchText, setSearchText] = useState();

  return (
    <View style={{ flex: 1 }}>
      <Header
        onBackPress={() => props.navigation.goBack()}
        title="Assign Employee"
      />
      <View style={styles.container}>
        <Input
          placeholder="Search Members"
          value={searchText}
          maxLength={MAX_NAME_LENGTH}
          onChangeText={searchTerm => setSearchText(searchTerm)}
          style={{ paddingVertical: 5, margin: SPACINGS.container }}
        />
        <FlatList
          data={!searchText ? allIds : allIds.filter(id => byId[id].name.toLowerCase().includes(searchText.toLowerCase()))}
          keyExtractor={item => `${item}`}
          renderItem={({ item }) =>
            <Employee key={`${item}`} item={byId[item]} selected={selectedIds.includes(item)} />
          }
          ListHeaderComponent={
            <Employee item={{ id: me.id, photo: me.photo, name: "Assign to yourself" }} selected={selectedIds.includes(me.id)} />
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Footer title="Assign" onPress={() => {
        dispatch(updateInfo({ type: "assignee", value: selectedIds }));
        dispatch(reset());
        props.navigation.goBack();
      }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    justifyContent: 'flex-end',
    padding: 15,
  }
});

export default Employees;

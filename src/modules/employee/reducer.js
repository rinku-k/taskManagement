import { createSlice } from '@reduxjs/toolkit';
import employees from './data';

const initialState = {
  byId: employees,
  allIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  selectedIds: [],
};

const removeEmployee = (state, id) => {
  const employeePosition = state.selectedIds.indexOf(id);
  state.selectedIds.splice(employeePosition, 1);
  // Uncheck group if any member of it is removed
  const belongsToGroup = state.byId[id].groupId;
  const groupPosition = state.selectedIds.indexOf(belongsToGroup);
  if (belongsToGroup && groupPosition > -1) {
    state.selectedIds.splice(groupPosition, 1);
  }
  // If group is unselected, uncheck all its members
  const members = state.byId[id].memberIds;
  if (members && members.length) {
    members.forEach(memberId => {
      removeEmployee(state, memberId);
    });
  }
};

const addEmployee = (state, id) => {
  const employeePosition = state.selectedIds.indexOf(id);
  if (employeePosition < 0) {
    state.selectedIds = [ ...state.selectedIds, id];
  }
  // If group is selected, check all its members
  const members = state.byId[id].memberIds;
  if (members && members.length) {
    members.forEach(memberId => {
      addEmployee(state, memberId);
    });
  }
};

export const employee = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    onEmployeeClick: (state, action) => {
      const employeePosition = state.selectedIds.indexOf(action.payload);
      if (employeePosition > -1) {
        removeEmployee(state, action.payload);
      } else {
        addEmployee(state, action.payload);
      }
    },
    reset: (state, action) => {
      state.selectedIds = initialState.selectedIds;
    }
  }
});

export const { onEmployeeClick, reset } = employee.actions

export default employee.reducer

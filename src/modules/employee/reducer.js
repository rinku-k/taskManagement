import { createSlice } from '@reduxjs/toolkit';
import employees from './data';

const initialState = {
  byId: employees,
  allIds: Object.keys(employees).map(a => parseInt(a, 10)),
  selectedIds: [],
};

export const employee = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    onEmployeeClick: (state, action) => {
      const employeePosition = state.selectedIds.indexOf(action.payload);
      if (employeePosition > -1) {
        state.selectedIds.splice(employeePosition, 1);
      } else {
        state.selectedIds = [ ...state.selectedIds, action.payload];
      }
    },
  }
});

export const { onEmployeeClick } = employee.actions

export default employee.reducer

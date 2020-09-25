import { createSlice } from '@reduxjs/toolkit';
import employees from './data.json';

const initialState = {
  list: employees,
};

export const employee = createSlice({
  name: 'employee',
  initialState,
});

export default employee.reducer

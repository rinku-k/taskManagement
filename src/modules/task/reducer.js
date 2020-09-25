import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  summary: "",
  dateTime: "",
  employee: [],
  description: "",
  attachment: "",
};

export const task = createSlice({
  name: 'task',
  initialState,
  reducers: {
    updateInfo: (state, action) => {
      state[action.payload.type] = action.payload.value;
    },
    reset: (state, action) => {
      state = initialState;
    },
  }
});

export const { updateInfo, reset } = task.actions

export default task.reducer

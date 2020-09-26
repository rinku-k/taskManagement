import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  summary: "",
  dateTime: "",
  assignee: [],
  description: "",
  attachment: null,
};

export const task = createSlice({
  name: 'task',
  initialState,
  reducers: {
    updateInfo: (state, action) => {
      state[action.payload.type] = action.payload.value;
    },
    reset: (state, action) => {
      state.summary = initialState.summary;
      state.dateTime = initialState.dateTime;
      state.assignee = initialState.assignee;
      state.description = initialState.description;
      state.attachment = initialState.attachment;
    },
  }
});

export const { updateInfo, reset } = task.actions

export default task.reducer

import { createSlice } from '@reduxjs/toolkit';

const dummy = {
  summary: "This is title",
  dateTime: "23.09.2020",
  assignee: [1,2,3,4,5,6],
  description: "This is temp",
  attachment: { name: "test.jjs" },
};
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
      state = initialState;
    },
  }
});

export const { updateInfo, reset } = task.actions

export default task.reducer

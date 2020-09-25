import { createSlice } from '@reduxjs/toolkit';
import { ROLES } from '../../constants';

const initialState = {
  id: 1,
  name: "Rinku Kumari",
  photo: "",
  role: ROLES.MANAGER,
  memberIds: [],
};

export const auth = createSlice({
  name: 'auth',
  initialState,
});

export default auth.reducer

import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import auth from '../modules/auth/reducer';
import task from '../modules/task/reducer';
import employees from '../modules/employee/reducer';

const rootReducer = combineReducers({
  auth,
  task,
  employees,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../redux/student/studentSlice';
const store = configureStore({
  reducer: {
    student: studentReducer
  }
});

export default store;
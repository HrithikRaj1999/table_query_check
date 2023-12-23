import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: []
};

export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    }
  }
});

export const { addStudent } = studentSlice.actions;

export default studentSlice.reducer;
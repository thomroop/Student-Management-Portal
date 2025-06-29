import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: {
    studentList: [],
  },
  reducers: {
    setStudents: (state, action) => {
      state.studentList = action.payload;
    },
    addStudent: (state, action) => {
      state.studentList.push(action.payload);
    },
    editStudent: (state, action) => {
      const index = state.studentList.findIndex(
        (student) => student.id === action.payload.id
      );
      if (index !== -1) {
        state.studentList[index] = action.payload;
      }
    },
    deleteStudent: (state, action) => {
      state.studentList = state.studentList.filter(
        (student) => student.id !== action.payload
      );
    },
  },
});

export const {
  setStudents,
  addStudent,
  editStudent,
  deleteStudent,
} = studentSlice.actions;

export default studentSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: {},
  allCourses: [],
  currCourse: null,
};

export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    handleSetCourses: (state, action) => {
      state.courses = action.payload;
    },
    handleSetCurrCourse: (state, action) => {
      state.currCourse = action.payload;
    },
    handleGetAllCourses: (state, action) => {
      state.allCourses = action.payload;
    },
  },
});

export const { handleSetCourses, handleSetCurrCourse, handleGetAllCourses } =
  courseSlice.actions;

export default courseSlice.reducer;

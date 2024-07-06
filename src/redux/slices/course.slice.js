import { createSlice } from "@reduxjs/toolkit";

const initialState = {
<<<<<<< HEAD
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
=======
    courses: [],
    currCourse: null,
    category: null,
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
        handleCategoryName: (state, action) => {
            console.log(action);
        },
>>>>>>> origin/Huy__HomePage
    },
    handleSetCurrCourse: (state, action) => {
      state.currCourse = action.payload;
    },
    handleGetAllCourses: (state, action) => {
      state.allCourses = action.payload;
    },
  },
});

<<<<<<< HEAD
export const { handleSetCourses, handleSetCurrCourse, handleGetAllCourses } =
  courseSlice.actions;
=======
export const { handleSetCourses, handleSetCurrCourse, handleCategoryName } =
    courseSlice.actions;
>>>>>>> origin/Huy__HomePage

export default courseSlice.reducer;

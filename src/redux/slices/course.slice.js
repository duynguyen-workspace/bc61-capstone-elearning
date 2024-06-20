import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    },
});

export const { handleSetCourses, handleSetCurrCourse, handleCategoryName } =
    courseSlice.actions;

export default courseSlice.reducer;

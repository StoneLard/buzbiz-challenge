import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {value: {name: '', questions: [false, false, false, false], date:{month: 11, day: 18, year: 2022}}},
    reducers: {
        setName: (state, action) => {
            state.value.name = action.payload
        },
        setQuestions: (state, action) => {
            state.value.questions = action.payload
        },
        setDay: (state, action) => {
            state.value.date.day = action.payload
        },
        setMonth: (state, action) => {
            state.value.date.month = action.payload
        },
        setYear: (state, action) => {
            state.value.date.year = action.payload
        },
    }
})

export const { setName, setQuestions, setDay, setMonth, setYear } = userSlice.actions;

export default userSlice.reducer;
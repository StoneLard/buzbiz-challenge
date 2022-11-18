import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: 'form',
    initialState: {value:{page: 1}},
    reducers: {
        goBack: (state, action) => {
            state.value.page = state.value.page - 1
        },
        goForward: (state, action) => {
            state.value.page = state.value.page + 1
        },
    }
})

export const { goBack, goForward } = formSlice.actions

export default formSlice.reducer;
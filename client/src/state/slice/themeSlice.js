import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'mode',
    initialState: {
        mode: 'dark'
    },
    reducers: {
        setMode: (state) => {
        state.mode = state.mode === "light" ? "dark" : "light";
        },
    }
});

export const { setMode } = themeSlice.actions;

export default themeSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const HeaderSlice = createSlice({
    name: "header",
    initialState: {
        value: false
    },
    reducers: {
        toogleHeader: (state) => {
            state.value = !state.value
        }
    }
})
export default HeaderSlice.actions;
export const { toogleHeader } = HeaderSlice.reducer;
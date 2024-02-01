import { createSlice } from "@reduxjs/toolkit";

const HeaderSlice = createSlice({
    name: "headerTransparency",
    initialState: {
        value: false
    },
    reducers: {
        toogleHeader: (state,action) => {
            state.value = action.payload
        }
    }
})
export default HeaderSlice.reducer;
export const { toogleHeader } = HeaderSlice.actions;
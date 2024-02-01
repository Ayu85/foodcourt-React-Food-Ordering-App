import { createSlice } from "@reduxjs/toolkit";

const HamburgerSlice = createSlice({
    name: "hamburger",
    initialState: {
        value: false
    },
    reducers: {
        setHamburger: (state, action) => {
            state.value = action.payload;
        }
    }
})
export const { setHamburger } = HamburgerSlice.actions;
export default HamburgerSlice.reducer;
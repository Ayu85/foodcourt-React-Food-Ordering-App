import { createSlice } from "@reduxjs/toolkit";

const HamburgerSlice = createSlice({
    name: "hamburger",
    initialState: {
        symbol: false,
        menu: false
    },
    reducers: {
        setHamburger: (state, action) => {
            state.menu = action.payload;
        },
        setSymbol: (state, action) => {
            state.symbol = action.payload;
        },
    }
})
export const { setHamburger,setSymbol } = HamburgerSlice.actions;
export default HamburgerSlice.reducer;
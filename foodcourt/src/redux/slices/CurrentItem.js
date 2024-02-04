import { createSlice } from "@reduxjs/toolkit";
const currentItem = createSlice({
    name: "currentitem",
    initialState: {
        item: "burger"
    },
    reducers: {
        toogleItem: (state, action) => {
            state.item = action.payload;
        }
    }
})
export const { toogleItem } = currentItem.actions;
export default currentItem.reducer;
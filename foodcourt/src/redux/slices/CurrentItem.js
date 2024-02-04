import { createSlice } from "@reduxjs/toolkit";
const currentItem = createSlice({
    name: "currentitem",
    initialState: {
        item: { name: "burger" }
    },
    reducers: {
        toogleItem: (state, action) => {
            state.item.name = action.payload;
        }
    }
})
export const { toogleItem } = currentItem.actions;
export default currentItem.reducer;
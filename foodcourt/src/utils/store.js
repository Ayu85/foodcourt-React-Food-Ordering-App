import { configureStore } from '@reduxjs/toolkit'
import HeaderSlice from './slices/HeaderSlice';
const store = configureStore({
    reducer: {
        slice1: HeaderSlice
    }
})
export default store;

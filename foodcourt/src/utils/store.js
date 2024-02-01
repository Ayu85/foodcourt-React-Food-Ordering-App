import { configureStore } from '@reduxjs/toolkit'
import HeaderSlice from './slices/HeaderSlice';
const store = configureStore({
    reducer: {
        headerTransparency: HeaderSlice
    }
})
export default store;

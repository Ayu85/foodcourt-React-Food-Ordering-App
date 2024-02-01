import { configureStore } from '@reduxjs/toolkit'
import HeaderSlice from './slices/HeaderSlice';
import HamburgerSlice from './slices/HamburgerSlice';
const store = configureStore({
    reducer: {
        headerTransparency: HeaderSlice,
        hamburgerslice: HamburgerSlice
    }
})
export default store;

import { configureStore } from '@reduxjs/toolkit'
import HeaderSlice from './slices/HeaderSlice';
import HamburgerSlice from './slices/HamburgerSlice';
import CurrentItem from './slices/CurrentItem';
const store = configureStore({
    reducer: {
        headerTransparency: HeaderSlice,
        hamburgerslice: HamburgerSlice,
        currentItem: CurrentItem
    }
})
export default store;

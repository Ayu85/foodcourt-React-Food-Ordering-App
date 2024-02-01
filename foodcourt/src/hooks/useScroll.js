import React from 'react'
import { useDispatch } from 'react-redux';
import { toogleHeader } from '../redux/slices/HeaderSlice';

const useScroll = () => {
    const dispatch = useDispatch();
    window.addEventListener('scroll', (e) => {
        console.log(scrollY);
        if (scrollY > 50)
            dispatch(toogleHeader(true))
        else
            dispatch(toogleHeader(false))
    })
}

export default useScroll
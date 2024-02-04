import React from 'react'

const Card = () => {
    return (
        <div className='flex flex-col py-3 px-2 gap-2 items-center  shadow-[#facdcd8f] shadow-xl  
    bg-white justify-center '>
            <div className=' w-48 aspect-square bg-[#f9e7e0] animate-pulse' ></div >
            <div className=' bg-[#f9e7e0] w-32 text-center   h-7 animate-pulse '>
                <h1 className=' text-md text-slate-300 flex items-center justify-center gap-1  '>
                </h1>
            </div>
        </div>)

}
const Shimmer = () => {
    return (
        <div className='flex flex-wrap px-20   gap-8 justify-center items-center pt-10 bg-[#fff2ea]'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />


        </div>
    )
}

export default Shimmer

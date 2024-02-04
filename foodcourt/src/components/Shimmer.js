import React from 'react'

const Card = () => {
    return (<div className='flex flex-col py-2 px-2 gap-2 items-center card-font   shadow-[#facdcd8f] shadow-xl  bg-white justify-center '>
        <div className=' w-48 aspect-square' ></div >
        <div className=' text-black  bottom-0 text-center   w-full rounded-3xl  '> <h1 className='text-lg font-semibold   bottom-5'></h1>
            <h1 className=' text-md text-slate-700 flex items-center justify-center gap-1  '>
            </h1>
        </div>
    </div>)

}
const Shimmer = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-10 bg-[#fff2ea]'>
            <Card />
            <Card />
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

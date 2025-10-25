import React from 'react';

const GiftingCorner = () => {
    return (
        <div className='w-[100%] mx-auto py-1    '>
            <h1 className='p-10 text-3xl font-bold'>The Gifting Corner</h1>
            <div className='w-[95%] grid grid-cols-2 mx-auto'>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAW8dDAQhe4HLfX0h749Yjyki2nHk106IZA&s"
                        className=' h-[165px] rounded-xl  object-cover'
                    />
                </div>
                <div className='text-center py-10 bg-gradient-to-tr from-blue-50 to-blue-100 rounded-xl  '>
                    <h1 className='text-pink-500 font-bold sm:text-2xl text-xl'>Hello new beauty</h1>
                    <h1 className='text-slate-500 font-bold sm:text-2xl '>Discover your next big obsention</h1>
                </div>
            </div>
        </div>
    );
};

export default GiftingCorner;

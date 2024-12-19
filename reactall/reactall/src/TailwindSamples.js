import React from 'react'

const TailwindSamples = () => {
    const arr = [1, 2, 3, 4, 5, 6];
    return (
        <div className='main m-5 flex flex-wrap gap-2 items-start'>
            {arr.map(item => {
                return (
                    <div className='card w-full sm:w-1/2 md:w-1/3 lg:w-1/6'>
                        <div className='h-56 shadow-2xl rounded-lg p-5 relative'>
                            <h1 className='font-bold text-red-900'>Title</h1>
                            <p className='mt-2'>description</p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default TailwindSamples;
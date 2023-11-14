import React, { useEffect, useState } from 'react';

const Academic = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch('/data (1).json')
            .then(res => res.json())
            .then((data) => setUser(data))
    }, [])
    return (
        <div className='bg-base-300 w-full container mx-auto text-center mt-20 py-10'>
            <h1 className='text-center text-3xl'>Academic Performance Tracking</h1>
            <div className='mt-10'>
                        <h1 className='text-xl font-bold mt-4'>Home Work</h1>
                        <div className='mt-5'>
                            {
                                user?.homework?.map(d => <h1 className='text-lg font-semibold py-3'>{d}</h1>)
                            }
                        </div>
                    </div>
        </div>
    );
};

export default Academic;
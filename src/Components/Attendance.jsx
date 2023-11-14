import React, { useEffect, useState } from 'react';

const Attendance = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch('/data (1).json')
            .then(res => res.json())
            .then((data) => setUser(data))
    }, [])
    console.log(user);

    return (
        <div className='container mx-auto'>
            <h1 className='lg:mt-10 text-3xl font-bold'>Hello! {user?.NAME}</h1>

            <div className='mt-14'>

                <h1 className='text-center text-2xl'>ATTENDANCE</h1>

                <div className="overflow-x-auto bg-base-300 mt-10">
                    <table className="table text-lg">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                                <th>Friday</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>Date</th>
                                <td>{user?.ATTENDANCE?.monday.date}</td>
                                <td>{user?.ATTENDANCE?.tuesday.date}</td>
                                <td>{user?.ATTENDANCE?.wednesday.date}</td>
                                <td>{user?.ATTENDANCE?.thursday.date}</td>
                                <td>{user?.ATTENDANCE?.friday.date}</td>
                            </tr>
                            <tr>
                                <th>
                                    FN
                                </th>
                                <td>
                                    <td className='bg-green-600'>{user?.ATTENDANCE?.monday.fn}</td>
                                </td>
                                <td>
                                    <td className='bg-red-600'>{user?.ATTENDANCE?.tuesday.fn}</td>
                                </td>
                                <td>
                                    <td className='bg-green-600'>{user?.ATTENDANCE?.wednesday.fn}</td>
                                </td>
                                <td>
                                    <td className='bg-green-600'>{user?.ATTENDANCE?.thursday.fn}</td>
                                </td>
                                <td>
                                    <td className='bg-red-600'>{user?.ATTENDANCE?.friday.fn}</td>
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>
                                    AN
                                </th>
                                <td>
                                    <td className='bg-green-600'>{user?.ATTENDANCE?.monday.an}</td>
                                </td>
                                <td>
                                    <td className='bg-green-600'>{user?.ATTENDANCE?.tuesday.an}</td>
                                </td>
                                <td>
                                    <td className='bg-red-600'>{user?.ATTENDANCE?.wednesday.an}</td>
                                </td>
                                <td>
                                    <td className='bg-green-600'>{user?.ATTENDANCE?.thursday.an}</td>
                                </td>
                                <td>
                                    <td className='bg-green-600'>{user?.ATTENDANCE?.friday.an}</td>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>               
            </div>
        </div>
    );
};

export default Attendance;
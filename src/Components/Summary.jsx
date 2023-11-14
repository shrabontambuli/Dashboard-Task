import React, { useEffect, useState } from 'react';
import { Cell, Pie, PieChart } from 'recharts';

const Summary = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch('/data (1).json')
            .then(res => res.json())
            .then((data) => setUser(data))
    }, [])

    const data = [
        {
          "name": "Good",
          "value": 400
        },
        {
          "name": "Bad",
          "value": 300
        },
        {
          "name": "Good",
          "value": 500
        },
        {
          "name": "Bad",
          "value": 200
        },
        {
          "name": "Good",
          "value": 278
        }
      ]

    return (
        <div className='lg:px-20 mx-auto'>
            <h1 className='lg:mt-10 text-3xl font-bold'>Hello! {user?.NAME}</h1>
            <h1 className='text-center text-2xl mt-10'>ATTENDANCE</h1>
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
            <div className='mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center items-center gap-5'>
                <div className='bg-base-300 lg:px-20'>
                    <h1 className='text-xl font-bold mt-4'>Home Work</h1>
                    <div>
                        {
                            user?.homework?.map(d => <h1 className='text-lg font-semibold py-3'>{d}</h1>)
                        }
                    </div>
                </div>
                <div className='bg-base-300 w-full container mx-auto text-center mt-20 py-10'>

                    <PieChart width={730} height={250}>
                        <Pie data={data} cx="50%" cy="50%" outerRadius={80} label>
                            {
                                data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} />
                                ))
                            }
                        </Pie>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Summary;
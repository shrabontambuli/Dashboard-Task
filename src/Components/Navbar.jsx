import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <div className="navbar max-w-screen-4xl bg-[#247a3a] bg-opacity-40 font-semibold text-white top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg rounded-box w-52">
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <p className='lg:ms-10'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        </p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    </ul>
                </div>

                <div className="navbar-end lg:me-10">
                    {/* <img className="w-16 h-16 rounded-full" alt="" /> */}
                    <div className="avatar">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
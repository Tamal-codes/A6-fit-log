import Image from 'next/image';
import React from 'react';
import logo from '../../../src/assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>

                    </ul>
                </div>
                <Image src={logo} alt="Logo" />
                <a className="btn btn-ghost text-xl">FITLOG</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Workouts</a></li>
                    <li><a>My plan</a></li>

                </ul>
            </div>

            <div className="navbar-end flex items-center gap-4">

                <button className="flex items-center gap-2 bg-[#ccff00] text-black px-4 py-1.5 rounded-full font-semibold">
                    <span>Plan</span>
                    <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">0</span>
                </button>

                <button className="flex items-center gap-2 border border-gray-400 text-white px-4 py-1.5 rounded-full font-semibold">
                    <span>Saved</span>
                    <span className="border border-gray-400 text-xs px-2 py-0.5 rounded-full">0</span>
                </button>


            </div>
        </div >
    );
};

export default Navbar;
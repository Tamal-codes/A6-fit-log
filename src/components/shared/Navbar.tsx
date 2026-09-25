'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import logo from '../../../src/assets/logo.png';

const Navbar = () => {
    const pathname = usePathname();


    const isActive = (path: string) => pathname === path;

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <div
                        tabIndex={-1}
                        className="dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex flex-col gap-1">
                        <Link
                            href="/"
                            className={`p-2 rounded-lg ${isActive('/') ? 'bg-[#CCFF00]/10 text-[#CCFF00] font-bold' : ''}`}
                        >
                            Workouts
                        </Link>
                        <Link
                            href="/my-plan"
                            className={`p-2 rounded-lg ${isActive('/my-plan') ? 'bg-[#CCFF00]/10 text-[#CCFF00] font-bold' : ''}`}
                        >
                            My plan
                        </Link>
                    </div>
                </div>
                <Link href="/" className="flex items-center gap-2">
                    <Image src={logo} alt="Logo" />
                    <span className="btn btn-ghost text-xl">FITLOG</span>
                </Link>
            </div>


            <div className="navbar-center hidden lg:flex">
                <div className="flex items-center gap-2">
                    <Link
                        href="/"
                        className={`rounded-full px-5 py-2 font-medium transition-all ${isActive('/')
                                ? 'bg-[#1c2208] text-[#CCFF00] font-semibold'
                                : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        Workouts
                    </Link>
                    <Link
                        href="/my-plan"
                        className={`rounded-full px-5 py-2 font-medium transition-all ${isActive('/my-plan')
                                ? 'bg-[#1c2208] text-[#CCFF00] font-semibold'
                                : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        My Plan
                    </Link>
                </div>
            </div>

            <div className="navbar-end flex items-center gap-4">
                <Link href="/my-plan" className="flex items-center gap-2 bg-[#ccff00] text-black px-4 py-1.5 rounded-full font-semibold">
                    <span>Plan</span>
                    <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">0</span>
                </Link>

                <Link href="/my-plan" className="flex items-center gap-2 border border-gray-400 text-white px-4 py-1.5 rounded-full font-semibold">
                    <span>Saved</span>
                    <span className="border border-gray-400 text-xs px-2 py-0.5 rounded-full">0</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
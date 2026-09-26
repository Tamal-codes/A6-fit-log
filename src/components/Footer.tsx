import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-gray-900 text-gray-300">
            <div className=" flex flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row">
                
               
                <div className="flex items-center gap-3">
                    <Image src={logo} alt="FitLog Logo" width={40} height={30} className="object-contain" />
                    <span className="text-xl font-bold tracking-wide text-white">
                        FitLog
                    </span>
                </div>

                
                <div className="text-center text-sm sm:text-right">
                    <p className="font-medium text-gray-400">
                        &copy; 2026 FitLog - Workout Library
                    </p>
                    <p className="text-xs text-gray-500">
                        Train hard, log honest.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;




     
           
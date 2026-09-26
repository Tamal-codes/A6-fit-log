import Image from 'next/image';
import React from 'react';
import banner from "@/assets/banner.png";

const Banner = () => {
    return (
        <div className='bg-[#222941] rounded-3xl p-8 md:p-12 my-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>

        
            <div className='space-y-4'>
                <h3 className='text-xs font-semibold tracking-wider text-[#ccff00] uppercase'>
                    WORKOUT LIBRARY
                </h3>

                <h1 className='text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight'>
                    TRAIN WITH INTENT. <br />
                    LOG EVERY SET.
                </h1>

                <p className='text-gray-400 text-sm max-w-sm leading-relaxed'>
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    into today&apos;s plan, and watch the week&apos;s work add up.
                </p>

                <div className='pt-2'>
                    <button className="bg-[#ccff00] hover:bg-[#b3e600] text-black font-extrabold px-6 py-3 rounded-xl text-xs tracking-wide uppercase transition-all cursor-pointer">
                        BROWSE WORKOUTS
                    </button>
                </div>
            </div>

            
            <div className='flex justify-center md:justify-end items-center'>
                <Image
                    src={banner}
                    alt="Workout Banner"
                    className='w-full max-w-md h-auto object-contain'
                    priority
                />
            </div>

        </div>
    );
};

export default Banner;
import Link from 'next/link';
import React from 'react';

const MyPlanPage = () => {
    return (
        <section className="min-h-screen bg-[#0d0f12] px-4 py-10 text-white">
            <div className="container mx-auto max-w-6xl">
                
                {/* Header Title Section */}
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold uppercase tracking-wider text-white">
                        My Plan
                    </h1>
                    <p className="mt-1 text-sm text-gray-400">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* Stats Summary Cards */}
                <div className="mb-8 grid grid-cols-3 divide-x divide-gray-800/80 rounded-2xl border border-gray-800/80 bg-[#13171f] p-6 shadow-lg">
                    {/* Exercises */}
                    <div className="flex flex-col gap-1 pr-4">
                        <span className="text-xs font-medium text-gray-400">Exercises</span>
                        <span className="text-4xl font-extrabold text-[#CCFF00]">2</span>
                    </div>

                    {/* Minutes */}
                    <div className="flex flex-col gap-1 px-6">
                        <span className="text-xs font-medium text-gray-400">Minutes</span>
                        <span className="text-4xl font-extrabold text-white">23</span>
                    </div>

                    {/* Calories */}
                    <div className="flex flex-col gap-1 pl-6">
                        <span className="text-xs font-medium text-gray-400">Calories</span>
                        <span className="text-4xl font-extrabold text-white">190</span>
                    </div>
                </div>

                {/* Filter and Sort Controls */}
                <div className="mb-6 flex items-center justify-between">
                    {/* Toggle Buttons */}
                    <div className="flex items-center rounded-xl border border-gray-800/80 bg-[#13171f] p-1">
                        <button className="rounded-lg px-5 py-2 text-xs font-semibold text-gray-400 transition hover:text-white">
                            Today's Plan
                        </button>
                        <button className="rounded-lg bg-[#1c222d] px-5 py-2 text-xs font-semibold text-white shadow-sm">
                            Saved
                        </button>
                    </div>

                    {/* Sort By Dropdown */}
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-gray-400">Sort By</span>
                        <div className="relative">
                            <select className="appearance-none rounded-xl border border-gray-800/80 bg-[#13171f] py-2 pl-4 pr-8 text-xs font-semibold text-white outline-none cursor-pointer">
                                <option value="duration">Duration</option>
                                <option value="calories">Calories</option>
                                <option value="name">Name</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-400">
                                <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Empty State Container */}
                <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-800/80 bg-[#13171f]/50 p-12 text-center">
                    <h2 className="text-2xl font-black uppercase tracking-wider text-white">
                        Nothing Here Yet
                    </h2>
                    <p className="mt-2 text-xs text-gray-400">
                        Browse the library and add a lift to get today moving.
                    </p>
                    <Link
                        href="/"
                        className="mt-6 rounded-full bg-[#CCFF00] px-6 py-2.5 text-xs font-bold text-black transition hover:bg-[#b5e600]"
                    >
                        Go to workouts
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default MyPlanPage;
import React from "react";

const MyPlanPage = () => {
    return (
        <main className="min-h-screen bg-[#0d0f12] px-4 py-10 text-white">
            <div className="mx-auto max-w-6xl">

                {/* Page Heading */}
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold uppercase tracking-wide">
                        My Plan
                    </h1>

                    <p className="mt-2 text-sm text-gray-400">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* Statistics */}
                <div className="mb-6 grid grid-cols-1 divide-y divide-gray-800 rounded-2xl border border-gray-800 bg-[#13171f] sm:grid-cols-3 sm:divide-x sm:divide-y-0">

                    <div className="p-6">
                        <p className="text-sm text-gray-400">Exercises</p>
                        <p className="mt-1 text-4xl font-extrabold text-[#ccff00]">
                            0
                        </p>
                    </div>

                    <div className="p-6">
                        <p className="text-sm text-gray-400">Minutes</p>
                        <p className="mt-1 text-4xl font-extrabold">
                            0
                        </p>
                    </div>

                    <div className="p-6">
                        <p className="text-sm text-gray-400">Calories</p>
                        <p className="mt-1 text-4xl font-extrabold">
                            0
                        </p>
                    </div>

                </div>

                {/* Tabs + Sort */}
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex w-fit rounded-xl border border-gray-800 bg-[#13171f] p-1">
                        <button className="rounded-lg px-5 py-2 text-sm font-semibold text-gray-400">
                            Today's Plan
                        </button>

                        <button className="rounded-lg bg-[#1c222d] px-5 py-2 text-sm font-semibold text-white">
                            Saved
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">
                            Sort By
                        </span>

                        <button className="rounded-lg border border-gray-800 bg-[#13171f] px-4 py-2 text-sm">
                            Duration
                        </button>
                    </div>

                </div>

                {/* Empty State */}
                <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-800 bg-[#0f1217] text-center">

                    <h2 className="text-xl font-extrabold uppercase">
                        Nothing Here Yet
                    </h2>

                    <p className="mt-2 max-w-md text-sm text-gray-500">
                        Browse the library and add a lift to get today moving.
                    </p>

                    <button className="mt-6 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-bold text-black transition hover:scale-105">
                        Go to workouts
                    </button>

                </div>

            </div>
        </main>
    );
};

export default MyPlanPage;
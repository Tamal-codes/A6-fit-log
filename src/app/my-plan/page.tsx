"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { useWorkout } from "@/context/WorkoutContext";
import { toast } from "react-toastify";

const MyPlanPage = () => {
    const {
        plan,
        saved,
        setPlan,
        setSaved,
    } = useWorkout();

    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
    const [sortBy, setSortBy] = useState("duration");

    const workouts = activeTab === "plan" ? plan : saved;

    const totalExercises = workouts.length;

    const totalMinutes = workouts.reduce(
        (total, workout) => total + (Number(workout.duration) || 0),
        0
    );

    const totalCalories = workouts.reduce(
        (total, workout) => total + (Number(workout.caloriesBurned) || 0),
        0
    );

    const sortedWorkouts = useMemo(() => {
        if (!workouts || workouts.length === 0) return [];

        return [...workouts].sort((a, b) => {
            if (sortBy === "duration") {
                return (Number(a.duration) || 0) - (Number(b.duration) || 0);
            }

            if (sortBy === "calories") {
                return (Number(a.caloriesBurned) || 0) - (Number(b.caloriesBurned) || 0);
            }

            if (sortBy === "rating") {
                return (Number(b.rating) || 0) - (Number(a.rating) || 0);
            }

            return 0;
        });
    }, [workouts, sortBy]);

    const handleRemove = (id: number | string) => {
        setPlan(plan.filter((workout) => workout.id !== id));
        toast.success("Exercise marked as done! 🎉");
    };

    const handleRemoveSaved = (id: number | string) => {
        setSaved(saved.filter((workout) => workout.id !== id));
        toast.info("Removed from saved");
    };

    return (
        <main className="min-h-screen bg-[#0d0f12] px-4 py-10 text-white">
            <div className="mx-auto max-w-6xl">

                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold uppercase tracking-wide">
                        My Plan
                    </h1>
                    <p className="mt-2 text-sm text-gray-400">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                <div className="mb-7 grid grid-cols-1 divide-y divide-gray-800 overflow-hidden rounded-2xl border border-gray-800 bg-[#13171f] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                    <div className="px-6 py-5">
                        <p className="text-sm text-gray-400">Exercises</p>
                        <p className="mt-1 text-4xl font-extrabold text-[#ccff00]">
                            {totalExercises}
                        </p>
                    </div>

                    <div className="px-6 py-5">
                        <p className="text-sm text-gray-400">Minutes</p>
                        <p className="mt-1 text-4xl font-extrabold">
                            {totalMinutes}
                        </p>
                    </div>

                    <div className="px-6 py-5">
                        <p className="text-sm text-gray-400">Calories</p>
                        <p className="mt-1 text-4xl font-extrabold">
                            {totalCalories}
                        </p>
                    </div>
                </div>

                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex w-fit rounded-xl border border-gray-800 bg-[#13171f] p-1">
                        <button
                            onClick={() => setActiveTab("plan")}
                            className={`rounded-lg px-5 py-2 text-sm font-semibold transition ${activeTab === "plan"
                                    ? "bg-[#1c222d] text-white"
                                    : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {"Today's Plan"}
                        </button>

                        <button
                            onClick={() => setActiveTab("saved")}
                            className={`rounded-lg px-5 py-2 text-sm font-semibold transition ${activeTab === "saved"
                                    ? "bg-[#1c222d] text-white"
                                    : "text-gray-400 hover:text-white"
                                }`}
                        >
                            Saved
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">Sort By</span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="rounded-lg border border-gray-800 bg-[#13171f] px-4 py-2 text-sm text-white outline-none cursor-pointer"
                        >
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>
                </div>

                {sortedWorkouts.length > 0 ? (
                    <div className="space-y-3">
                        {sortedWorkouts.map((workout) => (
                            <div
                                key={workout.id}
                                className="flex flex-col gap-5 rounded-2xl border border-gray-800 bg-[#13171f] p-3 transition hover:border-gray-700 md:flex-row md:items-center"
                            >
                                <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl md:h-20 md:w-28">
                                    <Image
                                        src={workout.image}
                                        alt={workout.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <h2 className="truncate text-lg font-extrabold uppercase">
                                        {workout.name}
                                    </h2>

                                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400">
                                        <span>
                                            <span className="text-[#ccff00]">◷</span>{" "}
                                            {workout.duration} min
                                        </span>
                                        <span>🔥 {workout.caloriesBurned} kcal</span>
                                        <span>★ {workout.rating ?? "—"}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs md:w-48">
                                    <div>
                                        <p className="text-gray-500">Difficulty</p>
                                        <p className="font-semibold capitalize">
                                            {workout.difficulty}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-gray-500">Sets</p>
                                        <p className="font-semibold">{workout.sets}</p>
                                    </div>

                                    <div>
                                        <p className="text-gray-500">Reps</p>
                                        <p className="font-semibold">{workout.reps}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-2 md:ml-auto">
                                    <Link
                                        href={`/library/${workout.id}`}
                                        className="rounded-full border border-gray-700 px-4 py-2 text-xs font-semibold transition hover:bg-[#1c222d]"
                                    >
                                        View Details
                                    </Link>

                                    {activeTab === "plan" ? (
                                        <button
                                            type="button"
                                            onClick={() => handleRemove(workout.id)}
                                            className="rounded-full bg-[#ccff00] px-4 py-2 text-xs font-bold text-black transition hover:bg-[#b3e600]"
                                        >
                                            ✓ Mark as Done
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveSaved(workout.id)}
                                            className="px-2 text-lg text-gray-500 transition hover:text-white"
                                        >
                                            ×
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex` min-h-75` flex-col items-center justify-center rounded-2xl border border-dashed border-gray-800 bg-[#0f1217] text-center">
                        <h2 className="text-xl font-extrabold uppercase">
                            Nothing Here Yet
                        </h2>
                        <p className="mt-2 max-w-md text-sm text-gray-500">
                            Browse the library and add a lift to get today moving.
                        </p>
                        <Link
                            href="/"
                            className="mt-6 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-bold text-black transition hover:scale-105"
                        >
                            Go to workouts
                        </Link>
                    </div>
                )}

            </div>
        </main>
    );
};

export default MyPlanPage;
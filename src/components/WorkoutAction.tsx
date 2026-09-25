
"use client";

import React from "react";
import { useWorkout } from "@/context/WorkoutContext";
import { toast } from "react-toastify";

interface Workout {
    id: number | string;
    name: string;
    image: string;
    duration: number;
    caloriesBurned: number;
    difficulty: string;
    sets: number;
    reps: string;
}

const WorkoutActions = ({ workout }: { workout: Workout }) => {
    const { plan, saved, setPlan, setSaved } = useWorkout();

    const isInPlan = plan.some(
        (item) => item && String(item.id) === String(workout.id)
    );

    const isSaved = saved.some(
        (item) => item && String(item.id) === String(workout.id)
    );

    const handlePlan = () => {
        const cleanPlan = plan.filter(Boolean);

        const alreadyInPlan = cleanPlan.some(
            (item) => String(item.id) === String(workout.id)
        );

        if (alreadyInPlan) {
            setPlan(
                cleanPlan.filter(
                    (item) => String(item.id) !== String(workout.id)
                )
            );

            toast.info("Removed from today's plan!");
        } else {
            setPlan([...cleanPlan, workout]);

            toast.success("Added to today's plan!");
        }
    };

    const handleSave = () => {
        const cleanSaved = saved.filter(Boolean);

        const alreadySaved = cleanSaved.some(
            (item) => String(item.id) === String(workout.id)
        );

        if (alreadySaved) {
            setSaved(
                cleanSaved.filter(
                    (item) => String(item.id) !== String(workout.id)
                )
            );

            toast.info("Removed from saved!");
        } else {
            setSaved([...cleanSaved, workout]);

            toast.success("Workout saved successfully!");
        }
    };

    return (
        <div className="mt-8 flex flex-wrap gap-4">
            <button
                type="button"
                onClick={handlePlan}
                className="flex-1 rounded-xl bg-[#CCFF00] px-6 py-3 text-center text-sm font-bold text-black transition hover:bg-[#b3e600]"
            >
                {isInPlan
                    ? "Remove from plan"
                    : "Add to today's plan"}
            </button>

            <button
                type="button"
                onClick={handleSave}
                className="rounded-xl border border-gray-700 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
                {isSaved ? "Saved" : "Save for later"}
            </button>
        </div>
    );
};

export default WorkoutActions;


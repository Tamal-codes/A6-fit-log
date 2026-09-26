"use client";

import React, { createContext, useContext, useState } from "react";


export interface Workout {
    id: number | string;
    name: string;
    image: string;
    duration: number;
    caloriesBurned: number;
    difficulty: string;
    sets: number;
    reps: string;
    rating?: number;
}

export interface WorkoutContextType {
    plan: Workout[];
    saved: Workout[];
    setPlan: React.Dispatch<React.SetStateAction<Workout[]>>;
    setSaved: React.Dispatch<React.SetStateAction<Workout[]>>;
}

const WorkoutContext = createContext<WorkoutContextType | null>(null);

export const WorkoutProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [plan, setPlan] = useState<Workout[]>([]);
    const [saved, setSaved] = useState<Workout[]>([]);

    return (
        <WorkoutContext.Provider
            value={{
                plan: plan.filter(Boolean),
                saved: saved.filter(Boolean),
                setPlan,
                setSaved,
            }}
        >
            {children}
        </WorkoutContext.Provider>
    );
};

export const useWorkout = () => {
    const context = useContext(WorkoutContext);

    if (!context) {
        throw new Error("useWorkout must be used inside WorkoutProvider");
    }

    return context;
};
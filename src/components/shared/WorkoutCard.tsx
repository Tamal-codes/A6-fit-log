import Image from 'next/image';
import React from 'react';
interface Workout {
    id: number;
    name: string;
    image: string;
    muscleGroups: string[];
    equipment: string;
    difficulty: string;
    duration: number;
    caloriesBurned: number;
    sets: number;
    reps: string;
    rating: number;
    description: string;
}
const WorkoutCard = ({ workout }: { workout: Workout }) => {
    return (
        <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">

            <Image
                src={workout.image}
                alt={workout.name}
                width={500}
                height={300}
                className="h-52 w-full object-cover"
            />

            <div className="p-5">

                <div className="mb-3 flex items-start justify-between gap-3">
                    <h2 className="text-xl font-bold">
                        {workout.name}
                    </h2>

                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm">
                        ⭐ {workout.rating}
                    </span>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-lg bg-gray-100 p-3">
                        <p className="text-gray-500">Difficulty</p>
                        <p className="font-semibold">
                            {workout.difficulty}
                        </p>
                    </div>

                    <div className="rounded-lg bg-gray-100 p-3">
                        <p className="text-gray-500">Duration</p>
                        <p className="font-semibold">
                            {workout.duration} min
                        </p>
                    </div>

                    <div className="rounded-lg bg-gray-100 p-3">
                        <p className="text-gray-500">Calories</p>
                        <p className="font-semibold">
                            {workout.caloriesBurned} kcal
                        </p>
                    </div>

                    <div className="rounded-lg bg-gray-100 p-3">
                        <p className="text-gray-500">Sets / Reps</p>
                        <p className="font-semibold">
                            {workout.sets} × {workout.reps}
                        </p>
                    </div>
                </div>

                <p className="mt-4 text-sm text-gray-600">
                    <span className="font-semibold">Equipment:</span>{" "}
                    {workout.equipment}
                </p>

                <p className="mt-3 line-clamp-2 text-sm text-gray-500">
                    {workout.description}
                </p>

            </div>
        </div>
    );
};

export default WorkoutCard;
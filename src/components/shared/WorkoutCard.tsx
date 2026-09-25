import Image from 'next/image';
import Link from 'next/link';
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
        <Link href={`/library/${workout.id}`} className="block">
            <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#15171c] transition hover:border-gray-700 cursor-pointer">

                <div className="aspect-[16/9] w-full">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={500}
                        height={280}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="p-4">

                   
                    <div className="mb-3 flex items-center justify-between gap-2">

                        <div className="flex flex-wrap gap-1.5">
                            {workout.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#b6ff00] px-2.5 py-1 text-[10px] font-bold uppercase text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        <span className="text-xs text-gray-400">
                            ★ {workout.rating}
                        </span>

                    </div>

                 
                    <h2 className="mb-1 text-lg font-extrabold uppercase tracking-wide text-white">
                        {workout.name}
                    </h2>

                 
                    <p className="mb-4 text-xs text-gray-500">
                        {workout.equipment}
                    </p>

              
                    <div className="flex items-center gap-4 border-t border-gray-800 pt-3 text-xs text-gray-400">

                        <span>
                            ◷ {workout.duration} min
                        </span>

                        <span>
                            ● {workout.caloriesBurned} kcal
                        </span>

                        <span>
                            ★ {workout.rating}
                        </span>

                    </div>

                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;
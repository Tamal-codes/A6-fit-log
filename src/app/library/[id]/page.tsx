
import Image from 'next/image';
import React from 'react';
import WorkoutActions from '@/components/WorkoutAction';

interface Workout {
    id: number | string;
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
    instructions?: string[] | string;
}

const getWorkoutDetails = async (id: string): Promise<Workout | undefined> => {
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data: Workout[] = await response.json();
    const workout = data.find((item) => String(item.id) === String(id));
    return workout;
};

type PageProps = {
    params: Promise<{ id: string }>;
};

const WorkoutDetailsPage = async ({ params }: PageProps) => {
    const resolvedParams = await params;
    const workout = await getWorkoutDetails(resolvedParams.id);

    if (!workout) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center text-white">
                <h1 className="text-2xl font-bold">Workout Not Found!</h1>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-[#121212] py-12 text-white">
            <div className="container mx-auto max-w-5xl px-4">

                <div className="grid grid-cols-1 gap-8 rounded-3xl bg-[#1E1E1E] p-6 lg:grid-cols-2 lg:p-8">

                    {/* Left: Image */}
                    <div className="relative h-87.5 w-full overflow-hidden rounded-2xl lg:h-full">
                        <Image
                            src={workout.image}
                            alt={workout.name || 'Workout Image'}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-between">
                        <div>

                            {/* Title */}
                            <h1 className="text-3xl font-extrabold uppercase tracking-wide">
                                {workout.name}
                            </h1>

                            {/* Description */}
                            <p className="mt-3 text-sm text-gray-400">
                                {workout.description}
                            </p>

                            {/* Muscle Groups */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {workout.muscleGroups?.map((muscle: string, index: number) => (
                                    <span
                                        key={index}
                                        className="rounded-full bg-[#CCFF00] px-4 py-1 text-xs font-bold text-black"
                                    >
                                        {muscle}
                                    </span>
                                ))}
                            </div>

                            {/* Workout Information */}
                            <div className="mt-6 divide-y divide-gray-800 border-t border-b border-gray-800 text-sm">

                                <div className="flex justify-between py-3">
                                    <span className="text-gray-400">EQUIPMENT</span>
                                    <span className="font-semibold">
                                        {workout.equipment}
                                    </span>
                                </div>

                                <div className="flex justify-between py-3">
                                    <span className="text-gray-400">DIFFICULTY</span>
                                    <span className="font-semibold capitalize">
                                        {workout.difficulty}
                                    </span>
                                </div>

                                <div className="flex justify-between py-3">
                                    <span className="text-gray-400">SETS</span>
                                    <span className="font-semibold">
                                        {workout.sets}
                                    </span>
                                </div>

                                <div className="flex justify-between py-3">
                                    <span className="text-gray-400">REPS</span>
                                    <span className="font-semibold">
                                        {workout.reps}
                                    </span>
                                </div>

                                <div className="flex justify-between py-3">
                                    <span className="text-gray-400">DURATION</span>
                                    <span className="font-semibold">
                                        {workout.duration} min
                                    </span>
                                </div>

                                <div className="flex justify-between py-3">
                                    <span className="text-gray-400">CALORIES</span>
                                    <span className="font-semibold">
                                        {workout.caloriesBurned} kcal
                                    </span>
                                </div>

                                <div className="flex justify-between py-3">
                                    <span className="text-gray-400">RATING</span>
                                    <span className="font-semibold">
                                        {workout.rating}
                                    </span>
                                </div>

                            </div>

                            {/* Instructions */}
                            {workout.instructions && (
                                <div className="mt-6">
                                    <h3 className="mb-2 font-bold uppercase tracking-wider text-gray-200">
                                        INSTRUCTIONS
                                    </h3>

                                    <ol className="list-inside list-decimal space-y-2 text-xs text-gray-400">
                                        {Array.isArray(workout.instructions) ? (
                                            workout.instructions.map(
                                                (step: string, index: number) => (
                                                    <li key={index}>{step}</li>
                                                )
                                            )
                                        ) : (
                                            <li>{workout.instructions}</li>
                                        )}
                                    </ol>
                                </div>
                            )}

                        </div>

                        {/* Plan & Save Actions */}
                        <WorkoutActions workout={workout} />

                    </div>
                </div>

            </div>
        </section>
    );
};

export default WorkoutDetailsPage;


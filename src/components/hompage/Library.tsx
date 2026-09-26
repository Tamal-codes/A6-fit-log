import WorkoutCard from "@/components/shared/WorkoutCard";
import { ComponentProps } from "react";

// WorkoutCard কম্পোনেন্ট আসলে যে টাইপটা আশা করছে, সেটা এখান থেকে অটোমেটিক বের করা হচ্ছে
type WorkoutCardProps = ComponentProps<typeof WorkoutCard>["workout"];

const getLibrary = async (): Promise<WorkoutCardProps[]> => {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await response.json();
    return data as WorkoutCardProps[];
};

const Library = async () => {
    const libraryData = await getLibrary();

    return (
        <section className="container mx-auto my-17.5 px-4">
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    Workout Library <br />
                    <span className="text-sm font-light">
                        Twelve lifts covering every major muscle group
                    </span>
                </h1>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {libraryData.map((library) => (
                    <WorkoutCard
                        key={library.id}
                        workout={library}
                    />
                ))}
            </div>
        </section>
    );
};

export default Library;
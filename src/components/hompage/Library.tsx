import WorkoutCard from "@/components/shared/WorkoutCard";

const getLibrary = async () => {
    const response = await fetch(
        "https://api.abcz.workers.dev/api/fitlog"
    );

    const data = await response.json();

    return data;
};

const Library = async () => {

    const libraryData = await getLibrary();

    return (
        <section className="container mx-auto my-[70px] px-4">

            <h1 className="mb-8 text-3xl font-bold">
                Workout Library
            </h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

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
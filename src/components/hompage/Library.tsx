import React from 'react';

const getLibrary = async () => {
    const responce = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await responce.json();
    return data;
};

const Library = async () => {
    const libraryData = await getLibrary();
    console.log(libraryData);

    return (
        <div className='container mx-auto my-[70px]'>
            <div className='text-5xl font-bold mb-6'>THE LIBRARY</div>

            {libraryData.map((workout: any, ind: number) => {
                return (
                    <div key={ind}>
                        {workout.name || workout.title}
                    </div>
                );
            })}
        </div>
    );
};

export default Library;
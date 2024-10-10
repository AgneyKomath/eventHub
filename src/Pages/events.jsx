
import React from 'react';
import EventCard from '../components/EventCard';  

const trendingEvents = [
    { id: 1, image: 'https://via.placeholder.com/150', title: 'Garba Eve', date: 'October 3, 2024', location: 'Gargi Plaza' },
    { id: 2, image: 'https://via.placeholder.com/150', title: 'Abhiyantriki 24', date: 'October 11, 2024', location: 'Gargi Plaza' },
];

const musicEvents = [
    { id: 3, image: 'https://via.placeholder.com/150', title: 'KJSCE Ocatvium', date: 'October 15, 2024', location: 'Auditorium' },
    { id: 4, image: 'https://via.placeholder.com/150', title: 'Battle of Bands', date: 'October 16, 2024', location: 'Somaiya Grounds' },
];

const techEvents = [
    { id: 5, image: 'https://via.placeholder.com/150', title: 'Red Shift Showcase', date: 'November 1, 2024', location: 'Gargi Plaza' },
    { id: 6, image: 'https://via.placeholder.com/150', title: 'Team ETA Showcase', date: 'November 3, 2024', location: 'Gargi Plaza' },
];


export default function events() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Events</h1>
            
            {}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Trending Events</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trendingEvents.map((event, index) => (
                        <EventCard
                        key={event.id} 
                        id={event.id} 
                        image={event.image}
                        title={event.title}
                        date={event.date}
                        location={event.location}
                    />
                    ))}
                </div>
            </section>

            {}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Music Events</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {musicEvents.map((event, index) => (
                        <EventCard
                        key={event.id} 
                        id={event.id}  
                        image={event.image}
                        title={event.title}
                        date={event.date}
                        location={event.location}
                    />
                    ))}
                </div>
            </section>

            {}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Technology Events</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techEvents.map((event, index) => (
                        <EventCard
                        key={event.id} 
                        id={event.id}  
                        image={event.image}
                        title={event.title}
                        date={event.date}
                        location={event.location}
                    />
                    ))}
                </div>
            </section>

            {}
        </div>
    );
}

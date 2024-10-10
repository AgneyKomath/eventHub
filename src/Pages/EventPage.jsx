
import React from 'react';
import { useParams } from 'react-router-dom';

const eventData = {
    1: {
        image: 'https://via.placeholder.com/300',
        title: "Trending Event 1",
        date: "October 10, 2024",
        location: "Venue A",
        description: "A detailed description of the trending event 1."
    },
    2: {
        image: 'https://via.placeholder.com/300',
        title: "Trending Event 2",
        date: "October 11, 2024",
        location: "Venue B",
        description: "A detailed description of the trending event 2."
    },
};

export default function EventPage() {
    const { eventId } = useParams(); 

    const event = eventData[eventId];

    if (!event) {
        return <p className="text-center text-gray-500">Event not found.</p>;
    }

    return (
        <div className="min-h-screen p-8 bg-gray-50">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
                <img src={event.image} alt={event.title} className="h-64 w-full object-cover rounded-md mb-6" />
                <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
                <p className="text-gray-600 mb-2">{event.date}</p>
                <p className="text-gray-600 mb-4">{event.location}</p>
                <p className="text-lg text-gray-800">{event.description}</p>

                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-colors duration-300">
                    Book Now
                </button>
            </div>
        </div>
    );
}

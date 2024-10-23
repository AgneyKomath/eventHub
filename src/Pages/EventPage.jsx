
import React from 'react';
import { useParams } from 'react-router-dom';

const eventData = {
    1: {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9g3Gpb_POQZ4QW_ySoO6POL8fcGWN_yiu_w&s",
        title: "Garba Eve",
        date: "October 3, 2024",
        location: "Gargi Plaza",
        description: "Join us for an electrifying garba eve",
    },
    2: {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnNUWICpemOvbUOPkY4TAUVX6pP_SGFQzreA&s",
        title: "Abhiyantriki 2024",
        date: "October 11, 2024",
        location: "Gargi Plaza",
        description: "Showcase your engineering talent by participating in one of the most anticipated tech events in the entirety of Mumbai",
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

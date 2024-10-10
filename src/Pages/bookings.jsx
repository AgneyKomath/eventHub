import React from "react";

function BookedEvent({ image, title, date, location, description }) {
    return (
        <div className="flex sm:flex-row bg-white shadow-md rounded-lg overflow-hidden my-2 mx-2 ml-10">
            {/* Event Image */}
            <div className="w-20% ">
                <img src={image} alt={title} className="w-20% h-36  " />
            </div>

            {/* Event Details */}
            <div className="flex-1 p-4 flex flex-col justify-between">
                <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
                <p className="text-gray-600 text-sm">{date}</p>
                <p className="text-gray-600 text-sm">{location}</p>
                <p className="mt-2 text-gray-800 text-sm sm:text-base">{description}</p>
            </div>
        </div>
    );
}

export default function bookings() {
    const bookedEvents = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9g3Gpb_POQZ4QW_ySoO6POL8fcGWN_yiu_w&s",
            title: "Garba Eve '24",
            date: "October 4, 2024",
            location: "Gargi Plaza",
            description: "Join us for an electrifying Garba eve night",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQItH1ytWMLRi8mqbB6H2kdlu1sRLY_yDzhgg&s",
            title: "Symphony",
            date: "November 10, 2024",
            location: "Somaiya Grounds",
            description: "Experience an amazing cultural festival filled with exciting events",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnNUWICpemOvbUOPkY4TAUVX6pP_SGFQzreA&s",
            title: "Abhiyantriki",
            date: "December 1, 2024",
            location: "Gargi Plaza, Somaiya",
            description: "Showcase your engineering talent by participating in one of the most anticipated tech events in the entirety of Mumbai ",
        },
    ];

    return (
        <div className="p-4 bg-gray-50 min-h-screen">
            <h2 className="text-xl font-bold mb-4 text-center">Booked Events</h2>
            <div className="space-y-3 w-45%">
                {bookedEvents.length > 0 ? (
                    bookedEvents.map((event, index) => (
                        <BookedEvent
                            key={index}
                            image={event.image}
                            title={event.title}
                            date={event.date}
                            location={event.location}
                            description={event.description}
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-500">No events booked yet!</p>
                )}
            </div>
        </div>
    );
}

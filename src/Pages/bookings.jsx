import { useEffect, useState } from "react";
import axios from "axios";

function BookedEvent({ image, title, date, location, description, onDelete }) {
    return (
        <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-xl overflow-hidden my-4 mx-4 ml-20">
            <div className="sm:w-1/3 w-full" style={{ aspectRatio: "1 / 1", maxWidth: "200px" }}>
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 p-6 flex flex-col justify-center sm:justify-between">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Date:</span> {date}
                </p>
                <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Location:</span> {location}
                </p>
                <p className="text-gray-700 mt-2 sm:mt-4 text-sm sm:text-base leading-relaxed">{description}</p>
            </div>
            <button
                onClick={onDelete}
                className="absolute top-4 mr-2 right-4 bg-red-600 text-white font-semibold px-3 py-1 rounded-full shadow-md hover:bg-red-700 transition duration-300"
            >
                Delete
            </button>
        </div>
    );
}

export default function bookings() {
    const [bookedEvents, setBookedEvents] = useState([]);

    const { id: userId } = JSON.parse(localStorage.getItem("user")) || {};    

    useEffect(() => {
        const fetchBookedEvents = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/bookings/${userId}`);
                setBookedEvents(response.data); // Assuming the API returns an array of booked events
            } catch (error) {
                console.error("Error fetching booked events:", error);
            }
        };
        fetchBookedEvents();
    }, [userId]);

    const handleDeleteBooking = async (bookingId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/bookings/${bookingId}`);
            if (response.status === 200) {
                setBookedEvents((prevEvents) => prevEvents.filter((event) => event._id !== bookingId));
                window.location.reload();
            }
        } catch (error) {
            console.error("Error deleting booking:", error);
            alert("Error deleting the booking.");
        }
    };

    
    return (
        <div className="p-4 bg-gray-50 min-h-screen ml-10">
            <h2 className="text-xl font-bold mb-4 text-center">Booked Events</h2>
            <div className="space-y-3 w-45%">
                {bookedEvents.length > 0 ? (
                    bookedEvents.map((event, index) => (
                        <div key={event._id} className="relative">
                            <BookedEvent
                                key={index}
                                image={event.eventId.imageURL}
                                title={event.eventId.title}
                                date={new Date(event.eventId.date).toLocaleDateString()}
                                location={event.eventId.location}
                                description={event.eventId.description}
                                onDelete={() => handleDeleteBooking(event._id)}
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No events booked yet!</p>
                )}
            </div>
        </div>
    );
}

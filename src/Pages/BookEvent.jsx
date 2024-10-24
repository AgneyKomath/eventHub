import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BookEvent() {

    const { id: userId } = JSON.parse(localStorage.getItem("user")) || {};    
    const { id:eventId } = useParams(); 

    const [event, setEvent] = useState({});
    const [isBooked, setIsBooked] = useState(false);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/events/${eventId}`);
                setEvent(response.data); 
            } catch (error) {
                console.error("Error fetching event details:", error);
            }
        };

        fetchEvent();
        const checkBooking = async () => {
            try {
                const bookingResponse = await axios.get(`http://localhost:5000/api/bookings/${userId}/${eventId}`);
                if (bookingResponse.data) {
                    setIsBooked(true);
                }
            } catch (error) {
                if (error.response && error.response.status === 404) {
                } else {
                    console.error("Error checking booking:", error);
                }
            }
        };
        checkBooking();
    }, [eventId,userId]);


    

    if (!event) {
        return <div>No event found</div>;
    }

    const handleBookEvent = async () => {
        try {
            await axios.post("http://localhost:5000/api/bookings", { userId, eventId });
            setIsBooked(true); 
            window.location.reload();
        } catch (error) {
            console.error(error);
            alert("Error booking the event.");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4 ml-10">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
                <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
                <img src={event.imageURL} alt={event.title} className="h-60 w-full object-cover mb-4 rounded-md" />
                <p className="text-gray-700 text-lg mb-2">
                    <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700 text-lg mb-2">
                    <strong>Location:</strong> {event.location}
                </p>
                <p className="text-gray-700 text-lg mb-4">
                    <strong>Description:</strong> {event.description}
                </p>
                <p className="text-gray-700 text-lg mb-4">
                    <strong>Bookings:</strong> {event.bookings}
                </p>

                {isBooked ? (
                    <p className="text-green-600 font-semibold">Booked</p>
                ) : (
                    <button
                        onClick={handleBookEvent}
                        className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
                    >
                        Book Event
                    </button>
                )}
            </div>
        </div>
    );
}

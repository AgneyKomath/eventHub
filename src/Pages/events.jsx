import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import axios from "axios";

export default function Events() {
    const [events, setEvents] = useState([]);
    const [trendingEvents, setTrendingEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/events");
                setEvents(response.data);
            } catch (error) {
                console.error("Error fetching events", error);
            }
        };

        const fetchTrendingEvents = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/events/trending");
                setTrendingEvents(response.data);
            } catch (error) {
                console.error("Error fetching trending events", error);
            }
        };

        fetchEvents();
        fetchTrendingEvents();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 p-8 ml-10">
            <h1 className="text-3xl font-bold text-center mb-8">Events</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Trending Events</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trendingEvents.map((event) => (
                        <EventCard
                            key={event._id}
                            id={event._id}
                            image={event.imageURL}
                            title={event.title}
                            date={new Date(event.date).toDateString()}
                            location={event.location}
                        />
                    ))}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Events</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event) => (
                        <EventCard
                            key={event._id}
                            id={event._id}
                            image={event.imageURL}
                            title={event.title}
                            date={new Date(event.date).toDateString()}
                            location={event.location}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

// src/Pages/Home.jsx
import React, { useEffect, useState } from "react";
import icons from "../assets/icons";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";
import axios from "axios";

export default function Home() {

    const [trendingEvents, setTrendingEvents] = useState([]);

    useEffect(() => {
        const fetchTrendingEvents = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/events/trending");
                setTrendingEvents(response.data);
            } catch (error) {
                console.error("Error fetching trending events", error);
            }
        };

        fetchTrendingEvents();
    }, []);


    return (
        <div className="home flex flex-col items-center min-h-screen bg-gray-100 px-4 md:px-10 ml-10">
            {/* Hero Section */}
            <section className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-10 text-center flex flex-col items-center justify-center rounded-b-2xl shadow-lg">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Manage Your Events Seamlessly</h1>
                <p className="text-lg md:text-xl mb-6 max-w-3xl">
                    Discover, book, and organize events effortlessly with our powerful event management app. Whether it's a concert, a conference, or a private
                    party, we've got you covered.
                </p>
                <Link
                    to="/events"
                    className="bg-white text-purple-600 font-semibold text-lg px-8 py-3 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
                >
                    Explore Events
                </Link>
            </section>

            {/* Features Section */}
            <section className="my-16 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Our Platform?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={icons.home}
                        title="Discover Events"
                        description="Browse through a wide range of events across different categories and locations."
                    />
                    <FeatureCard icon={icons.book} title="Easy Booking" description="Reserve your spot with just a few clicks and get instant confirmations." />
                    <FeatureCard
                        icon={icons.settings}
                        title="Manage & Customize"
                        description="Get personalized recommendations and keep track of your bookings easily."
                    />
                </div>
            </section>

            <section className="w-full bg-gray-50 py-16">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Upcoming Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-16">
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

            <footer className="w-full bg-gray-800 text-gray-400 p-8 text-center mt-8">
                <p className="mb-2">© 2024 Event Management App. All Rights Reserved.</p>
                <p>
                    <a href="#" className="text-white underline">
                        Privacy Policy
                    </a>{" "}
                    |
                    <a href="#" className="text-white underline">
                        Terms of Service
                    </a>
                </p>
            </footer>
        </div>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={icon} alt={title} className="h-16 w-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}


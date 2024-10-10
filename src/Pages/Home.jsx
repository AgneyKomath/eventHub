import React from "react";
import icons from "../assets/icons";

export default function Home() {
    return (
        <div className="home flex flex-col items-center min-h-screen bg-gray-100">
            {/* Hero Section */}
            <section className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-10 text-center flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Manage Your Events Seamlessly</h1>
                <p className="text-lg md:text-xl mb-6 max-w-3xl">
                    Discover, book, and organize events effortlessly with our powerful event management app. Whether it's a concert, a conference, or a private
                    party, we've got you covered.
                </p>
                <button className="bg-white text-purple-600 font-semibold text-lg px-8 py-3 rounded-full shadow-md hover:bg-gray-200 transition duration-300">
                    Explore Events
                </button>
            </section>

            {/* Features Section */}
            <section className="my-16 px-4 sm:px-8 lg:px-16 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Our Platform?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

            {/* Upcoming Events Section */}
            <section className="w-full bg-gray-50 py-16 px-4 sm:px-8 lg:px-16">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Upcoming Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <EventCard
                        image="https://via.placeholder.com/150"
                        title="Garba Eve '24"
                        date="October 3, 2024"
                        location="Gargi Plaza"
                        description="Join us for an electrifying Garba eve night"
                    />
                    <EventCard
                        image="https://via.placeholder.com/150"
                        title="Symphony"
                        date="November 10, 2024"
                        location="Somaiya Grounds"
                        description="Experience an amazing cultural festival filled with exciting events"
                    />
                    <EventCard
                        image="https://via.placeholder.com/150"
                        title="Abhiyantriki"
                        date="December 1, 2024"
                        location="Gargi Plaza, Somaiya"
                        description="Showcase your engineering talent by participating in one of the most anticipated tech events in the entirety of Mumbai"
                    />
                </div>
            </section>

            <footer className="w-full bg-gray-800 text-gray-400 p-8 text-center">
                <p className="mb-2">© 2024 Event Management App. All Rights Reserved.</p>
                <p>
                    <a href="#" className="text-white underline">
                        Privacy Policy
                    </a>{" "}
                    |{" "}
                    <a href="#" className="text-white underline">
                        Terms of Service
                    </a>
                </p>
            </footer>
        </div>
    );
}

// Reusable Feature Card Component
function FeatureCard({ icon, title, description }) {
    return (
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={icon} alt={title} className="h-16 w-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}

// Reusable Event Card Component
function EventCard({ image, title, date, location }) {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={image} alt={title} className="h-48 w-full object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-600">{date}</p>
                <p className="text-gray-600">{location}</p>
            </div>
        </div>
    );
}

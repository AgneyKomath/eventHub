
import { Link } from 'react-router-dom';

function EventCard({ id, image, title, date, location }) {
    return (
        <div
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 "
            style={{  maxWidth: "400px" }}
        >
            <Link to={`/events/${id}`} className="block">
                <div className="w-full" style={{ aspectRatio: "1 / 1", maxWidth: "400px" }}>
                    {" "}
                    {/* Set max width here */}
                    <img src={image} alt={title} className="h-full w-full object-cover" />
                </div>
                <div className="p-4">
                    <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
                    <p className="text-gray-500">{date}</p>
                    <p className="text-gray-500">{location}</p>
                </div>
            </Link>
        </div>
    );
}

export default EventCard;

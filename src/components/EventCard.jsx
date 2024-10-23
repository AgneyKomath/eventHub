
import { Link } from 'react-router-dom';

function EventCard({ id, image, title, date, location }) {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <Link to={`/events/${id}`} className="block">
                {}
                <img src={image} alt={title} className="h-40 w-full object-cover" />
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

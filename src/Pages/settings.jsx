import { useAuth } from "../context/AuthContext"; 
import { useNavigate } from "react-router-dom";
import icons from "../assets/icons";

export default function Settings() {
    const { user, logout } = useAuth(); 
    const navigate = useNavigate(); 

    const handleLogout = () => {
        logout(); 
        navigate("/login"); 
        window.location.reload();
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                        <img src={icons.userProfile} alt="User avatar" className="w-full h-full object-cover" />
                    </div>

                    <h2 className="text-3xl font-bold text-gray-800 mb-2">{user?.username || "User"}</h2>
                </div>

                <div className="text-center mb-8">
                    <p className="text-gray-600 text-lg">
                        <strong>Email:</strong> {user?.email || "user@example.com"}
                    </p>
                </div>

                <div className="flex justify-center space-x-4">
                    {/* <button className="bg-red-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300">
                        Report a problem
                    </button> */}
                    <button
                        onClick={handleLogout} 
                        className="bg-red-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
                    >
                        Sign out
                    </button>
                </div>
            </div>
        </div>
    );
}

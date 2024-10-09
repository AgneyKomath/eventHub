import { Route, Routes } from "react-router-dom";

import SideBarMain from "./components/SidebarMenu";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Bookings from "./Pages/bookings";
import WishList from "./Pages/WishList";
import Settings from "./Pages/Settings";

import "./index.css";


export default function App() {
    return (
        <div className="flex">
            <div className="mr-5">
                <SideBarMain />
            </div>

            <div className="flex-grow p-6">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/bookings" element={<Bookings />} />
                    <Route path="/wishlist" element={<WishList />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </div>
    );
}

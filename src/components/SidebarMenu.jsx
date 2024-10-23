import { SidebarItem, Sidebar } from "./Sidebar";
import { Link, useLocation } from "react-router-dom";
import icons from "../assets/icons";

export default function SidebarMenu() {
    const location = useLocation();

    const currentPath = location.pathname;
    return (
        <Sidebar>
            <SidebarItem icon={icons.home} text="Home" to="/home" active={currentPath === "/home"} />
            <SidebarItem icon={icons.events} text="Events" to="/events" active={currentPath === "/events"} />
            <SidebarItem icon={icons.book} text="Bookings" to="/bookings" active={currentPath === "/bookings"} />
            {/* <SidebarItem icon={icons.heart} text="WishList" to="/wishlist" active={currentPath === "/wishlist"} /> */}
            <hr className="my-3" />
            <SidebarItem icon={icons.settings} text="Settings" to="/settings" active={currentPath === "/settings"} />
        </Sidebar>
    );
}

import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

import { useEffect } from "react";

import SideBarMain from "./components/SidebarMenu";
import Home from "./Pages/Home";
import Events from "./Pages/events";
import Bookings from "./Pages/bookings";
// import WishList from "./Pages/WishList";
import Settings from "./Pages/Settings";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";

import "./index.css";
import EventPage from "./Pages/BookEvent";

export default function App() {
    return (
        <div className="flex">
            <div className="mr-5">
                <SideBarMain />
            </div>
            <div className="flex-grow p-6">
                <AuthProvider>
                    <Routes>
                        {/* Landing Page redirects */}
                        <Route
                            path="/"
                            element={
                                <RequireAuth redirectTo="/login">
                                    <Home />
                                </RequireAuth>
                            }
                        />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />

                        {/* Other routes wrapped with authentication check */}
                        <Route
                            path="/home"
                            element={
                                <RequireAuth redirectTo="/login">
                                    <Home />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="/events"
                            element={
                                <RequireAuth redirectTo="/login">
                                    <Events />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="/bookings"
                            element={
                                <RequireAuth redirectTo="/login">
                                    <Bookings />
                                </RequireAuth>
                            }
                        />
                        {/* <Route
                            path="/wishlist"
                            element={
                                <RequireAuth redirectTo="/login">
                                    <WishList />
                                </RequireAuth>
                            }
                        /> */}
                        <Route
                            path="/settings"
                            element={
                                <RequireAuth redirectTo="/login">
                                    <Settings />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="/events/:id"
                            component={EventPage}
                            element={
                                <RequireAuth redirectTo="/login">
                                    <EventPage />
                                </RequireAuth>
                            }
                        />
                    </Routes>
                </AuthProvider>
            </div>
        </div>
    );
}

function RequireAuth({ children, redirectTo }) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

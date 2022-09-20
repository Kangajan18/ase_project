import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInSide from "./pages/SignInSide";
import CustomerSignUp from "./pages/CustomerSignUp";
import AdminSignUp from "./pages/AdminSignUp";
import ClerkSignUp from "./pages/ClerkSignUp";
import DevideCustomer from "./pages/DevideCustomer";
import Home from "./pages/Home";
import TravelAgentSignUp from "./pages/TravelAgentSignUp";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";
import AdminDashBoard from "./pages/AdminDashBoard";
import ClarkDashBoard from "./pages/ClarkDashBoard";
import ReservationUpdate from "./pages/ReservationUpdate";
import MyReservation from "./pages/MyReservation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<SignInSide />} />
        <Route path="/customerSignUp" element={<CustomerSignUp />} />
        <Route path="/adminSignup" element={<AdminSignUp />} />
        <Route path="/clerkSignup" element={<ClerkSignUp />} />
        <Route path="/devideCustomer" element={<DevideCustomer />} />
        <Route path="/travelAgentSignUp" element={<TravelAgentSignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/adminDashBoard" element={<AdminDashBoard />} />
        <Route path="/clarkDashBoard" element={<ClarkDashBoard />} />
        <Route path="/reservationupdate" element={<ReservationUpdate />} />
        <Route path="/myReservation" element={<MyReservation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

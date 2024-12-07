import React from "react";
import {Route, Routes} from "react-router-dom";

// MIDDLEWARE
import PrivateRoute from "./function/middleware";

// PAGES
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forget from "./pages/Forget";
import Otp from "./pages/Otp";
import Changepassword from "./pages/Changepassword";
import SeatBooking from "./pages/film/seat/index";
import MovieDetails from "./pages/film";
import Dashboard from "./pages";
import LocationList from "./pages/Theatre";
import ProductList from "./pages/food-and-beverage";
import ProfileCard from "./pages/Profile";
import NotFoundPage from "./pages/NotFound";
import Upcoming from "./pages/Upcoming";

function App() {

    return (
        <Routes>
            <Route path={"/login"} element={<PrivateRoute element={<Login/>}/>}/>
            <Route path={"/register"} element={<PrivateRoute element={<Register/>}/>}/>
            <Route path={"/forget-password"} element={<Forget/>}/>
            <Route path={"/otp"} element={<Otp/>}/>
            <Route path={"/changepassword"} element={<Changepassword/>}/>
            <Route path={"/film/:id"} element={<MovieDetails/>}/>
            <Route path={"/film/:id/:seat_id"} element={<SeatBooking/>}/>
            <Route path={"/"} element={<Dashboard/>}/>
            <Route path={"/theatre"} element={<LocationList/>}/>
            <Route path={"/food-and-beverage"} element={<ProductList/>}/>
            <Route path={"/profile"} element={<ProfileCard/>}/>
            <Route path={"/upcoming"} element={<Upcoming/>}/>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;

import React, { useRef, useState, useEffect } from "react";


// ICON
import { UserPlus, CaretDown, SignIn, House, FilmReel , Popcorn , UserCircle, SignOut, User } from "@phosphor-icons/react";

// ROUTER
import check_token from "../function/function";
import {checkButton} from "../function/swal";


export default function Navbar() {

    const ref = useRef();

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [loop, setLoop] = useState(true)
    const [token, setToken] = useState("")

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token")
        localStorage.removeItem("email")
        localStorage.removeItem("id")
        localStorage.removeItem("username")
        localStorage.removeItem("phone")

        window.location.href = "/login"

        setDropdownOpen(false)
    }

    useEffect(() => {
        if (loop) {
            const getToken = localStorage.getItem("token")
            check_token(getToken).then(res => {
                setToken(res)
            })
            setLoop(true)
        }
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [loop]);

    const handleCheck = (e) => {
        e.preventDefault();
        if (token === false) {
            checkButton("Login", "You must login", "error").then(res => {
                if (res.status) {
                    window.location.href = `/login`
                }
            })
        } else {
            window.location.href = `/food-and-beverage`
        }
    }

    return (
        <>
            <nav className="shadow-lg">
                <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-3">
                    <div className="text-2xl font-bold text-primary">
                        <a href="/" className="flex gap-2 items-center">
                            <img
                                src="/LUXCinema.png"
                                alt="LUX Cinema"
                                className="w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 object-cover"
                            />
                            <span className="text-md md:text-xl lg:text-2xl">LUX Cinema</span>
                        </a>
                    </div>
                    <ul className="hidden md:flex space-x-6 text-white font-medium">
                        <li>
                            <a href="/" className="hovertext-primary">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/theatre" className="hovertext-primary">
                                Theatre
                            </a>
                        </li>
                        <li>
                            <a href="/upcoming" className="hovertext-primary">
                                Upcoming
                            </a>
                        </li>
                        <li>
                            <button onClick={handleCheck} className="hovertext-primary">
                                Food And Beverage
                            </button>
                        </li>
                    </ul>
                    <div className="relative" ref={ref}>
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full shadow-md hover:bg-orange-500"
                        >
                            {token === true ? <><User className="mr-2 text-white" />{localStorage.getItem("username")}</> : <span className="mr-2">LUX</span>}
                            <CaretDown
                                size={20}
                                className={`transition-transform ${dropdownOpen ? "rotate-180" : "rotate-0"
                                    }`}
                            />
                        </button>
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                                {token === true ? (
                                    <>
                                        <a
                                            href="/profile"
                                            className="flex items-center px-4 py-2 hover:bg-gray-100"
                                        >
                                            <User className="mr-2 text-primary" />
                                            Profile
                                        </a>
                                        <button
                                            onClick={handleLogout}
                                            className="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
                                        >
                                            <SignOut className="mr-2 text-primary" />
                                            Logout
                                        </button>
                                    </>
                                ) : (<>
                                    <a
                                        href="/login"
                                        className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-t-lg"
                                    >
                                        <UserPlus className="mr-2 text-primary" />
                                        Login
                                    </a>
                                    <a
                                        href="/register"
                                        className="flex items-center px-4 py-2 hover:bg-gray-100"
                                    >
                                        <SignIn className="mr-2 text-primary" />
                                        Registration
                                    </a>
                                </>)}
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            <div
                className="z-50 fixed bottom-0 w-full bg-gray-800 shadow-lg md:hidden flex justify-around items-center py-2">
                <a href="/" className="flex flex-col items-center text-white hover:text-orange-500">
                    <House size={28} />
                    <span className="text-xs ">Home</span>
                </a>
                <a href="theatre"  className="flex flex-col items-center text-white hover:text-orange-500">
                    <FilmReel  size={28} />
                    <span className="text-xs ">Theatre</span>
                </a>
                <button onClick={handleCheck} className="flex flex-col items-center text-white hover:text-orange-500">
                    <Popcorn  size={28} />
                    <span className="text-xs ">Food</span>
                </button>
                <a href="/profile" className="flex flex-col items-center text-white hover:text-orange-500">
                    <UserCircle size={28} />
                    <span className="text-xs ">Profile</span>
                </a>
            </div>
        </>
    )
}
import React, {useState, useCallback, useEffect, useRef} from "react";
import {useParams} from "react-router-dom";

// ICON
import {Clock, User, Camera, Pen, UsersThree, Heart} from "@phosphor-icons/react";

// HELPER
import apiJson from "../../function/axios";
import check_token from "../../function/function";
import {checkButton} from "../../function/swal";

const MovieDetails = () => {

    const {id} = useParams();

    const [movie, setMovie] = useState([]);
    const [theatre, setTheatre] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const [token, setToken] = useState("")
    const [isPlay, setIsPlay] = useState(false)
    const [loop, setLoop] = useState(true)

    const theatreRef = useRef(null);

    const getData = useCallback(async () => {
        const response = await apiJson.get(`/film/view?id=${id}`);
        if (response?.data?.status) {
            setMovie(response?.data?.data?.data);
        } else {
            window.location.href = "/";
        }

        const responseTheatre = await apiJson.get(`/theatre/view?film_id=${id}`);
        if (responseTheatre?.data?.status) {
            setTheatre(responseTheatre?.data?.data);
        }
        setLoop(false)
    }, [id]);

    useEffect(() => {
        if (loop) {
            getData();

            const getToken = localStorage.getItem("token")
            check_token(getToken).then(res => {
                setToken(res)
            })
        }
    }, [getData, loop]);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const togglePlay = () => {
        setIsPlay(!isPlay);
        if (theatreRef.current && isPlay === false) {
            theatreRef.current.scrollIntoView({behavior: "smooth"}); // Scroll ke bagian teater
        }
    };

    const handleCheck = (e, time) => {
        e.preventDefault();
        if (token === false) {
            checkButton("Login", "You must login", "error").then(res => {
                if (res.status) {
                    window.location.href = `/login`
                }
            })
        } else {
            window.location.href = `/film/${id}/${time?.playtime_id}`
        }
    }

    const shortDescriptionLength = 120;

    const timestamp = Date.now();
    const date = new Date(timestamp);

    const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;

    return (
        <div className="flex justify-center items-center py-10 px-4 mb-20">
            <div
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-6 w-full max-w-3xl text-white">

                <div className="flex items-center space-x-4 mb-6">
                    <div
                        className="flex-shrink-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg w-16 h-16 flex items-center justify-center rounded-full shadow-md">
                        {movie.rating}
                    </div>
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold">{movie?.title}</h1>
                        <p className="text-gray-300 text-sm mt-1">{movie?.genres?.join(", ")}</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-6 items-start">
                    <img
                        src={`${process.env.REACT_APP_PANEL_WEBSITE}/storage/` + movie?.image}
                        alt={movie?.title}
                        className="w-full md:w-48 h-auto rounded-lg shadow-lg"
                    />
                    <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                            <p className="text-sm flex items-center">
                                <Clock size={20} className="mr-2 text-gray-400"/>
                                {movie.duration}
                            </p>
                            <span
                                className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm rounded-lg shadow-md">
               {movie.type}
              </span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            {movie?.status !== "Up-Coming" && (
                                <button
                                    onClick={togglePlay}
                                    href={`/film/${id}/theatre`}
                                    className={`px-5 py-2 text-sm font-semibold bg-green-500 rounded-lg shadow-md hover:bg-green-400 transition`}
                                >
                                    PLAYING AT
                                </button>
                            )}
                            <a
                                href={movie?.link_trailers}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-center px-5 py-2 text-sm font-semibold bg-red-500 rounded-lg shadow-md hover:bg-red-400 transition"
                            >
                                TRAILER
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <h2 className="text-lg font-semibold mb-2">Synopsis</h2>
                    <p className="text-gray-300">
                        {isExpanded || movie?.synopsis?.length <= shortDescriptionLength
                            ? movie?.synopsis
                            : `${movie?.synopsis?.substring(0, shortDescriptionLength)}...`}
                        {movie?.synopsis?.length > shortDescriptionLength && (
                            <button
                                onClick={toggleReadMore}
                                className="text-blue-400 ml-2 hover:underline"
                            >
                                {isExpanded ? "Show less" : "Read more"}
                            </button>
                        )}
                    </p>
                </div>

                <div className="mt-6 border-t border-gray-700 pt-6">
                    <h2 className="text-lg font-semibold mb-4 text-gray-200">Details</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        <div className="flex items-center">
                            <div
                                className="w-10 h-10 flex justify-center items-center bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full shadow-md">
                                <i>
                                    <User size={20} weight="bold"/>
                                </i>
                            </div>
                            <div className="ml-3">
                                <p className="text-gray-400 text-sm">Producer</p>
                                <p className="text-white font-medium">{movie?.producer || "N/A"}</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div
                                className="w-10 h-10 flex justify-center items-center bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full shadow-md">
                                <i>
                                    <Camera size={20} weight="bold"/>
                                </i>
                            </div>
                            <div className="ml-3">
                                <p className="text-gray-400 text-sm">Director</p>
                                <p className="text-white font-medium">{movie?.director || "N/A"}</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div
                                className="w-10 h-10 flex justify-center items-center bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full shadow-md">
                                <i>
                                    <Pen size={20} weight="bold"/>
                                </i>
                            </div>
                            <div className="ml-3">
                                <p className="text-gray-400 text-sm">Writer</p>
                                <p className="text-white font-medium">{movie?.writer || "N/A"}</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div
                                className="w-10 h-10 flex justify-center items-center bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full shadow-md">
                                <i>
                                    <UsersThree size={20} weight="bold"/>
                                </i>
                            </div>
                            <div className="ml-3">
                                <p className="text-gray-400 text-sm">Cast</p>
                                <p className="text-white font-medium">{movie?.cast || "N/A"}</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div
                                className="w-10 h-10 flex justify-center items-center bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full shadow-md">
                                <i>
                                    <Heart size={20} weight="bold"/>
                                </i>
                            </div>
                            <div className="ml-3">
                                <p className="text-gray-400 text-sm">Genre</p>
                                <p className="text-white font-medium">
                                    {movie?.genre ? JSON.parse(movie?.genre).join(", ") : "No genre available"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={`h-80 overflow-auto max-h-[400px] space-y-4 pr-2 mt-8 ${isPlay ? "" : "hidden"}`}>
                    {theatre?.theatre?.map((res) => (
                        <div key={res.id} className="bg-gray-700 rounded-lg p-4 shadow-lg">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-semibold text-white truncate">
                                        {res.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">{formattedDate}</p>
                                </div>
                                <p className="text-lg font-bold text-white">
                                    Rp {res.price.toLocaleString()}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 mt-4">
                                {res?.playtimes
                                    ?.sort((a, b) => {
                                        const timeA = new Date(`1970-01-01T${a.playtime}`);
                                        const timeB = new Date(`1970-01-01T${b.playtime}`);
                                        return timeA - timeB;
                                    })
                                    .map((time, index) => {
                                        const [hours, minutes, seconds] = time?.playtime.split(":");
                                        const playtimeDate = new Date();
                                        playtimeDate.setHours(Number(hours), Number(minutes), Number(seconds), 0);

                                        const currentTime = new Date();

                                        const isDisabled = playtimeDate < currentTime;

                                        return (
                                            <button
                                                onClick={(e) => handleCheck(e, time)}
                                                key={index}
                                                disabled={isDisabled}
                                                className={`px-6 py-2 text-sm font-medium rounded-lg shadow transition ${
                                                    isDisabled
                                                        ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                                                        : "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-md"
                                                }`}
                                            >
                                                {time?.playtime}
                                            </button>
                                        );
                                    })}
                            </div>

                        </div>
                    ))}
                </div>
                <div ref={theatreRef}>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;

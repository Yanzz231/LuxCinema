import React, {useState, useCallback, useEffect} from "react";
import {useSearchParams} from "react-router-dom";

// COMPONENTS
import CardFilm from "../components/Card";

// HELPER
import apiJson from "../function/axios";
import {checkButton} from "../function/swal";
import check_token from "../function/function";

const Dashboard = () => {

    const [searchParams] = useSearchParams();

    const popup = searchParams.get("popup");

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loop, setLoop] = useState(true);
    const [token, setToken] = useState("")

    const getData = useCallback(async (page) => {
        setLoading(true);
        try {
            const response = await apiJson.get(`/film/view?type=Now-Showing`);
            if (response?.data?.status) {
                setMovies(response?.data?.data?.data || []);
                // setTotalPages(response?.data?.data?.totalPages || 1);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (loop) {
            const getToken = localStorage.getItem("token")
            if (popup === "true") {
                checkButton("Want to buy some food?", "", "success").then(async (res) => {
                    if (res?.status) {
                        check_token(getToken).then(res => {
                            setToken(res)
                            if (res === false) {
                                checkButton("Login", "You must login", "error").then((res) => {
                                    if (res.status) {
                                        window.location.href = `/login`;
                                    }  else if (res?.status === false) {
                                        window.location.href = `/`;
                                    }
                                });
                            } else {
                                window.location.href = `/food-and-beverage`;
                            }
                        })
                    } else if (res?.status === false) {
                        window.location.href = "/";
                    }
                });
                setLoop(false)
            }
        }

        getData();
    }, [getData, popup, loop, token]);


    // const handleNextPage = () => {
    //     if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    // };
    //
    // const handlePrevPage = () => {
    //     if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    // };

    return (
        <div className="mx-auto container mb-24">

            <header className="text-center mb-10 my-16 mx-4 mx-4 lg:mx-40">
                <img className="w-full h-36 lg:h-64 rounded-lg" src="/story.png" alt=""/>
            </header>

            <div className="flex mb-8 mx-4 lg:mx-40">
                <h1 className="text-white lg:text-3xl md:text-2xl text-xl font-medium">CURRENTLY SHOWING</h1>
            </div>

            <div className="flex justify-center items-center">
                {loading ? (
                    <p className="text-white">Loading...</p>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-4 justify-center lg:mx-40">
                        {movies?.show?.map((movie, index) => (
                            <CardFilm key={index} index={index} movie={movie}/>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex mb-8 mx-4 lg:mx-40 mt-8">
                <h1 className="text-white lg:text-3xl md:text-2xl text-xl font-medium">UPCOMING</h1>
            </div>

            <div className="flex justify-center items-center">
                {loading ? (
                    <p className="text-white">Loading...</p>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-4 justify-center lg:mx-40">
                        {movies?.upcoming?.map((movie, index) => (
                            <CardFilm key={index} index={index} movie={movie}/>
                        ))}
                    </div>
                )}
            </div>


        </div>
    );
};

export default Dashboard;

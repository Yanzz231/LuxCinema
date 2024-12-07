import React, {useState, useCallback, useEffect} from "react";

// COMPONENTS
import CardFilm from "../components/Card";

// HELPER
import apiJson from "../function/axios";

const Upcoming = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loop, setLoop] = useState(true);

    const getData = useCallback(async (page) => {
        setLoading(true);
        try {
            const response = await apiJson.get(`/film/view?type=Now-Showing`);
            if (response?.data?.status) {
                setMovies(response?.data?.data?.data || []);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
        setLoop(false)
    }, []);

    useEffect(() => {
        getData();
    }, [getData, loop]);


    // const handleNextPage = () => {
    //     if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    // };
    //
    // const handlePrevPage = () => {
    //     if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    // };

    return (
        <div className="mx-auto container mb-24">

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

export default Upcoming;

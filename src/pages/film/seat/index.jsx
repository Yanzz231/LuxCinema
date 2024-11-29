import React, {useState, useEffect, useCallback} from "react";
import {useParams} from "react-router-dom";

// HELPER
import check_token from "../../../../function/function";
import apiJson from "../../../../function/axios";
import {checkButton, textPopUp} from "../../../../function/swal";


const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const seatsPerRow = 10;

const SeatBooking = () => {
    const {id, seat_id} = useParams();

    const [selectedSeats, setSelectedSeats] = useState([]);
    const [bookedSeats, setBookedSeats] = useState([]);
    const [onBookingSeats, setOnBookingSeats] = useState([]);
    const [loop, setLoop] = useState(true)
    const [token, setToken] = useState("")
    const [data, setData] = useState([])

    const getData = useCallback(async () => {
        const response = await apiJson.get(`/playtime/view?id=${seat_id}`);
        if (response?.data?.status) {
            setData(response?.data?.data);
        } else {
            window.location.href = `/film/${id}/theatre`
        }

        const responseSeats = await apiJson.get(`/transction/view?id=${seat_id}`);
        if (responseSeats?.data?.data?.completed?.length >= 1) {
            const seatCompeted = responseSeats?.data?.data?.completed?.map(item => item.seat);
            setBookedSeats(seatCompeted);
        }

        if (responseSeats?.data?.data?.pending?.length >= 1) {
            const seatPanding = responseSeats?.data?.data?.pending?.map(item => item.seat);
            setOnBookingSeats(seatPanding);
        }
    }, [id, seat_id]);


    useEffect(() => {
        if (loop) {
            getData()
            const getToken = localStorage.getItem("token")
            check_token(getToken).then(res => {
                if (res === false) return window.location.href = `/film/${id}/theatre`
                setToken(res)
            })
            setLoop(false)
        }
    }, [loop, id, getData, token]);

    const toggleSeatSelection = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter((s) => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    const handleConfirmOrder = (e) => {
        e.preventDefault()
        if (selectedSeats.length > 0) {
            checkButton("Are you sure?", "Check again your seat", "success").then(async (res) => {
                if (res.status) {
                    const response = await apiJson.post(`/transction/create`, {
                        username: localStorage.getItem("username"),
                        email: localStorage.getItem("email"),
                        theatre: data[0].theater.name,
                        data_seat: selectedSeats,
                        seat_id: parseInt(seat_id),
                        film_id: parseInt(id),
                        user_id: parseInt(localStorage.getItem("id")),
                        total_price: data[0]?.theater.price * selectedSeats.length,
                        quantity: selectedSeats.length,
                        price: data[0]?.theater.price
                    })
                    console.log(response?.data?.data)

                    setSelectedSeats([])
                    window.location.href = response?.data?.data?.redirect_url;
                }
            })
        } else {
            return textPopUp("Error", "Choose your seat", "error")
        }
    };

    const renderSeat = (seat) => {
        let bgColor = "bg-green-500";
        if (bookedSeats.includes(seat)) bgColor = "bg-gray-400 cursor-not-allowed";
        else if (onBookingSeats.includes(seat)) bgColor = "bg-yellow-400 cursor-not-allowed";
        else if (selectedSeats.includes(seat)) bgColor = "bg-blue-500";

        return (
            <button
                key={seat}
                onClick={() => toggleSeatSelection(seat)}
                disabled={bookedSeats.includes(seat)}
                className={`${bgColor} hover:bg-opacity-90 flex items-center justify-center text-xs sm:text-sm font-semibold text-white w-8 h-8 sm:w-12 sm:h-12 m-1 rounded-md shadow-md transform hover:scale-105 transition-all duration-200`}
            >
                {seat}
            </button>
        );
    };

    const timestamp = Date.now();
    const date = new Date(timestamp);

    const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;


    return (
        <div className="text-white min-h-screen p-4 sm:p-6 flex flex-col items-center font-sans mb-24">

            <header className="text-center mb-6">
                <h1 className="text-xl sm:text-3xl font-bold">{data[0]?.film?.title}</h1>
                <p className="mt-2 text-sm sm:text-lg text-gray-300">
                    Cinema: {data[0]?.theater.name} <br/>
                    Date: {formattedDate} | {data[0]?.time}
                </p>
            </header>

            <div
                className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-3xl flex justify-center items-center flex-col">
                <div className="grid grid-cols-10 gap-2 justify-center">
                    {rows.map((row) =>
                        [...Array(seatsPerRow)].map((_, index) => {
                            const seat = `${row}${index + 1}`;
                            return renderSeat(seat);
                        })
                    )}
                </div>
                <p className="text-lg sm:text-xl mt-4 font-semibold text-gray-400 text-center">
                    SCREEN
                </p>
            </div>

            <div className="flex flex-wrap justify-center mt-6 gap-6 text-sm sm:text-base">
                <div className="flex items-center">
                    <div className="bg-green-500 w-5 h-5 sm:w-6 sm:h-6 mr-2 rounded-md"></div>
                    <p>Available</p>
                </div>
                <div className="flex items-center">
                    <div className="bg-blue-500 w-5 h-5 sm:w-6 sm:h-6 mr-2 rounded-md"></div>
                    <p>Your Seats</p>
                </div>
                <div className="flex items-center">
                    <div className="bg-yellow-400 w-5 h-5 sm:w-6 sm:h-6 mr-2 rounded-md"></div>
                    <p>On Booking</p>
                </div>
                <div className="flex items-center">
                    <div className="bg-gray-400 w-5 h-5 sm:w-6 sm:h-6 mr-2 rounded-md"></div>
                    <p>Sold</p>
                </div>
            </div>

            <div className="mt-8 flex gap-4">
                <button onClick={handleConfirmOrder}
                        className="bg-blue-500 px-6 py-3 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-200">
                    Order
                </button>
            </div>

            <footer className="mt-6 text-gray-400 text-center text-sm">
                *Sistem tidak akan memungkinkan Anda untuk meninggalkan satu kursi kosong
                di antara kursi yang sudah dipilih.
            </footer>
        </div>
    );
};

export default SeatBooking;

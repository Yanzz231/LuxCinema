import React, {useState, useRef, useEffect, useCallback} from 'react';

// ICONS
import {ShoppingCart, Plus, Minus} from '@phosphor-icons/react';

// HELPER
import apiJson from "../function/axios";
import check_token from "../function/function";
import {checkButton, textPopUp} from "../function/swal";

export default function ProductList() {
    const cartRef = useRef(null);

    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [data, setData] = useState([]);
    const [loop, setLoop] = useState(true);
    const [token, setToken] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false); // For showing the pickup time modal
    const [pickupTime, setPickupTime] = useState(""); // Store the selected pickup time
    const [theatre, setTheatre] = useState([])
    const [selectedTheatre, setSelectedTheatre] = useState("");

    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);
        if (existingItem) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? {...item, quantity: item.quantity + 1}
                        : item
                )
            );
        } else if (!existingItem) {
            setCart([...cart, {...product, quantity: 1}]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(
            cart
                .map((item) =>
                    item.id === productId
                        ? {...item, quantity: item.quantity - 1}
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleOrder = (e) => {
        e.preventDefault();
        if (cart.length === 0) {
            return textPopUp("Error", "Choose your food", "error")
        }
        setIsModalOpen(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cart.length > 0 && pickupTime !== "" && selectedTheatre !== "") {
            checkButton("Are you sure?", "Recheck your order", "success").then(async (res) => {
                if (res.status) {
                    const response = await apiJson.post(`/transction/create-food`, {
                        username: localStorage.getItem("username"),
                        email: localStorage.getItem("email"),
                        user_id: parseInt(localStorage.getItem("id")),
                        total_price: calculateTotal(),
                        data_food: cart,
                        pickup_time: pickupTime,
                        theatre_id: selectedTheatre.id,
                        theatre_name: selectedTheatre.name,
                        phone: localStorage.getItem("phone")
                    })

                    setCart([]);
                    setPickupTime("");
                    setIsCartOpen(false);
                    setIsModalOpen(!isModalOpen)

                    window.location.href = response?.data?.data?.redirect_url;
                }
            })
        } else {
            return textPopUp("Error", "Input all field", "error")
        }
    };

    const getData = useCallback(async (page) => {
        try {
            const response = await apiJson.get(`/menu/view`);
            if (response?.data?.status) {
                setData(response?.data?.data);
            }

            const responseTheatre = await apiJson.get(`/theatre/view`);
            if (responseTheatre?.data?.status) {
                setTheatre(responseTheatre?.data?.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setLoop(false);
    }, []);

    useEffect(() => {
        if (loop) {
            getData();

            const getToken = localStorage.getItem("token");
            check_token(getToken).then((res) => {
                if (res === false) return (window.location.href = `/`);
                setToken(res);
            });
        }
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setIsCartOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [loop, getData, token]);

    const categories = ["Combo", "Snack", "Drinks", "Food"];

    return (
        <div className="container mx-auto py-10 px-4 text-white">
            <h1 className="text-3xl font-bold mb-8">Daftar Makanan</h1>

            {categories.map((category) => (
                <div key={category} className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">{category}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data
                            .filter((product) => product.type === category)
                            .map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-gray-800 rounded-lg shadow-lg p-4 relative group"
                                >
                                    <img
                                        src={`${process.env.REACT_APP_PANEL_WEBSITE}/storage/` + product.image}
                                        alt={product.name}
                                        className="w-full h-56 object-cover rounded-md mb-4"
                                    />
                                    <div className="flex flex-col justify-between h-full">
                                        <div>
                                            <h3 className="text-xl font-semibold truncate">
                                                {product.name}
                                            </h3>
                                            <p className="text-sm text-gray-400 mt-2 truncate">
                                                {product.description}
                                            </p>
                                            <div className="mt-4 flex justify-between items-center">
                                                <p className="text-lg font-semibold">
                                                    Rp {product.price.toLocaleString()}
                                                </p>
                                                <button
                                                    onClick={() => addToCart(product)}
                                                    className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition"
                                                >
                                                    Pesan
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            ))}

            <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="fixed bottom-20 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-500 transition flex items-center"
            >
                <ShoppingCart size={24}/>
                {cart.length > 0 && (
                    <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        {cart.reduce((total, item) => total + item.quantity, 0)}
                    </span>
                )}
            </button>

            {isCartOpen && (
                <div
                    ref={cartRef}
                    className="fixed bottom-20 right-6 bg-gray-800 rounded-lg shadow-lg w-72 p-4 z-50"
                >
                    <h2 className="text-xl font-bold mb-4">Your Cart</h2>
                    {cart.length > 0 ? (
                        <ul className="space-y-4 max-h-60 overflow-y-auto">
                            {cart.map((item) => (
                                <li key={item.id} className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg font-bold">{item.name}</h3>
                                        <p className="text-sm text-gray-400">
                                            Rp {item.price.toLocaleString()} x {item.quantity}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="p-1 bg-red-600 text-white rounded-full hover:bg-red-500 transition"
                                        >
                                            <Minus size={16}/>
                                        </button>
                                        <button
                                            onClick={() => addToCart(item)}
                                            className="p-1 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition"
                                        >
                                            <Plus size={16}/>
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-400 text-center">Your cart is empty.</p>
                    )}
                    <div className="mt-4 flex justify-between items-center">
            <span className="font-bold text-lg">
                Total: Rp {calculateTotal().toLocaleString()}
            </span>
                        <button
                            className="w-1/2 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-500 transition"
                            onClick={handleOrder}
                        >
                            ORDER SEKARANG
                        </button>
                    </div>
                </div>
            )}


            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg w-80">
                        <h2 className="text-xl font-semibold mb-4 text-black">Select Pickup Time</h2>
                        <input
                            type="time"
                            value={pickupTime}
                            onChange={(e) => setPickupTime(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md mb-4 text-black"
                        />

                        <select
                            value={selectedTheatre}
                            onChange={(e) => setSelectedTheatre(JSON.parse(e.target.value))}
                            className="w-full p-2 border border-gray-300 rounded-md mb-4 text-black"
                        >
                            <option value="" disabled>
                                Select a theatre
                            </option>
                            {theatre.map((res) => (
                                <option key={res.id} value={JSON.stringify({ id: res.id, name: res.name })}>
                                    {res.name}
                                </option>
                            ))}
                        </select>
                        <div className="flex justify-between">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-gray-500 text-white py-2 px-4 rounded-md"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="bg-green-600 text-white py-2 px-4 rounded-md"
                            >
                                Submit Order
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

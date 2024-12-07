import React, {useCallback, useEffect, useState} from "react";

// COMPONENTS
import InputText from "../components/Input";
import LabelText from "../components/Label";

// HELPER
import {confirmButton, textPopUp} from "../function/swal";
import apiJson from "../function/axios";
import apiImage from "../function/axiosFile";

function ProfileCard() {

    const [user, setUser] = useState({});
    const [originalUser, setOriginalUser] = useState({});
    const [imagePreview, setImagePreview] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [loop, setLoop] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [transction, setTransction] = useState([]);

    const getData = useCallback(async () => {
        const response = await apiJson.post(`/users/check-token`, {token: localStorage.getItem("token")});
        if (response?.data?.status === "token_not_found") return (window.location.href = "/");
        if (response?.data?.status) {
            setUser(response?.data?.data);
            setOriginalUser(response?.data?.data);

            const userImage = response?.data?.data?.image
                ? `${process.env.REACT_APP_BACKEND_WEBSITE}/api/public${response?.data?.data?.image}`
                : `${process.env.REACT_APP_BACKEND_WEBSITE}/api/public/images/defaultLogo.jpg`;
            setImagePreview(userImage);
        }

        const responseTransction = await apiJson.get(`/transction/view-transction?id=${localStorage.getItem("id")}`);
        if (responseTransction?.data?.status) {
            console.log(responseTransction?.data?.data)
            setTransction(responseTransction?.data?.data);
        }

        setLoop(false);
    }, []);

    useEffect(() => {
        if (loop) {
            getData();
        }
    }, [loop, getData]);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setImagePreview(URL.createObjectURL(file)); 
        }
    };

    const handleEdit = () => {
        if (isEditing) {
            setUser(originalUser);
            setImagePreview(
                originalUser.image
                    ? `${process.env.REACT_APP_BACKEND_WEBSITE}/api/public${originalUser.image}`
                    : `${process.env.REACT_APP_BACKEND_WEBSITE}/api/public/images/defaultLogo.jpg`
            );
            setSelectedFile(null);
        }
        setIsEditing(!isEditing);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        if (selectedFile) {
            const response = await apiImage.post("/users/changepp", {
                files: selectedFile,
            });

            if (response?.data?.status) {
                const responseAccount = await apiImage.post("/users/changeaccount", {
                    name: user.username,
                    email: user.email,
                });

                localStorage.setItem("username", user.username)
                localStorage.setItem("email", user.email)

                if (responseAccount?.data?.status) {
                    setIsEditing(!isEditing);
                    return textPopUp("Success", "Update successful", "success");
                }
            }
        } else {
            const responseAccount = await apiImage.post("/users/changeaccount", {
                name: user.username,
                email: user.email,
            });

            localStorage.setItem("username", user.username)
            localStorage.setItem("email", user.email)

            if (responseAccount?.data?.status) {
                setIsEditing(!isEditing);
                confirmButton("Success", "Update successful", "success").then((result) => {
                    if (result.status) {
                        window.location.href = "/profile"
                    }
                })
            }
        }
    };



    return (
        <div className="my-20">
            <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <div className="flex flex-col items-center">

                        {!isEditing && (
                            <img
                                src={
                                    imagePreview
                                }
                                alt="Profile"
                                className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-gray-600"
                            />
                        )}

                        {isEditing && (
                            <div className="mb-6 w-full">
                                <label className="block text-sm font-semibold text-gray-300">
                                    Change Profile Picture
                                </label>
                                <div className="mt-3 flex items-center space-x-4">
                                    <label
                                        htmlFor="file-upload"
                                        className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                    >
                                        Choose New Image
                                    </label>
                                    <input
                                        id="file-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                </div>
                                {imagePreview && (
                                    <div className="mt-4 flex justify-center">
                                        <img
                                            src={imagePreview}
                                            alt="Profile Preview"
                                            className="w-32 h-32 rounded-full object-cover border-4 border-blue-600"
                                        />
                                    </div>
                                )}
                            </div>
                        )}

                        <button
                            onClick={handleEdit}
                            className={`text-sm font-medium mb-6 px-4 py-2 rounded-md ${
                                isEditing
                                    ? "bg-red-500 text-white hover:bg-red-600"
                                    : "bg-blue-500 text-white hover:bg-blue-600"
                            } transition`}
                        >
                            {isEditing ? "Cancel" : "Edit Profile"}
                        </button>

                        <div className="w-full">
                            <div className="mb-4">
                                <LabelText text="Name" css="text-white"/>
                                {isEditing ? (
                                    <InputText
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={user?.username === "" ? "" : user?.username}
                                        onchange={handleInputChange}
                                        css="bg-gray-900 text-white border border-gray-600 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                                    />
                                ) : (
                                    <p className="text-gray-300 bg-gray-700 p-2 rounded-md">
                                        {user.username}
                                    </p>
                                )}
                            </div>

                            <div className="mb-4">
                                <LabelText text="Email" css="text-white"/>
                                {isEditing ? (
                                    <p className="text-gray-300 bg-gray-700 p-2 rounded-md">
                                        {user.email}
                                    </p>
                                ) : (
                                    <p className="text-gray-300 bg-gray-700 p-2 rounded-md">
                                        {user.email}
                                    </p>
                                )}
                            </div>

                            <div className="mb-4">
                                <LabelText text="Phone" css="text-white"/>
                                {isEditing ? (
                                    <p className="text-gray-300 bg-gray-700 p-2 rounded-md">
                                        {user.phone}
                                    </p>
                                ) : (
                                    <p className="text-gray-300 bg-gray-700 p-2 rounded-md">
                                        {user.phone}
                                    </p>
                                )}
                            </div>

                            {isEditing && (
                                <div className="flex justify-center">
                                    <button
                                        onClick={handleSave}
                                        className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="bg-gray-700 p-4 rounded-md shadow-inner">
                        <h3 className="text-lg font-bold text-white mb-4">Payment History</h3>
                        <div className="max-h-96 overflow-y-auto">
                            {transction &&
                                transction
                                    .sort((a, b) => new Date(a.date_transaction) - new Date(b.date_transaction)) // Sorting by date_transaction
                                    .map((payment, index) => (
                                        <div
                                            key={index}
                                            className="p-4 mb-2 bg-gray-800 rounded-md flex justify-between items-center text-sm text-gray-300"
                                        >
                                            <div>
                                                <p>Invoice: {payment.invoice}</p>
                                                <p className="font-medium">Amount: Rp {parseInt(payment.payment_total).toLocaleString()}</p>
                                                <p>Date: {new Date(payment.date_transaction).toLocaleString()}</p>
                                                <p>Payment: {payment.payment_method}</p>
                                                {payment.theatre_name !== undefined && <p>Theatre: {payment.theatre_name}</p>}
                                                {payment.quantity !== undefined && <p>Quantity: {payment.quantity}</p>}
                                                {payment.status === "pending" && (
                                                    <button className={"bg-blue-600 p-2 rounded-md mt-4"}>
                                                        <a href={payment.token}>Payment</a>
                                                    </button>
                                                )}
                                            </div>
                                            <p
                                                className={`${
                                                    payment.status === "completed" ? "text-green-400" : payment.status === "pending" ? "text-yellow-400" : "text-grey-400"
                                                }`}
                                            >
                                                {payment.status[0].toUpperCase() + payment.status.slice(1)}
                                            </p>
                                        </div>
                                    ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;

import {useState} from "react";

// COMPONENT
import LabelText from "../components/Label";
import InputText from "../components/Input";

// FUNCTION
import {confirmButton, textPopUp} from "../function/swal";
import apiJson from "../function/axios";

// ROUTER
import {useNavigate} from "react-router-dom";

export default function Register() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    })

    const handleInput = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        });
    };


    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (data.username === "" || data.email === "" || data.phone === "" || data.password === "") return textPopUp("Error", "Input all field", "error")
            if (data.password.length < 8) return textPopUp("Error", "Password is too weak", "error")

            const response = await apiJson.post("/users/create", {
                username: data.username,
                email: data.email,
                phone: data.phone,
                password: data.password
            })


            if (response?.data?.status === true) {
                setData({
                    username: "",
                    email: "",
                    phone: "",
                    password: "",
                })

                const result = await confirmButton("Check Your Email", "Please check your email to verify your account", "success")
                if (result.status) {
                    navigate("/login", { state: { refresh: true } })
                }

            } else {
                if (response?.data?.status === "email_already_exists") {
                    return textPopUp("Error", "Email already exists", "error")
                } else if (response?.data?.status === "no_query") {
                    return textPopUp("Error", "Tidak ada query", "error")
                } else if (response?.data?.status === false) {
                    return textPopUp("Error", response?.data?.message, "error")
                }
            }
        } catch
            (err) {
            console.log(err)
        }
    }

    return (
        <div className="flex justify-center items-center min-h-[80vh]">
            <div className="bg-white p-8 shadow-2xl rounded-lg max-w-md w-full">
                <h2 className="text-3xl font-bold text-black mb-6 text-center">
                    Register to Lux Cinema
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <LabelText text={"Email"}/>
                        <InputText type={"email"} placeholder={"Enter your email"} onchange={handleInput}
                                   id={"email"} value={data?.email === "" ? "" : data?.email}/>
                    </div>
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <LabelText text={"Username"}/>
                            <InputText type={"text"} placeholder={"Enter your username"} onchange={handleInput}
                                       id={"username"} value={data?.username === "" ? "" : data?.username}/>
                        </div>
                        <div>
                            <LabelText text={"Phone"}/>
                            <InputText type={"number"} placeholder={"Enter your phone number"}
                                       onchange={handleInput}
                                       id={"phone"} value={data?.phone === "" ? "" : data?.phone}/>
                        </div>
                    </div>
                    <div className="mb-4">
                        <LabelText text={"Password"}/>
                        <InputText type={"password"} placeholder={"Enter your password"} onchange={handleInput}
                                   id={"password"} value={data?.password === "" ? "" : data?.password}/>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-500"
                    >
                        Register
                    </button>
                </form>


                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <a
                            href="/login"
                            className="text-primary font-medium hover:underline"
                        >
                            Login
                        </a>
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                        Forgot your Password?{" "}
                        <a
                            href="/forget-password"
                            className="text-primary font-medium hover:underline"
                        >
                            Click here
                        </a>
                    </p>
                </div>
            </div>
        </div>

    )
}
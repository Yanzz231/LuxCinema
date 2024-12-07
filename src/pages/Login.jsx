import { useState } from "react";

// COMPONENT
import LabelText from "../components/Label";
import InputText from "../components/Input";

// FUNCTION
import { confirmButton, textPopUp } from "../function/swal";
import apiJson from "../function/axios";

export default function Login() {

    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data.username === "" || data.password === "") return textPopUp("Error", "Input all field", "error")

        const response = await apiJson.post("/users/login", {
            username: data.username,
            password: data.password
        })

        if (response?.data?.status === "otp_verify") return textPopUp("Error", "Not yet verified, Check you email", "error")
        if (response?.data?.status === "expired_verify") return textPopUp("Error", "Check your email to verify your account", "error")
        if (response?.data?.status === "account_not_found") return textPopUp("Error", "Account not found", "error")
        if (response?.data?.status === "no_query") return textPopUp("Error", "Tidak ada query", "error")
        if (response?.data?.status === "password_incorrect") return textPopUp("Error", "Password incorrect", "error")

        setData({
            username: "",
            password: ""
        })

        const result = await confirmButton("Login Success", "", "success")
        localStorage.setItem("token", response?.data?.data?.token)
        localStorage.setItem("email", response?.data?.data?.account)
        localStorage.setItem("id", response?.data?.data?.id)
        localStorage.setItem("username", response?.data?.data?.username)
        localStorage.setItem("phone", response?.data?.data?.phone)
        if (result.status) {
            window.location.href = "/"
        }
    }

    return (
        <div className="flex justify-center items-center min-h-[80vh]">
            <div className="bg-white p-8 shadow-2xl rounded-lg max-w-md w-full">
                <h2 className="text-3xl font-bold text-black mb-6 text-center">
                    Welcome to Lux Cinema
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <LabelText text={"Email"} />
                        <InputText type={"email"} placeholder={"Enter your email"} onchange={handleInput}
                            id={"username"} value={data?.username === "" ? "" : data?.username} />
                    </div>
                    <div className="mb-4">
                        <LabelText text={"Password"} />
                        <InputText type={"password"} placeholder={"Enter your password"} onchange={handleInput}
                            id={"password"} value={data?.password === "" ? "" : data?.password} />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-500"
                    >
                        Login
                    </button>
                </form>


                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Doesn't have an account?{" "}
                        <a
                            href="/register"
                            className="text-primary font-medium hover:underline"
                        >
                            Register
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
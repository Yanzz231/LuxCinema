// COMPONENT
import LabelText from "../components/Label";
import InputText from "../components/Input";
import {useState} from "react";

// FUNCTION
import {confirmButton, textPopUp} from "../function/swal";
import apiJson from "../function/axios";


export default function Forget() {

    const [data, setData] = useState({
        email: "",
    })

    const handleInput = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data.email === "") return textPopUp("Error", "Input your email", "error")

        const response = await apiJson.post("/users/forgetpassword", {
            email: data.email
        })

        if (response?.data?.status === "no_query") return textPopUp("Error", "Tidak ada query", "error")
        if (response?.data?.status === "email_not_found") return textPopUp("Error", "Email not found", "error")
        if (response?.data?.status === "otp_password_already_exists") return textPopUp("Error", "Check your email to see a OTP code", "error")

        const result = await confirmButton("Check Your Email", "we send a otp for you verify you account", "success")

        if (result.status) {
            setData({
                email: "",
            })
        }
    }

    return (
        <div className="flex justify-center items-center min-h-[80vh]">
            <div className="bg-white p-8 shadow-2xl rounded-lg max-w-md w-full">
                <h2 className="text-3xl font-bold text-black mb-6 text-center">
                    Forget Password
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <LabelText text={"Email"}/>
                        <InputText type={"email"} placeholder={"Enter your email or username"} value={data?.email === "" ? "" : data?.email} onchange={handleInput}
                                   id={"email"}/>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-500"
                    >
                        Submit
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
                        New Member?{" "}
                        <a
                            href="/register"
                            className="text-primary font-medium hover:underline"
                        >
                            Register
                        </a>
                    </p>
                </div>
            </div>
        </div>

    )
}
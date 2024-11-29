// COMPONENT
import LabelText from "../components/Label";
import InputText from "../components/Input";
import {useState} from "react";


export default function Dashboard() {

    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const handleInput = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className="flex justify-center items-center min-h-[80vh]">
            <div className="bg-white p-8 shadow-2xl rounded-lg max-w-md w-full">
                <h2 className="text-3xl font-bold text-black mb-6 text-center">
                    Welcome to M-Tix
                </h2>

                <form>
                    <div className="mb-4">
                        <LabelText text={"Email/Username"}/>
                        <InputText type={"text"} placeholder={"Enter your email or username"} onchange={handleInput} id={"username"}/>
                    </div>
                    <div className="mb-4">
                        <LabelText text={"Password"}/>
                        <InputText type={"text"} placeholder={"Enter your password"} onchange={handleInput} id={"password"}/>
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
                        New Member?{" "}
                        <a
                            href="/register"
                            className="text-primary font-medium hover:underline"
                        >
                            Register M-Tix
                        </a>
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                        Forgot your PIN?{" "}
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
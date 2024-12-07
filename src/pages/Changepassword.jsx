// COMPONENT
import LabelText from "../components/Label";
import InputText from "../components/Input";
import { useState, useCallback, useEffect } from "react";

// FUNCTION
import { confirmButton, textPopUp } from "../function/swal";
import apiJson from "../function/axios";

// ROUTERS
import { useSearchParams } from "react-router-dom";


export default function Changepassword() {

    const [searchParams] = useSearchParams();

    const otp = searchParams.get("otp");
    const email = searchParams.get("email");

    const [data, setData] = useState({
        password: "",
        password_replace: ""
    })
    const [loop, setLoop] = useState(true);

    const getData = useCallback(async () => {
        if (otp === undefined || email === undefined) return window.location.href = "/login"

        const response = await apiJson.post("/users/check-email", {
            email: email,
        });

        if (response?.data?.status === "email_not_found") return window.location.href = "/"
        if (response?.data?.data?.otp_password !== otp) return window.location.href = "/"

        setLoop(false);
    }, [otp, email]);

    useEffect(() => {
        if (loop) {
            getData()
        }
    }, [loop, getData])


    const handleInput = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data.password === "" || data.password_replace === "") return textPopUp("Error", "Input all field", "error")
        if (data.password !== data.password_replace) return textPopUp("Error", "Your password not matching", "error")
        if (data.password.length < 8 || data.password_replace.length < 8) return textPopUp("Error", "Password is too weak", "error")
        console.log(data.password.length <= 8, data.password_replace.length <= 8)

        const response = await apiJson.post("/users/verify", {
            email: email,
            type: "checking_otp_password",
            otp_password: otp,
            password: data.password
        })

        if (response?.data?.status === "no_query") return textPopUp("Error", "Tidak ada query", "error")
        if (response?.data?.status === "email_not_found") return textPopUp("Error", "Email not found", "error")
        if (response?.data?.status === "not_verify") return textPopUp("Error", "Email not verify", "error")
        if (response?.data?.status === false) return textPopUp("Error", "No have sesion", "error")

        const result = await confirmButton("Succes", "You password has been change", "success")

        if (result.status) {
            setData({
                password: "",
                password_replace: ""
            })

            window.location.href = "/login"
        }
    }

    return (
        <div className="flex justify-center items-center min-h-[80vh]">
            <div className="bg-white p-8 shadow-2xl rounded-lg max-w-md w-full">
                <h2 className="text-3xl font-bold text-black mb-6 text-center">
                    Change Password
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <LabelText text={"Password"} />
                        <InputText type={"password"} placeholder={"Enter your password"}
                            value={data?.password === "" ? "" : data?.password} onchange={handleInput}
                            id={"password"} />
                    </div>

                    <div className="mb-4">
                        <LabelText text={"Password Replace"} />
                        <InputText type={"password"} placeholder={"Enter your password replace"}
                            value={data?.password_replace === "" ? "" : data?.password_replace}
                            onchange={handleInput}
                            id={"password_replace"} />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-500"
                    >
                        Submit
                    </button>
                </form>

            </div>
        </div>

    )
}
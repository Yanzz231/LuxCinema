import {useEffect, useState, useCallback} from "react";

// ROUTER
import {useSearchParams} from "react-router-dom";

// FUNCTION
import {confirmButton, textPopUp} from "../function/swal";
import apiJson from "../function/axios";

export default function Otp() {

    const [searchParams] = useSearchParams();

    const type = searchParams.get("type");
    const email = searchParams.get("email");


    const [otp, setOtp] = useState(["", "", "", ""]);
    const [loop, setLoop] = useState(true);

    const getData = useCallback(async () => {
        if (type === undefined || email === undefined) return window.location.href = "/"

        if (type === "change_password" || type === "verify") {
            const response = await apiJson.post("/users/check-email", {
                email: email,
            });
            if (response?.data?.status === "email_not_found") return window.location.href = "/"
            if(response?.data?.data?.otp_verify === null && type === "verify")  return window.location.href = "/"
            if(response?.data?.data?.otp_password === null && type === "change_password")  return window.location.href = "/"
        } else {
            window.location.href = "/"
        }

        setLoop(false);
    }, [type, email]);

    useEffect(() => {
        if (loop) {
            getData()
        }
    }, [loop, getData])

    const handleInputChange = (value, index) => {
        if (value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < 3) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
    };

    const handleKeyDown = (event, index) => {
        if (event.key === "Backspace" && !otp[index] && index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (otp.join("").length !== 4) return textPopUp("Error", "Input all field", "error")
        if (type === "verify") {

            const response = await apiJson.post("/users/verify", {
                email: email,
                type: type === "verify" ? "checking_otp" : "checking_otp_password",
                otp_verify: otp.join("")
            });

            if (response?.data?.status === "no_query") return textPopUp("Error", "Tidak ada query", "error")
            if (response?.data?.status === "verify") return textPopUp("Error", "Account already verify", "error")
            if (response?.data?.status === "expired_verify") return textPopUp("Error", "Otp code is expired, check you email again", "error")
            if (response?.data?.status === false) return textPopUp("Error", "OTP is wrong", "error")

            const result = await confirmButton("Your Has been verified", "", "success")
            if (result.status) {
                setOtp(["", "", "", ""])
                window.location.href = "/login"
            }

        } else {
            const response = await apiJson.post("/users/check-email", {
                email: email,
                type: type === "verify" ? "checking_otp" : "checking_otp_password",
                otp_verify: otp.join("")
            });

            if (response?.data?.status === "no_query") return textPopUp("Error", "Tidak ada query", "error")
            if (response?.data?.status === "email_not_found") return textPopUp("Error", "Email not found", "error")

            if (response?.data?.data?.otp_password === otp.join().replaceAll(",", "")) {
                const result = await confirmButton("Verified", "", "success")
                if (result.status) {
                    setOtp(["", "", "", ""])
                    window.location.href = `/changepassword?email=${email}&otp=${otp.join().replaceAll(",", "")}`
                }
            } else {
                return textPopUp("Error", "OTP is wrong", "error")
            }
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[80vh]">
            <div className="bg-white p-8 shadow-2xl rounded-lg max-w-md w-full">
                <h2 className="text-3xl font-bold text-black mb-6 text-center">
                    OTP Verification
                </h2>

                <p className="text-center text-gray-600 mt-2">
                    Thank you for registering with us. Please type the OTP as shared on your
                    email <span className="font-medium">XXXXXXX123</span>
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="flex space-x-2 mt-6 justify-center items-center my-10">
                        {otp.map((value, index) => (
                            <input
                                key={index}
                                id={`otp-input-${index}`}
                                type="text"
                                maxLength="1"
                                value={value}
                                onChange={(e) => handleInputChange(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                        ))}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-500"
                    >
                        SUBMIT
                    </button>
                </form>


            </div>
        </div>
    )
}
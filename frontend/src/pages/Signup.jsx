import axios from "axios";
import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [firstName, setFristName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign Up"} />
                <SubHeading label={"Enter your information to create an account"} />
                <InputBox onChange={(e) => {
                    setFristName(e.target.value);
                }} label={"First Name"} placeholder={"John"} />
                <InputBox onChange={(e) => {
                    setLastName(e.target.value);
                }} label={"Last Name"} placeholder={"Doe"} />
                <InputBox onChange={(e) => {
                    setUsername(e.target.value);
                }} label={"Email"} placeholder={"John1231@gmail.com"} />
                <InputBox onChange={(e) => {
                    setPassword(e.target.value);
                }} label={"Password"} placeholder={"123456"} />
                <div className="pt-4">
                    <Button onClick={async () => {
                        const value = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signup`, {
                            username,
                            password,
                            firstName,
                            lastName
                        })
                        localStorage.setItem("token", value.data.token);
                        navigate("/signin");
                    }} label={"Sign up"} />
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
            </div>
        </div>
    </div>
}
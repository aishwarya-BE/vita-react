import { useState } from "react";
export default function Login(){
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        alert("Login successful")

        console.log(email);
        console.log(password);
    }

    return(
        <form onSubmit={handleSubmit}>


            <h2 className="text-primary text-center mb-2">Welcome Back!</h2>
            <p className="text-secondary text-center">Login to your account</p>

            <input

                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br></br>

            <input 

                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}

            />

            <br></br>

            <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
    )
}
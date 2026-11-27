import { useState } from "react";   
import { Navigate, useNavigate } from "react-router-dom";

export default function Login({onLogin}){
    const[username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")

    const handleLogin = (e) =>{
        e.preventDefault()

        if(username === "admin" && password === "2906"){
            onLogin()
            useNavigate()
        }

        else{
            setError("Invalid username or password")
        }
    }

    return(

        <div className="container mt-5">
            <div className="card p-4 mx-auto"
                    style={{maxWidth:"400px"}}>

                <h3 className="text-center text-primary mb-4">Login</h3>

                <form onSubmit = {handleLogin}>
                    <label>Username</label>

                    <input
                        type="text"
                        className="form-control mb-3"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        />

                    <label>Password</label>

                    <input  
                        type="password"
                        className="form-control mb-3"
                        value={password}
                        onChange={(e)  => setPassword(e.target.value)}
                        required
                    />

                    <button className="btn btn-primary w-100 ">Login</button>  

                </form>

                <p className="text-danger text-center mt-3">{error}</p>

            </div>
        </div>
    )
}
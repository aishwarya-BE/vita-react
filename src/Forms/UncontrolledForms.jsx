import { useRef } from "react";
export default function Register(){
    const emailRef = useRef();
    const passwordRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
    

    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)
    alert("Login successful using UnControlled Forms")
}
    return(
        <form onSubmit={handleSubmit}>

            <input 
            
            type="email"
            ref={emailRef}
            placeholder="Enter your Email"
            
            />


    <br></br>
        <input 
        
        type="password"
        ref={passwordRef}
        placeholder="Enter Password"
        />


    <br></br>

    <button type="submit" className="btn btn-primary">Login</button>
    </form>
)
}

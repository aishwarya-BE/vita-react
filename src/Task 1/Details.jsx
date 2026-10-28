
import { useState } from "react";

export default function Details() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [show, setShow] = useState(false)

    return (
        <div className="container mt-5">

            <input
                type="text"
                placeholder="Enter your Name : "
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="number"
                placeholder="Enter your Age : "
                onChange={(e) => setAge(e.target.value)}
            />

            <button
                className="btn btn-primary ms-2"
                onClick={() => setShow(true)}
            >
                Show Details
            </button>

            {show && (
                <>
                    <h3 className="text-primary">I'm {name}</h3>
                    <h3 className="text-primary">I'm {age} years old</h3>
                </>
            )}

        </div>
    )
}

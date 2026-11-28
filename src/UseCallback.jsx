import { useState, useCallback } from "react";
export default function App(){

    const[count,setCount] = useState(0);

    const increment = useCallback(() =>{
        setCount(count + 1);
        },[count]);

    const decrement = useCallback(() =>{
        setCount(count - 1);
        },[count]);

    const reset = useCallback(() =>{
        setCount(0);
        },[]);


    return(
        <div>
            <div className="container mt-4">
                <h1>Count:{count}</h1>

                <button className="btn btn-success me-2"
                        onClick={increment}
                >
                    Increment
                </button>

                <button className="btn btn-danger me-2"
                        onClick={decrement}
                >
                    Decrement
                </button>

                <button className="btn btn-secondary "
                        onClick={reset}
                >
                    Reset
                </button>




            </div>
            

            

            
        </div>
    )
}
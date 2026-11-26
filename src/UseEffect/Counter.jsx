import { useEffect,useState } from "react";     
export default function Counter(){
    const[count,setCount] = useState(0);

    useEffect(() => {
    console.log("Count change:",count);
    },[count]);

    return(
        <div>
            <h2>Count:{count}</h2>

            <button onClick={() => setCount(count+1)}>Increase</button>
        </div>
    );
}
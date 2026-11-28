import { useState,useMemo } from "react";

const squareAreaCalc = (square) =>{
    console.log("Running...");

    for(let i=1; i<10000; i++){}

    return square* square;
};

export default function App(){
    const[count,setCount] = useState(0);
    const[square,setSquare] = useState(5);

    const squareAreaResult=useMemo(() => {
        return squareAreaCalc(square);
    }, [square]);

    return(
        <div>
            <label>Enter Square Value</label>

            <input
                type="number"
                onChange={(e) => setSquare(Number(e.target.value))}
            />

            <p>Square Area : {squareAreaResult}</p>

            <p>Count : {count}</p>

            <button  onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
}
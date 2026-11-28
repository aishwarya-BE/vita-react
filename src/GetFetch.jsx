import { useState,useEffect } from "react";
export default function App(){
    const[data,setData] = useState([]);
    useEffect(() =>{
        const fetchData = async() =>{
            try{
                const response = await fetch(
                    "https://dummyjson.com/products"

                );

                const json = await response.json();

                setData(json.products);
            }

            catch(error){
                console.log(error);
            }
        };
        fetchData();
    },[]);

    return(
        <div>
            <h2>Posts List</h2>

            {data.map(item =>(
                <p key={item.id} > {item.title}</p>
            ))}
        </div>
    );
}
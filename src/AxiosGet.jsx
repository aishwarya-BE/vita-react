import axios from "axios";
import { useState,useEffect } from "react";

export default function App(){
    const[data,setData] = useState([]);

    useEffect(() =>{
        const fetchData = async() =>{
            try{
                const response = await axios.get(
                    "https://dummyjson.com/products"
                );

                setData(response.data.products);
            }

            catch(error){
                console.log(error);
            }
        };

        fetchData();
    },[]);

    return(
        <div>
            <h2>GET Requests</h2>

            {data.map(item =>(
                <p key={item.id}> {item.title} </p>
            ))}
        </div>
    );
}
import axios from "axios";

export default function App(){
    const sendData = async () =>{
        try{
            const response =await axios.post(
                "https://dummyjson.com/products/add",
                {
                    title : "Iphone",
                    price : 120000,
                    category : "electronics"
                }
            );

            console.log(response.data);
        }

        catch(error){
            console.log(error);
        }
    };

    return(
        <div>
            <h2>POST Requests</h2>

            <button onClick={sendData}>
                Send Data
            </button>
        </div>
    )


}
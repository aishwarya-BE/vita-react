export default function App(){
    const sendData = async() => {
        try{
            const response = await fetch(
                "https://dummyjson.com/products/add",
                {
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json"
                    },

                    body:JSON.stringify({
                        "category": "beauty",
                        "price": 9.99,
                        userId:1
                    })
                }
            );

            const result = await response.json();

            console.log(result);
        }
        catch(error){
            console.log(error);
        }
    };

    return(
        <div>
            <h2>POST Requests</h2>

            <button onClick={sendData}>Send Data</button>
        </div>
    )
    
}
import { useState, useEffect } from "react";    
export default function APICounter(){
    const [users,setUsers] = useState([])

    useEffect(() =>{
        fetch("https://dummyjson.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data.users));
},[]);

return(
    <div>
        <h2>UserDetails</h2>

        {users.map(user => (
            <p key={user.id}>{user.gender}</p>
        ))}
    </div>
);
}
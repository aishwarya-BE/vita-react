import { Navigate } from "react-router-dom";
export default function ProtectedRoute({children,isLoggedIn}){
    return(
        isloggedIn ? children : <Navigate to="/login" />
    )
}
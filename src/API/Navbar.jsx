import {useContext} from "react"
import { CartContext } from "./CartContext" 

export default function Navbar(){
    const {cart} = useContext(CartContext);

    return(
        <div className="bg-dark text-white p-3">


            <h3>
                Shopping Store
                <span className="float-end">
                    Cart:{cart}
                </span>
            </h3>
        </div>
    )
}
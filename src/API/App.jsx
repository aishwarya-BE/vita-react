import {CartProvider} from "./CartContext";
import Navbar from "./Navbar"
import Product from "./Product"

export default function App() {
    return(
        <CartProvider>
            <Navbar />
            <Product />
        </CartProvider>
    )
}
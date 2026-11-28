import { useContext } from "react"; 
import { CartContext } from "./CartContext";

import ring from "../assets/ring.jpg"
import earings from "../assets/earings.jpg"
import bracelet from "../assets/bracelet.jpg"
import chain from "../assets/chain.jpg"
import watch from "../assets/watch.jpg"
import anklet from "../assets/anklet.jpg"

export default function Product(){
    const {addToCart} = useContext(CartContext);

    return(
        <div className="container mt-4">

            <h3 className="text-center text-primary mb-4">Our Products</h3>

            <div className="row">
                <div className="col-md-4 mb-3">
                    <div className="card p-2">

                        <img
                            src={ring}
                            className="card-img-top"
                            height = "200"
                            style={{objectFit : "contain"}}
                        />

                    <div className="card-body">
                        <h5>Ring</h5>
                        <p>A simple and beautiful rose gold ring </p>

                        <h5 className="text-success">Rs.2800</h5>

                        <button className="btn btn-primary" 
                                onClick={addToCart}>
                                    Add to Cart
                                </button>
                    </div>
                    </div>
                </div>



                <div className="col-md-4 mb-3">
                    <div className="card p-2">

                        <img
                            src={earings}
                            className="card-img-top"
                            height = "200"
                            style={{objectFit : "contain"}}
                        />

                    <div className="card-body">
                        <h5>Earing</h5>
                        <p>Beautiful rose gold earings for a classy look </p>

                        <h5 className="text-success">Rs.3400</h5>

                        <button className="btn btn-primary" 
                                onClick={addToCart}>
                                    Add to Cart
                                </button>
                    </div>
                    </div>
                </div>



                <div className="col-md-4 mb-3">
                    <div className="card p-2">

                        <img
                            src={chain}
                            className="card-img-top"
                            height = "200"
                            style={{objectFit : "contain"}}
                        />

                    <div className="card-body">
                        <h5>Chain</h5>
                        <p>A stylish rose gold chain for everyday wear </p>

                        <h5 className="text-success">Rs.6200</h5>

                        <button className="btn btn-primary" 
                                onClick={addToCart}>
                                    Add to Cart
                                </button>
                    </div>
                    </div>
                </div>



                <div className="col-md-4 mb-3">
                    <div className="card p-2">

                        <img
                            src={watch}
                            className="card-img-top"
                            height = "200"
                            style={{objectFit : "contain"}}
                        />

                    <div className="card-body">
                        <h5>Watch</h5>
                        <p>Beautiful rose gold earings for a classy look </p>

                        <h5 className="text-success">Rs.1300</h5>

                        <button className="btn btn-primary" 
                                onClick={addToCart}>
                                    Add to Cart
                                </button>
                    </div>
                    </div>
                </div>



                <div className="col-md-4 mb-3">
                    <div className="card p-2">

                        <img
                            src={anklet}
                            className="card-img-top"
                            height = "200"
                            style={{objectFit : "contain"}}
                        />

                    <div className="card-body">
                        <h5>Anklet</h5>
                        <p>Beautiful rose gold earings for a classy look </p>

                        <h5 className="text-success">Rs.2800</h5>

                        <button className="btn btn-primary" 
                                onClick={addToCart}>
                                    Add to Cart
                                </button>
                    </div>
                    </div>
                </div>



                <div className="col-md-4 mb-3">
                    <div className="card p-2">

                        <img
                            src={bracelet}
                            className="card-img-top"
                            height = "200"
                            style={{objectFit : "contain"}}
                        />

                    <div className="card-body">
                        <h5>Bracelet</h5>
                        <p>A cute rose gold bracelet for your wrist </p>

                        <h5 className="text-success">Rs.4000</h5>

                        <button className="btn btn-primary" 
                                onClick={addToCart}>
                                    Add to Cart
                                </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
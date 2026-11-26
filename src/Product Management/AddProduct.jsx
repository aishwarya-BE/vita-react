import { useState } from "react";

export default function AddProduct({onAdd ,nextId}){

    const [show, setShow] = useState(false);
    const[name,setName] = useState("");
    const[price,setPrice] = useState("");
    const[category,setCategory] = useState("");

    function addProduct(e){
        e.preventDefault();

        const newProduct = {
            id: nextId,
            title : name,
            price : Number(price),
            category : category
        };

        onAdd(newProduct);
        setName("");
        setPrice("");
        setCategory("");
        setShow(false);
    }

    return(
        <div className="mb-3">

            <button className="btn btn-success btn-sm"
                onClick = {() => setShow(!show)}>
                    Add Product
            </button> 

            {show && (
                <div className="card p-3 mt-3">
                    <h5 className="text-success">Add New Product</h5>
                    <form onSubmit={addProduct}>
                    <label  className="form-label">Product Name</label>
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Enter product name"
                            value={name}
                            onChange={ (e) => setName(e.target.value)}
                            required
                        />

                        <label  className="form-label">Price</label>

                        <input 
                            type="number"
                            className="form-control mb-2"
                            placeholder="Enter price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />

                        <label className="form-label">Category</label>
                        <select

                            className="form-select mb-3"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >

                            <option value = "">Select Category</option>
                            <option value = "men's clothing">Men's Clothing</option>
                            <option value = "women's clothing">Women's Clothing</option>
                            <option value = "jewelery">Jewelery</option>
                            <option value = "electronics">Electronics</option>
                        
                        </select>

                        <button type="submit" 
                                className="btn btn-sm 
                                btn-primary me-2">
                                    Add
                        </button>

                        <button type="button"
                                className="btn btn-sm btn-secondary"
                                onClick={() => setShow(false)}>
                                    Cancel
                                </button>


                    </form>
                </div>
            )}
        </div>
    );

}
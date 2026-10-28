import { useState } from "react";
import { postApiCall } from "../api_fetch/fetchapi";

export default function Simple_form(){
    const [formData, setFormData] = useState({});

    const handleChange = (e) =>{
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData({
            ...formData,
            [fieldName]:fieldValue
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const payload = {
                title : formData["product-name"],
                price : Number(formData["product-price"]),
                description : formData["product-description"],
                image : formData["product-image"],
                category : formData["product-category"]
            };

            const response = await postApiCall(payload);
            console.log("Response ===>",response);
            alert("Product added Successfully!");

            setFormData({});
            e.target.reset();
        }
        catch(error){
            console.error("Error :::",error);

            alert("Failed to add product :(")
        }

    };

    return(
        <div className="container mt-4">
            <h3 className="text-center text-success">Product Listing</h3>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input
                        type="text"
                        name="product-name"
                        className="form-control"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Product Price</label>
                    <input
                        type="number"
                        name="product-price"
                        className="form-control"
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Product Description</label>
                    <textarea 
                        name="product-description"
                        className="form-control"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Product Image 
                    </label>
                    <input
                        type="url"
                        name="product-image"
                        className="form-control"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Product Category</label>
                    <select
                        name="product-category"
                        className="form-select"
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value = "electronics">Electronics</option>
                        <option value = "jewelery">Jewelery</option>
                        <option value = "men's clothing">Men's Clothing</option>
                        <option value = "women's clothing">Women's Clothing</option>

                        </select>
                </div>

                <button type="submit" className="btn btn-primary">Add Product</button>

            </form>
        </div>
    );

}
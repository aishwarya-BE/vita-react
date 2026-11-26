
import { useState } from "react";

export default function EditProduct({ item, onSave, onCancel }) {

    const [name, setName] = useState(item.title);
    const [price, setPrice] = useState(item.price);
    const [category, setCategory] = useState(item.category);

    function saveProduct(e) {
        e.preventDefault();

        const updatedProduct = {
            ...item,
            title: name,
            price: Number(price),
            category: category
        };

        onSave(updatedProduct);
    }

    return (
        <form onSubmit={saveProduct}>

            <input
                type="text"
                className="form-control form-control-sm mb-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <input
                type="number"
                className="form-control form-control-sm mb-2"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                min="0"
                step="any"
                required
            />

            <select
                className="form-select form-select-sm mb-2"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
            </select>

            <button
                type="submit"
                className="btn btn-success btn-sm me-2"
            >
                Save
            </button>

            <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={onCancel}
            >
                Cancel
            </button>

        </form>
    );
}

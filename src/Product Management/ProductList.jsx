
import { useState } from "react";
import dummyProduct from "../assets/dummyProduct.json";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";

export default function ProductList(){

    const [products, setProducts] = useState(dummyProduct);
    const [editId, setEditId] = useState(null);

    function addProduct(newProduct) {
        setProducts([...products, newProduct]);
    }

    function saveProduct(updatedProduct) {

        const updatedProducts = products.map(item =>
            item.id === updatedProduct.id ? updatedProduct : item
        );

        setProducts(updatedProducts);
        setEditId(null);
    }

    function deleteProduct(id) {
        setProducts(products.filter(item => item.id !== id));
    }

    return (
        <div className="container mt-4">
            <h3 className="text-primary text-center">Product List</h3>

            <AddProduct
                onAdd={addProduct}
                nextId={Math.max(...products.map(item => Number(item.id))) + 1}
            />
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {products.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                                {editId === item.id ? (
                                    <EditProduct
                                        item={item}
                                        onSave={saveProduct}
                                        onCancel={() => setEditId(null)}
                                    />
                                ) 
                                :
                                (
                                    item.title
                                )}
                            </td>

                            <td>{editId === item.id ? "":item.price}</td>
                            
                            <td>{editId === item.id ? "":item.category}</td>
                           <td>
                                {editId === item.id ? (
                                    ""
                                ) 
                                : 
                                (
                                    <div className="d-flex gap-2 flex-nowrap">
                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={() => setEditId(item.id)}
                                        >
                                            Edit
                                        </button>

                                        <DeleteProduct
                                            id={item.id}
                                            onDelete={deleteProduct}
                                        />
                                    </div>
                                )}
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

            <p className="text-muted">
                Total Products: {products.length}
            </p>

        </div>
    );
}

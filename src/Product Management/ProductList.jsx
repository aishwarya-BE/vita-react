import dummyProduct from "../assets/dummyProduct.json";

export default function ProductList() {
    return (
        <div className="container mt-4">
            <h3 className="text-primary text-center">Product List</h3>

            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
        
                <tbody>
                    {dummyProduct.map((item) =>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.category}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}
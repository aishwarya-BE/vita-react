export default function DeleteProduct({id, onDelete}){
    function deleteProduct(){
        if(window.confirm("Are u surely want to delete?")){
            onDelete(id);
        }
    }

    return(
        <button
            className="btn btn-danger btn-sm"
            onClick={deleteProduct}
        >
            Delete
        </button>
    );
}
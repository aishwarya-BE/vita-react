
export default function DeleteGuest({ onDelete }) {
    function handleDelete() {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this guest?"
        );

        if (confirmDelete) {
            onDelete();
        }
    }

    return (
        <button
            type="button"
            className="btn btn-sm text-danger border"
            style={{ backgroundColor: "transparent" }}
            onClick={handleDelete}
        >
            Delete
        </button>
    );
}

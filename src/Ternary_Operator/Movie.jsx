
export default function Movie(props) {
    return (
        <div className="card p-3 m-3 shadow-sm">
            <h3 className="text-primary">{props.title}</h3>

                <p>Genre: {props.genre}</p>
                <p>Language: {props.language}</p>
                <p>Ticket Price: ₹{props.price}</p>
                <p>
                    Status: { props.available? "Tickets Available" : "House Full"}
                </p>

            <button
                className={
                    props.available ? "btn btn-success" : "btn btn-danger"
                }
                disabled={!props.available}
            >
                {props.available ? "Book Ticket": "Sold Out"}
            </button>
        </div>
    );
}

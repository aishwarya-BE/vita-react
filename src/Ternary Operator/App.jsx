import Movie from "./Movie";

export default function App(){
    return(
        <div className="card p-3 m-3">
            <h3 className="text-primary">{props.title}</h3>

            <p>Genre : {props.genre}</p>
            <p>Language : {props.language}</p>
            <p>Ticket price : Rs.{props.price}</p>

            <p>
                Tickets : {
                    props.available ? "Available" : "House Full"
                }
            </p>

            <button
                className={
                    props.available ? "btn btn-success" : "btn btn-danger"
                }
                disabled = {!props.available}>
                    {props.available ? "Book Ticket" : "Sold-Out"}
                </button>
        </div>
    );
}

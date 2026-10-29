
import Movie from "./Movie";

export default function App() {
    return (
        <div className="container mt-4">
            <h2 className="text-center text-primary">Movie Ticket Booking </h2>

            <div className="row">

                <div className="col-md-6">
                    <Movie
                        title="JanaNayagan"
                        genre="Action"
                        language="Tamil"
                        price={180}
                        available={true}
                    />
                </div>

                <div className="col-md-6">
                    <Movie
                        title="Once More"
                        genre="Romance"
                        language="Tamil"
                        price={200}
                        available={false}
                    />
                </div>

                <div className="col-md-6">
                    <Movie
                        title="Interstellar"
                        genre="Sci-Fi"
                        language="English"
                        price={250}
                        available={true}
                    />
                </div>

                <div className="col-md-6">
                    <Movie
                        title="Premalu"
                        genre="Comedy"
                        language="Malayalam"
                        price={160}
                        available={true}
                    />
                </div>

                <div className="col-md-6">
                    <Movie
                        title="Kalki 2898 AD"
                        genre="Sci-Fi"
                        language="Telugu"
                        price={220}
                        available={false}
                    />
                </div>

            </div>
        </div>
    );
}

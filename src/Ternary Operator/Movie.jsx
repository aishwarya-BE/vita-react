export default function Movie(){
    return(
        <div className="container mt-4">
            <h2 className="text-center text-primary">Movie Ticket Booking</h2>
 
            <Movie 
                title = "JanaNayagan"
                genre = "Action"
                language = "Tamil"
                available = {true}
            />

            <Movie 
                title = "Intersteller"
                genre = "Sci-Fic"
                language = "English"
                available = {true}
            />

            <Movie 
                title = "Once More"
                genre = "Romance"
                language = "Tamil"
                available = {false}
            />

            <Movie 
                title = "Dorothy"
                genre = "Action"
                language = "Tamil"
                available = {true}
            />

        </div>
    )
}
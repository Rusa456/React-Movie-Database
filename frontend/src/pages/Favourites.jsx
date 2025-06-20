import "./../css/Favourites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favourites()
{
    const {favourites} = useMovieContext()

    if (favourites.length !== 0) {
        return (
            <div className="favourites">
                <h2>Your Favourite Movies</h2>
            <div className="movies-grid">
            {favourites.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
        </div>
        );
    }
    if (favourites.length === 0)
    {
        return <div>
        <h2>No Favourite Movies yet</h2>
    </div>
    }
    
}

export default Favourites
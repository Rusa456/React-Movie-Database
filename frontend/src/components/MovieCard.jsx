import "./../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"

function MovieCard({movie}) {
    const { isFavourites, addToFavourites , removeFromFavourites} = useMovieContext()
    const favourite = isFavourites(movie.id)

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favourite) removeFromFavourites(movie.id)
        else addToFavourites(movie)
    }

    return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="movie-overlay">
            <button className={`favorite-btn ${favourite ? "active" : ""}`} onClick={onFavoriteClick}>
                ♥
            </button>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
    )
}

export default MovieCard
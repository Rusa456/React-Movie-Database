import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home() {

    const [searchQuery, setSearchQuery] = useState();



    const movies = [
        {id: 1,title: "Ted",release_date: "1564"},
        {id: 2,title: "Transformers",release_date: "5161"},
        {id: 3,title: "Yes Man",release_date: "8798"},
        {id: 4,title: "Creed",release_date: "1654"},
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    };

    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Search for movies..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movie-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
    );
}

export default Home
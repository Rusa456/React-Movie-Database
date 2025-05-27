import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <div>
      <MovieCard movie={{title: "xyz",release_date: "21/11/2025"}}/>
      <MovieCard movie={{title: "pqr",release_date: "31/11/2025"}}/>
      <MovieCard movie={{title: "abc",release_date: "28/11/2025"}}/>

    </div>
  )
}

export default App
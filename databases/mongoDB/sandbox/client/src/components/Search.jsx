import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Search = () => {
  const [movie, setMovie] = useState('')
  const [resMovies, setResMovies] = useState(null)

  async function searchMovie() {
    const response = await axios.get('http://localhost:8080/find', {
      params: {
        movie: movie
      }
    })
    setResMovies(response.data)
  }

  // console.log('movie: ', movie)
  // console.log('resMovies', resMovies)
  return (
    <div>
      <input
        type="text"
        placeholder='search for a movie title...'
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />
      <button onClick={searchMovie}>Search</button>
      {resMovies &&
        <div className='movies'>
          {resMovies.map((movie) => {
            return (
              <div className='movie'>
                {movie.poster ? (
                  <img src={movie.poster} className='movie-poster'/>
                ): (
                  <h2>{movie.title}</h2>
                )}
                {movie.poster && <h3>{movie.title}</h3>}
                <div className='genres'>
                  {movie.genres.map((genre) => (
                    <span className='genre'>{genre}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>}
    </div>
  )
}

export default Search
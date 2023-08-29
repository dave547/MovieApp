import React, {useState, useEffect } from "react";
import { Movie } from "./Movie";
import { Filter } from "../Filter";

// const movies = [
//     {
//         title: "Spiderman",
//         // price: "$10",
//         id: 1
//     },
//     {
//         title: "Batman",
//         // price: "$10",
//         id: 2
//     },
//     {
//         title: "Superman",
//         // price: "$10",
//         id: 3
//     }
// ]

// add api stuff back
const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=<<api_key>>";
const CONFIG_URL = "https://api.themoviedb.org/3/configuration?api_key=<<api_key>>"

export function MoviesList() {
    const [filter, setFilter] = useState("")
    const [movies, setMovies] = useState([])
    const [config, setConfig] = useState({})
  
    const getMovies = async () => {
      try {
        const res = await fetch(API_URL)
        const movies = await res.json()
        setMovies(movies.results)
      } catch (e) {
        console.error(e)
      }
    }
    const getConfig = async () => {
      try {
        const res = await fetch(CONFIG_URL)
        const config = await res.json()
        setConfig(config)
      } catch (e) {
        console.error(e)
      }
    }
  
    useEffect(() => {
      getConfig()
      getMovies()
    }, [])
  
    return (
      <div>
        <Filter filter={filter} setFilter={setFilter} />
        <ul className="movies-list">
          {movies
            .filter((movie) =>
              movie.title.toLowerCase().includes(filter.toLowerCase())
            )
            .map((movie) => (
              <Movie key={movie.id} config={config} movie={movie} />
            ))}
        </ul>
      </div>
    )
  }
  
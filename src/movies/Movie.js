import React from "react";
import PropTypes from "prop-types";

export function Movie({ movie, config }) {

  return (
    <li>
    {
        config.images?.base_url &&
        <img src={config.images.base_url + "w342" + movie.poster_path} alt={movie.title + " poster"} />
    }
    
    <h3>{movie.title}</h3>
    </li>
  );
}

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        // price: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
    }).isRequired
}
import React from "react";
import PropTypes from "prop-types";

export function Filter({ filter, setFilter }) {
    return (
        <header className="header">
        <label htmlFor="">
        Filter:
        <input
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
        />
        </label>
        </header>
    );
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired
}
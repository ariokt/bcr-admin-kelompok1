import React from "react";
import { Button } from "react-bootstrap";
import "./Search.css"

const Search = () => {
    return (
        <div className="d-flex align-items-center">
            <input className="search" type="text" placeholder="Search" />
            <Button variant="outline-primary">Search</Button>
        </div>
    )
}

export default Search
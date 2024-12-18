import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";

const Card = ({ curBook }) => {

  const {title,author_name} = curBook
  const bookCover = curBook.cover_i
    ? `https://covers.openlibrary.org/b/id/${curBook.cover_i}-L.jpg`
    : "https://via.placeholder.com/150"; // Fallback for missing cover

  return (
    <div className="card">
      <img className="card-img" src={bookCover} alt={`${curBook.title} cover`} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-author">{author_name?.[0] || "Unknown Author"}</p>
      </div>

      <NavLink to={`/movie/${curBook.key.replace('/works/', '')}`}
       state={{ bookDetails: curBook }}>
            <button >See Details</button>
          </NavLink>
    </div>
  );
};

export default Card;

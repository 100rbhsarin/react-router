import React from "react";
import "./Card.css";

const Card = ({ curBook }) => {
  const bookCover = curBook.cover_i
    ? `https://covers.openlibrary.org/b/id/${curBook.cover_i}-L.jpg`
    : "https://via.placeholder.com/150"; // Fallback for missing cover

  return (
    <div className="card">
      <img className="card-img" src={bookCover} alt={`${curBook.title} cover`} />
      <div className="card-content">
        <h2 className="card-title">{curBook.title}</h2>
        <p className="card-author">{curBook.author_name?.[0] || "Unknown Author"}</p>
      </div>
    </div>
  );
};

export default Card;

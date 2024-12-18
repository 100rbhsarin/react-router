import React from "react";
import './BookDetails.css'
import { useLocation, useParams } from "react-router-dom";

export const BookDetails = () => {
  const { bookId } = useParams(); // Fetch route parameter
  const location = useLocation(); // Fetch state
  const bookDetails = location.state?.bookDetails;

  if (!bookDetails) {
    return <h1>Book details not found</h1>;
  }

  const {
    cover_i,
    title,
    author_name,
    publish_date,
    language,
    number_of_pages_median,
    first_sentence,
    isbn,
    ratings_average,
    subject,
  } = bookDetails;

  const coverImageUrl = cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`
    : "https://via.placeholder.com/200x300?text=No+Cover+Available";

  return (
    <div className="book-details">
      <div className="cover-container">
        <img src={coverImageUrl} alt={`${title} cover`} />
      </div>
      <h1>{title}</h1>
      <p>
        <strong>Author:</strong> {author_name?.join(", ") || "Unknown"}
      </p>
      <p>
        <strong>Published:</strong> {publish_date?.join(", ") || "Unknown"}
      </p>
      <p>
        <strong>Language:</strong> {language?.join(", ") || "Unknown"}
      </p>
      <p>
        <strong>Pages:</strong> {number_of_pages_median || "Unknown"}
      </p>
      <p>
        <strong>ISBN:</strong> {isbn?.join(", ") || "Unknown"}
      </p>
      <p>
        <strong>Ratings:</strong> {ratings_average || "No Ratings"}
      </p>
      <p>
        <strong>Subjects:</strong> {subject?.join(", ") || "None"}
      </p>
      <p>
        <strong>First Sentence:</strong>{" "}
        {first_sentence?.[0] || "No preview available"}
      </p>
    </div>
  );
};


// import React from "react";
// import { useLoaderData } from "react-router-dom";

// export const BookDetails = () => {
//     const book = useLoaderData();
//     console.log("Fetched Book Data:", book); // Debug fetched data

//     if (!book) {
//         return <h1>Book details not found</h1>;
//     }

//     return (
//       <div>
//       <h1>{book.title || "Title not available"}</h1>
//       <p>Author: {book.authors?.[0]?.name || "Author not available"}</p>
//       <p>Description: {book.description?.value || book.description || "No description available"}</p>
//       <p>Published Year: {book.first_publish_year || "Year not available"}</p>
//   </div>
//     );
// };





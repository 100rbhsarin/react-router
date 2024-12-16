import './Movie.css'


// import { useLoaderData } from "react-router-dom";
// import Card from "../components/UI/Card";

// export const Movie = () => {
//     const bookData = useLoaderData(); // Fetch the data from the loader
//     console.log("Book data:", bookData); // Ensure this logs the fetched data

//     return (
//         <>
         
//             {/* {bookData && <pre>{JSON.stringify(bookData, null, 2)}</pre>} */}

//             <div className="card-container">
//       {bookData &&
//         bookData.docs.map((curBook) => (
//           <Card key={curBook.key} curBook={curBook} />
//         ))}
//     </div>
//         </>
//     );
// };


import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/UI/Card";


export const Movie = () => {
  const bookData = useLoaderData();
  console.log(bookData)

  if (!bookData || !bookData.docs) {
    return <h2>No book data available</h2>;
  }

  // Separate books with and without covers
  const booksWithCovers = bookData.docs.filter((book) => book.cover_i);
  const booksWithoutCovers = bookData.docs.filter((book) => !book.cover_i);

  // Combine them, moving books with covers to the top
  const sortedBooks = [...booksWithCovers, ...booksWithoutCovers];

  return (
    <div className="card-container">
      {sortedBooks.map((curBook) => (
        <Card key={curBook.key} curBook={curBook} />
      ))}
    </div>
  );
};

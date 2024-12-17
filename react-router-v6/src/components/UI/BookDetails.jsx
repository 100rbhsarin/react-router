import React from "react";
import { useParams } from "react-router-dom";



export const BookDetails = ({ books }) => {
 const Params = useParams()
 console.log(`this is bookdetails parma${Params}`)

//   if (!books) {
//     return <div><h1>Book not found</h1></div>;
//   }

  return (
  <>
  <h1>this is it {Params.bookId}</h1>
  </>
  );
};


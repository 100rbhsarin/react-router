export const getBookData = async () => {
    try {
        const response = await fetch("https://openlibrary.org/search.json?q=your_query");
       
       const data = response.json() 
       return data
      
       
    } catch (error) {
        console.log("Error fetching data:", error);
    }
};


// export const getBookData = async () => {
//     try {
//         const response = await fetch("https://openlibrary.org/search.json?q=harry+potter");
//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log("Loader fetched data:", data); // Ensure this logs the correct data
//         return data; // Must return data for useLoaderData()
//     } catch (error) {
//         console.error("Error in loader:", error);
//         return null; // Return null or an error object if there’s an issue
//     }
// };

// export const getBookDatas = async ({params}) => {
//     console.log(params)
//     try {
//         const response = await
//          fetch("https://openlibrary.org/works/${bookId}.json");
       
//        const data = response.json() 
//        return data
      
       
//     } catch (error) {
//         console.log("Error fetching data:", error);
//     }
// };


// this is debuging
export const getBookDatas = async ({ params }) => {
    const { bookId } = params;
    console.log("Fetched bookId:", bookId); // Debug the bookId
    try {
        const response = await fetch(`https://openlibrary.org/works/${bookId}.json`);
        console.log("API Response Status:", response.status); // Debug response status
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};

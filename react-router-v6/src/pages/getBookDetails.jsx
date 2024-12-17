export const getBookData = async ({params}) => {
    console.log(params)
    try {
        const response = await fetch("https://openlibrary.org/search.json?q=your_query");
       
       const data = response.json() 
       return data
      
       
    } catch (error) {
        console.log("Error fetching data:", error);
    }
};

import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Movie } from './pages/Movie';
import { Contact, contactData } from './pages/Contact';
import { AppLayout } from './components/layout/AppLayout';
import { ErrorHandle } from './pages/ErrorPare';
import { getBookData } from './pages/GetApiData';
import { BookDetails } from './components/UI/BookDetails';
import { getBookDatas } from './pages/getBookDetails';

const App = ()=>{


  const router = createBrowserRouter([


    {
      path: "/",
      element: <AppLayout/>,
      errorElement: <ErrorHandle/>,
      children: [
        
          {
            path: "/",
            element: <Home/>,
          },
          {
            path: "/about",
            element: <About/>,
          
          },
          {
            path: "/movie",
            element: <Movie/>,
            loader: getBookData,
          },
          {
            path: "/movie/:bookId",
            element: <BookDetails/>,
            // loader: getBookDatas,
          },
          {
            path: "/contact",
            element: <Contact/>,
            action: contactData,
          },
        
      ]
    },
     

  ])

// const router = createBrowserRouter(
// createRoutesFromElements(
//   <Route>
// <Route path= "/" element={<Home/>} />
// <Route path= "/about" element={<About/>}/>
// <Route path= "/movie" element={<Movie/>}/>
// <Route path= "/contact" element={<Contact/>}/>
//   </Route>
// )
//   )
return <RouterProvider router={router}/>
  

}

export default App
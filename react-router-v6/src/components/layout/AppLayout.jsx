import { Outlet,  useNavigation } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Loading } from "./Loder"


export const AppLayout = ()=>{
    const navigation = useNavigation(); // Tracks navigation state
    console.log(navigation.state); // Logs "idle", "loading", or "submitting"
  
    // Show loader if navigation state is loading
    if (navigation.state === "loading") return <Loading />;

    return(
        <>
        <Header/>
        <Outlet/>
       <Footer/>
        </>
    )

}
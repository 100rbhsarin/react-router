import { Outlet, useNavigate } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Loading } from "./Loder"


export const AppLayout = ()=>{
const Navigate = useNavigate()
console.log(Navigate)



if(Navigate.state === "loading" )return <Loading />

    return(
        <>
        <Header/>
        <Outlet/>
       <Footer/>
        </>
    )

}
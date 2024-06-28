import { Outlet } from "react-router-dom"
import { Header } from "../components"


const AboutLayout = () => {

    return (
        <>
            <Header />

            <Outlet />
        </>
    )
}

export default AboutLayout
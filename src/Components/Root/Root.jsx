import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

const Root = () => {
    return (
        <div className="md:mx-4 merriweather-light">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
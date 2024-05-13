import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../../Footer/Footer";

const Root = () => {
    return (
        <div className=" merriweather-light">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
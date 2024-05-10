import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { Tooltip as ReactTooltip } from 'react-tooltip';

const Navbar = () => {

    const navlinkStyles = ({ isActive }) => {
        return {
            border: isActive ? "2px solid #23BE0A" : "2px solid white",
            backgroundColor: isActive ? "none" : "white",
            color: isActive ? "#23BE0A" : "black",
            fontWeight: isActive ? "bold" : "normal"
        };
    };

    const links = (
        <>
            <li><NavLink to="/" style={navlinkStyles}>Home</NavLink></li>
            <li><NavLink to="/services" style={navlinkStyles}>Services</NavLink></li>
            <li>
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} className=" text-2xl font-medium flex items-center gap-1">Dashboard <IoIosArrowDropdownCircle className="text-semibold mt-1"/></div>
                    <ul tabIndex={0} className="dropdown-content text-xl font-medium menu p-2 bg-base-100 w-52">
                        <li><NavLink to="/addservice" style={navlinkStyles}>Add Service</NavLink></li>
                        <li><NavLink to="/manageservice" style={navlinkStyles}>Manage Service</NavLink></li>
                        <li><NavLink to="/bookedservice" style={navlinkStyles}>Booked-Services</NavLink></li>
                        <li><NavLink to="/servicetodo" style={navlinkStyles}>Service-To-Do</NavLink></li>
                    </ul>
                </div>
            
        </li>
        </>
    );

return (
    <div className="">
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content gap-6 text-2xl font-medium mt-3  p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to="/">
                    <a className="btn btn-ghost md:font-bold md:text-4xl">MERN <span className="text-red-500">verse</span></a>
                </Link>
            </div>

            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal gap-6 text-2xl font-medium">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-6 font-semibold mr-6">
                <div className="flex gap-4">
                    <Link to="/register">
                        <button className="btn bg-amber-200 text-2xl font-semibold px-6" id="regBtn">Register</button>
                        <ReactTooltip
                            anchorId="regBtn"
                            place="top"
                            variant="success"
                            content="Click Here to Register!"
                        />
                    </Link>
                    <Link to="/login">
                        <button className="btn bg-lime-200 text-2xl font-semibold px-3" id="loginBtn">Log In</button>
                        <ReactTooltip
                            anchorId="loginBtn"
                            place="top"
                            variant="info"
                            content="Click Here to Log In"
                        />
                    </Link>
                </div>

            </div>

        </div>
    </div>
);
};

export default Navbar;
import { IoCall, IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="p-10 bg-base-200 text-base-content">
            <div className="md:flex justify-between mb-4">
                <aside>
                    <p className="text-4xl font-semibold mb-4">Event <span className="text-red-600">Elevate</span></p>
                    <p className="flex items-center gap-2 text-lg"><IoCall /> +880 1728392970</p>
                    <p className="flex items-center gap-2 text-lg"><MdEmail />eventelevate32@gmail.com</p>
                    <p className="flex items-center gap-2 text-lg"><IoLocation />123 Gulshan Avenue , Badda , <br />Dhaka-1213 , Bangladesh</p>
                </aside>
                <nav className="text-lg flex flex-col">
                    <h6 className="footer-title text-2xl">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="text-lg flex flex-col">
                    <h6 className="footer-title text-2xl">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav className="text-lg flex flex-col">
                    <h6 className="footer-title text-2xl">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav className=" md:mx-0">
                    <h2 className="footer-title pt-8 text-center text-black border-b-2 border-gray-500 w-full pb-4 text-2xl">Social</h2>

                    <div className="grid grid-flow-col gap-2 md:gap-12">
                        <a><img src="https://i.ibb.co/GTL1Rfz/twitter-1.png" alt="" className="h-8 w-8" /></a>
                        <a><img src="https://i.ibb.co/dbvX6Fr/instagram-icon-1057-2227.jpg" alt="" className="h-8 w-8" /></a>
                        <a><img src="https://i.ibb.co/181L2mT/facebook-icon-488108-2.jpg" alt="" className="h-8 w-8" /></a>
                        <a><img src="https://i.ibb.co/hKQbH1J/3d-icon-social-media-app-23-2150049587.jpg" alt="" className="h-8 w-8" /></a>
                        <a><img src="https://i.ibb.co/fHBG2jM/github.png" alt="" className="h-8 w-8" /></a>
                    </div>
                </nav>
            </div>
            <hr />
            <div className="mt-3">
                <p className="text-center text-lg">Copyright © 2024 - All right reserved by Event Elevate</p>
            </div>

        </footer>
    );
};

export default Footer;
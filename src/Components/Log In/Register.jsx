import { Link } from "react-router-dom";

import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const Register = () => {

    useEffect(() => {
        Aos.init({ duration: 200 })
    }, [])

    return (
        <div className="w-full bg-amber-50 py-12">
            <div className="hero-content ">
                <div className="card shrink-0 bg-amber-100 w-full max-w-lg shadow-xl md:ml-24 ">
                    <h2 data-aos="flip-right" className="text-3xl text-center font-semibold mt-4">Register Now</h2>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input data-aos="fade-right" type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input data-aos="fade-left" type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input data-aos="fade-right" type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                data-aos="fade-left"
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button data-aos="fade-up" className="btn bg-orange-300 px-6">Register</button>
                        </div>
                    </form>
                    <div className="flex justify-center gap-2 mt-4">
                        <p className="mt-1">--------</p>
                        <p className="text-3xl text-center font-semibold mb-4">OR</p>
                        <p className="mt-1">--------</p>
                    </div>
                    <div className="mb-6 flex justify-center items-center gap-12">
                        <button data-aos="fade-right" className="btn h-16 px-6 py-1 w-3/4 md:ml-8 text-lg font-medium flex "><img src="https://i.ibb.co/PMh8F7x/google-symbol.png" alt="" className="h-10 w-10" /> Continue with Google </button>
                    </div>
                    <p className="text-xl font-semibold text-center mb-6">Already Have an Account? <Link to="/login" className="text-red-500">Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;

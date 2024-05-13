import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import Aos from "aos"
import { useContext, useEffect } from "react";
import "aos/dist/aos.css";
import { AuthContext } from '../providers/AuthProviders';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    useEffect(() => {
        Aos.init({ duration: 300 })
    }, [])

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        createUser(email,password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const handleGoogleLogin = () => {

    }

    return (
        <div className="w-full bg-amber-50 py-12">
            <ToastContainer />
            <div className="hero-content ">
                <div className="card shrink-0 bg-amber-100 w-full max-w-lg shadow-xl">
                    <h2 data-aos="flip-right" className="text-3xl text-center font-semibold mt-4">Register Now</h2>
                    <form onSubmit={handleRegister} className="card-body ">
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
                    <div className="flex justify-center gap-1">
                        <p>------------------</p>
                        <h2 className="text-xl font-medium text-center mb-3"> Continue With </h2>
                        <p>------------------</p>
                    </div>

                    <div className="mb-6 flex justify-center items-center gap-12">
                        <button data-aos="fade-right" onClick={handleGoogleLogin} className="btn h-16 px-6 py-1 md:ml-8 text-lg font-medium"><img src="https://i.ibb.co/PMh8F7x/google-symbol.png" alt="" className="h-10 w-10" /> </button>
                    </div>
                    <p className="text-xl font-semibold text-center mb-6">Already Have an Account? <Link to="/login" className="text-red-500">Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;

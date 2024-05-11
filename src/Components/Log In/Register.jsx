import { Link, useLocation, useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {

    const { createUser } = useContext(AuthContext);

    useEffect(() => {
        Aos.init({ duration: 200 });
    }, []);

    const googleProvider = new GoogleAuthProvider();

    const location = useLocation();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    useEffect(() => {
        Aos.init({ duration: 200 })
    }, [])

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
                console.log(loggedInUser);
                navigate(location?.state ? location.state : "/")

            })
            .catch(error => {
                console.error(error.message);
            })
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset();
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    useEffect(() => {
        Aos.init({ duration: 200 });
    }, []);

    return (
        <div className="w-full bg-amber-50 py-12">

            <div className="hero-content ">
                <div className="card shrink-0 bg-amber-100 w-full max-w-lg shadow-xl md:ml-24 ">
                    <h2 data-aos="flip-right" className="text-3xl text-center font-semibold mt-4">Register Now</h2>
                    <form onSubmit={handleRegister} className="card-body">
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
                        <button onClick={handleGoogleLogin} data-aos="fade-right" className="btn h-16 px-6 py-1 w-3/4  text-lg font-medium flex "><img src="https://i.ibb.co/PMh8F7x/google-symbol.png" alt="" className="h-10 w-10" /> Continue with Google </button>
                    </div>
                    <p className="text-xl font-semibold text-center mb-6">Already Have an Account? <Link to="/login" className="text-red-500">Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;

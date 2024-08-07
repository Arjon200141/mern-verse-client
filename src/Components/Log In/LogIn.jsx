import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Aos from "aos"
import { useContext, useEffect } from "react";
import "aos/dist/aos.css";
import { AuthContext } from "../providers/AuthProviders";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const LogIn = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        Aos.init({ duration: 300 })
    }, [])

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: 'Success!',
                    text: 'Register Successful !!!',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
                navigate("/");
            })
            .catch(error => console.log(error.message))
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: 'Success!',
                    text: 'Log In Successful !!!',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
                navigate("/");
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="w-full py-12 bg-sky-100/35">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Log In Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <ToastContainer />
            <div className="hero-content">
                <div className="card shrink-0 w-full max-w-lg shadow-xl bg-sky-200/35">
                    <h2 data-aos="flip-left" className="text-3xl text-center font-semibold mt-4 pt-6">Log in to your account</h2>
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input data-aos="fade-right" type="email" name="email" placeholder="Your Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input data-aos="fade-left" type="password" name="password" placeholder="Password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div data-aos="fade-up" className="form-control mt-6">
                            <button className="btn bg-red-300 text-lg font-medium">Log In</button>
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
                    <p className="text-xl font-semibold text-center mb-6">New Here ? <Link to="/register" className="text-red-500">Register Now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
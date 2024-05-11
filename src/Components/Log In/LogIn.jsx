import { Link } from "react-router-dom";
import Aos from "aos"
import { useContext, useEffect } from "react";
import "aos/dist/aos.css";
import { AuthContext } from "../providers/AuthProviders";



const LogIn = () => {

    const {signInUser} = useContext(AuthContext)

    useEffect(() => {
        Aos.init({ duration: 200 })
    }, [])

    const HandleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user={email,password}
        console.log(user);
        form.reset();
        signInUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error=> console.log(error.message))
    }


    return (
        <div className="w-full py-12 bg-sky-100 text-xl">
            <div className="hero-content">
                <div className="card shrink-0 w-full max-w-lg shadow-xl bg-sky-200 md:ml-20">
                    <h2 data-aos="flip-left" className="text-3xl text-center font-semibold mt-4 pt-6">Log in to your account</h2>
                    <form onSubmit={HandleLogin} className="card-body">
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
                    <div className="flex gap-2 justify-center">
                        <p>--------</p>
                        <p className="text-3xl text-center font-semibold mb-4">OR</p>
                        <p>--------</p>
                    </div>
                    <div className="mb-6 flex justify-center items-center gap-12">
                        <button data-aos="fade-right" className="btn h-16 px-6 py-1 text-lg font-medium flex w-3/4"><img src="https://i.ibb.co/PMh8F7x/google-symbol.png" alt="" className="h-10 w-10" /> Continue with Google </button>
                    </div>
                    <p className="text-xl font-semibold text-center mb-6">New Here ? <Link to="/register" className="text-red-500">Register Now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
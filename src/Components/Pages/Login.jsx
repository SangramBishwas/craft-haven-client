import { useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Custom Hook/useAuth";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { userLogin, googleLogin, githubLogin, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(user)
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        userLogin(email, password)
            .then(result => {
                console.log(result);
                toast.success('Logged in successfully')
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                toast.error('Invalid email and password')
                console.error(error)
            })
    }
    const handleLoginWithGoogle = () => {
        googleLogin()
        .then((result) => {
            console.log(result.user);
            toast.success('Logged in successfully')
            navigate(location?.state ? location.state : "/");
        })
        .catch(error => console.log(error))
    }
    const handleLoginWithGithub = () => {
        githubLogin()
        .then((result) => {
            console.log(result.user);
            toast.success('Logged in successfully');
            navigate(location?.state ? location.state : "/");
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="mx-5 md:mx-10 lg:mx-20 py-24">
            <div className="flex md:flex-row flex-col shadow-2xl lg:my-10 justify-between rounded-2xl">
                <div className="bg-lime-600 text-white p-5 md:p-20 md:space-y-10 space-y-5 w-full md:w-1/2 md:py-40 md:rounded-l-2xl rounded-t-2xl">
                    <h2 className="text-5xl font-semibold ">Hello Dear,</h2>
                    <p className="mb-10">Dear user/artist, if you do not have any account here and you want to login as well. please register first...</p>
                    <button className="btn text-lg bg-transparent hover:bg-green-700 text-white">
                        <Link to="/register">
                            Register
                        </Link>
                    </button>
                </div>
                <div className="py-5 w-full md:w-1/2">
                    <h2 className="text-center text-3xl font-semibold">Please LogIn</h2>
                    <div className="flex justify-center gap-10 mt-10">
                        <button onClick={handleLoginWithGoogle} className="text-3xl rounded-3xl"><FcGoogle /></button>
                        <button onClick={handleLoginWithGithub} className="text-3xl rounded-3xl"><ImGithub /></button>
                        <button className="text-3xl rounded-3xl"><FaFacebook /></button>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm  bg-base-100 mx-auto">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered border-lime-400" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="password" className="input input-bordered border-lime-400" required />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute top-14 right-3">{showPassword ?
                                    <FaEye /> : <FaEyeSlash />}</span>

                                <div className="flex justify-between">
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                    <label className="label">
                                        <span className="text-sm">Do not have account? <Link to="/register" className="hover:underline font-semibold">Register</Link>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;
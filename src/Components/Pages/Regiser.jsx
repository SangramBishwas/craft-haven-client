import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Custom Hook/useAuth";
import { toast } from "react-toastify";

const Regiser = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { creatUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const Register = (data) => {
        const { email, password, name, PhotoURL } = data;

        creatUser(email, password)
            .then((result) => {
                toast.success('Registration successful');
                console.log(result.user)
                updateUserProfile(name, PhotoURL)
                    .then(() => {
                        navigate("/")
                    })
                    .catch((error) => console.error(error))
            })
            .catch((error) => console.error(error))
    }
    return (
        <div>
            <div className="flex md:flex-row flex-col-reverse shadow-2xl lg:my-10 lg:pl-24 justify-between rounded-2xl">
                <div className="py-5 w-full md:w-1/2">
                    <h2 className="text-center text-3xl font-semibold">Register Now</h2>
                    <div className="card shrink-0 w-full max-w-sm  bg-base-100 mx-auto">
                        <form onSubmit={handleSubmit(Register)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Name"
                                    name="name" className="input input-bordered" required
                                    {...register("name", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" className="input input-bordered" required
                                    {...register("photoURL", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required
                                    {...register("email", { required: true })} />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="password" className="input input-bordered" required
                                    {...register("password", {
                                        required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z]).+$/
                                    })} />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute top-14 right-3">{showPassword ?
                                    <FaEye /> : <FaEyeSlash />}</span>
                                {errors.password && errors.password.type === "minLength" && (<span>Password must be atleast 6 digit.</span>)}
                                {errors.password && errors.password.type === "pattern" && (<span>Password must be atleast one uppercase and one lowercase letter.</span>)}
                                <div className="flex justify-between">
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                    <label className="label">
                                        <span className="text-sm">Already have account? <Link to="/login" className="hover:underline font-semibold">Login</Link>
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
                <div className="bg-lime-600 text-white p-5 md:p-20 md:space-y-10 space-y-5 w-full md:w-1/2 md:px-20 md:py-40 md:rounded-r-2xl rounded-t-2xl">
                    <h2 className="text-5xl font-semibold ">Hello Dear,</h2>
                    <p className="mb-10">Dear user/artist, if you are an already registered here and you have an account as well. please log in...</p>
                    <button className="btn text-lg bg-transparent hover:bg-green-700 text-white">
                        <Link to="/login">
                            Login
                        </Link>
                    </button>


                </div>
            </div>

        </div>
    );
};

export default Regiser;
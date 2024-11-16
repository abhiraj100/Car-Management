import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userExists } from "../redux/slice/auth";
import { server } from "../constants/server";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = () => {
    navigate('/signup');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const credentials = {
      email: formdata.get('email'), 
      password: formdata.get('password')
    };

    console.log("Credentials:", credentials);

    try {
      const { data } = await axios.post(`${server}/api/auth/login`, credentials, { withCredentials: true });
      console.log("Response:", data);

      if (data.success) {
        dispatch(userExists(data.user)); 
        navigate('/'); 
      }
    } catch (err) {
      console.error("Error:", err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div>
      <section className="min-h-screen flex flex-col">
        <nav className="p-4 text-center lg:text-left">
          <h1 className="font-bold uppercase tracking-wider text-center text-2xl text-indigo-600">
            Car Management Application
          </h1>
        </nav>
        <main className="flex-1 flex items-center justify-center">
          <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
            <h1 className="mb-6 font-bold text-gray-600 text-3xl tracking-wider">
              Sign In
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="py-2">
                <input
                  className="block w-full border-2 border-gray-100 focus:border-gray-400 px-4 py-2 rounded-lg bg-gray-100 focus:outline-none"
                  placeholder="Email"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="py-2">
                <input
                  className="block w-full border-2 border-gray-100 focus:border-gray-400 px-4 py-2 rounded-lg bg-gray-100 focus:outline-none"
                  placeholder="Password"
                  type="password"
                  name="password"
                  id="password"
                  required
                />
              </div>
              <div className="py-2">
                <button
                  className="block w-full border-2 px-4 py-2 rounded-lg bg-purple-600 text-white font-bold tracking-wider hover:bg-purple-700 focus:outline-none"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="mt-6">
              <span>Don't have an account? </span>
              <button
                className="underline text-purple-600 cursor-pointer hover:text-purple-800"
                onClick={handleNavigate}
              >
                Create One
              </button>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Login;

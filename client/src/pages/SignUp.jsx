import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { server } from "../constants/server";
import { userExists } from "../redux/slice/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()

  const handleNavigate = () => {
    navigate("/login");
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const formdata=new FormData(e.target)
    const credentials ={
      name:formdata.get("name"),
      email:formdata.get("email"),
      password:formdata.get("password")
    }
    console.log(credentials)
    try {
      const {data}=await axios.post(`${server}/api/auth/signup`,credentials,{withCredentials:true})
      if(data.success) {
        dispatch(userExists(data.user))
        navigate('/')
      }
    } catch (err) {
      console.log(err.response?.data.message)
    }
    // Add form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="font-sans antialiased bg-grey-lightest">
      {/* Content */}
      <div className="w-full bg-grey-lightest" style={{ paddingTop: "4rem" }}>
        <div className="container mx-auto py-8">
          <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
            <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
              Register for a free account
            </div>
            <form onSubmit={handleSubmit} className="py-4 px-8">
              <div className="flex mb-4">
                <div className=" w-full mr-1">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="first_name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your first name"
                    required
                  />
                </div>
              
              </div>
              <div className="mb-4">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Your secure password"
                  required
                />
                <p className="text-grey text-xs mt-1">At least 6 characters</p>
              </div>
              <div className="flex items-center justify-between mt-8">
                <button
                  className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <p className="text-center my-4">
            <a
              onClick={handleNavigate}
              className="text-grey-dark cursor-pointer text-sm no-underline hover:text-grey-darker"
            >
              I already have an account
            </a>
          </p>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full bg-grey-lighter py-8">
        <div className="container mx-auto text-center px-8">
          <p className="text-grey-dark mb-2 text-sm">
            This is a product of <span className="font-bold">Car Management</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SignUp;

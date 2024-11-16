// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import Home from './pages/Home';
import ProtectRoute from "./Components/auth/ProtectRoute";
import Navbar from './Components/layout/Navbar';
import PageNotFound from "./pages/PageNotFound";
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import { server } from "./constants/server";
import { useDispatch, useSelector } from "react-redux";
import {userExists,userNonExists} from './redux/slice/auth'

import Products from "./pages/Cars";
import Cars from "./pages/Cars";



function App() {
  const { user, loader } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const loadProfile = async () => {
      console.log()
      try {
        console.log("dsnsdm",server)
        const { data } = await axios.get(`${server}/api/user`, { withCredentials: true });
        console.log("user",data)
        if (data.success) {
          dispatch(userExists(data.user));
        } else {
          dispatch(userNonExists(null));
        }
      } catch (err) {
        dispatch(userNonExists(null));
        console.log(err.response?.data?.message || "Error loading user profile");
      }
    };
    loadProfile();
  }, [dispatch]);

  // Optional: Show loading state
  if (loader) {
    return <div>Loading...</div>  // Or your loading component
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectRoute user={user} />}>
          <Route path='/cars' element={<Cars/>}></Route>
          {/* <Route path='/listing' element={<Ca/>}/> */}
        </Route>
        <Route element={<ProtectRoute user={!user} navigate="/" />}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
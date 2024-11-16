import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
const ProtectRoute = ({navigate='/login' ,user}) => {
  
  return (
    user?<Outlet/>:<Navigate to={navigate}/>
  )
}

export default ProtectRoute
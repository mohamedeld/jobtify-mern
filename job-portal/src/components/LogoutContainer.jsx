import React, { useState } from 'react'
import { useDashboardCtx } from '../context/DashboradCtx';
import Wrapper from '../assets/wrappers/Logout';
import { FaCaretDown, FaUserCircle } from 'react-icons/fa';

const LogoutContainer = () => {
  const [showLogout,setShowLogout] = useState(false);
  const {user,
    logoutUser} = useDashboardCtx();
    const toggleShowLogout = ()=>{
      setShowLogout(prev=> !prev);
    }
  return (
    <Wrapper>
      <button type="button" className='btn logout-btn' onClick={toggleShowLogout}>
        <FaUserCircle/>
        {user?.name}
        <FaCaretDown/>
      </button>
      <div className={`dropdown ${showLogout? 'show-dropdown' :''}`}>
        <button type="button" className='dropdown-btn' onClick={logoutUser}>logout</button>
      </div>
    </Wrapper>
  )
}

export default LogoutContainer
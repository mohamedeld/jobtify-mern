import Wrapper from '../assets/wrappers/Navbar'
import {FaAlignLeft} from "react-icons/fa"
import Logo from './Logo'
import { useDashboardCtx } from '../context/DashboradCtx';
const Navbar = () => {
  const {user,
    showSidebar,
    isDarkTheme,
    toggleShowSidebar,
    toggleIsDarkTheme,
    logoutUser} = useDashboardCtx();
    
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className='toggle-btn' onClick={toggleShowSidebar}>
          <FaAlignLeft/>
        </button>
        <div>
          <Logo/>
          <h4 className='logo-text'>Dashboard</h4>
        </div>
        <div className='btn-container'>toggle/logout</div>
      </div>
    </Wrapper>
  )
}

export default Navbar
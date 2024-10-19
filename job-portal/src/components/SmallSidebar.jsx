import { FaTimes } from 'react-icons/fa'
import Wrapper from '../assets/wrappers/SmallSidebarPage'
import Logo from './Logo'
import links from '../utils/links'
import { NavLink } from 'react-router-dom'
import { useDashboardCtx } from '../context/DashboradCtx'

const SmallSidebar = () => {
  const {user,
    showSidebar,
    isDarkTheme,
    toggleShowSidebar,
    toggleIsDarkTheme,
    logoutUser} = useDashboardCtx();
  return (
    <Wrapper>
      <div className={`sidebar-container ${showSidebar ? 'show-sidebar' : ''}`}>
        <div className="content">
          <button type="button" className='close-btn' onClick={toggleShowSidebar}>
            <FaTimes/>
          </button>
          <header>
            <Logo/>
          </header>
          <div className="nav-links">
            {links?.map(link=>{
              
              const {text,path,icon} = link;
              return (
                <NavLink to={path} key={text} className="nav-link" onClick={toggleShowSidebar}>
                  <span className='icon'>{icon}</span>
                  {text}
                </NavLink>
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar
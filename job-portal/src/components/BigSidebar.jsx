import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/BigSidebarPage";
import { useDashboardCtx } from "../context/DashboradCtx";
import Logo from "./Logo";
import links from "../utils/links";

const BigSidebar = () => {
  const { showSidebar } = useDashboardCtx();
  return (
    <Wrapper>
      <div className={`sidebar-container ${showSidebar ? "show-sidebar" : ""}`}>
        <div className="content">
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links?.map((link) => {
              const { text, path, icon } = link;
              return (
                <NavLink to={path} key={text} className="nav-link" end>
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;

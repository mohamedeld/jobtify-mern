import Wrapper from "../assets/wrappers/LandingPage"
import logo from "../assets/imgs/logo.svg";
import main from "../assets/imgs/main.svg"
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify logo" className="logo"/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>job <span>tracking</span> app</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum earum quibusdam facere temporibus dolore perferendis hic aliquam quaerat laborum deleniti exercitationem quae explicabo, mollitia nostrum rerum nobis aperiam cum.</p>
          <Link to="/register" className="btn register-link">Register</Link>
          <Link to="/login" className="btn ">Login / Demo User</Link>
        </div>
        <img src={main} alt="main home page image" className="img main-img"/>
      </div>
    </Wrapper>
  )
}

export default Landing
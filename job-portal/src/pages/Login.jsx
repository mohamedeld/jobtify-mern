import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { Logo } from "../components"
import FormRow from "../components/FormRow"

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo/>
        <h4>Login</h4>
        <FormRow type={"email"} placeholder={"Enter your email"} label={"Email"} name={"email"}/>
        <FormRow type={"password"} placeholder={"Enter your password"} label={"Password"} name={"password"}/>
        <button type="submit" className="btn btn-block">submit</button>
        <button type="submit" className="btn btn-block">explore the app</button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">Register</Link>
        </p>
      </form>

    </Wrapper>
  )
}

export default Login
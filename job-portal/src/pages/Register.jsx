import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { Logo } from "../components"
import { Link } from "react-router-dom";
import FormRow from "../components/FormRow";
const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo/>
        <h4>Register</h4>
        <FormRow type={"text"} placeholder={"Enter your first name"} label={"First Name"} name={"first-name"}/>
        <FormRow type={"text"} placeholder={"Enter your last name"} label={"Last Name"} name={"last-name"}/>
        <FormRow type={"text"} placeholder={"Enter your location"} label={"Location"} name={"location"}/>
        <FormRow type={"email"} placeholder={"Enter your email"} label={"Email"} name={"email"}/>
        <FormRow type={"password"} placeholder={"Enter your password"} label={"Password"} name={"password"}/>
        <button type="submit" className="btn btn-block">submit</button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">Login</Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
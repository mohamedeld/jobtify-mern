import { Link, useRouteError } from "react-router-dom"
import Wrapper from "../assets/wrappers/ErrorPage";
import notFound from "../assets/imgs/not-found.svg"
const Error = () => {
  const error = useRouteError();
  if(error?.status === 404){
    return (
      <Wrapper>
        <div>
          <img src={notFound} alt="not found logo" />
          <h3>Ohh! page not found</h3>
          <p>we can&apos;t seem to find the page you are looking for </p>
          <Link href="/dashboard">back home</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <h1>something went wrong</h1>
        </div> 
      <Link to='/'>Go to home page</Link>
    </Wrapper>
  )
}

export default Error
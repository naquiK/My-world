import { NavLink, useRouteError } from "react-router-dom"


const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
  return (
    <div>
      {error && <p>{error.data}</p>}
      <NavLink to={'/'}>
      <button>
      Go Back to Homepage
      </button>
      </NavLink>
    </div>
  )
}

export default ErrorPage

import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"

const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? <Redirect to="/sign_in" /> : <Component {...props} />
      }
    />
  )
}

export default UserRoute

UserRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}

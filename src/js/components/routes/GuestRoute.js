import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"

const GuestRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  )
}

export default GuestRoute

GuestRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}

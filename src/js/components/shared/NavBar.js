import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { userLogout } from "./../../actions/auth"

const NavBar = ({ isAuthenticated, logout }) => {
  return isAuthenticated && <button onClick={logout}>Logout</button>
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(userLogout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)

NavBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

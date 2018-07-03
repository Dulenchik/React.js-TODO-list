import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { userLogout } from "./../../actions/auth"

import { Segment, Header, Button, Icon } from "semantic-ui-react"

const NavBar = ({ isAuthenticated, logout }) => {
  return (
    <Segment.Group horizontal className="navbar">
      <Segment inverted color="blue">
        <Icon name="tasks" size="big" />
      </Segment>
      <Segment inverted color="blue" textAlign="center">
        <Header size="huge">Simple TODO list</Header>
      </Segment>
      <Segment inverted color="blue" textAlign="right">
        {isAuthenticated && (
          <Button color="blue" onClick={logout}>
            Logout
          </Button>
        )}
      </Segment>
    </Segment.Group>
  )
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

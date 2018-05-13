import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { deleteFlashMessage } from "./../actions/flashMessages"
import FlashMessage from "./FlashMessage"

const FlashMessagesList = props => {
  const { flashMessages, onClose } = { ...props }

  return (
    <div>
      {flashMessages.map(flashMessage => (
        <FlashMessage
          key={flashMessage.id}
          {...flashMessage}
          onClose={onClose}
        />
      ))}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  flashMessages: state.flashMessages
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClose: id => dispatch(deleteFlashMessage(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessagesList)

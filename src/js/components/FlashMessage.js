import React from "react"
import PropTypes from "prop-types"
import { Message } from "semantic-ui-react"

const FlashMessage = props => {
  const { id, exclamation, text, type, onClose } = { ...props }
  return (
    <Message
      header={!!exclamation && exclamation}
      content={text}
      onDismiss={() => onClose(id)}
      success={type === "success"}
      info={type === "info"}
      warning={type === "warning"}
      error={type === "error"}
    />
  )
}

FlashMessage.propTypes = {
  id: PropTypes.number.isRequired,
  exclamation: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "info", "warning", "error"]),
  onClose: PropTypes.func.isRequired
}

export default FlashMessage

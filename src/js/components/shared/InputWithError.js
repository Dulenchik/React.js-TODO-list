import React from "react"
import { List, Form } from "semantic-ui-react"

const InputWithError = ({ children, errors }) => {
  const hasErrors = !!errors
  return (
    <Form.Field error={hasErrors}>
      {children}
      {hasErrors && <List bulleted items={errors} />}
    </Form.Field>
  )
}

export default InputWithError

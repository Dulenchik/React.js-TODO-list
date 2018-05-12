import React from "react"
import PropTypes from "prop-types"
import { Button, Image, List } from "semantic-ui-react"

const Item = props => {
  const { id, text, createdOn, image, onDelete } = props

  return (
    <List.Item>
      <List.Header>
        <span>{createdOn}</span>

        <Button
          size="mini"
          compact
          basic
          onClick={() => onDelete(id)}
          icon="trash"
        />
      </List.Header>

      <List.Description>{text}</List.Description>

      {image && <Image src={image} size="small" />}
    </List.Item>
  )
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  createdOn: PropTypes.string.isRequired,
  image: PropTypes.string,
  onDelete: PropTypes.func.isRequired
}

export default Item

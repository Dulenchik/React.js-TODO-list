import React from "react"
import PropTypes from "prop-types"
import { Button, Glyphicon } from "react-bootstrap"

const Item = props => {
  const { id, text, createdOn, image, onDelete } = props

  return (
    <li className="text-left">
      <div>
        <span>{createdOn}</span>

        <Button onClick={() => onDelete(id)}>
          <Glyphicon glyph="trash" />
        </Button>
      </div>

      <p>{text}</p>

      {image && <img src={image} widht={120} height={80} alt="Commnet" />}
    </li>
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

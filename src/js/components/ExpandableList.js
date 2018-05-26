import React from "react"
import PropTypes from "prop-types"
import { Accordion } from "semantic-ui-react"

class ExpandableList extends React.Component {
  constructor(props) {
    super(props)

    this.state = { isOpened: false }
  }

  onClick = e => {
    this.setState({ isOpened: !this.state.isOpened })
  }

  render() {
    const { titleElementProps, contentElementProps } = this.props
    const TitleElement = this.props.titleElement
    const ContentElement = this.props.contentElement
    const isOpened = this.state.isOpened

    return (
      <Accordion>
        <Accordion.Title active={isOpened}>
          <TitleElement {...titleElementProps} onClick={this.onClick} />
        </Accordion.Title>

        <Accordion.Content active={isOpened}>
          <ContentElement {...contentElementProps} />
        </Accordion.Content>
      </Accordion>
    )
  }
}

ExpandableList.propTypes = {
  titleElement: PropTypes.func.isRequired,
  titleElementProps: PropTypes.object,
  contentElement: PropTypes.func.isRequired,
  contentElementProps: PropTypes.object
}

export default ExpandableList

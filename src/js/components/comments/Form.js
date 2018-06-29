import React from "react"
import PropTypes from "prop-types"
import { Form as UIForm } from "semantic-ui-react"
import Dropzone from "react-dropzone"

// Max size is 10Mb
const maxSize = 1024 * 1024 * 1024 * 10

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = { text: "", file: null }
  }

  handleCreateComment = e => {
    e.preventDefault()
    if (!this.state.text) return
    this.props.onCreate(this.state.text, this.state.file)
    this.setState({ text: "", file: null })
  }

  onDropAccepted = files => {
    this.setState({ file: files[0].preview })
  }

  onChange = e => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <UIForm onSubmit={this.handleCreateComment}>
        <UIForm.TextArea
          placeholder="Enter Your Comment"
          value={this.state.text}
          onChange={this.onChange}
          autoHeight
        />

        <UIForm.Field>
          {this.state.file ? (
            <img src={this.state.file} width="60" />
          ) : (
            <Dropzone
              className="dropzone"
              accept="image/jpeg, image/png"
              multiple={false}
              maxSize={maxSize}
              onDropAccepted={files => this.onDropAccepted(files)}
            >
              <div>Click her to select an image for upload</div>
            </Dropzone>
          )}
        </UIForm.Field>

        <UIForm.Group>
          <UIForm.Button size="large" type="submit" color="blue">
            Save
          </UIForm.Button>

          <UIForm.Button
            basic
            size="large"
            type="button"
            onClick={this.props.onClose}
          >
            Cancel
          </UIForm.Button>
        </UIForm.Group>
      </UIForm>
    )
  }
}

Form.propTypes = {
  onClose: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired
}

export default Form

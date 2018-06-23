import React from "react"
import PropTypes from "prop-types"

import { Form, Header, Divider } from "semantic-ui-react"
import Datetime from "react-datetime"

const dateFormat = "DD/MM/YYYY"
const timeFormat = "HH:mm"

class DeadlineForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = { date: props.date || "", time: props.time || "" }
  }

  setDate = value => this.setState({ date: value.format(dateFormat) })
  setTime = value => this.setState({ time: value.format(timeFormat) })
  onSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.props.taskId, this.state.date, this.state.time)
    this.props.close()
  }

  render() {
    return (
      <div>
        <Header textAlign="center">Deadline</Header>
        <Divider />
        <Form onSubmit={this.onSubmit}>
          <Form.Group>
            <Datetime
              viewMode="days"
              timeFormat={false}
              dateFormat={dateFormat}
              closeOnSelect
              value={this.state.date}
              onChange={this.setDate}
              renderInput={props => (
                <Form.Input {...props} label="Date" placeholder={dateFormat} />
              )}
            />

            <Datetime
              viewMode="time"
              dateFormat={false}
              timeFormat={timeFormat}
              value={this.state.time}
              onChange={this.setTime}
              renderInput={props => (
                <Form.Input {...props} label="Time" placeholder={timeFormat} />
              )}
            />
          </Form.Group>

          <Form.Group>
            <Form.Button size="large" type="submit" color="blue">
              Save
            </Form.Button>
            <Form.Button
              basic
              size="large"
              type="button"
              onClick={this.props.close}
            >
              Cancel
            </Form.Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

DeadlineForm.propTypes = {
  date: PropTypes.string,
  time: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
}

export default DeadlineForm

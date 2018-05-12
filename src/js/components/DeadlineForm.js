import React from "react"
import PropTypes from "prop-types"

import { Form, Grid, Header, Divider } from "semantic-ui-react"
import Datetime from "react-datetime"

class DeadlineForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = { date: props.date || "", time: props.time || "" }
  }

  setDate = value => this.setState({ date: value.format("DD/MM/YYYY") })
  setTime = value => this.setState({ time: value.format("HH:mm") })
  onSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.props.taskId, this.state.date, this.state.time)
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
              dateFormat="DD/MM/YYYY"
              closeOnSelect
              value={this.state.date}
              onChange={this.setDate}
              renderInput={props => (
                <Form.Input {...props} label="Date" placeholder="DD/MM/YYYY" />
              )}
            />

            <Datetime
              viewMode="time"
              dateFormat={false}
              timeFormat="HH:mm"
              value={this.state.time}
              onChange={this.setTime}
              renderInput={props => (
                <Form.Input {...props} label="Time" placeholder="HH:MM" />
              )}
            />
          </Form.Group>

          <Form.Group>
            <Form.Button size="large" type="submit" color="blue">
              Save
            </Form.Button>
            <Form.Button basic size="large" type="button">
              Cancel
            </Form.Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default DeadlineForm

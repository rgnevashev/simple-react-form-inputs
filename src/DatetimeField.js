import React from 'react'
import DateTime from 'react-datetime'
import moment from 'moment'

import { propTypes, defaultProps } from './propTypes.js'
import WrapperField from './WrapperField.js'

export default class DatetimeField extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value,
      timezone: nextProps.timezone
    })
  }

  onChange(date) {
    const value = _.isString(date) ? moment(date).toDate() : date.toDate()
    this.setState({ value })
    this.props.onChange(value)
  }

  convertToTz(date, timezone) {
    return date && timezone ?
      moment(date).tz(timezone) :
      date
  }

  render() {
    const props = this.props
    const { value } = this.state

    return (
      <WrapperField {...props}>
        <DateTime
          defaultValue={this.convertToTz(value, props.timezone)}
          onChange={date => this.onChange(date)}
          onBlur={() => props.onChange(value)}
          value={this.convertToTz(value, props.timezone)}
          timeConstraints={props.timeConstraints}
          inputProps={{
            placeholder: props.placeholder || props.passProps.placeholder
          }}
          {...props.passProps}
        />
      </WrapperField>
    )
  }
}
DatetimeField.propTypes = {
  ...propTypes,
  timeConstraints: React.PropTypes.object,
  timezone: React.PropTypes.any
}
DatetimeField.defaultProps = {
  ...defaultProps,
  timezone: false,
  timeConstraints: {
    minutes: {
      step: 5
    }
  }
}

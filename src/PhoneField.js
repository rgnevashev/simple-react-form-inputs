/* eslint-disable no-nested-ternary */
import React from 'react'
import PropTypes from 'prop-types'
import PhoneInput from 'react-phone-number-input'

//import 'react-phone-number-input/rrui.css'
//import 'react-phone-number-input/style.css'

import { propTypes, defaultProps } from './propTypes.js'
import WrapperField from './WrapperField.js'

export default class PhoneField extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value })
  }

  onChange(value, country) {
    this.setState({ value })
    this.props.onChange(value)
    /*
    if (this.props.onChangeCountry) {
      this.props.onChangeCountry(country)
    }*/
  }

  render() {
    const { value } = this.state

    return (
      <WrapperField {...this.props}>
        <PhoneInput
          value={value}
          country={this.props.country.toUpperCase()}
          //preferredCountries={this.props.preferredCountries}
          //flagsImagePath="/img/flags.png"
          className="form-control"
          onChange={(phone, country) => this.onChange(phone, country)}
          {...this.props.passProps}
        />
      </WrapperField>
    )
  }
}
PhoneField.propTypes = {
  ...propTypes,
  country: PropTypes.string,
  //preferredCountries: PropTypes.array,
  //onChangeCountry: PropTypes.func
}
PhoneField.defaultProps = {
  ...defaultProps,
  country: 'US',
  //preferredCountries: ['us', 'gb']
}


/*
export default class PhoneField extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value })
  }

  onChange(value, country) {
    this.setState({ value })
    this.props.onChange(value)
    if (this.props.onChangeCountry) {
      this.props.onChangeCountry(country)
    }
  }

  render() {
    const { value } = this.state

    return (
      <WrapperField {...this.props}>
        <PhoneInput
          value={value}
          defaultCountry={this.props.country}
          preferredCountries={this.props.preferredCountries}
          flagsImagePath="/img/flags.png"
          className="form-control"
          onChange={(phone, country) => this.onChange(phone, country)}
          {...this.props.passProps}
        />
      </WrapperField>
    )
  }
}
PhoneField.propTypes = {
  ...propTypes,
  country: PropTypes.string,
  preferredCountries: PropTypes.array,
  onChangeCountry: PropTypes.func
}
PhoneField.defaultProps = {
  ...defaultProps,
  country: 'us',
  preferredCountries: ['us', 'gb']
}
*/

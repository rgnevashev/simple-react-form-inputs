import React from 'react'
import PropTypes from 'prop-types'
import { propTypes as fieldTypePropTypes } from 'react-simpl-form/lib/FieldType'

export const propTypes = {
  ...fieldTypePropTypes,
  bsSize: PropTypes.string, // FormGroup one of: "lg", "large", "sm", "small"
  validationState: PropTypes.string, // FormGroup one of: 'success', 'warning', 'error', null
  fieldType: PropTypes.string, // FormControl:type Only relevant if componentClass is 'input'
  htmlFor: PropTypes.string, // ControlLabel
  srOnly: PropTypes.bool, // ControlLabel
  labelCol: PropTypes.number, // ControlLabel
  leftInputGroupAddon: PropTypes.any, // InputGroup.Addon
  leftInputGroupButton: PropTypes.any, // InputGroup.Button
  leftInputGroup: PropTypes.any, // InputGroup
  rightInputGroupAddon: PropTypes.any, // InputGroup.Addon
  rightInputGroupButton: PropTypes.any, // InputGroup.Button
  rightInputGroup: PropTypes.any, // InputGroup
  inputGroup: PropTypes.bool, // InputGroup
  helpText: PropTypes.any, // HelpBlock
  labelText: PropTypes.any,
  placeholder: PropTypes.any, // FormControl
  static: PropTypes.bool,
  feedback: PropTypes.bool,
  noLabel: PropTypes.bool,
  changeOnKeyDown: PropTypes.bool
}

export const defaultProps = {
  validationState: null,
  srOnly: false,
  labelCol: 0,
  inputGroup: false,
  static: false,
  feedback: false,
  noLabel: false,
  changeOnKeyDown: true
}

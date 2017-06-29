'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FieldType = require('react-simpl-form/lib/FieldType');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = exports.propTypes = (0, _extends3.default)({}, _FieldType.propTypes, {
  bsSize: _propTypes2.default.string, // FormGroup one of: "lg", "large", "sm", "small"
  validationState: _propTypes2.default.string, // FormGroup one of: 'success', 'warning', 'error', null
  fieldType: _propTypes2.default.string, // FormControl:type Only relevant if componentClass is 'input'
  htmlFor: _propTypes2.default.string, // ControlLabel
  srOnly: _propTypes2.default.bool, // ControlLabel
  labelCol: _propTypes2.default.number, // ControlLabel
  leftInputGroupAddon: _propTypes2.default.any, // InputGroup.Addon
  leftInputGroupButton: _propTypes2.default.any, // InputGroup.Button
  leftInputGroup: _propTypes2.default.any, // InputGroup
  rightInputGroupAddon: _propTypes2.default.any, // InputGroup.Addon
  rightInputGroupButton: _propTypes2.default.any, // InputGroup.Button
  rightInputGroup: _propTypes2.default.any, // InputGroup
  inputGroup: _propTypes2.default.bool, // InputGroup
  helpText: _propTypes2.default.any, // HelpBlock
  labelText: _propTypes2.default.any,
  placeholder: _propTypes2.default.any, // FormControl
  static: _propTypes2.default.bool,
  feedback: _propTypes2.default.bool,
  noLabel: _propTypes2.default.bool,
  changeOnKeyDown: _propTypes2.default.bool
});

var defaultProps = exports.defaultProps = {
  validationState: null,
  srOnly: false,
  labelCol: 0,
  inputGroup: false,
  static: false,
  feedback: false,
  noLabel: false,
  changeOnKeyDown: true
};
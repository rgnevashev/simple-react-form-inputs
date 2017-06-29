'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormGroup = require('react-bootstrap/lib/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _InputGroup = require('react-bootstrap/lib/InputGroup');

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _ControlLabel = require('react-bootstrap/lib/ControlLabel');

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

var _HelpBlock = require('react-bootstrap/lib/HelpBlock');

var _HelpBlock2 = _interopRequireDefault(_HelpBlock);

var _propTypes = require('./propTypes.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WrapperField = function WrapperField(_ref) {
  var children = _ref.children,
      bsSize = _ref.bsSize,
      labelCol = _ref.labelCol,
      errorMessage = _ref.errorMessage,
      feedback = _ref.feedback,
      validationState = _ref.validationState,
      placeholder = _ref.placeholder,
      noLabel = _ref.noLabel,
      componentClass = _ref.componentClass,
      htmlFor = _ref.htmlFor,
      srOnly = _ref.srOnly,
      label = _ref.label,
      labelText = _ref.labelText,
      value = _ref.value,
      statical = _ref.statical,
      inputGroup = _ref.inputGroup,
      leftInputGroupAddon = _ref.leftInputGroupAddon,
      leftInputGroupButton = _ref.leftInputGroupButton,
      leftInputGroup = _ref.leftInputGroup,
      rightInputGroupAddon = _ref.rightInputGroupAddon,
      rightInputGroupButton = _ref.rightInputGroupButton,
      rightInputGroup = _ref.rightInputGroup,
      helpText = _ref.helpText;
  return _react2.default.createElement(
    _FormGroup2.default,
    {
      bsSize: bsSize,
      validationState: errorMessage ? 'error' : value && feedback ? null : validationState
    },
    componentClass !== 'checkbox' && (label || placeholder) && !noLabel && (labelCol ? _react2.default.createElement(
      _Col2.default,
      { sm: labelCol, componentClass: _ControlLabel2.default },
      label || placeholder || ''
    ) : _react2.default.createElement(
      _ControlLabel2.default,
      { htmlFor: htmlFor, srOnly: srOnly },
      label || placeholder || ''
    )),
    labelText && _react2.default.createElement(
      _HelpBlock2.default,
      { style: { marginTop: -5 } },
      labelText
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)((0, _defineProperty3.default)({}, 'col-sm-' + (12 - labelCol), labelCol > 0)) },
      inputGroup ? _react2.default.createElement(
        _InputGroup2.default,
        null,
        leftInputGroupAddon ? _react2.default.createElement(
          _InputGroup2.default.Addon,
          null,
          leftInputGroupAddon
        ) : leftInputGroupButton ? _react2.default.createElement(
          _InputGroup2.default.Button,
          null,
          leftInputGroupButton
        ) : _react2.default.createElement(
          'span',
          null,
          leftInputGroup
        ),
        _react2.default.createElement(
          'div',
          null,
          children
        ),
        rightInputGroupAddon ? _react2.default.createElement(
          _InputGroup2.default.Addon,
          null,
          rightInputGroupAddon
        ) : rightInputGroupButton ? _react2.default.createElement(
          _InputGroup2.default.Button,
          null,
          rightInputGroupButton
        ) : _react2.default.createElement(
          'span',
          null,
          rightInputGroup
        )
      ) : statical ? _react2.default.createElement(
        _FormControl2.default.Static,
        null,
        value
      ) : _react2.default.createElement(
        'div',
        null,
        children
      ),
      errorMessage && _react2.default.createElement(
        _HelpBlock2.default,
        null,
        errorMessage
      ),
      feedback && _react2.default.createElement(_FormControl2.default.Feedback, null),
      helpText && _react2.default.createElement(
        _HelpBlock2.default,
        null,
        helpText
      )
    )
  );
}; /* eslint-disable no-nested-ternary */


WrapperField.propTypes = (0, _extends3.default)({}, _propTypes.propTypes);
WrapperField.defaultProps = (0, _extends3.default)({}, _propTypes.defaultProps);

exports.default = WrapperField;
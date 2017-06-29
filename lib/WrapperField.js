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

var _reactBootstrap = require('react-bootstrap');

var _propTypes = require('./propTypes.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-nested-ternary */
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
    _reactBootstrap.FormGroup,
    {
      bsSize: bsSize,
      validationState: errorMessage ? 'error' : value && feedback ? null : validationState
    },
    componentClass !== 'checkbox' && (label || placeholder) && !noLabel && (labelCol ? _react2.default.createElement(
      _reactBootstrap.Col,
      { sm: labelCol, componentClass: _reactBootstrap.ControlLabel },
      label || placeholder || ''
    ) : _react2.default.createElement(
      _reactBootstrap.ControlLabel,
      { htmlFor: htmlFor, srOnly: srOnly },
      label || placeholder || ''
    )),
    labelText && _react2.default.createElement(
      _reactBootstrap.HelpBlock,
      { style: { marginTop: -5 } },
      labelText
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)((0, _defineProperty3.default)({}, 'col-sm-' + (12 - labelCol), labelCol > 0)) },
      inputGroup ? _react2.default.createElement(
        _reactBootstrap.InputGroup,
        null,
        leftInputGroupAddon ? _react2.default.createElement(
          _reactBootstrap.InputGroup.Addon,
          null,
          leftInputGroupAddon
        ) : leftInputGroupButton ? _react2.default.createElement(
          _reactBootstrap.InputGroup.Button,
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
          _reactBootstrap.InputGroup.Addon,
          null,
          rightInputGroupAddon
        ) : rightInputGroupButton ? _react2.default.createElement(
          _reactBootstrap.InputGroup.Button,
          null,
          rightInputGroupButton
        ) : _react2.default.createElement(
          'span',
          null,
          rightInputGroup
        )
      ) : statical ? _react2.default.createElement(
        _reactBootstrap.FormControl.Static,
        null,
        value
      ) : _react2.default.createElement(
        'div',
        null,
        children
      ),
      errorMessage && _react2.default.createElement(
        _reactBootstrap.HelpBlock,
        null,
        errorMessage
      ),
      feedback && _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null),
      helpText && _react2.default.createElement(
        _reactBootstrap.HelpBlock,
        null,
        helpText
      )
    )
  );
};

WrapperField.propTypes = (0, _extends3.default)({}, _propTypes.propTypes);
WrapperField.defaultProps = (0, _extends3.default)({}, _propTypes.defaultProps);

exports.default = WrapperField;
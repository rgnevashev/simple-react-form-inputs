'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactBootstrap = require('react-bootstrap');

var _reactToggle = require('react-toggle');

var _reactToggle2 = _interopRequireDefault(_reactToggle);

require('react-toggle/style.css');

var _propTypes = require('./propTypes.js');

var _WrapperField = require('./WrapperField.js');

var _WrapperField2 = _interopRequireDefault(_WrapperField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxField = function (_React$Component) {
  (0, _inherits3.default)(CheckboxField, _React$Component);

  function CheckboxField(props) {
    (0, _classCallCheck3.default)(this, CheckboxField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CheckboxField.__proto__ || Object.getPrototypeOf(CheckboxField)).call(this, props));

    _this.state = {
      value: props.value
    };
    return _this;
  }

  (0, _createClass3.default)(CheckboxField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ value: nextProps.value });
    }
  }, {
    key: 'onChange',
    value: function onChange(value) {
      this.setState({ value: value });
      this.props.onChange(value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = (0, _extends3.default)({}, this.props, {
        componentClass: 'checkbox'
      });
      var value = this.state.value;


      return _react2.default.createElement(
        _WrapperField2.default,
        props,
        props.toggle ? _react2.default.createElement(
          'label',
          { className: 'checkbox', style: { display: 'flex', alignItems: 'center' } },
          props.labelOff && _react2.default.createElement(
            'span',
            { className: (0, _classnames2.default)('labelOff', { 'not-active': !!value }), style: { marginRight: 5 } },
            props.labelOff
          ),
          _react2.default.createElement(_reactToggle2.default, (0, _extends3.default)({
            checked: !!value,
            disabled: props.disabled,
            onChange: function onChange(event) {
              return _this2.onChange(event.target.checked);
            },
            icons: {
              unchecked: false,
              checked: false
            }
          }, props.passProps)),
          props.label && !props.labelOn && _react2.default.createElement(
            'span',
            { style: { marginLeft: 5 } },
            props.label
          ),
          props.labelOn && _react2.default.createElement(
            'span',
            { className: (0, _classnames2.default)('labelOn', { 'not-active': !value }), style: { marginLeft: 5 } },
            props.labelOn
          )
        ) : _react2.default.createElement(
          _reactBootstrap.Checkbox,
          (0, _extends3.default)({
            defaultChecked: value,
            disabled: props.disabled,
            inline: props.inline,
            onChange: function onChange(event) {
              return _this2.onChange(event.target.checked);
            }
          }, props.passProps),
          props.label
        )
      );
    }
  }]);
  return CheckboxField;
}(_react2.default.Component);

exports.default = CheckboxField;

CheckboxField.propTypes = (0, _extends3.default)({}, _propTypes.propTypes, {
  inline: _react2.default.PropTypes.bool,
  toggle: _react2.default.PropTypes.bool,
  labelOn: _react2.default.PropTypes.string,
  labelOff: _react2.default.PropTypes.string
});
CheckboxField.defaultProps = (0, _extends3.default)({}, _propTypes.defaultProps);
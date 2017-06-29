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

var _reactAutosizeTextarea = require('react-autosize-textarea');

var _reactAutosizeTextarea2 = _interopRequireDefault(_reactAutosizeTextarea);

var _propTypes = require('./propTypes.js');

var _WrapperField = require('./WrapperField.js');

var _WrapperField2 = _interopRequireDefault(_WrapperField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextareaAutosizeField = function (_React$Component) {
  (0, _inherits3.default)(TextareaAutosizeField, _React$Component);

  function TextareaAutosizeField(props) {
    (0, _classCallCheck3.default)(this, TextareaAutosizeField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TextareaAutosizeField.__proto__ || Object.getPrototypeOf(TextareaAutosizeField)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(TextareaAutosizeField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        value: nextProps.value
      });
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      this.props.onChange(event.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;

      return _react2.default.createElement(
        _WrapperField2.default,
        props,
        _react2.default.createElement(_reactAutosizeTextarea2.default, (0, _extends3.default)({
          defaultValue: this.props.value,
          onChange: function onChange(event) {
            return _this2.onChange(event);
          },
          onBlur: function onBlur(event) {
            return _this2.onChange(event);
          },
          className: (0, _classnames2.default)('form-control', this.props.className),
          style: { minHeight: 20 }
        }, props.passProps))
      );
    }
  }]);
  return TextareaAutosizeField;
}(_react2.default.Component); /* eslint-disable no-nested-ternary */


exports.default = TextareaAutosizeField;

TextareaAutosizeField.propTypes = (0, _extends3.default)({}, _propTypes.propTypes);
TextareaAutosizeField.defaultProps = (0, _extends3.default)({}, _propTypes.defaultProps);
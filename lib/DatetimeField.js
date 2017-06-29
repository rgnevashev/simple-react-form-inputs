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

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDatetime = require('react-datetime');

var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('react-datetime/css/react-datetime.css');

var _propTypes3 = require('./propTypes.js');

var _WrapperField = require('./WrapperField.js');

var _WrapperField2 = _interopRequireDefault(_WrapperField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatetimeField = function (_React$Component) {
  (0, _inherits3.default)(DatetimeField, _React$Component);

  function DatetimeField(props) {
    (0, _classCallCheck3.default)(this, DatetimeField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DatetimeField.__proto__ || Object.getPrototypeOf(DatetimeField)).call(this, props));

    _this.state = {
      value: props.value
    };
    return _this;
  }

  (0, _createClass3.default)(DatetimeField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        value: nextProps.value,
        timezone: nextProps.timezone
      });
    }
  }, {
    key: 'onChange',
    value: function onChange(date) {
      var value = _underscore2.default.isString(date) ? (0, _moment2.default)(date).toDate() : date.toDate();
      this.setState({ value: value });
      this.props.onChange(value);
    }
  }, {
    key: 'convertToTz',
    value: function convertToTz(date, timezone) {
      return date && timezone ? (0, _moment2.default)(date).tz(timezone) : date;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var value = this.state.value;


      return _react2.default.createElement(
        _WrapperField2.default,
        props,
        _react2.default.createElement(_reactDatetime2.default, (0, _extends3.default)({
          defaultValue: this.convertToTz(value, props.timezone),
          onChange: function onChange(date) {
            return _this2.onChange(date);
          },
          onBlur: function onBlur() {
            return props.onChange(value);
          },
          value: this.convertToTz(value, props.timezone),
          timeConstraints: props.timeConstraints,
          inputProps: {
            placeholder: props.placeholder || props.passProps.placeholder
          }
        }, props.passProps))
      );
    }
  }]);
  return DatetimeField;
}(_react2.default.Component);

exports.default = DatetimeField;

DatetimeField.propTypes = (0, _extends3.default)({}, _propTypes3.propTypes, {
  timeConstraints: _propTypes2.default.object,
  timezone: _propTypes2.default.any
});
DatetimeField.defaultProps = (0, _extends3.default)({}, _propTypes3.defaultProps, {
  timezone: false,
  timeConstraints: {
    minutes: {
      step: 5
    }
  }
});
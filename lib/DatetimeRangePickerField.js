'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactBootstrapDaterangepicker = require('react-bootstrap-daterangepicker');

var _reactBootstrapDaterangepicker2 = _interopRequireDefault(_reactBootstrapDaterangepicker);

var _propTypes = require('./propTypes.js');

var _WrapperField = require('./WrapperField.js');

var _WrapperField2 = _interopRequireDefault(_WrapperField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatetimeRangePickerField = function (_React$Component) {
  (0, _inherits3.default)(DatetimeRangePickerField, _React$Component);

  function DatetimeRangePickerField(props) {
    (0, _classCallCheck3.default)(this, DatetimeRangePickerField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DatetimeRangePickerField.__proto__ || Object.getPrototypeOf(DatetimeRangePickerField)).call(this, props));

    _this.state = {
      value: props.value
    };
    return _this;
  }

  (0, _createClass3.default)(DatetimeRangePickerField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        value: nextProps.value
      });
    }
  }, {
    key: 'onChangeInput',
    value: function onChangeInput(event) {
      var _event$target$value$s = event.target.value.split(' - '),
          _event$target$value$s2 = (0, _slicedToArray3.default)(_event$target$value$s, 2),
          startDate = _event$target$value$s2[0],
          endDate = _event$target$value$s2[1];

      this.onChange(event, {
        startDate: (0, _moment2.default)(startDate, 'MM/DD/YYYY h:mm A'),
        endDate: (0, _moment2.default)(endDate, 'MM/DD/YYYY h:mm A')
      });
    }
  }, {
    key: 'onChange',
    value: function onChange(event, picker) {
      var value = {
        startDate: picker.startDate.toDate(),
        endDate: picker.endDate.toDate()
      };
      this.setState({ value: value });
      this.props.onChange(value);
    }
  }, {
    key: 'label',
    value: function label(value) {
      if (value) {
        return (0, _moment2.default)(value.startDate).format('MM/DD/YYYY h:mm A') + ' - ' + (0, _moment2.default)(value.endDate).format('MM/DD/YYYY h:mm A');
      }
      return '';
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
        _react2.default.createElement(
          _reactBootstrapDaterangepicker2.default,
          (0, _extends3.default)({
            startDate: value && (0, _moment2.default)(value.startDate),
            endDate: value && (0, _moment2.default)(value.endDate),
            onApply: function onApply(event, picker) {
              _this2.onChange(event, picker);
              _this2.refs.pickerInput.value = _this2.label(picker);
            }
          }, props.passProps),
          _react2.default.createElement(
            'div',
            { className: 'input-group' },
            _react2.default.createElement('input', { type: 'text', className: 'form-control', defaultValue: this.label(value), onChange: function onChange(event) {
                return _this2.onChangeInput(event);
              }, ref: 'pickerInput' }),
            _react2.default.createElement(
              'span',
              { className: 'input-group-btn' },
              _react2.default.createElement(
                'button',
                { className: 'btn btn-default date-range-toggle' },
                _react2.default.createElement('i', { className: 'fa fa-calendar' })
              )
            )
          )
        )
      );
    }
  }]);
  return DatetimeRangePickerField;
}(_react2.default.Component);

exports.default = DatetimeRangePickerField;

DatetimeRangePickerField.propTypes = (0, _extends3.default)({}, _propTypes.propTypes);
DatetimeRangePickerField.defaultProps = (0, _extends3.default)({}, _propTypes.defaultProps);
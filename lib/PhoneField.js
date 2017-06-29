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

var _reactPhoneNumberInput = require('react-phone-number-input');

var _reactPhoneNumberInput2 = _interopRequireDefault(_reactPhoneNumberInput);

var _propTypes = require('./propTypes.js');

var _WrapperField = require('./WrapperField.js');

var _WrapperField2 = _interopRequireDefault(_WrapperField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import 'react-phone-number-input/rrui.css'
//import 'react-phone-number-input/style.css'

/* eslint-disable no-nested-ternary */
var PhoneField = function (_React$Component) {
  (0, _inherits3.default)(PhoneField, _React$Component);

  function PhoneField(props) {
    (0, _classCallCheck3.default)(this, PhoneField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PhoneField.__proto__ || Object.getPrototypeOf(PhoneField)).call(this, props));

    _this.state = {
      value: props.value
    };
    return _this;
  }

  (0, _createClass3.default)(PhoneField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ value: nextProps.value });
    }
  }, {
    key: 'onChange',
    value: function onChange(value, country) {
      this.setState({ value: value });
      this.props.onChange(value
      /*
      if (this.props.onChangeCountry) {
        this.props.onChangeCountry(country)
      }*/
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var value = this.state.value;


      return _react2.default.createElement(
        _WrapperField2.default,
        this.props,
        _react2.default.createElement(_reactPhoneNumberInput2.default, (0, _extends3.default)({
          value: value,
          country: this.props.country.toUpperCase()
          //preferredCountries={this.props.preferredCountries}
          //flagsImagePath="/img/flags.png"
          , className: 'form-control',
          onChange: function onChange(phone, country) {
            return _this2.onChange(phone, country);
          }
        }, this.props.passProps))
      );
    }
  }]);
  return PhoneField;
}(_react2.default.Component);
//import PhoneInput from 'react-telephone-input'


exports.default = PhoneField;

PhoneField.propTypes = (0, _extends3.default)({}, _propTypes.propTypes, {
  country: _react2.default.PropTypes.string
  //preferredCountries: React.PropTypes.array,
  //onChangeCountry: React.PropTypes.func
});
PhoneField.defaultProps = (0, _extends3.default)({}, _propTypes.defaultProps, {
  country: 'US'
  //preferredCountries: ['us', 'gb']


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
    country: React.PropTypes.string,
    preferredCountries: React.PropTypes.array,
    onChangeCountry: React.PropTypes.func
  }
  PhoneField.defaultProps = {
    ...defaultProps,
    country: 'us',
    preferredCountries: ['us', 'gb']
  }
  */

});
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

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _propTypes = require('./propTypes.js');

var _WrapperField = require('./WrapperField.js');

var _WrapperField2 = _interopRequireDefault(_WrapperField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommonTextField = function (_React$Component) {
  (0, _inherits3.default)(CommonTextField, _React$Component);

  function CommonTextField(props) {
    (0, _classCallCheck3.default)(this, CommonTextField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CommonTextField.__proto__ || Object.getPrototypeOf(CommonTextField)).call(this, props));

    _this.state = {
      value: props.value
    };
    return _this;
  }

  (0, _createClass3.default)(CommonTextField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ value: nextProps.value });
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      if (event.keyCode === 13) {
        this.props.onChange(this.state.value);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      this.setState({ value: event.target.value });
      if (this.props.changeOnKeyDown) {
        this.props.onChange(event.target.value);
      }
    }
  }, {
    key: 'childProps',
    value: function childProps() {
      var fieldType = this.props.fieldType || this.fieldType || 'text';
      var componentClass = this.componentClass || 'input';
      var props = (0, _extends3.default)({}, this.props, {
        fieldType: fieldType,
        componentClass: componentClass
      });
      return props;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.childProps();

      return _react2.default.createElement(
        _WrapperField2.default,
        props,
        _react2.default.createElement(_FormControl2.default, (0, _extends3.default)({
          ref: 'input',
          value: this.state.value || '',
          type: props.fieldType,
          placeholder: props.placeholder || props.passProps.placeholder,
          disabled: props.disabled,
          componentClass: props.componentClass,
          onChange: function onChange(event) {
            return _this2.onChange(event);
          },
          onKeyDown: function onKeyDown(event) {
            return _this2.onKeyDown(event);
          },
          onBlur: function onBlur() {
            return props.onChange(_this2.state.value);
          }
        }, props.passProps))
      );
    }
  }]);
  return CommonTextField;
}(_react2.default.Component);

exports.default = CommonTextField;


CommonTextField.propTypes = _propTypes.propTypes;
CommonTextField.defaultProps = _propTypes.defaultProps;
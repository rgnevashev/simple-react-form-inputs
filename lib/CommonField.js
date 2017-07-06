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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = require('./propTypes.js');

var _WrapperField = require('./WrapperField.js');

var _WrapperField2 = _interopRequireDefault(_WrapperField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommonField = function (_React$Component) {
  (0, _inherits3.default)(CommonField, _React$Component);

  function CommonField(props) {
    (0, _classCallCheck3.default)(this, CommonField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CommonField.__proto__ || Object.getPrototypeOf(CommonField)).call(this, props));

    _this.state = {
      value: props.value
    };
    return _this;
  }

  (0, _createClass3.default)(CommonField, [{
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

      var value = this.state.value;


      var children = _react2.default.cloneElement(this.props.children, {
        defaultValue: value,
        onChange: function onChange() {
          var _props$children$props;

          return _this2.onChange((_props$children$props = _this2.props.children.props).onChange.apply(_props$children$props, arguments));
        }
      });

      return _react2.default.createElement(
        _WrapperField2.default,
        this.props,
        children
      );
    }
  }]);
  return CommonField;
}(_react2.default.Component);

exports.default = CommonField;


CommonField.propTypes = (0, _extends3.default)({}, _propTypes3.propTypes, {
  children: _propTypes2.default.any
});

CommonField.defaultProps = (0, _extends3.default)({}, _propTypes3.defaultProps);

/*
<Field fieldName="text" type={CommonField} >
  <input
    type="text"
    className="form-control"
    onChange={event => event.target.value}
  />
</Field>
*/
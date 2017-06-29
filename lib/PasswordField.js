'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CommonTextField2 = require('./CommonTextField.js');

var _CommonTextField3 = _interopRequireDefault(_CommonTextField2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PasswordField = function (_CommonTextField) {
  (0, _inherits3.default)(PasswordField, _CommonTextField);

  function PasswordField(props) {
    (0, _classCallCheck3.default)(this, PasswordField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PasswordField.__proto__ || Object.getPrototypeOf(PasswordField)).call(this, props));

    _this.fieldType = 'password';
    _this.componentClass = 'input';
    return _this;
  }

  return PasswordField;
}(_CommonTextField3.default);

exports.default = PasswordField;
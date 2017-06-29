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

var _reactSimplForm = require('react-simpl-form');

var _propTypes = require('./propTypes.js');

var _WrapperField = require('./WrapperField.js');

var _WrapperField2 = _interopRequireDefault(_WrapperField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjectField = function (_ObjectComponent) {
  (0, _inherits3.default)(ObjectField, _ObjectComponent);

  function ObjectField() {
    (0, _classCallCheck3.default)(this, ObjectField);
    return (0, _possibleConstructorReturn3.default)(this, (ObjectField.__proto__ || Object.getPrototypeOf(ObjectField)).apply(this, arguments));
  }

  (0, _createClass3.default)(ObjectField, [{
    key: 'render',
    value: function render() {
      var props = this.props;

      return _react2.default.createElement(
        _WrapperField2.default,
        props,
        _react2.default.createElement(
          'div',
          { className: props.parentClassName },
          this.getChildrenComponents()
        )
      );
    }
  }]);
  return ObjectField;
}(_reactSimplForm.ObjectComponent);

exports.default = ObjectField;

ObjectField.propTypes = (0, _extends3.default)({}, _propTypes.propTypes, _reactSimplForm.ObjectComponent.propTypes, {
  parentClassName: _react2.default.PropTypes.string
});
ObjectField.defaultProps = (0, _extends3.default)({}, _propTypes.defaultProps, _reactSimplForm.ObjectComponent.defaultProps);
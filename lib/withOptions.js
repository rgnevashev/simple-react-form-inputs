'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withOptions = function withOptions(component) {
  component.propTypes = (0, _extends3.default)({}, component.propTypes, {
    options: _propTypes2.default.any
  });

  return function (_component) {
    (0, _inherits3.default)(_class, _component);

    function _class() {
      (0, _classCallCheck3.default)(this, _class);
      return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
      key: 'getOptions',
      value: function getOptions() {
        var options = [];
        if (this.props.options) {
          if (typeof this.props.options === 'function') {
            options = this.props.options();
          } else {
            options = this.props.options;
          }
        } else if (this.props.fieldSchema && this.props.fieldSchema.allowedValues) {
          var allowedValues = this.props.fieldSchema.allowedValues;
          if (typeof allowedValues === 'function') {
            allowedValues = this.props.fieldSchema.allowedValues();
          }
          options = allowedValues.map(function (allowedValue) {
            return { label: allowedValue, value: allowedValue };
          });
        }
        if (this.props.createable) {
          var value = this.state.value;

          if (value && value.length && value.forEach) {
            value.forEach(function (val) {
              if (_underscore2.default.isString(val)) {
                if (!_underscore2.default.contains(_underscore2.default.pluck(options || [], 'value'), val)) {
                  options.push({ label: val, value: val });
                }
              } else {
                if (!_underscore2.default.contains(_underscore2.default.pluck(options || [], 'value'), val.value)) {
                  options.push(val);
                }
              }
            });
          }
        }
        if (this.props.placeholder && !this.props.passProps.multi) {
          if (!options || !options.length || options[0].value) {
            options.unshift({ label: this.props.placeholder, value: '' });
          }
        }
        if (!options) {
          console.error('You must set the options for the select field');
        }
        return options;
      }
    }]);
    return _class;
  }(component);
};

exports.default = withOptions;
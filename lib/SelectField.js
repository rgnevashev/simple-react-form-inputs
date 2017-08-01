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

var _class;

//import 'react-select/dist/react-select.css'

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _Select = require('react-select/lib/Select');

var _Select2 = _interopRequireDefault(_Select);

var _Creatable = require('react-select/lib/Creatable');

var _Creatable2 = _interopRequireDefault(_Creatable);

var _Async = require('react-select/lib/Async');

var _Async2 = _interopRequireDefault(_Async);

var _AsyncCreatable = require('react-select/lib/AsyncCreatable');

var _AsyncCreatable2 = _interopRequireDefault(_AsyncCreatable);

var _withOptions = require('./withOptions.js');

var _withOptions2 = _interopRequireDefault(_withOptions);

var _CommonTextField2 = require('./CommonTextField.js');

var _CommonTextField3 = _interopRequireDefault(_CommonTextField2);

var _WrapperField = require('./WrapperField.js');

var _WrapperField2 = _interopRequireDefault(_WrapperField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectField = (0, _withOptions2.default)(_class = function (_CommonTextField) {
  (0, _inherits3.default)(SelectField, _CommonTextField);

  function SelectField(props) {
    (0, _classCallCheck3.default)(this, SelectField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SelectField.__proto__ || Object.getPrototypeOf(SelectField)).call(this, props));

    _this.fieldType = 'select';
    _this.componentClass = 'select';
    return _this;
  }

  (0, _createClass3.default)(SelectField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ value: nextProps.value });
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      var value = this.props.selectable || this.props.async || this.props.createable ? !this.props.async ? this.props.passProps.multi ? event.map(function (item) {
        return item.value;
      }) : event && event.value : event : event.target.value;
      this.setState({ value: value });
      this.props.onChange(value);
    }
  }, {
    key: 'loadOptions',
    value: function loadOptions(input, done) {
      Meteor.call(this.props.method, input, function (err, options) {
        return done(err, {
          options: options,
          complete: false,
          cache: false
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.childProps();
      var value = this.state.value;


      return _react2.default.createElement(
        _WrapperField2.default,
        props,
        props.selectable ? _react2.default.createElement(_Select2.default, (0, _extends3.default)({
          value: value,
          disabled: props.disabled,
          placeholder: props.placeholder,
          options: this.getOptions(),
          onChange: function onChange(changes) {
            return _this2.onChange(changes);
          }
        }, props.passProps)) : props.async && props.createable ? _react2.default.createElement(_AsyncCreatable2.default, (0, _extends3.default)({
          value: value,
          disabled: props.disabled,
          placeholder: props.placeholder,
          options: this.getOptions(),
          onChange: function onChange(changes) {
            return _this2.onChange(changes);
          },
          loadOptions: function loadOptions(input, dode) {
            return _this2.loadOptions(input, dode);
          }
        }, props.passProps)) : props.async ? _react2.default.createElement(_Async2.default, (0, _extends3.default)({
          value: value,
          disabled: props.disabled,
          placeholder: props.placeholder,
          options: this.getOptions(),
          onChange: function onChange(changes) {
            return _this2.onChange(changes);
          },
          loadOptions: function loadOptions(input, dode) {
            return _this2.loadOptions(input, dode);
          }
        }, props.passProps)) : props.createable ? _react2.default.createElement(_Creatable2.default, (0, _extends3.default)({
          value: value,
          disabled: props.disabled,
          placeholder: props.placeholder,
          options: this.getOptions(),
          onChange: function onChange(changes) {
            return _this2.onChange(changes);
          }
        }, props.passProps)) : _react2.default.createElement(
          _FormControl2.default,
          (0, _extends3.default)({
            value: props.value,
            type: props.fieldType,
            placeholder: props.placeholder,
            disabled: props.disabled,
            componentClass: props.componentClass,
            onChange: function onChange(event) {
              return _this2.onChange(event);
            },
            onKeyDown: function onKeyDown(event) {
              return _this2.onKeyDown(event);
            },
            onBlur: function onBlur() {
              return props.onChange(value);
            }
          }, props.passProps),
          this.getOptions().map(function (item) {
            return _react2.default.createElement(
              'option',
              { key: item.label + '-' + item.value, value: item.value },
              item.label
            );
          })
        )
      );
    }
  }]);
  return SelectField;
}(_CommonTextField3.default)) || _class;

exports.default = SelectField;

SelectField.propTypes = (0, _extends3.default)({}, SelectField.propTypes, {
  async: _propTypes2.default.bool,
  createable: _propTypes2.default.bool,
  selectable: _propTypes2.default.bool,
  method: _propTypes2.default.string
});
SelectField.defaultProps = (0, _extends3.default)({}, SelectField.defaultProps, {
  async: false,
  createable: false,
  selectable: false
});
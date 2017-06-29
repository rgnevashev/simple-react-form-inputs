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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _Checkbox = require('react-bootstrap/lib/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _propTypes3 = require('./propTypes.js');

var _withOptions = require('./withOptions.js');

var _withOptions2 = _interopRequireDefault(_withOptions);

var _WrapperField = require('./WrapperField.js');

var _WrapperField2 = _interopRequireDefault(_WrapperField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxesField = (0, _withOptions2.default)(_class = function (_React$Component) {
  (0, _inherits3.default)(CheckboxesField, _React$Component);

  function CheckboxesField(props) {
    (0, _classCallCheck3.default)(this, CheckboxesField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CheckboxesField.__proto__ || Object.getPrototypeOf(CheckboxesField)).call(this, props));

    _this.state = {
      value: _this.formater(props.value)
    };
    return _this;
  }

  (0, _createClass3.default)(CheckboxesField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ value: this.formater(nextProps.value) });
    }
  }, {
    key: 'onChange',
    value: function onChange(_ref) {
      var checked = _ref.checked,
          value = _ref.value;
      var val = this.state.value;

      var values = checked ? (val || []).concat(value) : (val || []).filter(function (v) {
        return v !== value;
      });
      this.setState({ value: values });
      this.props.onChange(values);
    }
  }, {
    key: 'formater',
    value: function formater(values) {
      return values && values.length && values.map(function (val) {
        return val.toString();
      }) || values;
    }
  }, {
    key: 'renderOption',
    value: function renderOption(_ref2) {
      var _this2 = this;

      var props = _ref2.props,
          value = _ref2.value,
          option = _ref2.option,
          index = _ref2.index;

      if (props.renderOption) {
        return props.renderOption({ props: props, value: value, option: option, index: index, onChange: this.onChange });
      }

      return _react2.default.createElement(
        _Checkbox2.default,
        (0, _extends3.default)({
          key: option.label + '-' + option.value + '-' + index,
          name: props.fieldName,
          defaultValue: option.value,
          onChange: function onChange(event) {
            return _this2.onChange(event.target);
          },
          checked: (value || []).includes(option.value.toString()),
          disabled: props.disabled,
          inline: props.inline,
          className: (value || []).includes(option.value.toString()) && 'checked'
        }, props.passProps),
        option.label
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var props = this.props;
      var value = this.state.value;


      return _react2.default.createElement(
        _WrapperField2.default,
        props,
        _react2.default.createElement(
          'div',
          { className: props.parentClassName },
          this.getOptions().map(function (option, index) {
            return _this3.renderOption({ props: props, value: value, option: option, index: index });
          })
        )
      );
    }
  }]);
  return CheckboxesField;
}(_react2.default.Component)) || _class;

exports.default = CheckboxesField;

CheckboxesField.propTypes = (0, _extends3.default)({}, _propTypes3.propTypes, {
  parentClassName: _propTypes2.default.string,
  options: _propTypes2.default.any,
  inline: _propTypes2.default.bool,
  renderOption: _propTypes2.default.func
});
CheckboxesField.defaultProps = (0, _extends3.default)({}, _propTypes3.defaultProps);
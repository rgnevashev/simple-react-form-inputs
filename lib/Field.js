'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _dotObject = require('dot-object');

var _dotObject2 = _interopRequireDefault(_dotObject);

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

var _has = require('lodash/has');

var _has2 = _interopRequireDefault(_has);

var _keys = require('lodash/keys');

var _keys2 = _interopRequireDefault(_keys);

var _pick = require('lodash/pick');

var _pick2 = _interopRequireDefault(_pick);

var _propTypes3 = require('./propTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Field = function (_React$Component) {
  (0, _inherits3.default)(Field, _React$Component);

  function Field(props) {
    (0, _classCallCheck3.default)(this, Field);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Field.__proto__ || Object.getPrototypeOf(Field)).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Field, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.registerField();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unregisterField();
    }
  }, {
    key: 'unregisterField',
    value: function unregisterField() {
      console.log('unregisterField', this.getFieldName());
      this.context.form.unregisterComponent(this.getFieldName());
    }
  }, {
    key: 'registerField',
    value: function registerField() {
      console.log('registerField', this.getFieldName());
      this.context.form.registerComponent({
        field: this.getFieldName(),
        component: this.element
      });
    }
  }, {
    key: 'getFieldName',
    value: function getFieldName() {
      if (this.context.parentFieldName) {
        return this.props.fieldName ? this.context.parentFieldName + '.' + this.props.fieldName : this.context.parentFieldName;
      }
      return this.props.fieldName;
    }
  }, {
    key: 'onChange',
    value: function onChange(value) {
      this.context.onChange(this.getFieldName(), value);
    }
  }, {
    key: 'getSchema',
    value: function getSchema() {
      return this.context.schema;
    }
  }, {
    key: 'getFieldSchema',
    value: function getFieldSchema() {
      return this.getSchema() ? this.getSchema().schema(this.getFieldName()) : null;
    }
  }, {
    key: 'getLabel',
    value: function getLabel() {
      if ((0, _has2.default)(this.props, 'label')) {
        return this.props.label;
      } else if (this.getSchema()) {
        return this.getSchema().label(this.getFieldName());
      }
      return '';
    }
  }, {
    key: 'getComponent',
    value: function getComponent() {
      if (this.props.type) {
        return this.props.type;
      }
      throw new Error('You have no field type "' + this.getFieldName() + '".');
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.context.doc ? _dotObject2.default.pick(this.getFieldName(), this.context.doc) : undefined;
    }
  }, {
    key: 'getErrorMessage',
    value: function getErrorMessage() {
      var errorMessages = this.context.errorMessages || {};
      return this.props.errorMessage || errorMessages[this.getFieldName()];
    }
  }, {
    key: 'getChildProps',
    value: function getChildProps() {
      /**
       * This gets the props that are defined in the propTypes of the registered component.
       */
      var fieldComponent = this.getComponent();
      var propOptions = (0, _omit2.default)(this.props, (0, _keys2.default)(_propTypes3.fieldPropTypes));
      var schemaOptions = this.getFieldSchema() && this.getFieldSchema().srf || {};
      var totalOptions = (0, _extends3.default)({}, schemaOptions, propOptions);
      var allowedKeys = (0, _keys2.default)((0, _extends3.default)({}, _propTypes3.fieldTypePropTypes, fieldComponent.propTypes));
      var onlyAllowedOptions = (0, _pick2.default)(totalOptions, allowedKeys);

      /**
       * Options that are not registered in the propTypes are passed separatly.
       * This options are in the variable this.passProps of the component, they should be
       * passed to the main component of it.
       */
      allowedKeys.push('type');
      var notDefinedOptions = (0, _omit2.default)(totalOptions, allowedKeys);

      var props = (0, _extends3.default)({
        value: this.getValue(),
        label: this.props.showLabel ? this.getLabel() : null,
        useHint: this.props.useHint,
        onChange: this.onChange,
        errorMessage: this.getErrorMessage(),
        fieldSchema: this.getFieldSchema(),
        fieldName: this.getFieldName(),
        schema: this.getSchema(),
        form: this.context.form,
        disabled: this.props.disabled,
        passProps: notDefinedOptions,
        ref: 'input'
      }, onlyAllowedOptions);

      return props;
    }
  }, {
    key: 'render',
    value: function render() {
      var component = this.getComponent();
      this.element = _react2.default.createElement(component, this.getChildProps());
      return this.element;
    }
  }]);
  return Field;
}(_react2.default.Component);

Field.propTypes = (0, _extends3.default)({}, _propTypes3.fieldPropTypes);

Field.defaultProps = {
  showLabel: true,
  useHint: false,
  disabled: false
};

Field.contextTypes = {
  schema: _propTypes2.default.object,
  doc: _propTypes2.default.object,
  onChange: _propTypes2.default.func.isRequired,
  errorMessages: _propTypes2.default.object,
  form: _propTypes2.default.any.isRequired,
  parentFieldName: _propTypes2.default.string
};

exports.default = Field;
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

var _cloneDeep = require('lodash/cloneDeep');

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _findIndex = require('lodash/findIndex');

var _findIndex2 = _interopRequireDefault(_findIndex);

var _isFunction = require('lodash/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

var _keys = require('lodash/keys');

var _keys2 = _interopRequireDefault(_keys);

var _ArrayComponent = require('./ArrayComponent');

var _ArrayComponent2 = _interopRequireDefault(_ArrayComponent);

var _ObjectComponent = require('./ObjectComponent');

var _ObjectComponent2 = _interopRequireDefault(_ObjectComponent);

var _utility = require('./utility');

var _propTypes3 = require('./propTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function (_React$Component) {
  (0, _inherits3.default)(Form, _React$Component);

  function Form(props) {
    (0, _classCallCheck3.default)(this, Form);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    var state = props.state || props.doc || {};
    _this.state = {
      doc: (0, _cloneDeep2.default)(state),
      changes: {},
      validationContext: _this.getSchema(props) ? _this.getSchema(props).newContext() : null,
      errorMessages: props.errorMessages
    };
    _this.fields = [];
    _this.autoSave = (0, _debounce2.default)(_this.submit.bind(_this), props.autoSaveWaitTime);
    _this.errorMessages = props.errorMessages;
    _this.onFormSubmit = _this.onFormSubmit.bind(_this);
    _this.onValueChange = _this.onValueChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Form, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        schema: this.getSchema(),
        doc: this.state.doc,
        onChange: this.onValueChange,
        errorMessages: this.state.errorMessages,
        form: this
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.replaceOnChange || this.props.formId !== nextProps.formId) {
        var state = this.props.state || this.props.doc || {};
        var nextState = nextProps.state || nextProps.doc || {};
        if (!(0, _isEqual2.default)(state, nextState)) {
          this.setState({ doc: (0, _cloneDeep2.default)(nextState), changes: {} });
        }
      }

      if (!(0, _isEqual2.default)(nextProps.errorMessages, this.props.errorMessages)) {
        this.setState({ errorMessages: nextProps.errorMessages });
        this.errorMessages = nextProps.errorMessages;
      }
    }
  }, {
    key: 'getSchema',
    value: function getSchema(props) {
      props = props || this.props;
      if (props.schema) {
        return props.schema;
      } else if (props.collection) {
        return props.collection.simpleSchema();
      } else {
        console.log('no schema was specified.');
      }
    }

    /*
     * This is necesarry to allow the form to filter the fields when updating
     */

  }, {
    key: 'registerComponent',
    value: function registerComponent(_ref) {
      var field = _ref.field,
          component = _ref.component;

      this.fields.push({ field: field, component: component });
    }
  }, {
    key: 'unregisterComponent',
    value: function unregisterComponent(fieldName) {
      var index = (0, _findIndex2.default)(this.fields, function (_ref2) {
        var field = _ref2.field;
        return field === fieldName;
      });
      this.fields.splice(index, 1);
    }
  }, {
    key: 'callChildFields',
    value: function callChildFields(_ref3) {
      var method = _ref3.method,
          input = _ref3.input;

      this.fields.map(function (field) {
        if ((0, _isFunction2.default)(field.component[method])) {
          field.component[method](input);
        }
      });
    }
  }, {
    key: 'onCommit',
    value: function onCommit(error, docId) {
      this.setState({ errorMessages: {} });
      if (error) {
        if (error.reason === 'INVALID') {
          this.handleServerError(error);
        } else {
          this.handleError();
        }
        if (this.props.logErrors) {
          console.log('[form-' + this.props.formId + '-error]', error);
        }

        if (this.props.onError) {
          this.props.onError(error);
        }
      } else {
        this.callChildFields({ method: 'onSuccess' });
        if ((0, _isFunction2.default)(this.props.onSuccess)) {
          this.props.onSuccess(docId);
        }
        if (this.props.clearOnSuccess) {
          this.clearForm();
        } else {
          // if clearOnSuccess is false, we still need to clear the changes
          this.setState({ changes: {} });
        }
      }
    }
  }, {
    key: 'getValidationOptions',
    value: function getValidationOptions() {
      return {
        validationContext: this.props.formId,
        filter: this.props.filter,
        autoConvert: this.props.autoConvert,
        removeEmptyStrings: this.props.removeEmptyStrings,
        trimStrings: this.props.trimStrings
      };
    }
  }, {
    key: 'onFormSubmit',
    value: function onFormSubmit(event) {
      event.preventDefault();
      return this.submit();
    }
  }, {
    key: 'submit',
    value: function submit() {
      var data = this.props.commitOnlyChanges ? this.state.changes : this.state.doc;
      if (this.props.type === 'insert') {
        var doc = _dotObject2.default.object(_dotObject2.default.dot(this.state.doc));
        this.props.collection.insert(doc, this.getValidationOptions(), this.onCommit.bind(this));
      } else if (this.props.type === 'update') {
        var presentFields = (0, _utility.getPresentFields)(this.fields);
        var modifier = (0, _utility.docToModifier)(data, { keepArrays: this.props.keepArrays, fields: presentFields });
        if (!(0, _isEqual2.default)(modifier, {})) {
          this.props.collection.update(this.state.doc._id, modifier, this.getValidationOptions(), this.onCommit.bind(this));
        } else {
          this.callChildFields({ method: 'onSuccess' });
          if ((0, _isFunction2.default)(this.props.onSuccess)) {
            this.props.onSuccess();
          }
        }
      } else if (this.props.type === 'function') {
        var _presentFields = (0, _utility.getPresentFields)(this.fields);
        var _doc = _dotObject2.default.object(_dotObject2.default.dot((0, _utility.cleanFields)(_dotObject2.default.dot(data), _presentFields)));
        var isValid = true;
        if (this.props.validate && this.getSchema()) {
          isValid = this.getSchema().namedContext(this.getValidationOptions().validationContext).validate(_doc);
        }
        if (isValid) {
          if (!(0, _isFunction2.default)(this.props.onSubmit)) {
            throw new Error('You must pass a onSubmit function or set the form type to insert or update');
          }
          if (data._id) {
            _doc = (0, _utility.docToModifier)(data, { keepArrays: this.props.keepArrays, fields: _presentFields });
          }
          var success = this.props.onSubmit(_doc);
          if (success === false) {
            this.onCommit('onSubmit error');
          } else {
            this.onCommit();
          }
          return success;
        }
        this.onCommit('Validation error');
        return false;
      }
    }
  }, {
    key: 'cleanErrorMessages',
    value: function cleanErrorMessages() {
      this.errorMessages = {};
      this.setState({ errorMessages: {} });
    }
  }, {
    key: 'clearForm',
    value: function clearForm() {
      this.setState({ doc: {}, changes: {} });
    }
  }, {
    key: 'setErrorMessage',
    value: function setErrorMessage(fieldName, message) {
      var errorMessages = (0, _cloneDeep2.default)(this.errorMessages);
      errorMessages[fieldName] = message;
      this.errorMessages = errorMessages;
      this.setState({ errorMessages: errorMessages });
    }
  }, {
    key: 'setErrorsWithContext',
    value: function setErrorsWithContext(context) {
      var validationErrors = context.validationErrors ? context.validationErrors() : context.invalidKeys();
      var errorMessages = {};
      validationErrors.map(function (field) {
        errorMessages[field.name] = context.keyErrorMessage(field.name);
      });

      if (this.props.logErrors) {
        console.log('[form-' + this.props.formId + '-error-messages]', errorMessages);
      }

      if (this.props.onError) {
        this.props.onError(errorMessages);
      }

      this.errorMessages = errorMessages;
      this.setState({ errorMessages: errorMessages });
    }
  }, {
    key: 'handleError',
    value: function handleError() {
      var context = this.getSchema().namedContext(this.getValidationOptions().validationContext);
      this.setErrorsWithContext(context);
    }
  }, {
    key: 'handleServerError',
    value: function handleServerError(error) {
      var _this2 = this;

      var errors = JSON.parse(error.details);
      var errorMessages = {};
      errors.forEach(function (fieldError) {
        errorMessages[fieldError.name] = _this2.getSchema().messageForError(fieldError.type, fieldError.name, null, fieldError.value);
      });
      if (this.props.logErrors) {
        console.log('[form-' + this.props.formId + '-error-messages]', errorMessages);
      }

      if (this.props.onError) {
        this.props.onError(error);
      }

      this.errorMessages = errorMessages;
      this.setState({ errorMessages: errorMessages });
    }
  }, {
    key: 'onValueChange',
    value: function onValueChange(fieldName, newValue) {
      //  newValue = typeof newValue === 'undefined' ? null : newValue
      _dotObject2.default.del(fieldName, this.state.doc);
      var doc = _dotObject2.default.str('val.' + fieldName, newValue, { val: this.state.doc }).val;
      _dotObject2.default.del(fieldName, this.state.changes);
      var changes = _dotObject2.default.str('val.' + fieldName, newValue, { val: this.state.changes }).val;
      this.setState({ doc: doc, changes: changes });

      if (this.props.autoSave) {
        this.autoSave();
      }

      if ((0, _isFunction2.default)(this.props.onChange)) {
        this.props.onChange(this.state.doc, this.state.changes);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var domProps = (0, _omit2.default)(this.props, (0, _keys2.default)(_propTypes3.formPropTypes));

      if (this.props.useFormTag) {
        return _react2.default.createElement(
          'form',
          (0, _extends3.default)({}, domProps, { onSubmit: this.onFormSubmit }),
          this.props.children
        );
      }
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);
  return Form;
}(_react2.default.Component);

Form.propTypes = (0, _extends3.default)({}, _propTypes3.formPropTypes);

Form.defaultProps = {
  type: 'function',
  keepArrays: true,
  autoSave: false,
  removeEmptyStrings: true,
  trimStrings: true,
  autoConvert: true,
  filter: true,
  replaceOnChange: true,
  clearOnSuccess: false,
  formId: 'defaultFormId',
  arrayComponent: _ArrayComponent2.default,
  objectComponent: _ObjectComponent2.default,
  logErrors: true,
  commitOnlyChanges: false,
  autoSaveWaitTime: 500,
  omit: [],
  validate: true,
  useFormTag: true,
  errorMessages: {}
};

Form.childContextTypes = {
  schema: _propTypes2.default.object,
  doc: _propTypes2.default.object,
  onChange: _propTypes2.default.func.isRequired,
  errorMessages: _propTypes2.default.object,
  form: _propTypes2.default.any.isRequired
};

exports.default = Form;
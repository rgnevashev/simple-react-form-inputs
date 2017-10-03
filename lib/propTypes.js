'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.propTypes = exports.arrayComponentPropTypes = exports.objectComponentPropTypes = exports.formPropTypes = exports.fieldPropTypes = exports.fieldTypePropTypes = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fieldTypePropTypes = exports.fieldTypePropTypes = {
  /**
   * The current value of the field
   */
  value: _propTypes2.default.any,

  /**
   * Field label
   */
  label: _propTypes2.default.any,

  /**
   * The error message if there is a error
   */
  errorMessage: _propTypes2.default.string,

  /**
   * Call this function when the value changes
   */
  onChange: _propTypes2.default.func.isRequired,

  /**
   * If the input is disabled
   */
  disabled: _propTypes2.default.bool,

  /**
   * The schema for the field
   */
  fieldSchema: _propTypes2.default.object,

  /**
   * The schema for the object
   */
  schema: _propTypes2.default.object,

  /**
   * Use hint instead of label
   */
  useHint: _propTypes2.default.bool,

  /**
   * Form
   */
  form: _propTypes2.default.object.isRequired,

  /**
   * The name of the field
   */
  fieldName: _propTypes2.default.string.isRequired,

  /**
   * The props that must be passed to the child component
   */
  passProps: _propTypes2.default.object
};

var fieldPropTypes = exports.fieldPropTypes = {
  /**
   * The label of the field.
   */
  label: _propTypes2.default.any,

  /**
   * The name of the field in the object.
   */
  fieldName: _propTypes2.default.string.isRequired,

  /**
   * Should show label
   */
  showLabel: _propTypes2.default.bool,

  /**
   * Use hint instead of label.
   */
  useHint: _propTypes2.default.bool,

  /**
   * The field should be read only mode.
   */
  disabled: _propTypes2.default.bool,

  /**
   * The type of the input. It can be a component
   */
  type: _propTypes2.default.any,

  /**
   * Pass a error message
   */
  errorMessage: _propTypes2.default.string
};

var formPropTypes = exports.formPropTypes = {
  /**
   * The object that has the values of the form.
   */
  state: _propTypes2.default.object,
  /**
   * Alias of state
   */
  doc: _propTypes2.default.object,

  /**
   * A callback that fires when the form value changes.
   * The argument will be the value.
   */
  onChange: _propTypes2.default.func,

  /**
   * The Mongo Collection for the form.
   */
  collection: _propTypes2.default.object,

  /**
   * The simple schema for the form.
   */
  schema: _propTypes2.default.object,

  /**
   * The type of the form. insert or update.
   */
  type: _propTypes2.default.oneOf(['insert', 'update', 'function']),

  /**
   * Set to true to enable automatic form submission for a type="update" form.
   * When the form change event is emitted, the change will be automatically
   * saved to the database.
   */
  autoSave: _propTypes2.default.bool,

  /**
   * Set to false for an insert or update form to keep empty string values when
   * cleaning the form document.
   */
  removeEmptyStrings: _propTypes2.default.bool,

  /**
   * Set to false for an insert or update form to skip filtering out unknown
   * properties when cleaning the form document.
   */
  filter: _propTypes2.default.bool,

  /**
   * Set to false for an insert or update form to keep leading and trailing
   * spaces for string values when cleaning the form document.
   */
  trimStrings: _propTypes2.default.bool,

  /**
   * Set to false for an insert or update form to skip autoconverting property
   * values when cleaning the form document.
   */
  autoConvert: _propTypes2.default.bool,

  /**
   * Replace the current document if the one in the props changes.
   */
  replaceOnChange: _propTypes2.default.bool,

  /**
   * Clear the form after a successful insert.
   * Only works on insert and function types.
   */
  clearOnSuccess: _propTypes2.default.bool,

  /**
   * Keep arrays when updating.
   */
  keepArrays: _propTypes2.default.bool,

  /**
   * A function that is called when the form action finished with success.
   */
  onSuccess: _propTypes2.default.func,

  /**
   * A function that is called when the form action error.
   */
  onError: _propTypes2.default.func,
  /**
   * A function that is called when the form is submitted.
   */
  onSubmit: _propTypes2.default.func,

  /**
   * Id of the form.
   */
  formId: _propTypes2.default.string,

  /**
   * The component for the array wrapper
   */
  arrayComponent: _propTypes2.default.any,

  /**
   * The component for the object wrapper
   */
  objectComponent: _propTypes2.default.any,

  /**
   * Show errors in the console
   */
  logErrors: _propTypes2.default.bool,

  /**
   * Commit only changes
   */
  commitOnlyChanges: _propTypes2.default.bool,

  /**
   * Minimum wait time between auto saves
   */
  autoSaveWaitTime: _propTypes2.default.number,

  /**
   * Fields to be omited
   */
  omit: _propTypes2.default.arrayOf(_propTypes2.default.string),

  /**
   * Validate schema. Only for onSubmit
   */
  validate: _propTypes2.default.bool,

  /**
   * The child components
   */
  children: _propTypes2.default.any,

  /**
   * Render form tag
   */
  useFormTag: _propTypes2.default.bool,

  /**
   * Pass error messages
   */
  errorMessages: _propTypes2.default.object
};

var objectComponentPropTypes = exports.objectComponentPropTypes = (0, _extends3.default)({}, fieldTypePropTypes, {

  /**
  * Each item component
  */
  children: _propTypes2.default.any
});

var arrayComponentPropTypes = exports.arrayComponentPropTypes = (0, _extends3.default)({}, fieldTypePropTypes, {

  /**
   * The add button label
   */
  addLabel: _propTypes2.default.string,

  /**
   * Show the add button
   */
  showAddButton: _propTypes2.default.bool,

  /**
   * Show the remove button
   */
  showRemoveButton: _propTypes2.default.bool,

  /**
   * The remove label
   */
  removeLabel: _propTypes2.default.string,

  /**
   *
   */
  autoAddItem: _propTypes2.default.bool,

  /**
   * The label for the field
   */
  label: _propTypes2.default.string,

  /**
   * Each item component
   */
  children: _propTypes2.default.any,

  /**
   * Pass a function that returns the children components for the current item.
   * The inputs of the function will be value and index.
   * This is useful when you want to change the view of a item in the array depending
   * on the current value.
   */
  renderItem: _propTypes2.default.func
});

var propTypes = exports.propTypes = (0, _extends3.default)({}, fieldTypePropTypes, {
  bsSize: _propTypes2.default.string, // FormGroup one of: "lg", "large", "sm", "small"
  validationState: _propTypes2.default.string, // FormGroup one of: 'success', 'warning', 'error', null
  fieldType: _propTypes2.default.string, // FormControl:type Only relevant if componentClass is 'input'
  htmlFor: _propTypes2.default.string, // ControlLabel
  srOnly: _propTypes2.default.bool, // ControlLabel
  labelCol: _propTypes2.default.number, // ControlLabel
  leftInputGroupAddon: _propTypes2.default.any, // InputGroup.Addon
  leftInputGroupButton: _propTypes2.default.any, // InputGroup.Button
  leftInputGroup: _propTypes2.default.any, // InputGroup
  rightInputGroupAddon: _propTypes2.default.any, // InputGroup.Addon
  rightInputGroupButton: _propTypes2.default.any, // InputGroup.Button
  rightInputGroup: _propTypes2.default.any, // InputGroup
  inputGroup: _propTypes2.default.bool, // InputGroup
  helpText: _propTypes2.default.any, // HelpBlock
  labelText: _propTypes2.default.any,
  placeholder: _propTypes2.default.any, // FormControl
  static: _propTypes2.default.bool,
  feedback: _propTypes2.default.bool,
  noLabel: _propTypes2.default.bool,
  changeOnKeyDown: _propTypes2.default.bool
});

var defaultProps = exports.defaultProps = {
  validationState: null,
  srOnly: false,
  labelCol: 0,
  inputGroup: false,
  static: false,
  feedback: false,
  noLabel: false,
  changeOnKeyDown: true
};
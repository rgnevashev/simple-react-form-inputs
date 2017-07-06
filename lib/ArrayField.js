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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Array = require('react-simpl-form/lib/Array');

var _Array2 = _interopRequireDefault(_Array);

var _propTypes3 = require('./propTypes.js');

var _WrapperField = require('./WrapperField.js');

var _WrapperField2 = _interopRequireDefault(_WrapperField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrayField = function (_ArrayComponent) {
  (0, _inherits3.default)(ArrayField, _ArrayComponent);

  function ArrayField() {
    (0, _classCallCheck3.default)(this, ArrayField);
    return (0, _possibleConstructorReturn3.default)(this, (ArrayField.__proto__ || Object.getPrototypeOf(ArrayField)).apply(this, arguments));
  }

  (0, _createClass3.default)(ArrayField, [{
    key: 'renderChildrenItem',
    value: function renderChildrenItem(_ref) {
      var _this2 = this;

      var children = _ref.children,
          index = _ref.index;

      var id = new Date().getTime().toString(36) + index;
      if (this.props.renderChildrenItem) {
        return this.props.renderChildrenItem(children, index, id);
      }

      return _react2.default.createElement(
        'div',
        { className: this.props.childrenClassName, key: this.props.fieldName + '.' + index, 'data-id': '' + id },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-11' },
          this.renderChildrenItemWithContext({ children: children, index: index })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-sm-1 text-right' },
          !this.props.disabled && _react2.default.createElement(
            _Button2.default,
            { bsStyle: 'danger', onClick: function onClick() {
                return _this2.removeItem(index);
              } },
            _react2.default.createElement('i', { className: 'fa fa-minus' }),
            this.props.btnAddText && _react2.default.createElement(
              'span',
              null,
              this.props.btnAddText
            )
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          parentClassName = _props.parentClassName,
          showAddButton = _props.showAddButton,
          disabled = _props.disabled,
          btnAddText = _props.btnAddText;


      return _react2.default.createElement(
        _WrapperField2.default,
        this.props,
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('sortable-container', parentClassName) },
          this.renderChildren()
        ),
        _react2.default.createElement(
          'div',
          null,
          showAddButton && !disabled && _react2.default.createElement(
            _Button2.default,
            { bsStyle: 'primary', onClick: function onClick() {
                return _this3.addItem();
              } },
            _react2.default.createElement('i', { className: 'fa fa-plus' }),
            btnAddText && _react2.default.createElement(
              'span',
              null,
              btnAddText
            )
          )
        )
      );
    }
  }]);
  return ArrayField;
}(_Array2.default);

exports.default = ArrayField;

ArrayField.propTypes = (0, _extends3.default)({}, _propTypes3.propTypes, _Array2.default.propTypes, {
  btnAddText: _react2.default.PropTypes.string,
  btnRemoveText: _react2.default.PropTypes.string,
  parentClassName: _propTypes2.default.string,
  childrenClassName: _propTypes2.default.string,
  renderChildrenItem: _propTypes2.default.func,
  renderItem: _propTypes2.default.func
});
ArrayField.defaultProps = (0, _extends3.default)({}, _propTypes3.defaultProps, _Array2.default.defaultProps, {
  childrenClassName: 'row m-b-10'
});
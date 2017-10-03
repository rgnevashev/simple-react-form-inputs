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

var _propTypes3 = require('./propTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * You can use this field as array field but the main purporse is to extend it
 * and create your own (like the material-ui fields do)
 */
var ObjectComponent = function (_React$Component) {
  (0, _inherits3.default)(ObjectComponent, _React$Component);

  function ObjectComponent() {
    (0, _classCallCheck3.default)(this, ObjectComponent);
    return (0, _possibleConstructorReturn3.default)(this, (ObjectComponent.__proto__ || Object.getPrototypeOf(ObjectComponent)).apply(this, arguments));
  }

  (0, _createClass3.default)(ObjectComponent, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        parentFieldName: this.props.fieldName
      };
    }
  }, {
    key: 'getChildrenComponents',
    value: function getChildrenComponents() {
      if (this.props.children) {
        return this.props.children;
      }
      throw new Error('You must pass children to the object field "' + this.props.fieldName + '"');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { marginTop: 20, marginBottom: 20, padding: 20 } },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'b',
            null,
            this.props.label
          )
        ),
        _react2.default.createElement(
          'div',
          { style: { color: 'red' } },
          this.props.errorMessage
        ),
        this.getChildrenComponents()
      );
    }
  }]);
  return ObjectComponent;
}(_react2.default.Component);

ObjectComponent.propTypes = (0, _extends3.default)({}, _propTypes3.objectComponentPropTypes);

ObjectComponent.childContextTypes = {
  parentFieldName: _propTypes2.default.string
};

exports.default = ObjectComponent;
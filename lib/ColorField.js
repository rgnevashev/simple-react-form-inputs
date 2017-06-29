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

var _reactColor = require('react-color');

var ColorPickers = _interopRequireWildcard(_reactColor);

var _propTypes3 = require('./propTypes.js');

var _WrapperField = require('./WrapperField.js');

var _WrapperField2 = _interopRequireDefault(_WrapperField);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorField = function (_React$Component) {
  (0, _inherits3.default)(ColorField, _React$Component);

  function ColorField(props) {
    (0, _classCallCheck3.default)(this, ColorField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ColorField.__proto__ || Object.getPrototypeOf(ColorField)).call(this, props));

    _this.state = {
      displayColorPicker: false,
      value: props.value
    };
    return _this;
  }

  (0, _createClass3.default)(ColorField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ value: nextProps.value });
    }
  }, {
    key: 'onChange',
    value: function onChange(value) {
      this.setState({ value: value });
    }
  }, {
    key: 'handleChangeComplete',
    value: function handleChangeComplete(value) {
      this.setState({ value: value });
      this.props.onChange(value);
      this.handleClose();
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.setState({ displayColorPicker: !this.state.displayColorPicker });
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.setState({ displayColorPicker: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          value = _state.value,
          displayColorPicker = _state.displayColorPicker;

      var styles = {
        color: {
          width: '40px',
          height: '16px',
          borderRadius: '2px',
          backgroundColor: value
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer'
        },
        popover: {
          position: 'absolute',
          zIndex: '2'
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        }
      };
      var props = (0, _extends3.default)({}, this.props.passProps, {
        color: value,
        disabled: this.props.disabled,
        onChange: function onChange(_ref) {
          var hex = _ref.hex;
          return _this2.onChange(hex);
        },
        onChangeComplete: function onChangeComplete(_ref2) {
          var hex = _ref2.hex;
          return _this2.handleChangeComplete(hex);
        }
      });

      return _react2.default.createElement(
        _WrapperField2.default,
        this.props,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { style: styles.swatch, onClick: function onClick() {
                return _this2.handleClick();
              } },
            _react2.default.createElement('div', { style: styles.color })
          ),
          displayColorPicker && _react2.default.createElement(
            'div',
            { style: styles.popover },
            _react2.default.createElement('div', { style: styles.cover, onClick: function onClick() {
                return _this2.handleClose();
              } }),
            _react2.default.createElement(ColorPickers[this.props.component], props)
          )
        )
      );
    }
  }]);
  return ColorField;
}(_react2.default.Component); /* eslint-disable no-nested-ternary */


exports.default = ColorField;

ColorField.propTypes = (0, _extends3.default)({}, _propTypes3.propTypes, {
  component: _propTypes2.default.string
});
ColorField.defaultProps = (0, _extends3.default)({}, _propTypes3.defaultProps, {
  component: 'SwatchesPicker'
});
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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Dropdown = require('react-bootstrap/lib/Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _DateRange = require('react-date-range/lib/DateRange');

var _DateRange2 = _interopRequireDefault(_DateRange);

var _propTypes3 = require('./propTypes.js');

var _WrapperField = require('./WrapperField.js');

var _WrapperField2 = _interopRequireDefault(_WrapperField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultRanges = {
  'Last Year': {
    startDate: function startDate(now) {
      return now.subtract(1, 'year').startOf('year');
    },
    endDate: function endDate(now) {
      return now.subtract(1, 'year').endOf('year');
    }
  },
  'Last 6 Months': {
    startDate: function startDate(now) {
      return now.subtract(6, 'month').startOf('month');
    },
    endDate: function endDate(now) {
      return now.subtract(1, 'month').endOf('month');
    }
  },
  'Last 3 Months': {
    startDate: function startDate(now) {
      return now.subtract(3, 'month').startOf('month');
    },
    endDate: function endDate(now) {
      return now.subtract(1, 'month').endOf('month');
    }
  },
  'Last Month': {
    startDate: function startDate(now) {
      return now.subtract(1, 'month').startOf('month');
    },
    endDate: function endDate(now) {
      return now.subtract(1, 'month').endOf('month');
    }
  },
  'Past 30 Days': {
    startDate: function startDate(now) {
      return now.subtract(29, 'days');
    },
    endDate: function endDate(now) {
      return now;
    }
  },
  'Past 7 Days': {
    startDate: function startDate(now) {
      return now.subtract(6, 'days');
    },
    endDate: function endDate(now) {
      return now;
    }
  },
  Yesterday: {
    startDate: function startDate(now) {
      return now.subtract(1, 'days');
    },
    endDate: function endDate(now) {
      return now.subtract(1, 'days');
    }
  },
  Today: {
    startDate: function startDate(now) {
      return now;
    },
    endDate: function endDate(now) {
      return now;
    }
  },
  'This Month': {
    startDate: function startDate(now) {
      return now.startOf('month');
    },
    endDate: function endDate(now) {
      return now.endOf('month');
    }
  },
  'This Year': {
    startDate: function startDate(now) {
      return now.startOf('year');
    },
    endDate: function endDate(now) {
      return now.endOf('year');
    }
  },
  'Next 7 Days': {
    startDate: function startDate(now) {
      return now;
    },
    endDate: function endDate(now) {
      return now.add(7, 'days');
    }
  },
  'Next 30 Days': {
    startDate: function startDate(now) {
      return now;
    },
    endDate: function endDate(now) {
      return now.add(30, 'days');
    }
  },
  'Next Month': {
    startDate: function startDate(now) {
      return now.add(1, 'month').startOf('month');
    },
    endDate: function endDate(now) {
      return now.add(1, 'month').endOf('month');
    }
  },
  'Next 3 Months': {
    startDate: function startDate(now) {
      return now.add(1, 'month').startOf('month');
    },
    endDate: function endDate(now) {
      return now.add(3, 'month').endOf('month');
    }
  },
  'Next 6 Months': {
    startDate: function startDate(now) {
      return now.add(1, 'month').startOf('month');
    },
    endDate: function endDate(now) {
      return now.add(6, 'month').endOf('month');
    }
  }
}; /* eslint-disable no-nested-ternary */


var DateRangeToggle = function DateRangeToggle(_ref) {
  var _onClick = _ref.onClick,
      children = _ref.children;
  return _react2.default.createElement(
    'a',
    {
      href: '#',
      onClick: function onClick(event) {
        event.preventDefault();
        _onClick(event);
      }
    },
    children
  );
};
DateRangeToggle.propTypes = {
  onClick: _propTypes2.default.func,
  children: _propTypes2.default.any
};

var DateRangeField = function (_React$Component) {
  (0, _inherits3.default)(DateRangeField, _React$Component);

  function DateRangeField(props) {
    (0, _classCallCheck3.default)(this, DateRangeField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DateRangeField.__proto__ || Object.getPrototypeOf(DateRangeField)).call(this, props));

    _this.state = {
      value: props.value || props.defaultDates
    };
    return _this;
  }

  (0, _createClass3.default)(DateRangeField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ value: nextProps.value });
    }
  }, {
    key: 'onChange',
    value: function onChange(range) {
      var value = {
        startDate: range.startDate.toDate(),
        endDate: range.endDate.toDate()
      };
      this.setState({ value: value });
      this.props.onChange(value);
    }
  }, {
    key: 'valueFormatted',
    value: function valueFormatted(value) {
      if (value) {
        return [value.startDate, value.endDate].filter(function (date) {
          return !!date;
        }).map(function (date) {
          return date && (0, _moment2.default)(date).format('DD/MM/YYYY');
        }).join(' - ');
      }
      return '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          placeholder = _props.placeholder,
          disabled = _props.disabled,
          inputProps = _props.inputProps,
          dropdownProps = _props.dropdownProps,
          rangeKeys = _props.rangeKeys,
          passProps = _props.passProps,
          fieldName = _props.fieldName;
      var value = this.state.value;


      return _react2.default.createElement(
        _WrapperField2.default,
        this.props,
        _react2.default.createElement(
          _Dropdown2.default,
          (0, _extends3.default)({ id: fieldName }, dropdownProps),
          _react2.default.createElement(
            DateRangeToggle,
            { bsRole: 'toggle' },
            _react2.default.createElement(_FormControl2.default, (0, _extends3.default)({
              type: 'text',
              componentClass: 'input',
              value: this.valueFormatted(value),
              placeholder: placeholder,
              disabled: disabled
            }, inputProps))
          ),
          _react2.default.createElement(
            _Dropdown2.default.Menu,
            { style: { maxWidth: 'none', padding: 0 } },
            _react2.default.createElement(_DateRange2.default, (0, _extends3.default)({
              startDate: value && (0, _moment2.default)(value.startDate),
              endDate: value && (0, _moment2.default)(value.endDate),
              onInit: function onInit(range) {
                return _this2.onChange(range);
              },
              onChange: function onChange(range) {
                return _this2.onChange(range);
              },
              ranges: _underscore2.default.pick(defaultRanges, rangeKeys),
              theme: {
                PredefinedRanges: { padding: '10px' },
                PredefinedRangesItem: { padding: '5px 8px' }
              }
            }, passProps))
          )
        )
      );
    }
  }]);
  return DateRangeField;
}(_react2.default.Component);

exports.default = DateRangeField;


DateRangeField.propTypes = (0, _extends3.default)({}, _propTypes3.propTypes, {
  inputProps: _propTypes2.default.object,
  dropdownProps: _propTypes2.default.object,
  rangeKeys: _propTypes2.default.array,
  defaultDates: _propTypes2.default.object
});

DateRangeField.defaultProps = (0, _extends3.default)({}, _propTypes3.defaultProps, {
  rangeKeys: ['Last 6 Months', 'Last 3 Months', 'Last Month', 'Yesterday', 'Today', 'This Month', 'This Year', 'Next Month'],
  defaultDates: {
    startDate: (0, _moment2.default)().startOf('month'),
    endDate: (0, _moment2.default)().endOf('month')
  },
  dropdownProps: {
    pullRight: true
  },
  inputProps: {
    className: 'w-200'
  }
});
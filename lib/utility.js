'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.docToModifier = exports.getPresentFields = exports.reportNulls = exports.cleanNulls = exports.cleanFields = undefined;

var _mongoObject = require('mongo-object');

var _mongoObject2 = _interopRequireDefault(_mongoObject);

var _isObject = require('lodash/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _each = require('lodash/each');

var _each2 = _interopRequireDefault(_each);

var _last = require('lodash/last');

var _last2 = _interopRequireDefault(_last);

var _union = require('lodash/union');

var _union2 = _interopRequireDefault(_union);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _filter = require('lodash/filter');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isBasicObject = function isBasicObject(obj) {
  return (0, _isObject2.default)(obj) && Object.getPrototypeOf(obj) === Object.prototype;
};

var isNullUndefinedOrEmptyString = function isNullUndefinedOrEmptyString(val) {
  return val === void 0 || val === null || typeof val === 'string' && val.length === 0;
};

var cleanFields = exports.cleanFields = function cleanFields(doc, fields) {
  var newDoc = {};
  (0, _each2.default)(doc, function (val, key) {
    var keys = key.split('.').reduce(function (memo, value) {
      var lastItem = (0, _last2.default)(memo);
      var pre = lastItem ? lastItem + '.' : '';
      return (0, _union2.default)(memo, [pre + value]);
    }, []);
    var contains = false;
    keys.forEach(function (newKey) {
      if ((0, _includes2.default)(fields, newKey)) {
        contains = true;
      }
    });
    if (contains && key !== '_id') {
      newDoc[key] = val;
    }
  });

  return newDoc;
};

var cleanNulls = exports.cleanNulls = function cleanNulls(doc, docIsArray, keepEmptyStrings) {
  var newDoc = docIsArray ? [] : {};
  (0, _each2.default)(doc, function (val, key) {
    if (!(0, _isArray2.default)(val) && isBasicObject(val)) {
      val = cleanNulls(val, false, keepEmptyStrings); // Recurse into plain objects
      if (!(0, _isEmpty2.default)(val)) {
        newDoc[key] = val;
      }
    } else if ((0, _isArray2.default)(val)) {
      val = cleanNulls(val, true, keepEmptyStrings); // Recurse into non-typed arrays
      if (!(0, _isEmpty2.default)(val)) {
        newDoc[key] = val;
      }
    } else if (!isNullUndefinedOrEmptyString(val)) {
      newDoc[key] = val;
    } else if (keepEmptyStrings && typeof val === 'string' && val.length === 0) {
      newDoc[key] = val;
    }
  });

  return newDoc;
};

var reportNulls = exports.reportNulls = function reportNulls(flatDoc, keepEmptyStrings) {
  var nulls = {};

  // Loop through the flat doc
  (0, _each2.default)(flatDoc, function (val, key) {
    // If value is undefined, null, or an empty string, report this as null so it will be unset
    if (val === null) {
      nulls[key] = '';
    } else if (val === void 0) {
      nulls[key] = '';
    } else if (!keepEmptyStrings && typeof val === 'string' && val.length === 0) {
      nulls[key] = '';
    } else if ((0, _isArray2.default)(val) && cleanNulls(val, true, keepEmptyStrings).length === 0) {
      // If value is an array in which all the values recursively are undefined, null, or an empty string, report this as null so it will be unset
      nulls[key] = '';
    }
  });

  return nulls;
};

var getPresentFields = exports.getPresentFields = function getPresentFields(fields) {
  return (0, _filter2.default)(fields, function (field) {
    var props = field.component.props;
    return !props.disabled;
  }).map(function (field) {
    return field.field;
  });
};

var docToModifier = exports.docToModifier = function docToModifier(doc, options) {
  var modifier = {};
  var mDoc;
  var flatDoc;
  var nulls;
  options = options || {};
  mDoc = new _mongoObject2.default(doc);
  flatDoc = mDoc.getFlatObject({
    keepArrays: !!options.keepArrays
  });
  nulls = reportNulls(flatDoc, !!options.keepEmptyStrings);
  nulls = cleanFields(nulls, options.fields);
  flatDoc = cleanNulls(flatDoc, false, !!options.keepEmptyStrings);
  flatDoc = cleanFields(flatDoc, options.fields);

  if (!(0, _isEmpty2.default)(flatDoc)) {
    modifier.$set = flatDoc;
  }

  if (!(0, _isEmpty2.default)(nulls)) {
    modifier.$unset = nulls;
  }

  return modifier;
};
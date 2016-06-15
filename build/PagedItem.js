'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PagedItem = function (_React$Component) {
  (0, _inherits3.default)(PagedItem, _React$Component);

  function PagedItem(props) {
    (0, _classCallCheck3.default)(this, PagedItem);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PagedItem).call(this, props));
  }

  (0, _createClass3.default)(PagedItem, [{
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return PagedItem;
}(_react2.default.Component);

exports.default = PagedItem;


PagedItem.propTypes = {};
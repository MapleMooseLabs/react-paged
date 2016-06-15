'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

var _PagedContent = require('./PagedContent');

var _PagedContent2 = _interopRequireDefault(_PagedContent);

var _PagedControls = require('../components/PagedControls');

var _PagedControls2 = _interopRequireDefault(_PagedControls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Paged = function (_React$Component) {
  (0, _inherits3.default)(Paged, _React$Component);

  function Paged(props) {
    (0, _classCallCheck3.default)(this, Paged);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Paged).call(this, props));

    _this.state = {
      currentPage: 1,
      itemsPerPage: props.itemsPerPage,
      itemRange: {
        min: 0,
        max: props.itemsPerPage - 1
      }
    };
    return _this;
  }

  (0, _createClass3.default)(Paged, [{
    key: 'gotoPage',
    value: function gotoPage(page) {
      var _state = this.state;
      var currentPage = _state.currentPage;
      var itemsPerPage = _state.itemsPerPage;
      var itemRange = _state.itemRange;

      var totalPages = this.getTotalPages();

      if (!page || page < 1 || page > totalPages) {
        return;
      }

      this.setState({
        currentPage: page,
        itemRange: {
          min: page * itemsPerPage - itemsPerPage,
          max: page * itemsPerPage - 1
        }
      });
    }
  }, {
    key: 'getTotalPages',
    value: function getTotalPages() {
      var children = this.props.children;
      var items = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var child = _step.value;

          if (child.type.name === 'PagedContent') {
            items = child.props.children;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return Math.ceil(items.length / this.state.itemsPerPage);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      return _react2.default.createElement(
        'div',
        { ref: 'container', className: 'paged' },
        _react2.default.Children.map(this.props.children, function (child) {
          return _react2.default.cloneElement(child, {
            currentPage: _this2.state.currentPage,
            gotoPage: _this2.gotoPage.bind(_this2),
            itemsPerPage: _this2.props.itemsPerPage,
            totalPages: _this2.getTotalPages(),
            itemRange: _this2.state.itemRange
          });
        })
      );
    }
  }]);
  return Paged;
}(_react2.default.Component);

exports.default = Paged;


Paged.propTypes = {
  itemsPerPage: _react.PropTypes.number
};

Paged.defaultProps = {
  itemsPerPage: 10
};
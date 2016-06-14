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

    console.log(props);
    var totalItems = props.children ? props.children.length : 0;
    _this.state = {
      currentPage: 1,
      itemsPerPage: props.itemsPerPage,
      itemRange: {
        min: 0,
        max: props.itemsPerPage - 1
      },
      totalItems: totalItems
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
      return Math.ceil(this.state.totalItems / this.state.itemsPerPage);
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var itemRange = this.state.itemRange;

      var children = this.props.children.filter(function (x) {
        return x.key >= itemRange.min && x.key <= itemRange.max;
      });
      return children;
    }
  }, {
    key: 'renderControls',
    value: function renderControls() {
      var _props = this.props;
      var showControls = _props.showControls;
      var labels = _props.labels;


      if (showControls) {
        return _react2.default.createElement(_PagedControls2.default, {
          currentPage: this.state.currentPage,
          totalPages: this.getTotalPages(),
          gotoPage: this.gotoPage.bind(this),
          labels: labels });
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log(this.props);
      var _props2 = this.props;
      var labels = _props2.labels;
      var children = _props2.children;
      var showControls = _props2.showControls;


      return _react2.default.createElement(
        'div',
        { ref: 'container' },
        showControls !== 'bottom' ? this.renderControls() : null,
        this.renderChildren(),
        showControls !== 'top' ? this.renderControls() : null
      );
    }
  }]);
  return Paged;
}(_react2.default.Component);

exports.default = Paged;


Paged.propTypes = {
  itemsPerPage: _react.PropTypes.number,
  // labels: PropTypes.shape({
  //   next: PropTypes.string,
  //   previous: PropTypes.string,
  //   first: PropTypes.string,
  //   last: PropTypes.string,
  // }),
  labels: _react.PropTypes.object,
  data: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.array])
};

Paged.defaultProps = {
  itemsPerPage: 10,
  labels: {
    next: 'next',
    previous: 'previous',
    first: 'first',
    last: 'last'
  },
  showControls: false
};
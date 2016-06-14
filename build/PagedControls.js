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

var PagedControls = function (_React$Component) {
  (0, _inherits3.default)(PagedControls, _React$Component);

  function PagedControls(props) {
    (0, _classCallCheck3.default)(this, PagedControls);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PagedControls).call(this, props));
  }

  (0, _createClass3.default)(PagedControls, [{
    key: 'renderControl',
    value: function renderControl(page, el, label) {
      var currentPage = this.props.currentPage;
      var ControlTag = '' + el;
      return _react2.default.createElement(
        'li',
        { key: label },
        _react2.default.createElement(
          ControlTag,
          { onClick: this.props.gotoPage.bind(this, page), disabled: currentPage === page },
          label
        )
      );
    }
  }, {
    key: 'renderControls',
    value: function renderControls() {
      var _props = this.props;
      var currentPage = _props.currentPage;
      var totalPages = _props.totalPages;
      var gotoPage = _props.gotoPage;
      var labels = _props.labels;

      var controls = [];

      controls.push(this.renderControl(1, 'button', labels.first));
      controls.push(this.renderControl(currentPage - 1, 'button', labels.previous));

      for (var i = 1; i <= totalPages; i++) {
        controls.push(this.renderControl(i, 'a', i));
      }

      controls.push(this.renderControl(currentPage + 1, 'button', labels.next));
      controls.push(this.renderControl(totalPages, 'button', labels.last));

      return controls;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        null,
        this.renderControls()
      );
    }
  }]);
  return PagedControls;
}(_react2.default.Component);

exports.default = PagedControls;


PagedControls.propTypes = {
  totalPages: _react.PropTypes.number
};

PagedControls.defaultProps = {
  totalPages: 1,
  currentPage: 1
};
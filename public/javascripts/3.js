webpackJsonp([3],{

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(31);

var _actions = __webpack_require__(68);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (true) {
	__webpack_require__(118);
}

var List = function (_React$Component) {
	_inherits(List, _React$Component);

	function List(props) {
		_classCallCheck(this, List);

		var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

		_this.page = 1;
		return _this;
	}

	_createClass(List, [{
		key: 'handlePrev',
		value: function handlePrev() {
			if (this.page == 1) {
				return false;
			}
			this.handleGetData(--this.page);
		}
	}, {
		key: 'handleNext',
		value: function handleNext() {
			this.handleGetData(++this.page);
		}
	}, {
		key: 'handleGetData',
		value: function handleGetData() {
			var dispatch = this.props.dispatch;

			Promise.all([dispatch(actions.fetchList("page=" + this.page))]);
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			// if(typeof __CLIENT__ != 'undefined'){
			// 	this.handleGetData.call(this);
			// }
		}
	}, {
		key: 'render',
		value: function render() {
			var list = this.props.state.list;

			return list.data && list.data.length ? _react2.default.createElement(
				'div',
				{ className: 'list' },
				_react2.default.createElement(
					'ul',
					null,
					list.data.map(function (value, key) {
						return _react2.default.createElement(
							'li',
							{ key: key },
							_react2.default.createElement(
								'span',
								null,
								value.title
							),
							_react2.default.createElement(
								'em',
								null,
								' \u2014',
								value.author
							),
							_react2.default.createElement(
								'p',
								null,
								value.descriptions
							)
						);
					})
				),
				_react2.default.createElement(
					'div',
					{ className: 'page' },
					_react2.default.createElement(
						'button',
						{ onClick: this.handlePrev.bind(this), disabled: this.page == 1 ? "disabled" : "" },
						'\u4E0A\u4E00\u9875'
					),
					_react2.default.createElement(
						'button',
						{ onClick: this.handleNext.bind(this), disabled: list.data.length < list.num ? "disabled" : "" },
						'\u4E0B\u4E00\u9875'
					)
				)
			) : null;
		}
	}]);

	return List;
}(_react2.default.Component);

List = (0, _reactRedux.connect)(function (state) {
	return { state: state };
})(List);
exports.default = List;

module.exports = List;

/***/ })

});
webpackJsonp([3],{

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
	_inherits(Login, _React$Component);

	function Login(props) {
		_classCallCheck(this, Login);

		return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));
	}

	_createClass(Login, [{
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			e.persist();
			e.preventDefault();
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				{ className: 'login' },
				_react2.default.createElement(
					'form',
					{ action: '/login', method: 'post', onSubmit: this.handleSubmit.bind(this) },
					_react2.default.createElement(
						'p',
						null,
						'\u7528\u6237\u540D\uFF1A',
						_react2.default.createElement('input', { type: 'text', ref: 'username' })
					),
					_react2.default.createElement(
						'p',
						null,
						'\u5BC6\u7801\uFF1A',
						_react2.default.createElement('input', { type: 'password', ref: 'password' })
					),
					_react2.default.createElement(
						'button',
						{ type: 'submit' },
						'\u767B\u9646'
					)
				)
			);
		}
	}]);

	return Login;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
	return { state: state };
})(Login);

/***/ })

});
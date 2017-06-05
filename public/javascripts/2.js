webpackJsonp([2],{

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(31);

var _isomorphicFetch = __webpack_require__(40);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _reactRouterDom = __webpack_require__(32);

var _config = __webpack_require__(117);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (true) {
	__webpack_require__(293);
}

var Add = function (_React$Component) {
	_inherits(Add, _React$Component);

	function Add(props) {
		_classCallCheck(this, Add);

		var _this = _possibleConstructorReturn(this, (Add.__proto__ || Object.getPrototypeOf(Add)).call(this, props));

		_this.state = {
			error: ''
		};
		return _this;
	}

	_createClass(Add, [{
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			var _this2 = this;

			e.persist();
			e.preventDefault();

			var title = this.refs.title.value;
			var descriptions = this.refs.descriptions.value;
			// var data = new FormData();

			(0, _isomorphicFetch2.default)(_config2.default.api.add, {
				method: "POST",
				credentials: "same-origin",
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				// mode: "cors",
				body: 'title=' + title + '&descriptions=' + descriptions
			}).then(function (res) {
				return res.json();
			}).then(function (res) {
				if (res.error) {
					_this2.setState({
						error: res.message
					});
				} else {
					window.location.href = '/';
				}
			});
			// return false;
		}
	}, {
		key: 'render',
		value: function render() {
			var session = this.props.state.session;

			return _react2.default.createElement(
				'div',
				{ className: 'login' },
				_react2.default.createElement(
					'form',
					{ action: '/add', method: 'post', onSubmit: this.handleSubmit.bind(this) },
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement('input', { type: 'text', name: 'title', ref: 'title' })
					),
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement('textarea', { name: 'descriptions', ref: 'descriptions' })
					),
					_react2.default.createElement(
						'button',
						{ type: 'submit' },
						'\u6DFB\u52A0'
					)
				),
				_react2.default.createElement(
					'span',
					null,
					this.state.error
				)
			);
		}
	}]);

	return Add;
}(_react2.default.Component);

Add = (0, _reactRedux.connect)(function (state) {
	return { state: state };
})(Add);
exports.default = Add;

module.exports = Add;

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(284)(undefined);
// imports


// module
exports.push([module.i, ".add {\n  color: green; }\n", ""]);

// exports


/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(290);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(285)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
webpackJsonp([3],{274:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(3),i=function(e){return e&&e.__esModule?e:{default:e}}(u),c=n(29),s=n(64),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s);n(113);var p=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.page=1,n}return l(t,e),o(t,[{key:"handlePrev",value:function(){if(1==this.page)return!1;this.handleGetData(--this.page)}},{key:"handleNext",value:function(){this.handleGetData(++this.page)}},{key:"handleGetData",value:function(){var e=this.props.dispatch;Promise.all([e(f.fetchList("page="+this.page))])}},{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var e=this.props.state.list;return e.data&&e.data.length?i.default.createElement("div",{className:"list"},i.default.createElement("ul",null,e.data.map(function(e,t){return i.default.createElement("li",{key:t},i.default.createElement("span",null,e.title),i.default.createElement("em",null," —",e.author),i.default.createElement("p",null,e.descriptions))})),i.default.createElement("div",{className:"page"},i.default.createElement("button",{onClick:this.handlePrev.bind(this),disabled:1==this.page?"disabled":""},"上一页"),i.default.createElement("button",{onClick:this.handleNext.bind(this),disabled:e.data.length<e.num?"disabled":""},"下一页"))):null}}]),t}(i.default.Component);p=(0,c.connect)(function(e){return{state:e}})(p),t.default=p,e.exports=p}});
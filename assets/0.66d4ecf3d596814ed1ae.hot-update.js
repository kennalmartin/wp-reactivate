webpackHotUpdate(0,{13:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(0);\nvar react_default = /*#__PURE__*/__webpack_require__.n(react);\n\n// EXTERNAL MODULE: ./node_modules/react-dom/index.js\nvar react_dom = __webpack_require__(2);\nvar react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);\n\n// EXTERNAL MODULE: ./node_modules/prop-types/index.js\nvar prop_types = __webpack_require__(3);\nvar prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);\n\n// EXTERNAL MODULE: ./node_modules/isomorphic-fetch/fetch-npm-browserify.js\nvar fetch_npm_browserify = __webpack_require__(11);\nvar fetch_npm_browserify_default = /*#__PURE__*/__webpack_require__.n(fetch_npm_browserify);\n\n// CONCATENATED MODULE: ./app/utils/fetchWP.js\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar methods = [\'get\', \'post\', \'put\', \'delete\'];\n\nvar fetchWP_fetchWP = /*#__PURE__*/function () {\n  function fetchWP() {\n    var _this = this;\n\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, fetchWP);\n\n    this.options = options;\n    if (!options.restURL) throw new Error(\'restURL option is required\');\n    if (!options.restNonce) throw new Error(\'restNonce option is required\');\n    methods.forEach(function (method) {\n      _this[method] = _this._setup(method);\n    });\n  }\n\n  _createClass(fetchWP, [{\n    key: "_setup",\n    value: function _setup(method) {\n      var _this2 = this;\n\n      return function () {\n        var endpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \'/\';\n        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n        var fetchObject = {\n          credentials: \'same-origin\',\n          method: method,\n          headers: {\n            \'Accept\': \'application/json\',\n            \'Content-Type\': \'application/json\',\n            \'X-WP-Nonce\': _this2.options.restNonce\n          }\n        };\n\n        if (data) {\n          fetchObject.body = JSON.stringify(data);\n        }\n\n        return fetch_npm_browserify_default()(_this2.options.restURL + endpoint, fetchObject).then(function (response) {\n          return response.json().then(function (json) {\n            return response.ok ? json : Promise.reject(json);\n          });\n        });\n      };\n    }\n  }]);\n\n  return fetchWP;\n}();\n\n\n// CONCATENATED MODULE: ./app/containers/Admin.jsx\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction Admin_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction Admin_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction Admin_createClass(Constructor, protoProps, staticProps) { if (protoProps) Admin_defineProperties(Constructor.prototype, protoProps); if (staticProps) Admin_defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar Admin_Admin = /*#__PURE__*/function (_Component) {\n  _inherits(Admin, _Component);\n\n  var _super = _createSuper(Admin);\n\n  function Admin(props) {\n    var _this;\n\n    Admin_classCallCheck(this, Admin);\n\n    _this = _super.call(this, props);\n\n    _defineProperty(_assertThisInitialized(_this), "getSetting", function () {\n      _this.fetchWP.get(\'admin\').then(function (json) {\n        return _this.setState({\n          email: json.value,\n          savedEmail: json.value\n        });\n      }, function (err) {\n        return console.log(\'error\', err);\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "updateSetting", function () {\n      _this.fetchWP.post(\'admin\', {\n        email: _this.state.email\n      }).then(function (json) {\n        return _this.processOkResponse(json, \'saved\');\n      }, function (err) {\n        return console.log(\'error\', err);\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "deleteSetting", function () {\n      _this.fetchWP["delete"](\'admin\').then(function (json) {\n        return _this.processOkResponse(json, \'deleted\');\n      }, function (err) {\n        return console.log(\'error\', err);\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "processOkResponse", function (json, action) {\n      if (json.success) {\n        _this.setState({\n          email: json.value,\n          savedEmail: json.value\n        });\n      } else {\n        console.log("Setting was not ".concat(action, "."), json);\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "updateInput", function (event) {\n      _this.setState({\n        email: event.target.value\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "handleSave", function (event) {\n      event.preventDefault();\n\n      if (_this.state.email === _this.state.savedEmail) {\n        console.log(\'Setting unchanged\');\n      } else {\n        _this.updateSetting();\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), "handleDelete", function (event) {\n      event.preventDefault();\n\n      _this.deleteSetting();\n    });\n\n    _this.state = {\n      email: \'\',\n      savedEmail: \'\'\n    };\n    _this.fetchWP = new fetchWP_fetchWP({\n      restURL: _this.props.wpObject.api_url,\n      restNonce: _this.props.wpObject.api_nonce\n    });\n\n    _this.getSetting();\n\n    return _this;\n  }\n\n  Admin_createClass(Admin, [{\n    key: "render",\n    value: function render() {\n      return /*#__PURE__*/react_default.a.createElement("div", {\n        className: "wrap"\n      }, /*#__PURE__*/react_default.a.createElement("form", null, /*#__PURE__*/react_default.a.createElement("h1", null, "Email Settings"), /*#__PURE__*/react_default.a.createElement("label", null, "Email:", /*#__PURE__*/react_default.a.createElement("input", {\n        type: "text",\n        value: this.state.email,\n        onChange: this.updateInput\n      })), /*#__PURE__*/react_default.a.createElement("button", {\n        id: "save",\n        className: "button button-primary",\n        onClick: this.handleSave\n      }, "Save"), /*#__PURE__*/react_default.a.createElement("button", {\n        id: "delete",\n        className: "button button-primary",\n        onClick: this.handleDelete\n      }, "Delete")));\n    }\n  }]);\n\n  return Admin;\n}(react["Component"]);\n\n\nAdmin_Admin.propTypes = {\n  wpObject: prop_types_default.a.object\n};\n// CONCATENATED MODULE: ./app/admin.js\n\n\n\ndocument.addEventListener(\'DOMContentLoaded\', function () {\n  react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(Admin_Admin, {\n    wpObject: window.wpr_object\n  }), document.getElementById(\'wp-reactivate-admin\'));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvdXRpbHMvZmV0Y2hXUC5qcz9kN2Q4Iiwid2VicGFjazovLy8uL2FwcC9jb250YWluZXJzL0FkbWluLmpzeD9hYzk3Iiwid2VicGFjazovLy8uL2FwcC9hZG1pbi5qcz85ZDliIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xudmFyIG1ldGhvZHMgPSBbJ2dldCcsICdwb3N0JywgJ3B1dCcsICdkZWxldGUnXTtcblxudmFyIGZldGNoV1AgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBmZXRjaFdQKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgZmV0Y2hXUCk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIGlmICghb3B0aW9ucy5yZXN0VVJMKSB0aHJvdyBuZXcgRXJyb3IoJ3Jlc3RVUkwgb3B0aW9uIGlzIHJlcXVpcmVkJyk7XG4gICAgaWYgKCFvcHRpb25zLnJlc3ROb25jZSkgdGhyb3cgbmV3IEVycm9yKCdyZXN0Tm9uY2Ugb3B0aW9uIGlzIHJlcXVpcmVkJyk7XG4gICAgbWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIF90aGlzW21ldGhvZF0gPSBfdGhpcy5fc2V0dXAobWV0aG9kKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhmZXRjaFdQLCBbe1xuICAgIGtleTogXCJfc2V0dXBcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHVwKG1ldGhvZCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbmRwb2ludCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJy8nO1xuICAgICAgICB2YXIgZGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgICAgIHZhciBmZXRjaE9iamVjdCA9IHtcbiAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdYLVdQLU5vbmNlJzogX3RoaXMyLm9wdGlvbnMucmVzdE5vbmNlXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgZmV0Y2hPYmplY3QuYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZldGNoKF90aGlzMi5vcHRpb25zLnJlc3RVUkwgKyBlbmRwb2ludCwgZmV0Y2hPYmplY3QpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2Uub2sgPyBqc29uIDogUHJvbWlzZS5yZWplY3QoanNvbik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gZmV0Y2hXUDtcbn0oKTtcblxuZXhwb3J0IHsgZmV0Y2hXUCBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGZldGNoV1AgZnJvbSAnLi4vdXRpbHMvZmV0Y2hXUCc7XG5cbnZhciBBZG1pbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQWRtaW4sIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQWRtaW4pO1xuXG4gIGZ1bmN0aW9uIEFkbWluKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFkbWluKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImdldFNldHRpbmdcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuZmV0Y2hXUC5nZXQoJ2FkbWluJykudGhlbihmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGVtYWlsOiBqc29uLnZhbHVlLFxuICAgICAgICAgIHNhdmVkRW1haWw6IGpzb24udmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwidXBkYXRlU2V0dGluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5mZXRjaFdQLnBvc3QoJ2FkbWluJywge1xuICAgICAgICBlbWFpbDogX3RoaXMuc3RhdGUuZW1haWxcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnByb2Nlc3NPa1Jlc3BvbnNlKGpzb24sICdzYXZlZCcpO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ2Vycm9yJywgZXJyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImRlbGV0ZVNldHRpbmdcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuZmV0Y2hXUFtcImRlbGV0ZVwiXSgnYWRtaW4nKS50aGVuKGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wcm9jZXNzT2tSZXNwb25zZShqc29uLCAnZGVsZXRlZCcpO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ2Vycm9yJywgZXJyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByb2Nlc3NPa1Jlc3BvbnNlXCIsIGZ1bmN0aW9uIChqc29uLCBhY3Rpb24pIHtcbiAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGVtYWlsOiBqc29uLnZhbHVlLFxuICAgICAgICAgIHNhdmVkRW1haWw6IGpzb24udmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNldHRpbmcgd2FzIG5vdCBcIi5jb25jYXQoYWN0aW9uLCBcIi5cIiksIGpzb24pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInVwZGF0ZUlucHV0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBlbWFpbDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJoYW5kbGVTYXZlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKF90aGlzLnN0YXRlLmVtYWlsID09PSBfdGhpcy5zdGF0ZS5zYXZlZEVtYWlsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTZXR0aW5nIHVuY2hhbmdlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMudXBkYXRlU2V0dGluZygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImhhbmRsZURlbGV0ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIF90aGlzLmRlbGV0ZVNldHRpbmcoKTtcbiAgICB9KTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgc2F2ZWRFbWFpbDogJydcbiAgICB9O1xuICAgIF90aGlzLmZldGNoV1AgPSBuZXcgZmV0Y2hXUCh7XG4gICAgICByZXN0VVJMOiBfdGhpcy5wcm9wcy53cE9iamVjdC5hcGlfdXJsLFxuICAgICAgcmVzdE5vbmNlOiBfdGhpcy5wcm9wcy53cE9iamVjdC5hcGlfbm9uY2VcbiAgICB9KTtcblxuICAgIF90aGlzLmdldFNldHRpbmcoKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBZG1pbiwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJ3cmFwXCJcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsIFwiRW1haWwgU2V0dGluZ3NcIiksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgbnVsbCwgXCJFbWFpbDpcIiwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMudXBkYXRlSW5wdXRcbiAgICAgIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgICBpZDogXCJzYXZlXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLXByaW1hcnlcIixcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVTYXZlXG4gICAgICB9LCBcIlNhdmVcIiksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgICAgaWQ6IFwiZGVsZXRlXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLXByaW1hcnlcIixcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVEZWxldGVcbiAgICAgIH0sIFwiRGVsZXRlXCIpKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFkbWluO1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgeyBBZG1pbiBhcyBkZWZhdWx0IH07XG5BZG1pbi5wcm9wVHlwZXMgPSB7XG4gIHdwT2JqZWN0OiBQcm9wVHlwZXMub2JqZWN0XG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBZG1pbiBmcm9tICcuL2NvbnRhaW5lcnMvQWRtaW4uanN4JztcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gIFJlYWN0RE9NLnJlbmRlciggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQWRtaW4sIHtcbiAgICB3cE9iamVjdDogd2luZG93Lndwcl9vYmplY3RcbiAgfSksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cC1yZWFjdGl2YXRlLWFkbWluJykpO1xufSk7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n')}});
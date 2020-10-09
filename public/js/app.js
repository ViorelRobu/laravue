/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./public";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./resources/js/app.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Form */ \"./resources/js/core/Form.js\");\n/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Example */ \"./resources/js/components/Example.js\");\n\n\n\n\nwindow.axios = axios__WEBPACK_IMPORTED_MODULE_1___default.a;\nwindow.Form = _core_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  el: '#root',\n  components: {\n    Example: _components_Example__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  data: {\n    form: new _core_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n      name: '',\n      description: ''\n    })\n  },\n  methods: {\n    onSubmit() {\n      this.form.post('/projects').then(data => console.log(data)).catch(error => console.log(error));\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./resources/js/app.js?");

/***/ }),

/***/ "./resources/js/components/Example.js":
/*!********************************************!*\
  !*** ./resources/js/components/Example.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  template: '<h1>Hello World</h1>'\n});\n\n//# sourceURL=webpack:///./resources/js/components/Example.js?");

/***/ }),

/***/ "./resources/js/core/Errors.js":
/*!*************************************!*\
  !*** ./resources/js/core/Errors.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Errors {\n  /**\n   * Create a new Errors instance\n   */\n  constructor() {\n    this.errors = {};\n  }\n  /**\n   * Check to see if there is an error matching the field\n   * and return it\n   *\n   * @param {string} field\n   */\n\n\n  has(field) {\n    return this.errors.hasOwnProperty(field);\n  }\n  /**\n   * Check to see if there are any errors\n   *\n   * @returns boolean\n   */\n\n\n  any() {\n    return Object.keys(this.errors).length > 0;\n  }\n  /**\n   * Get the error for a given field\n   *\n   * @param {string} field\n   */\n\n\n  get(field) {\n    if (this.errors[field]) {\n      return this.errors[field][0];\n    }\n  }\n  /**\n   * Add new errors to the errors object\n   *\n   * @param {object} errors\n   */\n\n\n  record(errors) {\n    this.errors = errors;\n  }\n  /**\n   * Clear errors from the errors object\n   *\n   * @param {string} field\n   */\n\n\n  clear(field) {\n    if (field) {\n      delete this.errors[field];\n    } else {\n      this.errors = {};\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Errors);\n\n//# sourceURL=webpack:///./resources/js/core/Errors.js?");

/***/ }),

/***/ "./resources/js/core/Form.js":
/*!***********************************!*\
  !*** ./resources/js/core/Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ \"./resources/js/core/Errors.js\");\n\n\nclass Form {\n  /**\n   * Create a new form instance\n   *\n   * @param {object} data\n   */\n  constructor(data) {\n    this.originalData = data;\n\n    for (let field in data) {\n      this[field] = data[field];\n    }\n\n    this.errors = new _Errors__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.success = false;\n    this.successMessage = '';\n  }\n  /**\n   * Reset the form fields\n   */\n\n\n  reset() {\n    for (let field in this.originalData) {\n      this[field] = '';\n    }\n\n    this.errors.clear();\n  }\n  /**\n   * Fetch all the relevant data for the form\n   */\n\n\n  data() {\n    let data = {};\n\n    for (let property in this.originalData) {\n      data[property] = this[property];\n    }\n\n    return data;\n  }\n  /**\n   * Send a post request\n   *\n   * @param {string} url\n   */\n\n\n  post(url) {\n    return this.submit('post', url);\n  }\n  /**\n   * Send a patch request\n   *\n   * @param {string} url\n   */\n\n\n  patch(url) {\n    return this.submit('patch', url);\n  }\n  /**\n   * Send a delete request\n   *\n   * @param {string} url\n   */\n\n\n  delete(url) {\n    return this.submit('delete', url);\n  }\n  /**\n   * Submit the form\n   *\n   * @param {string} requestType\n   * @param {string} url\n   */\n\n\n  submit(requestType, url) {\n    return new Promise((resolve, reject) => {\n      axios[requestType](url, this.data()).then(response => {\n        this.onSuccess(response.data);\n        resolve(response.data);\n      }).catch(error => {\n        this.onFail(error.response.data.errors);\n        reject(error.response.data.errors);\n      });\n    });\n  }\n  /**\n   * Handle a successful form submission\n   *\n   * @param {object} response\n   */\n\n\n  onSuccess(data) {\n    this.success = true;\n    this.successMessage = data.message;\n    this.reset();\n  }\n  /**\n   * Handle a failed form submission\n   *\n   * @param {object} error\n   */\n\n\n  onFail(errors) {\n    this.errors.record(errors);\n  }\n  /**\n   * Close the success message\n   */\n\n\n  closeMessage() {\n    this.success = false;\n    this.successMessage = '';\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\n//# sourceURL=webpack:///./resources/js/core/Form.js?");

/***/ })

/******/ });
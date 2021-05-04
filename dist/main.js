/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _modules_field_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/field.js */ \"./js/modules/field.js\");\n\n\n_modules_field_js__WEBPACK_IMPORTED_MODULE_1__.field.init();\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/modules/field.js":
/*!*****************************!*\
  !*** ./js/modules/field.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"field\": () => (/* binding */ field)\n/* harmony export */ });\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.js */ \"./js/modules/global.js\");\n/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object.js */ \"./js/modules/object.js\");\n\n // ===============================================\n// field\n// ===============================================\n\nvar field = {\n  objects: [],\n  x: 0,\n  y: 0,\n  color: 'rgba(238,242,246)',\n  draw: function draw() {\n    //reset field setting\n    _global_js__WEBPACK_IMPORTED_MODULE_0__.c.fillStyle = this.color;\n    _global_js__WEBPACK_IMPORTED_MODULE_0__.c.lineWidth = _global_js__WEBPACK_IMPORTED_MODULE_0__.lineWidthDafault; //set field style\n\n    _global_js__WEBPACK_IMPORTED_MODULE_0__.c.fillRect(-field.x, -field.y, innerWidth, innerHeight);\n    this.drawGrid(100); // console.log(this.x + \" \" + field.x)\n    //reinit\n\n    this.objects.forEach(function (e) {\n      return e.update();\n    });\n  },\n  updateAsCanvas: function updateAsCanvas(x, y) {\n    _global_js__WEBPACK_IMPORTED_MODULE_0__.c.clearRect(-this.x, -this.y, innerWidth, innerHeight);\n    this.x = this.x + x;\n    this.y = this.y + y; // console.log(`x : ${this.x}, Y : ${this.y}`)\n\n    _global_js__WEBPACK_IMPORTED_MODULE_0__.c.translate(x, y);\n    _global_js__WEBPACK_IMPORTED_MODULE_0__.g.style.transform = \"translate(\".concat(this.x + 10, \"px,\").concat(this.y + 10, \"px)\");\n    this.draw();\n  },\n  updateAsView: function updateAsView(x, y) {\n    _global_js__WEBPACK_IMPORTED_MODULE_0__.c.clearRect(-this.x, -this.y, innerWidth, innerHeight);\n    _global_js__WEBPACK_IMPORTED_MODULE_0__.c.translate(-this.x, -this.y);\n    this.x = x;\n    this.y = y;\n    _global_js__WEBPACK_IMPORTED_MODULE_0__.c.translate(x, y); // g.style.transform = `translate(${x+10}px,${y+10}px)` \n\n    _global_js__WEBPACK_IMPORTED_MODULE_0__.g.style.transform = \"translate(\".concat(x + 10, \"px,\").concat(y + 10, \"px)\");\n    this.draw();\n  },\n  drawGrid: function drawGrid(gap) {\n    // if(canvas.style.scale < 1)return;\n    var w = innerWidth - field.x;\n    var h = innerHeight - field.y;\n    _global_js__WEBPACK_IMPORTED_MODULE_0__.c.beginPath();\n    _global_js__WEBPACK_IMPORTED_MODULE_0__.c.globalAlpha = 0.5; // +x\n\n    for (var x = 0; x < w; x = x + gap) {\n      _global_js__WEBPACK_IMPORTED_MODULE_0__.c.moveTo(x, -field.y);\n      _global_js__WEBPACK_IMPORTED_MODULE_0__.c.lineTo(x, h);\n    } //-x\n\n\n    for (var _x = 0; _x >= -field.x; _x = _x - gap) {\n      _global_js__WEBPACK_IMPORTED_MODULE_0__.c.moveTo(_x, -field.y);\n      _global_js__WEBPACK_IMPORTED_MODULE_0__.c.lineTo(_x, h);\n    } //+y\n\n\n    for (var y = 0; y < h; y = y + gap) {\n      _global_js__WEBPACK_IMPORTED_MODULE_0__.c.moveTo(-field.x, y);\n      _global_js__WEBPACK_IMPORTED_MODULE_0__.c.lineTo(w, y);\n    } //-y\n\n\n    for (var _y = 0; _y >= -field.y; _y = _y - gap) {\n      _global_js__WEBPACK_IMPORTED_MODULE_0__.c.moveTo(-field.x, _y);\n      _global_js__WEBPACK_IMPORTED_MODULE_0__.c.lineTo(w, _y);\n    }\n\n    _global_js__WEBPACK_IMPORTED_MODULE_0__.c.strokeStyle = 'black';\n    _global_js__WEBPACK_IMPORTED_MODULE_0__.c.stroke();\n    _global_js__WEBPACK_IMPORTED_MODULE_0__.c.closePath();\n    _global_js__WEBPACK_IMPORTED_MODULE_0__.c.globalAlpha = 1;\n  },\n  init: function init() {\n    this.objects.push(new _object_js__WEBPACK_IMPORTED_MODULE_1__.Circle(0, 0, 10, 10, 10));\n    this.objects.push(new _object_js__WEBPACK_IMPORTED_MODULE_1__.Circle(100, 100, 10, 10, 10));\n    this.objects.push(new _object_js__WEBPACK_IMPORTED_MODULE_1__.Circle(-100, -100, 10, 10, 10));\n    field.updateAsView(500, 500);\n  }\n};\nwindow.addEventListener('resize', function () {\n  _global_js__WEBPACK_IMPORTED_MODULE_0__.canvas.width = window.innerWidth;\n  _global_js__WEBPACK_IMPORTED_MODULE_0__.canvas.height = window.innerHeight; // init()\n});\nwindow.addEventListener('mousemove', function (e) {\n  _global_js__WEBPACK_IMPORTED_MODULE_0__.mouse.x = e.x;\n  _global_js__WEBPACK_IMPORTED_MODULE_0__.mouse.y = e.y;\n  _global_js__WEBPACK_IMPORTED_MODULE_0__.mouse.field.x = e.x - field.x;\n  _global_js__WEBPACK_IMPORTED_MODULE_0__.mouse.field.y = e.y - field.y; // console.log(`x : ${mouse.x}, Y : ${mouse.y}`)\n});\nwindow.addEventListener(\"mousedown\", function (e) {\n  _global_js__WEBPACK_IMPORTED_MODULE_0__.mouse.isClicked = true;\n  _global_js__WEBPACK_IMPORTED_MODULE_0__.mouse.lastDown.x = e.x;\n  _global_js__WEBPACK_IMPORTED_MODULE_0__.mouse.lastDown.y = e.y;\n  _global_js__WEBPACK_IMPORTED_MODULE_0__.mouse.field.lastDown.x = e.x - field.x;\n  _global_js__WEBPACK_IMPORTED_MODULE_0__.mouse.field.lastDown.y = e.y - field.y;\n});\nwindow.addEventListener(\"mouseup\", function (e) {\n  _global_js__WEBPACK_IMPORTED_MODULE_0__.mouse.isClicked = false;\n});\nwindow.addEventListener('click', function (e) {\n  _global_js__WEBPACK_IMPORTED_MODULE_0__.mouse.click.x = e.x;\n  _global_js__WEBPACK_IMPORTED_MODULE_0__.mouse.click.y = e.y;\n  console.log(\"x: \".concat(e.x, \",y: \").concat(e.y));\n}); // ===============================================\n// grab listenner\n// ===============================================\n\nwindow.addEventListener('keydown', function (e) {\n  if (e.key == ' ' && _global_js__WEBPACK_IMPORTED_MODULE_0__.mouse.isClicked) {\n    field.updateAsView(_global_js__WEBPACK_IMPORTED_MODULE_0__.mouse.x - _global_js__WEBPACK_IMPORTED_MODULE_0__.mouse.field.lastDown.x, _global_js__WEBPACK_IMPORTED_MODULE_0__.mouse.y - _global_js__WEBPACK_IMPORTED_MODULE_0__.mouse.field.lastDown.y);\n  }\n});\nwindow.addEventListener('keydown', function (e) {\n  if (e.key == ' ') {\n    _global_js__WEBPACK_IMPORTED_MODULE_0__.canvas.style.cursor = \"grab\";\n    _global_js__WEBPACK_IMPORTED_MODULE_0__.svg.style.cursor = \"grab\";\n  }\n\n  if (e.key == ' ' && _global_js__WEBPACK_IMPORTED_MODULE_0__.mouse.isClicked) {\n    _global_js__WEBPACK_IMPORTED_MODULE_0__.canvas.style.cursor = \"grabbing\";\n    _global_js__WEBPACK_IMPORTED_MODULE_0__.svg.style.cursor = \"grabbing\";\n  }\n\n  window.addEventListener('mouseup', function () {\n    if (_global_js__WEBPACK_IMPORTED_MODULE_0__.mouse.isClicked) {\n      _global_js__WEBPACK_IMPORTED_MODULE_0__.canvas.style.cursor = \"grab\";\n      _global_js__WEBPACK_IMPORTED_MODULE_0__.svg.style.cursor = \"grab\";\n    }\n  });\n  window.addEventListener('keyup', function () {\n    _global_js__WEBPACK_IMPORTED_MODULE_0__.canvas.style.cursor = 'default';\n    _global_js__WEBPACK_IMPORTED_MODULE_0__.svg.style.cursor = 'default';\n  });\n}); // ===============================================\n//  scale\n// ===============================================\n// feature implemention of scroll and move field\n\nvar wheel = {\n  x: Math.floor(innerWidth / 2),\n  y: Math.floor(innerHeight / 2)\n};\nvar scale = 1;\n\nfunction zoom(event) {\n  event.preventDefault();\n  scale += event.deltaY * -0.01; // Restrict scale\n\n  scale = Math.min(Math.max(.125, scale), 4); // Apply scale transform\n\n  _global_js__WEBPACK_IMPORTED_MODULE_0__.canvas.style.transform = \"scale(\".concat(scale, \")\");\n  _global_js__WEBPACK_IMPORTED_MODULE_0__.g.style.transform = \"scale(\".concat(scale, \")\"); // canvas.width = innerWidth * (1+scale);\n  // canvas.height = innerHeight * (1+scale);\n  // g.width = innerWidth * (1+scale);\n  // g.height = innerHeight * (1+scale);\n  // field.updateAsCanvas(0,0)\n}\n\nwindow.addEventListener('wheel', function (e) {\n  wheel.x = e.x;\n  wheel.y = e.y;\n  console.log(\"x: \".concat(e.x, \",y: \").concat(e.y));\n});\nwindow.addEventListener('wheel', zoom);\n\n\n//# sourceURL=webpack:///./js/modules/field.js?");

/***/ }),

/***/ "./js/modules/global.js":
/*!******************************!*\
  !*** ./js/modules/global.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"canvas\": () => (/* binding */ canvas),\n/* harmony export */   \"svg\": () => (/* binding */ svg),\n/* harmony export */   \"g\": () => (/* binding */ g),\n/* harmony export */   \"c\": () => (/* binding */ c),\n/* harmony export */   \"UMLClassStrokerColor\": () => (/* binding */ UMLClassStrokerColor),\n/* harmony export */   \"lineWidthDafault\": () => (/* binding */ lineWidthDafault),\n/* harmony export */   \"colorArray\": () => (/* binding */ colorArray),\n/* harmony export */   \"distance\": () => (/* binding */ distance),\n/* harmony export */   \"mouse\": () => (/* binding */ mouse)\n/* harmony export */ });\nvar canvas = document.querySelector('canvas');\nvar svg = document.querySelector('svg');\nvar g = document.querySelector('svg').querySelector('g');\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nvar c = canvas.getContext('2d');\nvar UMLClassStrokerColor = 'rgb(185, 198, 209)';\nvar lineWidthDafault = 1;\nvar colorArray = ['#15C2A6', '#353535', '#FEC828', '#EF4F2D', '#CB2624'];\n\nfunction distance(x1, y1, x2, y2) {\n  var xDist = x2 - x1;\n  var yDist = y2 - y1;\n  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));\n} // ===============================================\n// mouse status\n// ===============================================\n\n\nvar mouse = {\n  x: undefined,\n  y: undefined,\n  lastDown: {\n    x: undefined,\n    y: undefined\n  },\n  // is this really need ? but I thought lastDown and click is different. click is propablly same as mouseup, or little bit different\n  click: {\n    x: undefined,\n    y: undefined\n  },\n  isClicked: false,\n  field: {\n    x: undefined,\n    y: undefined,\n    lastDown: {\n      x: undefined,\n      y: undefined\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///./js/modules/global.js?");

/***/ }),

/***/ "./js/modules/object.js":
/*!******************************!*\
  !*** ./js/modules/object.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Circle\": () => (/* binding */ Circle)\n/* harmony export */ });\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.js */ \"./js/modules/global.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Circle = /*#__PURE__*/function () {\n  function Circle(x, y, dx, dy, radius) {\n    _classCallCheck(this, Circle);\n\n    this.x = x;\n    this.y = y;\n    this.dx = dx;\n    this.dy = dy;\n    this.radius = radius;\n    this.minRadius = radius; // this.color = colorArray[Math.floor(Math.random() * colorArray.length)];\n\n    this.color = 'black';\n  }\n\n  _createClass(Circle, [{\n    key: \"draw\",\n    value: function draw() {\n      _global_js__WEBPACK_IMPORTED_MODULE_0__.c.beginPath();\n      _global_js__WEBPACK_IMPORTED_MODULE_0__.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n      _global_js__WEBPACK_IMPORTED_MODULE_0__.c.strokeStyle = 'blue';\n      _global_js__WEBPACK_IMPORTED_MODULE_0__.c.fillStyle = this.color;\n      _global_js__WEBPACK_IMPORTED_MODULE_0__.c.stroke();\n      _global_js__WEBPACK_IMPORTED_MODULE_0__.c.fill();\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.draw();\n    }\n  }]);\n\n  return Circle;\n}();\n\n\n\n//# sourceURL=webpack:///./js/modules/object.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./css/style.css":
/*!**************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/style.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n    margin: 0;\\n    overflow: hidden;\\n    \\n}\\n#field{\\n    height: 100vh;\\n    width: 100vw;\\n    \\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./css/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./css/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;
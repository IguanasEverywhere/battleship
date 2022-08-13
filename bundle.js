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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".boards-container {\\n  border: 2px solid green;\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\\n.player-board {\\n  border: 2px solid black;\\n  height: 500px;\\n  width: 500px;\\n  display: grid;\\n  grid-template-columns: repeat(10, 1fr);\\n  grid-template-rows: repeat(10, 1fr);\\n}\\n\\n.board-space, .computer-board-space {\\n  border: 1px solid red;\\n}\\n\\n.occupied-space {\\n  background-color: gray;\\n}\\n\\n.game-over {\\n  position: absolute;\\n  background-color: blue;\\n  height: 50%;\\n  width: 50%;\\n}\\n  \", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/gameLoop.js":
/*!*************************!*\
  !*** ./src/gameLoop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"controlGame\": () => (/* binding */ controlGame),\n/* harmony export */   \"placeShipsComputer\": () => (/* binding */ placeShipsComputer),\n/* harmony export */   \"placeShipsPlayer\": () => (/* binding */ placeShipsPlayer)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipFactory */ \"./src/shipFactory.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\n\n\n\n\nconst placeShipsPlayer = () => {\n    _gameboard__WEBPACK_IMPORTED_MODULE_1__.playerGameboard.placeShipVertically(_shipFactory__WEBPACK_IMPORTED_MODULE_2__.battleShip, 0, 0);\n    _gameboard__WEBPACK_IMPORTED_MODULE_1__.playerGameboard.placeShipVertically(_shipFactory__WEBPACK_IMPORTED_MODULE_2__.cruiser, 0, 2);\n    _gameboard__WEBPACK_IMPORTED_MODULE_1__.playerGameboard.placeShipHorizontally(_shipFactory__WEBPACK_IMPORTED_MODULE_2__.destroyer, 5, 0);\n    _gameboard__WEBPACK_IMPORTED_MODULE_1__.playerGameboard.placeShipHorizontally(_shipFactory__WEBPACK_IMPORTED_MODULE_2__.carrier, 1, 5);\n    _gameboard__WEBPACK_IMPORTED_MODULE_1__.playerGameboard.placeShipHorizontally(_shipFactory__WEBPACK_IMPORTED_MODULE_2__.submarine, 7, 3);\n    _gameboard__WEBPACK_IMPORTED_MODULE_1__.playerGameboard.placedShipArray.forEach(spot => {\n        let occupiedSpace = _gameboard__WEBPACK_IMPORTED_MODULE_1__.playerGameboard.coordinatesArr.find(place => place.xCoord === spot.xCoord && place.yCoord === spot.yCoord);\n        if (occupiedSpace) {\n            occupiedSpace.spaceOccupied = true;\n        }\n    });\n\n    let boardsContainer = document.getElementsByClassName('boards-container')[0];\n    boardsContainer.remove();\n\n    (0,___WEBPACK_IMPORTED_MODULE_3__.renderBoard)();\n}\n\nconst placeShipsComputer = () => {\n    _gameboard__WEBPACK_IMPORTED_MODULE_1__.computerGameboard.placeShipVertically(_shipFactory__WEBPACK_IMPORTED_MODULE_2__.battleShipComputer, 3, 0);\n    _gameboard__WEBPACK_IMPORTED_MODULE_1__.computerGameboard.placeShipVertically(_shipFactory__WEBPACK_IMPORTED_MODULE_2__.cruiserComputer, 4, 8);\n    _gameboard__WEBPACK_IMPORTED_MODULE_1__.computerGameboard.placeShipHorizontally(_shipFactory__WEBPACK_IMPORTED_MODULE_2__.destroyerComputer, 9, 0);\n    _gameboard__WEBPACK_IMPORTED_MODULE_1__.computerGameboard.placeShipHorizontally(_shipFactory__WEBPACK_IMPORTED_MODULE_2__.carrierComputer, 0, 5);\n    _gameboard__WEBPACK_IMPORTED_MODULE_1__.computerGameboard.placeShipHorizontally(_shipFactory__WEBPACK_IMPORTED_MODULE_2__.submarineComputer, 5, 4);\n    _gameboard__WEBPACK_IMPORTED_MODULE_1__.computerGameboard.placedShipArray.forEach(spot => {\n        let occupiedSpace = _gameboard__WEBPACK_IMPORTED_MODULE_1__.computerGameboard.coordinatesArr.find(place => place.xCoord === spot.xCoord && place.yCoord === spot.yCoord);\n        if (occupiedSpace) {\n            occupiedSpace.spaceOccupied = true;\n        }\n    });\n\n    let boardsContainer = document.getElementsByClassName('boards-container')[0];\n    boardsContainer.remove();\n\n    (0,___WEBPACK_IMPORTED_MODULE_3__.renderBoard)();\n}\n\nconst controlGame = (turn) => {\n\n    if (turn ===\"gameOver\") {\n        const gameOverModal = document.createElement(\"div\");\n        gameOverModal.classList.add(\"game-over\");\n        gameOverModal.textContent = \"Game Over!!\";\n        const boardsContainer = document.getElementsByClassName(\"boards-container\")[0];\n        boardsContainer.appendChild(gameOverModal);\n        \n    }\n    if (turn === \"playerTurn\") {\n        (0,_player__WEBPACK_IMPORTED_MODULE_0__.playerTurn)();\n    }\n    if (turn === \"computerTurn\") {\n        let computerBoard = document.getElementsByClassName('player-board')[1];\n        let newBoard = computerBoard.cloneNode(true);\n        computerBoard.replaceWith(newBoard);\n        setTimeout(() => {\n            (0,_player__WEBPACK_IMPORTED_MODULE_0__.computerTurn)();\n        }, 1500)\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/gameLoop.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"computerGameboard\": () => (/* binding */ computerGameboard),\n/* harmony export */   \"playerGameboard\": () => (/* binding */ playerGameboard)\n/* harmony export */ });\n/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ \"./src/shipFactory.js\");\n\n\nconst gameboard = () => {\n    let coordinatesArr = [];\n    let placedShipArray = [];\n    let missedShots = [];\n    let landedShots = [];\n\n    for (let i = 0; i < 10; i++) {\n        for (let j = 0; j < 10; j++) {\n            let coordObj = {\n                xCoord: i,\n                yCoord: j,\n                spaceOccupied: false\n            };\n            coordinatesArr.push(coordObj);\n        }\n    }\n\n    const getCoordinatesArr = () => {\n        return coordinatesArr;\n    }\n\n    const placeShipVertically = (ship, startingXCoord, startingYCoord) => {\n        for (let i = 0; i < ship.shipLength; i++) {\n            placedShipArray.push({ shipObj: ship, xCoord: startingXCoord + i, yCoord: startingYCoord });\n        }\n        return placedShipArray;\n    }\n\n    const placeShipHorizontally = (ship, startingXCoord, startingYCoord) => {\n        for (let i = 0; i < ship.shipLength; i++) {\n            placedShipArray.push({ shipObj: ship, xCoord: startingXCoord, yCoord: startingYCoord + i });\n        }\n        return placedShipArray;\n    }\n\n    const resetPieces = () => {\n        placedShipArray = [];\n        return placedShipArray;\n    }\n\n    const clearMissedShots = () => {\n        missedShots = [];\n    }\n\n    const receiveAttack = (x, y) => {\n        let foundShip = placedShipArray.find(ship => ship.xCoord === x && ship.yCoord === y);\n        if (foundShip) {\n            landedShots.push({ x: x, y: y });\n            foundShip.shipObj.hit();\n            return foundShip.shipObj;\n        } else {\n            missedShots.push({ x: x, y: y });\n            return missedShots;\n        }\n    }\n\n    const allShipsSunk = () => {\n        if (_shipFactory__WEBPACK_IMPORTED_MODULE_0__.carrier.isSunk() && _shipFactory__WEBPACK_IMPORTED_MODULE_0__.cruiser.isSunk() && _shipFactory__WEBPACK_IMPORTED_MODULE_0__.battleShip.isSunk() && _shipFactory__WEBPACK_IMPORTED_MODULE_0__.submarine.isSunk() && _shipFactory__WEBPACK_IMPORTED_MODULE_0__.destroyer.isSunk()) {\n            return true;\n        } else if (_shipFactory__WEBPACK_IMPORTED_MODULE_0__.carrierComputer.isSunk() && _shipFactory__WEBPACK_IMPORTED_MODULE_0__.cruiserComputer.isSunk() && _shipFactory__WEBPACK_IMPORTED_MODULE_0__.battleShipComputer.isSunk() && _shipFactory__WEBPACK_IMPORTED_MODULE_0__.submarineComputer.isSunk() && _shipFactory__WEBPACK_IMPORTED_MODULE_0__.destroyerComputer.isSunk()) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    return { coordinatesArr, placedShipArray, getCoordinatesArr, placeShipHorizontally, placeShipVertically, resetPieces, receiveAttack, clearMissedShots, allShipsSunk, missedShots, landedShots };\n}\n\nconst playerGameboard = gameboard();\nconst computerGameboard = gameboard();\n\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderBoard\": () => (/* binding */ renderBoard)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameLoop */ \"./src/gameLoop.js\");\n\n\n\n\n\nconst renderBoard = () => {\n\n  const boardsContainer = document.createElement(\"div\");\n  boardsContainer.classList.add(\"boards-container\");\n  document.body.appendChild(boardsContainer);\n\n  const playerBoard = document.createElement(\"div\");\n  playerBoard.classList.add(\"player-board\");\n  boardsContainer.appendChild(playerBoard);\n\n  const computerBoard = document.createElement(\"div\");\n  computerBoard.classList.add(\"player-board\");\n  boardsContainer.appendChild(computerBoard);\n\n  _gameboard__WEBPACK_IMPORTED_MODULE_1__.playerGameboard.coordinatesArr.forEach(coordObj => {\n    let space = document.createElement(\"div\");\n    space.setAttribute('xCoord', coordObj.xCoord);\n    space.setAttribute('yCoord', coordObj.yCoord);\n    space.setAttribute('isOccupied', coordObj.spaceOccupied);\n    space.classList.add(\"board-space\");\n    if (space.getAttribute(\"isOccupied\") === 'true') {\n      space.style.backgroundColor = \"gray\"\n    }\n    playerBoard.appendChild(space);\n  });\n\n  _gameboard__WEBPACK_IMPORTED_MODULE_1__.computerGameboard.coordinatesArr.forEach(coordObj => {\n    let space = document.createElement(\"div\");\n    space.setAttribute('xCoord', coordObj.xCoord);\n    space.setAttribute('yCoord', coordObj.yCoord);\n    space.setAttribute('isOccupied', coordObj.spaceOccupied);\n    space.classList.add(\"computer-board-space\");\n    if (space.getAttribute(\"isOccupied\") === 'true') {\n      space.style.backgroundColor = \"gray\"\n    }\n    computerBoard.appendChild(space);\n  });\n\n  const placeShipsBtn = document.createElement(\"button\");\n  placeShipsBtn.textContent = \"Place Ships\";\n  boardsContainer.appendChild(placeShipsBtn);\n\n  placeShipsBtn.addEventListener('click', () => {\n    (0,_gameLoop__WEBPACK_IMPORTED_MODULE_2__.placeShipsPlayer)();\n    (0,_gameLoop__WEBPACK_IMPORTED_MODULE_2__.placeShipsComputer)();\n    (0,_gameLoop__WEBPACK_IMPORTED_MODULE_2__.controlGame)(\"playerTurn\");\n  });\n}\n\nrenderBoard();\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"computerAttack\": () => (/* binding */ computerAttack),\n/* harmony export */   \"computerTurn\": () => (/* binding */ computerTurn),\n/* harmony export */   \"humanAttack\": () => (/* binding */ humanAttack),\n/* harmony export */   \"playerTurn\": () => (/* binding */ playerTurn),\n/* harmony export */   \"randomCoordGenerator\": () => (/* binding */ randomCoordGenerator)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameLoop */ \"./src/gameLoop.js\");\n\n\n\nconst playerTurn = () => {\n    let computerBoardSpaces = document.querySelectorAll(\".computer-board-space\");\n    computerBoardSpaces.forEach(space => {\n        space.addEventListener(\"click\", () => {\n            let occupied = (space.getAttribute(\"isoccupied\"));\n            if (occupied === \"true\") {\n                space.style.backgroundColor = \"red\";\n            } else {\n                space.style.backgroundColor = \"green\"\n            }\n            humanAttack(Number(space.getAttribute(\"xcoord\")), Number(space.getAttribute(\"ycoord\")));\n        });\n    });\n\n}\n\nconst humanAttack = (xCoord, yCoord) => {\n    let prevShotHit = _gameboard__WEBPACK_IMPORTED_MODULE_0__.computerGameboard.landedShots.find(shot => shot.x === xCoord && shot.y === yCoord);\n    let prevShotMiss = _gameboard__WEBPACK_IMPORTED_MODULE_0__.computerGameboard.missedShots.find(shot => shot.x === xCoord && shot.y === yCoord);\n    if (prevShotHit || prevShotMiss) {\n        return null;\n    }\n    let receivedPlayerAttack = _gameboard__WEBPACK_IMPORTED_MODULE_0__.computerGameboard.receiveAttack(xCoord, yCoord);\n    if (_gameboard__WEBPACK_IMPORTED_MODULE_0__.computerGameboard.allShipsSunk()) {\n        (0,_gameLoop__WEBPACK_IMPORTED_MODULE_1__.controlGame)(\"gameOver\");\n    } else {\n        (0,_gameLoop__WEBPACK_IMPORTED_MODULE_1__.controlGame)(\"computerTurn\");\n    }\n\n    return receivedPlayerAttack;\n}\n\n\nconst computerTurn = () => {\n    let playerBoardSpaces = document.querySelectorAll(\".board-space\");\n    let xCoord = randomCoordGenerator();\n    let yCoord = randomCoordGenerator();\n    console.log(computerAttack(xCoord, yCoord));\n    playerBoardSpaces.forEach(space => {\n        let spaceXCoord = Number(space.getAttribute(\"xCoord\"));\n        let spaceYCoord = Number(space.getAttribute(\"yCoord\"));\n        if (spaceXCoord === xCoord && spaceYCoord === yCoord) {\n            if (space.getAttribute(\"isOccupied\") === \"true\") {\n                space.style.backgroundColor = \"red\";\n            } else {\n                space.style.backgroundColor = \"green\";\n            }\n        }\n    });\n}\n\nconst computerAttack = (xCoord, yCoord) => {\n    let prevShotHit = _gameboard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.landedShots.find(shot => shot.x === xCoord && shot.y === yCoord);\n    let prevShotMiss = _gameboard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.missedShots.find(shot => shot.x === xCoord && shot.y === yCoord);\n    if (prevShotHit || prevShotMiss) {\n        computerTurn();\n        return null;\n    }\n    let receivedComputerAttack = _gameboard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.receiveAttack(xCoord, yCoord);\n    if (_gameboard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.allShipsSunk()) {\n        (0,_gameLoop__WEBPACK_IMPORTED_MODULE_1__.controlGame)(\"gameOver\");\n    } else {\n        (0,_gameLoop__WEBPACK_IMPORTED_MODULE_1__.controlGame)(\"playerTurn\");\n    }\n\n    return receivedComputerAttack;\n}\n\nconst randomCoordGenerator = () => {\n    let num = Math.floor(Math.random() * 10);\n    return num;\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"battleShip\": () => (/* binding */ battleShip),\n/* harmony export */   \"battleShipComputer\": () => (/* binding */ battleShipComputer),\n/* harmony export */   \"carrier\": () => (/* binding */ carrier),\n/* harmony export */   \"carrierComputer\": () => (/* binding */ carrierComputer),\n/* harmony export */   \"cruiser\": () => (/* binding */ cruiser),\n/* harmony export */   \"cruiserComputer\": () => (/* binding */ cruiserComputer),\n/* harmony export */   \"destroyer\": () => (/* binding */ destroyer),\n/* harmony export */   \"destroyerComputer\": () => (/* binding */ destroyerComputer),\n/* harmony export */   \"submarine\": () => (/* binding */ submarine),\n/* harmony export */   \"submarineComputer\": () => (/* binding */ submarineComputer)\n/* harmony export */ });\nconst Ship = (shipName, shipLength) => {\n  let hitCount = 0;\n\n  const hit = () => {\n    hitCount++;\n  }\n\n  const getHitCount = () => {\n    return hitCount;\n  }\n\n  const isSunk = () => {\n    if (hitCount === shipLength) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  const clearHitCount = () => {\n    hitCount = 0;\n  }\n\n  return { shipName, shipLength, getHitCount, hit, isSunk, clearHitCount }\n}\n\nconst carrier = Ship(\"carrier\", 5);\nconst battleShip = Ship(\"battleship\", 4);\nconst cruiser = Ship(\"cruiser\", 3);\nconst submarine = Ship(\"submarine\", 3);\nconst destroyer = Ship(\"destroyer\", 2);\n\nconst carrierComputer = Ship(\"carrier\", 5);\nconst battleShipComputer = Ship(\"battleship\", 4);\nconst cruiserComputer = Ship(\"cruiser\", 3);\nconst submarineComputer = Ship(\"submarine\", 3);\nconst destroyerComputer = Ship(\"destroyer\", 2);\n\n\n\n//# sourceURL=webpack://battleship/./src/shipFactory.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
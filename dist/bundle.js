/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".boards-container {\n  border: 2px solid green;\n  display: flex;\n  justify-content: space-around;\n}\n\n.player-board {\n  border: 2px solid black;\n  height: 500px;\n  width: 500px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.board-space, .computer-board-space {\n  border: 1px solid red;\n}\n\n.occupied-space {\n  background-color: gray;\n}\n\n.game-over {\n  position: absolute;\n  background-color: blue;\n  height: 50%;\n  width: 50%;\n}\n\n.ships-area {\n  border: 2px solid yellow;\n}\n  ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,wBAAwB;AAC1B","sourcesContent":[".boards-container {\n  border: 2px solid green;\n  display: flex;\n  justify-content: space-around;\n}\n\n.player-board {\n  border: 2px solid black;\n  height: 500px;\n  width: 500px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.board-space, .computer-board-space {\n  border: 1px solid red;\n}\n\n.occupied-space {\n  background-color: gray;\n}\n\n.game-over {\n  position: absolute;\n  background-color: blue;\n  height: 50%;\n  width: 50%;\n}\n\n.ships-area {\n  border: 2px solid yellow;\n}\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gameLoop.js":
/*!*************************!*\
  !*** ./src/gameLoop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "controlGame": () => (/* binding */ controlGame),
/* harmony export */   "placeShipsComputer": () => (/* binding */ placeShipsComputer),
/* harmony export */   "placeShipsPlayer": () => (/* binding */ placeShipsPlayer)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");






const placeShipsPlayer = (currentShip) => {
    // playerGameboard.placeShipHorizontally(battleShip, 0, 0);
    // playerGameboard.placeShipVertically(cruiser, 0, 2);
    // playerGameboard.placeShipHorizontally(destroyer, 5, 0);
    // playerGameboard.placeShipHorizontally(carrier, 1, 5);
    // playerGameboard.placeShipHorizontally(submarine, 7, 3);


    let playerBoardSpaces = document.querySelectorAll(".board-space");
    playerBoardSpaces.forEach(space => {
        space.addEventListener("mouseover", () => {
            previewPlacement(space, currentShip);
        });
        space.addEventListener("mouseout", () => {
            playerBoardSpaces.forEach(spot => {
                if (spot.getAttribute("isoccupied") === "true") {
                    spot.style.backgroundColor = "gray";
                } else {
                    spot.style.backgroundColor = "white";
                }

            });
        });
        space.addEventListener('click', () => {
            _gameboard__WEBPACK_IMPORTED_MODULE_1__.playerGameboard.placeShipHorizontally(currentShip, space.getAttribute('xCoord'), space.getAttribute('yCoord'));
            console.log(_gameboard__WEBPACK_IMPORTED_MODULE_1__.playerGameboard.placedShipArray)
            _gameboard__WEBPACK_IMPORTED_MODULE_1__.playerGameboard.placedShipArray.forEach(spot => {
                let occupiedSpace = _gameboard__WEBPACK_IMPORTED_MODULE_1__.playerGameboard.coordinatesArr.find(place => place.xCoord === spot.xCoord && place.yCoord === spot.yCoord);
                if (occupiedSpace) {
                    occupiedSpace.spaceOccupied = true;
                }
            });

            let boardsContainer = document.getElementsByClassName('boards-container')[0];
            boardsContainer.remove();
            (0,___WEBPACK_IMPORTED_MODULE_2__.renderBoard)();

        });

    });

    const previewPlacement = (space, ship) => {
        let currentSpaceX = Number((space.getAttribute('xcoord')));
        let currentSpaceY = Number((space.getAttribute('ycoord')));
        if (currentSpaceY <= (9 - ship.shipLength + 1)) {
            playerBoardSpaces.forEach(otherSpace => {
                let otherSpaceX = Number(otherSpace.getAttribute("xCoord"));
                let otherSpaceY = Number(otherSpace.getAttribute("yCoord"));
                if (otherSpaceX === currentSpaceX && otherSpaceY <= currentSpaceY + (ship.shipLength - 1) && (otherSpaceY) >= currentSpaceY) {
                    otherSpace.style.backgroundColor = "gray";
                }
            });
        }

    }





    // playerGameboard.placedShipArray.forEach(spot => {
    //     let occupiedSpace = playerGameboard.coordinatesArr.find(place => place.xCoord === spot.xCoord && place.yCoord === spot.yCoord);
    //     if (occupiedSpace) {
    //         occupiedSpace.spaceOccupied = true;
    //     }
    // });

    // let boardsContainer = document.getElementsByClassName('boards-container')[0];
    // boardsContainer.remove();

    // renderBoard();
}

const placeShipsComputer = () => {
    _gameboard__WEBPACK_IMPORTED_MODULE_1__.computerGameboard.placeShipVertically(_shipFactory__WEBPACK_IMPORTED_MODULE_3__.battleShipComputer, 3, 0);
    _gameboard__WEBPACK_IMPORTED_MODULE_1__.computerGameboard.placeShipVertically(_shipFactory__WEBPACK_IMPORTED_MODULE_3__.cruiserComputer, 4, 8);
    _gameboard__WEBPACK_IMPORTED_MODULE_1__.computerGameboard.placeShipHorizontally(_shipFactory__WEBPACK_IMPORTED_MODULE_3__.destroyerComputer, 9, 0);
    _gameboard__WEBPACK_IMPORTED_MODULE_1__.computerGameboard.placeShipHorizontally(_shipFactory__WEBPACK_IMPORTED_MODULE_3__.carrierComputer, 0, 5);
    _gameboard__WEBPACK_IMPORTED_MODULE_1__.computerGameboard.placeShipHorizontally(_shipFactory__WEBPACK_IMPORTED_MODULE_3__.submarineComputer, 5, 4);
    _gameboard__WEBPACK_IMPORTED_MODULE_1__.computerGameboard.placedShipArray.forEach(spot => {
        let occupiedSpace = _gameboard__WEBPACK_IMPORTED_MODULE_1__.computerGameboard.coordinatesArr.find(place => place.xCoord === spot.xCoord && place.yCoord === spot.yCoord);
        if (occupiedSpace) {
            occupiedSpace.spaceOccupied = true;
        }
    });

    let boardsContainer = document.getElementsByClassName('boards-container')[0];
    boardsContainer.remove();

    (0,___WEBPACK_IMPORTED_MODULE_2__.renderBoard)();
}

const controlGame = (turn) => {

    if (turn === "gameOver") {
        const gameOverModal = document.createElement("div");
        gameOverModal.classList.add("game-over");
        gameOverModal.textContent = "Game Over!!";
        const boardsContainer = document.getElementsByClassName("boards-container")[0];
        boardsContainer.appendChild(gameOverModal);

    }
    if (turn === "playerTurn") {
        (0,_player__WEBPACK_IMPORTED_MODULE_0__.playerTurn)();
    }
    if (turn === "computerTurn") {
        let computerBoard = document.getElementsByClassName('player-board')[1];
        let newBoard = computerBoard.cloneNode(true);
        computerBoard.replaceWith(newBoard);
        setTimeout(() => {
            (0,_player__WEBPACK_IMPORTED_MODULE_0__.computerTurn)();
        }, 1500)
    }
}





/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computerGameboard": () => (/* binding */ computerGameboard),
/* harmony export */   "playerGameboard": () => (/* binding */ playerGameboard)
/* harmony export */ });
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");


const gameboard = () => {
    let coordinatesArr = [];
    let placedShipArray = [];
    let missedShots = [];
    let landedShots = [];

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let coordObj = {
                xCoord: i,
                yCoord: j,
                spaceOccupied: false
            };
            coordinatesArr.push(coordObj);
        }
    }

    const getCoordinatesArr = () => {
        return coordinatesArr;
    }

    const placeShipVertically = (ship, startingXCoord, startingYCoord) => {
        for (let i = 0; i < ship.shipLength; i++) {
            placedShipArray.push({ shipObj: ship, xCoord: Number(startingXCoord + i), yCoord: Number(startingYCoord) });
        }
        return placedShipArray;
    }

    const placeShipHorizontally = (ship, startingXCoord, startingYCoord) => {
        for (let i = 0; i < ship.shipLength; i++) {
            placedShipArray.push({ shipObj: ship, xCoord: Number(startingXCoord), yCoord: Number(startingYCoord) + i });
        }
        return placedShipArray;
    }

    const resetPieces = () => {
        placedShipArray = [];
        return placedShipArray;
    }

    const clearMissedShots = () => {
        missedShots = [];
    }

    const receiveAttack = (x, y) => {
        let foundShip = placedShipArray.find(ship => ship.xCoord === x && ship.yCoord === y);
        if (foundShip) {
            landedShots.push({ x: x, y: y });
            foundShip.shipObj.hit();
            return foundShip.shipObj;
        } else {
            missedShots.push({ x: x, y: y });
            return missedShots;
        }
    }

    const allShipsSunk = () => {
        if (_shipFactory__WEBPACK_IMPORTED_MODULE_0__.carrier.isSunk() && _shipFactory__WEBPACK_IMPORTED_MODULE_0__.cruiser.isSunk() && _shipFactory__WEBPACK_IMPORTED_MODULE_0__.battleShip.isSunk() && _shipFactory__WEBPACK_IMPORTED_MODULE_0__.submarine.isSunk() && _shipFactory__WEBPACK_IMPORTED_MODULE_0__.destroyer.isSunk()) {
            return true;
        } else if (_shipFactory__WEBPACK_IMPORTED_MODULE_0__.carrierComputer.isSunk() && _shipFactory__WEBPACK_IMPORTED_MODULE_0__.cruiserComputer.isSunk() && _shipFactory__WEBPACK_IMPORTED_MODULE_0__.battleShipComputer.isSunk() && _shipFactory__WEBPACK_IMPORTED_MODULE_0__.submarineComputer.isSunk() && _shipFactory__WEBPACK_IMPORTED_MODULE_0__.destroyerComputer.isSunk()) {
            return true;
        } else {
            return false;
        }
    }

    return { coordinatesArr, placedShipArray, getCoordinatesArr, placeShipHorizontally, placeShipVertically, resetPieces, receiveAttack, clearMissedShots, allShipsSunk, missedShots, landedShots };
}

const playerGameboard = gameboard();
const computerGameboard = gameboard();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderBoard": () => (/* binding */ renderBoard)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameLoop */ "./src/gameLoop.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");








const renderBoard = () => {

  const boardsContainer = document.createElement("div");
  boardsContainer.classList.add("boards-container");
  document.body.appendChild(boardsContainer);

  const playerBoard = document.createElement("div");
  playerBoard.classList.add("player-board");
  boardsContainer.appendChild(playerBoard);

  const computerBoard = document.createElement("div");
  computerBoard.classList.add("player-board");
  boardsContainer.appendChild(computerBoard);

  _gameboard__WEBPACK_IMPORTED_MODULE_1__.playerGameboard.coordinatesArr.forEach(coordObj => {
    let space = document.createElement("div");
    space.setAttribute('xCoord', coordObj.xCoord);
    space.setAttribute('yCoord', coordObj.yCoord);
    space.setAttribute('isOccupied', coordObj.spaceOccupied);
    space.classList.add("board-space");
    if (space.getAttribute("isOccupied") === 'true') {
      space.style.backgroundColor = "gray"
    }
    playerBoard.appendChild(space);
  });

  _gameboard__WEBPACK_IMPORTED_MODULE_1__.computerGameboard.coordinatesArr.forEach(coordObj => {
    let space = document.createElement("div");
    space.setAttribute('xCoord', coordObj.xCoord);
    space.setAttribute('yCoord', coordObj.yCoord);
    space.setAttribute('isOccupied', coordObj.spaceOccupied);
    space.classList.add("computer-board-space");
    if (space.getAttribute("isOccupied") === 'true') {
      space.style.backgroundColor = "gray"
    }
    computerBoard.appendChild(space);
  });

  if (_gameboard__WEBPACK_IMPORTED_MODULE_1__.playerGameboard.placedShipArray.length === 17) {
    const beginGameBtn = document.createElement("button");
    beginGameBtn.textContent = "Begin Game";
    boardsContainer.appendChild(beginGameBtn);
  
    beginGameBtn.addEventListener('click', () => {
      (0,_gameLoop__WEBPACK_IMPORTED_MODULE_2__.placeShipsComputer)();
      // placeShipsPlayer(carrier);
      (0,_gameLoop__WEBPACK_IMPORTED_MODULE_2__.controlGame)("playerTurn");
    });
  }


}

const renderShipsToPlace = () => {

  const shipsArea = document.createElement("div");
  shipsArea.classList.add("ships-area");
  document.body.appendChild(shipsArea);

  let playerShipsArray = [_shipFactory__WEBPACK_IMPORTED_MODULE_3__.carrier, _shipFactory__WEBPACK_IMPORTED_MODULE_3__.destroyer, _shipFactory__WEBPACK_IMPORTED_MODULE_3__.submarine, _shipFactory__WEBPACK_IMPORTED_MODULE_3__.cruiser, _shipFactory__WEBPACK_IMPORTED_MODULE_3__.battleShip];

  playerShipsArray.forEach(ship => {
    let shipBtn = document.createElement("button");
    shipBtn.textContent = ship.shipName;
    shipsArea.appendChild(shipBtn);
    shipBtn.addEventListener('click', () => {
      (0,_gameLoop__WEBPACK_IMPORTED_MODULE_2__.placeShipsPlayer)(ship);
      shipsArea.removeChild(shipBtn);
    });
  });
}

renderShipsToPlace();
renderBoard();





/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computerAttack": () => (/* binding */ computerAttack),
/* harmony export */   "computerTurn": () => (/* binding */ computerTurn),
/* harmony export */   "humanAttack": () => (/* binding */ humanAttack),
/* harmony export */   "playerTurn": () => (/* binding */ playerTurn),
/* harmony export */   "randomCoordGenerator": () => (/* binding */ randomCoordGenerator)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameLoop */ "./src/gameLoop.js");



const playerTurn = () => {
    let computerBoardSpaces = document.querySelectorAll(".computer-board-space");
    computerBoardSpaces.forEach(space => {
        space.addEventListener("click", () => {
            let occupied = (space.getAttribute("isoccupied"));
            if (occupied === "true") {
                space.style.backgroundColor = "red";
            } else {
                space.style.backgroundColor = "green"
            }
            humanAttack(Number(space.getAttribute("xcoord")), Number(space.getAttribute("ycoord")));
        });
    });
}

const humanAttack = (xCoord, yCoord) => {
    let prevShotHit = _gameboard__WEBPACK_IMPORTED_MODULE_0__.computerGameboard.landedShots.find(shot => shot.x === xCoord && shot.y === yCoord);
    let prevShotMiss = _gameboard__WEBPACK_IMPORTED_MODULE_0__.computerGameboard.missedShots.find(shot => shot.x === xCoord && shot.y === yCoord);
    if (prevShotHit || prevShotMiss) {
        return null;
    }
    let receivedPlayerAttack = _gameboard__WEBPACK_IMPORTED_MODULE_0__.computerGameboard.receiveAttack(xCoord, yCoord);
    if (_gameboard__WEBPACK_IMPORTED_MODULE_0__.computerGameboard.allShipsSunk()) {
        (0,_gameLoop__WEBPACK_IMPORTED_MODULE_1__.controlGame)("gameOver");
    } else {
        (0,_gameLoop__WEBPACK_IMPORTED_MODULE_1__.controlGame)("computerTurn");
    }

    return receivedPlayerAttack;
}


const computerTurn = () => {
    let playerBoardSpaces = document.querySelectorAll(".board-space");
    let xCoord = randomCoordGenerator();
    let yCoord = randomCoordGenerator();
    console.log(computerAttack(xCoord, yCoord));
    playerBoardSpaces.forEach(space => {
        let spaceXCoord = Number(space.getAttribute("xCoord"));
        let spaceYCoord = Number(space.getAttribute("yCoord"));
        if (spaceXCoord === xCoord && spaceYCoord === yCoord) {
            if (space.getAttribute("isOccupied") === "true") {
                space.style.backgroundColor = "red";
            } else {
                space.style.backgroundColor = "green";
            }
        }
    });
}

const computerAttack = (xCoord, yCoord) => {
    let prevShotHit = _gameboard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.landedShots.find(shot => shot.x === xCoord && shot.y === yCoord);
    let prevShotMiss = _gameboard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.missedShots.find(shot => shot.x === xCoord && shot.y === yCoord);
    if (prevShotHit || prevShotMiss) {
        computerTurn();
        return null;
    }
    let receivedComputerAttack = _gameboard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.receiveAttack(xCoord, yCoord);
    if (_gameboard__WEBPACK_IMPORTED_MODULE_0__.playerGameboard.allShipsSunk()) {
        (0,_gameLoop__WEBPACK_IMPORTED_MODULE_1__.controlGame)("gameOver");
    } else {
        (0,_gameLoop__WEBPACK_IMPORTED_MODULE_1__.controlGame)("playerTurn");
    }

    return receivedComputerAttack;
}

const randomCoordGenerator = () => {
    let num = Math.floor(Math.random() * 10);
    return num;
}



/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "battleShip": () => (/* binding */ battleShip),
/* harmony export */   "battleShipComputer": () => (/* binding */ battleShipComputer),
/* harmony export */   "carrier": () => (/* binding */ carrier),
/* harmony export */   "carrierComputer": () => (/* binding */ carrierComputer),
/* harmony export */   "cruiser": () => (/* binding */ cruiser),
/* harmony export */   "cruiserComputer": () => (/* binding */ cruiserComputer),
/* harmony export */   "destroyer": () => (/* binding */ destroyer),
/* harmony export */   "destroyerComputer": () => (/* binding */ destroyerComputer),
/* harmony export */   "submarine": () => (/* binding */ submarine),
/* harmony export */   "submarineComputer": () => (/* binding */ submarineComputer)
/* harmony export */ });
const Ship = (shipName, shipLength) => {
  let hitCount = 0;

  const hit = () => {
    hitCount++;
  }

  const getHitCount = () => {
    return hitCount;
  }

  const isSunk = () => {
    if (hitCount === shipLength) {
      return true;
    } else {
      return false;
    }
  }

  const clearHitCount = () => {
    hitCount = 0;
  }

  return { shipName, shipLength, getHitCount, hit, isSunk, clearHitCount }
}

const carrier = Ship("carrier", 5);
const battleShip = Ship("battleship", 4);
const cruiser = Ship("cruiser", 3);
const submarine = Ship("submarine", 3);
const destroyer = Ship("destroyer", 2);

const carrierComputer = Ship("carrier", 5);
const battleShipComputer = Ship("battleship", 4);
const cruiserComputer = Ship("cruiser", 3);
const submarineComputer = Ship("submarine", 3);
const destroyerComputer = Ship("destroyer", 2);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUMscUVBQTZCO0FBQzlELFFBQVEsb0VBQTRCO0FBQ3BDLFFBQVEsc0RBQVc7QUFDbkIsTUFBTTtBQUNOLFFBQVEsc0RBQVc7QUFDbkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNwQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ib2FyZHMtY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4uYm9hcmQtc3BhY2UsIC5jb21wdXRlci1ib2FyZC1zcGFjZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5vY2N1cGllZC1zcGFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uZ2FtZS1vdmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5zaGlwcy1hcmVhIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcXG59XFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYm9hcmRzLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnBsYXllci1ib2FyZCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmJvYXJkLXNwYWNlLCAuY29tcHV0ZXItYm9hcmQtc3BhY2Uge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4ub2NjdXBpZWQtc3BhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLmdhbWUtb3ZlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uc2hpcHMtYXJlYSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XFxufVxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjb21wdXRlclR1cm4sIHBsYXllclR1cm4gfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IHBsYXllckdhbWVib2FyZCwgY29tcHV0ZXJHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IHJlbmRlckJvYXJkIH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IGJhdHRsZVNoaXAsIGNydWlzZXIsIGRlc3Ryb3llciwgc3VibWFyaW5lLCBjYXJyaWVyLCBiYXR0bGVTaGlwQ29tcHV0ZXIsIGNydWlzZXJDb21wdXRlciwgZGVzdHJveWVyQ29tcHV0ZXIsIGNhcnJpZXJDb21wdXRlciwgc3VibWFyaW5lQ29tcHV0ZXIgfSBmcm9tIFwiLi9zaGlwRmFjdG9yeVwiO1xuXG5cbmNvbnN0IHBsYWNlU2hpcHNQbGF5ZXIgPSAoY3VycmVudFNoaXApID0+IHtcbiAgICAvLyBwbGF5ZXJHYW1lYm9hcmQucGxhY2VTaGlwSG9yaXpvbnRhbGx5KGJhdHRsZVNoaXAsIDAsIDApO1xuICAgIC8vIHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXBWZXJ0aWNhbGx5KGNydWlzZXIsIDAsIDIpO1xuICAgIC8vIHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXBIb3Jpem9udGFsbHkoZGVzdHJveWVyLCA1LCAwKTtcbiAgICAvLyBwbGF5ZXJHYW1lYm9hcmQucGxhY2VTaGlwSG9yaXpvbnRhbGx5KGNhcnJpZXIsIDEsIDUpO1xuICAgIC8vIHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXBIb3Jpem9udGFsbHkoc3VibWFyaW5lLCA3LCAzKTtcblxuXG4gICAgbGV0IHBsYXllckJvYXJkU3BhY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZC1zcGFjZVwiKTtcbiAgICBwbGF5ZXJCb2FyZFNwYWNlcy5mb3JFYWNoKHNwYWNlID0+IHtcbiAgICAgICAgc3BhY2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgICAgICBwcmV2aWV3UGxhY2VtZW50KHNwYWNlLCBjdXJyZW50U2hpcCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzcGFjZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcGxheWVyQm9hcmRTcGFjZXMuZm9yRWFjaChzcG90ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3BvdC5nZXRBdHRyaWJ1dGUoXCJpc29jY3VwaWVkXCIpID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgICBzcG90LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JheVwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNwb3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzcGFjZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXBIb3Jpem9udGFsbHkoY3VycmVudFNoaXAsIHNwYWNlLmdldEF0dHJpYnV0ZSgneENvb3JkJyksIHNwYWNlLmdldEF0dHJpYnV0ZSgneUNvb3JkJykpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocGxheWVyR2FtZWJvYXJkLnBsYWNlZFNoaXBBcnJheSlcbiAgICAgICAgICAgIHBsYXllckdhbWVib2FyZC5wbGFjZWRTaGlwQXJyYXkuZm9yRWFjaChzcG90ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgb2NjdXBpZWRTcGFjZSA9IHBsYXllckdhbWVib2FyZC5jb29yZGluYXRlc0Fyci5maW5kKHBsYWNlID0+IHBsYWNlLnhDb29yZCA9PT0gc3BvdC54Q29vcmQgJiYgcGxhY2UueUNvb3JkID09PSBzcG90LnlDb29yZCk7XG4gICAgICAgICAgICAgICAgaWYgKG9jY3VwaWVkU3BhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgb2NjdXBpZWRTcGFjZS5zcGFjZU9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IGJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JvYXJkcy1jb250YWluZXInKVswXTtcbiAgICAgICAgICAgIGJvYXJkc0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgIHJlbmRlckJvYXJkKCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuICAgIGNvbnN0IHByZXZpZXdQbGFjZW1lbnQgPSAoc3BhY2UsIHNoaXApID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRTcGFjZVggPSBOdW1iZXIoKHNwYWNlLmdldEF0dHJpYnV0ZSgneGNvb3JkJykpKTtcbiAgICAgICAgbGV0IGN1cnJlbnRTcGFjZVkgPSBOdW1iZXIoKHNwYWNlLmdldEF0dHJpYnV0ZSgneWNvb3JkJykpKTtcbiAgICAgICAgaWYgKGN1cnJlbnRTcGFjZVkgPD0gKDkgLSBzaGlwLnNoaXBMZW5ndGggKyAxKSkge1xuICAgICAgICAgICAgcGxheWVyQm9hcmRTcGFjZXMuZm9yRWFjaChvdGhlclNwYWNlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgb3RoZXJTcGFjZVggPSBOdW1iZXIob3RoZXJTcGFjZS5nZXRBdHRyaWJ1dGUoXCJ4Q29vcmRcIikpO1xuICAgICAgICAgICAgICAgIGxldCBvdGhlclNwYWNlWSA9IE51bWJlcihvdGhlclNwYWNlLmdldEF0dHJpYnV0ZShcInlDb29yZFwiKSk7XG4gICAgICAgICAgICAgICAgaWYgKG90aGVyU3BhY2VYID09PSBjdXJyZW50U3BhY2VYICYmIG90aGVyU3BhY2VZIDw9IGN1cnJlbnRTcGFjZVkgKyAoc2hpcC5zaGlwTGVuZ3RoIC0gMSkgJiYgKG90aGVyU3BhY2VZKSA+PSBjdXJyZW50U3BhY2VZKSB7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyU3BhY2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmF5XCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cblxuXG4gICAgLy8gcGxheWVyR2FtZWJvYXJkLnBsYWNlZFNoaXBBcnJheS5mb3JFYWNoKHNwb3QgPT4ge1xuICAgIC8vICAgICBsZXQgb2NjdXBpZWRTcGFjZSA9IHBsYXllckdhbWVib2FyZC5jb29yZGluYXRlc0Fyci5maW5kKHBsYWNlID0+IHBsYWNlLnhDb29yZCA9PT0gc3BvdC54Q29vcmQgJiYgcGxhY2UueUNvb3JkID09PSBzcG90LnlDb29yZCk7XG4gICAgLy8gICAgIGlmIChvY2N1cGllZFNwYWNlKSB7XG4gICAgLy8gICAgICAgICBvY2N1cGllZFNwYWNlLnNwYWNlT2NjdXBpZWQgPSB0cnVlO1xuICAgIC8vICAgICB9XG4gICAgLy8gfSk7XG5cbiAgICAvLyBsZXQgYm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm9hcmRzLWNvbnRhaW5lcicpWzBdO1xuICAgIC8vIGJvYXJkc0NvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgIC8vIHJlbmRlckJvYXJkKCk7XG59XG5cbmNvbnN0IHBsYWNlU2hpcHNDb21wdXRlciA9ICgpID0+IHtcbiAgICBjb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXBWZXJ0aWNhbGx5KGJhdHRsZVNoaXBDb21wdXRlciwgMywgMCk7XG4gICAgY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwVmVydGljYWxseShjcnVpc2VyQ29tcHV0ZXIsIDQsIDgpO1xuICAgIGNvbXB1dGVyR2FtZWJvYXJkLnBsYWNlU2hpcEhvcml6b250YWxseShkZXN0cm95ZXJDb21wdXRlciwgOSwgMCk7XG4gICAgY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwSG9yaXpvbnRhbGx5KGNhcnJpZXJDb21wdXRlciwgMCwgNSk7XG4gICAgY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwSG9yaXpvbnRhbGx5KHN1Ym1hcmluZUNvbXB1dGVyLCA1LCA0KTtcbiAgICBjb21wdXRlckdhbWVib2FyZC5wbGFjZWRTaGlwQXJyYXkuZm9yRWFjaChzcG90ID0+IHtcbiAgICAgICAgbGV0IG9jY3VwaWVkU3BhY2UgPSBjb21wdXRlckdhbWVib2FyZC5jb29yZGluYXRlc0Fyci5maW5kKHBsYWNlID0+IHBsYWNlLnhDb29yZCA9PT0gc3BvdC54Q29vcmQgJiYgcGxhY2UueUNvb3JkID09PSBzcG90LnlDb29yZCk7XG4gICAgICAgIGlmIChvY2N1cGllZFNwYWNlKSB7XG4gICAgICAgICAgICBvY2N1cGllZFNwYWNlLnNwYWNlT2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgYm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm9hcmRzLWNvbnRhaW5lcicpWzBdO1xuICAgIGJvYXJkc0NvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgIHJlbmRlckJvYXJkKCk7XG59XG5cbmNvbnN0IGNvbnRyb2xHYW1lID0gKHR1cm4pID0+IHtcblxuICAgIGlmICh0dXJuID09PSBcImdhbWVPdmVyXCIpIHtcbiAgICAgICAgY29uc3QgZ2FtZU92ZXJNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGdhbWVPdmVyTW9kYWwuY2xhc3NMaXN0LmFkZChcImdhbWUtb3ZlclwiKTtcbiAgICAgICAgZ2FtZU92ZXJNb2RhbC50ZXh0Q29udGVudCA9IFwiR2FtZSBPdmVyISFcIjtcbiAgICAgICAgY29uc3QgYm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJvYXJkcy1jb250YWluZXJcIilbMF07XG4gICAgICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lT3Zlck1vZGFsKTtcblxuICAgIH1cbiAgICBpZiAodHVybiA9PT0gXCJwbGF5ZXJUdXJuXCIpIHtcbiAgICAgICAgcGxheWVyVHVybigpO1xuICAgIH1cbiAgICBpZiAodHVybiA9PT0gXCJjb21wdXRlclR1cm5cIikge1xuICAgICAgICBsZXQgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BsYXllci1ib2FyZCcpWzFdO1xuICAgICAgICBsZXQgbmV3Qm9hcmQgPSBjb21wdXRlckJvYXJkLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5yZXBsYWNlV2l0aChuZXdCb2FyZCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29tcHV0ZXJUdXJuKCk7XG4gICAgICAgIH0sIDE1MDApXG4gICAgfVxufVxuXG5leHBvcnQgeyBjb250cm9sR2FtZSwgcGxhY2VTaGlwc0NvbXB1dGVyLCBwbGFjZVNoaXBzUGxheWVyIH1cblxuIiwiaW1wb3J0IHsgY2FycmllciwgY3J1aXNlciwgYmF0dGxlU2hpcCwgc3VibWFyaW5lLCBkZXN0cm95ZXIsIGNhcnJpZXJDb21wdXRlciwgY3J1aXNlckNvbXB1dGVyLCBiYXR0bGVTaGlwQ29tcHV0ZXIsIHN1Ym1hcmluZUNvbXB1dGVyLCBkZXN0cm95ZXJDb21wdXRlciB9IGZyb20gJy4vc2hpcEZhY3RvcnknO1xuXG5jb25zdCBnYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgbGV0IGNvb3JkaW5hdGVzQXJyID0gW107XG4gICAgbGV0IHBsYWNlZFNoaXBBcnJheSA9IFtdO1xuICAgIGxldCBtaXNzZWRTaG90cyA9IFtdO1xuICAgIGxldCBsYW5kZWRTaG90cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgbGV0IGNvb3JkT2JqID0ge1xuICAgICAgICAgICAgICAgIHhDb29yZDogaSxcbiAgICAgICAgICAgICAgICB5Q29vcmQ6IGosXG4gICAgICAgICAgICAgICAgc3BhY2VPY2N1cGllZDogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb29yZGluYXRlc0Fyci5wdXNoKGNvb3JkT2JqKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldENvb3JkaW5hdGVzQXJyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXNBcnI7XG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VTaGlwVmVydGljYWxseSA9IChzaGlwLCBzdGFydGluZ1hDb29yZCwgc3RhcnRpbmdZQ29vcmQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGxhY2VkU2hpcEFycmF5LnB1c2goeyBzaGlwT2JqOiBzaGlwLCB4Q29vcmQ6IE51bWJlcihzdGFydGluZ1hDb29yZCArIGkpLCB5Q29vcmQ6IE51bWJlcihzdGFydGluZ1lDb29yZCkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBsYWNlZFNoaXBBcnJheTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVNoaXBIb3Jpem9udGFsbHkgPSAoc2hpcCwgc3RhcnRpbmdYQ29vcmQsIHN0YXJ0aW5nWUNvb3JkKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBsYWNlZFNoaXBBcnJheS5wdXNoKHsgc2hpcE9iajogc2hpcCwgeENvb3JkOiBOdW1iZXIoc3RhcnRpbmdYQ29vcmQpLCB5Q29vcmQ6IE51bWJlcihzdGFydGluZ1lDb29yZCkgKyBpIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwbGFjZWRTaGlwQXJyYXk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRQaWVjZXMgPSAoKSA9PiB7XG4gICAgICAgIHBsYWNlZFNoaXBBcnJheSA9IFtdO1xuICAgICAgICByZXR1cm4gcGxhY2VkU2hpcEFycmF5O1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyTWlzc2VkU2hvdHMgPSAoKSA9PiB7XG4gICAgICAgIG1pc3NlZFNob3RzID0gW107XG4gICAgfVxuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGxldCBmb3VuZFNoaXAgPSBwbGFjZWRTaGlwQXJyYXkuZmluZChzaGlwID0+IHNoaXAueENvb3JkID09PSB4ICYmIHNoaXAueUNvb3JkID09PSB5KTtcbiAgICAgICAgaWYgKGZvdW5kU2hpcCkge1xuICAgICAgICAgICAgbGFuZGVkU2hvdHMucHVzaCh7IHg6IHgsIHk6IHkgfSk7XG4gICAgICAgICAgICBmb3VuZFNoaXAuc2hpcE9iai5oaXQoKTtcbiAgICAgICAgICAgIHJldHVybiBmb3VuZFNoaXAuc2hpcE9iajtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1pc3NlZFNob3RzLnB1c2goeyB4OiB4LCB5OiB5IH0pO1xuICAgICAgICAgICAgcmV0dXJuIG1pc3NlZFNob3RzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgICAgICBpZiAoY2Fycmllci5pc1N1bmsoKSAmJiBjcnVpc2VyLmlzU3VuaygpICYmIGJhdHRsZVNoaXAuaXNTdW5rKCkgJiYgc3VibWFyaW5lLmlzU3VuaygpICYmIGRlc3Ryb3llci5pc1N1bmsoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoY2FycmllckNvbXB1dGVyLmlzU3VuaygpICYmIGNydWlzZXJDb21wdXRlci5pc1N1bmsoKSAmJiBiYXR0bGVTaGlwQ29tcHV0ZXIuaXNTdW5rKCkgJiYgc3VibWFyaW5lQ29tcHV0ZXIuaXNTdW5rKCkgJiYgZGVzdHJveWVyQ29tcHV0ZXIuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29vcmRpbmF0ZXNBcnIsIHBsYWNlZFNoaXBBcnJheSwgZ2V0Q29vcmRpbmF0ZXNBcnIsIHBsYWNlU2hpcEhvcml6b250YWxseSwgcGxhY2VTaGlwVmVydGljYWxseSwgcmVzZXRQaWVjZXMsIHJlY2VpdmVBdHRhY2ssIGNsZWFyTWlzc2VkU2hvdHMsIGFsbFNoaXBzU3VuaywgbWlzc2VkU2hvdHMsIGxhbmRlZFNob3RzIH07XG59XG5cbmNvbnN0IHBsYXllckdhbWVib2FyZCA9IGdhbWVib2FyZCgpO1xuY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBnYW1lYm9hcmQoKTtcblxuZXhwb3J0IHsgcGxheWVyR2FtZWJvYXJkLCBjb21wdXRlckdhbWVib2FyZCB9IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBwbGF5ZXJHYW1lYm9hcmQsIGNvbXB1dGVyR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgcGxhY2VTaGlwc1BsYXllciwgcGxhY2VTaGlwc0NvbXB1dGVyLCBzZXRVcEJvYXJkIH0gZnJvbSAnLi9nYW1lTG9vcCc7XG5pbXBvcnQgeyBjb250cm9sR2FtZSB9IGZyb20gJy4vZ2FtZUxvb3AnO1xuaW1wb3J0IHsgYmF0dGxlU2hpcCwgY3J1aXNlciwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIGNhcnJpZXIsIGJhdHRsZVNoaXBDb21wdXRlciwgY3J1aXNlckNvbXB1dGVyLCBkZXN0cm95ZXJDb21wdXRlciwgY2FycmllckNvbXB1dGVyLCBzdWJtYXJpbmVDb21wdXRlciB9IGZyb20gXCIuL3NoaXBGYWN0b3J5XCI7XG5cblxuXG5jb25zdCByZW5kZXJCb2FyZCA9ICgpID0+IHtcblxuICBjb25zdCBib2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJvYXJkcy1jb250YWluZXJcIik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYm9hcmRzQ29udGFpbmVyKTtcblxuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItYm9hcmRcIik7XG4gIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZCk7XG5cbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZChcInBsYXllci1ib2FyZFwiKTtcbiAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXB1dGVyQm9hcmQpO1xuXG4gIHBsYXllckdhbWVib2FyZC5jb29yZGluYXRlc0Fyci5mb3JFYWNoKGNvb3JkT2JqID0+IHtcbiAgICBsZXQgc3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNwYWNlLnNldEF0dHJpYnV0ZSgneENvb3JkJywgY29vcmRPYmoueENvb3JkKTtcbiAgICBzcGFjZS5zZXRBdHRyaWJ1dGUoJ3lDb29yZCcsIGNvb3JkT2JqLnlDb29yZCk7XG4gICAgc3BhY2Uuc2V0QXR0cmlidXRlKCdpc09jY3VwaWVkJywgY29vcmRPYmouc3BhY2VPY2N1cGllZCk7XG4gICAgc3BhY2UuY2xhc3NMaXN0LmFkZChcImJvYXJkLXNwYWNlXCIpO1xuICAgIGlmIChzcGFjZS5nZXRBdHRyaWJ1dGUoXCJpc09jY3VwaWVkXCIpID09PSAndHJ1ZScpIHtcbiAgICAgIHNwYWNlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JheVwiXG4gICAgfVxuICAgIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKHNwYWNlKTtcbiAgfSk7XG5cbiAgY29tcHV0ZXJHYW1lYm9hcmQuY29vcmRpbmF0ZXNBcnIuZm9yRWFjaChjb29yZE9iaiA9PiB7XG4gICAgbGV0IHNwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzcGFjZS5zZXRBdHRyaWJ1dGUoJ3hDb29yZCcsIGNvb3JkT2JqLnhDb29yZCk7XG4gICAgc3BhY2Uuc2V0QXR0cmlidXRlKCd5Q29vcmQnLCBjb29yZE9iai55Q29vcmQpO1xuICAgIHNwYWNlLnNldEF0dHJpYnV0ZSgnaXNPY2N1cGllZCcsIGNvb3JkT2JqLnNwYWNlT2NjdXBpZWQpO1xuICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1ib2FyZC1zcGFjZVwiKTtcbiAgICBpZiAoc3BhY2UuZ2V0QXR0cmlidXRlKFwiaXNPY2N1cGllZFwiKSA9PT0gJ3RydWUnKSB7XG4gICAgICBzcGFjZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyYXlcIlxuICAgIH1cbiAgICBjb21wdXRlckJvYXJkLmFwcGVuZENoaWxkKHNwYWNlKTtcbiAgfSk7XG5cbiAgaWYgKHBsYXllckdhbWVib2FyZC5wbGFjZWRTaGlwQXJyYXkubGVuZ3RoID09PSAxNykge1xuICAgIGNvbnN0IGJlZ2luR2FtZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYmVnaW5HYW1lQnRuLnRleHRDb250ZW50ID0gXCJCZWdpbiBHYW1lXCI7XG4gICAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJlZ2luR2FtZUJ0bik7XG4gIFxuICAgIGJlZ2luR2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHBsYWNlU2hpcHNDb21wdXRlcigpO1xuICAgICAgLy8gcGxhY2VTaGlwc1BsYXllcihjYXJyaWVyKTtcbiAgICAgIGNvbnRyb2xHYW1lKFwicGxheWVyVHVyblwiKTtcbiAgICB9KTtcbiAgfVxuXG5cbn1cblxuY29uc3QgcmVuZGVyU2hpcHNUb1BsYWNlID0gKCkgPT4ge1xuXG4gIGNvbnN0IHNoaXBzQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNoaXBzQXJlYS5jbGFzc0xpc3QuYWRkKFwic2hpcHMtYXJlYVwiKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzaGlwc0FyZWEpO1xuXG4gIGxldCBwbGF5ZXJTaGlwc0FycmF5ID0gW2NhcnJpZXIsIGRlc3Ryb3llciwgc3VibWFyaW5lLCBjcnVpc2VyLCBiYXR0bGVTaGlwXTtcblxuICBwbGF5ZXJTaGlwc0FycmF5LmZvckVhY2goc2hpcCA9PiB7XG4gICAgbGV0IHNoaXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHNoaXBCdG4udGV4dENvbnRlbnQgPSBzaGlwLnNoaXBOYW1lO1xuICAgIHNoaXBzQXJlYS5hcHBlbmRDaGlsZChzaGlwQnRuKTtcbiAgICBzaGlwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcGxhY2VTaGlwc1BsYXllcihzaGlwKTtcbiAgICAgIHNoaXBzQXJlYS5yZW1vdmVDaGlsZChzaGlwQnRuKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbnJlbmRlclNoaXBzVG9QbGFjZSgpO1xucmVuZGVyQm9hcmQoKTtcblxuXG5cbmV4cG9ydCB7IHJlbmRlckJvYXJkIH0iLCJpbXBvcnQgeyBwbGF5ZXJHYW1lYm9hcmQsIGNvbXB1dGVyR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBjb250cm9sR2FtZSB9IGZyb20gXCIuL2dhbWVMb29wXCI7XG5cbmNvbnN0IHBsYXllclR1cm4gPSAoKSA9PiB7XG4gICAgbGV0IGNvbXB1dGVyQm9hcmRTcGFjZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXB1dGVyLWJvYXJkLXNwYWNlXCIpO1xuICAgIGNvbXB1dGVyQm9hcmRTcGFjZXMuZm9yRWFjaChzcGFjZSA9PiB7XG4gICAgICAgIHNwYWNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgb2NjdXBpZWQgPSAoc3BhY2UuZ2V0QXR0cmlidXRlKFwiaXNvY2N1cGllZFwiKSk7XG4gICAgICAgICAgICBpZiAob2NjdXBpZWQgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgc3BhY2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3BhY2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodW1hbkF0dGFjayhOdW1iZXIoc3BhY2UuZ2V0QXR0cmlidXRlKFwieGNvb3JkXCIpKSwgTnVtYmVyKHNwYWNlLmdldEF0dHJpYnV0ZShcInljb29yZFwiKSkpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuY29uc3QgaHVtYW5BdHRhY2sgPSAoeENvb3JkLCB5Q29vcmQpID0+IHtcbiAgICBsZXQgcHJldlNob3RIaXQgPSBjb21wdXRlckdhbWVib2FyZC5sYW5kZWRTaG90cy5maW5kKHNob3QgPT4gc2hvdC54ID09PSB4Q29vcmQgJiYgc2hvdC55ID09PSB5Q29vcmQpO1xuICAgIGxldCBwcmV2U2hvdE1pc3MgPSBjb21wdXRlckdhbWVib2FyZC5taXNzZWRTaG90cy5maW5kKHNob3QgPT4gc2hvdC54ID09PSB4Q29vcmQgJiYgc2hvdC55ID09PSB5Q29vcmQpO1xuICAgIGlmIChwcmV2U2hvdEhpdCB8fCBwcmV2U2hvdE1pc3MpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCByZWNlaXZlZFBsYXllckF0dGFjayA9IGNvbXB1dGVyR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeENvb3JkLCB5Q29vcmQpO1xuICAgIGlmIChjb21wdXRlckdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICBjb250cm9sR2FtZShcImdhbWVPdmVyXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRyb2xHYW1lKFwiY29tcHV0ZXJUdXJuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiByZWNlaXZlZFBsYXllckF0dGFjaztcbn1cblxuXG5jb25zdCBjb21wdXRlclR1cm4gPSAoKSA9PiB7XG4gICAgbGV0IHBsYXllckJvYXJkU3BhY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZC1zcGFjZVwiKTtcbiAgICBsZXQgeENvb3JkID0gcmFuZG9tQ29vcmRHZW5lcmF0b3IoKTtcbiAgICBsZXQgeUNvb3JkID0gcmFuZG9tQ29vcmRHZW5lcmF0b3IoKTtcbiAgICBjb25zb2xlLmxvZyhjb21wdXRlckF0dGFjayh4Q29vcmQsIHlDb29yZCkpO1xuICAgIHBsYXllckJvYXJkU3BhY2VzLmZvckVhY2goc3BhY2UgPT4ge1xuICAgICAgICBsZXQgc3BhY2VYQ29vcmQgPSBOdW1iZXIoc3BhY2UuZ2V0QXR0cmlidXRlKFwieENvb3JkXCIpKTtcbiAgICAgICAgbGV0IHNwYWNlWUNvb3JkID0gTnVtYmVyKHNwYWNlLmdldEF0dHJpYnV0ZShcInlDb29yZFwiKSk7XG4gICAgICAgIGlmIChzcGFjZVhDb29yZCA9PT0geENvb3JkICYmIHNwYWNlWUNvb3JkID09PSB5Q29vcmQpIHtcbiAgICAgICAgICAgIGlmIChzcGFjZS5nZXRBdHRyaWJ1dGUoXCJpc09jY3VwaWVkXCIpID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgIHNwYWNlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNwYWNlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5jb25zdCBjb21wdXRlckF0dGFjayA9ICh4Q29vcmQsIHlDb29yZCkgPT4ge1xuICAgIGxldCBwcmV2U2hvdEhpdCA9IHBsYXllckdhbWVib2FyZC5sYW5kZWRTaG90cy5maW5kKHNob3QgPT4gc2hvdC54ID09PSB4Q29vcmQgJiYgc2hvdC55ID09PSB5Q29vcmQpO1xuICAgIGxldCBwcmV2U2hvdE1pc3MgPSBwbGF5ZXJHYW1lYm9hcmQubWlzc2VkU2hvdHMuZmluZChzaG90ID0+IHNob3QueCA9PT0geENvb3JkICYmIHNob3QueSA9PT0geUNvb3JkKTtcbiAgICBpZiAocHJldlNob3RIaXQgfHwgcHJldlNob3RNaXNzKSB7XG4gICAgICAgIGNvbXB1dGVyVHVybigpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IHJlY2VpdmVkQ29tcHV0ZXJBdHRhY2sgPSBwbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4Q29vcmQsIHlDb29yZCk7XG4gICAgaWYgKHBsYXllckdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICBjb250cm9sR2FtZShcImdhbWVPdmVyXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRyb2xHYW1lKFwicGxheWVyVHVyblwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjZWl2ZWRDb21wdXRlckF0dGFjaztcbn1cblxuY29uc3QgcmFuZG9tQ29vcmRHZW5lcmF0b3IgPSAoKSA9PiB7XG4gICAgbGV0IG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICByZXR1cm4gbnVtO1xufVxuXG5leHBvcnQgeyBodW1hbkF0dGFjaywgY29tcHV0ZXJBdHRhY2ssIHJhbmRvbUNvb3JkR2VuZXJhdG9yLCBwbGF5ZXJUdXJuLCBjb21wdXRlclR1cm4gfSIsImNvbnN0IFNoaXAgPSAoc2hpcE5hbWUsIHNoaXBMZW5ndGgpID0+IHtcbiAgbGV0IGhpdENvdW50ID0gMDtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaGl0Q291bnQrKztcbiAgfVxuXG4gIGNvbnN0IGdldEhpdENvdW50ID0gKCkgPT4ge1xuICAgIHJldHVybiBoaXRDb3VudDtcbiAgfVxuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICBpZiAoaGl0Q291bnQgPT09IHNoaXBMZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2xlYXJIaXRDb3VudCA9ICgpID0+IHtcbiAgICBoaXRDb3VudCA9IDA7XG4gIH1cblxuICByZXR1cm4geyBzaGlwTmFtZSwgc2hpcExlbmd0aCwgZ2V0SGl0Q291bnQsIGhpdCwgaXNTdW5rLCBjbGVhckhpdENvdW50IH1cbn1cblxuY29uc3QgY2FycmllciA9IFNoaXAoXCJjYXJyaWVyXCIsIDUpO1xuY29uc3QgYmF0dGxlU2hpcCA9IFNoaXAoXCJiYXR0bGVzaGlwXCIsIDQpO1xuY29uc3QgY3J1aXNlciA9IFNoaXAoXCJjcnVpc2VyXCIsIDMpO1xuY29uc3Qgc3VibWFyaW5lID0gU2hpcChcInN1Ym1hcmluZVwiLCAzKTtcbmNvbnN0IGRlc3Ryb3llciA9IFNoaXAoXCJkZXN0cm95ZXJcIiwgMik7XG5cbmNvbnN0IGNhcnJpZXJDb21wdXRlciA9IFNoaXAoXCJjYXJyaWVyXCIsIDUpO1xuY29uc3QgYmF0dGxlU2hpcENvbXB1dGVyID0gU2hpcChcImJhdHRsZXNoaXBcIiwgNCk7XG5jb25zdCBjcnVpc2VyQ29tcHV0ZXIgPSBTaGlwKFwiY3J1aXNlclwiLCAzKTtcbmNvbnN0IHN1Ym1hcmluZUNvbXB1dGVyID0gU2hpcChcInN1Ym1hcmluZVwiLCAzKTtcbmNvbnN0IGRlc3Ryb3llckNvbXB1dGVyID0gU2hpcChcImRlc3Ryb3llclwiLCAyKTtcblxuZXhwb3J0IHsgYmF0dGxlU2hpcCwgY2FycmllciwgY3J1aXNlciwgc3VibWFyaW5lLCBkZXN0cm95ZXIsIGNhcnJpZXJDb21wdXRlciwgYmF0dGxlU2hpcENvbXB1dGVyLCBjcnVpc2VyQ29tcHV0ZXIsIHN1Ym1hcmluZUNvbXB1dGVyLCBkZXN0cm95ZXJDb21wdXRlciB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
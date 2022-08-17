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
___CSS_LOADER_EXPORT___.push([module.id, ".boards-container {\n  border: 2px solid green;\n  display: flex;\n  justify-content: space-around;\n}\n\n.player-board {\n  border: 2px solid black;\n  height: 500px;\n  width: 500px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.board-space, .computer-board-space {\n  border: 1px solid red;\n}\n\n.occupied-space {\n  background-color: gray;\n}\n\n.game-over {\n  position: absolute;\n  background-color: blue;\n  height: 50%;\n  width: 50%;\n}\n  ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,WAAW;EACX,UAAU;AACZ","sourcesContent":[".boards-container {\n  border: 2px solid green;\n  display: flex;\n  justify-content: space-around;\n}\n\n.player-board {\n  border: 2px solid black;\n  height: 500px;\n  width: 500px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.board-space, .computer-board-space {\n  border: 1px solid red;\n}\n\n.occupied-space {\n  background-color: gray;\n}\n\n.game-over {\n  position: absolute;\n  background-color: blue;\n  height: 50%;\n  width: 50%;\n}\n  "],"sourceRoot":""}]);
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
/* harmony export */   "placeShipsPlayer": () => (/* binding */ placeShipsPlayer),
/* harmony export */   "setUpBoard": () => (/* binding */ setUpBoard)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");






const setUpBoard = () => {
 placeShipsPlayer(_shipFactory__WEBPACK_IMPORTED_MODULE_3__.carrier);

}

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

  const placeShipsBtn = document.createElement("button");
  placeShipsBtn.textContent = "Place Ships";
  boardsContainer.appendChild(placeShipsBtn);

  placeShipsBtn.addEventListener('click', () => {
    // placeShipsComputer();
    // placeShipsPlayer(carrier);
    (0,_gameLoop__WEBPACK_IMPORTED_MODULE_2__.setUpBoard)();
    (0,_gameLoop__WEBPACK_IMPORTED_MODULE_2__.controlGame)("playerTurn");
  });

}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3BDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lTG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmJvYXJkcy1jb250YWluZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5wbGF5ZXItYm9hcmQge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5ib2FyZC1zcGFjZSwgLmNvbXB1dGVyLWJvYXJkLXNwYWNlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLm9jY3VwaWVkLXNwYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5nYW1lLW92ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYm9hcmRzLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnBsYXllci1ib2FyZCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmJvYXJkLXNwYWNlLCAuY29tcHV0ZXItYm9hcmQtc3BhY2Uge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4ub2NjdXBpZWQtc3BhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLmdhbWUtb3ZlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogNTAlO1xcbn1cXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY29tcHV0ZXJUdXJuLCBwbGF5ZXJUdXJuIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBwbGF5ZXJHYW1lYm9hcmQsIGNvbXB1dGVyR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyByZW5kZXJCb2FyZCB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBiYXR0bGVTaGlwLCBjcnVpc2VyLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgY2FycmllciwgYmF0dGxlU2hpcENvbXB1dGVyLCBjcnVpc2VyQ29tcHV0ZXIsIGRlc3Ryb3llckNvbXB1dGVyLCBjYXJyaWVyQ29tcHV0ZXIsIHN1Ym1hcmluZUNvbXB1dGVyIH0gZnJvbSBcIi4vc2hpcEZhY3RvcnlcIjtcblxuXG5jb25zdCBzZXRVcEJvYXJkID0gKCkgPT4ge1xuIHBsYWNlU2hpcHNQbGF5ZXIoY2Fycmllcik7XG5cbn1cblxuY29uc3QgcGxhY2VTaGlwc1BsYXllciA9IChjdXJyZW50U2hpcCkgPT4ge1xuICAgIC8vIHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXBIb3Jpem9udGFsbHkoYmF0dGxlU2hpcCwgMCwgMCk7XG4gICAgLy8gcGxheWVyR2FtZWJvYXJkLnBsYWNlU2hpcFZlcnRpY2FsbHkoY3J1aXNlciwgMCwgMik7XG4gICAgLy8gcGxheWVyR2FtZWJvYXJkLnBsYWNlU2hpcEhvcml6b250YWxseShkZXN0cm95ZXIsIDUsIDApO1xuICAgIC8vIHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXBIb3Jpem9udGFsbHkoY2FycmllciwgMSwgNSk7XG4gICAgLy8gcGxheWVyR2FtZWJvYXJkLnBsYWNlU2hpcEhvcml6b250YWxseShzdWJtYXJpbmUsIDcsIDMpO1xuXG4gICAgbGV0IHBsYXllckJvYXJkU3BhY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZC1zcGFjZVwiKTtcbiAgICBwbGF5ZXJCb2FyZFNwYWNlcy5mb3JFYWNoKHNwYWNlID0+IHtcbiAgICAgICAgc3BhY2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgICAgICBwcmV2aWV3UGxhY2VtZW50KHNwYWNlLCBjdXJyZW50U2hpcCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzcGFjZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcGxheWVyQm9hcmRTcGFjZXMuZm9yRWFjaChzcG90ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3BvdC5nZXRBdHRyaWJ1dGUoXCJpc29jY3VwaWVkXCIpID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgICBzcG90LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JheVwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNwb3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzcGFjZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXBIb3Jpem9udGFsbHkoY3VycmVudFNoaXAsIHNwYWNlLmdldEF0dHJpYnV0ZSgneENvb3JkJyksIHNwYWNlLmdldEF0dHJpYnV0ZSgneUNvb3JkJykpO1xuY29uc29sZS5sb2cocGxheWVyR2FtZWJvYXJkLnBsYWNlZFNoaXBBcnJheSlcbiAgICAgICAgICAgIHBsYXllckdhbWVib2FyZC5wbGFjZWRTaGlwQXJyYXkuZm9yRWFjaChzcG90ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgb2NjdXBpZWRTcGFjZSA9IHBsYXllckdhbWVib2FyZC5jb29yZGluYXRlc0Fyci5maW5kKHBsYWNlID0+IHBsYWNlLnhDb29yZCA9PT0gc3BvdC54Q29vcmQgJiYgcGxhY2UueUNvb3JkID09PSBzcG90LnlDb29yZCk7XG4gICAgICAgICAgICAgICAgaWYgKG9jY3VwaWVkU3BhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgb2NjdXBpZWRTcGFjZS5zcGFjZU9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IGJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JvYXJkcy1jb250YWluZXInKVswXTtcbiAgICAgICAgICAgIGJvYXJkc0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgIHJlbmRlckJvYXJkKCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuICAgIGNvbnN0IHByZXZpZXdQbGFjZW1lbnQgPSAoc3BhY2UsIHNoaXApID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRTcGFjZVggPSBOdW1iZXIoKHNwYWNlLmdldEF0dHJpYnV0ZSgneGNvb3JkJykpKTtcbiAgICAgICAgbGV0IGN1cnJlbnRTcGFjZVkgPSBOdW1iZXIoKHNwYWNlLmdldEF0dHJpYnV0ZSgneWNvb3JkJykpKTtcbiAgICAgICAgaWYgKGN1cnJlbnRTcGFjZVkgPD0gKDkgLSBzaGlwLnNoaXBMZW5ndGggKyAxKSkge1xuICAgICAgICAgICAgcGxheWVyQm9hcmRTcGFjZXMuZm9yRWFjaChvdGhlclNwYWNlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgb3RoZXJTcGFjZVggPSBOdW1iZXIob3RoZXJTcGFjZS5nZXRBdHRyaWJ1dGUoXCJ4Q29vcmRcIikpO1xuICAgICAgICAgICAgICAgIGxldCBvdGhlclNwYWNlWSA9IE51bWJlcihvdGhlclNwYWNlLmdldEF0dHJpYnV0ZShcInlDb29yZFwiKSk7XG4gICAgICAgICAgICAgICAgaWYgKG90aGVyU3BhY2VYID09PSBjdXJyZW50U3BhY2VYICYmIG90aGVyU3BhY2VZIDw9IGN1cnJlbnRTcGFjZVkgKyAoc2hpcC5zaGlwTGVuZ3RoIC0gMSkgJiYgKG90aGVyU3BhY2VZKSA+PSBjdXJyZW50U3BhY2VZKSB7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyU3BhY2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmF5XCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cblxuXG4gICAgLy8gcGxheWVyR2FtZWJvYXJkLnBsYWNlZFNoaXBBcnJheS5mb3JFYWNoKHNwb3QgPT4ge1xuICAgIC8vICAgICBsZXQgb2NjdXBpZWRTcGFjZSA9IHBsYXllckdhbWVib2FyZC5jb29yZGluYXRlc0Fyci5maW5kKHBsYWNlID0+IHBsYWNlLnhDb29yZCA9PT0gc3BvdC54Q29vcmQgJiYgcGxhY2UueUNvb3JkID09PSBzcG90LnlDb29yZCk7XG4gICAgLy8gICAgIGlmIChvY2N1cGllZFNwYWNlKSB7XG4gICAgLy8gICAgICAgICBvY2N1cGllZFNwYWNlLnNwYWNlT2NjdXBpZWQgPSB0cnVlO1xuICAgIC8vICAgICB9XG4gICAgLy8gfSk7XG5cbiAgICAvLyBsZXQgYm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm9hcmRzLWNvbnRhaW5lcicpWzBdO1xuICAgIC8vIGJvYXJkc0NvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgIC8vIHJlbmRlckJvYXJkKCk7XG59XG5cbmNvbnN0IHBsYWNlU2hpcHNDb21wdXRlciA9ICgpID0+IHtcbiAgICBjb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXBWZXJ0aWNhbGx5KGJhdHRsZVNoaXBDb21wdXRlciwgMywgMCk7XG4gICAgY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwVmVydGljYWxseShjcnVpc2VyQ29tcHV0ZXIsIDQsIDgpO1xuICAgIGNvbXB1dGVyR2FtZWJvYXJkLnBsYWNlU2hpcEhvcml6b250YWxseShkZXN0cm95ZXJDb21wdXRlciwgOSwgMCk7XG4gICAgY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwSG9yaXpvbnRhbGx5KGNhcnJpZXJDb21wdXRlciwgMCwgNSk7XG4gICAgY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwSG9yaXpvbnRhbGx5KHN1Ym1hcmluZUNvbXB1dGVyLCA1LCA0KTtcbiAgICBjb21wdXRlckdhbWVib2FyZC5wbGFjZWRTaGlwQXJyYXkuZm9yRWFjaChzcG90ID0+IHtcbiAgICAgICAgbGV0IG9jY3VwaWVkU3BhY2UgPSBjb21wdXRlckdhbWVib2FyZC5jb29yZGluYXRlc0Fyci5maW5kKHBsYWNlID0+IHBsYWNlLnhDb29yZCA9PT0gc3BvdC54Q29vcmQgJiYgcGxhY2UueUNvb3JkID09PSBzcG90LnlDb29yZCk7XG4gICAgICAgIGlmIChvY2N1cGllZFNwYWNlKSB7XG4gICAgICAgICAgICBvY2N1cGllZFNwYWNlLnNwYWNlT2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgYm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm9hcmRzLWNvbnRhaW5lcicpWzBdO1xuICAgIGJvYXJkc0NvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgIHJlbmRlckJvYXJkKCk7XG59XG5cbmNvbnN0IGNvbnRyb2xHYW1lID0gKHR1cm4pID0+IHtcblxuICAgIGlmICh0dXJuID09PSBcImdhbWVPdmVyXCIpIHtcbiAgICAgICAgY29uc3QgZ2FtZU92ZXJNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGdhbWVPdmVyTW9kYWwuY2xhc3NMaXN0LmFkZChcImdhbWUtb3ZlclwiKTtcbiAgICAgICAgZ2FtZU92ZXJNb2RhbC50ZXh0Q29udGVudCA9IFwiR2FtZSBPdmVyISFcIjtcbiAgICAgICAgY29uc3QgYm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJvYXJkcy1jb250YWluZXJcIilbMF07XG4gICAgICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lT3Zlck1vZGFsKTtcblxuICAgIH1cbiAgICBpZiAodHVybiA9PT0gXCJwbGF5ZXJUdXJuXCIpIHtcbiAgICAgICAgcGxheWVyVHVybigpO1xuICAgIH1cbiAgICBpZiAodHVybiA9PT0gXCJjb21wdXRlclR1cm5cIikge1xuICAgICAgICBsZXQgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BsYXllci1ib2FyZCcpWzFdO1xuICAgICAgICBsZXQgbmV3Qm9hcmQgPSBjb21wdXRlckJvYXJkLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5yZXBsYWNlV2l0aChuZXdCb2FyZCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29tcHV0ZXJUdXJuKCk7XG4gICAgICAgIH0sIDE1MDApXG4gICAgfVxufVxuXG5leHBvcnQgeyBjb250cm9sR2FtZSwgcGxhY2VTaGlwc0NvbXB1dGVyLCBwbGFjZVNoaXBzUGxheWVyLCBzZXRVcEJvYXJkIH1cblxuIiwiaW1wb3J0IHsgY2FycmllciwgY3J1aXNlciwgYmF0dGxlU2hpcCwgc3VibWFyaW5lLCBkZXN0cm95ZXIsIGNhcnJpZXJDb21wdXRlciwgY3J1aXNlckNvbXB1dGVyLCBiYXR0bGVTaGlwQ29tcHV0ZXIsIHN1Ym1hcmluZUNvbXB1dGVyLCBkZXN0cm95ZXJDb21wdXRlciB9IGZyb20gJy4vc2hpcEZhY3RvcnknO1xuXG5jb25zdCBnYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgbGV0IGNvb3JkaW5hdGVzQXJyID0gW107XG4gICAgbGV0IHBsYWNlZFNoaXBBcnJheSA9IFtdO1xuICAgIGxldCBtaXNzZWRTaG90cyA9IFtdO1xuICAgIGxldCBsYW5kZWRTaG90cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgbGV0IGNvb3JkT2JqID0ge1xuICAgICAgICAgICAgICAgIHhDb29yZDogaSxcbiAgICAgICAgICAgICAgICB5Q29vcmQ6IGosXG4gICAgICAgICAgICAgICAgc3BhY2VPY2N1cGllZDogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb29yZGluYXRlc0Fyci5wdXNoKGNvb3JkT2JqKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldENvb3JkaW5hdGVzQXJyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXNBcnI7XG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VTaGlwVmVydGljYWxseSA9IChzaGlwLCBzdGFydGluZ1hDb29yZCwgc3RhcnRpbmdZQ29vcmQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGxhY2VkU2hpcEFycmF5LnB1c2goeyBzaGlwT2JqOiBzaGlwLCB4Q29vcmQ6IE51bWJlcihzdGFydGluZ1hDb29yZCArIGkpLCB5Q29vcmQ6IE51bWJlcihzdGFydGluZ1lDb29yZCkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBsYWNlZFNoaXBBcnJheTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVNoaXBIb3Jpem9udGFsbHkgPSAoc2hpcCwgc3RhcnRpbmdYQ29vcmQsIHN0YXJ0aW5nWUNvb3JkKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBsYWNlZFNoaXBBcnJheS5wdXNoKHsgc2hpcE9iajogc2hpcCwgeENvb3JkOiBOdW1iZXIoc3RhcnRpbmdYQ29vcmQpLCB5Q29vcmQ6IE51bWJlcihzdGFydGluZ1lDb29yZCkgKyBpIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwbGFjZWRTaGlwQXJyYXk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRQaWVjZXMgPSAoKSA9PiB7XG4gICAgICAgIHBsYWNlZFNoaXBBcnJheSA9IFtdO1xuICAgICAgICByZXR1cm4gcGxhY2VkU2hpcEFycmF5O1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyTWlzc2VkU2hvdHMgPSAoKSA9PiB7XG4gICAgICAgIG1pc3NlZFNob3RzID0gW107XG4gICAgfVxuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGxldCBmb3VuZFNoaXAgPSBwbGFjZWRTaGlwQXJyYXkuZmluZChzaGlwID0+IHNoaXAueENvb3JkID09PSB4ICYmIHNoaXAueUNvb3JkID09PSB5KTtcbiAgICAgICAgaWYgKGZvdW5kU2hpcCkge1xuICAgICAgICAgICAgbGFuZGVkU2hvdHMucHVzaCh7IHg6IHgsIHk6IHkgfSk7XG4gICAgICAgICAgICBmb3VuZFNoaXAuc2hpcE9iai5oaXQoKTtcbiAgICAgICAgICAgIHJldHVybiBmb3VuZFNoaXAuc2hpcE9iajtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1pc3NlZFNob3RzLnB1c2goeyB4OiB4LCB5OiB5IH0pO1xuICAgICAgICAgICAgcmV0dXJuIG1pc3NlZFNob3RzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgICAgICBpZiAoY2Fycmllci5pc1N1bmsoKSAmJiBjcnVpc2VyLmlzU3VuaygpICYmIGJhdHRsZVNoaXAuaXNTdW5rKCkgJiYgc3VibWFyaW5lLmlzU3VuaygpICYmIGRlc3Ryb3llci5pc1N1bmsoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoY2FycmllckNvbXB1dGVyLmlzU3VuaygpICYmIGNydWlzZXJDb21wdXRlci5pc1N1bmsoKSAmJiBiYXR0bGVTaGlwQ29tcHV0ZXIuaXNTdW5rKCkgJiYgc3VibWFyaW5lQ29tcHV0ZXIuaXNTdW5rKCkgJiYgZGVzdHJveWVyQ29tcHV0ZXIuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29vcmRpbmF0ZXNBcnIsIHBsYWNlZFNoaXBBcnJheSwgZ2V0Q29vcmRpbmF0ZXNBcnIsIHBsYWNlU2hpcEhvcml6b250YWxseSwgcGxhY2VTaGlwVmVydGljYWxseSwgcmVzZXRQaWVjZXMsIHJlY2VpdmVBdHRhY2ssIGNsZWFyTWlzc2VkU2hvdHMsIGFsbFNoaXBzU3VuaywgbWlzc2VkU2hvdHMsIGxhbmRlZFNob3RzIH07XG59XG5cbmNvbnN0IHBsYXllckdhbWVib2FyZCA9IGdhbWVib2FyZCgpO1xuY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBnYW1lYm9hcmQoKTtcblxuZXhwb3J0IHsgcGxheWVyR2FtZWJvYXJkLCBjb21wdXRlckdhbWVib2FyZCB9IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBwbGF5ZXJHYW1lYm9hcmQsIGNvbXB1dGVyR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgcGxhY2VTaGlwc1BsYXllciwgcGxhY2VTaGlwc0NvbXB1dGVyLCBzZXRVcEJvYXJkIH0gZnJvbSAnLi9nYW1lTG9vcCc7XG5pbXBvcnQgeyBjb250cm9sR2FtZSB9IGZyb20gJy4vZ2FtZUxvb3AnO1xuaW1wb3J0IHsgYmF0dGxlU2hpcCwgY3J1aXNlciwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIGNhcnJpZXIsIGJhdHRsZVNoaXBDb21wdXRlciwgY3J1aXNlckNvbXB1dGVyLCBkZXN0cm95ZXJDb21wdXRlciwgY2FycmllckNvbXB1dGVyLCBzdWJtYXJpbmVDb21wdXRlciB9IGZyb20gXCIuL3NoaXBGYWN0b3J5XCI7XG5cblxuXG5jb25zdCByZW5kZXJCb2FyZCA9ICgpID0+IHtcblxuICBjb25zdCBib2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJvYXJkcy1jb250YWluZXJcIik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYm9hcmRzQ29udGFpbmVyKTtcblxuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItYm9hcmRcIik7XG4gIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZCk7XG5cbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZChcInBsYXllci1ib2FyZFwiKTtcbiAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXB1dGVyQm9hcmQpO1xuXG4gIHBsYXllckdhbWVib2FyZC5jb29yZGluYXRlc0Fyci5mb3JFYWNoKGNvb3JkT2JqID0+IHtcbiAgICBsZXQgc3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNwYWNlLnNldEF0dHJpYnV0ZSgneENvb3JkJywgY29vcmRPYmoueENvb3JkKTtcbiAgICBzcGFjZS5zZXRBdHRyaWJ1dGUoJ3lDb29yZCcsIGNvb3JkT2JqLnlDb29yZCk7XG4gICAgc3BhY2Uuc2V0QXR0cmlidXRlKCdpc09jY3VwaWVkJywgY29vcmRPYmouc3BhY2VPY2N1cGllZCk7XG4gICAgc3BhY2UuY2xhc3NMaXN0LmFkZChcImJvYXJkLXNwYWNlXCIpO1xuICAgIGlmIChzcGFjZS5nZXRBdHRyaWJ1dGUoXCJpc09jY3VwaWVkXCIpID09PSAndHJ1ZScpIHtcbiAgICAgIHNwYWNlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JheVwiXG4gICAgfVxuICAgIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKHNwYWNlKTtcbiAgfSk7XG5cbiAgY29tcHV0ZXJHYW1lYm9hcmQuY29vcmRpbmF0ZXNBcnIuZm9yRWFjaChjb29yZE9iaiA9PiB7XG4gICAgbGV0IHNwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzcGFjZS5zZXRBdHRyaWJ1dGUoJ3hDb29yZCcsIGNvb3JkT2JqLnhDb29yZCk7XG4gICAgc3BhY2Uuc2V0QXR0cmlidXRlKCd5Q29vcmQnLCBjb29yZE9iai55Q29vcmQpO1xuICAgIHNwYWNlLnNldEF0dHJpYnV0ZSgnaXNPY2N1cGllZCcsIGNvb3JkT2JqLnNwYWNlT2NjdXBpZWQpO1xuICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1ib2FyZC1zcGFjZVwiKTtcbiAgICBpZiAoc3BhY2UuZ2V0QXR0cmlidXRlKFwiaXNPY2N1cGllZFwiKSA9PT0gJ3RydWUnKSB7XG4gICAgICBzcGFjZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyYXlcIlxuICAgIH1cbiAgICBjb21wdXRlckJvYXJkLmFwcGVuZENoaWxkKHNwYWNlKTtcbiAgfSk7XG5cbiAgY29uc3QgcGxhY2VTaGlwc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHBsYWNlU2hpcHNCdG4udGV4dENvbnRlbnQgPSBcIlBsYWNlIFNoaXBzXCI7XG4gIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZVNoaXBzQnRuKTtcblxuICBwbGFjZVNoaXBzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIHBsYWNlU2hpcHNDb21wdXRlcigpO1xuICAgIC8vIHBsYWNlU2hpcHNQbGF5ZXIoY2Fycmllcik7XG4gICAgc2V0VXBCb2FyZCgpO1xuICAgIGNvbnRyb2xHYW1lKFwicGxheWVyVHVyblwiKTtcbiAgfSk7XG5cbn1cblxucmVuZGVyQm9hcmQoKTtcblxuZXhwb3J0IHsgcmVuZGVyQm9hcmQgfSIsImltcG9ydCB7IHBsYXllckdhbWVib2FyZCwgY29tcHV0ZXJHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IGNvbnRyb2xHYW1lIH0gZnJvbSBcIi4vZ2FtZUxvb3BcIjtcblxuY29uc3QgcGxheWVyVHVybiA9ICgpID0+IHtcbiAgICBsZXQgY29tcHV0ZXJCb2FyZFNwYWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tcHV0ZXItYm9hcmQtc3BhY2VcIik7XG4gICAgY29tcHV0ZXJCb2FyZFNwYWNlcy5mb3JFYWNoKHNwYWNlID0+IHtcbiAgICAgICAgc3BhY2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBvY2N1cGllZCA9IChzcGFjZS5nZXRBdHRyaWJ1dGUoXCJpc29jY3VwaWVkXCIpKTtcbiAgICAgICAgICAgIGlmIChvY2N1cGllZCA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICBzcGFjZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcGFjZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGh1bWFuQXR0YWNrKE51bWJlcihzcGFjZS5nZXRBdHRyaWJ1dGUoXCJ4Y29vcmRcIikpLCBOdW1iZXIoc3BhY2UuZ2V0QXR0cmlidXRlKFwieWNvb3JkXCIpKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5jb25zdCBodW1hbkF0dGFjayA9ICh4Q29vcmQsIHlDb29yZCkgPT4ge1xuICAgIGxldCBwcmV2U2hvdEhpdCA9IGNvbXB1dGVyR2FtZWJvYXJkLmxhbmRlZFNob3RzLmZpbmQoc2hvdCA9PiBzaG90LnggPT09IHhDb29yZCAmJiBzaG90LnkgPT09IHlDb29yZCk7XG4gICAgbGV0IHByZXZTaG90TWlzcyA9IGNvbXB1dGVyR2FtZWJvYXJkLm1pc3NlZFNob3RzLmZpbmQoc2hvdCA9PiBzaG90LnggPT09IHhDb29yZCAmJiBzaG90LnkgPT09IHlDb29yZCk7XG4gICAgaWYgKHByZXZTaG90SGl0IHx8IHByZXZTaG90TWlzcykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IHJlY2VpdmVkUGxheWVyQXR0YWNrID0gY29tcHV0ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4Q29vcmQsIHlDb29yZCk7XG4gICAgaWYgKGNvbXB1dGVyR2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIGNvbnRyb2xHYW1lKFwiZ2FtZU92ZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29udHJvbEdhbWUoXCJjb21wdXRlclR1cm5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY2VpdmVkUGxheWVyQXR0YWNrO1xufVxuXG5cbmNvbnN0IGNvbXB1dGVyVHVybiA9ICgpID0+IHtcbiAgICBsZXQgcGxheWVyQm9hcmRTcGFjZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkLXNwYWNlXCIpO1xuICAgIGxldCB4Q29vcmQgPSByYW5kb21Db29yZEdlbmVyYXRvcigpO1xuICAgIGxldCB5Q29vcmQgPSByYW5kb21Db29yZEdlbmVyYXRvcigpO1xuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQXR0YWNrKHhDb29yZCwgeUNvb3JkKSk7XG4gICAgcGxheWVyQm9hcmRTcGFjZXMuZm9yRWFjaChzcGFjZSA9PiB7XG4gICAgICAgIGxldCBzcGFjZVhDb29yZCA9IE51bWJlcihzcGFjZS5nZXRBdHRyaWJ1dGUoXCJ4Q29vcmRcIikpO1xuICAgICAgICBsZXQgc3BhY2VZQ29vcmQgPSBOdW1iZXIoc3BhY2UuZ2V0QXR0cmlidXRlKFwieUNvb3JkXCIpKTtcbiAgICAgICAgaWYgKHNwYWNlWENvb3JkID09PSB4Q29vcmQgJiYgc3BhY2VZQ29vcmQgPT09IHlDb29yZCkge1xuICAgICAgICAgICAgaWYgKHNwYWNlLmdldEF0dHJpYnV0ZShcImlzT2NjdXBpZWRcIikgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgc3BhY2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3BhY2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmNvbnN0IGNvbXB1dGVyQXR0YWNrID0gKHhDb29yZCwgeUNvb3JkKSA9PiB7XG4gICAgbGV0IHByZXZTaG90SGl0ID0gcGxheWVyR2FtZWJvYXJkLmxhbmRlZFNob3RzLmZpbmQoc2hvdCA9PiBzaG90LnggPT09IHhDb29yZCAmJiBzaG90LnkgPT09IHlDb29yZCk7XG4gICAgbGV0IHByZXZTaG90TWlzcyA9IHBsYXllckdhbWVib2FyZC5taXNzZWRTaG90cy5maW5kKHNob3QgPT4gc2hvdC54ID09PSB4Q29vcmQgJiYgc2hvdC55ID09PSB5Q29vcmQpO1xuICAgIGlmIChwcmV2U2hvdEhpdCB8fCBwcmV2U2hvdE1pc3MpIHtcbiAgICAgICAgY29tcHV0ZXJUdXJuKCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgcmVjZWl2ZWRDb21wdXRlckF0dGFjayA9IHBsYXllckdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHhDb29yZCwgeUNvb3JkKTtcbiAgICBpZiAocGxheWVyR2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIGNvbnRyb2xHYW1lKFwiZ2FtZU92ZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29udHJvbEdhbWUoXCJwbGF5ZXJUdXJuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiByZWNlaXZlZENvbXB1dGVyQXR0YWNrO1xufVxuXG5jb25zdCByYW5kb21Db29yZEdlbmVyYXRvciA9ICgpID0+IHtcbiAgICBsZXQgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIHJldHVybiBudW07XG59XG5cbmV4cG9ydCB7IGh1bWFuQXR0YWNrLCBjb21wdXRlckF0dGFjaywgcmFuZG9tQ29vcmRHZW5lcmF0b3IsIHBsYXllclR1cm4sIGNvbXB1dGVyVHVybiB9IiwiY29uc3QgU2hpcCA9IChzaGlwTmFtZSwgc2hpcExlbmd0aCkgPT4ge1xuICBsZXQgaGl0Q291bnQgPSAwO1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBoaXRDb3VudCsrO1xuICB9XG5cbiAgY29uc3QgZ2V0SGl0Q291bnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGhpdENvdW50O1xuICB9XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChoaXRDb3VudCA9PT0gc2hpcExlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjbGVhckhpdENvdW50ID0gKCkgPT4ge1xuICAgIGhpdENvdW50ID0gMDtcbiAgfVxuXG4gIHJldHVybiB7IHNoaXBOYW1lLCBzaGlwTGVuZ3RoLCBnZXRIaXRDb3VudCwgaGl0LCBpc1N1bmssIGNsZWFySGl0Q291bnQgfVxufVxuXG5jb25zdCBjYXJyaWVyID0gU2hpcChcImNhcnJpZXJcIiwgNSk7XG5jb25zdCBiYXR0bGVTaGlwID0gU2hpcChcImJhdHRsZXNoaXBcIiwgNCk7XG5jb25zdCBjcnVpc2VyID0gU2hpcChcImNydWlzZXJcIiwgMyk7XG5jb25zdCBzdWJtYXJpbmUgPSBTaGlwKFwic3VibWFyaW5lXCIsIDMpO1xuY29uc3QgZGVzdHJveWVyID0gU2hpcChcImRlc3Ryb3llclwiLCAyKTtcblxuY29uc3QgY2FycmllckNvbXB1dGVyID0gU2hpcChcImNhcnJpZXJcIiwgNSk7XG5jb25zdCBiYXR0bGVTaGlwQ29tcHV0ZXIgPSBTaGlwKFwiYmF0dGxlc2hpcFwiLCA0KTtcbmNvbnN0IGNydWlzZXJDb21wdXRlciA9IFNoaXAoXCJjcnVpc2VyXCIsIDMpO1xuY29uc3Qgc3VibWFyaW5lQ29tcHV0ZXIgPSBTaGlwKFwic3VibWFyaW5lXCIsIDMpO1xuY29uc3QgZGVzdHJveWVyQ29tcHV0ZXIgPSBTaGlwKFwiZGVzdHJveWVyXCIsIDIpO1xuXG5leHBvcnQgeyBiYXR0bGVTaGlwLCBjYXJyaWVyLCBjcnVpc2VyLCBzdWJtYXJpbmUsIGRlc3Ryb3llciwgY2FycmllckNvbXB1dGVyLCBiYXR0bGVTaGlwQ29tcHV0ZXIsIGNydWlzZXJDb21wdXRlciwgc3VibWFyaW5lQ29tcHV0ZXIsIGRlc3Ryb3llckNvbXB1dGVyIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
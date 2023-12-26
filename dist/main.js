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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/fire.svg */ "./src/assets/icons/fire.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Orbitron:wght@400;500;600;700;800;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --bg-color : #000000;
    --font-color: #ffffff;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
}

body,html{
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
    color: var(--font-color);
    font-family: 'Orbitron' , Arial, Helvetica, sans-serif;
}
body{
    display: flex;
    flex-direction: column;
}

.header{
    font-family: 'Black Ops One', Arial, Helvetica, sans-serif;
    font-size: 5rem;
    text-align: center;
    padding: 1%;
}

.game-area{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
}

.player-name{
    font-size: 2rem;
    text-align: center;
    margin-top: 1%;
}

.player1-area{
    border-right: 2px solid var(--font-color);
}

.player2-area{
    border-left: 2px solid var(--font-color);
}

.player1-area,.player2-area{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.game-grid{
    margin-top: 10%;
    display: grid;
    height: max(50%, 300px);
    width: max(50%,300px);    
    border: 1px solid var(--font-color);
    display: grid;
    grid-template: repeat(10, 1fr)/repeat(10,1fr);
}

.grid-cell{
    border: 1px solid var(--font-color);
}

.colored-cell{
    background-color: #ccc;
}
.selection-cell{
    background-color: #fff;
}

.error-cell{
    background-color: red;
}

.rotate-button{
    margin-top: 64px;
    font-size: 2rem;
}

.rotate-button{
    padding: 8px 16px;
}

.hide{
    visibility: hidden;
    pointer-events: none;
}

.fire{
    background-color: red;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: contain;
}

.water{
    background-color: blue;
}

.game-over{
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    background-color: #000000;
    font-size: 3rem;
}

.game-over button{
    font-size: 2rem;
    padding: 8px 16px;
}

.player-name-entry{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

form{
    display: flex;
    flex-direction: column;
    gap:24px;
}

form input{
    font-size: 2rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,oBAAoB;IACpB,qBAAqB;AACzB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iCAAiC;IACjC,wBAAwB;IACxB,sDAAsD;AAC1D;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,0DAA0D;IAC1D,eAAe;IACf,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,mCAAmC;IACnC,aAAa;IACb,6CAA6C;AACjD;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,sBAAsB;AAC1B;AACA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,qBAAqB;IACrB,yDAAgD;IAChD,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,SAAS;IACT,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,eAAe;AACnB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Orbitron:wght@400;500;600;700;800;900&display=swap');\n\n:root{\n    --bg-color : #000000;\n    --font-color: #ffffff;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;    \n}\n\nbody,html{\n    width: 100%;\n    height: 100%;\n    background-color: var(--bg-color);\n    color: var(--font-color);\n    font-family: 'Orbitron' , Arial, Helvetica, sans-serif;\n}\nbody{\n    display: flex;\n    flex-direction: column;\n}\n\n.header{\n    font-family: 'Black Ops One', Arial, Helvetica, sans-serif;\n    font-size: 5rem;\n    text-align: center;\n    padding: 1%;\n}\n\n.game-area{\n    display: flex;\n    width: 100%;\n    height: 100%;\n    justify-content: space-around;\n}\n\n.player-name{\n    font-size: 2rem;\n    text-align: center;\n    margin-top: 1%;\n}\n\n.player1-area{\n    border-right: 2px solid var(--font-color);\n}\n\n.player2-area{\n    border-left: 2px solid var(--font-color);\n}\n\n.player1-area,.player2-area{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.game-grid{\n    margin-top: 10%;\n    display: grid;\n    height: max(50%, 300px);\n    width: max(50%,300px);    \n    border: 1px solid var(--font-color);\n    display: grid;\n    grid-template: repeat(10, 1fr)/repeat(10,1fr);\n}\n\n.grid-cell{\n    border: 1px solid var(--font-color);\n}\n\n.colored-cell{\n    background-color: #ccc;\n}\n.selection-cell{\n    background-color: #fff;\n}\n\n.error-cell{\n    background-color: red;\n}\n\n.rotate-button{\n    margin-top: 64px;\n    font-size: 2rem;\n}\n\n.rotate-button{\n    padding: 8px 16px;\n}\n\n.hide{\n    visibility: hidden;\n    pointer-events: none;\n}\n\n.fire{\n    background-color: red;\n    background-image: url(\"./assets/icons/fire.svg\");\n    background-size: contain;\n}\n\n.water{\n    background-color: blue;\n}\n\n.game-over{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    bottom: 0;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    z-index: 10;\n    background-color: #000000;\n    font-size: 3rem;\n}\n\n.game-over button{\n    font-size: 2rem;\n    padding: 8px 16px;\n}\n\n.player-name-entry{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: #000000;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    gap:24px;\n}\n\nform input{\n    font-size: 2rem;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPlayerCoordinatesFromDisplay: () => (/* binding */ getPlayerCoordinatesFromDisplay),
/* harmony export */   getShipCoordinates: () => (/* binding */ getShipCoordinates),
/* harmony export */   initializeGrid: () => (/* binding */ initializeGrid),
/* harmony export */   setDisplayColors: () => (/* binding */ setDisplayColors),
/* harmony export */   setShipsPhase: () => (/* binding */ setShipsPhase)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


const initializeGrid = function (player,computer) {
    const grids = document.querySelectorAll(".game-grid");
    let index = 0;
    grids.forEach(grid => {
        grid.textContent = "";
        for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.MAX_INDEX; i++) {
            for (let j = 0; j < ___WEBPACK_IMPORTED_MODULE_0__.MAX_INDEX; j++) {
                let divCell = document.createElement("div");
                divCell.classList.add("grid-cell");
                divCell.id = `cell${index}-${i}${j}`;
                grid.appendChild(divCell);
            }
        }
        index++;
    });
};



function setShipsPhase(player, computer) {
    const rotateButton = document.querySelector(".rotate-button");
    rotateButton.classList.remove("hide");
    setShip(player, computer, ___WEBPACK_IMPORTED_MODULE_0__.SHIP_LENGTH_ARRAY);

}

function setDisplayColors(player,computer) {
    for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.MAX_INDEX; i++) {
        for (let j = 0; j < ___WEBPACK_IMPORTED_MODULE_0__.MAX_INDEX; j++) {
            let divCell = document.querySelector(`#cell0-${i}${j}`);
            if (player.gameboard.isIndexMissedTarget([i, j])) {
                divCell.classList.add("water");
            }
            else if (player.gameboard.isIndexOnTarget([i, j])) {
                divCell.classList.add("fire")
            }
            else if (player.gameboard.isIndexHavingShip([i, j])) {
                divCell.classList.add("colored-cell");
            }
        }
    }
    for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.MAX_INDEX; i++) {
        for (let j = 0; j < ___WEBPACK_IMPORTED_MODULE_0__.MAX_INDEX; j++) {
            let divCell = document.querySelector(`#cell1-${i}${j}`);
            if (computer.gameboard.isIndexMissedTarget([i, j])) {
                divCell.classList.add("water");
            }
            else if (computer.gameboard.isIndexOnTarget([i, j])) {
                divCell.classList.add("fire")
            }
        }
    }
}



function setShip(player, computer, shipSetArray, shipArrayIndex = 0, orientation = "vertical") {
    if (shipArrayIndex === shipSetArray.length) {
        const rotateButton = document.querySelector(".rotate-button");
        rotateButton.classList.add("hide");
        computer.setComputerShips();
        ___WEBPACK_IMPORTED_MODULE_0__.mainGameLoop.startGame(player, computer);
        return;
    }
    let length = shipSetArray[shipArrayIndex];
    function removeAllEventListeners() {
        const grids = document.querySelector(".game-grid");
        for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.MAX_INDEX; i++) {
            for (let j = 0; j < ___WEBPACK_IMPORTED_MODULE_0__.MAX_INDEX; j++) {
                let divCell = document.querySelector(`#cell0-${i}${j}`);
                let newCell = divCell.cloneNode(true);
                divCell.parentNode.replaceChild(newCell, divCell);
            }
        }
    }
    function handleMouseOver(target, length, orientation,player) {
        let shipArray = getShipCoordinates(target, length, orientation);
        let isAreaAvailable = true;
        shipArray.forEach(ship => {
            if (player.gameboard.isIndexHavingShip(ship))
                isAreaAvailable = false;
        });
        shipArray.forEach(ship => {
            const cell = document.querySelector(`#${getIdFromIndex(ship)}`);
            if (isAreaAvailable) {
                cell.classList.add("selection-cell");
            }
            else {
                cell.classList.add("error-cell");
            }
        });
    }

    function handleMouseOut(target,length,orientation) {
        let shipArray = getShipCoordinates(target, length, orientation);
        shipArray.forEach(ship => {
            const cell = document.querySelector(`#${getIdFromIndex(ship)}`);
            cell.classList.remove("selection-cell","error-cell");
        });
    }

    function handleClick(target, length, orientation) {
        let shipArray = getShipCoordinates(target, length, orientation);
        let isValid = true;
        shipArray.forEach(index => {
            if (player.gameboard.isIndexHavingShip(index)) {
                isValid = false;
            }
        });
        if (shipArray.length === length && isValid) {
            player.gameboard.setShip(length, target, orientation);
            shipArrayIndex++;
            setDisplayColors(player, computer);
            removeAllEventListeners();
            shipArray.forEach(index => {
                const cell = document.querySelector(`#${getIdFromIndex(index)}`);
                cell.classList.remove("selection-cell");
            });
            setShip(player, computer, shipSetArray, shipArrayIndex, orientation);
        }
    }
    const playerCells = document.querySelectorAll("#player1-gamegrid>div");
    const rotateButton = document.querySelector(".rotate-button");
    rotateButton.addEventListener("click", () => {
        if (orientation === "vertical") {
            orientation = "horizontal";
        }
        else {
            orientation = "vertical";
        }
    
    });
    playerCells.forEach(cell => {
        cell.addEventListener("mouseover", (e) => handleMouseOver(getIndexFromId(e.target.id), length, orientation,player));
        cell.addEventListener("mouseout", (e) => handleMouseOut(getIndexFromId(e.target.id), length, orientation));
        cell.addEventListener("click", (e) => handleClick(getIndexFromId(e.target.id), length, orientation));
    });
}

function getShipCoordinates(target,length, orientation) {
    let shipArray = [];
    for (let i = 0; i < length; i++){
        if (orientation === "vertical") {
            if(target[0] + i < ___WEBPACK_IMPORTED_MODULE_0__.MAX_INDEX)
                shipArray.push([target[0] + i, target[1]]);
        }
        else {
            if(target[1] + i < ___WEBPACK_IMPORTED_MODULE_0__.MAX_INDEX)
                shipArray.push([target[0], target[1] + i]);
        }
    }
    return shipArray;
}

function getIndexFromId(id) {
    let targetId = id;
    let targetIdArray = targetId.split("-", 2);
    targetIdArray = [parseInt(targetIdArray[1][0]), parseInt(targetIdArray[1][1])];
    return targetIdArray;    
}
function getIdFromIndex(index) {
    return `cell0-${index[0]}${index[1]}`;   
}

function getPlayerCoordinatesFromDisplay(gameboard) {

    function handleMouseOver(event) {
        let index = getIndexFromId(event.target.id);
        if (gameboard.isIndexMissedTarget(index) || gameboard.isIndexOnTarget(index))
            event.target.classList.add("error-cell");
        else
            event.target.classList.add("selection-cell");
    }

    function handleMouseOut(event) {
        event.target.classList.remove("selection-cell", "error-cell");
    }
    
    function handleClick(event) {
        let index = getIndexFromId(event.target.id);
        if (!(gameboard.isIndexMissedTarget(index) || gameboard.isIndexOnTarget(index))) {
            
            ___WEBPACK_IMPORTED_MODULE_0__.mainGameLoop.nextComputerMove(index);
        }
    }

    for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.MAX_INDEX; i++){
        for (let j = 0; j < ___WEBPACK_IMPORTED_MODULE_0__.MAX_INDEX; j++){
            const cell = document.querySelector(`#cell1-${i}${j}`);
            cell.addEventListener("mouseover", (e) => handleMouseOver(e));
            cell.addEventListener("mouseout", (e) => handleMouseOut(e));
            cell.addEventListener("click", (e) => handleClick(e));
            
        }
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
/* harmony export */   createGameboard: () => (/* binding */ createGameboard)
/* harmony export */ });
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ "./src/ships.js");

function createGameboard() {
    let ships = [];
    let missedShots = [];
    let targetShots = [];
    function setShip(length, startingCoordinates, orientation) {
        const ship = new _ships__WEBPACK_IMPORTED_MODULE_0__["default"](length, startingCoordinates, orientation);
        ships.push(ship);
        return true;
    }
    function receiveAttack(coordinates) {
        let isHit = false;
        ships.every(ship => {
            for (let i = 0; i < ship.coordinates.length; i++) {
                if (ship.coordinates[i][0] === coordinates[0] && ship.coordinates[i][1] === coordinates[1]) {
                    ship.hit();
                    targetShots.push(coordinates);
                    isHit = true;
                }
            }
            return true;
        });
        if (isHit === false) {
            missedShots.push(coordinates);
        }
    }
    function isAllShipsSunk() {
        let allShipsSunk = true;
        ships.every(ship => {
            if (ship.isSunk() === false) {
                allShipsSunk = false;
                return false;
            }
            return true;
        })
        if (allShipsSunk === true) {
            return true;
        }
        else
            return false;
    }
    function getMissedShots() {
        return missedShots;
    }
    function getOnTargetShots() {
        return targetShots;
    }
    function isIndexMissedTarget(index) {
        let isMissed = false;
        missedShots.forEach(shot => {
            if (index[0] === shot[0] && index[1] === shot[1]) {
                isMissed = true;
            }
        })
        return isMissed;
    }
    function isIndexOnTarget(index) {
        let isOnTarget = false;
        targetShots.forEach(shot => {
            if (index[0] === shot[0] && index[1] === shot[1]) {
                isOnTarget = true;
            }
        })
        return isOnTarget;
    }
    function isIndexHavingShip(index) {
        let isShip = false;
        ships.every(ship => {
            if (ship.isPartOfShip(index)) {
                isShip = true;
                return false;
            }
            return true;
        });
        return isShip;
    }

    return { receiveAttack, isAllShipsSunk, setShip, getMissedShots, getOnTargetShots, isIndexHavingShip, isIndexMissedTarget, isIndexOnTarget };
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAX_INDEX: () => (/* binding */ MAX_INDEX),
/* harmony export */   SHIP_LENGTH_ARRAY: () => (/* binding */ SHIP_LENGTH_ARRAY),
/* harmony export */   mainGameLoop: () => (/* binding */ mainGameLoop)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./players */ "./src/players.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ "./src/display.js");
const MAX_INDEX = 10;
const SHIP_LENGTH_ARRAY = [4, 3, 3, 2, 2, 1, 1];





const mainGameLoop = (function () {
    let playerName = "Player";
    const submitButton = document.querySelector("#submit-button");
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        const nameInput = document.querySelector("#name");
        if (nameInput.value !== "") {
            playerName = nameInput.value;
        }
        else {
            playerName = "Player";
        }
        const playerNameEntry = document.querySelector(".player-name-entry");
        playerNameEntry.classList.add("hide");
        const playerNameDiv = document.querySelector(".player-name");
        playerNameDiv.textContent = playerName;
    });
    const player = new _players__WEBPACK_IMPORTED_MODULE_1__.Player(playerName);
    const computer = new _players__WEBPACK_IMPORTED_MODULE_1__.Computer("Computer");
    (0,_display__WEBPACK_IMPORTED_MODULE_2__.initializeGrid)(player,computer);
    (0,_display__WEBPACK_IMPORTED_MODULE_2__.setShipsPhase)(player, computer);
    (0,_display__WEBPACK_IMPORTED_MODULE_2__.setDisplayColors)(player, computer);

    function startGame(player, computer) {
        let toss = Math.floor(Math.random() * 2);
        (toss === 0) ? toss = false : toss = true;
        let startPlayer = null;
        let otherPlayer = null;
        if (toss) {
            startPlayer = player;
            otherPlayer = computer;
        }
        else {
            startPlayer = computer;
            otherPlayer = player;
        }
        
        startPlayer.makeMove(otherPlayer.gameboard);
    }

    function nextPlayerMove(coordinate = null) {
        if (coordinate !== null) {
            player.receiveAttackCoordinates(coordinate);
            (0,_display__WEBPACK_IMPORTED_MODULE_2__.setDisplayColors)(player, computer);
            if (player.gameboard.isAllShipsSunk()) {
                gameOver(computer);
                return;
            }
            if (player.gameboard.isIndexOnTarget(coordinate)) {
                nextComputerMove();
                return;
            }
        }
        player.makeMove(computer.gameboard);
    }

    function nextComputerMove(coordinate = null) {
        if (coordinate !== null) {
            computer.receiveAttackCoordinates(coordinate);
            (0,_display__WEBPACK_IMPORTED_MODULE_2__.setDisplayColors)(player, computer);
            if (computer.gameboard.isAllShipsSunk()) {
                gameOver(player);
                return;
            }
            if (computer.gameboard.isIndexOnTarget(coordinate)) {
                nextPlayerMove();
                return;
            }
        }
        computer.makeMove(player.gameboard);
    }

    function gameOver(winner) {
        const gameOver = document.querySelector(".game-over");
        const gameOverText = document.querySelector(".game-over h2");
        gameOverText.textContent = "Game Over. Winner is " + winner.name;
        const reloadButton = document.querySelector(".game-over button");
        reloadButton.addEventListener("click", () => {
            location.reload();
        });
        gameOver.classList.remove("hide");
    }
    return{startGame,nextPlayerMove,nextComputerMove}
})();





/***/ }),

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Computer: () => (/* binding */ Computer),
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ "./src/display.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



class Player {
    constructor(name) {
        this.name = name;
        this.gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.createGameboard)();
    }
    makeMove(gameboard) {
        (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.getPlayerCoordinatesFromDisplay)(gameboard);
    }
    receiveAttackCoordinates(coordinates) {
        this.gameboard.receiveAttack(coordinates);
    }
}

class Computer extends Player{
    attackCoordinates(gameboard) {
        let missedCoordinates = gameboard.getMissedShots();
        let onTargetCoordinates = gameboard.getOnTargetShots();
        let allUsedCoordinates = onTargetCoordinates.concat(missedCoordinates);
        let newCoordinates = [];
        let isGeneratedCoordinates = false;
        while (isGeneratedCoordinates === false) {
            let row = Math.floor(Math.random() * _index_js__WEBPACK_IMPORTED_MODULE_2__.MAX_INDEX);
            let column = Math.floor(Math.random() * _index_js__WEBPACK_IMPORTED_MODULE_2__.MAX_INDEX);
            let duplicateExists = false
            newCoordinates = [row, column];
            for (let i = 0; i < allUsedCoordinates.length; i++){
                if (allUsedCoordinates[i][0] === newCoordinates[0] && allUsedCoordinates[i][1] === newCoordinates[1]) {
                    duplicateExists = true;
                }
            }
            if (duplicateExists === false) {
                isGeneratedCoordinates = true;
            }
        }
        return newCoordinates;
    }
    makeMove(gameboard) {
        _index_js__WEBPACK_IMPORTED_MODULE_2__.mainGameLoop.nextPlayerMove(this.attackCoordinates(gameboard));
    }
    setComputerShips() {
        _index_js__WEBPACK_IMPORTED_MODULE_2__.SHIP_LENGTH_ARRAY.forEach(length => {
            let isValid = false;
            let row, col, orientation;
            while (!isValid) {
                row = Math.floor(Math.random() * _index_js__WEBPACK_IMPORTED_MODULE_2__.MAX_INDEX);
                col = Math.floor(Math.random() * _index_js__WEBPACK_IMPORTED_MODULE_2__.MAX_INDEX);
                let orientationIndex = Math.floor(Math.random() * 2);
                (orientationIndex === 0) ? orientation = "vertical" : orientation = "horizontal";
                let shipArray = (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.getShipCoordinates)([row, col], length, orientation);
                isValid = true;
                if (shipArray.length < length)
                    isValid = false;
                shipArray.forEach(shipIndex => {
                    if (this.gameboard.isIndexHavingShip(shipIndex) === true)
                        isValid = false;
                });
            }
            this.gameboard.setShip(length, [row, col], orientation);
        });
    }
}


/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ship{
    constructor(length,startingCoordinate,orientation) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
        let coordinatesArray = [];
        for (let i = 0; i < length; i++){
            if (orientation === "horizontal") {
                coordinatesArray.push([startingCoordinate[0],startingCoordinate[1]+i]);
            }
            else if (orientation === "vertical") {
                coordinatesArray.push([startingCoordinate[0]+i,startingCoordinate[1]]);
            }
        }
        this.coordinates = coordinatesArray;
    }

    isPartOfShip(index) {
        let isPart = false;
        this.coordinates.every(coordinate => {
            if (index[0] === coordinate[0] && index[1] === coordinate[1]) {
                isPart = true;
                return false
            }
            return true;
        });
        return isPart;
    }

    hit() {
        this.hits += 1;
        if (this.hits >= this.length){
            this.sunk = true;
        }
    }

    isSunk() {
        return this.sunk;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/assets/icons/fire.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/fire.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a22a26eef2cc606a0ea.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pY29ucy9maXJlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmxhY2srT3BzK09uZSZmYW1pbHk9T3JiaXRyb246d2dodEA0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcbiAgICAtLWJnLWNvbG9yIDogIzAwMDAwMDtcbiAgICAtLWZvbnQtY29sb3I6ICNmZmZmZmY7XG59XG5cbip7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgICAgXG59XG5cbmJvZHksaHRtbHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogJ09yYml0cm9uJyAsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5ib2R5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmhlYWRlcntcbiAgICBmb250LWZhbWlseTogJ0JsYWNrIE9wcyBPbmUnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMSU7XG59XG5cbi5nYW1lLWFyZWF7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5wbGF5ZXItbmFtZXtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDElO1xufVxuXG4ucGxheWVyMS1hcmVhe1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xufVxuXG4ucGxheWVyMi1hcmVhe1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XG59XG5cbi5wbGF5ZXIxLWFyZWEsLnBsYXllcjItYXJlYXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5nYW1lLWdyaWR7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgaGVpZ2h0OiBtYXgoNTAlLCAzMDBweCk7XG4gICAgd2lkdGg6IG1heCg1MCUsMzAwcHgpOyAgICBcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKS9yZXBlYXQoMTAsMWZyKTtcbn1cblxuLmdyaWQtY2VsbHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxuLmNvbG9yZWQtY2VsbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuLnNlbGVjdGlvbi1jZWxse1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5lcnJvci1jZWxse1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnJvdGF0ZS1idXR0b257XG4gICAgbWFyZ2luLXRvcDogNjRweDtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi5yb3RhdGUtYnV0dG9ue1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xufVxuXG4uaGlkZXtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5maXJle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4ud2F0ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLmdhbWUtb3ZlcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbi5nYW1lLW92ZXIgYnV0dG9ue1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbn1cblxuLnBsYXllci1uYW1lLWVudHJ5e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZm9ybXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOjI0cHg7XG59XG5cbmZvcm0gaW5wdXR7XG4gICAgZm9udC1zaXplOiAycmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLHdCQUF3QjtJQUN4QixzREFBc0Q7QUFDMUQ7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwwREFBMEQ7SUFDMUQsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIseURBQWdEO0lBQ2hELHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJsYWNrK09wcytPbmUmZmFtaWx5PU9yYml0cm9uOndnaHRANDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3R7XFxuICAgIC0tYmctY29sb3IgOiAjMDAwMDAwO1xcbiAgICAtLWZvbnQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgICAgXFxufVxcblxcbmJvZHksaHRtbHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3JiaXRyb24nICwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuYm9keXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZm9udC1mYW1pbHk6ICdCbGFjayBPcHMgT25lJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDElO1xcbn1cXG5cXG4uZ2FtZS1hcmVhe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnBsYXllci1uYW1le1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMSU7XFxufVxcblxcbi5wbGF5ZXIxLWFyZWF7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ucGxheWVyMi1hcmVhe1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ucGxheWVyMS1hcmVhLC5wbGF5ZXIyLWFyZWF7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLWdyaWR7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiBtYXgoNTAlLCAzMDBweCk7XFxuICAgIHdpZHRoOiBtYXgoNTAlLDMwMHB4KTsgICAgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikvcmVwZWF0KDEwLDFmcik7XFxufVxcblxcbi5ncmlkLWNlbGx7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uY29sb3JlZC1jZWxse1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbn1cXG4uc2VsZWN0aW9uLWNlbGx7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5lcnJvci1jZWxse1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5yb3RhdGUtYnV0dG9ue1xcbiAgICBtYXJnaW4tdG9wOiA2NHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5yb3RhdGUtYnV0dG9ue1xcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXG59XFxuXFxuLmhpZGV7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5maXJle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvaWNvbnMvZmlyZS5zdmdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cXG4ud2F0ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5nYW1lLW92ZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uZ2FtZS1vdmVyIGJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXG59XFxuXFxuLnBsYXllci1uYW1lLWVudHJ5e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb3Jte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6MjRweDtcXG59XFxuXFxuZm9ybSBpbnB1dHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IE1BWF9JTkRFWCwgU0hJUF9MRU5HVEhfQVJSQVksIG1haW5HYW1lTG9vcCB9IGZyb20gXCIuXCI7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplR3JpZCA9IGZ1bmN0aW9uIChwbGF5ZXIsY29tcHV0ZXIpIHtcbiAgICBjb25zdCBncmlkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2FtZS1ncmlkXCIpO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZ3JpZHMuZm9yRWFjaChncmlkID0+IHtcbiAgICAgICAgZ3JpZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTUFYX0lOREVYOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgTUFYX0lOREVYOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZGl2Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgZGl2Q2VsbC5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1jZWxsXCIpO1xuICAgICAgICAgICAgICAgIGRpdkNlbGwuaWQgPSBgY2VsbCR7aW5kZXh9LSR7aX0ke2p9YDtcbiAgICAgICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKGRpdkNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGluZGV4Kys7XG4gICAgfSk7XG59O1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNoaXBzUGhhc2UocGxheWVyLCBjb21wdXRlcikge1xuICAgIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm90YXRlLWJ1dHRvblwiKTtcbiAgICByb3RhdGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgc2V0U2hpcChwbGF5ZXIsIGNvbXB1dGVyLCBTSElQX0xFTkdUSF9BUlJBWSk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERpc3BsYXlDb2xvcnMocGxheWVyLGNvbXB1dGVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNQVhfSU5ERVg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IE1BWF9JTkRFWDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgZGl2Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjZWxsMC0ke2l9JHtqfWApO1xuICAgICAgICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuaXNJbmRleE1pc3NlZFRhcmdldChbaSwgal0pKSB7XG4gICAgICAgICAgICAgICAgZGl2Q2VsbC5jbGFzc0xpc3QuYWRkKFwid2F0ZXJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmlzSW5kZXhPblRhcmdldChbaSwgal0pKSB7XG4gICAgICAgICAgICAgICAgZGl2Q2VsbC5jbGFzc0xpc3QuYWRkKFwiZmlyZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGxheWVyLmdhbWVib2FyZC5pc0luZGV4SGF2aW5nU2hpcChbaSwgal0pKSB7XG4gICAgICAgICAgICAgICAgZGl2Q2VsbC5jbGFzc0xpc3QuYWRkKFwiY29sb3JlZC1jZWxsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTUFYX0lOREVYOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBNQVhfSU5ERVg7IGorKykge1xuICAgICAgICAgICAgbGV0IGRpdkNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2VsbDEtJHtpfSR7an1gKTtcbiAgICAgICAgICAgIGlmIChjb21wdXRlci5nYW1lYm9hcmQuaXNJbmRleE1pc3NlZFRhcmdldChbaSwgal0pKSB7XG4gICAgICAgICAgICAgICAgZGl2Q2VsbC5jbGFzc0xpc3QuYWRkKFwid2F0ZXJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb21wdXRlci5nYW1lYm9hcmQuaXNJbmRleE9uVGFyZ2V0KFtpLCBqXSkpIHtcbiAgICAgICAgICAgICAgICBkaXZDZWxsLmNsYXNzTGlzdC5hZGQoXCJmaXJlXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5mdW5jdGlvbiBzZXRTaGlwKHBsYXllciwgY29tcHV0ZXIsIHNoaXBTZXRBcnJheSwgc2hpcEFycmF5SW5kZXggPSAwLCBvcmllbnRhdGlvbiA9IFwidmVydGljYWxcIikge1xuICAgIGlmIChzaGlwQXJyYXlJbmRleCA9PT0gc2hpcFNldEFycmF5Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdGF0ZS1idXR0b25cIik7XG4gICAgICAgIHJvdGF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgY29tcHV0ZXIuc2V0Q29tcHV0ZXJTaGlwcygpO1xuICAgICAgICBtYWluR2FtZUxvb3Auc3RhcnRHYW1lKHBsYXllciwgY29tcHV0ZXIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBsZW5ndGggPSBzaGlwU2V0QXJyYXlbc2hpcEFycmF5SW5kZXhdO1xuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBjb25zdCBncmlkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1ncmlkXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1BWF9JTkRFWDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IE1BWF9JTkRFWDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRpdkNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2VsbDAtJHtpfSR7an1gKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3Q2VsbCA9IGRpdkNlbGwuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgICAgIGRpdkNlbGwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Q2VsbCwgZGl2Q2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlTW91c2VPdmVyKHRhcmdldCwgbGVuZ3RoLCBvcmllbnRhdGlvbixwbGF5ZXIpIHtcbiAgICAgICAgbGV0IHNoaXBBcnJheSA9IGdldFNoaXBDb29yZGluYXRlcyh0YXJnZXQsIGxlbmd0aCwgb3JpZW50YXRpb24pO1xuICAgICAgICBsZXQgaXNBcmVhQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgICAgc2hpcEFycmF5LmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5pc0luZGV4SGF2aW5nU2hpcChzaGlwKSlcbiAgICAgICAgICAgICAgICBpc0FyZWFBdmFpbGFibGUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNoaXBBcnJheS5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2dldElkRnJvbUluZGV4KHNoaXApfWApO1xuICAgICAgICAgICAgaWYgKGlzQXJlYUF2YWlsYWJsZSkge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGlvbi1jZWxsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItY2VsbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTW91c2VPdXQodGFyZ2V0LGxlbmd0aCxvcmllbnRhdGlvbikge1xuICAgICAgICBsZXQgc2hpcEFycmF5ID0gZ2V0U2hpcENvb3JkaW5hdGVzKHRhcmdldCwgbGVuZ3RoLCBvcmllbnRhdGlvbik7XG4gICAgICAgIHNoaXBBcnJheS5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2dldElkRnJvbUluZGV4KHNoaXApfWApO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0aW9uLWNlbGxcIixcImVycm9yLWNlbGxcIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKHRhcmdldCwgbGVuZ3RoLCBvcmllbnRhdGlvbikge1xuICAgICAgICBsZXQgc2hpcEFycmF5ID0gZ2V0U2hpcENvb3JkaW5hdGVzKHRhcmdldCwgbGVuZ3RoLCBvcmllbnRhdGlvbik7XG4gICAgICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgc2hpcEFycmF5LmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuaXNJbmRleEhhdmluZ1NoaXAoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNoaXBBcnJheS5sZW5ndGggPT09IGxlbmd0aCAmJiBpc1ZhbGlkKSB7XG4gICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnNldFNoaXAobGVuZ3RoLCB0YXJnZXQsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgIHNoaXBBcnJheUluZGV4Kys7XG4gICAgICAgICAgICBzZXREaXNwbGF5Q29sb3JzKHBsYXllciwgY29tcHV0ZXIpO1xuICAgICAgICAgICAgcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgIHNoaXBBcnJheS5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Z2V0SWRGcm9tSW5kZXgoaW5kZXgpfWApO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGlvbi1jZWxsXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRTaGlwKHBsYXllciwgY29tcHV0ZXIsIHNoaXBTZXRBcnJheSwgc2hpcEFycmF5SW5kZXgsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwbGF5ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyMS1nYW1lZ3JpZD5kaXZcIik7XG4gICAgY29uc3Qgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb3RhdGUtYnV0dG9uXCIpO1xuICAgIHJvdGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgb3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9yaWVudGF0aW9uID0gXCJ2ZXJ0aWNhbFwiO1xuICAgICAgICB9XG4gICAgXG4gICAgfSk7XG4gICAgcGxheWVyQ2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChlKSA9PiBoYW5kbGVNb3VzZU92ZXIoZ2V0SW5kZXhGcm9tSWQoZS50YXJnZXQuaWQpLCBsZW5ndGgsIG9yaWVudGF0aW9uLHBsYXllcikpO1xuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZSkgPT4gaGFuZGxlTW91c2VPdXQoZ2V0SW5kZXhGcm9tSWQoZS50YXJnZXQuaWQpLCBsZW5ndGgsIG9yaWVudGF0aW9uKSk7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBoYW5kbGVDbGljayhnZXRJbmRleEZyb21JZChlLnRhcmdldC5pZCksIGxlbmd0aCwgb3JpZW50YXRpb24pKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNoaXBDb29yZGluYXRlcyh0YXJnZXQsbGVuZ3RoLCBvcmllbnRhdGlvbikge1xuICAgIGxldCBzaGlwQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgIGlmKHRhcmdldFswXSArIGkgPCBNQVhfSU5ERVgpXG4gICAgICAgICAgICAgICAgc2hpcEFycmF5LnB1c2goW3RhcmdldFswXSArIGksIHRhcmdldFsxXV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYodGFyZ2V0WzFdICsgaSA8IE1BWF9JTkRFWClcbiAgICAgICAgICAgICAgICBzaGlwQXJyYXkucHVzaChbdGFyZ2V0WzBdLCB0YXJnZXRbMV0gKyBpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNoaXBBcnJheTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5kZXhGcm9tSWQoaWQpIHtcbiAgICBsZXQgdGFyZ2V0SWQgPSBpZDtcbiAgICBsZXQgdGFyZ2V0SWRBcnJheSA9IHRhcmdldElkLnNwbGl0KFwiLVwiLCAyKTtcbiAgICB0YXJnZXRJZEFycmF5ID0gW3BhcnNlSW50KHRhcmdldElkQXJyYXlbMV1bMF0pLCBwYXJzZUludCh0YXJnZXRJZEFycmF5WzFdWzFdKV07XG4gICAgcmV0dXJuIHRhcmdldElkQXJyYXk7ICAgIFxufVxuZnVuY3Rpb24gZ2V0SWRGcm9tSW5kZXgoaW5kZXgpIHtcbiAgICByZXR1cm4gYGNlbGwwLSR7aW5kZXhbMF19JHtpbmRleFsxXX1gOyAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxheWVyQ29vcmRpbmF0ZXNGcm9tRGlzcGxheShnYW1lYm9hcmQpIHtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlT3ZlcihldmVudCkge1xuICAgICAgICBsZXQgaW5kZXggPSBnZXRJbmRleEZyb21JZChldmVudC50YXJnZXQuaWQpO1xuICAgICAgICBpZiAoZ2FtZWJvYXJkLmlzSW5kZXhNaXNzZWRUYXJnZXQoaW5kZXgpIHx8IGdhbWVib2FyZC5pc0luZGV4T25UYXJnZXQoaW5kZXgpKVxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJlcnJvci1jZWxsXCIpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGlvbi1jZWxsXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlT3V0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0aW9uLWNlbGxcIiwgXCJlcnJvci1jZWxsXCIpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICAgICAgICBsZXQgaW5kZXggPSBnZXRJbmRleEZyb21JZChldmVudC50YXJnZXQuaWQpO1xuICAgICAgICBpZiAoIShnYW1lYm9hcmQuaXNJbmRleE1pc3NlZFRhcmdldChpbmRleCkgfHwgZ2FtZWJvYXJkLmlzSW5kZXhPblRhcmdldChpbmRleCkpKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1haW5HYW1lTG9vcC5uZXh0Q29tcHV0ZXJNb3ZlKGluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTUFYX0lOREVYOyBpKyspe1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IE1BWF9JTkRFWDsgaisrKXtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2VsbDEtJHtpfSR7an1gKTtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4gaGFuZGxlTW91c2VPdmVyKGUpKTtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIChlKSA9PiBoYW5kbGVNb3VzZU91dChlKSk7XG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gaGFuZGxlQ2xpY2soZSkpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBzXCI7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2FtZWJvYXJkKCkge1xuICAgIGxldCBzaGlwcyA9IFtdO1xuICAgIGxldCBtaXNzZWRTaG90cyA9IFtdO1xuICAgIGxldCB0YXJnZXRTaG90cyA9IFtdO1xuICAgIGZ1bmN0aW9uIHNldFNoaXAobGVuZ3RoLCBzdGFydGluZ0Nvb3JkaW5hdGVzLCBvcmllbnRhdGlvbikge1xuICAgICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAobGVuZ3RoLCBzdGFydGluZ0Nvb3JkaW5hdGVzLCBvcmllbnRhdGlvbik7XG4gICAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGxldCBpc0hpdCA9IGZhbHNlO1xuICAgICAgICBzaGlwcy5ldmVyeShzaGlwID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5jb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzaGlwLmNvb3JkaW5hdGVzW2ldWzBdID09PSBjb29yZGluYXRlc1swXSAmJiBzaGlwLmNvb3JkaW5hdGVzW2ldWzFdID09PSBjb29yZGluYXRlc1sxXSkge1xuICAgICAgICAgICAgICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTaG90cy5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICAgICAgaXNIaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzSGl0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbWlzc2VkU2hvdHMucHVzaChjb29yZGluYXRlcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaXNBbGxTaGlwc1N1bmsoKSB7XG4gICAgICAgIGxldCBhbGxTaGlwc1N1bmsgPSB0cnVlO1xuICAgICAgICBzaGlwcy5ldmVyeShzaGlwID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLmlzU3VuaygpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGFsbFNoaXBzU3VuayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KVxuICAgICAgICBpZiAoYWxsU2hpcHNTdW5rID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldE1pc3NlZFNob3RzKCkge1xuICAgICAgICByZXR1cm4gbWlzc2VkU2hvdHM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldE9uVGFyZ2V0U2hvdHMoKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXRTaG90cztcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNJbmRleE1pc3NlZFRhcmdldChpbmRleCkge1xuICAgICAgICBsZXQgaXNNaXNzZWQgPSBmYWxzZTtcbiAgICAgICAgbWlzc2VkU2hvdHMuZm9yRWFjaChzaG90ID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleFswXSA9PT0gc2hvdFswXSAmJiBpbmRleFsxXSA9PT0gc2hvdFsxXSkge1xuICAgICAgICAgICAgICAgIGlzTWlzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGlzTWlzc2VkO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0luZGV4T25UYXJnZXQoaW5kZXgpIHtcbiAgICAgICAgbGV0IGlzT25UYXJnZXQgPSBmYWxzZTtcbiAgICAgICAgdGFyZ2V0U2hvdHMuZm9yRWFjaChzaG90ID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleFswXSA9PT0gc2hvdFswXSAmJiBpbmRleFsxXSA9PT0gc2hvdFsxXSkge1xuICAgICAgICAgICAgICAgIGlzT25UYXJnZXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaXNPblRhcmdldDtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNJbmRleEhhdmluZ1NoaXAoaW5kZXgpIHtcbiAgICAgICAgbGV0IGlzU2hpcCA9IGZhbHNlO1xuICAgICAgICBzaGlwcy5ldmVyeShzaGlwID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLmlzUGFydE9mU2hpcChpbmRleCkpIHtcbiAgICAgICAgICAgICAgICBpc1NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGlzU2hpcDtcbiAgICB9XG5cbiAgICByZXR1cm4geyByZWNlaXZlQXR0YWNrLCBpc0FsbFNoaXBzU3Vuaywgc2V0U2hpcCwgZ2V0TWlzc2VkU2hvdHMsIGdldE9uVGFyZ2V0U2hvdHMsIGlzSW5kZXhIYXZpbmdTaGlwLCBpc0luZGV4TWlzc2VkVGFyZ2V0LCBpc0luZGV4T25UYXJnZXQgfTtcbn0iLCJleHBvcnQgY29uc3QgTUFYX0lOREVYID0gMTA7XG5leHBvcnQgY29uc3QgU0hJUF9MRU5HVEhfQVJSQVkgPSBbNCwgMywgMywgMiwgMiwgMSwgMV07XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IFBsYXllciwgQ29tcHV0ZXIgfSBmcm9tIFwiLi9wbGF5ZXJzXCI7XG5pbXBvcnQgeyBpbml0aWFsaXplR3JpZCwgc2V0U2hpcHNQaGFzZSwgc2V0RGlzcGxheUNvbG9ycywgc2V0RGlzcGxheUNvbG9yczEgfSBmcm9tICcuL2Rpc3BsYXknO1xuXG5cbmV4cG9ydCBjb25zdCBtYWluR2FtZUxvb3AgPSAoZnVuY3Rpb24gKCkge1xuICAgIGxldCBwbGF5ZXJOYW1lID0gXCJQbGF5ZXJcIjtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdC1idXR0b25cIik7XG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKTtcbiAgICAgICAgaWYgKG5hbWVJbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgcGxheWVyTmFtZSA9IG5hbWVJbnB1dC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBsYXllck5hbWUgPSBcIlBsYXllclwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBsYXllck5hbWVFbnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLW5hbWUtZW50cnlcIik7XG4gICAgICAgIHBsYXllck5hbWVFbnRyeS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgY29uc3QgcGxheWVyTmFtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLW5hbWVcIik7XG4gICAgICAgIHBsYXllck5hbWVEaXYudGV4dENvbnRlbnQgPSBwbGF5ZXJOYW1lO1xuICAgIH0pO1xuICAgIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIocGxheWVyTmFtZSk7XG4gICAgY29uc3QgY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIoXCJDb21wdXRlclwiKTtcbiAgICBpbml0aWFsaXplR3JpZChwbGF5ZXIsY29tcHV0ZXIpO1xuICAgIHNldFNoaXBzUGhhc2UocGxheWVyLCBjb21wdXRlcik7XG4gICAgc2V0RGlzcGxheUNvbG9ycyhwbGF5ZXIsIGNvbXB1dGVyKTtcblxuICAgIGZ1bmN0aW9uIHN0YXJ0R2FtZShwbGF5ZXIsIGNvbXB1dGVyKSB7XG4gICAgICAgIGxldCB0b3NzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICAgICh0b3NzID09PSAwKSA/IHRvc3MgPSBmYWxzZSA6IHRvc3MgPSB0cnVlO1xuICAgICAgICBsZXQgc3RhcnRQbGF5ZXIgPSBudWxsO1xuICAgICAgICBsZXQgb3RoZXJQbGF5ZXIgPSBudWxsO1xuICAgICAgICBpZiAodG9zcykge1xuICAgICAgICAgICAgc3RhcnRQbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICAgICAgICBvdGhlclBsYXllciA9IGNvbXB1dGVyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhcnRQbGF5ZXIgPSBjb21wdXRlcjtcbiAgICAgICAgICAgIG90aGVyUGxheWVyID0gcGxheWVyO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzdGFydFBsYXllci5tYWtlTW92ZShvdGhlclBsYXllci5nYW1lYm9hcmQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5leHRQbGF5ZXJNb3ZlKGNvb3JkaW5hdGUgPSBudWxsKSB7XG4gICAgICAgIGlmIChjb29yZGluYXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBwbGF5ZXIucmVjZWl2ZUF0dGFja0Nvb3JkaW5hdGVzKGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgc2V0RGlzcGxheUNvbG9ycyhwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmlzQWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICBnYW1lT3Zlcihjb21wdXRlcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuaXNJbmRleE9uVGFyZ2V0KGNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgICAgICAgbmV4dENvbXB1dGVyTW92ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwbGF5ZXIubWFrZU1vdmUoY29tcHV0ZXIuZ2FtZWJvYXJkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXh0Q29tcHV0ZXJNb3ZlKGNvb3JkaW5hdGUgPSBudWxsKSB7XG4gICAgICAgIGlmIChjb29yZGluYXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb21wdXRlci5yZWNlaXZlQXR0YWNrQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICBzZXREaXNwbGF5Q29sb3JzKHBsYXllciwgY29tcHV0ZXIpO1xuICAgICAgICAgICAgaWYgKGNvbXB1dGVyLmdhbWVib2FyZC5pc0FsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgZ2FtZU92ZXIocGxheWVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29tcHV0ZXIuZ2FtZWJvYXJkLmlzSW5kZXhPblRhcmdldChjb29yZGluYXRlKSkge1xuICAgICAgICAgICAgICAgIG5leHRQbGF5ZXJNb3ZlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbXB1dGVyLm1ha2VNb3ZlKHBsYXllci5nYW1lYm9hcmQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdhbWVPdmVyKHdpbm5lcikge1xuICAgICAgICBjb25zdCBnYW1lT3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1vdmVyXCIpO1xuICAgICAgICBjb25zdCBnYW1lT3ZlclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtb3ZlciBoMlwiKTtcbiAgICAgICAgZ2FtZU92ZXJUZXh0LnRleHRDb250ZW50ID0gXCJHYW1lIE92ZXIuIFdpbm5lciBpcyBcIiArIHdpbm5lci5uYW1lO1xuICAgICAgICBjb25zdCByZWxvYWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtb3ZlciBidXR0b25cIik7XG4gICAgICAgIHJlbG9hZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBnYW1lT3Zlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICB9XG4gICAgcmV0dXJue3N0YXJ0R2FtZSxuZXh0UGxheWVyTW92ZSxuZXh0Q29tcHV0ZXJNb3ZlfVxufSkoKTtcblxuXG5cbiIsImltcG9ydCB7IGNyZWF0ZUdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgZ2V0U2hpcENvb3JkaW5hdGVzLGdldFBsYXllckNvb3JkaW5hdGVzRnJvbURpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5LmpzXCI7XG5pbXBvcnQgeyBNQVhfSU5ERVgsIFNISVBfTEVOR1RIX0FSUkFZLG1haW5HYW1lTG9vcCB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKCk7XG4gICAgfVxuICAgIG1ha2VNb3ZlKGdhbWVib2FyZCkge1xuICAgICAgICBnZXRQbGF5ZXJDb29yZGluYXRlc0Zyb21EaXNwbGF5KGdhbWVib2FyZCk7XG4gICAgfVxuICAgIHJlY2VpdmVBdHRhY2tDb29yZGluYXRlcyhjb29yZGluYXRlcykge1xuICAgICAgICB0aGlzLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wdXRlciBleHRlbmRzIFBsYXllcntcbiAgICBhdHRhY2tDb29yZGluYXRlcyhnYW1lYm9hcmQpIHtcbiAgICAgICAgbGV0IG1pc3NlZENvb3JkaW5hdGVzID0gZ2FtZWJvYXJkLmdldE1pc3NlZFNob3RzKCk7XG4gICAgICAgIGxldCBvblRhcmdldENvb3JkaW5hdGVzID0gZ2FtZWJvYXJkLmdldE9uVGFyZ2V0U2hvdHMoKTtcbiAgICAgICAgbGV0IGFsbFVzZWRDb29yZGluYXRlcyA9IG9uVGFyZ2V0Q29vcmRpbmF0ZXMuY29uY2F0KG1pc3NlZENvb3JkaW5hdGVzKTtcbiAgICAgICAgbGV0IG5ld0Nvb3JkaW5hdGVzID0gW107XG4gICAgICAgIGxldCBpc0dlbmVyYXRlZENvb3JkaW5hdGVzID0gZmFsc2U7XG4gICAgICAgIHdoaWxlIChpc0dlbmVyYXRlZENvb3JkaW5hdGVzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1BWF9JTkRFWCk7XG4gICAgICAgICAgICBsZXQgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTUFYX0lOREVYKTtcbiAgICAgICAgICAgIGxldCBkdXBsaWNhdGVFeGlzdHMgPSBmYWxzZVxuICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZXMgPSBbcm93LCBjb2x1bW5dO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxVc2VkQ29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmIChhbGxVc2VkQ29vcmRpbmF0ZXNbaV1bMF0gPT09IG5ld0Nvb3JkaW5hdGVzWzBdICYmIGFsbFVzZWRDb29yZGluYXRlc1tpXVsxXSA9PT0gbmV3Q29vcmRpbmF0ZXNbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgZHVwbGljYXRlRXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZHVwbGljYXRlRXhpc3RzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlzR2VuZXJhdGVkQ29vcmRpbmF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdDb29yZGluYXRlcztcbiAgICB9XG4gICAgbWFrZU1vdmUoZ2FtZWJvYXJkKSB7XG4gICAgICAgIG1haW5HYW1lTG9vcC5uZXh0UGxheWVyTW92ZSh0aGlzLmF0dGFja0Nvb3JkaW5hdGVzKGdhbWVib2FyZCkpO1xuICAgIH1cbiAgICBzZXRDb21wdXRlclNoaXBzKCkge1xuICAgICAgICBTSElQX0xFTkdUSF9BUlJBWS5mb3JFYWNoKGxlbmd0aCA9PiB7XG4gICAgICAgICAgICBsZXQgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IHJvdywgY29sLCBvcmllbnRhdGlvbjtcbiAgICAgICAgICAgIHdoaWxlICghaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1BWF9JTkRFWCk7XG4gICAgICAgICAgICAgICAgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTUFYX0lOREVYKTtcbiAgICAgICAgICAgICAgICBsZXQgb3JpZW50YXRpb25JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgICAgICAgICAgIChvcmllbnRhdGlvbkluZGV4ID09PSAwKSA/IG9yaWVudGF0aW9uID0gXCJ2ZXJ0aWNhbFwiIDogb3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIjtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcEFycmF5ID0gZ2V0U2hpcENvb3JkaW5hdGVzKFtyb3csIGNvbF0sIGxlbmd0aCwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChzaGlwQXJyYXkubGVuZ3RoIDwgbGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2hpcEFycmF5LmZvckVhY2goc2hpcEluZGV4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZWJvYXJkLmlzSW5kZXhIYXZpbmdTaGlwKHNoaXBJbmRleCkgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdhbWVib2FyZC5zZXRTaGlwKGxlbmd0aCwgW3JvdywgY29sXSwgb3JpZW50YXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJjbGFzcyBTaGlwe1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCxzdGFydGluZ0Nvb3JkaW5hdGUsb3JpZW50YXRpb24pIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXNBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlc0FycmF5LnB1c2goW3N0YXJ0aW5nQ29vcmRpbmF0ZVswXSxzdGFydGluZ0Nvb3JkaW5hdGVbMV0raV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzQXJyYXkucHVzaChbc3RhcnRpbmdDb29yZGluYXRlWzBdK2ksc3RhcnRpbmdDb29yZGluYXRlWzFdXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzQXJyYXk7XG4gICAgfVxuXG4gICAgaXNQYXJ0T2ZTaGlwKGluZGV4KSB7XG4gICAgICAgIGxldCBpc1BhcnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcy5ldmVyeShjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleFswXSA9PT0gY29vcmRpbmF0ZVswXSAmJiBpbmRleFsxXSA9PT0gY29vcmRpbmF0ZVsxXSkge1xuICAgICAgICAgICAgICAgIGlzUGFydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBpc1BhcnQ7XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICAgICAgaWYgKHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aCl7XG4gICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNTdW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdW5rO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
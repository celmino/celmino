
/*! *****************************************************************************************************************************
* Copyright (c) Tuvalsoft Corporation. All rights reserved.                                                                     *
*                                                                                                                               *
* ████████╗██╗   ██╗██╗   ██╗ █████╗ ██╗         ███████╗██████╗  █████╗ ███╗   ███╗███████╗██╗    ██╗ ██████╗ ██████╗ ██╗  ██╗ *
* ╚══██╔══╝██║   ██║██║   ██║██╔══██╗██║         ██╔════╝██╔══██╗██╔══██╗████╗ ████║██╔════╝██║    ██║██╔═══██╗██╔══██╗██║ ██╔╝ *
*    ██║   ██║   ██║██║   ██║███████║██║         █████╗  ██████╔╝███████║██╔████╔██║█████╗  ██║ █╗ ██║██║   ██║██████╔╝█████╔╝  *
*    ██║   ██║   ██║╚██╗ ██╔╝██╔══██║██║         ██╔══╝  ██╔══██╗██╔══██║██║╚██╔╝██║██╔══╝  ██║███╗██║██║   ██║██╔══██╗██╔═██╗  *
*    ██║   ╚██████╔╝ ╚████╔╝ ██║  ██║███████╗    ██║     ██║  ██║██║  ██║██║ ╚═╝ ██║███████╗╚███╔███╔╝╚██████╔╝██║  ██║██║  ██╗ *
*    ╚═╝    ╚═════╝   ╚═══╝  ╚═╝  ╚═╝╚══════╝    ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝ ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ *
*                                                                                                                               *
*                                                                                                                               *
* This file is part of Tuval Framework.                                                                                         *
* Copyright (c) Tuvalsoft 2019 All rights reserved.                                                                             *
*                                                                                                                               *
* Licensed under the GNU General Public License v3.0.                                                                           *
* More info at: https://choosealicense.com/licenses/gpl-3.0/                                                                    *
* Tuval Framework Created By Tuvalsoft in 2019                                                                                  *
******************************************************************************************************************************@*/
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/copy-to-clipboard/index.js":
/*!*************************************************!*\
  !*** ./node_modules/copy-to-clipboard/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "./node_modules/toggle-selection/index.js");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // avoid screen readers from reading out loud the text
    mark.ariaHidden = "true"
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ "./node_modules/react-promise-suspense/build/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-promise-suspense/build/index.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var deepEqual = __webpack_require__(/*! fast-deep-equal */ "./node_modules/react-promise-suspense/node_modules/fast-deep-equal/index.js");
var promiseCaches = [];
var usePromise = function (promise, inputs, lifespan) {
    var e_1, _a;
    if (lifespan === void 0) { lifespan = 0; }
    try {
        for (var promiseCaches_1 = __values(promiseCaches), promiseCaches_1_1 = promiseCaches_1.next(); !promiseCaches_1_1.done; promiseCaches_1_1 = promiseCaches_1.next()) {
            var promiseCache_1 = promiseCaches_1_1.value;
            if (deepEqual(inputs, promiseCache_1.inputs)) {
                if (Object.prototype.hasOwnProperty.call(promiseCache_1, "error")) {
                    throw promiseCache_1.error;
                }
                else if (Object.prototype.hasOwnProperty.call(promiseCache_1, "response")) {
                    return promiseCache_1.response;
                }
                throw promiseCache_1.promise;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (promiseCaches_1_1 && !promiseCaches_1_1.done && (_a = promiseCaches_1.return)) _a.call(promiseCaches_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var promiseCache = {
        promise: promise.apply(void 0, __spreadArray([], __read(inputs), false)).then(function (response) {
            promiseCache.response = response;
        })
            .catch(function (e) {
            promiseCache.error = e;
        })
            .then(function () {
            if (lifespan > 0) {
                setTimeout(function () {
                    var index = promiseCaches.indexOf(promiseCache);
                    if (index !== -1) {
                        promiseCaches.splice(index, 1);
                    }
                }, lifespan);
            }
        }),
        inputs: inputs,
    };
    promiseCaches.push(promiseCache);
    throw promiseCache.promise;
};
module.exports = usePromise;


/***/ }),

/***/ "./node_modules/react-promise-suspense/node_modules/fast-deep-equal/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-promise-suspense/node_modules/fast-deep-equal/index.js ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/toggle-selection/index.js":
/*!************************************************!*\
  !*** ./node_modules/toggle-selection/index.js ***!
  \************************************************/
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ "./src/Applets.ts":
/*!************************!*\
  !*** ./src/Applets.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Applets: () => (/* binding */ Applets)
/* harmony export */ });
var Applets = [
    {
        name: 'Enterprise Modelling',
        type: 'com.celmino.widget.enterprise-modelling-tree',
        description: 'Monitor your process details in timeframe chart.',
        // image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        icon: '\\d320',
        enabled: true,
        databases: [
            {
                "name": "Enterprise Modelling",
                "id": "enterprise_modelling",
                "category": "app",
                "collections": [
                    {
                        "name": "Folders",
                        "id": "em_folders",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            },
                            {
                                "key": "Parent",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Models",
                        "id": "em_models",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            },
                            {
                                "key": "Parent",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Model Types",
                        "id": "model_types",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            },
                            {
                                "key": "OrginalName",
                                "type": "string"
                            },
                            {
                                "key": "TypeNumber",
                                "type": "number"
                            },
                            {
                                "key": "ApiName",
                                "type": "string"
                            },
                            {
                                "key": "Type",
                                "type": "string"
                            }
                        ],
                        "documents": [
                            {
                                "Name": "Organizational chart",
                                "TypeNumber": 1,
                                "ApiName": "MT_ORG_CHRT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Screen diagram",
                                "TypeNumber": 2,
                                "ApiName": "MT_SCRN_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network topology ",
                                "TypeNumber": 3,
                                "ApiName": "MT_NW_TOPLG",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network diagram",
                                "TypeNumber": 5,
                                "ApiName": "MT_NW_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "eERM",
                                "TypeNumber": 6,
                                "ApiName": "MT_EERM",
                                "Type": "Default"
                            },
                            {
                                "Name": "SAP SERM",
                                "TypeNumber": 7,
                                "ApiName": "MT_SAP_SERM",
                                "Type": "Default"
                            },
                            {
                                "Name": "eERM attribute allocation diagram",
                                "TypeNumber": 8,
                                "ApiName": "MT_EERM_ATTR_ALLOC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Relations diagram",
                                "TypeNumber": 9,
                                "ApiName": "MT_REL_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Attribute allocation diagram",
                                "TypeNumber": 10,
                                "ApiName": "MT_ATTR_ALLOC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Table diagram",
                                "TypeNumber": 11,
                                "ApiName": "MT_TBL_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Value-added chain diagram",
                                "TypeNumber": 12,
                                "ApiName": "MT_VAL_ADD_CHN_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "EPC",
                                "TypeNumber": 13,
                                "ApiName": "MT_EPC",
                                "Type": "Default"
                            },
                            {
                                "Name": "Function allocation diagram",
                                "TypeNumber": 14,
                                "ApiName": "MT_FUNC_ALLOC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Information flow diagram",
                                "TypeNumber": 15,
                                "ApiName": "MT_INFO_FLOW_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Access diagram",
                                "TypeNumber": 16,
                                "ApiName": "MT_ACS_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Access diagram (physical)",
                                "TypeNumber": 17,
                                "ApiName": "MT_ACS_DGM_PHYs",
                                "Type": "Default"
                            },
                            {
                                "Name": "PCD",
                                "TypeNumber": 18,
                                "ApiName": "MT_PCD",
                                "Type": "Default"
                            },
                            {
                                "Name": "Function tree",
                                "TypeNumber": 19,
                                "ApiName": "MT_FUNC_TREE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Application system type diagram",
                                "TypeNumber": 21,
                                "ApiName": "MT_FUNC_TREE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Tecnical terms model",
                                "TypeNumber": 22,
                                "ApiName": "MT_TEC_TERMS_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Event diagram",
                                "TypeNumber": 23,
                                "ApiName": "MT_EVNT_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Rule diagram",
                                "TypeNumber": 24,
                                "ApiName": "MT_RULE_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Function organizational level diagram",
                                "TypeNumber": 25,
                                "ApiName": "MT_FUNC_ORG_LVL_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Process selection matrix",
                                "TypeNumber": 28,
                                "ApiName": "MT_PROC_SEL_MTRX",
                                "Type": "Default"
                            },
                            {
                                "Name": "Y diagram",
                                "TypeNumber": 30,
                                "ApiName": "MT_Y_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "SAP application diagram",
                                "TypeNumber": 31,
                                "ApiName": "MT_SAP_APP_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Classfication diagram",
                                "TypeNumber": 36,
                                "ApiName": "MT_CLSF_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Objective diagram",
                                "TypeNumber": 37,
                                "ApiName": "MT_OBJ_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Application system diagram",
                                "TypeNumber": 38,
                                "ApiName": "MT_APP_SYS_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "OMT Object model",
                                "TypeNumber": 39,
                                "ApiName": "MT_APP_SYS_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "OMT Dynamic model",
                                "TypeNumber": 40,
                                "ApiName": "MT_OMT_DYN_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "OMT Functional model",
                                "TypeNumber": 41,
                                "ApiName": "MT_OMT_FUNC_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "E Data model",
                                "TypeNumber": 42,
                                "ApiName": "MT_E_DATA_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "OMT Data value decomposition",
                                "TypeNumber": 43,
                                "ApiName": "MT_OMT_DATA_VAL_DCMPS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Class diagram",
                                "TypeNumber": 44,
                                "ApiName": "MT_CLS_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "System attributes",
                                "TypeNumber": 45,
                                "ApiName": "MT_SYS_ATTRS",
                                "Type": "Default"
                            },
                            {
                                "Name": "System attribute domain",
                                "TypeNumber": 46,
                                "ApiName": "MT_SYS_ATTRS_DOM",
                                "Type": "Default"
                            },
                            {
                                "Name": "SeDaM model",
                                "TypeNumber": 47,
                                "ApiName": "MT_SEDAM_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Technical resources",
                                "TypeNumber": 48,
                                "ApiName": "MT_TEC_RCS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Material diagram",
                                "TypeNumber": 49,
                                "ApiName": "MT_MTRL_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "EPC (material flow)",
                                "TypeNumber": 50,
                                "ApiName": "MT_EPC_MTRL_FLOW",
                                "Type": "Default"
                            },
                            {
                                "Name": "PCD (material flow)",
                                "TypeNumber": 51,
                                "ApiName": "MT_PCD_MTRL_FLOW",
                                "Type": "Default"
                            },
                            {
                                "Name": "Communications diagram",
                                "TypeNumber": 52,
                                "ApiName": "MT_COMM_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Program flow chart",
                                "TypeNumber": 53,
                                "ApiName": "MT_PRG_FLOW_CHRT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Cost category diagram",
                                "TypeNumber": 54,
                                "ApiName": "MT_CST_CAT_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "OMT Class description model",
                                "TypeNumber": 55,
                                "ApiName": "MT_OMT_CLS_DESC_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "RAMS",
                                "TypeNumber": 56,
                                "ApiName": "MT_RAMS",
                                "Type": "Default"
                            },
                            {
                                "Name": "SAP ALE function model",
                                "TypeNumber": 57,
                                "ApiName": "MT_SAP_ALE_FUNC_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "SAP ALE filter model",
                                "TypeNumber": 58,
                                "ApiName": "MT_SAP_ALE_FLTR_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "SAP ALE message flow model",
                                "TypeNumber": 59,
                                "ApiName": "MT_SAP_ALE_MSG_FLOW_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "SAP ALE message type model",
                                "TypeNumber": 60,
                                "ApiName": "MT_SAP_ALE_MSG_TYP_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "EPC (instance)",
                                "TypeNumber": 61,
                                "ApiName": "MT_EPC_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Material flow diagram",
                                "TypeNumber": 62,
                                "ApiName": "MT_MTRL_FLOW_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "PPC",
                                "TypeNumber": 63,
                                "ApiName": "MT_PPC",
                                "Type": "Default"
                            },
                            {
                                "Name": "Information carrier diagram",
                                "TypeNumber": 64,
                                "ApiName": "MT_INFO_CRR_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Task allocation diagram",
                                "TypeNumber": 65,
                                "ApiName": "MT_TSK_ALLOC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Privileges diagram",
                                "TypeNumber": 66,
                                "ApiName": "MT_PRIV_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Event diagram (instance)",
                                "TypeNumber": 67,
                                "ApiName": "MT_EVNT_DGM_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Business controls diagram",
                                "TypeNumber": 68,
                                "ApiName": "MT_BUS_CTRL_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Product/Service exchange diagram (graphic)",
                                "TypeNumber": 69,
                                "ApiName": "MT_PROD_EXCH_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Product/Service tree (graphic)",
                                "TypeNumber": 69,
                                "ApiName": "MT_PROD_TREE_GRAPHIC",
                                "Type": "Default"
                            },
                            {
                                "Name": "Product tree",
                                "TypeNumber": 70,
                                "ApiName": "MT_PROD_TREE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Product selection matrix",
                                "TypeNumber": 71,
                                "ApiName": "MT_PROD_SEL_MTRX",
                                "Type": "Default"
                            },
                            {
                                "Name": "Office process",
                                "TypeNumber": 72,
                                "ApiName": "MT_OFFICE_PROC",
                                "Type": "Default"
                            },
                            {
                                "Name": "Product allocation diagram",
                                "TypeNumber": 73,
                                "ApiName": "MT_PROD_ALLOC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Competition model",
                                "TypeNumber": 74,
                                "ApiName": "MT_COMP_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Industrial process",
                                "TypeNumber": 75,
                                "ApiName": "MT_IND_PROC",
                                "Type": "Default"
                            },
                            {
                                "Name": "Process instantiation model",
                                "TypeNumber": 76,
                                "ApiName": "MT_PROC_INST_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Shift calendar",
                                "TypeNumber": 77,
                                "ApiName": "MT_SHIFT_CAL",
                                "Type": "Default"
                            },
                            {
                                "Name": "CD Diagram",
                                "TypeNumber": 78,
                                "ApiName": "MT_CD_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Input/Output diagram",
                                "TypeNumber": 79,
                                "ApiName": "MT_IN_OUT_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Knowledge structure diagram",
                                "TypeNumber": 80,
                                "ApiName": "MT_KNW_STRC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Knowledge map",
                                "TypeNumber": 81,
                                "ApiName": "MT_KNW_MAP",
                                "Type": "Default"
                            },
                            {
                                "Name": "UML Class description diagram",
                                "TypeNumber": 82,
                                "ApiName": "MT_UML_CLS_DESC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Product/Service tree",
                                "TypeNumber": 83,
                                "ApiName": "MT_PROD_SER_TREE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Product/Service exchange diagram",
                                "TypeNumber": 84,
                                "ApiName": "MT_PROD_SER_EXCH_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Structuring model",
                                "TypeNumber": 85,
                                "ApiName": "MT_STRC_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "EPC (column display)",
                                "TypeNumber": 86,
                                "ApiName": "MT_EPC_COL_DPLY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Program flow chart (PF)",
                                "TypeNumber": 87,
                                "ApiName": "MT_PRG_FLOW_CHRT_PF",
                                "Type": "Default"
                            },
                            {
                                "Name": "EPC (row display)",
                                "TypeNumber": 88,
                                "ApiName": "MT_EPC_ROW_DPLY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Process selection diagram",
                                "TypeNumber": 89,
                                "ApiName": "MT_PROC_SEL_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Authorization map",
                                "TypeNumber": 90,
                                "ApiName": "MT_AUTH_MAP",
                                "Type": "Default"
                            },
                            {
                                "Name": "Authorization hierarchy",
                                "TypeNumber": 91,
                                "ApiName": "MT_AUTH_HIER",
                                "Type": "Default"
                            },
                            {
                                "Name": "Role diagram",
                                "TypeNumber": 92,
                                "ApiName": "MT_ROLE_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "E-Business scenario diagram",
                                "TypeNumber": 93,
                                "ApiName": "MT_E_BUS_SCN_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "KPI allocation diagram",
                                "TypeNumber": 94,
                                "ApiName": "MT_KPI_ALLOC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "DW structure",
                                "TypeNumber": 95,
                                "ApiName": "MT_DW_STRC",
                                "Type": "Default"
                            },
                            {
                                "Name": "DW transformation",
                                "TypeNumber": 96,
                                "ApiName": "MT_DW_TRNS",
                                "Type": "Default"
                            },
                            {
                                "Name": "EPC (table display)",
                                "TypeNumber": 97,
                                "ApiName": "MT_EPC_TBL_DPLY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Input/Output diagram (inverse)",
                                "TypeNumber": 98,
                                "ApiName": "MT_IN_OUT_DGM_INV",
                                "Type": "Default"
                            },
                            {
                                "Name": "RAD",
                                "TypeNumber": 99,
                                "ApiName": "MT_RAD",
                                "Type": "Default"
                            },
                            {
                                "Name": "Quick model",
                                "TypeNumber": 100,
                                "ApiName": "MT_QUICK_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "DTD",
                                "TypeNumber": 101,
                                "ApiName": "MT_DTD",
                                "Type": "Default"
                            },
                            {
                                "Name": "c3 method",
                                "TypeNumber": 102,
                                "ApiName": "MT_C3_MTHD",
                                "Type": "Default"
                            },
                            {
                                "Name": "Risk diagram",
                                "TypeNumber": 103,
                                "ApiName": "MT_RISK_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Screen design",
                                "TypeNumber": 104,
                                "ApiName": "MT_SCREEN_DESIGN",
                                "Type": "Default"
                            },
                            {
                                "Name": "Screen navigation",
                                "TypeNumber": 105,
                                "ApiName": "MT_SCREEN_NAV",
                                "Type": "Default"
                            },
                            {
                                "Name": "Service architecture diagram",
                                "TypeNumber": 106,
                                "ApiName": "MT_SER_ARCH_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Service architecture diagram (column display)",
                                "TypeNumber": 107,
                                "ApiName": "MT_SER_ARCH_DGM_COL_DPLY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Application system type diagram (column display)",
                                "TypeNumber": 108,
                                "ApiName": "MT_APP_SYS_TYP_DGM_COL_DPLY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Service allocation diagram",
                                "TypeNumber": 109,
                                "ApiName": "MT_SER_ALLOC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "EPC (horizontal table display)",
                                "TypeNumber": 110,
                                "ApiName": "MT_EPC_HOR_TBL_DPLY",
                                "Type": "Default"
                            },
                            {
                                "Name": "SAP functions mapping (Solution Manager)",
                                "TypeNumber": 111,
                                "ApiName": "MT_SAP_FUNC_MAP_SM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Functions mapping (Solution Manager)",
                                "TypeNumber": 112,
                                "ApiName": "MT_FUNC_MAP_SM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Business segment matrix",
                                "TypeNumber": 113,
                                "ApiName": "MT_BUS_SEG_MTRX",
                                "Type": "Default"
                            },
                            {
                                "Name": "BPMN process diagram (BPMN 1.x)",
                                "TypeNumber": 114,
                                "ApiName": "MT_BPMN_PROC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "SAP integration process (XI)",
                                "TypeNumber": 115,
                                "ApiName": "MT_SAP_INT_PROC_XI",
                                "Type": "Default"
                            },
                            {
                                "Name": "Swimlane tree",
                                "TypeNumber": 116,
                                "ApiName": "MT_SWIM_TREE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Service collaboration diagram",
                                "TypeNumber": 117,
                                "ApiName": "MT_SER_COL_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Process support map",
                                "TypeNumber": 118,
                                "ApiName": "MT_PROC_SUPP_MAP",
                                "Type": "Default"
                            },
                            {
                                "Name": "SAP allocation diagram",
                                "TypeNumber": 119,
                                "ApiName": "MT_SAP_ALLOC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "IT architecture mapping",
                                "TypeNumber": 120,
                                "ApiName": "MT_IT_ARCH_MAP",
                                "Type": "Default"
                            },
                            {
                                "Name": "IT architecture matrix",
                                "TypeNumber": 121,
                                "ApiName": "MT_IT_ARCH_MTRX",
                                "Type": "Default"
                            },
                            {
                                "Name": "BPMN allocation diagram (BPMN 1.x)",
                                "TypeNumber": 122,
                                "ApiName": "MT_BPMN_ALLOC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "SAP organizational elements mapping",
                                "TypeNumber": 123,
                                "ApiName": "MT_SAP_ORG_ELM_MAP",
                                "Type": "Default"
                            },
                            {
                                "Name": "Matrix model",
                                "TypeNumber": 124,
                                "ApiName": "MT_MTRX_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Process schedule",
                                "TypeNumber": 125,
                                "ApiName": "MT_PROC_SCH",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transformation",
                                "TypeNumber": 126,
                                "ApiName": "MT_TRNS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Mapping model",
                                "TypeNumber": 127,
                                "ApiName": "MT_MAP_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "XML model",
                                "TypeNumber": 128,
                                "ApiName": "MT_XML_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Schedule",
                                "TypeNumber": 129,
                                "ApiName": "MT_SCH",
                                "Type": "Default"
                            },
                            {
                                "Name": "Composite schedule",
                                "TypeNumber": 130,
                                "ApiName": "MT_COMP_SCH",
                                "Type": "Default"
                            },
                            {
                                "Name": "Project schedule",
                                "TypeNumber": 131,
                                "ApiName": "MT_PRJ_SCH",
                                "Type": "Default"
                            },
                            {
                                "Name": "Work breakdown structure",
                                "TypeNumber": 132,
                                "ApiName": "MT_WRK_BRK_STRC",
                                "Type": "Default"
                            },
                            {
                                "Name": "Requirements tree",
                                "TypeNumber": 133,
                                "ApiName": "MT_REQ_TREE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Requirement allocation diagram",
                                "TypeNumber": 134,
                                "ApiName": "MT_REQ_ALLOC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Data flow diagram",
                                "TypeNumber": 135,
                                "ApiName": "MT_DATA_FLOW_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transformation profile model",
                                "TypeNumber": 136,
                                "ApiName": "MT_TRNS_PROF_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "BPMN allocation diagram (2.0 beta)",
                                "TypeNumber": 137,
                                "ApiName": "MT_BPMN_ALLOC_DGM_2",
                                "Type": "Default"
                            },
                            {
                                "Name": "Whiteboard",
                                "TypeNumber": 138,
                                "ApiName": "MT_WHITEBOARD",
                                "Type": "Default"
                            },
                        ]
                    },
                    // Model Type Tables Start
                    {
                        "name": "Organizational chart",
                        "id": "MT_ORG_CHRT",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Screen diagram",
                        "id": "MT_SCRN_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Network topology",
                        "id": "MT_NW_TOPLG",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Network diagram",
                        "id": "MT_NW_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "eERM",
                        "id": "MT_EERM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "SAP SERM",
                        "id": "MT_SAP_SERM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "eERM attribute allocation diagram",
                        "id": "MT_EERM_ATTR_ALLOC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Relations diagram",
                        "id": "MT_REL_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Attribute allocation diagram",
                        "id": "MT_ATTR_ALLOC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Table diagram",
                        "id": "MT_TBL_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Value-added chain diagram",
                        "id": "MT_VAL_ADD_CHN_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "EPC",
                        "id": "MT_EPC",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Function allocation diagram",
                        "id": "MT_FUNC_ALLOC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Information flow diagram",
                        "id": "MT_INFO_FLOW_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Access diagram",
                        "id": "MT_ACS_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Access diagram (physical)",
                        "id": "MT_ACS_DGM_PHYs",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "PCD",
                        "id": "MT_PCD",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Function tree",
                        "id": "MT_FUNC_TREE",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Application system type diagram",
                        "id": "MT_APP_SYS_TYP_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Tecnical terms model",
                        "id": "MT_TEC_TERMS_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Event diagram",
                        "id": "MT_EVNT_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Rule diagram",
                        "id": "MT_RULE_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Function organizational level diagram",
                        "id": "MT_FUNC_ORG_LVL_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Process selection matrix",
                        "id": "MT_PROC_SEL_MTRX",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Y diagram",
                        "id": "MT_Y_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "SAP application diagram",
                        "id": "MT_SAP_APP_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Classfication diagram",
                        "id": "MT_CLSF_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Objective diagram",
                        "id": "MT_OBJ_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Application system diagram",
                        "id": "MT_APP_SYS_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "OMT Object model",
                        "id": "MT_OMT_OBJ_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "OMT Dynamic model",
                        "id": "MT_OMT_DYN_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "OMT Functional model",
                        "id": "MT_OMT_FUNC_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "E Data model",
                        "id": "MT_E_DATA_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "OMT Data value decomposition",
                        "id": "MT_OMT_DATA_VAL_DCMPS",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Class diagram",
                        "id": "MT_CLS_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "System attributes",
                        "id": "MT_SYS_ATTRS",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "System attribute domain",
                        "id": "MT_SYS_ATTRS_DOM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "SeDaM model",
                        "id": "MT_SEDAM_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Technical resources",
                        "id": "MT_TEC_RCS",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Material diagram",
                        "id": "MT_MTRL_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "EPC (material flow)",
                        "id": "MT_EPC_MTRL_FLOW",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "PCD (material flow)",
                        "id": "MT_PCD_MTRL_FLOW",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Communications diagram",
                        "id": "MT_COMM_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Program flow chart",
                        "id": "MT_PRG_FLOW_CHRT",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Cost category diagram",
                        "id": "MT_CST_CAT_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "OMT Class description model",
                        "id": "MT_OMT_CLS_DESC_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "RAMS",
                        "id": "MT_RAMS",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "SAP ALE function model",
                        "id": "MT_SAP_ALE_FUNC_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "SAP ALE filter model",
                        "id": "MT_SAP_ALE_FLTR_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "SAP ALE message flow model",
                        "id": "MT_SAP_ALE_MSG_FLOW_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "SAP ALE message type model",
                        "id": "MT_SAP_ALE_MSG_TYP_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "EPC (instance)",
                        "id": "MT_EPC_INST",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Material flow diagram",
                        "id": "MT_MTRL_FLOW_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "PPC",
                        "id": "MT_PPC",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Information carrier diagram",
                        "id": "MT_INFO_CRR_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Task allocation diagram",
                        "id": "MT_TSK_ALLOC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Privileges diagram",
                        "id": "MT_PRIV_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Event diagram (instance)",
                        "id": "MT_EVNT_DGM_INST",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Business controls diagram",
                        "id": "MT_BUS_CTRL_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Product/Service exchange diagram (graphic)",
                        "id": "MT_PROD_EXCH_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Product/Service tree (graphic)",
                        "id": "MT_PROD_TREE_GRAPHIC",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Product tree",
                        "id": "MT_PROD_TREE",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Product selection matrix",
                        "id": "MT_PROD_SEL_MTRX",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Office process",
                        "id": "MT_OFFICE_PROC",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Product allocation diagram",
                        "id": "MT_PROD_ALLOC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Competition model",
                        "id": "MT_COMP_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Industrial process",
                        "id": "MT_IND_PROC",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Process instantiation model",
                        "id": "MT_PROC_INST_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Shift calendar",
                        "id": "MT_SHIFT_CAL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "CD Diagram",
                        "id": "MT_CD_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Input/Output diagram",
                        "id": "MT_IN_OUT_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Knowledge structure diagram",
                        "id": "MT_KNW_STRC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Knowledge map",
                        "id": "MT_KNW_MAP",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "UML Class description diagram",
                        "id": "MT_UML_CLS_DESC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Product/Service tree",
                        "id": "MT_PROD_SER_TREE",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Product/Service exchange diagram",
                        "id": "MT_PROD_SER_EXCH_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Structuring model",
                        "id": "MT_STRC_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "EPC (column display)",
                        "id": "MT_EPC_COL_DPLY",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Program flow chart (PF)",
                        "id": "MT_PRG_FLOW_CHRT_PF",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "EPC (row display)",
                        "id": "MT_EPC_ROW_DPLY",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Process selection diagram",
                        "id": "MT_PROC_SEL_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Authorization map",
                        "id": "MT_AUTH_MAP",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Authorization hierarchy",
                        "id": "MT_AUTH_HIER",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Role diagram",
                        "id": "MT_ROLE_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "E-Business scenario diagram",
                        "id": "MT_E_BUS_SCN_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "KPI allocation diagram",
                        "id": "MT_KPI_ALLOC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "DW structure",
                        "id": "MT_DW_STRC",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "DW transformation",
                        "id": "MT_DW_TRNS",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "EPC (table display)",
                        "id": "MT_EPC_TBL_DPLY",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Input/Output diagram (inverse)",
                        "id": "MT_IN_OUT_DGM_INV",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "RAD",
                        "id": "MT_RAD",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Quick model",
                        "id": "MT_QUICK_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "DTD",
                        "id": "MT_DTD",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "c3 method",
                        "id": "MT_C3_MTHD",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Risk diagram",
                        "id": "MT_RISK_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Screen design",
                        "id": "MT_SCREEN_DESIGN",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Screen navigation",
                        "id": "MT_SCREEN_NAV",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Service architecture diagram",
                        "id": "MT_SER_ARCH_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Service architecture diagram (column display)",
                        "id": "MT_SER_ARCH_DGM_COL_DPLY",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Application system type diagram (column display)",
                        "id": "MT_APP_SYS_TYP_DGM_COL_DPLY",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Service allocation diagram",
                        "id": "MT_SER_ALLOC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "EPC (horizontal table display)",
                        "id": "MT_EPC_HOR_TBL_DPLY",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "SAP functions mapping (Solution Manager)",
                        "id": "MT_SAP_FUNC_MAP_SM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Functions mapping (Solution Manager)",
                        "id": "MT_FUNC_MAP_SM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Business segment matrix",
                        "id": "MT_BUS_SEG_MTRX",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "BPMN process diagram (BPMN 1.x)",
                        "id": "MT_BPMN_PROC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "SAP integration process (XI)",
                        "id": "MT_SAP_INT_PROC_XI",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Swimlane tree",
                        "id": "MT_SWIM_TREE",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Service collaboration diagram",
                        "id": "MT_SER_COL_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Process support map",
                        "id": "MT_PROC_SUPP_MAP",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "SAP allocation diagram",
                        "id": "MT_SAP_ALLOC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "IT architecture mapping",
                        "id": "MT_IT_ARCH_MAP",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "IT architecture matrix",
                        "id": "MT_IT_ARCH_MTRX",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "BPMN allocation diagram (BPMN 1.x)",
                        "id": "MT_BPMN_ALLOC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "SAP organizational elements mapping",
                        "id": "MT_SAP_ORG_ELM_MAP",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Matrix model",
                        "id": "MT_MTRX_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Process schedule",
                        "id": "MT_PROC_SCH",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Transformation",
                        "id": "MT_TRNS",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Mapping model",
                        "id": "MT_MAP_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "XML model",
                        "id": "MT_XML_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Schedule",
                        "id": "MT_SCH",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Composite schedule",
                        "id": "MT_COMP_SCH",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Project schedule",
                        "id": "MT_PRJ_SCH",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Work breakdown structure",
                        "id": "MT_WRK_BRK_STRC",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Requirements tree",
                        "id": "MT_REQ_TREE",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Requirement allocation diagram",
                        "id": "MT_REQ_ALLOC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Data flow diagram",
                        "id": "MT_DATA_FLOW_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Transformation profile model",
                        "id": "MT_TRNS_PROF_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "BPMN allocation diagram (2.0 beta)",
                        "id": "MT_BPMN_ALLOC_DGM_2",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Whiteboard",
                        "id": "MT_WHITEBOARD",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    // Model Type Tables End
                    {
                        "name": "Object Types",
                        "id": "object_types",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            },
                            {
                                "key": "OrginalName",
                                "type": "string"
                            },
                            {
                                "key": "TypeNumber",
                                "type": "number"
                            },
                            {
                                "key": "ApiName",
                                "type": "string"
                            },
                            {
                                "key": "Type",
                                "type": "string"
                            },
                        ],
                        "documents": [
                            {
                                "Name": "Action",
                                "TypeNumber": 1,
                                "ApiName": "OT_ACTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Activity graph",
                                "TypeNumber": 2,
                                "ApiName": "OT_ACT_GRAPH",
                                "Type": "Default"
                            },
                            {
                                "Name": "Actor",
                                "TypeNumber": 3,
                                "ApiName": "OT_ACTOR",
                                "Type": "Default"
                            },
                            {
                                "Name": "Application system",
                                "TypeNumber": 4,
                                "ApiName": "OT_APP_SYS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Application system class",
                                "TypeNumber": 5,
                                "ApiName": "OT_APP_SYS_CLS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Application system type",
                                "TypeNumber": 6,
                                "ApiName": "OT_APP_SYS_TYP",
                                "Type": "Default"
                            },
                            {
                                "Name": "Architecture element",
                                "TypeNumber": 7,
                                "ApiName": "OT_ARCH_ELEM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Argument",
                                "TypeNumber": 8,
                                "ApiName": "OT_ARGUMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Artifact",
                                "TypeNumber": 9,
                                "ApiName": "OT_ARTIFACT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Association",
                                "TypeNumber": 10,
                                "ApiName": "OT_ASSOCIATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Association class",
                                "TypeNumber": 11,
                                "ApiName": "OT_ASSOCIATION_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Association instance",
                                "TypeNumber": 12,
                                "ApiName": "OT_ASSOCIATION_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Association role",
                                "TypeNumber": 13,
                                "ApiName": "OT_ASSOCIATION_ROLE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Attribute",
                                "TypeNumber": 14,
                                "ApiName": "OT_ATTRIBUTE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Attribute link",
                                "TypeNumber": 15,
                                "ApiName": "OT_ATTRIBUTE_LINK",
                                "Type": "Default"
                            },
                            {
                                "Name": "Attribute type",
                                "TypeNumber": 16,
                                "ApiName": "OT_ATTRIBUTE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Attribute type group",
                                "TypeNumber": 17,
                                "ApiName": "OT_ATTRIBUTE_TYPE_GROUP",
                                "Type": "Default"
                            },
                            {
                                "Name": "Authorization condition",
                                "TypeNumber": 18,
                                "ApiName": "OT_AUTH_COND",
                                "Type": "Default"
                            },
                            {
                                "Name": "Bitmap",
                                "TypeNumber": 18,
                                "ApiName": "OT_AUTH_COND",
                                "Type": "Default"
                            },
                            {
                                "Name": "Break",
                                "TypeNumber": 18,
                                "ApiName": "OT_AUTH_COND",
                                "Type": "Default"
                            },
                            {
                                "Name": "Business object",
                                "TypeNumber": 19,
                                "ApiName": "OT_BUSINESS_OBJECT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Business rule",
                                "TypeNumber": 20,
                                "ApiName": "OT_BUSINESS_RULE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Business segment",
                                "TypeNumber": 21,
                                "ApiName": "OT_BUSINESS_SEGMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Button",
                                "TypeNumber": 22,
                                "ApiName": "OT_BUTTON",
                                "Type": "Default"
                            },
                            {
                                "Name": "Calendar event",
                                "TypeNumber": 23,
                                "ApiName": "OT_CALENDAR_EVENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Capability",
                                "TypeNumber": 24,
                                "ApiName": "OT_CAPABILITY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Capability",
                                "TypeNumber": 25,
                                "ApiName": "OT_CAPABILITY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Class",
                                "TypeNumber": 26,
                                "ApiName": "OT_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Classification criterion",
                                "TypeNumber": 27,
                                "ApiName": "OT_CLASSIFICATION_CRITERION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Classifier-in-state",
                                "TypeNumber": 28,
                                "ApiName": "OT_CLASSIFICATION_CRITERION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Classifier role",
                                "TypeNumber": 29,
                                "ApiName": "OT_CLASSIFIER_ROLE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Cluster instance",
                                "TypeNumber": 30,
                                "ApiName": "OT_CLUSTER_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Cluster/Data model",
                                "TypeNumber": 31,
                                "ApiName": "OT_CLUSTER_DATA_MODEL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Collaboration",
                                "TypeNumber": 32,
                                "ApiName": "OT_COLLABORATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Collaboration instance set",
                                "TypeNumber": 33,
                                "ApiName": "OT_COLLABORATION_INST_SET",
                                "Type": "Default"
                            },
                            {
                                "Name": "Column",
                                "TypeNumber": 34,
                                "ApiName": "OT_COLLABORATION_INST_SET",
                                "Type": "Default"
                            },
                            {
                                "Name": "Combo box",
                                "TypeNumber": 35,
                                "ApiName": "OT_COMBO_BOX",
                                "Type": "Default"
                            },
                            {
                                "Name": "Communication",
                                "TypeNumber": 36,
                                "ApiName": "OT_COMMUNICATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Complex object",
                                "TypeNumber": 37,
                                "ApiName": "OT_COMPLEX_OBJECT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Complex object type",
                                "TypeNumber": 38,
                                "ApiName": "OT_COMPLEX_OBJECT_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Component",
                                "TypeNumber": 39,
                                "ApiName": "OT_COMPONENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Component instance",
                                "TypeNumber": 40,
                                "ApiName": "OT_COMPONENT_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Conditional section",
                                "TypeNumber": 41,
                                "ApiName": "OT_CONDITIONAL_SECTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Connector",
                                "TypeNumber": 42,
                                "ApiName": "OT_CONNECTOR",
                                "Type": "Default"
                            },
                            {
                                "Name": "Constant",
                                "TypeNumber": 43,
                                "ApiName": "OT_CONSTANT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Constraint",
                                "TypeNumber": 44,
                                "ApiName": "OT_CONSTRAINT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Contents",
                                "TypeNumber": 45,
                                "ApiName": "OT_CONTENTS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Context information",
                                "TypeNumber": 46,
                                "ApiName": "OT_CONTEXT_INFO",
                                "Type": "Default"
                            },
                            {
                                "Name": "Conversation",
                                "TypeNumber": 47,
                                "ApiName": "OT_CONVERSATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Cost category",
                                "TypeNumber": 48,
                                "ApiName": "OT_COST_CATEGORY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Cost driver",
                                "TypeNumber": 49,
                                "ApiName": "OT_COST_DRIVER",
                                "Type": "Default"
                            },
                            {
                                "Name": "COT attribute",
                                "TypeNumber": 50,
                                "ApiName": "OT_COT_ATTRIBUTE",
                                "Type": "Default"
                            },
                            {
                                "Name": "COT attribute (instance)",
                                "TypeNumber": 51,
                                "ApiName": "OT_COT_ATTRIBUTE_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Critical factor",
                                "TypeNumber": 52,
                                "ApiName": "OT_CRITICAL_FACTOR",
                                "Type": "Default"
                            },
                            {
                                "Name": "Data store",
                                "TypeNumber": 53,
                                "ApiName": "OT_DATA_STORE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Data value",
                                "TypeNumber": 54,
                                "ApiName": "OT_DATA_STORE",
                                "Type": "Default"
                            },
                            {
                                "Name": "DBMS",
                                "TypeNumber": 55,
                                "ApiName": "OT_DBMS",
                                "Type": "Default"
                            },
                            {
                                "Name": "DBMS type",
                                "TypeNumber": 56,
                                "ApiName": "OT_DBMS_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Deployment unit",
                                "TypeNumber": 57,
                                "ApiName": "OT_DEPLOYMENT_UNIT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Distribution channel",
                                "TypeNumber": 58,
                                "ApiName": "OT_DISTRIBUTION_CHANNEL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Documented knowledge",
                                "TypeNumber": 59,
                                "ApiName": "OT_DOCUMENTED_KNOWLEDGE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Domain",
                                "TypeNumber": 60,
                                "ApiName": "OT_DOMAIN",
                                "Type": "Default"
                            },
                            {
                                "Name": "Domain (physical)",
                                "TypeNumber": 61,
                                "ApiName": "OT_DOMAIN_PHYSICAL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Draft list",
                                "TypeNumber": 62,
                                "ApiName": "OT_DRAFT_LIST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Element",
                                "TypeNumber": 63,
                                "ApiName": "OT_ELEMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Element type",
                                "TypeNumber": 64,
                                "ApiName": "OT_ELEMENT_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Employee variable",
                                "TypeNumber": 65,
                                "ApiName": "OT_EMPLOYEE_VARIABLE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Entity",
                                "TypeNumber": 66,
                                "ApiName": "OT_ENTITY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Entity type",
                                "TypeNumber": 67,
                                "ApiName": "OT_ENTITY_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Enumeration",
                                "TypeNumber": 68,
                                "ApiName": "OT_ENUMERATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Enumeration attribute type",
                                "TypeNumber": 69,
                                "ApiName": "OT_ENUMERATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Enumeration literal",
                                "TypeNumber": 70,
                                "ApiName": "OT_ENUMERATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Enumeration occurrence",
                                "TypeNumber": 71,
                                "ApiName": "OT_ENUMERATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "ERM attribute",
                                "TypeNumber": 72,
                                "ApiName": "OT_ERM_ATTRIBUTE",
                                "Type": "Default"
                            },
                            {
                                "Name": "ERM attribute instance",
                                "TypeNumber": 73,
                                "ApiName": "OT_ERM_ATTRIBUTE_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "ERM domain",
                                "TypeNumber": 74,
                                "ApiName": "OT_ERM_DOMAIN",
                                "Type": "Default"
                            },
                            {
                                "Name": "Event",
                                "TypeNumber": 75,
                                "ApiName": "OT_EVENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Event instance",
                                "TypeNumber": 76,
                                "ApiName": "OT_EVENT_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Exception",
                                "TypeNumber": 77,
                                "ApiName": "OT_EXCEPTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Extension point",
                                "TypeNumber": 78,
                                "ApiName": "OT_EXTENSION_POINT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Field",
                                "TypeNumber": 79,
                                "ApiName": "OT_FIELD",
                                "Type": "Default"
                            },
                            {
                                "Name": "Field (specimen)",
                                "TypeNumber": 80,
                                "ApiName": "OT_FIELD",
                                "Type": "Default"
                            },
                            {
                                "Name": "Filter object type",
                                "TypeNumber": 81,
                                "ApiName": "OT_FILTER_OBJECT_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Function",
                                "TypeNumber": 82,
                                "ApiName": "OT_FUNCTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Gate",
                                "TypeNumber": 83,
                                "ApiName": "OT_GATE",
                                "Type": "Default"
                            },
                            {
                                "Name": "General resource",
                                "TypeNumber": 84,
                                "ApiName": "OT_GENERAL_RESOURCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Generalization type",
                                "TypeNumber": 85,
                                "ApiName": "OT_GENERAL_RESOURCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Graphical user interface type",
                                "TypeNumber": 86,
                                "ApiName": "OT_GRAPHICAL_USER_INTERFACE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Group",
                                "TypeNumber": 87,
                                "ApiName": "OT_GROUP",
                                "Type": "Default"
                            },
                            {
                                "Name": "Hardware component",
                                "TypeNumber": 88,
                                "ApiName": "OT_HARDWARE_COMPONENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Hardware component class",
                                "TypeNumber": 84,
                                "ApiName": "OT_HARDWARE_COMPONENT_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Hardware component type",
                                "TypeNumber": 85,
                                "ApiName": "OT_HARDWARE_COMPONENT_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Improvement potential",
                                "TypeNumber": 85,
                                "ApiName": "OT_IMP_POTENTIAL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Index",
                                "TypeNumber": 85,
                                "ApiName": "OT_HINDEX",
                                "Type": "Default"
                            },
                            {
                                "Name": "Information carrier",
                                "TypeNumber": 86,
                                "ApiName": "OT_INFO_CARRIER",
                                "Type": "Default"
                            },
                            {
                                "Name": "Information flow",
                                "TypeNumber": 87,
                                "ApiName": "OT_INFO_FLOW",
                                "Type": "Default"
                            },
                            {
                                "Name": "Instantiation cycle",
                                "TypeNumber": 88,
                                "ApiName": "OT_INST_CYCLE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Instantiation interval",
                                "TypeNumber": 89,
                                "ApiName": "OT_INST_INTERVAL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Instantiation plan",
                                "TypeNumber": 90,
                                "ApiName": "OT_INST_PLAN",
                                "Type": "Default"
                            },
                            {
                                "Name": "Interaction instance set",
                                "TypeNumber": 91,
                                "ApiName": "OT_INTERACTION_INST_SET",
                                "Type": "Default"
                            },
                            {
                                "Name": "IS service",
                                "TypeNumber": 92,
                                "ApiName": "OT_IS_SERVICE",
                                "Type": "Default"
                            },
                            {
                                "Name": "IT function",
                                "TypeNumber": 93,
                                "ApiName": "OT_IT_FUNCTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "IT function class",
                                "TypeNumber": 94,
                                "ApiName": "OT_IT_FUNCTION_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "IT function type",
                                "TypeNumber": 95,
                                "ApiName": "OT_IT_FUNCTION_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Knowledge category",
                                "TypeNumber": 96,
                                "ApiName": "OT_KNOWLEDGE_CATEGORY",
                                "Type": "Default"
                            },
                            {
                                "Name": "KPI instance",
                                "TypeNumber": 97,
                                "ApiName": "OT_KPI_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Lane",
                                "TypeNumber": 98,
                                "ApiName": "OT_LANE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Layout",
                                "TypeNumber": 99,
                                "ApiName": "OT_LAYOUT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Link object",
                                "TypeNumber": 100,
                                "ApiName": "OT_LINK_OBJECT",
                                "Type": "Default"
                            },
                            {
                                "Name": "List",
                                "TypeNumber": 101,
                                "ApiName": "OT_LIST",
                                "Type": "Default"
                            },
                            {
                                "Name": "List control",
                                "TypeNumber": 102,
                                "ApiName": "OT_LIST_CONTROL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Location",
                                "TypeNumber": 103,
                                "ApiName": "OT_LOCATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Loop start",
                                "TypeNumber": 104,
                                "ApiName": "OT_LOOP_START",
                                "Type": "Default"
                            },
                            {
                                "Name": "Main process",
                                "TypeNumber": 105,
                                "ApiName": "OT_MAIN_PROCESS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Marketing instrument",
                                "TypeNumber": 106,
                                "ApiName": "OT_MARKETING_INSTRUMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Material class",
                                "TypeNumber": 106,
                                "ApiName": "OT_MARKETING_INSTRUMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Material flow",
                                "TypeNumber": 107,
                                "ApiName": "OT_MATERIAL_FLOW",
                                "Type": "Default"
                            },
                            {
                                "Name": "Material type",
                                "TypeNumber": 108,
                                "ApiName": "OT_MATERIAL_FLOW",
                                "Type": "Default"
                            },
                            {
                                "Name": "Measurement unit",
                                "TypeNumber": 109,
                                "ApiName": "OT_MEASUREMENT_UNIT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Measurement unit number",
                                "TypeNumber": 110,
                                "ApiName": "OT_MEASUREMENT_UNIT_NUMBER",
                                "Type": "Default"
                            },
                            {
                                "Name": "Memory location",
                                "TypeNumber": 111,
                                "ApiName": "OT_MEMORY_LOCATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Message",
                                "TypeNumber": 112,
                                "ApiName": "OT_MESSAGE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Message type",
                                "TypeNumber": 113,
                                "ApiName": "OT_MESSAGE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Module",
                                "TypeNumber": 114,
                                "ApiName": "OT_MODULE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Module class",
                                "TypeNumber": 115,
                                "ApiName": "OT_MODULE_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Module type",
                                "TypeNumber": 116,
                                "ApiName": "OT_MODULE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Need",
                                "TypeNumber": 117,
                                "ApiName": "OT_NEED",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network",
                                "TypeNumber": 118,
                                "ApiName": "OT_NETWORK",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network class",
                                "TypeNumber": 119,
                                "ApiName": "OT_NETWORK_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network connection",
                                "TypeNumber": 120,
                                "ApiName": "OT_NETWORK_CONNECTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network connection class",
                                "TypeNumber": 121,
                                "ApiName": "OT_NETWORK_CONNECTION_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network connection type",
                                "TypeNumber": 122,
                                "ApiName": "OT_NETWORK_CONNECTION_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network node",
                                "TypeNumber": 123,
                                "ApiName": "OT_NETWORK_NODE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network node class",
                                "TypeNumber": 124,
                                "ApiName": "OT_NETWORK_NODE_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network node type",
                                "TypeNumber": 125,
                                "ApiName": "OT_NETWORK_NODE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network type",
                                "TypeNumber": 126,
                                "ApiName": "OT_NETWORK_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Note",
                                "TypeNumber": 127,
                                "ApiName": "OT_NOTE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Object element",
                                "TypeNumber": 128,
                                "ApiName": "OT_OBJECT_ELEMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Object instance",
                                "TypeNumber": 129,
                                "ApiName": "OT_OBJECT_INSTANCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Object type class",
                                "TypeNumber": 130,
                                "ApiName": "OT_OBJECT_TYPE_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Objective",
                                "TypeNumber": 131,
                                "ApiName": "OT_OBJECTIVE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Operating resource",
                                "TypeNumber": 132,
                                "ApiName": "OT_OPERATING_RESOURCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Operating resource class",
                                "TypeNumber": 133,
                                "ApiName": "OT_OPERATING_RESOURCE_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Operating resource type",
                                "TypeNumber": 134,
                                "ApiName": "OT_OPERATING_RESOURCE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Operating system",
                                "TypeNumber": 135,
                                "ApiName": "OT_OPERATING_SYSTEM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Operating system type",
                                "TypeNumber": 136,
                                "ApiName": "OT_OPERATING_SYSTEM_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Operation",
                                "TypeNumber": 137,
                                "ApiName": "OT_OPERATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Operator",
                                "TypeNumber": 138,
                                "ApiName": "OT_OPERATOR",
                                "Type": "Default"
                            },
                            {
                                "Name": "Organizational chart",
                                "TypeNumber": 139,
                                "ApiName": "OT_ORGANIZATIONAL_CHART",
                                "Type": "Default"
                            },
                            {
                                "Name": "Organizational level",
                                "TypeNumber": 140,
                                "ApiName": "OT_ORGANIZATIONAL_LEVEL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Organizational unit",
                                "TypeNumber": 141,
                                "ApiName": "OT_ORGANIZATIONAL_UNIT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Organizational unit type",
                                "TypeNumber": 142,
                                "ApiName": "OT_ORGANIZATIONAL_UNIT_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Package",
                                "TypeNumber": 143,
                                "ApiName": "OT_PACKAGE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Packaging material class",
                                "TypeNumber": 144,
                                "ApiName": "OT_PACKAGING_MATERIAL_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Packaging material type",
                                "TypeNumber": 145,
                                "ApiName": "OT_PACKAGING_MATERIAL_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Page",
                                "TypeNumber": 146,
                                "ApiName": "OT_PAGE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Panel",
                                "TypeNumber": 147,
                                "ApiName": "OT_PANEL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Parameter",
                                "TypeNumber": 148,
                                "ApiName": "OT_PANEL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Participant",
                                "TypeNumber": 149,
                                "ApiName": "OT_PARTICIPANT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Partition",
                                "TypeNumber": 150,
                                "ApiName": "OT_PARTITION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Partner link",
                                "TypeNumber": 151,
                                "ApiName": "OT_PARTNER_LINK",
                                "Type": "Default"
                            },
                            {
                                "Name": "Person",
                                "TypeNumber": 152,
                                "ApiName": "OT_PERSON",
                                "Type": "Default"
                            },
                            {
                                "Name": "Person type",
                                "TypeNumber": 153,
                                "ApiName": "OT_PERSON_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Position",
                                "TypeNumber": 154,
                                "ApiName": "OT_POSITION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Process",
                                "TypeNumber": 155,
                                "ApiName": "OT_PROCESS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Process component",
                                "TypeNumber": 156,
                                "ApiName": "OT_PROCESS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Process support unit",
                                "TypeNumber": 157,
                                "ApiName": "OT_PROCESS_SUPPORT_UNIT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Product/Service",
                                "TypeNumber": 158,
                                "ApiName": "OT_PRODUCT_SERVICE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Product/Service characteristic",
                                "TypeNumber": 159,
                                "ApiName": "OT_PRODUCT_SERVICE_CHARACTERISTIC",
                                "Type": "Default"
                            },
                            {
                                "Name": "Profile",
                                "TypeNumber": 160,
                                "ApiName": "OT_PROFILE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Program library",
                                "TypeNumber": 161,
                                "ApiName": "OT_PROGRAM_LIBRARY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Program module",
                                "TypeNumber": 162,
                                "ApiName": "OT_PROGRAM_MODULE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Program module type",
                                "TypeNumber": 163,
                                "ApiName": "OT_PROGRAM_MODULE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Programming language",
                                "TypeNumber": 164,
                                "ApiName": "OT_PROGRAMMING_LANGUAGE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Protocol",
                                "TypeNumber": 165,
                                "ApiName": "OT_PROTOCOL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Quick object",
                                "TypeNumber": 166,
                                "ApiName": "OT_QUICK_OBJECT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Radio button/Check box",
                                "TypeNumber": 167,
                                "ApiName": "OT_RADIO_BUTTON_CHECK_BOX",
                                "Type": "Default"
                            },
                            {
                                "Name": "Reception",
                                "TypeNumber": 168,
                                "ApiName": "OT_RECEPTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Relation",
                                "TypeNumber": 169,
                                "ApiName": "OT_RELATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Relationship",
                                "TypeNumber": 170,
                                "ApiName": "OT_RELATIONSHIP",
                                "Type": "Default"
                            },
                            {
                                "Name": "Relationship type",
                                "TypeNumber": 171,
                                "ApiName": "OT_RELATIONSHIP_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Requirement",
                                "TypeNumber": 172,
                                "ApiName": "OT_REQUIREMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Risk",
                                "TypeNumber": 173,
                                "ApiName": "OT_RISK",
                                "Type": "Default"
                            },
                            {
                                "Name": "Risk category",
                                "TypeNumber": 174,
                                "ApiName": "OT_RISK_CATEGORY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Rule",
                                "TypeNumber": 175,
                                "ApiName": "OT_RULE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Rule instance",
                                "TypeNumber": 176,
                                "ApiName": "OT_RULE_INSTANCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Schedule",
                                "TypeNumber": 177,
                                "ApiName": "OT_SCHEDULE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Screen",
                                "TypeNumber": 178,
                                "ApiName": "OT_SCREEN",
                                "Type": "Default"
                            },
                            {
                                "Name": "Screen design",
                                "TypeNumber": 179,
                                "ApiName": "OT_SCREEN_DESIGN",
                                "Type": "Default"
                            },
                            {
                                "Name": "Screen table",
                                "TypeNumber": 180,
                                "ApiName": "OT_SCREEN_TABLE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Section",
                                "TypeNumber": 181,
                                "ApiName": "OT_SECTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Security protocol",
                                "TypeNumber": 182,
                                "ApiName": "OT_SECURITY_PROTOCOL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Separator",
                                "TypeNumber": 183,
                                "ApiName": "OT_SEPARATOR",
                                "Type": "Default"
                            },
                            {
                                "Name": "Sequence",
                                "TypeNumber": 184,
                                "ApiName": "OT_SEQUENCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Service interface",
                                "TypeNumber": 185,
                                "ApiName": "OT_SERVICE_INTERFACE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Service request",
                                "TypeNumber": 186,
                                "ApiName": "OT_SERVICE_REQUEST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Service type",
                                "TypeNumber": 187,
                                "ApiName": "OT_SERVICE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Shift",
                                "TypeNumber": 187,
                                "ApiName": "OT_SERVICE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Shift cycle",
                                "TypeNumber": 188,
                                "ApiName": "OT_SERVICE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Shift plan",
                                "TypeNumber": 189,
                                "ApiName": "OT_SERVICE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Signal",
                                "TypeNumber": 190,
                                "ApiName": "OT_SIGNAL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Socket",
                                "TypeNumber": 191,
                                "ApiName": "OT_SOCKET",
                                "Type": "Default"
                            },
                            {
                                "Name": "Sp./gen. operator",
                                "TypeNumber": 192,
                                "ApiName": "OT_SP_GEN_OPERATOR",
                                "Type": "Default"
                            },
                            {
                                "Name": "Spin box",
                                "TypeNumber": 193,
                                "ApiName": "OT_SPIN_BOX",
                                "Type": "Default"
                            },
                            {
                                "Name": "State",
                                "TypeNumber": 194,
                                "ApiName": "OT_STATE",
                                "Type": "Default"
                            },
                            {
                                "Name": "State machine",
                                "TypeNumber": 195,
                                "ApiName": "OT_STATE_MACHINE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Stereotype",
                                "TypeNumber": 196,
                                "ApiName": "OT_STEREOTYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Structural element",
                                "TypeNumber": 197,
                                "ApiName": "OT_STRUCTURAL_ELEMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Subsystem",
                                "TypeNumber": 198,
                                "ApiName": "OT_SUBSYSTEM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Subsystem instance",
                                "TypeNumber": 199,
                                "ApiName": "OT_SUBSYSTEM_INSTANCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "System attribute",
                                "TypeNumber": 200,
                                "ApiName": "OT_SYSTEM_ATTRIBUTE",
                                "Type": "Default"
                            },
                            {
                                "Name": "System attribute domain",
                                "TypeNumber": 201,
                                "ApiName": "OT_SYSTEM_ATTRIBUTE_DOMAIN",
                                "Type": "Default"
                            },
                            {
                                "Name": "System organizational unit",
                                "TypeNumber": 202,
                                "ApiName": "OT_SYSTEM_ORGANIZATIONAL_UNIT",
                                "Type": "Default"
                            },
                            {
                                "Name": "System organizational unit type",
                                "TypeNumber": 203,
                                "ApiName": "OT_SYSTEM_ORGANIZATIONAL_UNIT_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Table",
                                "TypeNumber": 204,
                                "ApiName": "OT_TABLE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Tables (specimen)",
                                "TypeNumber": 205,
                                "ApiName": "OT_TABLES",
                                "Type": "Default"
                            },
                            {
                                "Name": "Tag definition",
                                "TypeNumber": 206,
                                "ApiName": "OT_TAG_DEFINITION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Tagged value",
                                "TypeNumber": 207,
                                "ApiName": "OT_TAGGED_VALUE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Task",
                                "TypeNumber": 208,
                                "ApiName": "OT_TASK",
                                "Type": "Default"
                            },
                            {
                                "Name": "Tech. operating supply class",
                                "TypeNumber": 209,
                                "ApiName": "OT_TECH_OPERATING_SUPPLY_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Technical operating supply",
                                "TypeNumber": 210,
                                "ApiName": "OT_TECH_OPERATING_SUPPLY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Technical operating supply type",
                                "TypeNumber": 211,
                                "ApiName": "OT_TECH_OPERATING_SUPPLY_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Technical term",
                                "TypeNumber": 212,
                                "ApiName": "OT_TECH_OPERATING_SUPPLY_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Technical terms instance",
                                "TypeNumber": 213,
                                "ApiName": "OT_TECH_OPERATING_SUPPLY_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Test definition",
                                "TypeNumber": 214,
                                "ApiName": "OT_TEST_DEFINITION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Text",
                                "TypeNumber": 215,
                                "ApiName": "OT_TEXT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Text annotation",
                                "TypeNumber": 216,
                                "ApiName": "OT_TEXT_ANNOTATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Text box",
                                "TypeNumber": 217,
                                "ApiName": "OT_TEXT_BOX",
                                "Type": "Default"
                            },
                            {
                                "Name": "Tool",
                                "TypeNumber": 218,
                                "ApiName": "OT_TOOL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transaction folder",
                                "TypeNumber": 219,
                                "ApiName": "OT_TRANSACTION_FOLDER",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transformation pattern",
                                "TypeNumber": 220,
                                "ApiName": "OT_TRANSFORMATION_PATTERN",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transformation pattern component",
                                "TypeNumber": 221,
                                "ApiName": "OT_TRANSFORMATION_PATTERN_COMPONENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transformation profile",
                                "TypeNumber": 222,
                                "ApiName": "OT_TRANSFORMATION_PROFILE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transport system",
                                "TypeNumber": 223,
                                "ApiName": "OT_TRANSPORT_SYSTEM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transport system class",
                                "TypeNumber": 224,
                                "ApiName": "OT_TRANSPORT_SYSTEM_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transport system type",
                                "TypeNumber": 225,
                                "ApiName": "OT_TRANSPORT_SYSTEM_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Tree control",
                                "TypeNumber": 226,
                                "ApiName": "OT_TREE_CONTROL",
                                "Type": "Default"
                            },
                            {
                                "Name": "UML Model",
                                "TypeNumber": 227,
                                "ApiName": "OT_UML_MODEL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Use case instance",
                                "TypeNumber": 228,
                                "ApiName": "OT_USE_CASE_INSTANCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "View",
                                "TypeNumber": 229,
                                "ApiName": "OT_VIEW",
                                "Type": "Default"
                            },
                            {
                                "Name": "View (physical)",
                                "TypeNumber": 230,
                                "ApiName": "OT_VIEW_PHYSICAL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Warehouse equipment",
                                "TypeNumber": 231,
                                "ApiName": "OT_WAREHOUSE_EQUIPMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Warehouse equipment class",
                                "TypeNumber": 232,
                                "ApiName": "OT_WAREHOUSE_EQUIPMENT_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Warehouse equipment type",
                                "TypeNumber": 233,
                                "ApiName": "OT_WAREHOUSE_EQUIPMENT_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "XOR",
                                "TypeNumber": 234,
                                "ApiName": "OT_XOR",
                                "Type": "Default"
                            },
                        ]
                    },
                    {
                        "name": "Action",
                        "id": "OT_ACTION",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Activity graph",
                        "id": "OT_ACT_GRAPH",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Actor",
                        "id": "OT_ACTOR",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Work Management',
        type: 'com.celmino.widget.workspace-tree',
        description: 'Monitor your process details in timeframe chart.',
        // image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        icon: '\\d320',
        enabled: true,
        databases: [
            {
                "name": "Work Management",
                "id": "work_management",
                "category": "app",
                "collections": [
                    {
                        "name": "Spaces",
                        "id": "wm_spaces",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "Parent",
                                "type": "string"
                            },
                            {
                                "key": "path",
                                "type": "string"
                            },
                            {
                                "key": "icon_name",
                                "type": "string"
                            },
                            {
                                "key": "icon_category",
                                "type": "string"
                            },
                            {
                                "key": "bg_color",
                                "type": "string"
                            },
                            {
                                "key": "fg_color",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Folders",
                        "id": "wm_folders",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "parent",
                                "type": "string"
                            },
                            {
                                "key": "path",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Lists",
                        "id": "wm_lists",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "parent",
                                "type": "string"
                            },
                            {
                                "key": "path",
                                "type": "string"
                            },
                            {
                                "key": "defaultViewId",
                                "type": "string"
                            },
                            {
                                "key": "icon_name",
                                "type": "string"
                            },
                            {
                                "key": "icon_category",
                                "type": "string"
                            },
                            {
                                "key": "bg_color",
                                "type": "string"
                            },
                            {
                                "key": "fg_color",
                                "type": "string"
                            }
                        ],
                    },
                    {
                        "name": "Documents",
                        "id": "wm_documents",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "parent",
                                "type": "string"
                            },
                            {
                                "key": "path",
                                "type": "string"
                            },
                            {
                                "key": "icon_name",
                                "type": "string"
                            },
                            {
                                "key": "icon_category",
                                "type": "string"
                            },
                            {
                                "key": "bg_color",
                                "type": "string"
                            },
                            {
                                "key": "fg_color",
                                "type": "string"
                            }
                        ],
                    },
                    {
                        "name": "views",
                        "id": "wm_views",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "parent",
                                "type": "string"
                            },
                            {
                                "key": "type",
                                "type": "string"
                            }
                        ],
                    }
                ]
            }
        ]
    },
    {
        name: 'Meeting Management',
        type: 'com.celmino.applet.enterprise-modelling',
        description: 'Monitor your process details in timeframe chart.',
        // image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        icon: '\\d320',
        enabled: true
    }
];


/***/ }),

/***/ "./src/Icons.tsx":
/*!***********************!*\
  !*** ./src/Icons.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Icons: () => (/* binding */ Icons)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Icons;
(function (Icons) {
    Icons.RightArrow = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M7.434 14.566a.8.8 0 0 1 0-1.132L10.87 10 7.434 6.566a.8.8 0 1 1 1.132-1.132l4 4a.8.8 0 0 1 0 1.132l-4 4a.8.8 0 0 1-1.132 0Z" }))); };
    Icons.Plus = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M10 4a.75.75 0 0 0-.75.75v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5A.75.75 0 0 0 10 4Z" }))); };
    Icons.TextAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M13.2 4.786a.779.779 0 0 0-.234-.556A.807.807 0 0 0 12.4 4H2.8a.807.807 0 0 0-.566.23.779.779 0 0 0 0 1.111c.15.148.354.23.566.23h4v8.643c0 .209.084.409.234.556a.808.808 0 0 0 1.132 0 .779.779 0 0 0 .234-.556V5.571h4a.807.807 0 0 0 .566-.23.779.779 0 0 0 .234-.555Zm4 3.928h-4.8a.807.807 0 0 0-.566.23.779.779 0 0 0 0 1.112c.15.147.354.23.566.23H14v3.928c0 .209.084.409.234.556a.808.808 0 0 0 1.132 0 .779.779 0 0 0 .234-.556v-3.928h1.6a.808.808 0 0 0 .566-.23.779.779 0 0 0 0-1.112.807.807 0 0 0-.566-.23Z" }))); };
    Icons.RichTextAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M10.7 6.571h5.6a.664.664 0 0 0 .495-.23.837.837 0 0 0 .205-.555.837.837 0 0 0-.205-.556A.664.664 0 0 0 16.3 5h-5.6a.664.664 0 0 0-.495.23.837.837 0 0 0-.205.556c0 .208.074.408.205.555.131.148.31.23.495.23Zm0 7.857h-7a.664.664 0 0 0-.495.23.837.837 0 0 0-.205.556c0 .209.074.409.205.556.131.147.31.23.495.23h7a.664.664 0 0 0 .495-.23.837.837 0 0 0 .205-.556.837.837 0 0 0-.205-.555.664.664 0 0 0-.495-.23Zm5.6-3.142H3.7a.663.663 0 0 0-.495.23.837.837 0 0 0-.205.555c0 .209.074.409.205.556.131.147.31.23.495.23h12.6a.664.664 0 0 0 .495-.23.837.837 0 0 0 .205-.556.837.837 0 0 0-.205-.555.663.663 0 0 0-.495-.23Zm0-3.143h-5.6a.664.664 0 0 0-.495.23.837.837 0 0 0-.205.556c0 .208.074.408.205.555.131.147.31.23.495.23h5.6a.664.664 0 0 0 .495-.23A.837.837 0 0 0 17 8.93a.837.837 0 0 0-.205-.556.664.664 0 0 0-.495-.23ZM8.6 3.314H3.8a.8.8 0 1 0 0 1.6h1.6v4a.8.8 0 1 0 1.6 0v-4h1.6a.8.8 0 0 0 0-1.6Z" })))); };
    Icons.NumberAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.75 3.255a.75.75 0 0 1 .662.828L9.06 7.25h2.49l.371-3.333a.75.75 0 1 1 1.491.166L13.06 7.25h2.273a.75.75 0 0 1 0 1.5h-2.44l-.277 2.5h2.717a.75.75 0 0 1 0 1.5H12.45l-.37 3.333a.75.75 0 1 1-1.491-.166l.352-3.167H8.45l-.371 3.333a.75.75 0 1 1-1.491-.166l.352-3.167H4.667a.75.75 0 0 1 0-1.5h2.44l.277-2.5H4.667a.75.75 0 0 1 0-1.5H7.55l.37-3.333a.75.75 0 0 1 .828-.662Zm2.357 7.995.277-2.5h-2.49l-.278 2.5h2.49Z" }))); };
    Icons.SingleSelectAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "m12.157 8.392-2.294 2.08-2.137-2.033a.8.8 0 1 0-1.128 1.128l2.697 2.6a.799.799 0 0 0 1.128 0l2.862-2.639a.8.8 0 1 0-1.128-1.136ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 14.4a6.4 6.4 0 1 1 0-12.8 6.4 6.4 0 0 1 0 12.8Z" }))); };
    Icons.MultiSelectAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4.444 4.59c-.364-.242-.888-.29-1.212.037a.783.783 0 0 0 .039 1.149L6.156 8.78a.894.894 0 0 0 1.13.037.853.853 0 0 0 .165-.127l7.308-7.312a.783.783 0 0 0-.02-1.15.891.891 0 0 0-1.213.02L6.728 6.252 4.444 4.59ZM3 15.2a.8.8 0 0 1 .8-.8h12.4a.8.8 0 0 1 0 1.6H3.8a.8.8 0 0 1-.8-.8ZM11.45 7a.8.8 0 0 1 .8-.8h4a.8.8 0 0 1 0 1.6h-4a.8.8 0 0 1-.8-.8ZM3 11.2a.8.8 0 0 1 .8-.8h12.4a.8.8 0 0 1 0 1.6H3.8a.8.8 0 0 1-.8-.8Z" }))); };
    Icons.WorkflowAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M3.688 11.438a.689.689 0 0 0 .697-.704V8.012c0-1.19.807-1.941 2.065-1.941h5.284v1.572c0 .328.198.52.526.52a.66.66 0 0 0 .404-.144l2.68-2.235c.252-.212.259-.547 0-.766l-2.68-2.235a.62.62 0 0 0-.404-.144c-.328 0-.526.185-.526.52v1.53H6.552c-2.174 0-3.568 1.21-3.568 3.186v2.859c0 .396.308.704.704.704Zm12.624-2.906a.689.689 0 0 0-.697.704v2.745c0 1.19-.807 1.941-2.065 1.941H8.266V12.35c0-.328-.198-.52-.526-.52a.66.66 0 0 0-.404.144l-2.68 2.242c-.259.212-.259.547 0 .76l2.68 2.241a.66.66 0 0 0 .404.144c.328 0 .526-.192.526-.52v-1.545h5.182c2.174 0 3.568-1.21 3.568-3.178V9.236a.695.695 0 0 0-.704-.704Z" }))); };
    Icons.AssignmentAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10.37 11.149C9.323 10.672 8.104 10.5 7 10.5s-2.323.172-3.37.649c-1.06.483-1.983 1.302-2.351 2.587-.161.562-.152 1.244-.12 1.725.06.924.847 1.539 1.684 1.539h8.314c.837 0 1.625-.615 1.685-1.539.031-.48.04-1.163-.121-1.725-.368-1.285-1.29-2.104-2.351-2.587Zm.909 3c-.216-.755-.756-1.282-1.531-1.635C8.959 12.154 7.97 12 7 12c-.97 0-1.96.155-2.748.514-.775.353-1.315.88-1.531 1.635-.085.298-.096.761-.066 1.215a.12.12 0 0 0 .044.086c.03.027.08.05.144.05h8.314a.218.218 0 0 0 .144-.05.12.12 0 0 0 .044-.086c.03-.454.02-.917-.066-1.215ZM10.25 6.25a3.25 3.25 0 1 0-6.5 0 3.25 3.25 0 0 0 6.5 0Zm-1.5 0a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0ZM13.818 5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Zm0 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M14.008 12.015a.75.75 0 0 0 .655.834c1.371.165 2.36.711 2.634 1.67.065.227.075.595.051.971a.07.07 0 0 1-.038.01h-2.06a.75.75 0 0 0 0 1.5h2.06c.759 0 1.48-.558 1.535-1.405.026-.406.035-.997-.106-1.49-.534-1.863-2.356-2.56-3.897-2.745a.75.75 0 0 0-.834.655Z" }))); };
    Icons.DateAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M15.6 3.6H14v-.8a.8.8 0 0 0-1.6 0v.8H7.6v-.8a.8.8 0 0 0-1.6 0v.8H4.4A2.4 2.4 0 0 0 2 6v9.6A2.4 2.4 0 0 0 4.4 18h11.2a2.4 2.4 0 0 0 2.4-2.4V6a2.4 2.4 0 0 0-2.4-2.4Zm.8 12a.8.8 0 0 1-.8.8H4.4a.8.8 0 0 1-.8-.8V10h12.8v5.6Zm0-7.2H3.6V6a.8.8 0 0 1 .8-.8H6V6a.8.8 0 0 0 1.6 0v-.8h4.8V6A.8.8 0 0 0 14 6v-.8h1.6a.8.8 0 0 1 .8.8v2.4Z" }))); };
    Icons.CheckboxAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M8.508 12.292a.833.833 0 0 0 1.184 0l3.4-3.4a.837.837 0 0 0-1.184-1.184L9.1 10.525 8.092 9.508a.837.837 0 1 0-1.184 1.184l1.6 1.6Z" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h11A2.5 2.5 0 0 1 18 4.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 15.5v-11Zm1.714.214a1 1 0 0 1 1-1h10.572a1 1 0 0 1 1 1v10.572a1 1 0 0 1-1 1H4.714a1 1 0 0 1-1-1V4.714Z" })))); };
    Icons.URLAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M3.982 8.862a5.06 5.06 0 0 0 7.156 7.156l1.22-1.22a.746.746 0 1 0-1.056-1.056l-1.22 1.22a3.567 3.567 0 0 1-5.044-5.044l1.22-1.22a.747.747 0 0 0-1.056-1.056l-1.22 1.22Z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M7.032 11.912a.747.747 0 0 0 1.056 1.056l4.88-4.88a.746.746 0 1 0-1.056-1.056l-4.88 4.88Z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M7.642 5.202a.747.747 0 1 0 1.056 1.056l1.22-1.22a3.567 3.567 0 0 1 5.044 5.044l-1.22 1.22a.746.746 0 1 0 1.056 1.056l1.22-1.22a5.06 5.06 0 0 0-7.156-7.156l-1.22 1.22Z" }))); };
    Icons.EmailAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M13.55 7.2a.75.75 0 0 0-1.5 0h1.5Zm-.75 3.5h-.75.75Zm4.2 0h.75H17Zm0-.7h.75H17Zm-2.288 6.153a.75.75 0 1 0-.912-1.19l.912 1.19ZM12.05 9.999A2.05 2.05 0 0 1 10 12.05v1.5A3.55 3.55 0 0 0 13.55 10h-1.5ZM10 12.05A2.05 2.05 0 0 1 7.95 10h-1.5A3.55 3.55 0 0 0 10 13.55v-1.5ZM7.95 10A2.05 2.05 0 0 1 10 7.95v-1.5A3.55 3.55 0 0 0 6.45 10h1.5ZM10 7.95A2.05 2.05 0 0 1 12.05 10h1.5A3.55 3.55 0 0 0 10 6.45v1.5Zm2.05-.75v3.5h1.5V7.2h-1.5Zm0 3.5c0 .756.3 1.481.835 2.016l1.06-1.06a1.35 1.35 0 0 1-.395-.955h-1.5Zm.835 2.016a2.85 2.85 0 0 0 2.015.835v-1.5a1.35 1.35 0 0 1-.955-.396l-1.06 1.06Zm2.015.835c.756 0 1.48-.3 2.015-.835l-1.06-1.06a1.35 1.35 0 0 1-.955.395v1.5Zm2.015-.835a2.85 2.85 0 0 0 .835-2.015h-1.5c0 .358-.142.701-.395.954l1.06 1.06Zm.835-2.015V10h-1.5v.7h1.5Zm0-.7a7.75 7.75 0 0 0-1.68-4.817l-1.174.932A6.25 6.25 0 0 1 16.25 10h1.5Zm-1.68-4.817a7.75 7.75 0 0 0-4.309-2.73l-.34 1.46a6.25 6.25 0 0 1 3.475 2.202l1.175-.932Zm-4.309-2.73a7.75 7.75 0 0 0-5.072.54l.64 1.356a6.25 6.25 0 0 1 4.091-.435l.341-1.461Zm-5.072.54A7.75 7.75 0 0 0 3.05 6.569l1.345.664A6.25 6.25 0 0 1 7.33 4.35l-.641-1.356ZM3.05 6.569a7.75 7.75 0 0 0-.627 5.063l1.466-.316a6.25 6.25 0 0 1 .506-4.083L3.05 6.57Zm-.627 5.063a7.75 7.75 0 0 0 2.655 4.355l.953-1.159a6.25 6.25 0 0 1-2.142-3.512l-1.466.316Zm2.655 4.355a7.75 7.75 0 0 0 4.788 1.762l.026-1.5a6.25 6.25 0 0 1-3.861-1.42l-.953 1.158Zm4.788 1.762a7.75 7.75 0 0 0 4.845-1.596l-.912-1.19a6.25 6.25 0 0 1-3.907 1.286l-.026 1.5Z" }))); };
    Icons.PhoneAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M7.299 12.695c1.875 1.875 4.15 3.318 6.006 3.318.833 0 1.564-.286 2.148-.935.337-.381.547-.82.547-1.258 0-.337-.127-.661-.451-.89l-1.951-1.386c-.306-.216-.566-.317-.795-.317-.299 0-.56.165-.852.457l-.464.458a.335.335 0 0 1-.241.095.659.659 0 0 1-.267-.07c-.394-.216-1.08-.807-1.716-1.436-.63-.636-1.22-1.316-1.43-1.716a.57.57 0 0 1-.077-.26c0-.083.026-.172.102-.242l.451-.464c.293-.299.464-.56.464-.858 0-.23-.108-.483-.324-.795L7.076 4.464A1.1 1.1 0 0 0 6.148 4c-.426 0-.858.19-1.24.553C4.28 5.15 4 5.888 4 6.714c0 1.856 1.424 4.106 3.299 5.98Z" }))); };
    Icons.LocationAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 2.467a5.867 5.867 0 0 0-5.867 5.866c0 1.588.716 3.083 1.917 4.643 1.015 1.317 2.313 2.604 3.704 3.984l.246.244.246-.244c1.391-1.38 2.69-2.667 3.704-3.984 1.2-1.56 1.917-3.055 1.917-4.643A5.867 5.867 0 0 0 10 2.467ZM2.533 8.333a7.467 7.467 0 1 1 14.934 0c0 2.095-.951 3.933-2.25 5.62-1.085 1.409-2.475 2.786-3.864 4.164-.263.26-.526.521-.787.782a.8.8 0 0 1-1.132 0c-.26-.26-.524-.522-.787-.782-1.39-1.378-2.779-2.755-3.864-4.165-1.299-1.686-2.25-3.524-2.25-5.619ZM10 6.633a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4Zm-3.3 1.7a3.3 3.3 0 1 1 6.6 0 3.3 3.3 0 0 1-6.6 0Z" }))); };
    Icons.AvatarAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { "fill-rule": "evenodd", "clip-rule": "evenodd" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M6.904 8.585a3.071 3.071 0 1 1 6.143 0 3.071 3.071 0 0 1-6.143 0Zm3.072-1.57a1.571 1.571 0 1 0 0 3.141 1.571 1.571 0 0 0 0-3.142Z" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M5.555 3.348a8 8 0 1 1 8.89 13.304 8 8 0 0 1-8.89-13.304Zm.89 11.973a6.4 6.4 0 0 0 7.338-.159 1.571 1.571 0 0 0-1.486-1.06H7.654a1.571 1.571 0 0 0-1.475 1.032c.086.064.175.127.265.187Zm-1.4-1.27A6.402 6.402 0 0 1 8.752 3.724a6.4 6.4 0 0 1 6.175 10.363 3.07 3.07 0 0 0-2.63-1.484H7.655a3.07 3.07 0 0 0-2.608 1.45Z" })))); };
    Icons.IconAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M12.25 6.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM7.75 6.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 1.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5Zm0 1.5a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5Z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M8.238 11.643a3.707 3.707 0 0 1-.491-.428l-.149-.168a.75.75 0 0 0-1.198.903l.078.097a5.21 5.21 0 0 0 .878.81c.598.435 1.5.893 2.644.893 1.144 0 2.046-.458 2.644-.893a5.21 5.21 0 0 0 .879-.81l.077-.097a.75.75 0 0 0-1.198-.903l-.149.168c-.11.116-.276.272-.491.428-.433.315-1.031.607-1.762.607-.73 0-1.33-.292-1.762-.607Z" }))); };
    Icons.FilesAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M16.824 9.897a.75.75 0 1 0-1.061-1.06l1.06 1.06Zm-6.657 5.596-.53-.53.53.53Zm-2.83 1.173v.75-.75Zm-4.003-4.003h-.75.75Zm1.173-2.83.53.53-.53-.53Zm6.126-6.126-.53-.53.53.53Zm1.887-.782v.75-.75Zm1.887 4.555.53.53-.53-.53Zm-6.134 6.127-.53-.53.53.53ZM6.387 11.72l-.53-.53.53.53Zm6.19-5.123a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm3.186 2.24-6.127 6.126 1.061 1.06 6.127-6.126-1.061-1.06Zm-6.127 6.126c-.61.61-1.437.953-2.3.953v1.5c1.261 0 2.47-.501 3.361-1.392l-1.06-1.06Zm-2.3.953c-.862 0-1.69-.343-2.299-.953l-1.06 1.06a4.752 4.752 0 0 0 3.36 1.393v-1.5Zm-2.299-.953a3.252 3.252 0 0 1-.953-2.3h-1.5c0 1.26.501 2.47 1.392 3.36l1.061-1.06Zm-.953-2.3c0-.862.343-1.69.953-2.3l-1.06-1.06a4.752 4.752 0 0 0-1.393 3.36h1.5Zm.953-2.3 6.127-6.126-1.061-1.06-6.127 6.126 1.061 1.06Zm6.127-6.126c.36-.36.847-.562 1.356-.562v-1.5c-.906 0-1.776.36-2.417 1.001l1.06 1.061Zm1.356-.562c.509 0 .997.202 1.356.562l1.061-1.06a3.418 3.418 0 0 0-2.417-1.002v1.5Zm1.356.562c.36.36.562.848.562 1.356h1.5c0-.906-.36-1.776-1.001-2.417l-1.06 1.061Zm.562 1.356c0 .51-.202.997-.562 1.357l1.061 1.06a3.418 3.418 0 0 0 1.001-2.417h-1.5Zm-.561 1.356-6.134 6.127 1.06 1.061 6.134-6.126-1.06-1.062Zm-6.134 6.127a.584.584 0 0 1-.413.171v1.5c.553 0 1.083-.22 1.474-.61l-1.061-1.06Zm-.413.171a.584.584 0 0 1-.413-.17l-1.06 1.06c.39.39.92.61 1.473.61v-1.5Zm-.413-.17a.584.584 0 0 1-.171-.414h-1.5c0 .553.22 1.083.61 1.474l1.061-1.06Zm-.171-.414c0-.155.061-.303.171-.413l-1.06-1.06c-.392.39-.611.92-.611 1.473h1.5Zm.17-.412 5.66-5.654-1.06-1.06-5.66 5.653 1.06 1.06Z" }))); };
    Icons.CommentsAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M6 7.75A.75.75 0 0 1 6.75 7h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 6 7.75ZM6.75 10a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2 5.75A2.75 2.75 0 0 1 4.75 3h10.5A2.75 2.75 0 0 1 18 5.75v7.5A2.75 2.75 0 0 1 15.25 16h-.75v1.75a.75.75 0 0 1-1.13.646L9.296 16H4.75A2.75 2.75 0 0 1 2 13.25v-7.5ZM4.75 4.5c-.69 0-1.25.56-1.25 1.25v7.5c0 .69.56 1.25 1.25 1.25H9.5c.134 0 .265.036.38.104L13 16.439V15.25a.75.75 0 0 1 .75-.75h1.5c.69 0 1.25-.56 1.25-1.25v-7.5c0-.69-.56-1.25-1.25-1.25H4.75Z" }))); };
    Icons.RelationToAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M7.303 7.774a.75.75 0 0 1 0-.577A.75.75 0 0 1 8 6.732h4.652a.75.75 0 0 1 .287.064.703.703 0 0 1 .402.402.75.75 0 0 1 .064.287v4.55a.753.753 0 0 1-1.505.001l.004-2.743-4.025 4.025a.75.75 0 0 1-1.06-1.06l4.025-4.025-2.845.005a.75.75 0 0 1-.696-.464Z" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.555 3.348a8 8 0 1 1 8.89 13.304 8 8 0 0 1-8.89-13.304Zm.89 11.973a6.4 6.4 0 1 0 7.11-10.643 6.4 6.4 0 0 0-7.11 10.643Z" })))); };
    Icons.LookupFromAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4.083 2a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5h-12.5ZM4.083 6.751a.75.75 0 0 0 0 1.5h3.5a.75.75 0 1 0 0-1.5h-3.5ZM3.333 12.502a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75ZM4.083 16.501a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5h-12.5Z" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M15.747 11.44a3.5 3.5 0 1 0-1.08 1.042l2.136 2.135a.75.75 0 0 0 1.06-1.06l-2.116-2.116Zm-2.914.062a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" })))); };
    Icons.FormulaAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M7.098 17c1.857 0 3.092-1.07 3.395-3.172l.412-2.886h2.968c.552 0 .964-.403.964-.946 0-.535-.42-.939-.971-.939h-2.697l.226-1.567c.17-1.186.606-1.605 1.414-1.605.66 0 .994.085 1.297.085.529 0 .894-.357.894-.9C15 4.264 14.044 4 12.902 4c-1.857 0-3.085 1.07-3.388 3.172l-.272 1.885H6.71c-.551 0-.963.404-.963.939 0 .543.42.946.971.946h2.261l-.365 2.567c-.17 1.18-.606 1.606-1.414 1.606-.66 0-.987-.085-1.298-.085-.528 0-.901.349-.901.892C5 16.728 5.963 17 7.098 17Z" }))); };
    Icons.DocumentAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M7.098 17c1.857 0 3.092-1.07 3.395-3.172l.412-2.886h2.968c.552 0 .964-.403.964-.946 0-.535-.42-.939-.971-.939h-2.697l.226-1.567c.17-1.186.606-1.605 1.414-1.605.66 0 .994.085 1.297.085.529 0 .894-.357.894-.9C15 4.264 14.044 4 12.902 4c-1.857 0-3.085 1.07-3.388 3.172l-.272 1.885H6.71c-.551 0-.963.404-.963.939 0 .543.42.946.971.946h2.261l-.365 2.567c-.17 1.18-.606 1.606-1.414 1.606-.66 0-.987-.085-1.298-.085-.528 0-.901.349-.901.892C5 16.728 5.963 17 7.098 17Z" }))); };
    Icons.RelationAttribute = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M7.303 7.774a.75.75 0 0 1 0-.577A.75.75 0 0 1 8 6.732h4.652a.75.75 0 0 1 .287.064.703.703 0 0 1 .402.402.75.75 0 0 1 .064.287v4.55a.753.753 0 0 1-1.505.001l.004-2.743-4.025 4.025a.75.75 0 0 1-1.06-1.06l4.025-4.025-2.845.005a.75.75 0 0 1-.696-.464Z" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.555 3.348a8 8 0 1 1 8.89 13.304 8 8 0 0 1-8.89-13.304Zm.89 11.973a6.4 6.4 0 1 0 7.11-10.643 6.4 6.4 0 0 0-7.11 10.643Z" })))); };
    Icons.Collection = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M16 6.4C16 3.973 13.314 3 10 3S4 4.002 4 6.4c0 2.4 2.686 3.401 6 3.401s6-.971 6-3.4Z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4.104 9.27a2.82 2.82 0 0 0-.104.774c0 2.399 2.686 3.4 6 3.4s6-.97 6-3.4a2.88 2.88 0 0 0-.1-.766 4.787 4.787 0 0 1-1.197.84c-1.289.648-2.972.898-4.703.898-1.735 0-3.418-.259-4.705-.911a4.831 4.831 0 0 1-1.19-.836Z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4.104 12.824c-.068.24-.104.499-.104.775C4 15.998 6.686 17 10 17s6-.972 6-3.4a2.88 2.88 0 0 0-.1-.767 4.786 4.786 0 0 1-1.197.84c-1.289.648-2.972.898-4.703.898-1.735 0-3.418-.259-4.705-.911a4.83 4.83 0 0 1-1.19-.836Z" }))); };
    Icons.Relation = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M14.998 11.998V6.912c0-.89-1.077-1.337-1.707-.707L6.205 13.29c-.63.63-.184 1.707.707 1.707h5.086c2 0 3-1 3-3Z" }))); };
})(Icons || (Icons = {}));


/***/ }),

/***/ "./src/app/Routes.ts":
/*!***************************!*\
  !*** ./src/app/Routes.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Routes: () => (/* binding */ Routes)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_CollectionController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/CollectionController */ "./src/app/controllers/CollectionController.ts");
/* harmony import */ var _controllers_DatabaseController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/DatabaseController */ "./src/app/controllers/DatabaseController.ts");
/* harmony import */ var _controllers_HomeController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/HomeController */ "./src/app/controllers/HomeController.ts");
/* harmony import */ var _controllers_LayoutController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/LayoutController */ "./src/app/controllers/LayoutController.ts");
/* harmony import */ var _controllers_NotificationsController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/NotificationsController */ "./src/app/controllers/NotificationsController.ts");
/* harmony import */ var _controllers_WorkspaceLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controllers/WorkspaceLayout */ "./src/app/controllers/WorkspaceLayout.ts");
/* harmony import */ var _controllers_AppletController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controllers/AppletController */ "./src/app/controllers/AppletController.tsx");
/* harmony import */ var _controllers_OrganizationController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controllers/OrganizationController */ "./src/app/controllers/OrganizationController.ts");









var Routes = function () {
    var regex = /\/app\/com\.([A-Za-z]+)\.([A-Za-z]+)\.([A-Za-z]+)/i;
    // Alternative syntax using RegExp constructor
    // const regex = new RegExp('(?:^\\/app\\/+|\\G(?!^)\\.)\\K\\w+', 'g')
    var str = window.location.href;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoutes)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('/', _controllers_LayoutController__WEBPACK_IMPORTED_MODULE_4__.LayoutController).children((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('', _controllers_HomeController__WEBPACK_IMPORTED_MODULE_3__.HomeController).isIndex(true), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('home', _controllers_HomeController__WEBPACK_IMPORTED_MODULE_3__.HomeController).children((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)(':project_id(\d+)?', _controllers_HomeController__WEBPACK_IMPORTED_MODULE_3__.NullController)), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('notifications', _controllers_NotificationsController__WEBPACK_IMPORTED_MODULE_5__.NotificationsController), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('organization/:organizationId', _controllers_OrganizationController__WEBPACK_IMPORTED_MODULE_8__.OrganizationController), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('workspace/:workspaceId', _controllers_WorkspaceLayout__WEBPACK_IMPORTED_MODULE_6__.WorkspaceLayoutController).children((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('database/:databaseId', _controllers_DatabaseController__WEBPACK_IMPORTED_MODULE_2__.DatabaseController).children((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)(':collectionId', _controllers_CollectionController__WEBPACK_IMPORTED_MODULE_1__.CollectionController)), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('applet/:applet_id/*', _controllers_AppletController__WEBPACK_IMPORTED_MODULE_7__.AppletController))))));
};


/***/ }),

/***/ "./src/app/controllers/AppController.tsx":
/*!***********************************************!*\
  !*** ./src/app/controllers/AppController.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyTestController: () => (/* binding */ MyTestController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Routes */ "./src/app/Routes.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var MyTestController = /** @class */ (function (_super) {
    __extends(MyTestController, _super);
    function MyTestController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyTestController.prototype.LoadView = function () {
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useParams)(), space_id = _a.space_id, folder_id = _a.folder_id, item_id = _a.item_id;
        return ((0,_Routes__WEBPACK_IMPORTED_MODULE_1__.Routes)());
    };
    return MyTestController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/app/controllers/AppletController.tsx":
/*!**************************************************!*\
  !*** ./src/app/controllers/AppletController.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppletController: () => (/* binding */ AppletController),
/* harmony export */   OPA: () => (/* binding */ OPA),
/* harmony export */   OpaLoader: () => (/* binding */ OpaLoader),
/* harmony export */   Paths: () => (/* binding */ Paths),
/* harmony export */   getAppName: () => (/* binding */ getAppName)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_promise_suspense__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-promise-suspense */ "./node_modules/react-promise-suspense/build/index.js");
/* harmony import */ var react_promise_suspense__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_promise_suspense__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var OPA = /** @class */ (function (_super) {
    __extends(OPA, _super);
    function OPA(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Object.defineProperty(OPA.prototype, "Name", {
        get: function () {
            return this.props.name;
        },
        enumerable: false,
        configurable: true
    });
    OPA.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(this.props.controller, { content: this.props.content, onSave: this.props.onSave }));
    };
    return OPA;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component)));

function getAppName() {
    try {
        var regex = /\/app\/com\.([A-Za-z]+)\.([A-Za-z]+)\.([A-Za-z]+)/i;
        // Alternative syntax using RegExp constructor
        // const regex = new RegExp('(?:^\\/app\\/+|\\G(?!^)\\.)\\K\\w+', 'g')
        var str = window.location.href;
        var m = void 0;
        console.log(m = regex.exec(str));
        return m[3];
    }
    catch (_a) {
        return '';
    }
}
var AppCache = {};
var Paths = {};
var OpaLoader = function (_a) {
    var opa_name = _a.opa_name;
    //const { opa_name } = useParams();
    //let opa_name = 'com.tuvalsoft.opa.task';
    var location = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
    /* if (`/app/${app_name}` === location.pathname && Paths[app_name] != null && Paths[app_name] !== `/app/${app_name}`) {
        console.log(`/app/${app_name}` === location.pathname)
        return (<Navigate to={Paths[app_name]}></Navigate>)
    } else {
        Paths[app_name] = location.pathname;
    } */
    var controllerPromise = new Promise(function (resolve, reject) {
        if (AppCache[opa_name]) {
            resolve(AppCache[opa_name]);
        }
        else {
            var app_path = "/realmocean/store/app/open-testing/".concat(opa_name);
            // alert(app_path)
            var app_path_local = "/static/applications/".concat(opa_name);
            _tuval_core__WEBPACK_IMPORTED_MODULE_0__.ModuleLoader.LoadBundledModuleWithDecode(app_path_local, opa_name).then(function (_app) {
                if (_app != null) {
                    var app = new _app();
                    AppCache[opa_name] = app.GetMainController();
                    resolve(app.GetMainController());
                }
                else {
                }
            });
        }
        /*   setTimeout(() => {
              const app = AppStore.find(app => app.name === app_name)
              resolve(app.controller)
          }, 2000
          ) */
    });
    var fetchController = function (input) { return controllerPromise.then(function (res) { return res; }); };
    var contoller = react_promise_suspense__WEBPACK_IMPORTED_MODULE_3___default()(fetchController, [opa_name]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(OPA, { name: opa_name, controller: contoller }));
};
var AppletController = /** @class */ (function (_super) {
    __extends(AppletController, _super);
    function AppletController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppletController.prototype.LoadView = function () {
        var applet_id = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useParams)().applet_id;
        var _a = {}, applet = _a.applet, isLoading = _a.isLoading; //useGetApplet(applet_id);
        return (isLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Applet Loading...') :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })(
            // LeftSideMenuView(''),
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)(
            //  NotesLeftMenu(note_id),
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ReactView)(react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Suspense), { fallback: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Spinner)()).render()) },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ErrorBoundary, null,
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(OpaLoader, { opa_name: applet_id })))).frame(true).width('100%').height('100%'))).overflow('hidden')).background('white'))).background('#FAFBFC')));
    };
    return AppletController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIFormController));

/**
 * NEW: The error boundary has a function component wrapper.
 */
function ErrorBoundary(_a) {
    var children = _a.children;
    var _b = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useState)(false), hasError = _b[0], setHasError = _b[1];
    var location = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
    (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (hasError) {
            setHasError(false);
        }
    }, [location.key]);
    return (
    /**
     * NEW: The class component error boundary is now
     *      a child of the functional component.
     */
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ErrorBoundaryInner, { hasError: hasError, setHasError: setHasError }, children));
}
/**
 * NEW: The class component accepts getters and setters for
 *      the parent functional component's error state.
 */
var ErrorBoundaryInner = /** @class */ (function (_super) {
    __extends(ErrorBoundaryInner, _super);
    function ErrorBoundaryInner(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { hasError: false };
        _this.ref = react__WEBPACK_IMPORTED_MODULE_2___default().createRef();
        return _this;
    }
    ErrorBoundaryInner.getDerivedStateFromError = function (_error) {
        return { hasError: true };
    };
    ErrorBoundaryInner.prototype.componentDidUpdate = function (prevProps, _previousState) {
        if (!this.props.hasError && prevProps.hasError) {
            this.setState({ hasError: false });
        }
    };
    ErrorBoundaryInner.prototype.componentDidCatch = function (_error, _errorInfo) {
        if (_errorInfo && _errorInfo.componentStack) {
            // The component stack is sometimes useful in development mode
            // In production it can be somewhat obfuscated, so feel free to omit this line.
            //console.log(_errorInfo.componentStack);
        }
        _error['Hey'] = 'sdfsdf';
        _error['Mert'] = 'sdfsdf';
        //Tracker.track(_error);
        this.props.setHasError(true);
        this.setState({ errorText: JSON.stringify(_error) });
    };
    ErrorBoundaryInner.prototype.render = function () {
        return this.state.hasError
            ? react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, this.state.errorText)
            : this.props.children;
    };
    return ErrorBoundaryInner;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component)));


/***/ }),

/***/ "./src/app/controllers/CollectionController.ts":
/*!*****************************************************!*\
  !*** ./src/app/controllers/CollectionController.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionController: () => (/* binding */ CollectionController)
/* harmony export */ });
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @celmino/ui */ "@celmino/ui");
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_celmino_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @realmocean/antd */ "@realmocean/antd");
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_realmocean_antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Icons */ "./src/Icons.tsx");
/* harmony import */ var _views_ColorItemView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../views/ColorItemView */ "./src/views/ColorItemView.ts");
/* harmony import */ var _dialogs_AddBooleanFieldDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialogs/AddBooleanFieldDialog */ "./src/app/dialogs/AddBooleanFieldDialog.ts");
/* harmony import */ var _dialogs_AddDatetimeField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dialogs/AddDatetimeField */ "./src/app/dialogs/AddDatetimeField.ts");
/* harmony import */ var _dialogs_AddNumberFieldDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dialogs/AddNumberFieldDialog */ "./src/app/dialogs/AddNumberFieldDialog.ts");
/* harmony import */ var _dialogs_AddRelationDialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dialogs/AddRelationDialog */ "./src/app/dialogs/AddRelationDialog.ts");
/* harmony import */ var _dialogs_AddTextFieldDialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dialogs/AddTextFieldDialog */ "./src/app/dialogs/AddTextFieldDialog.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};













var colors = [
    '#4A4A4A',
    '#6A849B',
    '#BEC5CC',
    '#D40915',
    '#E72065',
    '#9C2BAF',
    '#673DB6',
    '#3E53B4',
    '#2978FB',
    '#199EE3',
    '#1FBED3',
    '#159789',
    '#4FAF54',
    '#8EC351',
    '#FBA32F',
    '#FC551F',
    '#B04E31'
];
function getAttributeIcon(type) {
    switch (type) {
        case 'text':
            return _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.TextAttribute;
        case 'integer':
            return _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.NumberAttribute;
        case 'boolean':
            return _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.CheckboxAttribute;
        case 'datetime':
            return _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.DateAttribute;
        default:
            return _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.TextAttribute;
    }
}
var _hideHandle = null;
var CollectionController = /** @class */ (function (_super) {
    __extends(CollectionController, _super);
    function CollectionController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollectionController.prototype.LoadView = function () {
        var _a, _b;
        var _c = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.useParams)(), workspaceId = _c.workspaceId, databaseId = _c.databaseId, collectionId = _c.collectionId;
        var AttributesMenuItems = [
            {
                title: 'Text',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.TextAttribute,
                onClick: function () { return (_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.DynoDialog.Show((0,_dialogs_AddTextFieldDialog__WEBPACK_IMPORTED_MODULE_12__.AddTextFieldDialog)(workspaceId, databaseId, collectionId))); }
            },
            {
                title: 'Rich Text',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.RichTextAttribute,
                onClick: function () { return (_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.DynoDialog.Show((0,_dialogs_AddNumberFieldDialog__WEBPACK_IMPORTED_MODULE_10__.AddNumberFieldDialog)(workspaceId, databaseId, collectionId))); }
            },
            {
                title: 'Number',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.NumberAttribute,
                onClick: function () { return (_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.DynoDialog.Show((0,_dialogs_AddNumberFieldDialog__WEBPACK_IMPORTED_MODULE_10__.AddNumberFieldDialog)(workspaceId, databaseId, collectionId))); }
            },
            {
                title: 'Single Select',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.SingleSelectAttribute
            },
            {
                title: 'Multi Select',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.MultiSelectAttribute
            },
            {
                title: 'Workflow',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.WorkflowAttribute
            },
            {
                title: 'Assignments',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.AssignmentAttribute
            },
            {
                title: 'Date',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.DateAttribute,
                onClick: function () { return (_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.DynoDialog.Show((0,_dialogs_AddDatetimeField__WEBPACK_IMPORTED_MODULE_9__.AddDatetimeFieldDialog)(workspaceId, databaseId, collectionId))); }
            },
            {
                title: 'Checkbox',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.CheckboxAttribute,
                onClick: function () { return (_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.DynoDialog.Show((0,_dialogs_AddBooleanFieldDialog__WEBPACK_IMPORTED_MODULE_8__.AddBooleanFieldDialog)(workspaceId, databaseId, collectionId))); }
            },
            {
                title: 'URL',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.URLAttribute
            },
            {
                title: 'Email',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.EmailAttribute
            },
            {
                title: 'Phone',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.PhoneAttribute
            },
            {
                title: 'Location',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.LocationAttribute
            },
            {
                title: 'Avatar',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.AvatarAttribute
            },
            {
                title: 'Icon',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.IconAttribute
            },
            {
                title: 'Files',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.FilesAttribute
            },
            {
                title: 'Comments',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.CommentsAttribute
            },
            {
                title: 'Relation to...',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.RelationAttribute,
                onClick: function () {
                    _celmino_ui__WEBPACK_IMPORTED_MODULE_1__.DynoDialog.Show((0,_dialogs_AddRelationDialog__WEBPACK_IMPORTED_MODULE_11__.AddRelationFieldDialog)(workspaceId, databaseId, collectionId));
                }
            }
        ];
        var database = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useGetDatabase)(workspaceId, databaseId).database;
        var deleteAttribute = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useDeleteAttribute)(workspaceId).deleteAttribute;
        var updateCollection = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useUpdateCollection)(workspaceId).updateCollection;
        //const { createDocument } = useCreateDocument(workspaceId);
        var documents = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useListDocuments)(workspaceId, databaseId, collectionId).documents;
        var collection = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useGetCollection)(workspaceId, databaseId, collectionId).collection;
        var _d = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)((_a = collection === null || collection === void 0 ? void 0 : collection.name) !== null && _a !== void 0 ? _a : 'New Collection'), collectionName = _d[0], setCollectionName = _d[1];
        var _e = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false), showDialog = _e[0], setShowDialog = _e[1];
        var index = 1;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Geometry)(function (_a) {
            var x = _a.x, y = _a.y;
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cLeading, spacing: 5 })(showDialog ?
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cTopLeading, spacing: 10 })(
                //Text(JSON.stringify(params))
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Input)()
                    .autoFocus(true)
                    .renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_2__.InputRenderer)
                    .value(collection === null || collection === void 0 ? void 0 : collection.name)
                    .fontSize(18)
                    .prefix((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Icon)(_Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.Collection))
                    .onChange(function (e) { return setCollectionName(e.target.value); })
                    .onBlur(function (value) {
                    if (collectionName !== '' && collectionName !== (collection === null || collection === void 0 ? void 0 : collection.name)) {
                        updateCollection({
                            databaseId: databaseId,
                            collectionId: collectionId,
                            name: collectionName
                        });
                    }
                }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cTopLeading, spacing: 2 }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.ForEach)(colors)(function (color) { return ((0,_views_ColorItemView__WEBPACK_IMPORTED_MODULE_7__.ColorItemView)(color)); })).wrap('wrap')))
                    .onClickAway(function () {
                    if (collectionName !== '' && collectionName !== (collection === null || collection === void 0 ? void 0 : collection.name)) {
                        updateCollection({
                            databaseId: databaseId,
                            collectionId: collectionId,
                            name: collectionName
                        });
                    }
                    setShowDialog(false);
                })
                    .zIndex(10)
                    .transform("translate3d(".concat(x - 8, "px, ").concat(y - 8, "px, 0px)"))
                    .position('fixed')
                    .inset('0px auto auto 0px')
                    .background('white')
                    .shadow('0 0 0 1px hsla(205,9%,47%,.1),0 12px 16px -4px hsla(205,9%,47%,.3)')
                    .width(330)
                    .height(200)
                    .cornerRadius(8)
                    .padding(12)
                : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Fragment)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Icon)(_Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.Collection))
                // .background('#FCE8E8')
                .width(32)
                .height(32)
                .cornerRadius(5), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Text)(collection === null || collection === void 0 ? void 0 : collection.name)
                .fontSize(18)
                .fontWeight('500')
                .foregroundColor('#212526')
                .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol')
                .onClick(function () {
                setCollectionName(collection === null || collection === void 0 ? void 0 : collection.name);
                setShowDialog(true);
            }))
                .width();
        }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cTrailing })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.PopupButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Icon)(_Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.Plus), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Text)('New Field')
            .fontFamily("ui-sans-serif,-apple-system,BlinkMacSystemFont,'Segoe UI','Helvetica','Arial',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'")
            .fontSize(14)
            .fontWeight('500'))
            .width()
            .height()
            .minHeight(28)
            .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cHorizontal, 12)
            .foregroundColor('hsl(205, 9%, 47%)')
            .background({ hover: 'rgba(109,122,131,0.15)' })
            //.border({ hover: '1px solid rgba(255, 255, 255, 0)' })
            .cornerRadius(6)
            .transition('all .15s ease-out')
            .cursor('pointer'))(_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.VStack.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.ForEach)(AttributesMenuItems)(function (item) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Icon)(item.icon), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Text)(item.title))
                .background({ hover: 'rgba(81,97,108,.1)' })
                .padding()
                .cursor('pointer')
                .height(32)
                .onClick(function () {
                _hideHandle();
                _tuval_core__WEBPACK_IMPORTED_MODULE_3__.is.function(item.onClick) ? item.onClick() : void 0;
            });
        })).width(200)
            .border('1px solid #EFF0F1')
            .cornerRadius(6)
            .margin(-8))
            .hideHandle(function (hideHandle) { return _hideHandle = hideHandle; })
            .dialogPosition(_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.DialogPosition.BOTTOM)))
            .height()
            .background('white')
            .minHeight(60)
            .paddingLeft('10px')
            .paddingTop('12px')
            .paddingRight('24px')
            .paddingBottom('8px')
            .borderBottom('1px solid rgba(0,0,0,.05)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.UIDataTable)()
            .columns(__spreadArray([{
                field: 'indexNo',
                width: '80px',
                header: '',
                align: 'right'
            }], ((_b = collection === null || collection === void 0 ? void 0 : collection.attributes) !== null && _b !== void 0 ? _b : []).map(function (column) {
            return {
                field: column.key,
                dataType: "boolean",
                header: function (data) { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Icon)(getAttributeIcon(column.type))
                    .width(20)
                    .height(20), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Text)(column.key)
                    .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"!important')
                    .foregroundColor('rgb(109, 122, 131)')
                    .fontSize(14), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cTrailing })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.MenuButton)()
                    .model([
                    {
                        title: 'Edit',
                        onClick: function () {
                            _celmino_ui__WEBPACK_IMPORTED_MODULE_1__.DynoDialog.Show((0,_dialogs_AddTextFieldDialog__WEBPACK_IMPORTED_MODULE_12__.AddTextFieldDialog)(workspaceId, databaseId, collectionId));
                        }
                    },
                    {
                        title: 'Delete',
                        onClick: function () {
                            deleteAttribute({
                                databaseId: databaseId,
                                collectionId: collectionId,
                                key: column.key
                            });
                            //  DynoDialog.Show(AddTextFieldDialog(databaseId, collectionId))
                        }
                    }
                ])
                    .icon(_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Icons.Menu))
                    .opacity('var(--hoverOpacity)'))
                    .padding(8)
                    .variable('--hoverOpacity', {
                    default: '0',
                    hover: '1'
                })); },
                body: function (row) {
                    if (column.type === 'boolean') {
                        var values = row[column.key];
                        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.CheckBox)().checked(row[column.key]));
                    }
                    else if (column.type === 'relationship') {
                        var values = row[column.key];
                        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_4__.cLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.ForEach)(values)(function (value) { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)({ spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Icon)(_Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.Relation))
                            .width()
                            .height()
                            .foregroundColor('rgb(79, 175, 84)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Text)(value.Name), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Icon)(_Icons__WEBPACK_IMPORTED_MODULE_6__.Icons.RightArrow))
                            .width()
                            .height()
                            .border('solid 1px #E9EBED')
                            .cornerRadius(6)
                            .padding(2)); })));
                    }
                    else {
                        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Text)(row[column.key]));
                    }
                }
            };
        }), true))
            .model(documents === null || documents === void 0 ? void 0 : documents.map(function (document, index) {
            return __assign({ indexNo: index + 1 }, document);
        })), 
        /*  UITable(
             ...ForEach([{
                 key: 'indexNo',
                 width: '20px'
             }, ...(collection?.attributes ?? [])])((column: any) =>
                 TableColumn(
                     column.key === 'indexNo' ?
                         HStack({ alignment: cLeading, spacing: 5 })(

                             Text('')
                                 .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"!important')
                                 .foregroundColor('rgb(109, 122, 131)')
                                 .fontSize(14)
                         )
                             .padding(10)
                             .allWidth(100)
                             .borderRight('solid 1px #DDE1E4')
                         :
                         HStack({ alignment: cLeading, spacing: 5 })(
                             Icon(getAttributeIcon(column.type))
                                 .width(20)
                                 .height(20),
                             Text(column.key)
                                 .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"!important')
                                 .foregroundColor('rgb(109, 122, 131)')
                                 .fontSize(14)
                         )
                             .padding(10)
                             .borderRight('solid 1px #DDE1E4')

                 )(row =>
                     column.key === 'indexNo' ?
                         HStack({ alignment: cTrailing })(
                             Text(String(index++))
                         ).height(40).padding()
                             .background('white')
                             .borderRight('solid 1px #DADCE0')
                         :
                         HStack({ alignment: cLeading })(
                             Text(row[column.key])
                         ).height(40).padding()
                             .background('white')
                             .borderRight('solid 1px #DADCE0')
                 ).width(column.width ?? '')
             )
         )
             .height()
             .value(documents)
             .headerAppearance(UIAppearance().borderBottom('1px solid #dadce0').background('#F9FAFB'))
             .rowAppearance(UIAppearance().borderBottom('1px solid #dadce0')), */
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.Button)()
            .label('Create Document')
            .renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_2__.ButtonRenderer)
            .onClick(function () {
            var _a;
            var fields = {};
            for (var i = 0; i < ((_a = collection === null || collection === void 0 ? void 0 : collection.attributes) === null || _a === void 0 ? void 0 : _a.length); i++) {
                var anyAttribute = collection === null || collection === void 0 ? void 0 : collection.attributes[i];
                if (anyAttribute.type === 'string') {
                    var stringAttribute = anyAttribute;
                    fields[stringAttribute.key] = {
                        label: stringAttribute.key,
                        type: 'text',
                        name: stringAttribute.key
                    };
                }
                else if (anyAttribute.type === 'integer') {
                    var integerAttribute = anyAttribute;
                    fields[integerAttribute.key] = {
                        label: integerAttribute.key,
                        type: 'number',
                        name: integerAttribute.key
                    };
                }
                else if (anyAttribute.type === 'boolean') {
                    var integerAttribute = anyAttribute;
                    fields[integerAttribute.key] = {
                        label: integerAttribute.key,
                        type: 'checkbox',
                        name: integerAttribute.key
                    };
                }
                else if (anyAttribute.type === 'datetime') {
                    var integerAttribute = anyAttribute;
                    fields[integerAttribute.key] = {
                        label: integerAttribute.key,
                        type: 'datepicker',
                        name: integerAttribute.key,
                        value: new Date(),
                        renderer: _realmocean_antd__WEBPACK_IMPORTED_MODULE_2__.DatePickerRenderer
                    };
                }
                else if (anyAttribute.type === 'relationship') {
                    var relationAttribute = anyAttribute;
                    fields[relationAttribute.key] = {
                        label: relationAttribute.key,
                        type: 'relation',
                        name: relationAttribute.key,
                        relatedCollection: relationAttribute.relatedCollection,
                        relationType: relationAttribute.relationType,
                    };
                }
            }
            _celmino_ui__WEBPACK_IMPORTED_MODULE_1__.DynoDialog.Show({
                "title": "Create ".concat(collection === null || collection === void 0 ? void 0 : collection.name),
                /*   "mutation":"_create_workspace", */
                "actions": [
                    {
                        "label": "Save",
                        "type": "saveDocument"
                    }
                ],
                "fieldMap": __assign({ "workspaceId": {
                        "name": "workspaceId",
                        "type": "virtual",
                        "value": workspaceId
                    }, "databaseId": {
                        "name": "databaseId",
                        "type": "virtual",
                        "value": databaseId
                    }, "collectionId": {
                        "name": "collectionId",
                        "type": "virtual",
                        "value": collectionId
                    } }, fields)
            });
            /*  createDocument(
                 {
                     databaseId, collectionId,
                     data: {
                         'ProjectName': 'New Document'
                     },
                     permissions: [
                         Permission.read(Role.any()),
                         Permission.update(Role.any()),
                         Permission.delete(Role.any())
                     ]
                 }
             ) */
        })));
    };
    return CollectionController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.UIFormController));



/***/ }),

/***/ "./src/app/controllers/DatabaseController.ts":
/*!***************************************************!*\
  !*** ./src/app/controllers/DatabaseController.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatabaseController: () => (/* binding */ DatabaseController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @celmino/ui */ "@celmino/ui");
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_celmino_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dialogs_AddCollection_AddCollectionDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialogs/AddCollection/AddCollectionDialog */ "./src/app/dialogs/AddCollection/AddCollectionDialog.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var DatabaseController = /** @class */ (function (_super) {
    __extends(DatabaseController, _super);
    function DatabaseController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatabaseController.prototype.LoadView = function () {
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useParams)(), workspaceId = _a.workspaceId, databaseId = _a.databaseId;
        var database = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_1__.useGetDatabase)(workspaceId, databaseId).database;
        var createCollection = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateCollection)(workspaceId).createCollection;
        var collections = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_1__.useListCollections)(workspaceId, databaseId).collections;
        var _b = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(null), selectedCollection = _b[0], setSelectedCollection = _b[1];
        var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(database === null || database === void 0 ? void 0 : database.name)
            .fontFamily("ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol")
            .fontSize(18)
            .fontWeight("500"))
            .padding('6px 12px 6px 6px'))
            .paddingTop('12px')
            .paddingBottom('8px')
            .paddingRight('24px')
            .background('white')
            .height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIWidget)('com.celmino.widget.tab-view')
            .config({
            //  allViews: views,
            views: collections !== null && collections !== void 0 ? collections : [],
            ////  isLoading: isTaskViewsLoading,
            //selectedIndex: taskViews?.findIndex(x => x.id === object_view_id),
            onChange: function (index) {
                setSelectedCollection(collections[index]);
                navigate("/app/".concat((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.getAppFullName)(), "/workspace/").concat(workspaceId, "/database/").concat(databaseId, "/").concat(collections[index].$id));
                /*    setWidgetController({
                       controller: class extends WidgetController { }
                   });
                   setSelectedViewIndex(index) */
            },
            actions: [
                {
                    title: 'New Collection',
                    onClick: function () {
                        _celmino_ui__WEBPACK_IMPORTED_MODULE_2__.DynoDialog.Show((0,_dialogs_AddCollection_AddCollectionDialog__WEBPACK_IMPORTED_MODULE_3__.AddCollectionDialog)(workspaceId, databaseId));
                        /*  SelectViewDialog.Show(views, powerUps).then((view) => {
                             createObjectView({
                                 $id: nanoid(),
                                 objectId: objectId,
                                 name: view.name,
                                 view: view.type,
                             })
                         }); */
                    }
                }
            ]
        }))
            .background('white')
            .borderTop('1px solid rgba(0,0,0,.05)')
            .borderBottom('1px solid rgba(0,0,0,.05)')
            .height(50), 
        //Text(JSON.stringify(collections)),
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRouteOutlet)().width('100%').height('100%')));
    };
    return DatabaseController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIFormController));



/***/ }),

/***/ "./src/app/controllers/HomeController.ts":
/*!***********************************************!*\
  !*** ./src/app/controllers/HomeController.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeController: () => (/* binding */ HomeController),
/* harmony export */   NullController: () => (/* binding */ NullController)
/* harmony export */ });
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/antd */ "@realmocean/antd");
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var NullController = /** @class */ (function (_super) {
    __extends(NullController, _super);
    function NullController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NullController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('dfds'));
    };
    return NullController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIFormController));

var HomeController = /** @class */ (function (_super) {
    __extends(HomeController, _super);
    function HomeController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeController.prototype.LoadView = function () {
        var workspaceId = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useParams)().workspaceId;
        var _a = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.useGetMe)('console'), me = _a.me, isLoading = _a.isLoading;
        var _b = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.useListTeams)('console'), teams = _b.teams, isTeamsLoading = _b.isLoading;
        var createTeam = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.useCreateTeam)('console').createTeam;
        var deleteTeam = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.useDeleteTeam)('console').deleteTeam;
        var createProject = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.useCreateProject)().createProject;
        var databases = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.useListDatabases)(workspaceId).databases;
        var createDatabase = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.useCreateDatabase)(workspaceId).createDatabase;
        var createCollection = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.useCreateCollection)(workspaceId).createCollection;
        var team = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.useGetCurrentTeam)().team;
        //  const { workspaces, isLoading: isWOrkspacesLoading } = useListWorkspaces();
        var _c = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useState)(''), orgName = _c[0], setOrgName = _c[1];
        var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)(
        // LeftSideMenuView('Home'),
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)(
        //Text(JSON.stringify(me)),
        isTeamsLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Spinner)() :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
                return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Input)().renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_0__.InputRenderer)
                    .onChange(function (e) {
                    setOrgName(e.target.value);
                }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)().label('Create Organization')
                    .renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_0__.ButtonRenderer)
                    .onClick(function () {
                    // alert(orgName)
                    createTeam({
                        name: orgName,
                        roles: ['admin']
                    });
                }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)().label('Delete Organization')
                    .renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_0__.ButtonRenderer)
                    .onClick(function () {
                    // alert(orgName)
                    deleteTeam({
                        teamId: teams[0].$id
                    });
                }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)().label('Create Workspace')
                    .renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_0__.ButtonRenderer)
                    .onClick(function () {
                    // alert(orgName)
                    createProject({
                        name: orgName,
                        teamId: team
                    });
                }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)().label('Create Database')
                    .renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_0__.ButtonRenderer)
                    .onClick(function () {
                    // alert(orgName)
                    createDatabase({
                        name: orgName,
                        category: 'applet',
                        enabled: true
                    });
                }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)().label('Navigate')
                    .renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_0__.ButtonRenderer)
                    .onClick(function () {
                    navigate('jasldlka');
                }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)().label('Create String Attribute')
                    .renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_0__.ButtonRenderer)
                    .onClick(function () {
                    createCollection({
                        databaseId: orgName,
                        name: 'test',
                        documentSecurity: false,
                        permissions: [
                            _celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.Permission.read(_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.Role.any()),
                            _celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.Permission.write(_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.Role.any())
                        ],
                        enabled: true
                    });
                }), isTeamsLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Spinner)() : _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ForEach)(teams)(function (team) {
                    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(team.name);
                })), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(JSON.stringify(databases))));
            }))));
    };
    return HomeController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIFormController));



/***/ }),

/***/ "./src/app/controllers/LayoutController.ts":
/*!*************************************************!*\
  !*** ./src/app/controllers/LayoutController.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutController: () => (/* binding */ LayoutController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LayoutController = /** @class */ (function (_super) {
    __extends(LayoutController, _super);
    function LayoutController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayoutController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRouteOutlet)().width("100%").height("100%")));
    };
    return LayoutController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIFormController));



/***/ }),

/***/ "./src/app/controllers/NotificationsController.ts":
/*!********************************************************!*\
  !*** ./src/app/controllers/NotificationsController.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsController: () => (/* binding */ NotificationsController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NotificationsController = /** @class */ (function (_super) {
    __extends(NotificationsController, _super);
    function NotificationsController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationsController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Notifications'));
    };
    return NotificationsController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIFormController));



/***/ }),

/***/ "./src/app/controllers/OrganizationController.ts":
/*!*******************************************************!*\
  !*** ./src/app/controllers/OrganizationController.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrganizationController: () => (/* binding */ OrganizationController)
/* harmony export */ });
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/antd */ "@realmocean/antd");
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var OrganizationController = /** @class */ (function (_super) {
    __extends(OrganizationController, _super);
    function OrganizationController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrganizationController.prototype.LoadView = function () {
        var _this = this;
        var organizationId = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useParams)().organizationId;
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useState)(), workspaceName = _a[0], setWorkspaceName = _a[1];
        var createProject = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateProject)().createProject;
        var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Input)().renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_1__.InputRenderer).onChange(function (e) {
            setWorkspaceName(e.target.value);
        }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Button)().renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_1__.ButtonRenderer).label('Submit').onClick(function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                createProject({
                    name: workspaceName,
                    teamId: organizationId,
                }, function (workspace) { return __awaiter(_this, void 0, void 0, function () {
                    var database, appletCol, nameAttr, opaAttr;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.create(workspace.$id, 'workspace', 'Workspace', 'workspace')];
                            case 1:
                                database = _a.sent();
                                return [4 /*yield*/, _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createCollection(workspace.$id, database.$id, 'applets', 'Applets')];
                            case 2:
                                appletCol = _a.sent();
                                return [4 /*yield*/, _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'name', 255, false)];
                            case 3:
                                nameAttr = _a.sent();
                                return [4 /*yield*/, _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'opa', 255, false)];
                            case 4:
                                opaAttr = _a.sent();
                                navigate("/app/com.celmino.app.test/workspace/".concat(workspace.$id));
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); })));
    };
    return OrganizationController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIFormController));



/***/ }),

/***/ "./src/app/controllers/WorkspaceLayout.ts":
/*!************************************************!*\
  !*** ./src/app/controllers/WorkspaceLayout.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkspaceLayoutController: () => (/* binding */ WorkspaceLayoutController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_LeftSideMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/LeftSideMenu */ "./src/app/views/LeftSideMenu.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var WorkspaceLayoutController = /** @class */ (function (_super) {
    __extends(WorkspaceLayoutController, _super);
    function WorkspaceLayoutController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorkspaceLayoutController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_views_LeftSideMenu__WEBPACK_IMPORTED_MODULE_1__.LeftSideMenuView)('Home'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRouteOutlet)().width("100%").height("100%")));
    };
    return WorkspaceLayoutController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIFormController));



/***/ }),

/***/ "./src/app/dialogs/AddAppletDialog.ts":
/*!********************************************!*\
  !*** ./src/app/dialogs/AddAppletDialog.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddAppletDialog: () => (/* binding */ AddAppletDialog),
/* harmony export */   SaveAppletAction: () => (/* binding */ SaveAppletAction)
/* harmony export */ });
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);


var SaveAppletAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var label = action.label, successAction = action.successAction, successActions = action.successActions;
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormController)();
    var dialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useDialog)();
    var formBuilder = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormBuilder)();
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    var _a = formController.GetFormData(), name = _a.name, workspaceId = _a.workspaceId;
    var _b = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateStringAttribute)(workspaceId), createStringAttribute = _b.createStringAttribute, isLoading = _b.isLoading;
    var createDatabase = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDatabase)(workspaceId).createDatabase;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save Applet'))
        .loading(isLoading)
        .onClick(function () {
        if (name == null) {
            alert('Name must be not null.');
            return;
        }
        createDatabase({
            name: name,
            category: 'applet',
            enabled: true
        });
    }));
}); };
var AddAppletDialog = function (workspaceId) { return ({
    "title": 'Add applet',
    "actions": [
        {
            "label": "Save",
            "type": "saveApplet"
        }
    ],
    "fieldMap": {
        "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },
        /*  "databaseId": {
             "name": "databaseId",
             "type": "virtual",
             "value": databaseId
         },
         "collectionId": {
             "name": "collectionId",
             "type": "virtual",
             "value": collectionId
         }, */
        "name": {
            "label": "Name",
            "type": "text",
            "name": "name"
        },
        /*  "description": {
             "label": "Description",
             "type": "text",
             "multiline": true,
             "name": "description"
         }, */
    }
}); };


/***/ }),

/***/ "./src/app/dialogs/AddBooleanFieldDialog.ts":
/*!**************************************************!*\
  !*** ./src/app/dialogs/AddBooleanFieldDialog.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddBooleanFieldDialog: () => (/* binding */ AddBooleanFieldDialog),
/* harmony export */   SaveBooleanFieldAction: () => (/* binding */ SaveBooleanFieldAction)
/* harmony export */ });
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);


var SaveBooleanFieldAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var label = action.label, successAction = action.successAction, successActions = action.successActions;
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormController)();
    var dialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useDialog)();
    var formBuilder = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormBuilder)();
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    var _a = formController.GetFormData(), databaseId = _a.databaseId, collectionId = _a.collectionId, name = _a.name, workspaceId = _a.workspaceId;
    var _b = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateBooleanAttribute)(workspaceId), createBooleanAttribute = _b.createBooleanAttribute, isLoading = _b.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save Field'))
        .loading(isLoading)
        .onClick(function () {
        if (databaseId == null) {
            alert('Collection is null');
            return;
        }
        createBooleanAttribute({
            databaseId: databaseId,
            collectionId: collectionId,
            key: name,
            required: false
        }, function () {
            dialog.Hide();
        });
    }));
}); };
var AddBooleanFieldDialog = function (workspaceId, databaseId, collectionId) { return ({
    "title": 'Add boolean field',
    "actions": [
        {
            "label": "Save",
            "type": "saveBooleanField"
        }
    ],
    "fieldMap": {
        "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },
        "databaseId": {
            "name": "databaseId",
            "type": "virtual",
            "value": databaseId
        },
        "collectionId": {
            "name": "collectionId",
            "type": "virtual",
            "value": collectionId
        },
        "name": {
            "label": "Name",
            "type": "text",
            "name": "name"
        },
        "description": {
            "label": "Description",
            "type": "text",
            "multiline": true,
            "name": "description"
        },
    }
}); };


/***/ }),

/***/ "./src/app/dialogs/AddCollection/AddCollectionDialog.ts":
/*!**************************************************************!*\
  !*** ./src/app/dialogs/AddCollection/AddCollectionDialog.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddCollectionDialog: () => (/* binding */ AddCollectionDialog)
/* harmony export */ });
var AddCollectionDialog = function (workspaceId, databaseId) { return ({
    "title": 'Create collection',
    "method": "create",
    "resource": "collections",
    /*   "mutation":"_create_workspace", */
    "actions": [
        {
            "label": "Save",
            "type": "saveCollection"
        }
    ],
    "fieldMap": {
        "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },
        "databaseId": {
            "name": "databaseId",
            "type": "virtual",
            "value": databaseId
        },
        "name": {
            "label": "Name",
            "type": "text",
            "name": "name"
        },
    }
}); };


/***/ }),

/***/ "./src/app/dialogs/AddCollection/actions/SaveCollectionAction.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dialogs/AddCollection/actions/SaveCollectionAction.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveCollectionAction: () => (/* binding */ SaveCollectionAction)
/* harmony export */ });
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);


var SaveCollectionAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var label = action.label, successAction = action.successAction, successActions = action.successActions;
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormController)();
    var dialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useDialog)();
    var formBuilder = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormBuilder)();
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    var invalidateResource = null;
    var formMutate = null;
    var createMutate = null;
    var updateMutate = null;
    var isFormMutateExcuting = false;
    var isFormLoading = false;
    var views = [];
    var _a = formMeta, protocol = _a.protocol, resource = _a.resource, method = _a.method;
    var _b = formController.GetFormData(), databaseId = _b.databaseId, name = _b.name, workspaceId = _b.workspaceId;
    var _c = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateCollection)(workspaceId), createCollection = _c.createCollection, isLoading = _c.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save Collection'))
        .loading(isLoading)
        .onClick(function () {
        if (databaseId == null) {
            alert('Collection is null');
            return;
        }
        createCollection({
            databaseId: databaseId,
            name: name,
            permissions: [
                _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Permission.read(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Role.any()),
                _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Permission.update(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Role.any()),
                _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Permission.update(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Role.any()),
                _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Permission.delete(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Role.any()),
                _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Permission.delete(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Role.any()),
            ],
            enabled: true
        }, function () {
            dialog.Hide();
        });
    }));
}); };


/***/ }),

/***/ "./src/app/dialogs/AddDatetimeField.ts":
/*!*********************************************!*\
  !*** ./src/app/dialogs/AddDatetimeField.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddDatetimeFieldDialog: () => (/* binding */ AddDatetimeFieldDialog),
/* harmony export */   SaveDatetimeFieldAction: () => (/* binding */ SaveDatetimeFieldAction)
/* harmony export */ });
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);


var SaveDatetimeFieldAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var label = action.label, successAction = action.successAction, successActions = action.successActions;
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormController)();
    var dialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useDialog)();
    var formBuilder = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormBuilder)();
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    var _a = formController.GetFormData(), databaseId = _a.databaseId, collectionId = _a.collectionId, name = _a.name, workspaceId = _a.workspaceId;
    var _b = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDatetimeAttribute)(workspaceId), createDatetimeAttribute = _b.createDatetimeAttribute, isLoading = _b.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save Field'))
        .loading(isLoading)
        .onClick(function () {
        if (databaseId == null) {
            alert('Collection is null');
            return;
        }
        createDatetimeAttribute({
            databaseId: databaseId,
            collectionId: collectionId,
            key: name,
            required: false
        }, function () {
            dialog.Hide();
        });
    }));
}); };
var AddDatetimeFieldDialog = function (workspaceId, databaseId, collectionId) { return ({
    "title": 'Add datetime field',
    "actions": [
        {
            "label": "Save",
            "type": "saveDatetimeField"
        }
    ],
    "fieldMap": {
        "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },
        "databaseId": {
            "name": "databaseId",
            "type": "virtual",
            "value": databaseId
        },
        "collectionId": {
            "name": "collectionId",
            "type": "virtual",
            "value": collectionId
        },
        "name": {
            "label": "Name",
            "type": "text",
            "name": "name"
        },
        "description": {
            "label": "Description",
            "type": "text",
            "multiline": true,
            "name": "description"
        },
    }
}); };


/***/ }),

/***/ "./src/app/dialogs/AddNumberFieldDialog.ts":
/*!*************************************************!*\
  !*** ./src/app/dialogs/AddNumberFieldDialog.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddNumberFieldDialog: () => (/* binding */ AddNumberFieldDialog),
/* harmony export */   SaveNumberFieldAction: () => (/* binding */ SaveNumberFieldAction)
/* harmony export */ });
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);


var SaveNumberFieldAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var label = action.label, successAction = action.successAction, successActions = action.successActions;
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormController)();
    var dialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useDialog)();
    var formBuilder = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormBuilder)();
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    var _a = formController.GetFormData(), databaseId = _a.databaseId, collectionId = _a.collectionId, name = _a.name, workspaceId = _a.workspaceId;
    var _b = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateIntegerAttribute)(workspaceId), createIntegerAttribute = _b.createIntegerAttribute, isLoading = _b.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save Field'))
        .loading(isLoading)
        .onClick(function () {
        if (databaseId == null) {
            alert('Collection is null');
            return;
        }
        createIntegerAttribute({
            databaseId: databaseId,
            collectionId: collectionId,
            key: name,
            required: false
        }, function () {
            dialog.Hide();
        });
    }));
}); };
var AddNumberFieldDialog = function (workspaceId, databaseId, collectionId) { return ({
    "title": 'Add number field',
    "actions": [
        {
            "label": "Save",
            "type": "saveNumberField"
        }
    ],
    "fieldMap": {
        "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },
        "databaseId": {
            "name": "databaseId",
            "type": "virtual",
            "value": databaseId
        },
        "collectionId": {
            "name": "collectionId",
            "type": "virtual",
            "value": collectionId
        },
        "name": {
            "label": "Name",
            "type": "text",
            "name": "name"
        },
        "description": {
            "label": "Description",
            "type": "text",
            "multiline": true,
            "name": "description"
        },
    }
}); };


/***/ }),

/***/ "./src/app/dialogs/AddRelationDialog.ts":
/*!**********************************************!*\
  !*** ./src/app/dialogs/AddRelationDialog.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddRelationFieldDialog: () => (/* binding */ AddRelationFieldDialog),
/* harmony export */   SaveRelationFieldAction: () => (/* binding */ SaveRelationFieldAction),
/* harmony export */   SelectDBCollectionView: () => (/* binding */ SelectDBCollectionView)
/* harmony export */ });
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);


var SaveRelationFieldAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var label = action.label, successAction = action.successAction, successActions = action.successActions;
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormController)();
    var dialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useDialog)();
    var formBuilder = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormBuilder)();
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    var _a = formController.GetFormData(), databaseId = _a.databaseId, collectionId = _a.collectionId, name = _a.name, relatedCollectionId = _a.relatedCollectionId, workspaceId = _a.workspaceId;
    var _b = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateRelationshipAttribute)(workspaceId), createRelationshipAttribute = _b.createRelationshipAttribute, isLoading = _b.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save Field'))
        .loading(isLoading)
        .onClick(function () {
        if (databaseId == null) {
            alert('Collection is null');
            return;
        }
        createRelationshipAttribute({
            databaseId: databaseId,
            collectionId: collectionId,
            key: name,
            relatedCollectionId: relatedCollectionId,
            type: 'manyToMany',
            twoWay: false,
            twoWayKey: collectionId + '_' + name,
            onDelete: 'restrict'
        }, function () {
            dialog.Hide();
        });
    }));
}); };
var SelectDBCollectionView = function (textData) {
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormController)();
    var value = textData.value, name = textData.name;
    var _a = formController.GetFormData(), databaseId = _a.databaseId, workspaceId = _a.workspaceId;
    var collections = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useListCollections)(workspaceId, databaseId).collections;
    /*  if (defaultValue == null) {
         defaultValue = formController.GetValue(fieldId);
     }
 
     const formState = formController.GetFieldState(name);
 
     if (!formState.isTouched && defaultValue != null) {
         formController.SetValue(name, defaultValue, true);
     }
 
     if (query != null) {
         const { body, resource, text, key } = query; */
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Dropdown)(function (option) {
        return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(option['name']));
    })(function (option) {
        return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(option['name']))
            .paddingLeft('10px');
    })
        .floatlabel(false)
        .dataSource(collections /* textData?.options[0]?.items.map(item => ({ text: item, value: item })) */)
        .fields({ text: 'name', value: '$id' })
        //.placeHolder(params.placeholder)
        .width('100%')
        .height(38)
        .formField(name, [])
        .border('1px solid #D6E4ED')
        .shadow({ focus: 'none' })).height().marginBottom('16px'));
};
var AddRelationFieldDialog = function (workspaceId, databaseId, collectionId) { return ({
    "title": 'Add relation field',
    "actions": [
        {
            "label": "Save",
            "type": "saveRelationField"
        }
    ],
    "fieldMap": {
        "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },
        "databaseId": {
            "name": "databaseId",
            "type": "virtual",
            "value": databaseId
        },
        "collectionId": {
            "name": "collectionId",
            "type": "virtual",
            "value": collectionId
        },
        "name": {
            "label": "Name",
            "type": "text",
            "name": "name"
        },
        "description": {
            "label": "Description",
            "type": "text",
            "multiline": true,
            "name": "description"
        },
        "selectCollection": {
            "label": "Collection",
            "type": "collectionSelect",
            "name": "relatedCollectionId"
        },
    }
}); };


/***/ }),

/***/ "./src/app/dialogs/AddTextFieldDialog.ts":
/*!***********************************************!*\
  !*** ./src/app/dialogs/AddTextFieldDialog.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddTextFieldDialog: () => (/* binding */ AddTextFieldDialog),
/* harmony export */   SaveTextFieldAction: () => (/* binding */ SaveTextFieldAction)
/* harmony export */ });
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);


var SaveTextFieldAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var label = action.label, successAction = action.successAction, successActions = action.successActions;
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormController)();
    var dialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useDialog)();
    var formBuilder = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormBuilder)();
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    var _a = formController.GetFormData(), databaseId = _a.databaseId, collectionId = _a.collectionId, name = _a.name, workspaceId = _a.workspaceId;
    var _b = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateStringAttribute)(workspaceId), createStringAttribute = _b.createStringAttribute, isLoading = _b.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save Field'))
        .loading(isLoading)
        .onClick(function () {
        if (databaseId == null) {
            alert('Collection is null');
            return;
        }
        createStringAttribute({
            databaseId: databaseId,
            collectionId: collectionId,
            key: name,
            required: false,
            size: 255
        }, function () {
            dialog.Hide();
        });
    }));
}); };
var AddTextFieldDialog = function (workspaceId, databaseId, collectionId) { return ({
    "title": 'Add text field',
    "actions": [
        {
            "label": "Save",
            "type": "saveTextField"
        }
    ],
    "fieldMap": {
        "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },
        "databaseId": {
            "name": "databaseId",
            "type": "virtual",
            "value": databaseId
        },
        "collectionId": {
            "name": "collectionId",
            "type": "virtual",
            "value": collectionId
        },
        "name": {
            "label": "Name",
            "type": "text",
            "name": "name"
        },
        "description": {
            "label": "Description",
            "type": "text",
            "multiline": true,
            "name": "description"
        },
    }
}); };


/***/ }),

/***/ "./src/app/dialogs/FormViews/RelationFormView.ts":
/*!*******************************************************!*\
  !*** ./src/app/dialogs/FormViews/RelationFormView.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RelationFormView: () => (/* binding */ RelationFormView)
/* harmony export */ });
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/antd */ "@realmocean/antd");
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_3__);
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




var RelationFormView = function (textData) {
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.useFormController)();
    var visibleWhen = textData.visibleWhen, required = textData.required, multiline = textData.multiline, name = textData.name, description = textData.description, relatedCollection = textData.relatedCollection;
    var canRender = false;
    var _a = formController.GetFormData(), workspaceId = _a.workspaceId, databaseId = _a.databaseId, collectionId = _a.collectionId;
    var _b = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useListDocuments)(workspaceId, databaseId, relatedCollection), documents = _b.documents, isLoading = _b.isLoading;
    if (visibleWhen != null && !_tuval_core__WEBPACK_IMPORTED_MODULE_2__.is.array(visibleWhen)) {
        var field = visibleWhen.field;
        var fieldValue = visibleWhen.is;
        if (field != null) {
            var fieldFormValue = formController.GetValue(field);
            if (fieldValue == fieldFormValue) {
                canRender = true;
            }
        }
    }
    else if (visibleWhen != null && _tuval_core__WEBPACK_IMPORTED_MODULE_2__.is.array(visibleWhen)) {
        var fails = [];
        for (var i = 0; i < visibleWhen.length; i++) {
            var field = visibleWhen[i].field;
            var fieldValue = visibleWhen[i].is;
            if (field != null) {
                var fieldFormValue = formController.GetValue(field);
                if (fieldValue == fieldFormValue) {
                }
                else {
                    fails.push(0);
                }
            }
        }
        if (fails.length === 0) {
            canRender = true;
        }
    }
    else {
        canRender = true;
    }
    var rows = formController.GetValue(name) || [];
    if (canRender) {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cTopLeading, spacing: 10 }).apply(void 0, __spreadArray(__spreadArray([], (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.ForEach)(rows)(function (keyValue, index) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Select)()
                .renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_1__.SelectRenderer)
                .value(keyValue)
                .options(documents === null || documents === void 0 ? void 0 : documents.map(function (item) { return ({ value: item.$id, label: item.Name }); }))
                .onChange(function (value) {
                rows[index] = value;
                formController.SetValue(name, __spreadArray([], rows, true));
            }));
        }), false), [(0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Button)().label('Add')
                .renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_1__.ButtonRenderer)
                .onClick(function () {
                formController.SetValue(name, __spreadArray(__spreadArray([], rows, true), [''], false));
            }).height().marginBottom('16px')], false)));
    }
};


/***/ }),

/***/ "./src/app/dialogs/SelectAppletDialog.ts":
/*!***********************************************!*\
  !*** ./src/app/dialogs/SelectAppletDialog.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectAppletDialog: () => (/* binding */ SelectAppletDialog)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Applets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Applets */ "./src/Applets.ts");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var SelectAppletDialog = /** @class */ (function (_super) {
    __extends(SelectAppletDialog, _super);
    function SelectAppletDialog() {
        var _this = _super.call(this) || this;
        _this.ShowHeader = true;
        _this.Header = 'Form';
        _this.Width = '80vw';
        _this.Height = '600px';
        _this.filtered_opas = _Applets__WEBPACK_IMPORTED_MODULE_1__.Applets;
        return _this;
    }
    SelectAppletDialog.prototype.BindRouterParams = function (_a) {
        var workspaceId = _a.workspaceId;
        this.workspaceId = workspaceId;
    };
    SelectAppletDialog.prototype.OnOK = function (applet) {
        this.ShowDialogAsyncResolve(applet);
        this.Hide();
    };
    SelectAppletDialog.prototype.OnCancel = function () {
        this.Hide();
    };
    SelectAppletDialog.prototype.LoadView = function () {
        var _this = this;
        var createDocument = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.useCreateDocument)(this.workspaceId, 'workspace', 'applets').createDocument;
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(''), installingOpa = _a[0], setInstallingOpa = _a[1];
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Heading)('Install Applet').h3()), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icons.Close).onClick(function () { return _this.OnCancel(); })).height(50).padding().background('#F9FAFB'), 
        /*     Search().width(300).allHeight(70).padding()
                .onChange((e) => this.filtered_opas = opas.filter(opa => opa.name.toLowerCase().indexOf(e.toLowerCase()) > -1)), */
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(this.filtered_opas)(function (opa) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading, spacing: 10 })(opa.image &&
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIImage)(opa.image).width(50).height(50).cornerRadius('20%'), 
            // .shadow('0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)'),
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Heading)(opa.name).h4(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Heading)(opa.description || '').h6().ellipsis(true)
                .ellipsisMaxLines(2), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cCenter })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Add'))
                // .loading(isLoading && (opa.type === this.last_added_opa_type))
                .disabled(!opa.enabled)
                .kind(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ButtonType.SECONDARY)
                .size(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ButtonSize.SMALL)
                .loading(installingOpa === opa.type)
                .width('100%')
                .onClick(function () { return __awaiter(_this, void 0, void 0, function () {
                var _loop_1, this_1, i;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: 
                        /*  this.SetValue('name', opa.name);
                         this.SetValue('folder_id', this.folder_id);
                         this.SetValue('space_id', this.space_id);
                        this.SetValue('item_type', 'opa');
                         this.SetValue('item_sub_type', opa.type);
                         this.SetValue('app_id', 'com.tuvalsoft.app.workbench');
                         this.SetValue('content', '')

                         this.last_added_opa_type = opa.type; */
                        /* fetch('./data.json')
                        .then((response) => response.json())
                        .then((json) => console.log(json)); */
                        return [4 /*yield*/, createDocument({
                                data: {
                                    name: opa.name,
                                    opa: opa.type
                                }
                            })];
                        case 1:
                            /*  this.SetValue('name', opa.name);
                             this.SetValue('folder_id', this.folder_id);
                             this.SetValue('space_id', this.space_id);
                            this.SetValue('item_type', 'opa');
                             this.SetValue('item_sub_type', opa.type);
                             this.SetValue('app_id', 'com.tuvalsoft.app.workbench');
                             this.SetValue('content', '')

                             this.last_added_opa_type = opa.type; */
                            /* fetch('./data.json')
                            .then((response) => response.json())
                            .then((json) => console.log(json)); */
                            _a.sent();
                            if (!opa.databases) return [3 /*break*/, 6];
                            setInstallingOpa(opa.type);
                            _celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.Services.Client.setProject(this.workspaceId);
                            _loop_1 = function (i) {
                                var template, name_1, id, category, collections, db_1, _loop_2, j, error_1;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            template = opa.databases[i];
                                            name_1 = template.name, id = template.id, category = template.category, collections = template.collections;
                                            _b.label = 1;
                                        case 1:
                                            _b.trys.push([1, 7, , 8]);
                                            return [4 /*yield*/, _celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.Services.Databases.create(this_1.workspaceId, id, name_1, category)];
                                        case 2:
                                            db_1 = _b.sent();
                                            _loop_2 = function (j) {
                                                var collection, name_2, id_1, attributes, documents, col, i_1, _c, key, type, _d;
                                                return __generator(this, function (_e) {
                                                    switch (_e.label) {
                                                        case 0:
                                                            collection = collections[j];
                                                            name_2 = collection.name, id_1 = collection.id, attributes = collection.attributes, documents = collection.documents;
                                                            return [4 /*yield*/, _celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.Services.Databases.createCollection(this_1.workspaceId, db_1.$id, id_1, name_2, [], false)];
                                                        case 1:
                                                            col = _e.sent();
                                                            i_1 = 0;
                                                            _e.label = 2;
                                                        case 2:
                                                            if (!(i_1 < attributes.length)) return [3 /*break*/, 8];
                                                            _c = attributes[i_1], key = _c.key, type = _c.type;
                                                            _d = type;
                                                            switch (_d) {
                                                                case 'string': return [3 /*break*/, 3];
                                                                case 'number': return [3 /*break*/, 5];
                                                            }
                                                            return [3 /*break*/, 7];
                                                        case 3:
                                                            console.log('1');
                                                            return [4 /*yield*/, _celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.Services.Databases.createStringAttribute(this_1.workspaceId, db_1.$id, col.$id, key, 256, false, '', false)];
                                                        case 4:
                                                            _e.sent();
                                                            return [3 /*break*/, 7];
                                                        case 5:
                                                            console.log('1');
                                                            return [4 /*yield*/, _celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.Services.Databases.createIntegerAttribute(this_1.workspaceId, db_1.$id, col.$id, key, false)];
                                                        case 6:
                                                            _e.sent();
                                                            return [3 /*break*/, 7];
                                                        case 7:
                                                            i_1++;
                                                            return [3 /*break*/, 2];
                                                        case 8:
                                                            setTimeout(function () {
                                                                documents === null || documents === void 0 ? void 0 : documents.forEach(function (document) { return __awaiter(_this, void 0, void 0, function () {
                                                                    var doc;
                                                                    return __generator(this, function (_a) {
                                                                        switch (_a.label) {
                                                                            case 0: return [4 /*yield*/, _celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.Services.Databases.createDocument(this.workspaceId, db_1.$id, col.$id, _celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.ID.unique(), document)];
                                                                            case 1:
                                                                                doc = _a.sent();
                                                                                console.log(doc);
                                                                                return [2 /*return*/];
                                                                        }
                                                                    });
                                                                }); });
                                                            }, 3000);
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            };
                                            j = 0;
                                            _b.label = 3;
                                        case 3:
                                            if (!(j < collections.length)) return [3 /*break*/, 6];
                                            return [5 /*yield**/, _loop_2(j)];
                                        case 4:
                                            _b.sent();
                                            _b.label = 5;
                                        case 5:
                                            j++;
                                            return [3 /*break*/, 3];
                                        case 6: return [3 /*break*/, 8];
                                        case 7:
                                            error_1 = _b.sent();
                                            console.log(error_1);
                                            return [3 /*break*/, 8];
                                        case 8: return [2 /*return*/];
                                    }
                                });
                            };
                            this_1 = this;
                            i = 0;
                            _a.label = 2;
                        case 2:
                            if (!(i < opa.databases.length)) return [3 /*break*/, 5];
                            return [5 /*yield**/, _loop_1(i)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            i++;
                            return [3 /*break*/, 2];
                        case 5:
                            setInstallingOpa('');
                            this.OnOK({
                                name: opa.name,
                                type: opa.type
                            });
                            return [3 /*break*/, 7];
                        case 6:
                            this.OnOK({
                                name: opa.name,
                                type: opa.type
                            });
                            _a.label = 7;
                        case 7: return [2 /*return*/];
                    }
                });
            }); })).height()).height(230).width(290)
                .padding()
                .shadow({ hover: 'var(--box-shadow-medium)' })
                .cornerRadius('var(--border-radius-medium)')
                .border({ default: 'solid 1px var(--layout-border-color)', hover: 'solid 1px var(--dialog-background-color)' })).width().height().padding();
        })).wrap('wrap').height()));
    };
    SelectAppletDialog.Show = function (workspaceId) {
        var dialog = new SelectAppletDialog();
        dialog.ShowHeader = false;
        /*  if (width) {
             dialog.Width = width;
         } */
        dialog.BindRouterParams({ workspaceId: workspaceId });
        return dialog.ShowDialogAsync();
    };
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ViewProperty)()
    ], SelectAppletDialog.prototype, "filtered_opas", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ViewProperty)()
    ], SelectAppletDialog.prototype, "workspaceId", void 0);
    return SelectAppletDialog;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.DialogView));



/***/ }),

/***/ "./src/app/dialogs/actions/SaveDocumentAction.ts":
/*!*******************************************************!*\
  !*** ./src/app/dialogs/actions/SaveDocumentAction.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveDocumentAction: () => (/* binding */ SaveDocumentAction)
/* harmony export */ });
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var SaveDocumentAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var label = action.label, successAction = action.successAction, successActions = action.successActions;
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormController)();
    var dialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useDialog)();
    var formBuilder = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormBuilder)();
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    var invalidateResource = null;
    var formMutate = null;
    var createMutate = null;
    var updateMutate = null;
    var isFormMutateExcuting = false;
    var isFormLoading = false;
    var views = [];
    var _a = formController.GetFormData(), databaseId = _a.databaseId, collectionId = _a.collectionId, workspaceId = _a.workspaceId;
    var _b = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, databaseId, collectionId), createDocument = _b.createDocument, isLoading = _b.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save Document_'))
        .loading(isLoading)
        .onClick(function () {
        var data = __assign({}, formController.GetFormData());
        delete data.databaseId;
        delete data.collectionId;
        delete data.workspaceId;
        if (databaseId == null) {
            alert('Collection is null');
            return;
        }
        createDocument({
            data: __assign({}, data),
            permissions: [
                _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Permission.read(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Role.any()),
                _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Permission.update(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Role.any()),
                _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Permission.delete(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Role.any())
            ]
        }, function () {
            dialog.Hide();
        });
    }));
}); };


/***/ }),

/***/ "./src/app/views/DatabaseNameView.ts":
/*!*******************************************!*\
  !*** ./src/app/views/DatabaseNameView.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatabaseNameView: () => (/* binding */ DatabaseNameView)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


function DatabaseNameView(database, selected, onClickCallback) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useParams)(), access_type = _a.access_type, workspaceId = _a.workspaceId;
        var _b = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)('readonly'), mode = _b[0], setMode = _b[1];
        // const [name, setName] = useState(applet?.name);
        var _c = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(database === null || database === void 0 ? void 0 : database.name), newName = _c[0], setNewName = _c[1];
        var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();
        //const { updateAppletName } = useUpdateAppletName();
        // const {applet:_applet} = useGetApplet(applet.$id);
        return (mode === 'readonly' ?
            //UIRouteLink(team ? `/app/${getAppFullName()}/team/${team.id}/workspace/${spaceItem.id}/folder/${folder.id}/applet/${applet.id}/scope/${applet.scope_id}` : `/app/${getAppFullName()}/workspace/${spaceItem.id}/folder/${folder.id}/applet/${applet.id}/scope/${applet.scope_id}`)(
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTrailing })(
            /*  Icon(WorkbenchIcons[database.icon] || WorkbenchIcons.DocIcon)
                 .foregroundColor('#7c828d').fontSize(18)
                 .onClick(() => {
                     onClickCallback();
                 }) */
            ).width(25).paddingRight('3px'), mode !== 'readonly' ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)() :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Heading)(database.name).h6().ellipsisMaxLines(1).ellipsis(true)
                    .fontSize(14).fontWeight('400')
                    .fontFamily('-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji')
                    .foregroundColor(selected ? '#7b68ee' : '#151719')).onClick(function () {
                    //alert(getAppletUrl(access_type, applet.id))
                    navigate("/app/com.celmino.app.test/workspace/".concat(workspaceId, "/database/").concat(database.$id));
                }), mode === 'readonly' ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)() :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TextField)().value(newName)
                    .fontFamily('Poppins,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif')
                    .fontSize(13)
                    .height('100%')
                    .padding(0)
                    .border('dashed 1px #AAA')
                    .shadow({ focus: 'none' })
                    .onBlur(function () {
                    /*   updateAppletName({
                          appletId: database.$id,
                          name: newName
                      }) */
                    setMode('readonly');
                })
                    .onChange(function (e) { return setNewName(e); }))
                .overflow('hidden').height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTrailing })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.MenuButton)()
                .model([
                {
                    title: 'Add to sub applet',
                    type: 'Title'
                },
                {
                    title: 'More Applets',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-activity-template-merged'),
                    /*   onClick: () => SelectOpaDialog.Show(database.$id, 'applet', opas).then((applet) => {

                         
                      }) */
                },
            ])
                .icon(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icons.Add), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.MenuButton)()
                .model([
                {
                    title: 'Applet Options',
                    type: 'Title'
                },
                {
                    title: 'Rename',
                    //  icon: WorkbenchIcons.Edit,
                    onClick: function () {
                        setMode('edit');
                    }
                },
                {
                    title: 'Copy link',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__link'),
                    onClick: function () {
                        copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default()(location.href);
                        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ShowToast)('Copied to clipboard');
                    }
                },
                {
                    title: 'Add to favorites',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__star'),
                    onClick: function () {
                        setMode('edit');
                    }
                },
                {
                    title: 'Dublicate',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__copy'),
                    onClick: function () {
                        var data = __assign({}, database);
                        delete data['id'];
                        /*  createApplet(applet, {
                             onSuccess: (newApplet) => {
                                 invalidateResourceCache();
                                 ShowSuccessToast('Dublicated.');
                                 navigate(getAppletUrl(access_type, team?.id, newApplet.id))
                             }
                         }) */
                    }
                },
                {
                    title: 'Move',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__move'),
                    onClick: function () {
                        setMode('edit');
                    }
                },
                {
                    title: 'Description',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-info4'),
                    onClick: function () {
                        // DynoDialog.Show(AppletDescriptionDialog(database.$id))
                    }
                },
                {
                    title: 'Delete',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__delete', '#bc4841'),
                    color: '#bc4841',
                    onClick: function () {
                        var accept = function () {
                            /* deleteView(applet.id, {
                                onSuccess: () => {
                                    invalidateResCache();

                                    team ?
                                        navigate(`/app/${getAppFullName()}/team/${team.id}/workspace/${applet.workspace_id}`)
                                        :
                                        navigate(`/app/${getAppFullName()}/workspace/${applet.workspace_id}`);

                                }
                            }) */
                            // toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                        };
                        var reject = function () {
                            //alert('reject')
                            // toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                        };
                        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.confirmDialog)({
                            message: 'Do you want to delete this applet?',
                            header: 'Delete Confirmation',
                            icon: 'pi pi-info-circle',
                            acceptClassName: 'p-button-danger',
                            accept: accept,
                            reject: reject
                        });
                        //DynoDialog.Show(AppletDescriptionDialog(applet.id))
                    }
                }
            ])
                .icon(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icons.Menu)).width(64).height(32).padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 5)
                .display('var(--show-applet-action-buttons)')
                .onClick(function (e) {
                e.preventDefault();
                e.stopPropagation();
            }))
                // .borderLeft(selected ? 'solid 1px #7B68EE' : '')
                .background({ default: selected ? '#F5F3FD' : '', hover: '#f6f7f9' })
                .allHeight(32)
                //.padding(`0 0 0 20px`)
                .cursor('pointer')
                .draggable(true)
                .onDragStart(function (e) {
                e.dataTransfer.setData('text/plain', JSON.stringify(database));
            })
                .variable('--show-applet-action-buttons', { default: 'none', hover: 'flex' })
            :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 5 })(
                // Icon((opas as any).find((opa) => opa.type === database.opa)?.icon || WorkbenchIcons.DocIcon).foregroundColor('#7c828d'),
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TextField)().value(newName)
                    .fontFamily('Poppins,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif')
                    .fontSize(13)
                    .height('100%')
                    .padding(0)
                    .border('dashed 1px #AAA')
                    .shadow({ focus: 'none' })
                    .onBlur(function () {
                    /*   updateAppletName({
                          appletId: database.$id,
                          name: newName
                      }, () => {
                          onSuccess: () => {
                              ShowSuccessToast('We successfully rename applet', 'Undo', () => { */
                    /* updateApplet(applet.id, {
                        name: name
                    }, {
                        onSuccess: () => {
                            setName(name);
                            ShowSuccessToast('We successfully undo rename applet')
                        }
                    }) */
                    /*  })
                 } */
                    //})
                    setMode('readonly');
                })
                    .onChange(function (e) { return setNewName(e); }))
                    //   .borderLeft(selected ? 'solid 1px #7B68EE' : '')
                    .background({ default: selected ? '#F5F3FD' : '', hover: '#f6f7f9' })
                    .allHeight(32)
                    .padding('0 0 0 40px')
                    .cursor('pointer'));
    }));
}


/***/ }),

/***/ "./src/app/views/LeftSideMenu.tsx":
/*!****************************************!*\
  !*** ./src/app/views/LeftSideMenu.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapseLeftIcon: () => (/* binding */ CollapseLeftIcon),
/* harmony export */   CollapseRightIcon: () => (/* binding */ CollapseRightIcon),
/* harmony export */   DocIcon: () => (/* binding */ DocIcon),
/* harmony export */   LeftSideMenuView: () => (/* binding */ LeftSideMenuView),
/* harmony export */   WhiteboardIcon: () => (/* binding */ WhiteboardIcon)
/* harmony export */ });
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @celmino/ui */ "@celmino/ui");
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_celmino_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DatabaseNameView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DatabaseNameView */ "./src/app/views/DatabaseNameView.ts");
/* harmony import */ var _dialogs_AddAppletDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialogs/AddAppletDialog */ "./src/app/dialogs/AddAppletDialog.ts");
/* harmony import */ var _dialogs_SelectAppletDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialogs/SelectAppletDialog */ "./src/app/dialogs/SelectAppletDialog.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};








function a(strings) {
    var expr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        expr[_i - 1] = arguments[_i];
    }
    var str = '';
    strings.forEach(function (string, i) {
        if (_tuval_core__WEBPACK_IMPORTED_MODULE_1__.is.string(expr[i])) {
            str += string + '"' + (expr[i] || '') + '"';
        }
    });
    return str;
}
var aaa = 'sfdlfk';
var b = a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["hjkhsdf\n", "\nsdfsdfsdf"], ["hjkhsdf\n", "\nsdfsdfsdf"])), aaa);
var CollapseRightIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "24", height: "24", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M13.435 8.464a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.829 2.829a1 1 0 1 1-1.414-1.415L14.556 13H3a1 1 0 1 1 0-2h11.556l-1.121-1.121a1 1 0 0 1 0-1.415z", "clip-rule": "evenodd" }),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M21 4.5a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0v-13a1 1 0 0 1 1-1z", fill: "currentColor" }))); };
var CollapseLeftIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "100%", height: "100%", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M10.565 15.536a1 1 0 0 1-1.414 0l-2.829-2.829a1 1 0 0 1 0-1.414l2.829-2.829a1 1 0 0 1 1.414 1.415L9.444 11H21a1 1 0 1 1 0 2H9.444l1.121 1.121a1 1 0 0 1 0 1.415Z", "clip-rule": "evenodd" }),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M3 19.5a1 1 0 0 1-1-1v-13a1 1 0 1 1 2 0v13a1 1 0 0 1-1 1Z", fill: "currentColor" }))); };
var HomeIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("svg", { viewBox: "0 0 16 16", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M8.407 2.06a.6.6 0 0 0-.814 0l-6.5 6a.6.6 0 1 0 .814.881l.493-.455V13A1.6 1.6 0 0 0 4 14.6h3.1V11a.4.4 0 0 1 .4-.4h1c.22 0 .4.18.4.4v3.6H12a1.6 1.6 0 0 0 1.6-1.6V8.486l.493.455a.6.6 0 0 0 .814-.881l-6.5-6zM12.4 7.378 8 3.317 3.6 7.378V13a.4.4 0 0 0 .4.4h1.9V11a1.6 1.6 0 0 1 1.6-1.6h1a1.6 1.6 0 0 1 1.6 1.6v2.4H12a.4.4 0 0 0 .4-.4V7.378z", "clip-rule": "evenodd" }))); };
var DocIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M6 5a1 1 0 0 1 1-1h6.172a1 1 0 0 1 .707.293l3.828 3.828a1 1 0 0 1 .293.707V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5zm1-3a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 13.172 2H7zm2 6a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2H9zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9zm-1 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1z", "clip-rule": "evenodd" }))); };
var DraftIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M19 5H5v3h14V5zm.983 4.742A2 2 0 0 0 21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3a2 2 0 0 0 1.016 1.742A2.18 2.18 0 0 0 4 10v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9c0-.087-.006-.174-.017-.258zM18 10H6v9h12v-9zm-9 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1z", "clip-rule": "evenodd" }))); };
var WhiteboardIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M18.142 4.291a3 3 0 0 1 4.242 4.243l-4.455 4.455a2 2 0 0 1-1.158.57l-1.624.209a2 2 0 0 1-2.24-2.24l.21-1.623a2 2 0 0 1 .57-1.159l4.455-4.455Zm2.828 1.414a1 1 0 0 0-1.414 0L15.1 10.16l-.21 1.624 1.624-.21L20.97 7.12a1 1 0 0 0 0-1.415Zm-16.4-.12a1.25 1.25 0 0 0-1.25 1.25v2.522l1.585-1.409a3.097 3.097 0 0 1 4.114 4.63l-.903.803a1.059 1.059 0 1 0 1.452 1.54l1.044-1.044a1 1 0 0 1 1.415 1.414l-1.045 1.044a3.059 3.059 0 1 1-4.195-4.45l.904-.802a1.097 1.097 0 1 0-1.458-1.64l-2.914 2.59v5.301c0 .69.56 1.25 1.25 1.25h13.5c.69 0 1.25-.56 1.25-1.25V14.21a1 1 0 0 1 2 0v3.125a3.25 3.25 0 0 1-3.25 3.25H4.57a3.25 3.25 0 0 1-3.25-3.25V11.59a.72.72 0 0 1 0-.01V6.835a3.25 3.25 0 0 1 3.25-3.25h9.023a1 1 0 1 1 0 2H4.57Z", "clip-rule": "evenodd" }))); };
var fontFamily = '-apple-system, "BlinkMacSystemFont", "Segoe UI", "Helvetica", "Apple Color Emoji", "Arial", sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"';
var menuModel = [
    {
        title: 'Home',
        icon: function () { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.ReactView)(react__WEBPACK_IMPORTED_MODULE_3___default().createElement(HomeIcon, null)).frame(true); },
        link: '/app/com.celmino.app.test/home',
        subItems: [
            {
                name: 'Overview',
                icon: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Icons.API,
                link: '/app/com.tuvalsoft.app.organizationmanager/b'
            },
            {
                name: 'Sessions',
                icon: "\\e425",
                link: '/app/com.tuvalsoft.app.organizationmanager/sessions'
            }
        ]
    },
    {
        title: 'Project Spaces',
        icon: function () { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.ReactView)(react__WEBPACK_IMPORTED_MODULE_3___default().createElement(HomeIcon, null)).frame(true); },
        link: '/app/com.celmino.app.test/home',
        subItems: [
            {
                name: 'Overview',
                icon: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Icons.API,
                link: '/app/com.tuvalsoft.app.organizationmanager/b'
            },
            {
                name: 'Sessions',
                icon: "\\e425",
                link: '/app/com.tuvalsoft.app.organizationmanager/sessions'
            }
        ]
    },
    {
        title: 'Drafts',
        icon: function () { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.ReactView)(react__WEBPACK_IMPORTED_MODULE_3___default().createElement(DraftIcon, null)).frame(true); },
        link: '/app/com.tuvalsoft.app.workbench/drafts'
    },
    {
        title: 'Teams',
        icon: function () { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Icon)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.SvgIcon)('svg-sprite-teams', '#A1A1A1')); },
        link: "/app/".concat((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.getAppFullName)(), "/teams")
    },
    {
        title: 'Whiteboards',
        icon: function () { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.ReactView)(react__WEBPACK_IMPORTED_MODULE_3___default().createElement(WhiteboardIcon, null)).frame(true); },
        link: '/app/com.tuvalsoft.app.workbench/whiteboards'
    }
];
var global_openedIDs = {};
var LeftSideMenuView = function (selectedItem) {
    var showAllWorkspaces = true;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIViewBuilder)(function () {
        var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useParams)(), team_id = _a.team_id, workspaceId = _a.workspaceId, listId = _a.listId, applet_id = _a.applet_id;
        var databases = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useListDatabases)(workspaceId, [
            _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Query.equal('category', 'applet')
        ]).databases;
        var documents = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useListDocuments)(workspaceId, 'workspace', 'applets', [
        // Query.equal('opa', 'com.celmino.widget.enterprise-modelling-tree')
        ]).documents;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.TextField)()
            .paddingLeft('30px')
            .cornerRadius(5)
            .background('#F6F7F9')
            .border('unset')).height().padding(10), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.ForEach)(menuModel)(function (menuItem) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIRouteLink)(menuItem.link)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading })(menuItem.icon().padding(7).foregroundColor(selectedItem === menuItem.title ? '#7b68ee' : '#7c828d'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)(menuItem.title).fontSize(13).fontWeight('400').foregroundColor(selectedItem === menuItem.title ? '#7b68ee' : '#53575e'))
                .borderLeft(selectedItem === menuItem.title ? 'solid 1px #7B68EE' : '')
                .background({ default: selectedItem === menuItem.title ? '#F5F3FD' : '', hover: '#f6f7f9' })
                .height(32).padding('0 10px')).width('100%');
        })).height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HDivider)().height(1).background('#e9ebf0'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HDivider)().height(1).background('#e9ebf0'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading }).apply(void 0, __spreadArray(__spreadArray([(0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('APPLETS')
                .fontSize(11)
                .fontWeight('700')).height(40).padding('1px 18px 0 20px')], (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.ForEach)(databases.databases)(function (database) {
            //    UIRouteLink(`/app/${getAppFullName()}/database/${database.$id}`)(
            return (0,_DatabaseNameView__WEBPACK_IMPORTED_MODULE_5__.DatabaseNameView)(database, false, function () { });
        }
        //    )
        ), false), [(0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading, spacing: 5 })(documents ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.ScrollView)({ axes: 'cAll', alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.ForEach)(documents)(function (applet) {
                return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIWidget)(applet['opa'])
                    .config(__assign({}, ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useParams)() || {})));
            })) : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Fragment)()
            /*  ...ForEach(spaces)(space =>
                 Text(space.name)
             ), */
            ),
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIViewBuilder)(function () {
                var createProject = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateProject)().createProject;
                var workspace_id = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useParams)().workspace_id;
                return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ spacing: 5 })(
                //FontIcon(FontIcons.Add, 'sm', '#656f7d'),
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('New Applet').fontSize(11).fontWeight('500'))
                    .margin('5px 20px')
                    .cornerRadius(5)
                    .cursor('pointer')
                    .foregroundColor('#7c828d')
                    .background({ default: '#f3f4f7', hover: '#e4e4e4' })
                    .height(24)
                    .transition('background .2s cubic-bezier(.785,.135,.15,.86) 0s')
                    .padding('8px 12px 8px 26px')
                    .onClick(function () {
                    _celmino_ui__WEBPACK_IMPORTED_MODULE_4__.DynoDialog.Show((0,_dialogs_AddAppletDialog__WEBPACK_IMPORTED_MODULE_6__.AddAppletDialog)(workspaceId));
                    /* createSpace({
                        name: 'New Space',
                        description: 'ksjlfjsd',
                        workspaceId: workspace
                    }); */
                }));
            })).height(),
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIViewBuilder)(function () {
                var createDatabase = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDatabase)(workspaceId).createDatabase;
                return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ spacing: 5 })(
                //FontIcon(FontIcons.Add, 'sm', '#656f7d'),
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('Install Applet').fontSize(11).fontWeight('500'))
                    .margin('5px 20px')
                    .cornerRadius(5)
                    .cursor('pointer')
                    .foregroundColor('#7c828d')
                    .background({ default: '#f3f4f7', hover: '#e4e4e4' })
                    .height(24)
                    .transition('background .2s cubic-bezier(.785,.135,.15,.86) 0s')
                    .padding('8px 12px 8px 26px')
                    .onClick(function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        _dialogs_SelectAppletDialog__WEBPACK_IMPORTED_MODULE_7__.SelectAppletDialog.Show(workspaceId);
                        return [2 /*return*/];
                    });
                }); }));
            })).height(),
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIViewBuilder)(function () {
                var createDatabase = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDatabase)(workspaceId).createDatabase;
                return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ spacing: 5 })(
                //FontIcon(FontIcons.Add, 'sm', '#656f7d'),
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('Templates').fontSize(11).fontWeight('500'))
                    .margin('5px 20px')
                    .cornerRadius(5)
                    .cursor('pointer')
                    .foregroundColor('#7c828d')
                    .background({ default: '#f3f4f7', hover: '#e4e4e4' })
                    .height(24)
                    .transition('background .2s cubic-bezier(.785,.135,.15,.86) 0s')
                    .padding('8px 12px 8px 26px')
                    .onClick(function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        _dialogs_SelectAppletDialog__WEBPACK_IMPORTED_MODULE_7__.SelectAppletDialog.Show(workspaceId);
                        return [2 /*return*/];
                    });
                }); }));
            })).height()], false))))
            .fontFamily(fontFamily)
            .allWidth(282)
            .background('white')
            .borderRight('1px solid #e9ebf0')
            .transition('width .2s ease-in-out'));
    }));
};
var templateObject_1;


/***/ }),

/***/ "./src/views/ColorItemView.ts":
/*!************************************!*\
  !*** ./src/views/ColorItemView.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorItemView: () => (/* binding */ ColorItemView)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

var ColorItemView = function (color) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)()
        .cursor('pointer')
        .width(20)
        .height(20)
        .background(color)
        .cornerRadius('100%')
        .border('1px solid rgba(0, 0, 0, 0.14)'))
        .width(32)
        .height(32)
        .cornerRadius(6)
        .background({ hover: 'rgba(109, 122, 131, 0.2)' }));
};


/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/***/ ((module) => {

module.exports = {
    application: {
        name: 'com.celmino.app.test',
        path: './src/Application.ts',
        displayName: "Procetra",
        docker_container_name:"celmino",
        icon: "data:image/svg+xml;base64,PHN2ZyBpZD0iZjc4ZjUxMTUtYmU4OC00ZDQ0LWIzNGUtM2Y2ZWE3NDMxMjVjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImI2YzQzYmQ5LWUzN2YtNDE5MS05M2MyLWQzYTdhODRjNTA1ZSIgeDE9IjkiIHkxPSIxOS4xMyIgeDI9IjkiIHkyPSItMC4yOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwNzhkNCIgLz48c3RvcCBvZmZzZXQ9IjAuMTYiIHN0b3AtY29sb3I9IiMxMzgwZGEiIC8+PHN0b3Agb2Zmc2V0PSIwLjUzIiBzdG9wLWNvbG9yPSIjM2M5MWU1IiAvPjxzdG9wIG9mZnNldD0iMC44MiIgc3RvcC1jb2xvcj0iIzU1OWNlYyIgLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1ZWEwZWYiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHRpdGxlPkljb24tbWFjaGluZWxlYXJuaW5nLTE2MjwvdGl0bGU+PHBhdGggZD0iTTE4LDExLjM4QTQsNCwwLDAsMCwxNC40OSw3LjUsNS4xLDUuMSwwLDAsMCw5LjI0LDIuNjIsNS4yNSw1LjI1LDAsMCwwLDQuMjIsNiw0LjgsNC44LDAsMCwwLDAsMTAuNjdhNC45LDQuOSwwLDAsMCw1LjA3LDQuNzFsLjQ0LDBoOC4yMWEuNzguNzgsMCwwLDAsLjIyLDBBNC4xLDQuMSwwLDAsMCwxOCwxMS4zOFoiIGZpbGw9InVybCgjYjZjNDNiZDktZTM3Zi00MTkxLTkzYzItZDNhN2E4NGM1MDVlKSIgLz48cGF0aCBkPSJNNS40MiwxMC4zOUg0LjU0YTEuMDksMS4wOSwwLDEsMCwwLC40OWguODhhLjIuMiwwLDAsMSwuMi4ydjQuM2guNDl2LTQuM0EuNjkuNjksMCwwLDAsNS40MiwxMC4zOVptLTEuOTUuODhhLjY0LjY0LDAsMSwxLC42NC0uNjRBLjY0LjY0LDAsMCwxLDMuNDcsMTEuMjdaIiBmaWxsPSIjOWNlYmZmIiAvPjxwYXRoIGQ9Ik04Ljk0LDEwLjYxdi0xYS43LjcsMCwwLDAtLjctLjdINi42OWEuMi4yLDAsMCwxLS4yLS4yVjMuNGwtLjIzLjEyTDYsMy42NnY1YS42OS42OSwwLDAsMCwuNjkuNjlIOC4yNGEuMjEuMjEsMCwwLDEsLjIxLjIxdjFhMS4wOCwxLjA4LDAsMCwwLS44NSwxLjA2LDEuMDksMS4wOSwwLDEsMCwxLjM0LTEuMDZabS0uMjUsMS43aDBhLjY0LjY0LDAsMSwxLC42NC0uNjRBLjY0LjY0LDAsMCwxLDguNjksMTIuMzFaIiBmaWxsPSIjZjJmMmYyIiAvPjxwYXRoIGQ9Ik0xNC41Myw4LjVhMS4wOSwxLjA5LDAsMCwwLS4yNSwyLjE1di4yYS4yMS4yMSwwLDAsMS0uMjEuMjFoLTJWNy41NGEuNjkuNjksMCwwLDAtLjY5LS42OUgxMC4zNUExLjA4LDEuMDgsMCwwLDAsOS4yOSw2YTEuMDksMS4wOSwwLDEsMCwxLjA2LDEuMzRoMS4wN2EuMi4yLDAsMCwxLC4yLjJ2Ny44NGguNDlWMTEuNTVoMmEuNy43LDAsMCwwLC43LS43di0uMmExLjA5LDEuMDksMCwwLDAsLjg1LTEuMDZoMEExLjA5LDEuMDksMCwwLDAsMTQuNTMsOC41Wk05LjI5LDcuNzNoMGEuNjQuNjQsMCwxLDEsLjY0LS42NEEuNjQuNjQsMCwwLDEsOS4yOSw3LjczWm01LjI0LDIuNWgwYS42NC42NCwwLDEsMSwuNjMtLjY0QS42NC42NCwwLDAsMSwxNC41MywxMC4yM1oiIGZpbGw9IiM5Y2ViZmYiIC8+PC9zdmc+"
       
    }
    /* threads: {
        'PMThreadWorker': 'ThreadWorker.ts'
    } */
}

/***/ }),

/***/ "@celmino/sdk":
/*!******************************!*\
  !*** external "celmino$sdk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = celmino$sdk;

/***/ }),

/***/ "@celmino/ui":
/*!*****************************!*\
  !*** external "celmino$ui" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = celmino$ui;

/***/ }),

/***/ "@realmocean/antd":
/*!**********************************!*\
  !*** external "realmocean$antd" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = realmocean$antd;

/***/ }),

/***/ "@tuval/core":
/*!*****************************!*\
  !*** external "tuval$core" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = tuval$core;

/***/ }),

/***/ "@tuval/forms":
/*!******************************!*\
  !*** external "tuval$forms" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = tuval$forms;

/***/ }),

/***/ "react":
/*!******************************!*\
  !*** external "tuval$react" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = tuval$react;

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/Application.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcessMining: () => (/* binding */ ProcessMining)
/* harmony export */ });
/* harmony import */ var _app_controllers_AppController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/controllers/AppController */ "./src/app/controllers/AppController.tsx");
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @celmino/ui */ "@celmino/ui");
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_celmino_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_dialogs_actions_SaveDocumentAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/dialogs/actions/SaveDocumentAction */ "./src/app/dialogs/actions/SaveDocumentAction.ts");
/* harmony import */ var _app_dialogs_AddTextFieldDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/dialogs/AddTextFieldDialog */ "./src/app/dialogs/AddTextFieldDialog.ts");
/* harmony import */ var _app_dialogs_AddNumberFieldDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/dialogs/AddNumberFieldDialog */ "./src/app/dialogs/AddNumberFieldDialog.ts");
/* harmony import */ var _app_dialogs_AddAppletDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/dialogs/AddAppletDialog */ "./src/app/dialogs/AddAppletDialog.ts");
/* harmony import */ var _app_dialogs_AddBooleanFieldDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/dialogs/AddBooleanFieldDialog */ "./src/app/dialogs/AddBooleanFieldDialog.ts");
/* harmony import */ var _app_dialogs_AddDatetimeField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/dialogs/AddDatetimeField */ "./src/app/dialogs/AddDatetimeField.ts");
/* harmony import */ var _app_dialogs_AddRelationDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/dialogs/AddRelationDialog */ "./src/app/dialogs/AddRelationDialog.ts");
/* harmony import */ var _app_dialogs_FormViews_RelationFormView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app/dialogs/FormViews/RelationFormView */ "./src/app/dialogs/FormViews/RelationFormView.ts");
/* harmony import */ var _app_dialogs_AddCollection_actions_SaveCollectionAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app/dialogs/AddCollection/actions/SaveCollectionAction */ "./src/app/dialogs/AddCollection/actions/SaveCollectionAction.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var manifest = __webpack_require__(/*! ./manifest */ "./src/manifest.js");
function App(manifest) {
    return function (constructor) {
        if (tuval$core['__APPS__'] == null) {
            tuval$core['__APPS__'] = {};
        }
        tuval$core['__APPS__'][manifest.application.name] = constructor;
    };
}
var ProcessMining = /** @class */ (function () {
    function ProcessMining() {
    }
    ProcessMining.prototype.GetMainController = function () {
        return _app_controllers_AppController__WEBPACK_IMPORTED_MODULE_0__.MyTestController;
    };
    ProcessMining = __decorate([
        App(manifest)
    ], ProcessMining);
    return ProcessMining;
}());

_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectView('collectionSelect', _app_dialogs_AddRelationDialog__WEBPACK_IMPORTED_MODULE_8__.SelectDBCollectionView);
_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectView('relation', _app_dialogs_FormViews_RelationFormView__WEBPACK_IMPORTED_MODULE_9__.RelationFormView);
//FormBuilder.injectAction('saveSpace', SaveSpaceAction);
_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveCollection', _app_dialogs_AddCollection_actions_SaveCollectionAction__WEBPACK_IMPORTED_MODULE_10__.SaveCollectionAction);
_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveDocument', _app_dialogs_actions_SaveDocumentAction__WEBPACK_IMPORTED_MODULE_2__.SaveDocumentAction);
_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveTextField', _app_dialogs_AddTextFieldDialog__WEBPACK_IMPORTED_MODULE_3__.SaveTextFieldAction);
_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveNumberField', _app_dialogs_AddNumberFieldDialog__WEBPACK_IMPORTED_MODULE_4__.SaveNumberFieldAction);
_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveApplet', _app_dialogs_AddAppletDialog__WEBPACK_IMPORTED_MODULE_5__.SaveAppletAction);
_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveBooleanField', _app_dialogs_AddBooleanFieldDialog__WEBPACK_IMPORTED_MODULE_6__.SaveBooleanFieldAction);
_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveDatetimeField', _app_dialogs_AddDatetimeField__WEBPACK_IMPORTED_MODULE_7__.SaveDatetimeFieldAction);
_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveRelationField', _app_dialogs_AddRelationDialog__WEBPACK_IMPORTED_MODULE_8__.SaveRelationFieldAction);

})();

/******/ })()
;
//# sourceMappingURL=index.js.map
                     tuval$core.ModuleLoader.FireModuleLoadedEvent('com.celmino.app.test', tuval$core['__APPS__']['com.celmino.app.test']);
                    
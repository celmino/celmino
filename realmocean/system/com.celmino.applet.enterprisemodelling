
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

/***/ "./src/AppController.tsx":
/*!*******************************!*\
  !*** ./src/AppController.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyTestController": () => (/* binding */ MyTestController)
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

var MyTestController = /** @class */ (function (_super) {
    __extends(MyTestController, _super);
    function MyTestController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyTestController.prototype.LoadView = function () {
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useParams)(), applet_id = _a.applet_id, view_id = _a.view_id;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRouteOutlet)().width('100%').height('100%')).background('#FAFBFC'));
    };
    return MyTestController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIFormController));

/* export class MyTestController extends UIFormController {
    LoadView(): UIView {
         const { applet_id } = useParams();
        const { createTask } = useCreateTask([]);
       const { tasks } = useListTasks();

       // const {stageSets} = useListTaskStageSets();
        return (
            
            // Text(JSON.stringify(stageSets)),
            Text(JSON.stringify(tasks))
                .onClick(() => {
                    createTask({
                        appletId: applet_id,
                        $id: ID.unique(),
                        title: 'Hello world',
                        

                    })
                })
 
        )
    }
} */ 


/***/ }),

/***/ "./src/RouteController.ts":
/*!********************************!*\
  !*** ./src/RouteController.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteController": () => (/* binding */ RouteController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppController */ "./src/AppController.tsx");
/* harmony import */ var _ViewController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewController */ "./src/ViewController.tsx");
/* harmony import */ var _applet_controllers_ModelTypesController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./applet/controllers/ModelTypesController */ "./src/applet/controllers/ModelTypesController.ts");
/* harmony import */ var _applet_controllers_ObjectTypesController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./applet/controllers/ObjectTypesController */ "./src/applet/controllers/ObjectTypesController.ts");
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





var RouteController = /** @class */ (function (_super) {
    __extends(RouteController, _super);
    function RouteController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RouteController.prototype.routeView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoutes)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('/', _AppController__WEBPACK_IMPORTED_MODULE_1__.MyTestController).children((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('model_types', _applet_controllers_ModelTypesController__WEBPACK_IMPORTED_MODULE_3__.ModelTypesController), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('object_types', _applet_controllers_ObjectTypesController__WEBPACK_IMPORTED_MODULE_4__.ObjectTypesController), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)(':view_id/*', _ViewController__WEBPACK_IMPORTED_MODULE_2__.ViewController))))
                .background('var(--primary-background-color)');
        }));
    };
    RouteController.prototype.LoadView = function () {
        return this.routeView();
    };
    return RouteController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/ViewController.tsx":
/*!********************************!*\
  !*** ./src/ViewController.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OPA": () => (/* binding */ OPA),
/* harmony export */   "OpaLoader": () => (/* binding */ OpaLoader),
/* harmony export */   "Paths": () => (/* binding */ Paths),
/* harmony export */   "ViewController": () => (/* binding */ ViewController),
/* harmony export */   "getAppName": () => (/* binding */ getAppName)
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
    var view_qn = _a.view_qn, content = _a.content, onSave = _a.onSave;
    //const { opa_name } = useParams();
    var opa_name = view_qn;
    var location = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
    var controllerPromise = new Promise(function (resolve, reject) {
        if (AppCache[opa_name]) {
            resolve(AppCache[opa_name]);
        }
        else {
            var app_path = "/realmocean/store/app/open-testing/".concat(opa_name);
            // alert(app_path)
            var app_path_local = "/static/applications/".concat(opa_name, ".app");
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
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(OPA, { name: opa_name, controller: contoller, content: content, onSave: onSave }));
};
var ViewController = /** @class */ (function (_super) {
    __extends(ViewController, _super);
    function ViewController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewController.prototype.LoadView = function () {
        var _this = this;
        var view_id = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useParams)().view_id;
        var _a = {}, view = _a.view, isLoading = _a.isLoading; //useGetView(view_id);
        return (isLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Spinner)() :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)(
            //  NotesLeftMenu(note_id),
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ReactView)(react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Suspense), { fallback: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Spinner)()).render()) },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ErrorBoundary, null,
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(OpaLoader, { view_qn: view === null || view === void 0 ? void 0 : view.view, content: {}, onSave: function (content) {
                            _this.SetValue('content', content);
                            //update();
                        } })))).frame(true).width('100%').height('100%'))).overflow('hidden')).background('white')))).background('#FAFBFC')));
    };
    return ViewController;
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

/***/ "./src/applet/controllers/ModelTypesController.ts":
/*!********************************************************!*\
  !*** ./src/applet/controllers/ModelTypesController.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelTypesController": () => (/* binding */ ModelTypesController)
/* harmony export */ });
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__);
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



var ModelTypesController = /** @class */ (function (_super) {
    __extends(ModelTypesController, _super);
    function ModelTypesController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModelTypesController.prototype.LoadView = function () {
        var openDialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useDialogStack)().openDialog;
        var workspaceId = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useParams)().workspaceId;
        var documents = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useListDocuments)(workspaceId, 'enterprise_modelling', 'model_types', [
            _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Query.limit(10000)
        ]).documents;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Button)().label('Test').renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_1__.ButtonRenderer).onClick(function () {
            openDialog({
                title: 'Test',
                view: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('Test'),
            });
        }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIDataTable)()
            .columns([
            {
                field: 'Name',
                header: function (data) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('Name'))
                    .padding(10); }
            },
        ])
            .model(documents)).padding());
    };
    return ModelTypesController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIFormController));



/***/ }),

/***/ "./src/applet/controllers/ObjectTypesController.ts":
/*!*********************************************************!*\
  !*** ./src/applet/controllers/ObjectTypesController.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectTypesController": () => (/* binding */ ObjectTypesController)
/* harmony export */ });
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__);
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



var ObjectTypesController = /** @class */ (function (_super) {
    __extends(ObjectTypesController, _super);
    function ObjectTypesController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectTypesController.prototype.LoadView = function () {
        var openDialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useDialogStack)().openDialog;
        var workspaceId = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useParams)().workspaceId;
        var documents = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useListDocuments)(workspaceId, 'enterprise_modelling', 'object_types', [
            _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Query.limit(10000)
        ]).documents;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Button)().label('Test').renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_1__.ButtonRenderer).onClick(function () {
            openDialog({
                title: 'Test',
                view: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('Test'),
            });
        }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIDataTable)()
            .columns([
            {
                field: 'Name',
                header: function (data) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('Name'))
                    .padding(10); }
            },
        ])
            .model(documents)).padding());
    };
    return ObjectTypesController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIFormController));



/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/***/ ((module) => {

module.exports = {
    application: {
        name: 'com.celmino.applet.enterprisemodelling',
        path: './src/Application.ts',
        displayName: "Procetra",
        icon: "data:image/svg+xml;base64,PHN2ZyBpZD0iZjc4ZjUxMTUtYmU4OC00ZDQ0LWIzNGUtM2Y2ZWE3NDMxMjVjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImI2YzQzYmQ5LWUzN2YtNDE5MS05M2MyLWQzYTdhODRjNTA1ZSIgeDE9IjkiIHkxPSIxOS4xMyIgeDI9IjkiIHkyPSItMC4yOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwNzhkNCIgLz48c3RvcCBvZmZzZXQ9IjAuMTYiIHN0b3AtY29sb3I9IiMxMzgwZGEiIC8+PHN0b3Agb2Zmc2V0PSIwLjUzIiBzdG9wLWNvbG9yPSIjM2M5MWU1IiAvPjxzdG9wIG9mZnNldD0iMC44MiIgc3RvcC1jb2xvcj0iIzU1OWNlYyIgLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1ZWEwZWYiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHRpdGxlPkljb24tbWFjaGluZWxlYXJuaW5nLTE2MjwvdGl0bGU+PHBhdGggZD0iTTE4LDExLjM4QTQsNCwwLDAsMCwxNC40OSw3LjUsNS4xLDUuMSwwLDAsMCw5LjI0LDIuNjIsNS4yNSw1LjI1LDAsMCwwLDQuMjIsNiw0LjgsNC44LDAsMCwwLDAsMTAuNjdhNC45LDQuOSwwLDAsMCw1LjA3LDQuNzFsLjQ0LDBoOC4yMWEuNzguNzgsMCwwLDAsLjIyLDBBNC4xLDQuMSwwLDAsMCwxOCwxMS4zOFoiIGZpbGw9InVybCgjYjZjNDNiZDktZTM3Zi00MTkxLTkzYzItZDNhN2E4NGM1MDVlKSIgLz48cGF0aCBkPSJNNS40MiwxMC4zOUg0LjU0YTEuMDksMS4wOSwwLDEsMCwwLC40OWguODhhLjIuMiwwLDAsMSwuMi4ydjQuM2guNDl2LTQuM0EuNjkuNjksMCwwLDAsNS40MiwxMC4zOVptLTEuOTUuODhhLjY0LjY0LDAsMSwxLC42NC0uNjRBLjY0LjY0LDAsMCwxLDMuNDcsMTEuMjdaIiBmaWxsPSIjOWNlYmZmIiAvPjxwYXRoIGQ9Ik04Ljk0LDEwLjYxdi0xYS43LjcsMCwwLDAtLjctLjdINi42OWEuMi4yLDAsMCwxLS4yLS4yVjMuNGwtLjIzLjEyTDYsMy42NnY1YS42OS42OSwwLDAsMCwuNjkuNjlIOC4yNGEuMjEuMjEsMCwwLDEsLjIxLjIxdjFhMS4wOCwxLjA4LDAsMCwwLS44NSwxLjA2LDEuMDksMS4wOSwwLDEsMCwxLjM0LTEuMDZabS0uMjUsMS43aDBhLjY0LjY0LDAsMSwxLC42NC0uNjRBLjY0LjY0LDAsMCwxLDguNjksMTIuMzFaIiBmaWxsPSIjZjJmMmYyIiAvPjxwYXRoIGQ9Ik0xNC41Myw4LjVhMS4wOSwxLjA5LDAsMCwwLS4yNSwyLjE1di4yYS4yMS4yMSwwLDAsMS0uMjEuMjFoLTJWNy41NGEuNjkuNjksMCwwLDAtLjY5LS42OUgxMC4zNUExLjA4LDEuMDgsMCwwLDAsOS4yOSw2YTEuMDksMS4wOSwwLDEsMCwxLjA2LDEuMzRoMS4wN2EuMi4yLDAsMCwxLC4yLjJ2Ny44NGguNDlWMTEuNTVoMmEuNy43LDAsMCwwLC43LS43di0uMmExLjA5LDEuMDksMCwwLDAsLjg1LTEuMDZoMEExLjA5LDEuMDksMCwwLDAsMTQuNTMsOC41Wk05LjI5LDcuNzNoMGEuNjQuNjQsMCwxLDEsLjY0LS42NEEuNjQuNjQsMCwwLDEsOS4yOSw3LjczWm01LjI0LDIuNWgwYS42NC42NCwwLDEsMSwuNjMtLjY0QS42NC42NCwwLDAsMSwxNC41MywxMC4yM1oiIGZpbGw9IiM5Y2ViZmYiIC8+PC9zdmc+"

    }
    /* threads: {
        'PMThreadWorker': 'ThreadWorker.ts'
    } */
}

/***/ }),

/***/ "@realmocean/antd":
/*!**********************************!*\
  !*** external "realmocean$antd" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = realmocean$antd;

/***/ }),

/***/ "@realmocean/sdk":
/*!*********************************!*\
  !*** external "realmocean$sdk" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = realmocean$sdk;

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
/* harmony export */   "ProcessMining": () => (/* binding */ ProcessMining)
/* harmony export */ });
/* harmony import */ var _RouteController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RouteController */ "./src/RouteController.ts");
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
        return _RouteController__WEBPACK_IMPORTED_MODULE_0__.RouteController;
    };
    ProcessMining = __decorate([
        App(manifest)
    ], ProcessMining);
    return ProcessMining;
}());


})();

/******/ })()
;
//# sourceMappingURL=index.js.map
                    tuval$core.ModuleLoader.FireModuleLoadedEvent('com.celmino.applet.enterprisemodelling', tuval$core['__APPS__']['com.celmino.applet.enterprisemodelling']);
                    
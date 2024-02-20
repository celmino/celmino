
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _realmocean_spreadsheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @realmocean/spreadsheet */ "@realmocean/spreadsheet");
/* harmony import */ var _realmocean_spreadsheet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_realmocean_spreadsheet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dialog */ "./src/Dialog.ts");
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
        var openDialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useDialogStack)().openDialog;
        var _a = this.props.config || {}, _b = _a.onChange, onChange = _b === void 0 ? void 0 : _b, _c = _a.defaultValue, defaultValue = _c === void 0 ? null : _c, workspaceId = _a.workspaceId, _d = _a.height, height = _d === void 0 ? '100%' : _d, _e = _a.onSelf, onSelf = _e === void 0 ? function () { return void 0; } : _e;
        console.log('defaultValue');
        console.log(defaultValue);
        var _f = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(null), prevValue = _f[0], setPrevValue = _f[1];
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            var timerID = setInterval(function () {
                if (spreadsheetRef.current != null && !spreadsheetRef.loading) {
                    spreadsheetRef.current.saveAsJson().then(function (content) {
                        console.log("Content");
                        console.log(content);
                        console.log("PrevValue");
                        console.log(spreadsheetRef.prevContent);
                        if (!(0,_tuval_core__WEBPACK_IMPORTED_MODULE_3__.deepEqual)(content, spreadsheetRef.prevContent)) {
                            onChange(content);
                            console.log('content');
                            console.log(content);
                        }
                        spreadsheetRef.prevContent = content;
                    });
                }
            }, 5000);
            return function () {
                clearInterval(timerID);
            };
        }, []);
        // ...
        var promise = function () { return new Promise(function (resolve) {
            resolve('dsfdf');
        }); };
        function roundDownHandler(value) {
            return value;
        }
        // const [spreadsheet, setSpreadsheet] = useState<any>();
        var spreadsheetRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
        //const aa = ()=> alert(spreadsheet?.toString());
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_realmocean_spreadsheet__WEBPACK_IMPORTED_MODULE_2__.UISpreadsheet)({
            height: height,
            allowOpen: true,
            showRibbon: true,
            cellStyle: {
                fontFamily: 'Roboto',
            },
            openComplete: function (e) {
                spreadsheetRef.loading = true;
                if (spreadsheetRef.current != null) {
                    spreadsheetRef.current.saveAsJson().then(function (content) {
                        spreadsheetRef.prevContent = content;
                        spreadsheetRef.loading = false;
                    });
                }
            },
            contextMenuBeforeOpen: function (args) {
                if (args.element.id === spreadsheetRef.current.element.id + '_contextmenu') {
                    spreadsheetRef.current.addCustomFunction(roundDownHandler, 'DOCUMENT');
                    // To add context menu items.
                    spreadsheetRef.current.addContextMenuItems([{ text: 'Releationship', id: 'Mert' }], 'Paste Special', false);
                    //To pass the items, Item before / after that the element to be inserted, Set false if the items need to be inserted before the text.
                }
            },
            beforeHyperlinkClick: function (args) {
                var info = JSON.parse(args.hyperlink);
                openDialog({
                    title: info.name,
                    view: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
                        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIWidget)(info.viewer)
                            .config({
                            workspaceId: info.workspaceId,
                            appletId: info.appletId,
                            documentId: info.$id
                        }));
                    })
                });
                args.cancel = true;
            },
            /*  select: (args: BeforeSelectEventArgs) => {
               let range = getSelectedRange(spreadsheetRef.current.getActiveSheet())
   
             }, */
            contextMenuItemSelect: function (args) {
                if (args.item.id === 'Mert') {
                    _Dialog__WEBPACK_IMPORTED_MODULE_4__.DynoDialog.Show(workspaceId).then(function (info) {
                        var range = (0,_realmocean_spreadsheet__WEBPACK_IMPORTED_MODULE_2__.getSelectedRange)(spreadsheetRef.current.getActiveSheet());
                        spreadsheetRef.current.addHyperlink(JSON.stringify({
                            type: info.item.type,
                            workspaceId: info.workspaceId,
                            appletId: info.appletId,
                            $id: info.item.$id,
                            name: info.item.name,
                            viewer: info.item.viewer
                        }), range, info.item.name);
                    });
                    // spreadsheetRef.current.updateCell({ formula: '=DOCUMENT(23432434)' });
                    //const ranges = getRangeIndexes(range);
                    /*   const cell = getCell(ranges[0], ranges[1],spreadsheetRef.current.getActiveSheet());
                       console.log(cell) */
                    //console.log(ranges)
                    //setCell(ranges[0], ranges[1], spreadsheetRef.current.getActiveSheet(), {value:'#Document' }, false);
                }
            },
            cellSave: function (args) {
                //alert()
            }
            /*  beforeCellRender: (args: CellRenderEventArgs) => {
               if (args.cell?.value !== undefined) {
                 const root = ReactDOM.createRoot(
                   args.element
                 );
                 const element = HStack(
                   Text(args.cell?.value)
                 )
                   .onClick(() => {
                     openDialog({
                       title: 'Open',
                       view: Text(args.cell?.value)
                     })
                   })
                   .render()
                 root.render(element);
                 
               }
   
             }, */
            /*  cellSave: (args: CellSaveEventArgs) => {
   
               if (args.value !== undefined) {
                 const root = ReactDOM.createRoot(
                   args.element
                 );
                 const element = HStack(
                   Text(args.value)
                 )
                   .onClick(() => {
                     openDialog({
                       title: 'Open',
                       view: Text(args.value)
                     })
                   })
                   .render()
                 root.render(element);
               }
   
             } */
        })
            /* .cellSave( (e) => {
                alert(spreadsheet?.toString())
            }
            ) */
            .model(defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.jsonObject)
            // .model(content)
            .self(function (_self) {
            spreadsheetRef.current = _self;
            onSelf(_self);
        }))).overflow('hidden');
    };
    return MyTestController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/Dialog.ts":
/*!***********************!*\
  !*** ./src/Dialog.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynoDialog": () => (/* binding */ DynoDialog)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};


var DynoDialog = /** @class */ (function (_super) {
    __extends(DynoDialog, _super);
    function DynoDialog() {
        var _this = _super.call(this) || this;
        _this.Header = 'Form';
        _this.Width = '624px';
        _this.Position = 'center';
        _this.Height = '50%';
        return _this;
    }
    DynoDialog.prototype.BindRouterParams = function (workspaceId) {
        this.workspaceId = workspaceId;
    };
    DynoDialog.prototype.OnOK = function () {
        this.ShowDialogAsyncResolve();
        this.Hide();
    };
    DynoDialog.prototype.OnCancel = function () {
        this.Hide();
    };
    DynoDialog.prototype.LoadView = function () {
        var _this = this;
        var documents = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useListDocuments)(this.workspaceId, 'workspace', 'applets', [
        // Query.equal('opa', 'com.celmino.widget.enterprise-modelling-tree')
        ]).documents;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading, spacing: 5 })(documents ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ScrollView)({ axes: 'cAll', alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading }).apply(void 0, __spreadArray(__spreadArray([], (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(documents)(function (applet, index) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIWidget)(applet['opa'])
                .config({
                workspaceId: _this.workspaceId,
                appletId: applet.$id,
                onItemSelected: function (info) {
                    _this.ShowDialogAsyncResolve(info);
                    _this.Hide();
                }
            });
        })), [(0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('OK')).onClick(function () { return _this.OnOK(); })])) : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)()
        /*  ...ForEach(spaces)(space =>
             Text(space.name)
         ), */
        ).padding(8));
    };
    DynoDialog.Show = function (workspaceId) {
        var dialog = new DynoDialog();
        dialog.ShowHeader = false;
        dialog.BindRouterParams(workspaceId);
        return dialog.ShowDialogAsync();
    };
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ViewProperty)()
    ], DynoDialog.prototype, "workspaceId", void 0);
    return DynoDialog;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.DialogView));



/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/***/ ((module) => {

module.exports = {
    application: {
        name: 'com.tuvalsoft.widget.spreadsheet',
        path: './src/Application.ts',
        displayName: "Procetra",
        icon: "data:image/svg+xml;base64,PHN2ZyBpZD0iZjc4ZjUxMTUtYmU4OC00ZDQ0LWIzNGUtM2Y2ZWE3NDMxMjVjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImI2YzQzYmQ5LWUzN2YtNDE5MS05M2MyLWQzYTdhODRjNTA1ZSIgeDE9IjkiIHkxPSIxOS4xMyIgeDI9IjkiIHkyPSItMC4yOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwNzhkNCIgLz48c3RvcCBvZmZzZXQ9IjAuMTYiIHN0b3AtY29sb3I9IiMxMzgwZGEiIC8+PHN0b3Agb2Zmc2V0PSIwLjUzIiBzdG9wLWNvbG9yPSIjM2M5MWU1IiAvPjxzdG9wIG9mZnNldD0iMC44MiIgc3RvcC1jb2xvcj0iIzU1OWNlYyIgLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1ZWEwZWYiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHRpdGxlPkljb24tbWFjaGluZWxlYXJuaW5nLTE2MjwvdGl0bGU+PHBhdGggZD0iTTE4LDExLjM4QTQsNCwwLDAsMCwxNC40OSw3LjUsNS4xLDUuMSwwLDAsMCw5LjI0LDIuNjIsNS4yNSw1LjI1LDAsMCwwLDQuMjIsNiw0LjgsNC44LDAsMCwwLDAsMTAuNjdhNC45LDQuOSwwLDAsMCw1LjA3LDQuNzFsLjQ0LDBoOC4yMWEuNzguNzgsMCwwLDAsLjIyLDBBNC4xLDQuMSwwLDAsMCwxOCwxMS4zOFoiIGZpbGw9InVybCgjYjZjNDNiZDktZTM3Zi00MTkxLTkzYzItZDNhN2E4NGM1MDVlKSIgLz48cGF0aCBkPSJNNS40MiwxMC4zOUg0LjU0YTEuMDksMS4wOSwwLDEsMCwwLC40OWguODhhLjIuMiwwLDAsMSwuMi4ydjQuM2guNDl2LTQuM0EuNjkuNjksMCwwLDAsNS40MiwxMC4zOVptLTEuOTUuODhhLjY0LjY0LDAsMSwxLC42NC0uNjRBLjY0LjY0LDAsMCwxLDMuNDcsMTEuMjdaIiBmaWxsPSIjOWNlYmZmIiAvPjxwYXRoIGQ9Ik04Ljk0LDEwLjYxdi0xYS43LjcsMCwwLDAtLjctLjdINi42OWEuMi4yLDAsMCwxLS4yLS4yVjMuNGwtLjIzLjEyTDYsMy42NnY1YS42OS42OSwwLDAsMCwuNjkuNjlIOC4yNGEuMjEuMjEsMCwwLDEsLjIxLjIxdjFhMS4wOCwxLjA4LDAsMCwwLS44NSwxLjA2LDEuMDksMS4wOSwwLDEsMCwxLjM0LTEuMDZabS0uMjUsMS43aDBhLjY0LjY0LDAsMSwxLC42NC0uNjRBLjY0LjY0LDAsMCwxLDguNjksMTIuMzFaIiBmaWxsPSIjZjJmMmYyIiAvPjxwYXRoIGQ9Ik0xNC41Myw4LjVhMS4wOSwxLjA5LDAsMCwwLS4yNSwyLjE1di4yYS4yMS4yMSwwLDAsMS0uMjEuMjFoLTJWNy41NGEuNjkuNjksMCwwLDAtLjY5LS42OUgxMC4zNUExLjA4LDEuMDgsMCwwLDAsOS4yOSw2YTEuMDksMS4wOSwwLDEsMCwxLjA2LDEuMzRoMS4wN2EuMi4yLDAsMCwxLC4yLjJ2Ny44NGguNDlWMTEuNTVoMmEuNy43LDAsMCwwLC43LS43di0uMmExLjA5LDEuMDksMCwwLDAsLjg1LTEuMDZoMEExLjA5LDEuMDksMCwwLDAsMTQuNTMsOC41Wk05LjI5LDcuNzNoMGEuNjQuNjQsMCwxLDEsLjY0LS42NEEuNjQuNjQsMCwwLDEsOS4yOSw3LjczWm01LjI0LDIuNWgwYS42NC42NCwwLDEsMSwuNjMtLjY0QS42NC42NCwwLDAsMSwxNC41MywxMC4yM1oiIGZpbGw9IiM5Y2ViZmYiIC8+PC9zdmc+"

    }
    /* threads: {
        'PMThreadWorker': 'ThreadWorker.ts'
    } */
}

/***/ }),

/***/ "@realmocean/sdk":
/*!*********************************!*\
  !*** external "realmocean$sdk" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = realmocean$sdk;

/***/ }),

/***/ "@realmocean/spreadsheet":
/*!*****************************************!*\
  !*** external "realmocean$spreadsheet" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = realmocean$spreadsheet;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/Application.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingWidget": () => (/* binding */ RatingWidget)
/* harmony export */ });
/* harmony import */ var _AppController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppController */ "./src/AppController.tsx");
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
var RatingWidget = /** @class */ (function () {
    function RatingWidget() {
    }
    RatingWidget.prototype.GetMainController = function () {
        return _AppController__WEBPACK_IMPORTED_MODULE_0__.MyTestController;
    };
    RatingWidget = __decorate([
        App(manifest)
    ], RatingWidget);
    return RatingWidget;
}());


})();

/******/ })()
;
//# sourceMappingURL=index.js.map
                    tuval$core.ModuleLoader.FireModuleLoadedEvent('com.tuvalsoft.widget.spreadsheet', tuval$core['__APPS__']['com.tuvalsoft.widget.spreadsheet']);
                    
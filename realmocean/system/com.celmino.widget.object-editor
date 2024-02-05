
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
/* harmony import */ var _WidgetController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WidgetController */ "./src/WidgetController.ts");
/* harmony import */ var _dialogs_SelectViewDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogs/SelectViewDialog */ "./src/dialogs/SelectViewDialog.ts");
/* harmony import */ var _views_ActionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/ActionPanel */ "./src/views/ActionPanel.tsx");
/* harmony import */ var _views_FieldContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/FieldContainer */ "./src/views/FieldContainer.ts");
/* harmony import */ var _views_ObjectHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/ObjectHeader */ "./src/views/ObjectHeader.tsx");
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
        var info = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useRenderInfo)("App");
        var _a = this.props.config || {}, objectId = _a.objectId, fields = _a.fields, _b = _a.views, views = _b === void 0 ? [] : _b, _c = _a.powerUps, powerUps = _c === void 0 ? [] : _c, _d = _a.selectedViewIndex, selectedViewIndex = _d === void 0 ? 0 : _d, _e = _a.objectViews, objectViews = _e === void 0 ? [] : _e, _f = _a.description, description = _f === void 0 ? null : _f, _g = _a.onDescriptionChange, onDescriptionChange = _g === void 0 ? void 0 : _g;
        var openDialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useDialogStack)().openDialog;
        var _h = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)({ controller: _WidgetController__WEBPACK_IMPORTED_MODULE_1__.WidgetController }), widgetController = _h[0], setWidgetController = _h[1];
        var _WidgetController = widgetController.controller;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ConfigContext)(function () {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })(
            //    Text(JSON.stringify(description)),
            (0,_views_ActionPanel__WEBPACK_IMPORTED_MODULE_3__.ActionPanel)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading, spacing: 12 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_views_ObjectHeader__WEBPACK_IMPORTED_MODULE_5__.ObjectHeader)(), 
            /* Text('open').onClick(() => {
                openDialog({
                    title: 'Open',
                    view: Text('hello')
                })
            }), */
            // Text(JSON.stringify(info)),
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIWidget)('com.celmino.widget.tab-view')
                .config({
                allViews: views,
                views: objectViews,
                ////  isLoading: isTaskViewsLoading,
                //selectedIndex: taskViews?.findIndex(x => x.id === object_view_id),
                onChange: function (index) {
                    //navigate(`${getViewUrl(access_type, team_id, applet_id, view_id)}/object/${objectId}/objectView/${taskViews[index].id}`)
                    setWidgetController({
                        controller: /** @class */ (function (_super) {
                            __extends(controller, _super);
                            function controller() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            return controller;
                        }(_WidgetController__WEBPACK_IMPORTED_MODULE_1__.WidgetController))
                    });
                    // setSelectedViewIndex(index)
                },
                actions: [
                    {
                        title: 'View',
                        onClick: function () {
                            _dialogs_SelectViewDialog__WEBPACK_IMPORTED_MODULE_2__.SelectViewDialog.Show(views, powerUps).then(function (view) {
                                /*   createObjectView({
                                      $id: nanoid(),
                                      objectId: objectId,
                                      name: view.name,
                                      view: view.type,
                                  }) */
                            });
                        }
                    }
                ]
            }))
                .allHeight(40)
                .overflowX('auto')
                .overflowY('hidden'))
                .width(null)
                .flexBasis('0')
                .flexGrow('1')
                .flexShrink('0')
                .overflowX('auto'), (0,_views_FieldContainer__WEBPACK_IMPORTED_MODULE_4__.FieldContainer)(fields))).padding('4px 36px 12px'));
        }).config(this.props.config));
    };
    return MyTestController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/WidgetController.ts":
/*!*********************************!*\
  !*** ./src/WidgetController.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetController": () => (/* binding */ WidgetController)
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

var WidgetController = /** @class */ (function (_super) {
    __extends(WidgetController, _super);
    function WidgetController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WidgetController.prototype.LoadView = function () {
        var _a = this.props || {}, objectId = _a.objectId, view = _a.view, _b = _a.defaultValue, defaultValue = _b === void 0 ? {} : _b, _c = _a.onChange, onChange = _c === void 0 ? void 0 : _c;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIWidget)(view)
                .config({
                objectId: objectId,
                defaultValue: defaultValue,
                onChange: function (data) {
                    onChange(data);
                    /*  if (selectedViewIndex === 0) {
                         onDescriptionChange(data);
                     }
                     else {
                         updateTaskView(taskViews?.[selectedViewIndex]?.id, {
                             data: data
                         }, {
                             onSuccess: () => {
                                 invalidateTaskViewsCache();
                             }
                         })
                     } */
                }
            });
        }));
    };
    return WidgetController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/dialogs/SelectViewDialog.ts":
/*!*****************************************!*\
  !*** ./src/dialogs/SelectViewDialog.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectViewDialog": () => (/* binding */ SelectViewDialog)
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

var SelectViewDialog = /** @class */ (function (_super) {
    __extends(SelectViewDialog, _super);
    function SelectViewDialog() {
        var _this = _super.call(this) || this;
        _this.Header = 'Task Power Ups';
        _this.Width = '1300px';
        _this.Height = '70vh';
        return _this;
    }
    SelectViewDialog.prototype.BindRouterParams = function (views, powerUps) {
        this.views = views;
        this.PowerUps = powerUps;
        this.filtered_opas = __spreadArray(__spreadArray([], this.views), this.PowerUps);
    };
    SelectViewDialog.prototype.OnOK = function (applet) {
        this.ShowDialogAsyncResolve(applet);
        this.Hide();
    };
    SelectViewDialog.prototype.OnCancel = function () {
        this.Hide();
    };
    SelectViewDialog.prototype.LoadView = function () {
        var _this = this;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(this.filtered_opas)(function (opa) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })(opa.image ?
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIImage)(opa.image).width(50).height(50).cornerRadius('20%')
                    .filter('drop-shadow(2px 2px 4px rgb(0, 0, 0, 20%))') : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)(), (opa.image == null && opa.icon) ?
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(opa.icon).fontSize(30).foregroundColor('white'))
                    .background("#03C3AD")
                    .width(50).height(50).cornerRadius('50%')
                    .filter('drop-shadow(2px 2px 4px rgb(0, 0, 0, 20%))') : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), opa.tag &&
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(opa.tag))
                    .fontSize(12).fontWeight('500')
                    .foregroundColor('#fff')
                    .position('absolute')
                    .left('calc(100% - 100px)')
                    .top('-50px')
                    .height(30).width(170).padding(5).padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 10).cornerRadius(5).background('#7b68ee')
                    .transformOrigin('left bottom')
                    .transform('rotate(45deg)')), 
            // .shadow('0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)'),
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Heading)(opa.name).h4()).allHeight(25), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Heading)(opa.description || '').h6().ellipsis(true)
                .ellipsisMaxLines(2)).allHeight(50), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cCenter })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Add'))
                // .loading(isLoading && (opa.type === this.last_added_opa_type))
                .disabled(!opa.enabled)
                .kind(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ButtonType.SECONDARY)
                .size(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ButtonSize.SMALL)
                .width('100%')
                .onClick(function () {
                /*  this.SetValue('name', opa.name);
                 this.SetValue('folder_id', this.folder_id);
                 this.SetValue('space_id', this.space_id);
                 this.SetValue('tenant_id', useSessionService().TenantId);
                 this.SetValue('account_id', useSessionService().AccountId);
                 this.SetValue('item_type', 'opa');
                 this.SetValue('item_sub_type', opa.type);
                 this.SetValue('app_id', getAppFullName());
                 this.SetValue('content', '')

                 this.last_added_opa_type = opa.type;
*/
                _this.OnOK({
                    name: opa.name,
                    type: opa.type
                });
            })).height()).height(230).width(290)
                .padding()
                .shadow({ hover: 'var(--box-shadow-medium)' })
                .cornerRadius('var(--border-radius-medium)')
                .border({ default: 'solid 1px var(--layout-border-color)', hover: 'solid 1px var(--dialog-background-color)' })
                .overflow('hidden')).width().height().padding();
        })).wrap('wrap').height()));
    };
    SelectViewDialog.Show = function (views, powerUps) {
        var dialog = new SelectViewDialog();
        dialog.BindRouterParams(views, powerUps);
        return dialog.ShowDialogAsync();
    };
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ViewProperty)()
    ], SelectViewDialog.prototype, "views", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ViewProperty)()
    ], SelectViewDialog.prototype, "PowerUps", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ViewProperty)()
    ], SelectViewDialog.prototype, "filtered_opas", void 0);
    return SelectViewDialog;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.DialogView));



/***/ }),

/***/ "./src/views/ActionPanel.tsx":
/*!***********************************!*\
  !*** ./src/views/ActionPanel.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsPanelButton": () => (/* binding */ ActionsPanelButton),
/* harmony export */   "ActionPanel": () => (/* binding */ ActionPanel)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var fullSize = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M16.25 3H12a.75.75 0 0 0 0 1.5h2.44l-3.47 3.47a.75.75 0 0 0 1.06 1.06l3.47-3.47V8A.75.75 0 0 0 17 8V3.75a.75.75 0 0 0-.75-.75ZM3.75 17H8a.75.75 0 0 0 0-1.5H5.56l3.47-3.47a.75.75 0 1 0-1.06-1.06L4.5 14.44V12A.75.75 0 0 0 3 12v4.25a.75.75 0 0 0 .75.75Z" }))); };
var activity = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.545 4.07A7.417 7.417 0 1 1 2.583 10a.75.75 0 0 1 1.5 0 5.917 5.917 0 1 0 2.62-4.913h.592a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v.733ZM10 5.917a.75.75 0 0 1 .75.75v3.022l1.864 1.864a.75.75 0 0 1-1.061 1.06L9.47 10.53a.75.75 0 0 1-.22-.53V6.667a.75.75 0 0 1 .75-.75Z" }))); };
var share = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M10.53 2.22a.75.75 0 0 0-1.06 0L6.97 4.72a.75.75 0 0 0 1.06 1.06l1.22-1.22v6.69a.75.75 0 1 0 1.499 0V4.56l1.219 1.22a.75.75 0 1 0 1.06-1.06l-2.499-2.5Z" }),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M5.416 7A2.415 2.415 0 0 0 3 9.417v5.166c0 .225.078.538.17.797.096.267.264.638.537.912.046.046.063.065.085.09.02.022.044.05.099.106.08.085.197.196.363.29.326.182.709.222 1.162.222h9.169c.64 0 1.254-.255 1.707-.708.274-.274.442-.645.537-.912.093-.26.171-.572.171-.797V9.417A2.417 2.417 0 0 0 14.585 7h-.837a.75.75 0 0 0 0 1.5h.837a.916.916 0 0 1 .916.917v5.149c-.001.006-.004.03-.014.074a2.011 2.011 0 0 1-.174.472.57.57 0 0 1-.08.12.916.916 0 0 1-.649.268H5.417c-.282 0-.393-.023-.425-.031a.616.616 0 0 1-.017-.017l-.051-.056-.027-.03a3.96 3.96 0 0 0-.128-.134.569.569 0 0 1-.081-.12 2.039 2.039 0 0 1-.173-.472c-.01-.04-.013-.064-.014-.072V9.416a.917.917 0 0 1 .916-.916h.836a.75.75 0 0 0 0-1.5h-.836Z" }))); };
var showAttributesPanelIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { width: "18", height: "18", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M15 12.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5h1ZM15.75 10a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75ZM15 6.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5h1Z" }),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M4.25 3A2.25 2.25 0 0 0 2 5.25v9.5A2.25 2.25 0 0 0 4.25 17h11.5A2.25 2.25 0 0 0 18 14.75v-9.5A2.25 2.25 0 0 0 15.75 3H4.25ZM3.5 5.25a.75.75 0 0 1 .75-.75H11v11H4.25a.75.75 0 0 1-.75-.75v-9.5Zm9 10.25v-11h3.25a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75H12.5Z" }))); };
var selectAttributesIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M1 10a6 6 0 0 1 6-6h6a6 6 0 0 1 0 12H7a6 6 0 0 1-6-6Zm1.5 0A4.5 4.5 0 0 1 7 5.5h6a4.5 4.5 0 1 1 0 9H7A4.5 4.5 0 0 1 2.5 10Z" }),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M13 12.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" }))); };
var menuIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" }))); };
var closeIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M3.728 15.172a.778.778 0 1 0 1.1 1.1L10 11.1l5.172 5.172a.778.778 0 0 0 1.1-1.1L11.1 10l5.172-5.172a.778.778 0 0 0-1.1-1.1L10 8.9 4.828 3.728a.778.778 0 1 0-1.1 1.1L8.9 10l-5.172 5.172Z" }))); };
var favoriteIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M9.469 1.532a1.195 1.195 0 0 1 1.062 0c.289.143.444.397.524.542.086.154.175.354.268.562l1.643 3.685 4.013.424c.226.024.444.047.617.08.162.033.452.101.677.332.262.267.383.64.329 1.01-.047.32-.242.545-.354.666-.12.13-.283.276-.452.429l-2.997 2.7.837 3.948c.047.223.093.437.114.613.02.163.044.46-.106.746-.173.33-.49.562-.859.624-.318.054-.593-.06-.743-.13-.16-.074-.35-.184-.547-.297L10 15.45l-3.496 2.016c-.197.113-.386.223-.547.297-.15.07-.424.184-.742.13a1.195 1.195 0 0 1-.86-.624c-.15-.286-.125-.582-.105-.746.02-.176.066-.39.114-.613l.837-3.947-2.998-2.701c-.169-.153-.331-.3-.452-.429-.112-.121-.306-.347-.353-.666-.054-.37.067-.743.328-1.01.226-.23.516-.3.678-.331.173-.034.39-.057.617-.081l.029-.003 3.984-.42 1.63-3.66.013-.026c.092-.208.181-.408.268-.562.08-.145.235-.399.524-.542Zm.53 1.82-1.604 3.6-.012.029c-.044.1-.122.279-.254.425a1.195 1.195 0 0 1-.402.292c-.18.08-.375.1-.483.11-.011 0-.021.002-.03.003l-3.92.414 2.928 2.639.023.02c.08.072.227.202.326.373.083.145.136.306.153.472a1.56 1.56 0 0 1-.045.493l-.006.03-.818 3.857 3.415-1.97.026-.015c.094-.055.263-.155.456-.196.163-.034.332-.034.496 0 .193.041.362.14.455.196l.027.015 3.415 1.97-.818-3.857a1.56 1.56 0 0 1-.051-.524c.017-.165.07-.326.153-.471.098-.17.245-.3.326-.373a1.87 1.87 0 0 0 .023-.02l2.928-2.64-3.92-.413-.03-.003a1.56 1.56 0 0 1-.483-.11 1.195 1.195 0 0 1-.402-.292 1.558 1.558 0 0 1-.266-.454L10 3.352Z" }))); };
var findIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.75 15.835a7.055 7.055 0 0 0 4.378-1.515l3.782 3.771a.835.835 0 0 0 1.18-1.182l-3.78-3.768a7.085 7.085 0 1 0-5.56 2.694ZM3.335 8.75a5.415 5.415 0 1 1 10.83 0 5.415 5.415 0 0 1-10.83 0Z" }))); };
var copyLinkIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "m10.063 10.808 2.06-.03c.55-.001 1.075-.218 1.463-.604a2.054 2.054 0 0 0 .001-2.909 2.07 2.07 0 0 0-1.461-.602L6.757 6.66c-.527 0-1.034.2-1.417.562A2.043 2.043 0 0 0 4.7 8.6l-.011.129a.839.839 0 0 1-1.433.574.829.829 0 0 1-.238-.591A2.276 2.276 0 0 1 3 8.483a3.704 3.704 0 0 1 1.18-2.457 3.739 3.739 0 0 1 2.549-.994L12.133 5c.964.04 1.875.45 2.542 1.142a3.71 3.71 0 0 1-.003 5.154 3.754 3.754 0 0 1-2.543 1.145l-2.02.024a.836.836 0 0 1-.798-.806.83.83 0 0 1 .752-.851Zm-5.024.932a3.726 3.726 0 0 1 1.1-2.628c.7-.697 1.65-1.09 2.64-1.094l2.02-.025a.836.836 0 0 1 .799.807.83.83 0 0 1-.752.85l-2.038.007c-.548 0-1.074.218-1.462.604a2.054 2.054 0 0 0-.001 2.909 2.07 2.07 0 0 0 1.461.601l5.369.004c.527 0 1.035-.201 1.417-.562.383-.361.612-.855.64-1.379l.011-.13a.83.83 0 0 1 .845-.822.837.837 0 0 1 .826.84 3.712 3.712 0 0 1-1.194 2.714 3.747 3.747 0 0 1-2.546.996l-5.375.003a3.756 3.756 0 0 1-2.646-1.075 3.72 3.72 0 0 1-1.114-2.62Z" }))); };
var ActionsPanelButton = function (icon, action) {
    if (action === void 0) { action = void 0; }
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(icon))
        .foregroundColor('rgb(109, 122, 131)')
        .cursor('pointer')
        .cornerRadius(6)
        .padding(10)
        .background({ hover: 'rgba(109, 122, 131, 0.15)' })
        .transition('all .15s ease-out')
        .width(28).height(28).onClick(function () {
        action();
    }));
};
var ActionPanel = function () { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
    var closeDialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useDialogStack)().closeDialog;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 5 })(
    /*   _StatusMarker(task?.stage_id),
         EditableHeader(task?.title).size(EditableHeadingSizes.MEDIUM), */
    ActionsPanelButton(findIcon), ActionsPanelButton(favoriteIcon), ActionsPanelButton(copyLinkIcon), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), ActionsPanelButton(fullSize), ActionsPanelButton(activity), ActionsPanelButton(share), ActionsPanelButton(showAttributesPanelIcon), ActionsPanelButton(selectAttributesIcon), ActionsPanelButton(menuIcon), ActionsPanelButton(closeIcon, function () {
        closeDialog();
    })).height().padding(8));
}); };


/***/ }),

/***/ "./src/views/FieldContainer.ts":
/*!*************************************!*\
  !*** ./src/views/FieldContainer.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldContainer": () => (/* binding */ FieldContainer)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fields_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fields/TextField */ "./src/views/fields/TextField.ts");
/* harmony import */ var _fields_SelectField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fields/SelectField */ "./src/views/fields/SelectField.ts");
/* harmony import */ var _fields_AssigneeField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fields/AssigneeField */ "./src/views/fields/AssigneeField.ts");




var getField = function (field) {
    var type = field.type;
    switch (type) {
        case 'text':
            return (0,_fields_TextField__WEBPACK_IMPORTED_MODULE_1__.TextField)(field);
        case 'select':
            return (0,_fields_SelectField__WEBPACK_IMPORTED_MODULE_2__.SelectField)(field);
        case 'user':
            return (0,_fields_AssigneeField__WEBPACK_IMPORTED_MODULE_3__.UserField)(field);
        default:
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)();
    }
};
var FieldContainer = function (fields) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(Object.getOwnPropertyNames(fields))(function (field) {
        return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })(getField(fields[field])).minHeight(80);
    })).paddingTop('12px')
        .backgroundColor('white')
        .width(null)
        .allWidth(200)
        .flexBasis('0')
        .flexGrow('1')
        .flexShrink('0')
        .height());
};


/***/ }),

/***/ "./src/views/ObjectHeader.tsx":
/*!************************************!*\
  !*** ./src/views/ObjectHeader.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectHeader": () => (/* binding */ ObjectHeader)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);


var fontFamily = 'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
var ObjectHeader = function () { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useConfig)(), header = _a.header, _b = _a.onHeaderChange, onHeaderChange = _b === void 0 ? void 0 : _b, headerIcon = _a.headerIcon;
    /*  const { access_type, team_id, applet_id, view_id } = useParams();
 
     const navigate = useNavigate(); */
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 5 })(headerIcon ? headerIcon : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)(), 
    //  _StatusMarker(task?.stage_id),
    _tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.string(header) ?
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.EditableHeader)(header).size(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.EditableHeadingSizes.MEDIUM)
            .onChange(function (e) { return onHeaderChange(e); })
            .fontSmoothing('auto')
            .foregroundColor('#212526')
            .fontSize(28).fontFamily(fontFamily).fontWeight('500')
            .lineHeight('1.25')
            .kerning('-0.003em')
        :
            _tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.function(header) ? header() : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)()).height().padding(8));
}); };


/***/ }),

/***/ "./src/views/PropertyLabel.ts":
/*!************************************!*\
  !*** ./src/views/PropertyLabel.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyLabel": () => (/* binding */ PropertyLabel)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

var PropertyLabel = function (label) { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(label)
    .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol')
    .fontWeight('400')
    .fontSize(12)
    .kerning('.6px')
    .lineHeight('1.25')
    .textTransform('uppercase')
    .minHeight(28))
    .paddingLeft('10px')); };


/***/ }),

/***/ "./src/views/fields/AssigneeField.ts":
/*!*******************************************!*\
  !*** ./src/views/fields/AssigneeField.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserField": () => (/* binding */ UserField)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PropertyLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PropertyLabel */ "./src/views/PropertyLabel.ts");


var UserField = function (textFieldInfo) {
    var label = textFieldInfo.label, value = textFieldInfo.value, onChange = textFieldInfo.onChange, placeholder = textFieldInfo.placeholder, options = textFieldInfo.options;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading, spacing: 2 })((0,_PropertyLabel__WEBPACK_IMPORTED_MODULE_1__.PropertyLabel)(label), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIWidget)('com.tuvalsoft.widget.userselect')
        .config({
        width: 36,
        height: 36,
        //  tenant_id: useSessionService().TenantId,
        onChange: function (account) {
            // assignResponsibleToTask(task.id, account.id);
        }
    })));
};


/***/ }),

/***/ "./src/views/fields/SelectField.ts":
/*!*****************************************!*\
  !*** ./src/views/fields/SelectField.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectField": () => (/* binding */ SelectField)
/* harmony export */ });
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/antd */ "@realmocean/antd");
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PropertyLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PropertyLabel */ "./src/views/PropertyLabel.ts");



var SelectField = function (textFieldInfo) {
    var label = textFieldInfo.label, value = textFieldInfo.value, onChange = textFieldInfo.onChange, placeholder = textFieldInfo.placeholder, _a = textFieldInfo.options, options = _a === void 0 ? [] : _a;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading, spacing: 2 })((0,_PropertyLabel__WEBPACK_IMPORTED_MODULE_2__.PropertyLabel)(label), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Select)()
        .options(options)
        .renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_0__.SelectRenderer)));
};


/***/ }),

/***/ "./src/views/fields/TextField.ts":
/*!***************************************!*\
  !*** ./src/views/fields/TextField.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextField": () => (/* binding */ TextField)
/* harmony export */ });
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/antd */ "@realmocean/antd");
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PropertyLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PropertyLabel */ "./src/views/PropertyLabel.ts");



var TextField = function (textFieldInfo) {
    var label = textFieldInfo.label, value = textFieldInfo.value, onChange = textFieldInfo.onChange, placeholder = textFieldInfo.placeholder;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading, spacing: 2 })((0,_PropertyLabel__WEBPACK_IMPORTED_MODULE_2__.PropertyLabel)(label), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Input)()
        .renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_0__.InputRenderer)));
};


/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/***/ ((module) => {

module.exports = {
    application: {
        name: 'com.celmino.widget.object-editor',
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
                    tuval$core.ModuleLoader.FireModuleLoadedEvent('com.celmino.widget.object-editor', tuval$core['__APPS__']['com.celmino.widget.object-editor']);
                    
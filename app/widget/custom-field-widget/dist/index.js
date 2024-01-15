
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
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons */ "./src/Icons.tsx");
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @realmocean/ui */ "@realmocean/ui");
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_realmocean_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dialogs_AddBooleanFieldDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialogs/AddBooleanFieldDialog */ "./src/dialogs/AddBooleanFieldDialog.ts");
/* harmony import */ var _dialogs_AddDatetimeField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialogs/AddDatetimeField */ "./src/dialogs/AddDatetimeField.ts");
/* harmony import */ var _dialogs_AddNumberFieldDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialogs/AddNumberFieldDialog */ "./src/dialogs/AddNumberFieldDialog.ts");
/* harmony import */ var _dialogs_AddTextFieldDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialogs/AddTextFieldDialog */ "./src/dialogs/AddTextFieldDialog.ts");
/* harmony import */ var _views_DefaultView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/DefaultView */ "./src/views/DefaultView.ts");
/* harmony import */ var _dialogs_AddFormulaField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialogs/AddFormulaField */ "./src/dialogs/AddFormulaField.ts");
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










var _hideHandle = null;
var MyTestController = /** @class */ (function (_super) {
    __extends(MyTestController, _super);
    function MyTestController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyTestController.prototype.LoadView = function () {
        var _a = this.props.config, _b = _a.label, label = _b === void 0 ? _views_DefaultView__WEBPACK_IMPORTED_MODULE_8__.DefaultLabelView : _b, _c = _a.onAction, onAction = _c === void 0 ? function () { return void 0; } : _c;
        var AttributesMenuItems = [
            {
                title: 'Text',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_2__.Icons.TextAttribute,
                onClick: function () { return (_realmocean_ui__WEBPACK_IMPORTED_MODULE_3__.DynoDialog.Show((0,_dialogs_AddTextFieldDialog__WEBPACK_IMPORTED_MODULE_7__.AddTextFieldDialog)(onAction))); }
            },
            {
                title: 'Rich Text',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_2__.Icons.RichTextAttribute,
                onClick: function () { return (_realmocean_ui__WEBPACK_IMPORTED_MODULE_3__.DynoDialog.Show((0,_dialogs_AddNumberFieldDialog__WEBPACK_IMPORTED_MODULE_6__.AddNumberFieldDialog)(onAction))); }
            },
            {
                title: 'Number',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_2__.Icons.NumberAttribute,
                onClick: function () { return (_realmocean_ui__WEBPACK_IMPORTED_MODULE_3__.DynoDialog.Show((0,_dialogs_AddNumberFieldDialog__WEBPACK_IMPORTED_MODULE_6__.AddNumberFieldDialog)(onAction))); }
            },
            {
                title: 'Single Select',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_2__.Icons.SingleSelectAttribute
            },
            {
                title: 'Multi Select',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_2__.Icons.MultiSelectAttribute
            },
            {
                title: 'Workflow',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_2__.Icons.WorkflowAttribute
            },
            {
                title: 'Assignments',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_2__.Icons.AssignmentAttribute
            },
            {
                title: 'Date',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_2__.Icons.DateAttribute,
                onClick: function () { return (_realmocean_ui__WEBPACK_IMPORTED_MODULE_3__.DynoDialog.Show((0,_dialogs_AddDatetimeField__WEBPACK_IMPORTED_MODULE_5__.AddDatetimeFieldDialog)())); }
            },
            {
                title: 'Checkbox',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_2__.Icons.CheckboxAttribute,
                onClick: function () { return (_realmocean_ui__WEBPACK_IMPORTED_MODULE_3__.DynoDialog.Show((0,_dialogs_AddBooleanFieldDialog__WEBPACK_IMPORTED_MODULE_4__.AddBooleanFieldDialog)())); }
            },
            {
                title: 'URL',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_2__.Icons.URLAttribute
            },
            {
                title: 'Email',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_2__.Icons.EmailAttribute
            },
            {
                title: 'Phone',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_2__.Icons.PhoneAttribute
            },
            {
                title: 'Location',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_2__.Icons.LocationAttribute
            },
            {
                title: 'Avatar',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_2__.Icons.AvatarAttribute
            },
            {
                title: 'Icon',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_2__.Icons.IconAttribute
            },
            {
                title: 'Files',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_2__.Icons.FilesAttribute
            },
            {
                title: 'Comments',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_2__.Icons.CommentsAttribute
            },
            {
                title: 'Formula',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_2__.Icons.RelationAttribute,
                onClick: function () { return (_realmocean_ui__WEBPACK_IMPORTED_MODULE_3__.DynoDialog.Show((0,_dialogs_AddFormulaField__WEBPACK_IMPORTED_MODULE_9__.AddFormulaField)(onAction))); }
            },
            {
                title: 'Relation to...',
                icon: _Icons__WEBPACK_IMPORTED_MODULE_2__.Icons.RelationAttribute,
                onClick: function () {
                    //DynoDialog.Show(AddRelationFieldDialog())
                }
            }
        ];
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ConfigContext)(function () { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTrailing })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.PopupButton)(_tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.string(label) ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(label) : label)(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ForEach)(AttributesMenuItems)(function (item) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icon)(item.icon), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(item.title))
                .background({ hover: 'rgba(81,97,108,.1)' })
                .padding()
                .cursor('pointer')
                .height(32)
                .onClick(function () {
                _hideHandle();
                _tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.function(item.onClick) ? item.onClick() : void 0;
            });
        })).width(200)
            .border('1px solid #EFF0F1')
            .cornerRadius(6)
            .margin(-8))
            .hideHandle(function (hideHandle) { return _hideHandle = hideHandle; })
            .dialogPosition(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.DialogPosition.BOTTOM_START))); }));
    };
    return MyTestController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIController));



/***/ }),

/***/ "./src/Icons.tsx":
/*!***********************!*\
  !*** ./src/Icons.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Icons": () => (/* binding */ Icons)
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

/***/ "./src/dialogs/Actions/GenericAction.ts":
/*!**********************************************!*\
  !*** ./src/dialogs/Actions/GenericAction.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericAction": () => (/* binding */ GenericAction)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

var GenericAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
    var label = action.label, successAction = action.successAction, successActions = action.successActions, _a = action.onAction, onAction = _a === void 0 ? function () { return void 0; } : _a;
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useFormController)();
    var dialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useDialog)();
    var formBuilder = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useFormBuilder)();
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();
    var _b = formController.GetFormData(), databaseId = _b.databaseId, collectionId = _b.collectionId, name = _b.name, workspaceId = _b.workspaceId;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(label))
        .onClick(function () {
        onAction(formController.GetFormData());
    }));
}); };


/***/ }),

/***/ "./src/dialogs/AddBooleanFieldDialog.ts":
/*!**********************************************!*\
  !*** ./src/dialogs/AddBooleanFieldDialog.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBooleanFieldDialog": () => (/* binding */ AddBooleanFieldDialog)
/* harmony export */ });
var AddBooleanFieldDialog = function () { return ({
    "title": 'Add boolean field',
    "actions": [
        {
            "label": "Save",
            "type": "genericAction"
        }
    ],
    "fieldMap": {
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

/***/ "./src/dialogs/AddDatetimeField.ts":
/*!*****************************************!*\
  !*** ./src/dialogs/AddDatetimeField.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddDatetimeFieldDialog": () => (/* binding */ AddDatetimeFieldDialog)
/* harmony export */ });
var AddDatetimeFieldDialog = function () { return ({
    "title": 'Add datetime field',
    "actions": [
        {
            "label": "Save",
            "type": "genericAction"
        }
    ],
    "fieldMap": {
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

/***/ "./src/dialogs/AddFormulaField.ts":
/*!****************************************!*\
  !*** ./src/dialogs/AddFormulaField.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddFormulaField": () => (/* binding */ AddFormulaField)
/* harmony export */ });
var AddFormulaField = function (onAction) { return ({
    "title": 'Create formula field',
    "actions": [
        {
            "label": "Save",
            "onAction": onAction,
            "type": "genericAction"
        }
    ],
    "fieldMap": {
        "type": {
            "name": "type",
            "type": "virtual",
            "value": 'formula'
        },
        "key": {
            "label": "Key",
            "type": "text",
            "name": "key",
            "category": 'General'
        },
        "name": {
            "label": "Name",
            "type": "text",
            "name": "name",
            "category": 'General'
        },
        "description": {
            "label": "Description",
            "type": "text",
            "multiline": true,
            "name": "description",
            "category": 'General'
        },
        "formula": {
            "label": "Formula",
            "type": "text",
            "multiline": true,
            "name": "formula",
            "category": 'General'
        },
        "required": {
            "label": "Required",
            "type": "checkbox",
            "name": "required",
            "category": 'Settings'
        },
    },
    "layout": {
        "type": "category"
    }
}); };


/***/ }),

/***/ "./src/dialogs/AddNumberFieldDialog.ts":
/*!*********************************************!*\
  !*** ./src/dialogs/AddNumberFieldDialog.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNumberFieldDialog": () => (/* binding */ AddNumberFieldDialog)
/* harmony export */ });
var AddNumberFieldDialog = function (onAction) { return ({
    "title": 'Add number field',
    "actions": [
        {
            "label": "Save",
            "onAction": onAction,
            "type": "genericAction"
        }
    ],
    "fieldMap": {
        "type": {
            "name": "type",
            "type": "virtual",
            "value": 'number'
        },
        "key": {
            "label": "Key",
            "type": "text",
            "name": "key"
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

/***/ "./src/dialogs/AddTextFieldDialog.ts":
/*!*******************************************!*\
  !*** ./src/dialogs/AddTextFieldDialog.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTextFieldDialog": () => (/* binding */ AddTextFieldDialog)
/* harmony export */ });
var AddTextFieldDialog = function (onAction) { return ({
    "title": 'Create text field',
    "actions": [
        {
            "label": "Save",
            "onAction": onAction,
            "type": "genericAction"
        }
    ],
    "fieldMap": {
        "type": {
            "name": "type",
            "type": "virtual",
            "value": 'text'
        },
        "key": {
            "label": "Key",
            "type": "text",
            "name": "key",
            "category": 'General'
        },
        "name": {
            "label": "Name",
            "type": "text",
            "name": "name",
            "category": 'General'
        },
        "description": {
            "label": "Description",
            "type": "text",
            "multiline": true,
            "name": "description",
            "category": 'General'
        },
        "required": {
            "label": "Required",
            "type": "checkbox",
            "name": "required",
            "category": 'Settings'
        },
    },
    "layout": {
        "type": "category"
    }
}); };


/***/ }),

/***/ "./src/views/DefaultView.ts":
/*!**********************************!*\
  !*** ./src/views/DefaultView.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultLabelView": () => (/* binding */ DefaultLabelView)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icons */ "./src/Icons.tsx");


var DefaultLabelView = function () { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_Icons__WEBPACK_IMPORTED_MODULE_1__.Icons.Plus), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('New Field')
    .fontFamily("ui-sans-serif,-apple-system,BlinkMacSystemFont,'Segoe UI','Helvetica','Arial',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'")
    .fontSize(14)
    .fontWeight('500'))
    .width()
    .height()
    .minHeight(28)
    .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 12)
    .foregroundColor('hsl(205, 9%, 47%)')
    .background({ hover: 'rgba(109,122,131,0.15)' })
    //.border({ hover: '1px solid rgba(255, 255, 255, 0)' })
    .cornerRadius(6)
    .transition('all .15s ease-out')
    .cursor('pointer')); };


/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/***/ ((module) => {

module.exports = {
    application: {
        name: 'com.tuvalsoft.widget.custom-field-popup',
        path: './src/Application.ts',
        displayName: "Procetra",
        icon: "data:image/svg+xml;base64,PHN2ZyBpZD0iZjc4ZjUxMTUtYmU4OC00ZDQ0LWIzNGUtM2Y2ZWE3NDMxMjVjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImI2YzQzYmQ5LWUzN2YtNDE5MS05M2MyLWQzYTdhODRjNTA1ZSIgeDE9IjkiIHkxPSIxOS4xMyIgeDI9IjkiIHkyPSItMC4yOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwNzhkNCIgLz48c3RvcCBvZmZzZXQ9IjAuMTYiIHN0b3AtY29sb3I9IiMxMzgwZGEiIC8+PHN0b3Agb2Zmc2V0PSIwLjUzIiBzdG9wLWNvbG9yPSIjM2M5MWU1IiAvPjxzdG9wIG9mZnNldD0iMC44MiIgc3RvcC1jb2xvcj0iIzU1OWNlYyIgLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1ZWEwZWYiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHRpdGxlPkljb24tbWFjaGluZWxlYXJuaW5nLTE2MjwvdGl0bGU+PHBhdGggZD0iTTE4LDExLjM4QTQsNCwwLDAsMCwxNC40OSw3LjUsNS4xLDUuMSwwLDAsMCw5LjI0LDIuNjIsNS4yNSw1LjI1LDAsMCwwLDQuMjIsNiw0LjgsNC44LDAsMCwwLDAsMTAuNjdhNC45LDQuOSwwLDAsMCw1LjA3LDQuNzFsLjQ0LDBoOC4yMWEuNzguNzgsMCwwLDAsLjIyLDBBNC4xLDQuMSwwLDAsMCwxOCwxMS4zOFoiIGZpbGw9InVybCgjYjZjNDNiZDktZTM3Zi00MTkxLTkzYzItZDNhN2E4NGM1MDVlKSIgLz48cGF0aCBkPSJNNS40MiwxMC4zOUg0LjU0YTEuMDksMS4wOSwwLDEsMCwwLC40OWguODhhLjIuMiwwLDAsMSwuMi4ydjQuM2guNDl2LTQuM0EuNjkuNjksMCwwLDAsNS40MiwxMC4zOVptLTEuOTUuODhhLjY0LjY0LDAsMSwxLC42NC0uNjRBLjY0LjY0LDAsMCwxLDMuNDcsMTEuMjdaIiBmaWxsPSIjOWNlYmZmIiAvPjxwYXRoIGQ9Ik04Ljk0LDEwLjYxdi0xYS43LjcsMCwwLDAtLjctLjdINi42OWEuMi4yLDAsMCwxLS4yLS4yVjMuNGwtLjIzLjEyTDYsMy42NnY1YS42OS42OSwwLDAsMCwuNjkuNjlIOC4yNGEuMjEuMjEsMCwwLDEsLjIxLjIxdjFhMS4wOCwxLjA4LDAsMCwwLS44NSwxLjA2LDEuMDksMS4wOSwwLDEsMCwxLjM0LTEuMDZabS0uMjUsMS43aDBhLjY0LjY0LDAsMSwxLC42NC0uNjRBLjY0LjY0LDAsMCwxLDguNjksMTIuMzFaIiBmaWxsPSIjZjJmMmYyIiAvPjxwYXRoIGQ9Ik0xNC41Myw4LjVhMS4wOSwxLjA5LDAsMCwwLS4yNSwyLjE1di4yYS4yMS4yMSwwLDAsMS0uMjEuMjFoLTJWNy41NGEuNjkuNjksMCwwLDAtLjY5LS42OUgxMC4zNUExLjA4LDEuMDgsMCwwLDAsOS4yOSw2YTEuMDksMS4wOSwwLDEsMCwxLjA2LDEuMzRoMS4wN2EuMi4yLDAsMCwxLC4yLjJ2Ny44NGguNDlWMTEuNTVoMmEuNy43LDAsMCwwLC43LS43di0uMmExLjA5LDEuMDksMCwwLDAsLjg1LTEuMDZoMEExLjA5LDEuMDksMCwwLDAsMTQuNTMsOC41Wk05LjI5LDcuNzNoMGEuNjQuNjQsMCwxLDEsLjY0LS42NEEuNjQuNjQsMCwwLDEsOS4yOSw3LjczWm01LjI0LDIuNWgwYS42NC42NCwwLDEsMSwuNjMtLjY0QS42NC42NCwwLDAsMSwxNC41MywxMC4yM1oiIGZpbGw9IiM5Y2ViZmYiIC8+PC9zdmc+"

    }
    /* threads: {
        'PMThreadWorker': 'ThreadWorker.ts'
    } */
}

/***/ }),

/***/ "@realmocean/ui":
/*!********************************!*\
  !*** external "realmocean$ui" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = realmocean$ui;

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
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/ui */ "@realmocean/ui");
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dialogs_Actions_GenericAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogs/Actions/GenericAction */ "./src/dialogs/Actions/GenericAction.ts");
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

_realmocean_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('genericAction', _dialogs_Actions_GenericAction__WEBPACK_IMPORTED_MODULE_2__.GenericAction);

})();

/******/ })()
;
//# sourceMappingURL=index.js.map
                    tuval$core.ModuleLoader.FireModuleLoadedEvent('com.tuvalsoft.widget.custom-field-popup', tuval$core['__APPS__']['com.tuvalsoft.widget.custom-field-popup']);
                    
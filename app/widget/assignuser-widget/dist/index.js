
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
/* harmony export */   Assignee: () => (/* binding */ Assignee),
/* harmony export */   MyTestController: () => (/* binding */ MyTestController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uidotdev_usehooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uidotdev/usehooks */ "./node_modules/@uidotdev/usehooks/index.js");
/* harmony import */ var _views_UserAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/UserAvatar */ "./src/views/UserAvatar.ts");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_5__);
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






var Assignee = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 36 36", xmlns: "http://www.w3.org/2000/svg", width: '100%', height: '100%', className: "ng-star-inserted" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("g", { "_ngcontent-plw-c186": "", fill: "none", "fill-rule": "evenodd" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("circle", { "_ngcontent-plw-c186": "", cx: "18", cy: "18", r: "17.5", "stroke-dasharray": "3", stroke: '#c1c1c1' }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { stroke: '#c1c1c1', d: "M10.35,25.65 C10.35,20.9555796 13.7836186,17.15 18,17.15 C22.2249783,17.15 25.65,20.9651318 25.65,\n              25.65", "stroke-linecap": "round" }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("circle", { stroke: '#c1c1c1', cx: "18", cy: "12.9", r: "4.3", className: "cu-stroke" }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("circle", { fill: '#c1c1c1', "fill-rule": "nonzero", cx: "27.4", cy: "27.4", r: "7.7" }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M28.2,26.5 L28.2,23.946088 C28.2,23.4873147 27.819442,23.1 27.35,23.1 C26.8772851,23.1 26.5,\n              23.4788065 26.5,23.946088 L26.5,26.5 L23.946088,26.5 C23.4873147,26.5 23.1,26.880558 23.1,27.35 C23.1,\n              27.8227149 23.4788065,28.2 23.946088,28.2 L26.5,28.2 L26.5,30.753912 C26.5,31.2126853 26.880558,31.6 27.35,\n              31.6 C27.8227149,31.6 28.2,31.2211935 28.2,30.753912 L28.2,28.2 L30.753912,28.2 C31.2126853,28.2 31.6,\n              27.819442 31.6,27.35 C31.6,26.8772851 31.2211935,26.5 30.753912,26.5 L28.2,26.5 Z", fill: "#FFF", "fill-rule": "nonzero" })))); };
var Assignees = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { "aria-hidden": "true", viewBox: "0 0 36 36", xmlns: "http://www.w3.org/2000/svg", width: '100%', height: '100%' },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("g", { fill: "none", "fill-rule": "evenodd" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("circle", { cx: "18", cy: "18", r: "17.5", "stroke-dasharray": "3", stroke: '#c1c1c1' }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("g", { transform: "translate(8.1 9.9)", stroke: '#c1c1c1' },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M3.6 16.2C3.6 12.2235498 6.42768594 9 9.9 9 13.3793939 9 16.2 12.2316411 16.2 16.2M6.32989412 5.86608027C5.77082649 5.56660058 5.15158583 5.4 4.5 5.4 2.01977567 5.4 0 7.81766235 0 10.8M19.8 10.8C19.8 7.82373081 17.7852813 5.4 15.3 5.4 14.6488874 5.4 14.0295078 5.56661956 13.4700731 5.86633373", "stroke-linecap": "round" }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("circle", { "_ngcontent-ng-c3875430379": "", cx: "9.9", cy: "5.4", r: "3.6" }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "_ngcontent-ng-c3875430379": "", d: "M12.6216451,3.04350737 C12.6073618,2.9310179 12.6,2.81636867 12.6,2.7 C12.6,1.20883117 13.8088312,\n              0 15.3,0 C16.7911688,0 18,1.20883117 18,2.7 C18,4.19116882 16.7911688,5.4 15.3,5.4 C14.5686355,\n              5.4 13.9051886,5.10920978 13.4189705,4.63694028 M6.38102953,4.63694028 C5.89481133,5.10920978 5.23136452,\n              5.4 4.5,5.4 C3.00883118,5.4 1.8,4.19116882 1.8,2.7 C1.8,1.20883117 3.00883118,0 4.5,0 C5.99116883,0 7.2,\n              1.20883117 7.2,2.7 C7.2,2.81636867 7.1926382,2.9310179 7.17835491,3.04350737" })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("circle", { "fill-rule": "nonzero", cx: "27.9", cy: "27.9", r: "8.1", fill: '#c1c1c1' }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M28.8,27 L28.8,24.2958578 C28.8,23.810098 28.3970562,23.4 27.9,23.4 C27.3994783,23.4 27,\n            23.8010892 27,24.2958578 L27,27 L24.2958578,27 C23.810098,27 23.4,27.4029438 23.4,27.9 C23.4,\n            28.4005217 23.8010892,28.8 24.2958578,28.8 L27,28.8 L27,31.5041422 C27,31.989902 27.4029438,32.4 27.9,\n            32.4 C28.4005217,32.4 28.8,31.9989108 28.8,31.5041422 L28.8,28.8 L31.5041422,28.8 C31.989902,28.8 32.4,\n            28.3970562 32.4,27.9 C32.4,27.3994783 31.9989108,27 31.5041422,27 L28.8,27 Z", fill: "#FFF", "fill-rule": "nonzero" })))); };
var MyTestController = /** @class */ (function (_super) {
    __extends(MyTestController, _super);
    function MyTestController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyTestController.prototype.LoadView = function () {
        var _this = this;
        var _hideHandle;
        var _a = this.props.config || {}, _b = _a.onChange, onChange = _b === void 0 ? void 0 : _b, tenant_id = _a.tenant_id, _c = _a.isMultiSelect, isMultiSelect = _c === void 0 ? false : _c, _d = _a.width, width = _d === void 0 ? 36 : _d, _e = _a.height, height = _e === void 0 ? 36 : _e, _f = _a.tooltip, tooltip = _f === void 0 ? '' : _f, _g = _a.readonly, readonly = _g === void 0 ? false : _g;
        var _h = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(this.props.config.selectedAccountId), selectedAccountId = _h[0], setSelectedAccountId = _h[1];
        var team = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_5__.useGetCurrentTeam)().team;
        var memberships = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_5__.useListTeamMemberships)(team).memberships;
        var user = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_5__.useGetUser)(selectedAccountId).user;
        /*  const { accounts, isLoading } = useGetTenantAccounts({ tenant_id });
         const { account } = useGetAccount(selectedAccountId);
  */
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            setSelectedAccountId(_this.props.config.selectedAccountId);
        }, [this.props.config.selectedAccountId]);
        var _j = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isOpen = _j[0], setIsOpen = _j[1];
        var ref = (0,_uidotdev_usehooks__WEBPACK_IMPORTED_MODULE_3__.useClickAway)(function () {
            setIsOpen(false);
        });
        return (readonly ? (0,_views_UserAvatar__WEBPACK_IMPORTED_MODULE_4__.UserAvatar)(user, width, height) :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.PopupButton)(selectedAccountId ?
                (0,_views_UserAvatar__WEBPACK_IMPORTED_MODULE_4__.UserAvatar)(user, width, height)
                :
                    (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)(isMultiSelect ?
                        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(Assignees)
                        :
                            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(Assignee)).allWidth(width).allHeight(height)
                        .tooltip(tooltip)
                        .tooltipPosition(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TooltipPositions.TOP)
                        .overflow('hidden')
                        //.border('solid 1px #EAEAEA')
                        .cornerRadius('50%').padding(3)
                        .cursor('pointer')
                        .onClick(function () { return setIsOpen(true); }))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TextField)().paddingLeft('25px').placeholder('Search...')
                .border('none').shadow({ focus: 'none' }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icons.Search).position('absolute').left('8px').top('12px')).height().padding(5))
                .borderBottom('1px solid #E8EAED')
                .height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ScrollView)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading, spacing: 5 }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(memberships === null || memberships === void 0 ? void 0 : memberships.memberships)(function (account) {
                var _a, _b;
                return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIAvatar)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("".concat((_b = (_a = account === null || account === void 0 ? void 0 : account.userName) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.toUpperCase()))), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(account === null || account === void 0 ? void 0 : account.userName)).background({ hover: '#F0F1F3' }).height(44).padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 10)
                    .cornerRadius(10))
                    .cursor('pointer')
                    .height().onClick(function () {
                    if (_tuval_core__WEBPACK_IMPORTED_MODULE_2__.is.function(onChange)) {
                        onChange(account);
                    }
                    setSelectedAccountId(user === null || user === void 0 ? void 0 : user.$id);
                    _hideHandle();
                });
            })).height())).height(300).width(250).padding(2))
                //.open(isOpen)
                .hideHandle(function (hideHandle) { return _hideHandle = hideHandle; })
                .dialogPosition(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.DialogPosition.BOTTOM_START));
    };
    return MyTestController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/views/UserAvatar.ts":
/*!*********************************!*\
  !*** ./src/views/UserAvatar.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserAvatar: () => (/* binding */ UserAvatar)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function UserAvatar(account, width, height) {
    var _a, _b, _c, _d, _e;
    var names = (_a = account === null || account === void 0 ? void 0 : account.name) === null || _a === void 0 ? void 0 : _a.split(' ');
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)(account ?
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("".concat((_c = (_b = names === null || names === void 0 ? void 0 : names[0]) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.toUpperCase()).concat((_e = (_d = names === null || names === void 0 ? void 0 : names[1]) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.toUpperCase()))
            .fontWeight('bold')
            .fontSize(12)
            .lineHeight('20px')
        : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)()).background('rgb(94, 218, 149)').foregroundColor('rgb(0, 0, 0)')
        .allWidth(width).allHeight(height)
        .cornerRadius('50%')
        .cursor('pointer'))
        .shadow('rgb(255, 255, 255) 0px 0px 0px 2px')
        .cornerRadius('50%')
        .allWidth(width).allHeight(height)
        .tooltip(account ? "".concat(account === null || account === void 0 ? void 0 : account.name, " ").concat(account === null || account === void 0 ? void 0 : account.name) : '')
        .tooltipPosition(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TooltipPositions.TOP));
}


/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/***/ ((module) => {

module.exports = {
    application: {
        name: 'com.tuvalsoft.widget.userselect',
        path: './src/Application.ts',
        displayName: "Procetra",
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

/***/ }),

/***/ "./node_modules/@uidotdev/usehooks/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@uidotdev/usehooks/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useBattery: () => (/* binding */ useBattery),
/* harmony export */   useClickAway: () => (/* binding */ useClickAway),
/* harmony export */   useCopyToClipboard: () => (/* binding */ useCopyToClipboard),
/* harmony export */   useCounter: () => (/* binding */ useCounter),
/* harmony export */   useDebounce: () => (/* binding */ useDebounce),
/* harmony export */   useDefault: () => (/* binding */ useDefault),
/* harmony export */   useDocumentTitle: () => (/* binding */ useDocumentTitle),
/* harmony export */   useFavicon: () => (/* binding */ useFavicon),
/* harmony export */   useGeolocation: () => (/* binding */ useGeolocation),
/* harmony export */   useHistoryState: () => (/* binding */ useHistoryState),
/* harmony export */   useHover: () => (/* binding */ useHover),
/* harmony export */   useIdle: () => (/* binding */ useIdle),
/* harmony export */   useIntersectionObserver: () => (/* binding */ useIntersectionObserver),
/* harmony export */   useIsClient: () => (/* binding */ useIsClient),
/* harmony export */   useIsFirstRender: () => (/* binding */ useIsFirstRender),
/* harmony export */   useList: () => (/* binding */ useList),
/* harmony export */   useLockBodyScroll: () => (/* binding */ useLockBodyScroll),
/* harmony export */   useLongPress: () => (/* binding */ useLongPress),
/* harmony export */   useMap: () => (/* binding */ useMap),
/* harmony export */   useMeasure: () => (/* binding */ useMeasure),
/* harmony export */   useMediaQuery: () => (/* binding */ useMediaQuery),
/* harmony export */   useMouse: () => (/* binding */ useMouse),
/* harmony export */   useNetworkState: () => (/* binding */ useNetworkState),
/* harmony export */   useObjectState: () => (/* binding */ useObjectState),
/* harmony export */   useOrientation: () => (/* binding */ useOrientation),
/* harmony export */   usePreferredLanguage: () => (/* binding */ usePreferredLanguage),
/* harmony export */   usePrevious: () => (/* binding */ usePrevious),
/* harmony export */   useQueue: () => (/* binding */ useQueue),
/* harmony export */   useRenderCount: () => (/* binding */ useRenderCount),
/* harmony export */   useRenderInfo: () => (/* binding */ useRenderInfo),
/* harmony export */   useScript: () => (/* binding */ useScript),
/* harmony export */   useSet: () => (/* binding */ useSet),
/* harmony export */   useSpeech: () => (/* binding */ useSpeech),
/* harmony export */   useThrottle: () => (/* binding */ useThrottle),
/* harmony export */   useToggle: () => (/* binding */ useToggle),
/* harmony export */   useVisibilityChange: () => (/* binding */ useVisibilityChange),
/* harmony export */   useWindowScroll: () => (/* binding */ useWindowScroll),
/* harmony export */   useWindowSize: () => (/* binding */ useWindowSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function isShallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}

function isTouchEvent({ nativeEvent }) {
  return window.TouchEvent
    ? nativeEvent instanceof TouchEvent
    : "touches" in nativeEvent;
}

function isMouseEvent(event) {
  return event.nativeEvent instanceof MouseEvent;
}

function throttle(cb, ms) {
  let lastTime = 0;
  return () => {
    const now = Date.now();
    if (now - lastTime >= ms) {
      cb();
      lastTime = now;
    }
  };
}

function useBattery() {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    supported: true,
    loading: true,
    level: null,
    charging: null,
    chargingTime: null,
    dischargingTime: null,
  });

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!navigator.getBattery) {
      setState((s) => ({
        ...s,
        supported: false,
        loading: false,
      }));
      return;
    }

    let battery = null;

    const handleChange = () => {
      setState({
        supported: true,
        loading: false,
        level: battery.level,
        charging: battery.charging,
        chargingTime: battery.chargingTime,
        dischargingTime: battery.dischargingTime,
      });
    };

    navigator.getBattery().then((b) => {
      battery = b;
      handleChange();

      b.addEventListener("levelchange", handleChange);
      b.addEventListener("chargingchange", handleChange);
      b.addEventListener("chargingtimechange", handleChange);
      b.addEventListener("dischargingtimechange", handleChange);
    });

    return () => {
      if (battery) {
        battery.removeEventListener("levelchange", handleChange);
        battery.removeEventListener("chargingchange", handleChange);
        battery.removeEventListener("chargingtimechange", handleChange);
        battery.removeEventListener("dischargingtimechange;", handleChange);
      }
    };
  }, []);

  return state;
}

function useClickAway(cb) {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const refCb = react__WEBPACK_IMPORTED_MODULE_0__.useRef(cb);

  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
    refCb.current = cb;
  });

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const handler = (e) => {
      const element = ref.current;
      if (element && !element.contains(e.target)) {
        refCb.current(e);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  return ref;
}

function useCopyToClipboard() {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    error: null,
    text: null,
  });

  const copyToClipboard = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (value) => {
    if (!navigator?.clipboard) {
      return setState({
        error: new Error("Clipboard not supported"),
        text: null,
      });
    }

    const handleSuccess = () => {
      setState({
        error: null,
        text: value,
      });
    };

    const handleFailure = (e) => {
      setState({
        error: e,
        text: null,
      });
    };

    navigator.clipboard.writeText(value).then(handleSuccess, handleFailure);
  }, []);

  return [state, copyToClipboard];
}

function useCounter(startingValue = 0, options = {}) {
  const { min, max } = options;

  if (min && startingValue < min) {
    throw new Error(
      `Your starting value of ${startingValue} is less than your min of ${min}.`
    );
  }

  if (max && startingValue > max) {
    throw new Error(
      `Your starting value of ${startingValue} is greater than your max of ${max}.`
    );
  }

  const [count, setCount] = react__WEBPACK_IMPORTED_MODULE_0__.useState(startingValue);

  const increment = () => {
    const nextCount = count + 1;
    if (max && nextCount > max) {
      return;
    }

    setCount(nextCount);
  };

  const decrement = () => {
    const nextCount = count - 1;
    if (min && nextCount < min) {
      return;
    }

    setCount(nextCount);
  };

  const set = (nextCount) => {
    if (max && nextCount > max) {
      return;
    }

    if (min && nextCount < min) {
      return;
    }

    if (nextCount === count) {
      return;
    }

    setCount(nextCount);
  };

  const reset = () => {
    if (count === startingValue) {
      return;
    }

    setCount(startingValue);
  };

  return [
    count,
    {
      increment,
      decrement,
      set,
      reset,
    },
  ];
}

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(value);

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

function useDefault(initialValue, defaultValue) {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(initialValue);

  if (typeof state === "undefined" || state === null) {
    return [defaultValue, setState];
  }

  return [state, setState];
}

function useDocumentTitle(title) {
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    document.title = title;
  }, [title]);
}

function useFavicon(url) {
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
  }, [url]);
}

function useGeolocation(options = {}) {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    loading: true,
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: null,
    error: null,
  });

  const optionsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(options);

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const onEvent = ({ coords, timestamp }) => {
      setState({
        loading: false,
        timestamp,
        latitude: coords.latitude,
        longitude: coords.longitude,
        altitude: coords.altitude,
        accuracy: coords.accuracy,
        altitudeAccuracy: coords.altitudeAccuracy,
        heading: coords.heading,
        speed: coords.speed,
      });
    };

    const onEventError = (error) => {
      setState((s) => ({
        ...s,
        loading: false,
        error,
      }));
    };

    navigator.geolocation.getCurrentPosition(
      onEvent,
      onEventError,
      optionsRef.current
    );

    const watchId = navigator.geolocation.watchPosition(
      onEvent,
      onEventError,
      optionsRef.current
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return state;
}

const initialUseHistoryStateState = {
  past: [],
  present: null,
  future: [],
};

const useHistoryStateReducer = (state, action) => {
  const { past, present, future } = state;
  switch (action.type) {
    case "UNDO":
      return {
        past: past.slice(0, past.length - 1),
        present: past[past.length - 1],
        future: [present, ...future],
      };
    case "REDO":
      return {
        past: [...past, present],
        present: future[0],
        future: future.slice(1),
      };
    case "SET":
      const { newPresent } = action;

      if (action.newPresent === present) {
        return state;
      }

      return {
        past: [...past, present],
        present: newPresent,
        future: [],
      };
    case "CLEAR":
      return {
        ...initialUseHistoryStateState,
        present: action.initialPresent,
      };
    default:
      throw new Error("Unsupported action type");
  }
};

function useHistoryState(initialPresent = {}) {
  const initialPresentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(initialPresent);

  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__.useReducer(useHistoryStateReducer, {
    ...initialUseHistoryStateState,
    present: initialPresentRef.current,
  });

  const canUndo = state.past.length !== 0;
  const canRedo = state.future.length !== 0;

  const undo = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    if (canUndo) {
      dispatch({ type: "UNDO" });
    }
  }, [canUndo]);

  const redo = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    if (canRedo) {
      dispatch({ type: "REDO" });
    }
  }, [canRedo]);

  const set = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (newPresent) => dispatch({ type: "SET", newPresent }),
    []
  );

  const clear = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () =>
      dispatch({ type: "CLEAR", initialPresent: initialPresentRef.current }),
    []
  );

  return { state: state.present, set, undo, redo, clear, canUndo, canRedo };
}

function useHover() {
  const [hovering, setHovering] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const handleMouseEnter = () => {
      setHovering(true);
    };

    const handleMouseLeave = () => {
      setHovering(false);
    };

    node.addEventListener("mouseenter", handleMouseEnter);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      node.removeEventListener("mouseenter", handleMouseEnter);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return [ref, hovering];
}

function useIdle(ms = 1000 * 60) {
  const [idle, setIdle] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let timeoutId;

    const handleTimeout = () => {
      setIdle(true);
    };

    const handleEvent = throttle((e) => {
      setIdle(false);

      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(handleTimeout, ms);
    }, 500);

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        handleEvent();
      }
    };

    timeoutId = window.setTimeout(handleTimeout, ms);

    window.addEventListener("mousemove", handleEvent);
    window.addEventListener("mousedown", handleEvent);
    window.addEventListener("resize", handleEvent);
    window.addEventListener("keydown", handleEvent);
    window.addEventListener("touchstart", handleEvent);
    window.addEventListener("wheel", handleEvent);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("mousemove", handleEvent);
      window.removeEventListener("mousedown", handleEvent);
      window.removeEventListener("resize", handleEvent);
      window.removeEventListener("keydown", handleEvent);
      window.removeEventListener("touchstart", handleEvent);
      window.removeEventListener("wheel", handleEvent);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.clearTimeout(timeoutId);
    };
  }, [ms]);

  return idle;
}

function useIntersectionObserver(options = {}) {
  const { threshold = 1, root = null, rootMargin = "0%" } = options;
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const [entry, setEntry] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const node = ref?.current;

    if (!node || typeof IntersectionObserver !== "function") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);

    return () => {
      setEntry(null);
      observer.disconnect();
    };
  }, [threshold, root, rootMargin]);

  return [ref, entry];
}

function useIsClient() {
  const [isClient, setIsClient] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

function useIsFirstRender() {
  const renderRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);

  if (renderRef.current === true) {
    renderRef.current = false;
    return true;
  }

  return renderRef.current;
}

function useList(defaultList = []) {
  const [list, setList] = react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultList);

  const methods = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    const set = (l) => {
      setList(l);
    };

    const push = (element) => {
      setList((l) => [...l, element]);
    };

    const removeAt = (index) => {
      setList((l) => [...l.slice(0, index), ...l.slice(index + 1)]);
    };

    const insertAt = (index, element) => {
      setList((l) => [...l.slice(0, index), element, ...l.slice(index)]);
    };

    const updateAt = (index, element) => {
      setList((l) => l.map((e, i) => (i === index ? element : e)));
    };

    const clear = () => setList([]);

    return {
      set,
      push,
      removeAt,
      insertAt,
      updateAt,
      clear,
    };
  }, []);

  return [list, methods];
}

function useLockBodyScroll() {
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
}

function useLongPress(
  callback,
  { threshold = 400, onStart, onFinish, onCancel } = {}
) {
  const isLongPressActive = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const isPressed = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const timerId = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  const cbRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(callback);

  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
    cbRef.current = callback;
  });

  const start = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => (event) => {
      if (isPressed.current) return;

      if (!isMouseEvent(event) && !isTouchEvent(event)) return;

      if (onStart) {
        onStart(event);
      }

      isPressed.current = true;
      timerId.current = setTimeout(() => {
        cbRef.current(event);
        isLongPressActive.current = true;
      }, threshold);
    },
    [onStart, threshold]
  );

  const cancel = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => (event) => {
      if (!isMouseEvent(event) && !isTouchEvent(event)) return;

      if (isLongPressActive.current) {
        if (onFinish) {
          onFinish(event);
        }
      } else if (isPressed.current) {
        if (onCancel) {
          onCancel(event);
        }
      }

      isLongPressActive.current = false;
      isPressed.current = false;

      if (timerId.current) {
        window.clearTimeout(timerId.current);
      }
    },
    [onFinish, onCancel]
  );

  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (callback === null) {
      return {};
    }

    const mouseHandlers = {
      onMouseDown: start(),
      onMouseUp: cancel(),
      onMouseLeave: cancel(),
    };

    const touchHandlers = {
      onTouchStart: start(),
      onTouchEnd: cancel(),
    };

    return {
      ...mouseHandlers,
      ...touchHandlers,
    };
  }, [callback, cancel, start]);
}

function useMap(initialState) {
  const mapRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Map(initialState));
  const [, reRender] = react__WEBPACK_IMPORTED_MODULE_0__.useReducer((x) => x + 1, 0);

  mapRef.current.set = (...args) => {
    Map.prototype.set.apply(mapRef.current, args);
    reRender();
    return mapRef.current;
  };

  mapRef.current.clear = (...args) => {
    Map.prototype.clear.apply(mapRef.current, args);
    reRender();
  };

  mapRef.current.delete = (...args) => {
    const res = Map.prototype.delete.apply(mapRef.current, args);
    reRender();

    return res;
  };

  return mapRef.current;
}

function useMeasure() {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const [rect, setRect] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    width: null,
    height: null,
  });

  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      if (entry && entry.contentRect) {
        setRect({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return [ref, rect];
}

function useMediaQuery(query) {
  const subscribe = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (callback) => {
      const matchMedia = window.matchMedia(query);

      matchMedia.addEventListener("change", callback);
      return () => {
        matchMedia.removeEventListener("change", callback);
      };
    },
    [query]
  );

  const getSnapshot = () => {
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = () => {
    throw Error("useMediaQuery is a client-only hook");
  };

  return react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function useMouse() {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    x: 0,
    y: 0,
    elementX: 0,
    elementY: 0,
    elementPositionX: 0,
    elementPositionY: 0,
  });

  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
    const handleMouseMove = (event) => {
      let newState = {
        x: event.pageX,
        y: event.pageY,
      };

      if (ref.current instanceof HTMLElement) {
        const { left, top } = ref.current.getBoundingClientRect();
        const elementPositionX = left + window.pageXOffset;
        const elementPositionY = top + window.pageYOffset;
        const elementX = event.pageX - elementPositionX;
        const elementY = event.pageY - elementPositionY;

        newState.elementX = elementX;
        newState.elementY = elementY;
        newState.elementX = elementX;
        newState.elementY = elementY;
        newState.elementPositionX = elementPositionX;
        newState.elementPositionY = elementPositionY;
      }

      setState((s) => {
        return {
          ...s,
          ...newState,
        };
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return [state, ref];
}

function useNetworkState() {
  const connection =
    navigator?.connection ||
    navigator?.mozConnection ||
    navigator?.webkitConnection;

  const cache = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});

  const subscribe = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((callback) => {
    window.addEventListener("online", callback, { passive: true });
    window.addEventListener("offline", callback, { passive: true });

    if (connection) {
      connection.addEventListener("change", callback, { passive: true });
    }

    return () => {
      window.removeEventListener("online", callback);
      window.removeEventListener("offline", callback);

      if (connection) {
        connection.removeEventListener("change", callback);
      }
    };
  }, []);

  const getSnapshot = () => {
    const online = navigator.onLine;

    const nextState = {
      online,
      downlink: connection?.downlink,
      downlinkMax: connection?.downlinkMax,
      effectiveType: connection?.effectiveType,
      rtt: connection?.rtt,
      saveData: connection?.saveData,
      type: connection?.type,
    };

    if (isShallowEqual(cache.current, nextState)) {
      return cache.current;
    } else {
      cache.current = nextState;
      return nextState;
    }
  };

  const getServerSnapshot = () => {
    throw Error("useNetworkState is a client-only hook");
  };

  return react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function useObjectState(initialValue) {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(initialValue);

  const handleUpdate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((arg) => {
    if (typeof arg === "function") {
      setState((s) => {
        const newState = arg(s);

        return {
          ...s,
          ...newState,
        };
      });
    }

    if (typeof arg === "object") {
      setState((s) => ({
        ...s,
        ...arg,
      }));
    }
  }, []);

  return [state, handleUpdate];
}

function useOrientation() {
  const [orientation, setOrientation] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    angle: 0,
    type: "landscape-primary",
  });

  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
    const handleChange = () => {
      const { angle, type } = window.screen.orientation;
      setOrientation({
        angle,
        type,
      });
    };

    const handle_orientationchange = () => {
      setOrientation({
        type: "UNKNOWN",
        angle: window.orientation,
      });
    };

    if (window.screen?.orientation) {
      handleChange();
      window.screen.orientation.addEventListener("change", handleChange);
    } else {
      handle_orientationchange();
      window.addEventListener("orientationchange", handle_orientationchange);
    }

    return () => {
      if (window.screen?.orientation) {
        window.screen.orientation.removeEventListener("change", handleChange);
      } else {
        window.removeEventListener(
          "orientationchange",
          handle_orientationchange
        );
      }
    };
  }, []);

  return orientation;
}

const usePreferredLanguageSubscribe = (cb) => {
  window.addEventListener("languagechange", cb);
  return () => window.removeEventListener("languagechange", cb);
};

const getPreferredLanguageSnapshot = () => {
  return navigator.language;
};

const getPreferredLanguageServerSnapshot = () => {
  throw Error("usePreferredLanguage is a client-only hook");
};

function usePreferredLanguage() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore(
    usePreferredLanguageSubscribe,
    getPreferredLanguageSnapshot,
    getPreferredLanguageServerSnapshot
  );
}

function usePrevious(newValue) {
  const previousRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    previousRef.current = newValue;
  });

  return previousRef.current;
}

function useQueue(initialValue = []) {
  const [queue, setQueue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(initialValue);

  const add = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((element) => {
    setQueue((q) => [...q, element]);
  }, []);

  const remove = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    let removedElement;

    setQueue(([first, ...q]) => {
      removedElement = first;
      return q;
    });

    return removedElement;
  }, []);

  const clear = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    setQueue([]);
  }, []);

  return {
    add,
    remove,
    clear,
    first: queue[0],
    last: queue[queue.length - 1],
    size: queue.length,
    queue,
  };
}

function useRenderCount() {
  const count = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);

  count.current++;

  return count.current;
}

function useRenderInfo(name = "Unknown") {
  const count = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
  const lastRender = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  const now = Date.now();

  count.current++;

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    lastRender.current = Date.now();
  });

  const sinceLastRender = lastRender.current ? now - lastRender.current : 0;

  if (true) {
    const info = {
      name,
      renders: count.current,
      sinceLastRender,
      timestamp: now,
    };

    console.log(info);

    return info;
  }
}

function useScript(src, options = {}) {
  const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => {
    if (!src) {
      return "idle";
    }

    return "loading";
  });

  const cachedScriptStatuses = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!src) {
      return;
    }

    const cachedScriptStatus = cachedScriptStatuses.current[src];
    if (cachedScriptStatus === "ready" || cachedScriptStatus === "error") {
      setStatus(cachedScriptStatus);
      return;
    }

    let script = document.querySelector(`script[src="${src}"]`);

    if (script) {
      setStatus(
        script.getAttribute("data-status") ?? cachedScriptStatus ?? "loading"
      );
    } else {
      script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.setAttribute("data-status", "loading");
      document.body.appendChild(script);

      const setAttributeFromEvent = (event) => {
        const scriptStatus = event.type === "load" ? "ready" : "error";

        if (script) {
          script.setAttribute("data-status", scriptStatus);
        }
      };

      script.addEventListener("load", setAttributeFromEvent);
      script.addEventListener("error", setAttributeFromEvent);
    }

    const setStateFromEvent = (event) => {
      const newStatus = event.type === "load" ? "ready" : "error";
      setStatus(newStatus);
      cachedScriptStatuses.current[src] = newStatus;
    };

    script.addEventListener("load", setStateFromEvent);
    script.addEventListener("error", setStateFromEvent);

    return () => {
      if (script) {
        script.removeEventListener("load", setStateFromEvent);
        script.removeEventListener("error", setStateFromEvent);
      }

      if (script && options.removeOnUnmount) {
        script.remove();
      }
    };
  }, [src, options.removeOnUnmount]);

  return status;
}

function useSet(values) {
  const setRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Set(values));
  const [, reRender] = react__WEBPACK_IMPORTED_MODULE_0__.useReducer((x) => x + 1, 0);

  setRef.current.add = (...args) => {
    const res = Set.prototype.add.apply(setRef.current, args);
    reRender();

    return res;
  };

  setRef.current.clear = (...args) => {
    Set.prototype.clear.apply(setRef.current, args);
    reRender();
  };

  setRef.current.delete = (...args) => {
    const res = Set.prototype.delete.apply(setRef.current, args);
    reRender();

    return res;
  };

  return setRef.current;
}

function useSpeech(text, options) {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => {
    const { lang = "default", name = "" } = options.voice || {};
    return {
      isPlaying: false,
      status: "init",
      lang: options.lang || "default",
      voiceInfo: { lang, name },
      rate: options.rate || 1,
      pitch: options.pitch || 1,
      volume: options.volume || 1,
    };
  });

  const optionsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(options);

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const handlePlay = () => {
      setState((s) => {
        return { ...s, isPlaying: true, status: "play" };
      });
    };

    const handlePause = () => {
      setState((s) => {
        return { ...s, isPlaying: false, status: "pause" };
      });
    };

    const handleEnd = () => {
      setState((s) => {
        return { ...s, isPlaying: false, status: "end" };
      });
    };

    const utterance = new SpeechSynthesisUtterance(text);
    optionsRef.current.lang && (utterance.lang = optionsRef.current.lang);
    optionsRef.current.voice && (utterance.voice = optionsRef.current.voice);
    utterance.rate = optionsRef.current.rate || 1;
    utterance.pitch = optionsRef.current.pitch || 1;
    utterance.volume = optionsRef.current.volume || 1;
    utterance.onstart = handlePlay;
    utterance.onpause = handlePause;
    utterance.onresume = handlePlay;
    utterance.onend = handleEnd;
    window.speechSynthesis.speak(utterance);
  }, [text]);

  return state;
}

function useThrottle(value, interval = 500) {
  const [throttledValue, setThrottledValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(value);
  const lastUpdated = react__WEBPACK_IMPORTED_MODULE_0__.useRef();

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const now = Date.now();

    if (now >= lastUpdated.current + interval) {
      lastUpdated.current = now;
      setThrottledValue(value);
    } else {
      const id = window.setTimeout(() => {
        lastUpdated.current = now;
        setThrottledValue(value);
      }, interval);

      return () => window.clearTimeout(id);
    }
  }, [value, interval]);

  return throttledValue;
}

function useToggle(initialValue) {
  const [on, setOn] = react__WEBPACK_IMPORTED_MODULE_0__.useState(initialValue);

  const handleToggle = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((value) => {
    if (typeof value === "boolean") {
      return setOn(value);
    }

    return setOn((v) => !v);
  }, []);

  return [on, handleToggle];
}

function useVisibilityChange() {
  const [documentVisible, setDocumentVisibility] = react__WEBPACK_IMPORTED_MODULE_0__.useState(true);

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const handleChange = () => {
      if (document.visibilityState !== "visible") {
        setDocumentVisibility(false);
      } else {
        setDocumentVisibility(true);
      }
    };
    handleChange();

    document.addEventListener("visibilitychange", handleChange);

    return () => {
      document.removeEventListener("visibilitychange", handleChange);
    };
  }, []);

  return documentVisible;
}

function useWindowScroll() {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    x: null,
    y: null,
  });

  const scrollTo = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...args) => {
    if (typeof args[0] === "object") {
      window.scrollTo(args[0]);
    } else if (typeof args[0] === "number" && typeof args[1] === "number") {
      window.scrollTo(args[0], args[1]);
    } else {
      throw new Error(
        `Invalid arguments passed to scrollTo. See here for more info. https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo`
      );
    }
  }, []);

  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
    const handleScroll = () => {
      setState({ x: window.pageXOffset, y: window.pageYOffset });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [state, scrollTo];
}

function useWindowSize() {
  const [size, setSize] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    width: null,
    height: null,
  });

  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}


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
/* harmony export */   RatingWidget: () => (/* binding */ RatingWidget)
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
                    tuval$core.ModuleLoader.FireModuleLoadedEvent('com.tuvalsoft.widget.userselect', tuval$core['__APPS__']['com.tuvalsoft.widget.userselect']);
                    
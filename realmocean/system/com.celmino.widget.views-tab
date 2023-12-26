
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

/***/ "./src/AppController.ts":
/*!******************************!*\
  !*** ./src/AppController.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyTestController: () => (/* binding */ MyTestController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_TabItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/TabItem */ "./src/views/TabItem.ts");
/* harmony import */ var _SelectAnalyseDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectAnalyseDialog */ "./src/SelectAnalyseDialog.ts");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_3__);
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




var MyTestController = /** @class */ (function (_super) {
    __extends(MyTestController, _super);
    function MyTestController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyTestController.prototype.LoadView = function () {
        var _a = this.props.config || {}, applet_id = _a.applet_id, allViews = _a.allViews, view_id = _a.view_id, insightboards = _a.insightboards;
        var _b = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(false), drag = _b[0], setDrag = _b[1];
        var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();
        var _c = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_3__.useListViews)(true, [
            _celmino_sdk__WEBPACK_IMPORTED_MODULE_3__.Query.equal('appletId', applet_id)
        ]), views = _c.views, isLoading = _c.isLoading;
        var createView = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_3__.useCreateView)([]).createView;
        var selectedIndex = views === null || views === void 0 ? void 0 : views.findIndex(function (view) { return view.$id === view_id; });
        return ((isLoading) ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spinner)() :
            (view_id == null && (views === null || views === void 0 ? void 0 : views.length) > 0) ? ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UINavigate)("/app/".concat((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.getAppFullName)(), "/").concat(applet_id, "/").concat(views[0].$id))) :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading }).apply(void 0, __spreadArray(__spreadArray([], (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(views)(function (view, index) {
                    return (0,_views_TabItem__WEBPACK_IMPORTED_MODULE_1__.TabItem)(allViews, view, index, selectedIndex, function () { return navigate("/app/".concat((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.getAppFullName)(), "/").concat(applet_id, "/").concat(view.$id)); }, void 0);
                }), false), [(0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icons.Add).fontSize(10), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('View').lineHeight('1'))
                        .width().height().cursor('pointer').padding(5)
                        .background({ hover: '#fafbfc' })
                        .onClick(function () {
                        _SelectAnalyseDialog__WEBPACK_IMPORTED_MODULE_2__.SelectAnalyseDialog.Show(allViews, insightboards).then(function (view) {
                            createView({
                                $id: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.nanoid)(),
                                appletId: applet_id,
                                name: view.name,
                                view: view.type
                            });
                            /*   createView({
                                  tenant_id: tenant_id,
                                  app_id: app_id,
                                  account_id: account_id,
                                  workspace_id: workspace_id,
                                  folder_id: folder_id,
                                  applet_id: applet_id,
                                  view: view.type,
                                  title: view.name
                              }, {
                                  onSuccess: (view) => {
                                      invalidateResourceCache();
                                  }
                              }) */
                        });
                    })], false)).width())
                    .border(drag ? 'solid 2px gray' : '')
                    .onDragEnter(function () {
                    console.log('drag enter');
                    setDrag(true);
                })
                    .onDragLeave(function () {
                    setDrag(false);
                })
                    .onDragOver(function (ev) {
                    ev.preventDefault();
                })
                    .onDrop(function (ev) {
                    ev.preventDefault();
                    var data = ev.dataTransfer.getData("text");
                    console.log('drop', data);
                    setDrag(false);
                }));
    };
    return MyTestController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/PowerUps.ts":
/*!*************************!*\
  !*** ./src/PowerUps.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PowerUps: () => (/* binding */ PowerUps)
/* harmony export */ });
var PowerUps = [
    {
        name: 'Microsoft 365 Office Embedded',
        type: 'com.tuvalsoft.widget.office365-embedded',
        description: 'Embed Microsoft 365 Office files from Sharepoint & OneDrive for Business.',
        image: '/static/opa/images/com.document.view.office365.png',
        // icon: '\\e889',
        enabled: true
    },
    {
        name: 'Google Sheets Embedder',
        type: 'com.tuvalsoft.widget.google-sheets-embedded',
        description: 'Insert Google Sheets spreadsheets to your applets.',
        image: '/static/opa/images/com.document.view.googlesheets.png',
        // icon: '\\e889',
        enabled: true
    },
    {
        name: 'Microsoft Power BI Embedded',
        type: 'com.document.view.powerbi',
        description: 'Easily embed your Microsoft Power BI reports to your applets.',
        image: '/static/opa/images/com.document.view.powerbi/view_icon.avif',
        //  icon: '\\e889',
        enabled: true
    },
    {
        name: 'Trello Embedder',
        type: 'com.document.view.trello',
        description: 'Insert Trello boards anywhere in your applets',
        image: '/static/opa/images/com.document.view.trello/view_icon.png',
        //icon: '\\e889',
        enabled: true
    },
    {
        name: 'iFrame Embedded',
        type: 'com.document.view.office365',
        description: 'Any page you can visit, can now be embedded as view in your applets.',
        image: '/static/opa/images/com.document.view.iframe.avif',
        icon: '\\e889',
        enabled: true
    },
    {
        name: 'Google Forms Embedder',
        type: 'com.document.view.office365',
        description: 'Insert Google Forms anywhere in applets.',
        image: '/static/opa/images/com.document.view.googleforms.png',
        icon: '\\e889',
        enabled: true
    },
    {
        name: 'Google Slides Embedder',
        type: 'com.document.view.office365',
        description: 'Insert Google Forms anywhere in applets.',
        image: '/static/opa/images/com.document.view.googleslides.avif',
        icon: '\\e889',
        enabled: true
    },
    {
        name: 'Google Docs Embedder',
        type: 'com.document.view.office365',
        description: 'Insert Google Docs documents anywhere in applets.',
        image: '/static/opa/images/com.document.view.googledocs.png',
        icon: '\\e889',
        enabled: true
    },
    {
        name: 'Linked Embedder',
        type: 'com.document.view.linkedin',
        description: 'Insert Google Docs documents anywhere in applets.',
        image: '/static/opa/images/com.document.view.linkedin/icon.avif',
        icon: '\\e889',
        enabled: true
    }
];


/***/ }),

/***/ "./src/SelectAnalyseDialog.ts":
/*!************************************!*\
  !*** ./src/SelectAnalyseDialog.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectAnalyseDialog: () => (/* binding */ SelectAnalyseDialog)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_CategoryList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/CategoryList */ "./src/views/CategoryList.ts");
/* harmony import */ var _PowerUps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PowerUps */ "./src/PowerUps.ts");
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



var SelectAnalyseDialog = /** @class */ (function (_super) {
    __extends(SelectAnalyseDialog, _super);
    function SelectAnalyseDialog() {
        var _this = _super.call(this) || this;
        _this.Header = 'Select View';
        _this.Width = '1300px';
        _this.Height = '70vh';
        return _this;
    }
    SelectAnalyseDialog.prototype.BindRouterParams = function (_a) {
        var views = _a.views, _b = _a.insightboards, insightboards = _b === void 0 ? [] : _b;
        this.filtered_opas = views;
        this.views = views;
        this.insightboards = insightboards;
    };
    SelectAnalyseDialog.prototype.OnOK = function (applet) {
        this.ShowDialogAsyncResolve(applet);
        this.Hide();
    };
    SelectAnalyseDialog.prototype.OnCancel = function () {
        this.Hide();
    };
    SelectAnalyseDialog.prototype.LoadView = function () {
        var _this = this;
        var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ScrollView)({ axes: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cVertical, alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_views_CategoryList__WEBPACK_IMPORTED_MODULE_1__.CategoryList)({
            categories: [
                { id: "1", title: 'Applet Views', icon: 'view_list', count: this.views.length },
                { id: "2", title: 'Insightboards', icon: 'star', count: this.insightboards.length },
                { id: "3", title: 'Power Ups', icon: 'star', count: _PowerUps__WEBPACK_IMPORTED_MODULE_2__.PowerUps.length },
            ],
            onChange: function (item) {
                if (item.id == '1') {
                    _this.filtered_opas = __spreadArray([], _this.views, true);
                }
                else if (item.id == '2') {
                    _this.filtered_opas = __spreadArray([], _this.insightboards, true);
                }
                else if (item.id == '3') {
                    _this.filtered_opas = __spreadArray([], _PowerUps__WEBPACK_IMPORTED_MODULE_2__.PowerUps, true);
                }
            }
        })).allWidth(200), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(this.filtered_opas)(function (opa) {
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
                _this.SetValue('name', opa.name);
                //   this.SetValue('folder_id', this.folder_id);
                //   this.SetValue('space_id', this.space_id);
                //   this.SetValue('tenant_id', useSessionService().TenantId);
                //   this.SetValue('account_id', useSessionService().AccountId);
                //   this.SetValue('item_type', 'opa');
                _this.SetValue('opa', opa.type);
                //   this.SetValue('app_id', getAppFullName());
                //  this.SetValue('content', '')
                _this.last_added_opa_type = opa.type;
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
        })).wrap('wrap').height())));
    };
    SelectAnalyseDialog.Show = function (views, insightboards) {
        var dialog = new SelectAnalyseDialog();
        dialog.BindRouterParams({ views: views, insightboards: insightboards });
        return dialog.ShowDialogAsync();
    };
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ViewProperty)()
    ], SelectAnalyseDialog.prototype, "views", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ViewProperty)()
    ], SelectAnalyseDialog.prototype, "insightboards", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ViewProperty)()
    ], SelectAnalyseDialog.prototype, "filtered_opas", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ViewProperty)()
    ], SelectAnalyseDialog.prototype, "sub_type", void 0);
    return SelectAnalyseDialog;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.DialogView));



/***/ }),

/***/ "./src/views/CategoryItem.ts":
/*!***********************************!*\
  !*** ./src/views/CategoryItem.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryItem: () => (/* binding */ CategoryItem)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

var CategoryItem = function (item, selected) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Heading)(item.title)
        .h3()
        .fontSize(14)
        .fontWeight(selected ? '600' : '400')
        .foregroundColor(selected ? '#7b68ee' : ''), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(item.count.toString()).fontSize(12).foregroundColor('#aeacb0')));
}))
    .height(); };


/***/ }),

/***/ "./src/views/CategoryList.ts":
/*!***********************************!*\
  !*** ./src/views/CategoryList.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryList: () => (/* binding */ CategoryList)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CategoryItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryItem */ "./src/views/CategoryItem.ts");


var CategoryList = function (_a) {
    var categories = _a.categories, onChange = _a.onChange;
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)("1"), selected = _a[0], setSelected = _a[1];
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(categories)(function (item) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_CategoryItem__WEBPACK_IMPORTED_MODULE_1__.CategoryItem)(item, item.id === selected))
                .cursor('pointer')
                .height()
                .onClick(function () {
                setSelected(item.id);
                onChange(item);
            });
        })).padding());
    });
};


/***/ }),

/***/ "./src/views/TabItem.ts":
/*!******************************!*\
  !*** ./src/views/TabItem.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabItem: () => (/* binding */ TabItem)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PowerUps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PowerUps */ "./src/PowerUps.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};


function TabItem(views, view, index, selectedIndex, onClick, invalidateQuery) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
        var _a, _b, _c, _d, _e;
        var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();
        var _f = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)('readonly'), mode = _f[0], setMode = _f[1];
        var _g = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(null), name = _g[0], setName = _g[1];
        var _h = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(null), newName = _h[0], setNewName = _h[1];
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)(index === 0 ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VDivider)().width(1).height('60%').background('#E8EAED') : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 5 })(((_a = views === null || views === void 0 ? void 0 : views.find(function (v) { return v.type === view.view; })) === null || _a === void 0 ? void 0 : _a.icon) ?
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)((_c = (_b = __spreadArray(__spreadArray([], views, true), _PowerUps__WEBPACK_IMPORTED_MODULE_1__.PowerUps, true)) === null || _b === void 0 ? void 0 : _b.find(function (v) { return v.type === view.view; })) === null || _c === void 0 ? void 0 : _c.icon).fontSize(18).foregroundColor('gray').onClick(function () { return onClick(); }) :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIImage)((_e = (_d = __spreadArray(__spreadArray([], views, true), _PowerUps__WEBPACK_IMPORTED_MODULE_1__.PowerUps, true)) === null || _d === void 0 ? void 0 : _d.find(function (v) { return v.type === view.view; })) === null || _e === void 0 ? void 0 : _e.image).allHeight(18).allHeight(18).onClick(function () { return onClick(); }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(name || (view === null || view === void 0 ? void 0 : view.name)).whiteSpace('nowrap')
            // .fontFamily('source sans pro semibold')
            .fontWeight(selectedIndex === index ? '600' : '500')
            .opacity(mode === 'readonly' ? '1' : '0')
            .foregroundColor(selectedIndex === index ? '#7b68ee' : '')), mode === 'readonly' ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)() :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TextField)().value(newName || (view === null || view === void 0 ? void 0 : view.name)).position("absolute").left('0px').top('0px')
                // .fontFamily('source sans pro semibold')
                .padding(0).height('100%')
                .fontWeight('600')
                .foregroundColor(selectedIndex === index ? '#7b68ee' : '')
                .border('dashed 1px #AAA')
                .shadow({ focus: 'none' })
                .onBlur(function () {
                if (newName !== name) {
                    setName(newName);
                    /*
                                                        updateView(view.id, {
                                                            title: newName
                                                        }) */
                }
                setMode('readonly');
            })
                .onChange(function (e) { return setNewName(e); })).onClick(function () { return onClick(); })
        //.width('calc(100% -20px)')
        , selectedIndex === index ?
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.MenuButton)()
                .model([
                {
                    title: 'VIEW OPTIONS',
                    type: 'Title'
                },
                {
                    title: 'Rename',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-cu-other__info'),
                    onClick: function () {
                        setMode('edit');
                    }
                },
                {
                    title: 'Description',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-cu-other__info'),
                    onClick: function () {
                        //  DynoDialog.Show(ViewDescriptionDialog(view.id))
                    }
                },
                {
                    title: 'Copy link',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__link'),
                    onClick: function () {
                        setMode('edit');
                    }
                },
                {
                    title: 'Pin',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__pin'),
                    onClick: function () {
                        setMode('edit');
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
                    title: 'Add to drafts',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-cu2-doc'),
                    onClick: function () {
                        setMode('edit');
                    }
                },
                {
                    title: 'Dublicate',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__copy'),
                    onClick: function () {
                        setMode('edit');
                    }
                },
                {
                    type: 'Divider'
                },
                {
                    title: 'Delete',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__delete', '#bc4841'),
                    color: '#bc4841',
                    onClick: function () {
                        var accept = function () {
                            /*  deleteView(view.id, {
                                 onSuccess: () => {
                                     invalidateResourceCache();
                                     team_id ?
                                         navigate(`/app/${getAppFullName()}/team/${team_id}/applet/${view.applet_id}`)
                                         :
                                         navigate(`/app/${getAppFullName()}/applet/${view.applet_id}`);

                                 }
                             }) */
                            // toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                        };
                        var reject = function () {
                            //alert('reject')
                            // toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                        };
                        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.confirmDialog)({
                            message: 'Do you want to delete this view?',
                            header: 'Delete Confirmation',
                            icon: 'pi pi-info-circle',
                            acceptClassName: 'p-button-danger',
                            accept: accept,
                            reject: reject
                        });
                        //DynoDialog.Show(AppletDescriptionDialog(applet.id))
                    }
                }
                /*  {
                     title: 'Delete',
                     icon: Icons.Delete,
                     onClick: () => {
                         setMode('edit');
                     }
                 } */
            ])
                .icon(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icons.Menu)
                .display('var(--showMenu)')).width(24).height(24) : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)()).padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 10)
            .variable('--showMenu', { hover: 'block', default: 'none' }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VDivider)().width(1).height('60%').background('#E8EAED'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HDivider)().position('absolute').width('calc(100% - 26px)').height(3).left('13px').bottom('0px').cornerRadius('3px 3px 0 0')
            .background('#7b68ee')
            .transition('opacity .1s cubic-bezier(.785,.135,.15,.86) 0s')
            .opacity(selectedIndex === index ? '1' : '0'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HDivider)().position('absolute').width('calc(100% - 26px)').height(3).left('13px').bottom('0px').cornerRadius('3px 3px 0 0')
            .background('#656F7D')
            .transition('opacity .1s cubic-bezier(.785,.135,.15,.86) 0s')
            .opacity(selectedIndex === index ? '0' : 'var(--show-bar)'))
            .cursor('pointer')
            .variable('--show-bar', { hover: '1', default: '0' }));
    }));
}


/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/***/ ((module) => {

module.exports = {
    application: {
        name: 'com.celmino.widget.views-tab',
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

/***/ "@tuval/forms":
/*!******************************!*\
  !*** external "tuval$forms" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = tuval$forms;

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
/* harmony import */ var _AppController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppController */ "./src/AppController.ts");
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
                    tuval$core.ModuleLoader.FireModuleLoadedEvent('com.celmino.widget.views-tab', tuval$core['__APPS__']['com.celmino.widget.views-tab']);
                    
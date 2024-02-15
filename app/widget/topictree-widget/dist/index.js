
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
/* harmony export */   "MyTestController": () => (/* binding */ MyTestController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_SectionTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/SectionTree */ "./src/views/SectionTree.ts");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_2__);
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
        var items = this.props.data.items;
        var _a = this.props.config || {}, onChange = _a.onChange, onSelected = _a.onSelected, selectedTopicId = _a.selectedTopicId, topicTemplate = _a.topicTemplate;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_views_SectionTree__WEBPACK_IMPORTED_MODULE_1__.TopicTree)(items, function (item) {
            if (_tuval_core__WEBPACK_IMPORTED_MODULE_2__.is.function(onSelected)) {
                onSelected(item);
            }
        }, onChange, selectedTopicId, topicTemplate))
            .borderRight('solid 1px #D2D2D2')
            .allWidth(420)
            .background('white'));
    };
    return MyTestController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/views/EmpytTopicView.ts":
/*!*************************************!*\
  !*** ./src/views/EmpytTopicView.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyTopicView": () => (/* binding */ EmptyTopicView)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

var EmptyTopicView = function () {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTop })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ spacing: 20 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\d24d').fontSize(220)
        .foregroundColor('#CFD6DE'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("Your table of contents is empty  Create the topics with the buttons above")
        .foregroundColor('rgb(136, 149, 167)')
        .fontSize(25)
        .fontFamily('Shadows Into Light Two, serif')).padding('20px 10px')
        .border('dashed 3px #E1E7EC')
        .cornerRadius(10)
        .height()).padding());
};


/***/ }),

/***/ "./src/views/Section.ts":
/*!******************************!*\
  !*** ./src/views/Section.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);


/**
 *
 * @param item  The topic item
 * @param updateItems  The function to update the items
 * @returns
 */
var Section = function (_a) {
    var item = _a.item, updateItems = _a.updateItems;
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 4 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icon)(item.expended ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('svg-sprite-cu3-folder-sidebar_opened', '#7C828D') : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('svg-sprite-cu3-folder-sidebar', '#7C828D')).foregroundColor('#7C828D')
            .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cHorizontal, 5), 
        // Icon(SvgIcon('svg-sprite-cu3-folder-sidebar_opened')).padding(cHorizontal,5),
        item.mode === 'edit' ?
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.TextField)().defaultValue(item.name)
                .left('-5px')
                .fontSize(15)
                .padding(5)
                .border({ default: 'none', focus: 'none' })
                .shadow({ focus: 'none' })
                .fontFamily('Poppins, sans-serif, Helvetica, Arial')
                .onClick(function (e) { return e.stopPropagation(); })
                .onChange(function (e) { return item.name = e; })
                .onBlur(function (e) {
                item.mode = 'readonly';
                updateItems();
            }) :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(item.name)
                .foregroundColor('#00263A')
                .fontSize(15)
                .fontFamily('Poppins, sans-serif, Helvetica, Arial'))
            .onClick(function () {
            if (item.mode !== 'edit') {
                item.expended = !item.expended;
                updateItems();
            }
        }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.MenuButton)()
            .model([
            {
                title: 'Section acions',
                type: 'Title'
            },
            {
                title: 'Rename',
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('svg-sprite-global__edit', '#7C828D'),
                onClick: function () {
                    item.mode = 'edit';
                    updateItems();
                }
            },
            {
                title: 'Add section',
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('svg-sprite-global__add-folder', '#7C828D'),
                onClick: function () {
                    item.expended = true;
                    if (!_tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.array(item.subItems)) {
                        item.subItems = [];
                    }
                    item.subItems.push({
                        id: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.nanoid)(),
                        type: "section",
                        mode: 'edit',
                        name: "",
                    });
                    updateItems();
                }
            },
            {
                title: 'Add topic',
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('svg-sprite-global__add', '#7C828D'),
                onClick: function () {
                    item.expended = true;
                    if (!_tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.array(item.subItems)) {
                        item.subItems = [];
                    }
                    item.subItems.push({
                        id: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.nanoid)(),
                        type: "topic",
                        mode: 'edit',
                        name: "",
                    });
                    updateItems();
                }
            },
            {
                title: 'Delete',
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('svg-sprite-global__delete', '#7C828D'),
                onClick: function () {
                    if (!_tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.array(item.subItems)) {
                        item.subItems = [];
                    }
                    item.deleted = true;
                    updateItems();
                }
            },
        ])
            .icon(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icons.Menu)).width())
            .height()
            .minHeight(35)
            .background('#f0f2f5')
            .border('solid 1px #e1e7ec')
            .shadow('rgba(0, 0, 0, 0.016) 0px 2px 0px')
            .margin('2px 0px')
            .cornerRadius(5)
            .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cHorizontal, 4)
            .cursor('pointer'));
    });
};


/***/ }),

/***/ "./src/views/SectionTree.ts":
/*!**********************************!*\
  !*** ./src/views/SectionTree.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopicTree": () => (/* binding */ TopicTree),
/* harmony export */   "SectionTree": () => (/* binding */ SectionTree)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EmpytTopicView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmpytTopicView */ "./src/views/EmpytTopicView.ts");
/* harmony import */ var _Topic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Topic */ "./src/views/Topic.ts");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Section */ "./src/views/Section.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};





function findItem(items, id) {
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.id === id) {
            return item;
        }
        if (_tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.array(item.subItems)) {
            var _item = findItem(item.subItems, id);
            if (_item) {
                return _item;
            }
        }
    }
}
function iterateItems(items, callback) {
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        callback(item);
        if (_tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.array(item.subItems)) {
            iterateItems(item.subItems, callback);
        }
    }
}
var TopicTree = function (_items, onSelectedCallback, onChangeCallback, selectedTopicId, topicTemplate) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useState)(_items), items = _a[0], setItems = _a[1];
    var _b = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useState)(selectedTopicId), selected = _b[0], setSelected = _b[1];
    var onSelected = function (_selected) {
        onSelectedCallback(_selected);
    };
    console.log(items);
    var update = function () {
        setItems(__spreadArray([], items));
        if (_tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.function(onChangeCallback)) {
            onChangeCallback(__spreadArray([], items));
        }
    };
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.OptionsContext)(function () {
        return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icon)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('svg-sprite-global__add-folder', 'currentColor')), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Section'))
            .tooltip('A section contains sections and topics')
            .tooltipPosition(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.TooltipPositions.TOP)
            .cornerRadius(3)
            .cursor('pointer')
            .border({ default: 'solid 1px #b8c4ce', hover: 'solid 1px #238fdb', active: 'solid 1px #0057a8' })
            .foregroundColor({ default: 'rgba(0, 0, 0, 0.85)', hover: '#238fdb', active: '#0057a8' })
            .background('white')
            .padding('5.7px 15px')
            .transition('all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)')
            .shadow('0 2px 0 rgba(0, 0, 0, 0.015)')
            .fontSize(13)
            .fontFamily("Poppins, sans-serif, Helvetica, Arial")
            .height(32)
            .onClick(function () {
            setItems(__spreadArray(__spreadArray([], items), [{
                    id: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.nanoid)(),
                    type: "section",
                    mode: 'edit',
                    name: "New Section",
                }]));
        }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icon)(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icons.AddSmall).foregroundColor('currentColor'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Topic'))
            .tooltip('A topic holds your content')
            .tooltipPosition(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.TooltipPositions.TOP)
            .cornerRadius(3)
            .cursor('pointer')
            .border({ default: 'solid 1px #b8c4ce', hover: 'solid 1px #238fdb' })
            .foregroundColor({ default: 'rgba(0, 0, 0, 0.85)', hover: '#238fdb' })
            .background('white')
            .padding('5.7px 15px')
            .transition('all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)')
            .shadow('0 2px 0 rgba(0, 0, 0, 0.015)')
            .fontSize(13)
            .fontFamily("Poppins, sans-serif, Helvetica, Arial")
            .height(32)
            .onClick(function () {
            setItems(__spreadArray(__spreadArray([], items), [{
                    id: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.nanoid)(),
                    type: "topic",
                    mode: 'edit',
                    name: "sdfdsf",
                }]));
        }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.MenuButton)()
            .model([
            {
                title: 'Topic acions',
                type: 'Title'
            }
        ])).allWidth(32).height(32)).height().padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cVertical, 10).padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cHorizontal, 5), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })((_tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.array(items) && items.length > 0) ?
            SectionTree(items, update) :
            (0,_EmpytTopicView__WEBPACK_IMPORTED_MODULE_2__.EmptyTopicView)()).padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cHorizontal, 5));
    }).options({
        selected: selected,
        setSelected: setSelected,
        onSelected: onSelected,
        topicTemplate: topicTemplate
    }));
}); };
var getHeigth = function (items) {
    var heigth = 0;
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.deleted) {
            continue;
        }
        heigth += 38;
        if (item.expended && _tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.array(item.subItems)) {
            heigth += getHeigth(item.subItems);
        }
    }
    console.log(heigth);
    return heigth;
};
var deleteItem = function (item) {
    item.deleted = true;
    if (_tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.array(item.subItems)) {
        for (var i = 0; i < item.subItems.length; i++) {
            var _item = item.subItems[i];
            deleteItem(_item);
        }
    }
};
var SectionTree = function (items, updateItems, padding) {
    if (padding === void 0) { padding = '0px'; }
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ForEach)(items)(function (item) {
        return item.deleted ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)() :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
                var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useOptions)(), selected = _a.selected, setSelected = _a.setSelected, onSelected = _a.onSelected;
                return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })(item.type === 'section' ?
                    (0,_Section__WEBPACK_IMPORTED_MODULE_4__.Section)({ item: item, updateItems: updateItems })
                    :
                        (0,_Topic__WEBPACK_IMPORTED_MODULE_3__.Topic)({ item: item, updateItems: updateItems, selected: selected, onSelected: onSelected, setSelected: setSelected }), (item.subItems) ?
                    SectionTree(item.subItems, updateItems, '15px')
                        .overflow('hidden')
                        .allHeight(item.expended ? '100%' : '0px') : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)()).height());
            })).paddingLeft(padding).height();
    })).height()
        //.overflow('hidden')
        //.height(getHeigth(items))
        .transition('height 100ms, opacity 10ms');
};
//.border('solid 1px green')


/***/ }),

/***/ "./src/views/Topic.ts":
/*!****************************!*\
  !*** ./src/views/Topic.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Topic": () => (/* binding */ Topic)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);


/**
 *
 * @param item  The topic item
 * @param updateItems  The function to update the items
 * @param selected  The selected item
 * @param onSelected  The function to call when the item is selected
 * @param setSelected  The function to set the selected item
 * @returns
 */
var Topic = function (_a) {
    var item = _a.item, updateItems = _a.updateItems, selected = _a.selected, onSelected = _a.onSelected, setSelected = _a.setSelected;
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
        var isSelected = selected == item.id;
        var topicTemplate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useOptions)().topicTemplate;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)(isSelected ?
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)().width(5).height(5).background('#7C828D').cornerRadius('50%')
            : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)())
            .width(15).height(15)
            .border('solid 1px #E5E9EE').cornerRadius('50%')
            //.opacity(item.mode === 'edit' ? '0' : '1')
            .background('white'), item.mode === 'edit' ?
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.TextField)().defaultValue(item.name)
                // .left('-1px')
                .fontSize(15)
                .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cVertical, 5)
                .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cHorizontal, 1)
                .border({ default: 'none', focus: 'none' })
                .shadow({ focus: 'none' })
                .fontFamily('Poppins, sans-serif, Helvetica, Arial')
                .onChange(function (e) { return item.name = e; })
                .onBlur(function (e) {
                item.mode = 'readonly';
                updateItems();
            }) :
            _tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.function(topicTemplate) ? topicTemplate(item) :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(item.name).foregroundColor('#00263A')
                    .multilineTextAlignment(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.TextAlignment.leading)
                    .lineHeight('25px')
                    .fontSize(15)
                    .fontFamily('Poppins, sans-serif, Helvetica, Arial'))
            .lineHeight(34)
            .onClick(function () {
            if (item.mode !== 'edit') {
                setSelected(item.id);
                onSelected(item);
            }
        }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.MenuButton)()
            .model([
            {
                title: 'Topic acions',
                type: 'Title'
            },
            {
                title: 'Rename',
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('svg-sprite-global__edit', '#7C828D'),
                onClick: function () {
                    item.mode = 'edit';
                    updateItems();
                }
            },
            {
                title: 'Convert to section',
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icon)(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icons.AddSmall),
                onClick: function () {
                    item.type = 'section';
                    updateItems();
                }
            },
            {
                title: 'Delete',
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('svg-sprite-global__delete', '#7C828D'),
                onClick: function () {
                    if (!_tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.array(item.subItems)) {
                        item.subItems = [];
                    }
                    item.deleted = true;
                    updateItems();
                }
            },
        ])
            .icon(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icons.Menu)).width())
            .height()
            .minHeight(34)
            .background(isSelected ? '#C1E3FF' : '#F8F9FA')
            .border('solid 1px #e1e7ec')
            .shadow('rgba(0, 0, 0, 0.016) 0px 2px 0px')
            .margin('2px 0px')
            .cornerRadius(5)
            .cursor('pointer')
            .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cHorizontal, 4));
    });
};


/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/***/ ((module) => {

module.exports = {
    application: {
        name: 'com.tuvalsoft.widget.topictree',
        path: './src/Application.ts',
        displayName: "Procetra",
        icon: "data:image/svg+xml;base64,PHN2ZyBpZD0iZjc4ZjUxMTUtYmU4OC00ZDQ0LWIzNGUtM2Y2ZWE3NDMxMjVjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImI2YzQzYmQ5LWUzN2YtNDE5MS05M2MyLWQzYTdhODRjNTA1ZSIgeDE9IjkiIHkxPSIxOS4xMyIgeDI9IjkiIHkyPSItMC4yOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwNzhkNCIgLz48c3RvcCBvZmZzZXQ9IjAuMTYiIHN0b3AtY29sb3I9IiMxMzgwZGEiIC8+PHN0b3Agb2Zmc2V0PSIwLjUzIiBzdG9wLWNvbG9yPSIjM2M5MWU1IiAvPjxzdG9wIG9mZnNldD0iMC44MiIgc3RvcC1jb2xvcj0iIzU1OWNlYyIgLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1ZWEwZWYiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHRpdGxlPkljb24tbWFjaGluZWxlYXJuaW5nLTE2MjwvdGl0bGU+PHBhdGggZD0iTTE4LDExLjM4QTQsNCwwLDAsMCwxNC40OSw3LjUsNS4xLDUuMSwwLDAsMCw5LjI0LDIuNjIsNS4yNSw1LjI1LDAsMCwwLDQuMjIsNiw0LjgsNC44LDAsMCwwLDAsMTAuNjdhNC45LDQuOSwwLDAsMCw1LjA3LDQuNzFsLjQ0LDBoOC4yMWEuNzguNzgsMCwwLDAsLjIyLDBBNC4xLDQuMSwwLDAsMCwxOCwxMS4zOFoiIGZpbGw9InVybCgjYjZjNDNiZDktZTM3Zi00MTkxLTkzYzItZDNhN2E4NGM1MDVlKSIgLz48cGF0aCBkPSJNNS40MiwxMC4zOUg0LjU0YTEuMDksMS4wOSwwLDEsMCwwLC40OWguODhhLjIuMiwwLDAsMSwuMi4ydjQuM2guNDl2LTQuM0EuNjkuNjksMCwwLDAsNS40MiwxMC4zOVptLTEuOTUuODhhLjY0LjY0LDAsMSwxLC42NC0uNjRBLjY0LjY0LDAsMCwxLDMuNDcsMTEuMjdaIiBmaWxsPSIjOWNlYmZmIiAvPjxwYXRoIGQ9Ik04Ljk0LDEwLjYxdi0xYS43LjcsMCwwLDAtLjctLjdINi42OWEuMi4yLDAsMCwxLS4yLS4yVjMuNGwtLjIzLjEyTDYsMy42NnY1YS42OS42OSwwLDAsMCwuNjkuNjlIOC4yNGEuMjEuMjEsMCwwLDEsLjIxLjIxdjFhMS4wOCwxLjA4LDAsMCwwLS44NSwxLjA2LDEuMDksMS4wOSwwLDEsMCwxLjM0LTEuMDZabS0uMjUsMS43aDBhLjY0LjY0LDAsMSwxLC42NC0uNjRBLjY0LjY0LDAsMCwxLDguNjksMTIuMzFaIiBmaWxsPSIjZjJmMmYyIiAvPjxwYXRoIGQ9Ik0xNC41Myw4LjVhMS4wOSwxLjA5LDAsMCwwLS4yNSwyLjE1di4yYS4yMS4yMSwwLDAsMS0uMjEuMjFoLTJWNy41NGEuNjkuNjksMCwwLDAtLjY5LS42OUgxMC4zNUExLjA4LDEuMDgsMCwwLDAsOS4yOSw2YTEuMDksMS4wOSwwLDEsMCwxLjA2LDEuMzRoMS4wN2EuMi4yLDAsMCwxLC4yLjJ2Ny44NGguNDlWMTEuNTVoMmEuNy43LDAsMCwwLC43LS43di0uMmExLjA5LDEuMDksMCwwLDAsLjg1LTEuMDZoMEExLjA5LDEuMDksMCwwLDAsMTQuNTMsOC41Wk05LjI5LDcuNzNoMGEuNjQuNjQsMCwxLDEsLjY0LS42NEEuNjQuNjQsMCwwLDEsOS4yOSw3LjczWm01LjI0LDIuNWgwYS42NC42NCwwLDEsMSwuNjMtLjY0QS42NC42NCwwLDAsMSwxNC41MywxMC4yM1oiIGZpbGw9IiM5Y2ViZmYiIC8+PC9zdmc+"

    }
    /* threads: {
        'PMThreadWorker': 'ThreadWorker.ts'
    } */
}

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
                    tuval$core.ModuleLoader.FireModuleLoadedEvent('com.tuvalsoft.widget.topictree', tuval$core['__APPS__']['com.tuvalsoft.widget.topictree']);
                    
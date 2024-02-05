
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


//import { ActionPanel } from './views/ActionPanel';
//import { ViewHeader } from './views/ViewHeader';
function replaceNonMatchingCharacters(originalText) {
    var replacementTable = {
        'ı': 'i',
        ' ': '_'
    };
    // Replacement table'ı kullanarak metindeki kriterlere uymayan karakterleri değiştir
    var replacedText = originalText.replace(/[^a-zA-Z0-9._-]/g, function (match) {
        return replacementTable[match] || match; // Eğer replacement table'da varsa değiştir, yoksa aynı karakteri koru
    });
    return replacedText;
}
var MyTestController = /** @class */ (function (_super) {
    __extends(MyTestController, _super);
    function MyTestController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyTestController.prototype.LoadView = function () {
        var _this = this;
        var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useParams)(), workspaceId = _a.workspaceId, appletId = _a.appletId, listId = _a.listId, viewId = _a.viewId;
        var document = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useGetDocument)({
            projectId: workspaceId,
            databaseId: appletId,
            collectionId: 'wm_lists',
            documentId: listId
        }).document;
        var _b = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useListDocuments)(workspaceId, appletId, 'wm_list_' + listId + '_att'), attributes = _b.documents, isLoading = _b.isLoading;
        var views = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useListDocuments)(workspaceId, appletId, 'wm_list_' + listId + '_views').documents;
        var _c = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useListDocuments)(workspaceId, appletId, 'wm_list_' + listId), items = _c.documents, isItemsLoading = _c.isLoading;
        var createTask = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateDocument)(workspaceId, appletId, 'wm_list_' + listId).createDocument;
        var createView = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateDocument)(workspaceId, appletId, 'wm_list_' + listId + '_views').createDocument;
        var updateDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useUpdateDocument)(workspaceId).updateDocument;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })(
        //ActionPanel(),
        //ViewHeader('test'),
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ScrollView)({ axes: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cVertical, alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
            var openDialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useDialogStack)().openDialog;
            return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIWidget)('com.celmino.widget.list')
                .config({
                workspaceId: workspaceId,
                listId: listId,
                attributes: attributes,
                groupBy: 'status',
                onItemSave: function (item) {
                    return (new Promise(function (resolve) {
                        createTask({
                            data: item
                        }, function () {
                            resolve(true);
                            setTimeout(function () {
                                return navigate("/app/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/list/").concat(listId, "/view/").concat(viewId));
                            }, 1000);
                        });
                    }));
                },
                onNewFieldAddded: function (formData) { return __awaiter(_this, void 0, void 0, function () {
                    var key;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(formData.type === 'text')) return [3 /*break*/, 3];
                                return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + listId, formData.key, 255, false)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Services.Databases.createDocument(workspaceId, appletId, 'wm_list_' + listId + '_att', _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.ID.unique(), {
                                        name: formData.name,
                                        key: replaceNonMatchingCharacters(formData.name),
                                        type: 'string',
                                        hidden: false
                                    })];
                            case 2:
                                _a.sent();
                                return [3 /*break*/, 9];
                            case 3:
                                if (!(formData.type === 'number')) return [3 /*break*/, 6];
                                key = replaceNonMatchingCharacters(formData.name);
                                console.log(key);
                                return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Services.Databases.createIntegerAttribute(workspaceId, appletId, 'wm_list_' + listId, key, false)];
                            case 4:
                                _a.sent();
                                return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Services.Databases.createDocument(workspaceId, appletId, 'wm_list_' + listId + '_att', _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.ID.unique(), {
                                        name: formData.name,
                                        key: key,
                                        type: 'number',
                                        hidden: false
                                    })];
                            case 5:
                                _a.sent();
                                return [3 /*break*/, 9];
                            case 6:
                                if (!(formData.type === 'formula')) return [3 /*break*/, 8];
                                return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Services.Databases.createDocument(workspaceId, appletId, 'wm_list_' + listId + '_att', _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.ID.unique(), {
                                        name: formData.name,
                                        key: replaceNonMatchingCharacters(formData.name),
                                        type: 'formula',
                                        type_content: JSON.stringify({
                                            expression: formData.formula
                                        }),
                                        hidden: false
                                    })];
                            case 7:
                                _a.sent();
                                return [3 /*break*/, 9];
                            case 8:
                                alert('field type not found');
                                _a.label = 9;
                            case 9: return [2 /*return*/];
                        }
                    });
                }); },
                onItemClick: function (item) {
                    openDialog({
                        title: 'Open',
                        view: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIWidget)("com.celmino.widget.object-editor")
                            .config({
                            objectId: item.$id,
                            views: [],
                            //powerUps: PowerUps,
                            // headerIcon: Icon(OkrIcons.KeyResultIcon({ width: 36, height: 36 })),
                            header: item.name,
                            onHeaderChange: function (title) { alert(title); },
                            //description: metric?.description,
                            onDescriptionChange: function (description) {
                                /*  updateTask(object_id, {
                                     description: description
                                 }, {
                                     onSuccess: () => {
                                         invalidateCache();
                                     }
                                 }) */
                            },
                            fields: {
                                "assignee": {
                                    type: "user",
                                    label: 'Assignee',
                                },
                                "title": {
                                    type: "text",
                                    label: "Title",
                                    value: '',
                                    onChange: function (value) {
                                        alert(value);
                                    }
                                },
                                "state": {
                                    type: "select",
                                    label: "State",
                                    options: [],
                                    value: null,
                                    onChange: function (value) {
                                        alert(value);
                                    }
                                }
                            }
                        })
                    });
                },
                items: items !== null && items !== void 0 ? items : [],
                /*   stages: [{
$id: 'AAA',
name: 'Todo',
color: '#FF0000:#00FF00'
                  }] */
            }));
        })))).background('#F9FAFB'))));
    };
    return MyTestController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIFormController));



/***/ }),

/***/ "./src/RouterController.ts":
/*!*********************************!*\
  !*** ./src/RouterController.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteController": () => (/* binding */ RouteController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppController */ "./src/AppController.tsx");
/* harmony import */ var _controllers_TaskController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/TaskController */ "./src/controllers/TaskController.ts");
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
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoutes)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('/', _AppController__WEBPACK_IMPORTED_MODULE_1__.MyTestController).children((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('object/:object_id', /** @class */ (function (_super) {
                __extends(class_1, _super);
                function class_1() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return class_1;
            }(_controllers_TaskController__WEBPACK_IMPORTED_MODULE_2__.TaskController))), /* .children(
                UIRoute('task/:task_id', class extends  TaskController {})
            ) */ (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('object/:object_id/*', /** @class */ (function (_super) {
                __extends(class_2, _super);
                function class_2() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return class_2;
            }(_controllers_TaskController__WEBPACK_IMPORTED_MODULE_2__.TaskController))))))
                .background('var(--primary-background-color)');
        }));
    };
    RouteController.prototype.LoadView = function () {
        return this.routeView();
    };
    return RouteController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/controllers/TaskController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/TaskController.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskController": () => (/* binding */ TaskController)
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

var TaskController = /** @class */ (function (_super) {
    __extends(TaskController, _super);
    function TaskController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('dsf'));
    };
    return TaskController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/***/ ((module) => {

module.exports = {
    application: {
        name: 'com.celmino.view.tasklist',
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
/* harmony export */   "ProcessMining": () => (/* binding */ ProcessMining)
/* harmony export */ });
/* harmony import */ var _RouterController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RouterController */ "./src/RouterController.ts");
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
        return _RouterController__WEBPACK_IMPORTED_MODULE_0__.RouteController;
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
                    tuval$core.ModuleLoader.FireModuleLoadedEvent('com.celmino.view.tasklist', tuval$core['__APPS__']['com.celmino.view.tasklist']);
                    
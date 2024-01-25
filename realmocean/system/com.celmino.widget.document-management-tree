
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
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dialogs_AddSpaceDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogs/AddSpaceDialog */ "./src/dialogs/AddSpaceDialog.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _views_localStorageState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/localStorageState */ "./src/views/localStorageState.tsx");
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





var subNodes = function (TreeNode, level, nodeType, parentId, workspaceId, appletId) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
    var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useListDocuments)(workspaceId, appletId, 'dm_tree', [
        _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Query.equal('parent', parentId)
    ]), items = _a.documents, isLoading = _a.isLoading;
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();
    return (_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(items)(function (item) {
        return TreeNode({
            title: item.name,
            level: level,
            nodeType: item.type,
            isSelected: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getDocumentId)() === item.$id,
            subNode: function (nodeType) { return subNodes(TreeNode, level + 1, nodeType, item.$id, workspaceId, appletId); },
            requestIcon: function (nodeType, selected, expanded) {
                switch (nodeType) {
                    case 'folder':
                        return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(expanded ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px') : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarFolder', '#151719', '18px', '18px')).foregroundColor('#7C828D');
                    default:
                        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarDoc', selected ? '#7b68ee' : '#151719', '18px', '18px')));
                }
            },
            requestNavigation: function () {
                switch (item.type) {
                    case 'folder':
                        navigate("/app/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/folder/").concat(item.$id));
                        break;
                    case 'document':
                        navigate("/app/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/document/").concat(item.$id));
                        break;
                }
            }
        });
    })));
}); };
var MyTestController = /** @class */ (function (_super) {
    __extends(MyTestController, _super);
    function MyTestController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyTestController.prototype.LoadView = function () {
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isEditing = _a[0], setIsEditing = _a[1];
        var isLoading = false;
        var items = (this.props.data || {}).items;
        var _b = this.props.config || {}, selectedItem = _b.selectedItem, team_id = _b.team_id, workspaceId = _b.workspaceId, folder_id = _b.folder_id, appletId = _b.appletId, showAllWorkspaces = _b.showAllWorkspaces, opas = _b.opas, folder_menu = _b.folder_menu, app_id = _b.app_id;
        var _c = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utils__WEBPACK_IMPORTED_MODULE_3__.getAppletId)() === appletId), isOpen = _c[0], setIsOpen = _c[1];
        var listId = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getListId)();
        var _d = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useGetDocument)({
            projectId: workspaceId,
            databaseId: appletId,
            collectionId: 'wm_lists',
            documentId: listId
        }, { enabled: listId != null }), list = _d.document, isListLoading = _d.isLoading;
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            if (list + null) {
                setExpanded(true);
            }
        }, []);
        var _e = (0,_views_localStorageState__WEBPACK_IMPORTED_MODULE_4__.useLocalStorageState)('work_management_tree', false), expanded = _e[0], setExpanded = _e[1];
        var _f = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useGetDocument)({ projectId: workspaceId, databaseId: 'workspace', collectionId: 'applets', documentId: appletId }), applet = _f.document, isAppletLoading = _f.isLoading;
        return (isAppletLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spinner)() :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIWidget)('com.celmino.widget.applet-tree')
                .config({
                workspaceId: workspaceId,
                appletId: appletId,
                appletName: applet.name,
                subNodes: subNodes
            }));
    };
    return MyTestController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));

_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder.injectAction('saveSpace', _dialogs_AddSpaceDialog__WEBPACK_IMPORTED_MODULE_2__.SaveSpaceAction);


/***/ }),

/***/ "./src/dialogs/AddDocumentDialog.ts":
/*!******************************************!*\
  !*** ./src/dialogs/AddDocumentDialog.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddDocumentDialog: () => (/* binding */ AddDocumentDialog),
/* harmony export */   SaveDocumentAction: () => (/* binding */ SaveDocumentAction)
/* harmony export */ });
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__);
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
    var workspaceId = formMeta.workspaceId, appletId = formMeta.appletId;
    var createTreeItem = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'dm_tree').createDocument;
    var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'dm_documents'), createDocument = _a.createDocument, isLoading = _a.isLoading;
    var createDocumentContent = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'dm_document_contents').createDocument;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save'))
        .loading(isLoading)
        .onClick(function () {
        var data = __assign({}, formController.GetFormData());
        createDocument({
            data: __assign({}, data)
        }, function (document) {
            createDocumentContent({
                documentId: document.$id,
                data: {
                    content: ''
                }
            }, function (document) {
                createTreeItem({
                    documentId: document.$id,
                    data: __assign(__assign({}, data), { type: 'document' })
                }, function () { return dialog.Hide(); });
            });
        });
    }));
}); };
var AddDocumentDialog = function (workspaceId, appletId, parent, path) {
    if (workspaceId == null) {
        alert("spaceId is null");
    }
    else {
        return {
            "title": 'Create document',
            "workspaceId": workspaceId,
            "appletId": appletId,
            /*   "mutation":"_create_workspace", */
            "actions": [
                {
                    "label": "Save",
                    "type": "saveDocument",
                    /*  "successActions": [{
                         "type": "hide"
                     },
                     {
                         "type": "navigate",
                         "url": "/app/com.tuvalsoft.app.procetra/workspace/{{id}}"
                     }
                     ] */
                    /*  "successActions": [{
                     "type": "hide"
                 },
                 {
                     "type": "navigate",
                     "url": "/app/com.tuvalsoft.app.procetra/workspace/{{id}}"
                 }
                 ] */
                }
            ],
            "fieldMap": {
                "list_name": {
                    "label": "name",
                    "type": "text",
                    "name": "name"
                },
                "parent": {
                    "name": "parent",
                    "type": "virtual",
                    "value": parent
                },
                "path": {
                    "name": "path",
                    "type": "virtual",
                    "value": path
                },
                /*   "description": {
                      "label": "Description",
                      "type": "text",
                      "multiline": true,
                      "name": "description"
                  } */
            }
        };
    }
};


/***/ }),

/***/ "./src/dialogs/AddFolderDialog.ts":
/*!****************************************!*\
  !*** ./src/dialogs/AddFolderDialog.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddFolderDialog: () => (/* binding */ AddFolderDialog),
/* harmony export */   SaveFolderAction: () => (/* binding */ SaveFolderAction)
/* harmony export */ });
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__);
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


var SaveFolderAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
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
    var workspaceId = formMeta.workspaceId, appletId = formMeta.appletId;
    var createTreeItem = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'dm_tree').createDocument;
    var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'dm_folders'), createDocument = _a.createDocument, isLoading = _a.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save Folder'))
        .loading(isLoading)
        .onClick(function () {
        var data = __assign({}, formController.GetFormData());
        createDocument({
            data: __assign({}, data)
        }, function (folder) {
            createTreeItem({
                documentId: folder.$id,
                data: __assign(__assign({}, data), { type: 'folder' })
            }, function () { return dialog.Hide(); });
        });
    }));
}); };
var AddFolderDialog = function (workspaceId, appletId, parent, path) {
    if (workspaceId == null) {
        alert("spaceId is null");
    }
    else {
        return {
            "title": 'Create folder',
            "workspaceId": workspaceId,
            "appletId": appletId,
            /*   "mutation":"_create_workspace", */
            "actions": [
                {
                    "label": "Save",
                    "type": "dm_saveFolder",
                    /*  "successActions": [{
                         "type": "hide"
                     },
                     {
                         "type": "navigate",
                         "url": "/app/com.tuvalsoft.app.procetra/workspace/{{id}}"
                     }
                     ] */
                    /*  "successActions": [{
                     "type": "hide"
                 },
                 {
                     "type": "navigate",
                     "url": "/app/com.tuvalsoft.app.procetra/workspace/{{id}}"
                 }
                 ] */
                }
            ],
            "fieldMap": {
                "path": {
                    "name": "path",
                    "type": "virtual",
                    "value": path
                },
                "folder_name": {
                    "label": "Name",
                    "type": "text",
                    "name": "name"
                },
                "parent": {
                    "name": "parent",
                    "type": "virtual",
                    "value": parent
                },
                /*   "description": {
                      "label": "Description",
                      "type": "text",
                      "multiline": true,
                      "name": "description"
                  } */
            }
        };
    }
};


/***/ }),

/***/ "./src/dialogs/AddSpaceDialog.ts":
/*!***************************************!*\
  !*** ./src/dialogs/AddSpaceDialog.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddSpaceDialog: () => (/* binding */ AddSpaceDialog),
/* harmony export */   SaveSpaceAction: () => (/* binding */ SaveSpaceAction)
/* harmony export */ });
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__);
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


var SaveSpaceAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
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
    var _a = formController.GetFormData(), databaseId = _a.databaseId, collectionId = _a.collectionId, workspaceId = _a.workspaceId, appletId = _a.appletId;
    var _b = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'wm_spaces'), createDocument = _b.createDocument, isLoading = _b.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save Space'))
        .loading(isLoading)
        .onClick(function () {
        var data = __assign({}, formController.GetFormData());
        delete data.databaseId;
        delete data.collectionId;
        delete data.workspaceId;
        createDocument({
            data: __assign({}, data)
        }, function () {
            dialog.Hide();
        });
    }));
}); };
var AddSpaceDialog = function (workspaceId, path) { return ({
    "title": 'Create space',
    /*   "mutation":"_create_workspace", */
    "actions": [
        {
            "label": "Save",
            "type": "saveSpace"
        }
    ],
    "fieldMap": {
        "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },
        "path": {
            "name": "path",
            "type": "virtual",
            "value": path
        },
        "space_name": {
            "label": "Name",
            "type": "text",
            "name": "name"
        },
        /*   "description": {
              "label": "Description",
              "type": "text",
              "multiline": true,
              "name": "description"
          }, */
    }
}); };


/***/ }),

/***/ "./src/dialogs/AddWhiteboardDialog.ts":
/*!********************************************!*\
  !*** ./src/dialogs/AddWhiteboardDialog.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddWhiteboardDialog: () => (/* binding */ AddWhiteboardDialog),
/* harmony export */   SaveWhiteboardAction: () => (/* binding */ SaveWhiteboardAction)
/* harmony export */ });
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__);
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


var SaveWhiteboardAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
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
    var _a = formController.GetFormData(), databaseId = _a.databaseId, collectionId = _a.collectionId, workspaceId = _a.workspaceId, appletId = _a.appletId;
    var _b = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'wm_whiteboards'), createDocument = _b.createDocument, isLoading = _b.isLoading;
    var createDocumentContent = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'wm_whiteboard_contents').createDocument;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save'))
        .loading(isLoading)
        .onClick(function () {
        var data = __assign({}, formController.GetFormData());
        delete data.databaseId;
        delete data.collectionId;
        delete data.workspaceId;
        createDocument({
            data: __assign({}, data)
        }, function (document) {
            createDocumentContent({
                documentId: document.$id,
                data: {
                    content: ''
                }
            }, function () { return dialog.Hide(); });
        });
    }));
}); };
var AddWhiteboardDialog = function (workspaceId, parent, path) {
    if (workspaceId == null) {
        alert("spaceId is null");
    }
    else {
        return {
            "title": 'Create whiteboard',
            /*   "mutation":"_create_workspace", */
            "actions": [
                {
                    "label": "Save",
                    "type": "saveWhiteboard",
                    /*  "successActions": [{
                         "type": "hide"
                     },
                     {
                         "type": "navigate",
                         "url": "/app/com.tuvalsoft.app.procetra/workspace/{{id}}"
                     }
                     ] */
                    /*  "successActions": [{
                     "type": "hide"
                 },
                 {
                     "type": "navigate",
                     "url": "/app/com.tuvalsoft.app.procetra/workspace/{{id}}"
                 }
                 ] */
                }
            ],
            "fieldMap": {
                "workspaceId": {
                    "name": "workspaceId",
                    "type": "virtual",
                    "value": workspaceId
                },
                "list_name": {
                    "label": "name",
                    "type": "text",
                    "name": "name"
                },
                "parent": {
                    "name": "parent",
                    "type": "virtual",
                    "value": parent
                },
                "path": {
                    "name": "path",
                    "type": "virtual",
                    "value": path
                },
                /*   "description": {
                      "label": "Description",
                      "type": "text",
                      "multiline": true,
                      "name": "description"
                  } */
            }
        };
    }
};


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAppletId: () => (/* binding */ getAppletId),
/* harmony export */   getDocumentId: () => (/* binding */ getDocumentId),
/* harmony export */   getListId: () => (/* binding */ getListId),
/* harmony export */   getWhiteboardId: () => (/* binding */ getWhiteboardId)
/* harmony export */ });
function getAppletId() {
    var url = window.location.href;
    // Regex deseni
    var regexPattern = /\/applet\/([^\/]+)/;
    // Regex eşleşmesi
    var matches = url.match(regexPattern);
    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1];
    }
    else {
        return;
    }
}
function getListId() {
    var url = window.location.href;
    // Regex deseni
    var regexPattern = /\/list\/([^\/]+)/;
    // Regex eşleşmesi
    var matches = url.match(regexPattern);
    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1];
    }
    else {
        return;
    }
}
function getDocumentId() {
    var url = window.location.href;
    // Regex deseni
    var regexPattern = /\/document\/([^\/]+)/;
    // Regex eşleşmesi
    var matches = url.match(regexPattern);
    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1];
    }
    else {
        return;
    }
}
function getWhiteboardId() {
    var url = window.location.href;
    // Regex deseni
    var regexPattern = /\/whiteboard\/([^\/]+)/;
    // Regex eşleşmesi
    var matches = url.match(regexPattern);
    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1];
    }
    else {
        return;
    }
}


/***/ }),

/***/ "./src/views/localStorageState.tsx":
/*!*****************************************!*\
  !*** ./src/views/localStorageState.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLocalStorageState: () => (/* binding */ useLocalStorageState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useLocalStorageState(key, defaultValue) {
    var value = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : defaultValue;
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), _ = _a[0], setValue = _a[1];
    return [value, function (newValue) {
            localStorage.setItem(key, JSON.stringify(newValue));
            setValue(!_);
        }];
}


/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/***/ ((module) => {

module.exports = {
    application: {
        name: 'com.celmino.widget.document-management-tree',
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

/***/ "@realmocean/ui":
/*!********************************!*\
  !*** external "realmocean$ui" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = realmocean$ui;

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
/* harmony export */   RatingWidget: () => (/* binding */ RatingWidget)
/* harmony export */ });
/* harmony import */ var _AppController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppController */ "./src/AppController.ts");
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/ui */ "@realmocean/ui");
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dialogs_AddSpaceDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogs/AddSpaceDialog */ "./src/dialogs/AddSpaceDialog.ts");
/* harmony import */ var _dialogs_AddFolderDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialogs/AddFolderDialog */ "./src/dialogs/AddFolderDialog.ts");
/* harmony import */ var _dialogs_AddDocumentDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialogs/AddDocumentDialog */ "./src/dialogs/AddDocumentDialog.ts");
/* harmony import */ var _dialogs_AddWhiteboardDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialogs/AddWhiteboardDialog */ "./src/dialogs/AddWhiteboardDialog.ts");
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

_realmocean_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveSpace', _dialogs_AddSpaceDialog__WEBPACK_IMPORTED_MODULE_2__.SaveSpaceAction);
_realmocean_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('dm_saveFolder', _dialogs_AddFolderDialog__WEBPACK_IMPORTED_MODULE_3__.SaveFolderAction);
_realmocean_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveDocument', _dialogs_AddDocumentDialog__WEBPACK_IMPORTED_MODULE_4__.SaveDocumentAction);
_realmocean_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveWhiteboard', _dialogs_AddWhiteboardDialog__WEBPACK_IMPORTED_MODULE_5__.SaveWhiteboardAction);

})();

/******/ })()
;
//# sourceMappingURL=index.js.map
                    tuval$core.ModuleLoader.FireModuleLoadedEvent('com.celmino.widget.document-management-tree', tuval$core['__APPS__']['com.celmino.widget.document-management-tree']);
                    
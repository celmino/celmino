
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

/***/ "./src/ModuleController.tsx":
/*!**********************************!*\
  !*** ./src/ModuleController.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkspaceTreeWidgetController: () => (/* binding */ WorkspaceTreeWidgetController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dialogs_AddSpaceDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogs/AddSpaceDialog */ "./src/dialogs/AddSpaceDialog.ts");
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @realmocean/ui */ "@realmocean/ui");
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_realmocean_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dialogs_AddFolderDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialogs/AddFolderDialog */ "./src/dialogs/AddFolderDialog.ts");
/* harmony import */ var _dialogs_AddListDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialogs/AddListDialog */ "./src/dialogs/AddListDialog.ts");
/* harmony import */ var _dialogs_AddDocumentDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialogs/AddDocumentDialog */ "./src/dialogs/AddDocumentDialog.ts");
/* harmony import */ var _dialogs_AddWhiteboardDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialogs/AddWhiteboardDialog */ "./src/dialogs/AddWhiteboardDialog.ts");
/* harmony import */ var _dialogs_AddBoardDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialogs/AddBoardDialog */ "./src/dialogs/AddBoardDialog.ts");
/* harmony import */ var _resources_Icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resources/Icons */ "./src/resources/Icons.tsx");
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @celmino/ui */ "@celmino/ui");
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_celmino_ui__WEBPACK_IMPORTED_MODULE_11__);
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












var subNodes = function (TreeNode, level, nodeType, parentId, workspaceId, appletId, onItemSelected) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
    var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_4__.useListDocuments)(workspaceId, appletId, 'wm_tree', [
        _realmocean_sdk__WEBPACK_IMPORTED_MODULE_4__.Query.equal('parent', parentId)
    ]), items = _a.documents, isLoading = _a.isLoading;
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(items)(function (item) {
        return item.type === 'applet' ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
            var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_4__.useGetDocument)({ projectId: workspaceId, databaseId: 'workspace', collectionId: 'applets', documentId: item.$id }), applet = _a.document, isLoading = _a.isLoading;
            return (isLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)() :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIWidget)(applet['opa'])
                    .config(__assign(__assign({}, ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useParams)() || {})), { appletId: applet.$id })));
        })).paddingLeft("".concat(20 * level, "px")) :
            TreeNode({
                title: item.name,
                level: level,
                nodeType: item.type,
                isSelected: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getListId)() === item.$id || (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getDocumentId)() === item.$id || (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getViewId)() === item.$id,
                subNode: function (nodeType) { return subNodes(TreeNode, level + 1, nodeType, item.$id, workspaceId, appletId, onItemSelected); },
                requestIcon: function (nodeType, selected, expanded) {
                    switch (nodeType) {
                        case 'list':
                            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarList', selected ? '#7b68ee' : '#151719', '18px', '18px')).foregroundColor('#7C828D');
                        case 'board':
                            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_10__.BoardIcon).foregroundColor('#7C828D');
                        case 'folder':
                            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(expanded ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px') : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarFolder', '#151719', '18px', '18px')).foregroundColor('#7C828D');
                        default:
                            return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarDoc', selected ? '#7b68ee' : '#151719', '18px', '18px')));
                    }
                },
                requestNavigation: function () {
                    if (onItemSelected == null) {
                        switch (item.type) {
                            case 'folder':
                                navigate("/app/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/folder/").concat(item.$id));
                                break;
                            case 'list':
                                navigate("/app/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/list/").concat(item.$id));
                                break;
                            case 'board':
                                navigate("/app/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/list/").concat(item.parent, "/view/").concat(item.$id));
                                break;
                            case 'document':
                                navigate("/app/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/document/").concat(item.$id));
                                break;
                            case 'whiteboard':
                                navigate("/app/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/whiteboard/").concat(item.$id));
                                break;
                        }
                    }
                    else {
                        onItemSelected({
                            workspaceId: workspaceId,
                            appletId: appletId,
                            item: item
                        });
                    }
                },
                requestMenu: function () {
                    switch (item.type) {
                        case 'folder':
                            return [
                                {
                                    title: 'List',
                                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarList', '#151719', '18px', '18px'),
                                    onClick: function () { return _realmocean_ui__WEBPACK_IMPORTED_MODULE_2__.DynoDialog.Show((0,_dialogs_AddListDialog__WEBPACK_IMPORTED_MODULE_6__.AddListDialog)(workspaceId, appletId, item.$id, "".concat(item.path, "/").concat(item.$id))); }
                                },
                                {
                                    type: 'Divider'
                                },
                                {
                                    title: 'Document',
                                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
                                    onClick: function () { return _realmocean_ui__WEBPACK_IMPORTED_MODULE_2__.DynoDialog.Show((0,_dialogs_AddDocumentDialog__WEBPACK_IMPORTED_MODULE_7__.AddDocumentDialog)(workspaceId, appletId, item.$id, "".concat(item.path, "/").concat(item.$id))); }
                                },
                                {
                                    title: 'Whiteboard',
                                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarWhiteboards', '#151719', '18px', '18px'),
                                    onClick: function () { return _realmocean_ui__WEBPACK_IMPORTED_MODULE_2__.DynoDialog.Show((0,_dialogs_AddWhiteboardDialog__WEBPACK_IMPORTED_MODULE_8__.AddWhiteboardDialog)(workspaceId, appletId, item.$id, "".concat(item.path, "/").concat(item.$id))); }
                                },
                                {
                                    type: 'Divider'
                                },
                                {
                                    title: 'Folder',
                                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px'),
                                    onClick: function () { return _realmocean_ui__WEBPACK_IMPORTED_MODULE_2__.DynoDialog.Show((0,_dialogs_AddFolderDialog__WEBPACK_IMPORTED_MODULE_5__.AddFolderDialog)(workspaceId, appletId, item.$id, "".concat(item.path, "/").concat(item.$id))); }
                                },
                            ];
                        case 'list':
                            return [
                                {
                                    title: 'Add view',
                                    type: 'Title'
                                },
                                {
                                    title: 'Table',
                                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_10__.TableIcon).foregroundColor('#7C828D'),
                                    onClick: function () { return _realmocean_ui__WEBPACK_IMPORTED_MODULE_2__.DynoDialog.Show((0,_dialogs_AddListDialog__WEBPACK_IMPORTED_MODULE_6__.AddListDialog)(workspaceId, appletId, item.$id, "".concat(item.path, "/").concat(item.$id))); }
                                },
                                {
                                    title: 'Board',
                                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_10__.BoardIcon).foregroundColor('#7C828D'),
                                    onClick: function () { return _realmocean_ui__WEBPACK_IMPORTED_MODULE_2__.DynoDialog.Show((0,_dialogs_AddBoardDialog__WEBPACK_IMPORTED_MODULE_9__.AddBoardDialog)(workspaceId, appletId, item.$id, "".concat(item.path, "/").concat(item.$id))); }
                                },
                                {
                                    title: 'List',
                                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_10__.ListIcon).foregroundColor('#7C828D'),
                                    onClick: function () { return _realmocean_ui__WEBPACK_IMPORTED_MODULE_2__.DynoDialog.Show((0,_dialogs_AddWhiteboardDialog__WEBPACK_IMPORTED_MODULE_8__.AddWhiteboardDialog)(workspaceId, appletId, item.$id, "".concat(item.path, "/").concat(item.$id))); }
                                },
                                {
                                    title: 'Timeline',
                                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_10__.TimelineIcon).foregroundColor('#7C828D'),
                                    onClick: function () { return _realmocean_ui__WEBPACK_IMPORTED_MODULE_2__.DynoDialog.Show((0,_dialogs_AddWhiteboardDialog__WEBPACK_IMPORTED_MODULE_8__.AddWhiteboardDialog)(workspaceId, appletId, item.$id, "".concat(item.path, "/").concat(item.$id))); }
                                },
                                {
                                    title: 'Calendar',
                                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_10__.CalendarIcon).foregroundColor('#7C828D'),
                                    onClick: function () { return _realmocean_ui__WEBPACK_IMPORTED_MODULE_2__.DynoDialog.Show((0,_dialogs_AddWhiteboardDialog__WEBPACK_IMPORTED_MODULE_8__.AddWhiteboardDialog)(workspaceId, appletId, item.$id, "".concat(item.path, "/").concat(item.$id))); }
                                },
                                {
                                    title: 'Report',
                                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_10__.ReportIcon).foregroundColor('#7C828D'),
                                    onClick: function () { return _realmocean_ui__WEBPACK_IMPORTED_MODULE_2__.DynoDialog.Show((0,_dialogs_AddWhiteboardDialog__WEBPACK_IMPORTED_MODULE_8__.AddWhiteboardDialog)(workspaceId, appletId, item.$id, "".concat(item.path, "/").concat(item.$id))); }
                                },
                                {
                                    title: 'Feed',
                                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_10__.FeedIcon).foregroundColor('#7C828D'),
                                    onClick: function () { return _realmocean_ui__WEBPACK_IMPORTED_MODULE_2__.DynoDialog.Show((0,_dialogs_AddWhiteboardDialog__WEBPACK_IMPORTED_MODULE_8__.AddWhiteboardDialog)(workspaceId, appletId, item.$id, "".concat(item.path, "/").concat(item.$id))); }
                                },
                                {
                                    type: 'Divider'
                                },
                                {
                                    title: 'Folder',
                                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px'),
                                    onClick: function () { return _realmocean_ui__WEBPACK_IMPORTED_MODULE_2__.DynoDialog.Show((0,_dialogs_AddFolderDialog__WEBPACK_IMPORTED_MODULE_5__.AddFolderDialog)(workspaceId, appletId, item.$id, "".concat(item.path, "/").concat(item.$id))); }
                                },
                            ];
                    }
                    return null;
                }
            });
    })));
}); };
var WorkspaceTreeWidgetController = /** @class */ (function (_super) {
    __extends(WorkspaceTreeWidgetController, _super);
    function WorkspaceTreeWidgetController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorkspaceTreeWidgetController.prototype.LoadView = function () {
        var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isEditing = _a[0], setIsEditing = _a[1];
        var isLoading = false;
        var items = (this.props.data || {}).items;
        var _b = this.props.config || {}, workspaceId = _b.workspaceId, appletId = _b.appletId, onItemSelected = _b.onItemSelected;
        var _c = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utils__WEBPACK_IMPORTED_MODULE_3__.getAppletId)() === appletId), isOpen = _c[0], setIsOpen = _c[1];
        var listId = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getListId)();
        var _d = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_4__.useGetDocument)({ projectId: workspaceId, databaseId: 'workspace', collectionId: 'applets', documentId: appletId }), applet = _d.document, isAppletLoading = _d.isLoading;
        var updateDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_4__.useUpdateDocument)(workspaceId).updateDocument;
        var createTreeItem = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_4__.useCreateDocument)(workspaceId, appletId, 'wm_tree').createDocument;
        return (isAppletLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spinner)() :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIWidget)('com.celmino.widget.applet-tree')
                .config({
                workspaceId: workspaceId,
                appletId: appletId,
                appletName: applet.name,
                iconName: applet.iconName,
                iconCategory: applet.iconCategory,
                isEditing: isEditing,
                isSelected: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isAppletSettings)(appletId) || (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isAppletOnly)(appletId),
                editingChanged: function (status) { return setIsEditing(status); },
                titleChanged: function (title) {
                    updateDocument({
                        databaseId: 'workspace',
                        collectionId: 'applets',
                        documentId: appletId,
                        data: {
                            name: title
                        }
                    }, function () {
                        updateDocument({
                            databaseId: 'workspace',
                            collectionId: 'applets',
                            documentId: appletId,
                            data: {
                                name: title
                            }
                        });
                    });
                },
                subNodes: function (TreeNode, level, nodeType, parentId, workspaceId, appletId) {
                    return subNodes(TreeNode, level, nodeType, parentId, workspaceId, appletId, onItemSelected);
                },
                requestMenu: function () {
                    return [
                        /*  {
                             title: 'Add items',
                             type: 'Title'
                         }, */
                        {
                            title: 'List',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarList', '#151719', '18px', '18px'),
                            onClick: function () { return _realmocean_ui__WEBPACK_IMPORTED_MODULE_2__.DynoDialog.Show((0,_dialogs_AddListDialog__WEBPACK_IMPORTED_MODULE_6__.AddListDialog)(workspaceId, appletId, '-1', '/')); }
                        },
                        {
                            type: 'Divider'
                        },
                        {
                            title: 'Document',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
                            onClick: function () { return _realmocean_ui__WEBPACK_IMPORTED_MODULE_2__.DynoDialog.Show((0,_dialogs_AddDocumentDialog__WEBPACK_IMPORTED_MODULE_7__.AddDocumentDialog)(workspaceId, appletId, '-1', '/')); }
                        },
                        {
                            title: 'Whiteboard',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarWhiteboards', '#151719', '18px', '18px'),
                            onClick: function () { return _realmocean_ui__WEBPACK_IMPORTED_MODULE_2__.DynoDialog.Show((0,_dialogs_AddWhiteboardDialog__WEBPACK_IMPORTED_MODULE_8__.AddWhiteboardDialog)(workspaceId, appletId, '-1', '/')); }
                        },
                        {
                            type: 'Divider'
                        },
                        {
                            title: 'Folder',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px'),
                            onClick: function () { return _realmocean_ui__WEBPACK_IMPORTED_MODULE_2__.DynoDialog.Show((0,_dialogs_AddFolderDialog__WEBPACK_IMPORTED_MODULE_5__.AddFolderDialog)(workspaceId, appletId, '-1', '/')); }
                        },
                        {
                            title: 'Smart Folder',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px'),
                            onClick: function () { return _realmocean_ui__WEBPACK_IMPORTED_MODULE_2__.DynoDialog.Show((0,_dialogs_AddFolderDialog__WEBPACK_IMPORTED_MODULE_5__.AddFolderDialog)(workspaceId, appletId, '-1', '/')); }
                        },
                        {
                            title: 'Applet',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px'),
                            onClick: function () {
                                _celmino_ui__WEBPACK_IMPORTED_MODULE_11__.SelectAppletDialog.Show(workspaceId, appletId).then(function (applet) {
                                    createTreeItem({
                                        documentId: applet.$id,
                                        data: {
                                            name: applet.name,
                                            path: "/",
                                            parent: '-1',
                                            type: 'applet'
                                        }
                                    }, function () { return void 0; });
                                });
                            }
                        },
                    ];
                },
                requestEditMenu: function () { return [
                    {
                        title: 'Rename',
                        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__edit', '#151719', '18px', '18px'),
                        onClick: function () { return setIsEditing(true); }
                    },
                    {
                        title: 'Applet settings',
                        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__settings', '#151719', '18px', '18px'),
                        onClick: function () { return navigate("/app/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/settings/general")); }
                    }
                ]; }
            }));
    };
    return WorkspaceTreeWidgetController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));

_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder.injectAction('saveSpace', _dialogs_AddSpaceDialog__WEBPACK_IMPORTED_MODULE_1__.SaveSpaceAction);


/***/ }),

/***/ "./src/dialogs/AddBoardDialog.ts":
/*!***************************************!*\
  !*** ./src/dialogs/AddBoardDialog.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddBoardDialog: () => (/* binding */ AddBoardDialog),
/* harmony export */   SaveBoardAction: () => (/* binding */ SaveBoardAction)
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


var SaveBoardAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
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
    var workspaceId = formMeta.workspaceId, appletId = formMeta.appletId, listId = formMeta.listId;
    var createTreeItem = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'wm_tree').createDocument;
    var createView = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'wm_list_' + listId + '_views').createDocument;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save'))
        .onClick(function () {
        var data = __assign({}, formController.GetFormData());
        createView({
            data: {
                name: data.name,
                type: data.type
            }
        }, function (view) {
            createTreeItem({
                documentId: view.$id,
                data: __assign(__assign({}, data), { type: 'board', viewer: 'com.tuvalsoft.viewer.document' })
            }, function () { return dialog.Hide(); });
        });
    }));
}); };
var AddBoardDialog = function (workspaceId, appletId, parent, path) {
    if (workspaceId == null) {
        alert("spaceId is null");
    }
    else {
        return {
            "title": 'Create board view',
            workspaceId: workspaceId,
            appletId: appletId,
            listId: parent,
            /*   "mutation":"_create_workspace", */
            "actions": [
                {
                    "label": "Save",
                    "type": "wm_saveBoard",
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
                "board_name": {
                    "label": "name",
                    "type": "text",
                    "name": "name"
                },
                "type": {
                    "label": "type",
                    "type": "virtual",
                    "value": "com.celmino.view.taskboard"
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
    var createTreeItem = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'wm_tree').createDocument;
    var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'wm_documents'), createDocument = _a.createDocument, isLoading = _a.isLoading;
    var createDocumentContent = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'wm_document_contents').createDocument;
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
            }, function () {
                createTreeItem({
                    documentId: document.$id,
                    data: __assign(__assign({}, data), { type: 'document', viewer: 'com.tuvalsoft.viewer.document' })
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
            workspaceId: workspaceId,
            appletId: appletId,
            /*   "mutation":"_create_workspace", */
            "actions": [
                {
                    "label": "Save",
                    "type": "wm_saveDocument",
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
    var createTreeItem = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'wm_tree').createDocument;
    var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'wm_folders'), createDocument = _a.createDocument, isLoading = _a.isLoading;
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
                    "type": "saveFolder",
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

/***/ "./src/dialogs/AddListDialog.ts":
/*!**************************************!*\
  !*** ./src/dialogs/AddListDialog.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddListDialog: () => (/* binding */ AddListDialog),
/* harmony export */   SaveListAction: () => (/* binding */ SaveListAction)
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


var SaveListAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
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
    var createTreeItem = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'wm_tree').createDocument;
    var _b = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'wm_lists'), createDocument = _b.createDocument, isLoading = _b.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save List'))
        .loading(isLoading)
        .onClick(function () {
        var data = __assign({}, formController.GetFormData());
        delete data.databaseId;
        delete data.collectionId;
        delete data.workspaceId;
        delete data.appletId;
        data['defaultViewId'] = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.nanoid)();
        createDocument({
            data: __assign({}, data)
        }, function (list) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createCollection(workspaceId, appletId, 'wm_list_' + list.$id, list.name)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createCollection(workspaceId, appletId, 'wm_list_' + list.$id + '_stages', list.name + '_stages')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createCollection(workspaceId, appletId, 'wm_list_' + list.$id + '_views', list.name + '_views')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createCollection(workspaceId, appletId, 'wm_list_' + list.$id + '_att', list.name + '_attributes')];
                    case 4:
                        _a.sent();
                        setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    // Create default list attributes
                                    return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + list.$id, 'name', 255, false)];
                                    case 1:
                                        // Create default list attributes
                                        _a.sent();
                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + list.$id, 'description', 16777216, false)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + list.$id, 'mark', 10, false)];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + list.$id, 'status', 255, false)];
                                    case 4:
                                        _a.sent();
                                        // Create default list view attributes
                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + list.$id + '_views', 'name', 255, false)];
                                    case 5:
                                        // Create default list view attributes
                                        _a.sent();
                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + list.$id + '_views', 'type', 255, false)];
                                    case 6:
                                        _a.sent();
                                        // Create default list  attribute fields
                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + list.$id + '_att', 'name', 255, false)];
                                    case 7:
                                        // Create default list  attribute fields
                                        _a.sent();
                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + list.$id + '_att', 'key', 255, false)];
                                    case 8:
                                        _a.sent();
                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + list.$id + '_att', 'type', 255, false)];
                                    case 9:
                                        _a.sent();
                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + list.$id + '_att', 'type_content', 16777216, false)];
                                    case 10:
                                        _a.sent();
                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createBooleanAttribute(workspaceId, appletId, 'wm_list_' + list.$id + '_att', 'hidden', false)];
                                    case 11:
                                        _a.sent();
                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createIntegerAttribute(workspaceId, appletId, 'wm_list_' + list.$id + '_att', 'order', false)];
                                    case 12:
                                        _a.sent();
                                        setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                                            var view;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createDocument(workspaceId, appletId, 'wm_list_' + list.$id + '_views', data['defaultViewId'], {
                                                            name: 'List',
                                                            type: 'com.celmino.view.tasklist'
                                                        })];
                                                    case 1:
                                                        view = _a.sent();
                                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createDocument(workspaceId, appletId, 'wm_list_' + list.$id + '_att', _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.ID.unique(), {
                                                                name: 'Name',
                                                                key: 'name',
                                                                type: 'string',
                                                                hidden: false
                                                            })];
                                                    case 2:
                                                        _a.sent();
                                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createDocument(workspaceId, appletId, 'wm_list_' + list.$id + '_att', _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.ID.unique(), {
                                                                name: 'Description',
                                                                key: 'description',
                                                                type: 'string',
                                                                hidden: false
                                                            })];
                                                    case 3:
                                                        _a.sent();
                                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createDocument(workspaceId, appletId, 'wm_list_' + list.$id + '_att', _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.ID.unique(), {
                                                                name: 'Mark',
                                                                key: 'mark',
                                                                type: 'string',
                                                                hidden: true
                                                            })];
                                                    case 4:
                                                        _a.sent();
                                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createDocument(workspaceId, appletId, 'wm_list_' + list.$id + '_att', _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.ID.unique(), {
                                                                name: 'Status',
                                                                key: 'status',
                                                                type: 'dropdown',
                                                                type_content: JSON.stringify({
                                                                    options: [
                                                                        {
                                                                            $id: 'open',
                                                                            name: 'Open',
                                                                            fgColor: 'white',
                                                                            bgColor: 'green'
                                                                        },
                                                                        {
                                                                            $id: 'closed',
                                                                            name: 'Closed',
                                                                            fgColor: 'white',
                                                                            bgColor: 'red'
                                                                        }
                                                                    ]
                                                                }),
                                                                hidden: true
                                                            })];
                                                    case 5:
                                                        _a.sent();
                                                        delete data['defaultViewId'];
                                                        createTreeItem({
                                                            documentId: list.$id,
                                                            data: __assign(__assign({}, data), { type: 'list', viewer: 'com.tuvalsoft.viewer.tasklist' })
                                                        }, function () { return dialog.Hide(); });
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }, 1000);
                                        return [2 /*return*/];
                                }
                            });
                        }); }, 1000);
                        return [2 /*return*/];
                }
            });
        }); });
    }));
}); };
var AddListDialog = function (workspaceId, appletId, parent, path) {
    if (workspaceId == null) {
        alert("spaceId is null");
    }
    else {
        return {
            "title": 'Create List',
            /*   "mutation":"_create_workspace", */
            "actions": [
                {
                    "label": "Save",
                    "type": "saveList",
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
                "appletId": {
                    "name": "appletId",
                    "type": "virtual",
                    "value": appletId
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
    var createTreeItem = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'wm_tree').createDocument;
    var _b = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'wm_spaces'), createDocument = _b.createDocument, isLoading = _b.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save Space'))
        .loading(isLoading)
        .onClick(function () {
        var data = __assign({}, formController.GetFormData());
        delete data.databaseId;
        delete data.collectionId;
        delete data.workspaceId;
        delete data.appletId;
        createDocument({
            data: __assign({}, data)
        }, function (space) {
            createTreeItem({
                documentId: space.$id,
                data: __assign(__assign({}, data), { parent: '-1', type: 'space' })
            }, function () { return dialog.Hide(); });
        });
    }));
}); };
var AddSpaceDialog = function (workspaceId, appletId, path) { return ({
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
        "appletId": {
            "name": "appletId",
            "type": "virtual",
            "value": appletId
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
    var workspaceId = formMeta.workspaceId, appletId = formMeta.appletId;
    var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'wm_whiteboards'), createDocument = _a.createDocument, isLoading = _a.isLoading;
    var createDocumentContent = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'wm_whiteboard_contents').createDocument;
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
            }, function () { return dialog.Hide(); });
        });
    }));
}); };
var AddWhiteboardDialog = function (workspaceId, appletId, parent, path) {
    if (workspaceId == null) {
        alert("spaceId is null");
    }
    else {
        return {
            "title": 'Create whiteboard',
            workspaceId: workspaceId,
            appletId: appletId,
            /*   "mutation":"_create_workspace", */
            "actions": [
                {
                    "label": "Save",
                    "type": "wm_saveWhiteboard",
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

/***/ "./src/resources/Icons.tsx":
/*!*********************************!*\
  !*** ./src/resources/Icons.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoardIcon: () => (/* binding */ BoardIcon),
/* harmony export */   CalendarIcon: () => (/* binding */ CalendarIcon),
/* harmony export */   FeedIcon: () => (/* binding */ FeedIcon),
/* harmony export */   GridIcon: () => (/* binding */ GridIcon),
/* harmony export */   ListIcon: () => (/* binding */ ListIcon),
/* harmony export */   ReportIcon: () => (/* binding */ ReportIcon),
/* harmony export */   TableIcon: () => (/* binding */ TableIcon),
/* harmony export */   TimelineIcon: () => (/* binding */ TimelineIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TableIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4 10a1.5 1.5 0 0 1 1.5-1.5H8a1.5 1.5 0 1 1 0 3H5.5A1.5 1.5 0 0 1 4 10ZM10.5 10A1.5 1.5 0 0 1 12 8.5h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5ZM4 14.5A1.5 1.5 0 0 1 5.5 13H8a1.5 1.5 0 0 1 0 3H5.5A1.5 1.5 0 0 1 4 14.5ZM10.5 14.5A1.5 1.5 0 0 1 12 13h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5ZM4 5.5A1.5 1.5 0 0 1 5.5 4H8a1.5 1.5 0 1 1 0 3H5.5A1.5 1.5 0 0 1 4 5.5ZM10.5 5.5A1.5 1.5 0 0 1 12 4h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5Z" })))); };
var GridIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4 10a1.5 1.5 0 0 1 1.5-1.5H8a1.5 1.5 0 1 1 0 3H5.5A1.5 1.5 0 0 1 4 10ZM10.5 10A1.5 1.5 0 0 1 12 8.5h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5ZM4 14.5A1.5 1.5 0 0 1 5.5 13H8a1.5 1.5 0 0 1 0 3H5.5A1.5 1.5 0 0 1 4 14.5ZM10.5 14.5A1.5 1.5 0 0 1 12 13h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5ZM4 5.5A1.5 1.5 0 0 1 5.5 4H8a1.5 1.5 0 1 1 0 3H5.5A1.5 1.5 0 0 1 4 5.5ZM10.5 5.5A1.5 1.5 0 0 1 12 4h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5Z" })))); };
var BoardIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4 5.5a1.5 1.5 0 1 1 3 0v5a1.5 1.5 0 0 1-3 0v-5ZM8.5 5.5a1.5 1.5 0 1 1 3 0v8a1.5 1.5 0 0 1-3 0v-8ZM14.5 4A1.5 1.5 0 0 0 13 5.5v6a1.5 1.5 0 0 0 3 0v-6A1.5 1.5 0 0 0 14.5 4Z" })))); };
var ListIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M5.496 4C4.67 4 4 4.672 4 5.5S4.67 7 5.496 7h9.008C15.33 7 16 6.328 16 5.5S15.33 4 14.504 4H5.496ZM8.488 8.5c-.826 0-1.496.672-1.496 1.5s.67 1.5 1.496 1.5h6.016C15.33 11.5 16 10.828 16 10s-.67-1.5-1.496-1.5H8.488ZM9.984 14.5c0-.828.67-1.5 1.497-1.5h3.023c.826 0 1.496.672 1.496 1.5s-.67 1.5-1.496 1.5H11.48a1.498 1.498 0 0 1-1.497-1.5Z" })))); };
var TimelineIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M9 5.5A1.5 1.5 0 0 1 10.5 4h4a1.5 1.5 0 0 1 0 3h-4A1.5 1.5 0 0 1 9 5.5ZM4 14.5A1.5 1.5 0 0 1 5.5 13h4a1.5 1.5 0 0 1 0 3h-4A1.5 1.5 0 0 1 4 14.5ZM5.5 8.5a1.5 1.5 0 1 0 0 3h9a1.5 1.5 0 0 0 0-3h-9Z" })))); };
var CalendarIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M12.8 5.6a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0ZM4 10a1.6 1.6 0 1 1 3.2 0A1.6 1.6 0 0 1 4 10ZM4 14.4a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0ZM10 8.4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM8.4 14.4a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0ZM14.4 8.4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM10 4a1.6 1.6 0 1 0 0 3.2A1.6 1.6 0 0 0 10 4Z" })))); };
var ReportIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M15.65 5a1.65 1.65 0 0 0-1.613 2l-2.812 3.4c-.057 0-.113.005-.169.011L9.893 9.206a1.65 1.65 0 1 0-3.26.174l-1.875 1.923a1.65 1.65 0 1 0 1.51 1.317l1.875-1.924a1.737 1.737 0 0 0 .389-.02l1.087 1.126a1.65 1.65 0 1 0 3.217-.21l2.723-3.294.091.002a1.65 1.65 0 0 0 0-3.3Z" })))); };
var FeedIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M16 12V9c0-2.047.466-3.163 1.08-3.665.426-.35.92-.783.92-1.335a1 1 0 0 0-1-1H9a4 4 0 0 0-4 4v3c0 2.047-.466 3.163-1.08 3.665-.426.35-.92.783-.92 1.335a1 1 0 0 0 1 1h8a4 4 0 0 0 4-4ZM7 7a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" }))); };


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
/* harmony export */   getViewId: () => (/* binding */ getViewId),
/* harmony export */   getWhiteboardId: () => (/* binding */ getWhiteboardId),
/* harmony export */   isAppletOnly: () => (/* binding */ isAppletOnly),
/* harmony export */   isAppletSettings: () => (/* binding */ isAppletSettings)
/* harmony export */ });
function isAppletSettings(appletId) {
    var url = window.location.href;
    // Regex deseni
    var regexPattern = /\/applet\/([^\/]+)\/settings/;
    // Regex eşleşmesi
    var matches = url.match(regexPattern);
    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1] === appletId;
    }
    else {
        return;
    }
}
function isAppletOnly(appletId) {
    var url = window.location.href;
    // Regex deseni
    var regexPattern = /\/applet\/([^\/]+)^\//;
    // Regex eşleşmesi
    var matches = url.match(regexPattern);
    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1] === appletId;
    }
    else {
        return;
    }
}
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
    var regexPattern = /\/list\/([^]+)/;
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
function getViewId() {
    var url = window.location.href;
    // Regex deseni
    var regexPattern = /\/view\/([^]+)/;
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

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/***/ ((module) => {

module.exports = {
    application: {
        name: 'com.celmino.widget.workspace-tree',
        path: './src/Application.ts',
        displayName: "Procetra",
        icon: "data:image/svg+xml;base64,PHN2ZyBpZD0iZjc4ZjUxMTUtYmU4OC00ZDQ0LWIzNGUtM2Y2ZWE3NDMxMjVjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImI2YzQzYmQ5LWUzN2YtNDE5MS05M2MyLWQzYTdhODRjNTA1ZSIgeDE9IjkiIHkxPSIxOS4xMyIgeDI9IjkiIHkyPSItMC4yOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwNzhkNCIgLz48c3RvcCBvZmZzZXQ9IjAuMTYiIHN0b3AtY29sb3I9IiMxMzgwZGEiIC8+PHN0b3Agb2Zmc2V0PSIwLjUzIiBzdG9wLWNvbG9yPSIjM2M5MWU1IiAvPjxzdG9wIG9mZnNldD0iMC44MiIgc3RvcC1jb2xvcj0iIzU1OWNlYyIgLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1ZWEwZWYiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHRpdGxlPkljb24tbWFjaGluZWxlYXJuaW5nLTE2MjwvdGl0bGU+PHBhdGggZD0iTTE4LDExLjM4QTQsNCwwLDAsMCwxNC40OSw3LjUsNS4xLDUuMSwwLDAsMCw5LjI0LDIuNjIsNS4yNSw1LjI1LDAsMCwwLDQuMjIsNiw0LjgsNC44LDAsMCwwLDAsMTAuNjdhNC45LDQuOSwwLDAsMCw1LjA3LDQuNzFsLjQ0LDBoOC4yMWEuNzguNzgsMCwwLDAsLjIyLDBBNC4xLDQuMSwwLDAsMCwxOCwxMS4zOFoiIGZpbGw9InVybCgjYjZjNDNiZDktZTM3Zi00MTkxLTkzYzItZDNhN2E4NGM1MDVlKSIgLz48cGF0aCBkPSJNNS40MiwxMC4zOUg0LjU0YTEuMDksMS4wOSwwLDEsMCwwLC40OWguODhhLjIuMiwwLDAsMSwuMi4ydjQuM2guNDl2LTQuM0EuNjkuNjksMCwwLDAsNS40MiwxMC4zOVptLTEuOTUuODhhLjY0LjY0LDAsMSwxLC42NC0uNjRBLjY0LjY0LDAsMCwxLDMuNDcsMTEuMjdaIiBmaWxsPSIjOWNlYmZmIiAvPjxwYXRoIGQ9Ik04Ljk0LDEwLjYxdi0xYS43LjcsMCwwLDAtLjctLjdINi42OWEuMi4yLDAsMCwxLS4yLS4yVjMuNGwtLjIzLjEyTDYsMy42NnY1YS42OS42OSwwLDAsMCwuNjkuNjlIOC4yNGEuMjEuMjEsMCwwLDEsLjIxLjIxdjFhMS4wOCwxLjA4LDAsMCwwLS44NSwxLjA2LDEuMDksMS4wOSwwLDEsMCwxLjM0LTEuMDZabS0uMjUsMS43aDBhLjY0LjY0LDAsMSwxLC42NC0uNjRBLjY0LjY0LDAsMCwxLDguNjksMTIuMzFaIiBmaWxsPSIjZjJmMmYyIiAvPjxwYXRoIGQ9Ik0xNC41Myw4LjVhMS4wOSwxLjA5LDAsMCwwLS4yNSwyLjE1di4yYS4yMS4yMSwwLDAsMS0uMjEuMjFoLTJWNy41NGEuNjkuNjksMCwwLDAtLjY5LS42OUgxMC4zNUExLjA4LDEuMDgsMCwwLDAsOS4yOSw2YTEuMDksMS4wOSwwLDEsMCwxLjA2LDEuMzRoMS4wN2EuMi4yLDAsMCwxLC4yLjJ2Ny44NGguNDlWMTEuNTVoMmEuNy43LDAsMCwwLC43LS43di0uMmExLjA5LDEuMDksMCwwLDAsLjg1LTEuMDZoMEExLjA5LDEuMDksMCwwLDAsMTQuNTMsOC41Wk05LjI5LDcuNzNoMGEuNjQuNjQsMCwxLDEsLjY0LS42NEEuNjQuNjQsMCwwLDEsOS4yOSw3LjczWm01LjI0LDIuNWgwYS42NC42NCwwLDEsMSwuNjMtLjY0QS42NC42NCwwLDAsMSwxNC41MywxMC4yM1oiIGZpbGw9IiM5Y2ViZmYiIC8+PC9zdmc+"

    }
    /* threads: {
        'PMThreadWorker': 'ThreadWorker.ts'
    } */
}

/***/ }),

/***/ "@celmino/ui":
/*!*****************************!*\
  !*** external "celmino$ui" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = celmino$ui;

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
/* harmony import */ var _ModuleController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModuleController */ "./src/ModuleController.tsx");
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/ui */ "@realmocean/ui");
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dialogs_AddSpaceDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogs/AddSpaceDialog */ "./src/dialogs/AddSpaceDialog.ts");
/* harmony import */ var _dialogs_AddFolderDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialogs/AddFolderDialog */ "./src/dialogs/AddFolderDialog.ts");
/* harmony import */ var _dialogs_AddListDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialogs/AddListDialog */ "./src/dialogs/AddListDialog.ts");
/* harmony import */ var _dialogs_AddDocumentDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialogs/AddDocumentDialog */ "./src/dialogs/AddDocumentDialog.ts");
/* harmony import */ var _dialogs_AddWhiteboardDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialogs/AddWhiteboardDialog */ "./src/dialogs/AddWhiteboardDialog.ts");
/* harmony import */ var _dialogs_AddBoardDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialogs/AddBoardDialog */ "./src/dialogs/AddBoardDialog.ts");
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
        return _ModuleController__WEBPACK_IMPORTED_MODULE_0__.WorkspaceTreeWidgetController;
    };
    RatingWidget = __decorate([
        App(manifest)
    ], RatingWidget);
    return RatingWidget;
}());

_realmocean_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveSpace', _dialogs_AddSpaceDialog__WEBPACK_IMPORTED_MODULE_2__.SaveSpaceAction);
_realmocean_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveFolder', _dialogs_AddFolderDialog__WEBPACK_IMPORTED_MODULE_3__.SaveFolderAction);
_realmocean_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveList', _dialogs_AddListDialog__WEBPACK_IMPORTED_MODULE_4__.SaveListAction);
_realmocean_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('wm_saveDocument', _dialogs_AddDocumentDialog__WEBPACK_IMPORTED_MODULE_5__.SaveDocumentAction);
_realmocean_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('wm_saveWhiteboard', _dialogs_AddWhiteboardDialog__WEBPACK_IMPORTED_MODULE_6__.SaveWhiteboardAction);
_realmocean_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('wm_saveBoard', _dialogs_AddBoardDialog__WEBPACK_IMPORTED_MODULE_7__.SaveBoardAction);

})();

/******/ })()
;
//# sourceMappingURL=index.js.map
                    tuval$core.ModuleLoader.FireModuleLoadedEvent('com.celmino.widget.workspace-tree', tuval$core['__APPS__']['com.celmino.widget.workspace-tree']);
                    
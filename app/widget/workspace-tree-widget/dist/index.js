
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

/***/ "./node_modules/copy-to-clipboard/index.js":
/*!*************************************************!*\
  !*** ./node_modules/copy-to-clipboard/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "./node_modules/toggle-selection/index.js");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // avoid screen readers from reading out loud the text
    mark.ariaHidden = "true"
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ "./node_modules/toggle-selection/index.js":
/*!************************************************!*\
  !*** ./node_modules/toggle-selection/index.js ***!
  \************************************************/
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

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
/* harmony import */ var _views_WorkspaceTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/WorkspaceTree */ "./src/views/WorkspaceTree.tsx");
/* harmony import */ var _views_WorkbenchIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/WorkbenchIcons */ "./src/views/WorkbenchIcons.tsx");
/* harmony import */ var _dialogs_AddSpaceDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialogs/AddSpaceDialog */ "./src/dialogs/AddSpaceDialog.ts");
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @realmocean/ui */ "@realmocean/ui");
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_realmocean_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _views_localStorageState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/localStorageState */ "./src/views/localStorageState.tsx");
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








var MyTestController = /** @class */ (function (_super) {
    __extends(MyTestController, _super);
    function MyTestController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyTestController.prototype.LoadView = function () {
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(true), isOpen = _a[0], setIsOpen = _a[1];
        var isLoading = false;
        var items = (this.props.data || {}).items;
        var _b = this.props.config || {}, selectedItem = _b.selectedItem, team_id = _b.team_id, workspaceId = _b.workspaceId, folder_id = _b.folder_id, applet_id = _b.applet_id, showAllWorkspaces = _b.showAllWorkspaces, opas = _b.opas, folder_menu = _b.folder_menu, app_id = _b.app_id;
        var listId = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getListId)();
        var _c = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_6__.useGetDocument)({
            projectId: workspaceId,
            databaseId: 'work_management',
            collectionId: 'wm_lists',
            documentId: listId
        }, { enabled: listId != null }), list = _c.document, isListLoading = _c.isLoading;
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            if (list + null) {
                setExpanded(true);
            }
        }, []);
        var _d = (0,_views_localStorageState__WEBPACK_IMPORTED_MODULE_7__.useLocalStorageState)('work_management_tree', false), expanded = _d[0], setExpanded = _d[1];
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.OptionsContext)(function () { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)(isLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Loader)().size(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.LoaderSizes.XS) :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_views_WorkbenchIcons__WEBPACK_IMPORTED_MODULE_2__.WorkbenchIcons.CaretDown).transform(isOpen ? '' : 'rotate(-90deg)')).width().height()
            .display("var(--display-caret)"), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIWidget)("com.tuvalsoft.widget.icons")
            .config({
            selectedIcon: 'bookmark',
            color: 'gray',
            width: 18,
            height: 18,
            padding: 1
        }))
            //.background('#FCE8E8')
            .width().height()
            .cornerRadius(5)
            .display('var(--display-icon)')).width(20).height(20)
            .onClick(function () {
            setIsOpen(!isOpen);
        }), 
        /*   HStack(
              isLoading ? Loader().size(LoaderSizes.XS) :
                  Icon(SvgIcon('cu3-icon-caret', 'gray', '1em','1em')).transform(isOpen ?  'rotate(90deg)': '')
          ).width().height()
              .onClick(() => {
                  setIsOpen(!isOpen);
              }), */
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Work Management').fontSize(14), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Add')).height().width()
            .onClick(function () {
            _realmocean_ui__WEBPACK_IMPORTED_MODULE_4__.DynoDialog.Show((0,_dialogs_AddSpaceDialog__WEBPACK_IMPORTED_MODULE_3__.AddSpaceDialog)(workspaceId, '/'));
        })).height().padding(5)
            .variable('--show-space-action-buttons', { default: 'none', hover: 'flex' })
            .variable("--display-caret", { default: 'none', hover: 'flex' })
            .variable("--display-icon", { default: 'flex', hover: 'none' }), isOpen ?
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_views_WorkspaceTree__WEBPACK_IMPORTED_MODULE_1__.LeftSideMenuView)(selectedItem)).height().paddingLeft('30px') : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)()).height()); })
            .options(__assign({}, (this.props.config || {}))));
    };
    return MyTestController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));

_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder.injectAction('saveSpace', _dialogs_AddSpaceDialog__WEBPACK_IMPORTED_MODULE_3__.SaveSpaceAction);


/***/ }),

/***/ "./src/Opas.ts":
/*!*********************!*\
  !*** ./src/Opas.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   opas: () => (/* binding */ opas)
/* harmony export */ });
var opas = [
    {
        name: 'Task Management',
        type: 'com.celmino.applet.task',
        broker: 'com.tuvalsoft.broker.realm',
        defaultView: 'com.tuvalsoft.view.tasklist',
        defaultViewTitle: 'Task List',
        description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
        icon: '\\d1e4',
        iconBackColor: '#66B47C',
        //icon: SvgIcon('svg-sprite-cu2-list-ul'),
        // image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        enabled: true,
        settings: {
            stageSet: 'default'
        }
    },
    {
        name: 'Decision Rules',
        type: 'com.tuvalsoft.opa.task',
        description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
        icon: '\\d1e6',
        iconBackColor: '#66B47C',
        //image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        enabled: true
    },
    {
        name: 'OKR',
        type: 'com.tuvalsoft.applet.okr',
        broker: 'com.tuvalsoft.broker.realm',
        defaultView: 'com.okr.view.objectives',
        defaultViewTitle: 'Objectives',
        description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
        icon: '\\d1e5',
        iconBackColor: '#66B47C',
        //icon: SvgIcon('svg-sprite-cu2-view-1'),
        // image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        enabled: true
    },
    {
        name: 'Document',
        type: 'com.tuvalsoft.applet.document',
        broker: 'com.tuvalsoft.broker.document',
        description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
        icon: '\\d1e2',
        iconBackColor: '#66B47C',
        //image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        enabled: true
    },
    {
        name: 'Meeting',
        type: 'com.tuvalsoft.applet.meeting',
        broker: 'com.tuvalsoft.broker.realm',
        defaultView: 'com.meeting.view.meetings-view',
        defaultViewTitle: 'Meetings',
        description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
        icon: '\\d25f',
        iconBackColor: '#66B47C',
        // image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        enabled: true
    },
    /*  {
         name: 'Risk Assessment',
         type: 'com.tuvalsoft.opa.task',
         description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
         icon: '\\d3c9',
         iconBackColor:'#66B47C',
         enabled: true
     }, */
    {
        name: 'Strategy',
        type: 'com.tuvalsoft.opa.task',
        description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
        icon: '\\d1e1',
        iconBackColor: '#66B47C',
        enabled: true
    }
    /* ,
    {
        name: 'Calendar',
        type: 'com.tuvalsoft.opa.calendar',
        description: 'Plan your meetings or watch your due dates in your app with calendar.',
        image: '/static/opa/images/com.tuvalsoft.opa.calendar/icon.png',
    },
    {
        name: 'Timeline',
        type: 'com.tuvalsoft.opa.timeline',
        description: 'Plan your meetings or watch your due dates in your app with calendar.',
        image: '/static/opa/images/com.tuvalsoft.opa.timeline/icon.png',
    },
    {
        name: 'Gantt',
        type: 'com.tuvalsoft.opa.gantt',
        description: 'Create gantt chart with tasks, sub tasks and milestones. Draw links which shows the dependency between tasks.',
        image: '/static/opa/images/com.tuvalsoft.opa.gantt/icon.png',
        enabled: true
    },
    {
        name: 'Team',
        type: 'com.tuvalsoft.opa.team',
        description: 'Plan your meetings or watch your due dates in your app with calendar.',
        image: '/static/opa/images/com.tuvalsoft.opa.team/icon.png',
    },
    {
        name: 'Board',
        type: 'com.tuvalsoft.opa.board',
        description: 'Create gantt chart with tasks, sub tasks and milestones. Draw links which shows the dependency between tasks.',
        image: '/static/opa/images/com.tuvalsoft.opa.board/icon.png',
    },
    {
        name: 'Whiteboard',
        type: 'com.tuvalsoft.opa.whiteboard',
        description: 'Create gantt chart with tasks, sub tasks and milestones. Draw links which shows the dependency between tasks.',
        image: '/static/opa/images/com.tuvalsoft.opa.whiteboard/icon.png',
    },
    {
        name: 'Table',
        type: 'com.tuvalsoft.opa.table',
        description: 'Create gantt chart with tasks, sub tasks and milestones. Draw links which shows the dependency between tasks.',
        image: '/static/opa/images/com.tuvalsoft.opa.table/icon.png',
    },
    {
        name: 'Activity',
        type: 'com.tuvalsoft.opa.activity',
        image: '/static/opa/images/com.tuvalsoft.opa.activity/icon.png',
    },

    {
        name: 'Form',
        type: 'com.tuvalsoft.opa.form',
        image: '/static/opa/images/com.tuvalsoft.opa.form/icon.png',
    },
    {
        name: 'Doc',
        type: 'com.tuvalsoft.opa.doc',
        image: '/static/opa/images/com.tuvalsoft.opa.doc/icon.png',
    },
    {
        name: 'Chat',
        type: 'com.tuvalsoft.opa.chat',
        image: '/static/opa/images/com.tuvalsoft.opa.chat/icon.png',
    },
    {

        name: 'Workload',
        description: 'Spreadsheet is a opa for computation, organization, analysis and storage of data in tabular form.',
        type: 'com.tuvalsoft.opa.workload',
        image: '/static/opa/images/com.tuvalsoft.opa.workload/icon.png',
    },
    {

        name: 'Spreadsheet',
        description: 'Spreadsheet is a opa for computation, organization, analysis and storage of data in tabular form.',
        type: 'com.tuvalsoft.opa.spreadsheet',
        image: '/static/opa/images/com.tuvalsoft.opa.spreadsheet/icon.png',
    },
    {
        name: 'Map',
        type: 'com.tuvalsoft.opa.map',
        image: '/static/opa/images/com.tuvalsoft.opa.map/icon.png',
    },
    {

        name: 'Storage',
        description: 'Add storage to upload files or use reference documents from within other apps.',
        type: 'com.tuvalsoft.opa.spreadsheet',
        image: '/static/opa/images/com.tuvalsoft.opa.storage/icon.png',
    },
    {
        name: 'BPMN Model',
        image: '/static/opa/images/com.tuvalsoft.opa.bpmn/icon.png'
    },
    {
        name: 'Dashboard',
        type: 'com.tuvalsoft.opa.dashboard',
        image: '/static/opa/images/com.tuvalsoft.opa.dashboard/icon.png',
    },
    {
        name: 'OKR',
        type: 'com.tuvalsoft.opa.okr',
        image: '/static/opa/images/com.tuvalsoft.opa.okr/icon.png',
    },
    {

        name: 'Mind Map',
        description: 'Add storage to upload files or use reference documents from within other apps.',
        type: 'com.tuvalsoft.opa.mindmap',
        image: '/static/opa/images/com.tuvalsoft.opa.mindmap/icon.png',
    },
    {

        name: 'Fishbone Diagram',
        description: 'Add storage to upload files or use reference documents from within other apps.',
        type: 'com.tuvalsoft.opa.fishbone',
        image: '/static/opa/images/com.tuvalsoft.opa.fishbone/icon.png',
    },

    {
        name: 'Workflow',
        type: 'com.tuvalsoft.opa.spreadsheet'
    },
    {
        name: 'Google Sheets Embedder',
        description: 'Google Calendar Embedded allows you to embed any public Google Calendar link to your apps.',
        type: 'com.tuvalsoft.opa.spreadsheet',
        image: '/static/opa/images/com.tuvalsoft.opa.google_sheet_embedded/icon.png'
    },
    {
        name: 'Google Calendar Embedder',
        description: 'Google Calendar Embedded allows you to embed any public Google Calendar link to your apps.',
        type: 'com.tuvalsoft.opa.google_calendar_embedded',
        image: '/static/opa/images/com.tuvalsoft.opa.google_calendar_embedded/icon.png'
    } */
];


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
    var _a = formController.GetFormData(), databaseId = _a.databaseId, collectionId = _a.collectionId, workspaceId = _a.workspaceId;
    var _b = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, 'work_management', 'wm_documents'), createDocument = _b.createDocument, isLoading = _b.isLoading;
    var createDocumentContent = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, 'work_management', 'wm_document_contents').createDocument;
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
var AddDocumentDialog = function (workspaceId, parent, path) {
    if (workspaceId == null) {
        alert("spaceId is null");
    }
    else {
        return {
            "title": 'Create document',
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
    var _a = formController.GetFormData(), databaseId = _a.databaseId, collectionId = _a.collectionId, workspaceId = _a.workspaceId;
    var _b = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, 'work_management', 'wm_folders'), createDocument = _b.createDocument, isLoading = _b.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save Folder'))
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
var AddFolderDialog = function (workspaceId, parent, path) {
    if (workspaceId == null) {
        alert("spaceId is null");
    }
    else {
        return {
            "title": 'Create folder',
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
    var _a = formController.GetFormData(), databaseId = _a.databaseId, collectionId = _a.collectionId, workspaceId = _a.workspaceId;
    var _b = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, 'work_management', 'wm_lists'), createDocument = _b.createDocument, isLoading = _b.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save List'))
        .loading(isLoading)
        .onClick(function () {
        var data = __assign({}, formController.GetFormData());
        delete data.databaseId;
        delete data.collectionId;
        delete data.workspaceId;
        data['defaultViewId'] = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.nanoid)();
        createDocument({
            data: __assign({}, data)
        }, function (list) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createCollection(workspaceId, 'work_management', 'wm_list_' + list.$id, list.name)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createCollection(workspaceId, 'work_management', 'wm_list_' + list.$id + '_stages', list.name + '_stages')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createCollection(workspaceId, 'work_management', 'wm_list_' + list.$id + '_views', list.name + '_views')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createCollection(workspaceId, 'work_management', 'wm_list_' + list.$id + '_att', list.name + '_attributes')];
                    case 4:
                        _a.sent();
                        setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    // Create default list attributes
                                    return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createStringAttribute(workspaceId, 'work_management', 'wm_list_' + list.$id, 'name', 255, false)];
                                    case 1:
                                        // Create default list attributes
                                        _a.sent();
                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createStringAttribute(workspaceId, 'work_management', 'wm_list_' + list.$id, 'description', 16777216, false)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createStringAttribute(workspaceId, 'work_management', 'wm_list_' + list.$id, 'mark', 10, false)];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createStringAttribute(workspaceId, 'work_management', 'wm_list_' + list.$id, 'status', 255, false)];
                                    case 4:
                                        _a.sent();
                                        // Create default list view attributes
                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createStringAttribute(workspaceId, 'work_management', 'wm_list_' + list.$id + '_views', 'name', 255, false)];
                                    case 5:
                                        // Create default list view attributes
                                        _a.sent();
                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createStringAttribute(workspaceId, 'work_management', 'wm_list_' + list.$id + '_views', 'type', 255, false)];
                                    case 6:
                                        _a.sent();
                                        // Create default list  attribute fields
                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createStringAttribute(workspaceId, 'work_management', 'wm_list_' + list.$id + '_att', 'name', 255, false)];
                                    case 7:
                                        // Create default list  attribute fields
                                        _a.sent();
                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createStringAttribute(workspaceId, 'work_management', 'wm_list_' + list.$id + '_att', 'key', 255, false)];
                                    case 8:
                                        _a.sent();
                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createStringAttribute(workspaceId, 'work_management', 'wm_list_' + list.$id + '_att', 'type', 255, false)];
                                    case 9:
                                        _a.sent();
                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createStringAttribute(workspaceId, 'work_management', 'wm_list_' + list.$id + '_att', 'type_content', 16777216, false)];
                                    case 10:
                                        _a.sent();
                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createBooleanAttribute(workspaceId, 'work_management', 'wm_list_' + list.$id + '_att', 'hidden', false)];
                                    case 11:
                                        _a.sent();
                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createIntegerAttribute(workspaceId, 'work_management', 'wm_list_' + list.$id + '_att', 'order', false)];
                                    case 12:
                                        _a.sent();
                                        setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                                            var view;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createDocument(workspaceId, 'work_management', 'wm_list_' + list.$id + '_views', data['defaultViewId'], {
                                                            name: 'List',
                                                            type: 'com.celmino.view.tasklist'
                                                        })];
                                                    case 1:
                                                        view = _a.sent();
                                                        /*  await Services.Databases.updateDocument(workspaceId, 'work_management', 'wm_lists', list.$id, {
                                                             defaultViewId: view.$id
                                                         });
                          */
                                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createDocument(workspaceId, 'work_management', 'wm_list_' + list.$id + '_att', _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.ID.unique(), {
                                                                name: 'Name',
                                                                key: 'name',
                                                                type: 'string',
                                                                hidden: false
                                                            })];
                                                    case 2:
                                                        /*  await Services.Databases.updateDocument(workspaceId, 'work_management', 'wm_lists', list.$id, {
                                                             defaultViewId: view.$id
                                                         });
                          */
                                                        _a.sent();
                                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createDocument(workspaceId, 'work_management', 'wm_list_' + list.$id + '_att', _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.ID.unique(), {
                                                                name: 'Description',
                                                                key: 'description',
                                                                type: 'string',
                                                                hidden: false
                                                            })];
                                                    case 3:
                                                        _a.sent();
                                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createDocument(workspaceId, 'work_management', 'wm_list_' + list.$id + '_att', _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.ID.unique(), {
                                                                name: 'Mark',
                                                                key: 'mark',
                                                                type: 'string',
                                                                hidden: true
                                                            })];
                                                    case 4:
                                                        _a.sent();
                                                        return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createDocument(workspaceId, 'work_management', 'wm_list_' + list.$id + '_att', _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.ID.unique(), {
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
                                                        dialog.Hide();
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
var AddListDialog = function (workspaceId, parent, path) {
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
    var _a = formController.GetFormData(), databaseId = _a.databaseId, collectionId = _a.collectionId, workspaceId = _a.workspaceId;
    var _b = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, 'work_management', 'wm_spaces'), createDocument = _b.createDocument, isLoading = _b.isLoading;
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

/***/ "./src/dialogs/AppletDescriptionDialog.ts":
/*!************************************************!*\
  !*** ./src/dialogs/AppletDescriptionDialog.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppletDescriptionDialog: () => (/* binding */ AppletDescriptionDialog)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

var AppletDescriptionDialog = function (applet_id) { return ({
    "title": 'Update description',
    "mode": "update",
    "protocol": _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.WorkProtocol,
    "resource": "workspace-applets",
    "resourceId": applet_id,
    "fieldMap": {
        "name": {
            type: "editorjs",
            defaultValue: '{{ description }}',
            name: "description"
        }
    }
}); };


/***/ }),

/***/ "./src/dialogs/SelectOpaDialog.ts":
/*!****************************************!*\
  !*** ./src/dialogs/SelectOpaDialog.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectOpaDialog: () => (/* binding */ SelectOpaDialog)
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

var findOpa = function (opas, type) {
    return opas.find(function (opa) { return opa.type == type; });
};
var SelectOpaDialog = /** @class */ (function (_super) {
    __extends(SelectOpaDialog, _super);
    function SelectOpaDialog() {
        var _this = _super.call(this) || this;
        _this.Header = 'Select Applet';
        _this.Width = '1300px';
        _this.Height = '70vh';
        return _this;
    }
    SelectOpaDialog.prototype.BindRouterParams = function (_a) {
        var parentId = _a.parentId, parentType = _a.parentType, opas = _a.opas;
        this.parentId = parentId;
        this.parentType = parentType;
        this.opas = opas;
        this.filtered_opas = opas;
    };
    SelectOpaDialog.prototype.OnOK = function (applet) {
        this.ShowDialogAsyncResolve(applet);
        this.Hide();
    };
    SelectOpaDialog.prototype.OnCancel = function () {
        this.Hide();
    };
    SelectOpaDialog.prototype.LoadView = function () {
        var _this = this;
        var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();
        /* const { createApplet } = useCreateApplet([
            Query.equal('parentId', this.parentId),
        ]); */
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ScrollView)({ axes: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cVertical, alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(this.filtered_opas)(function (opa) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading, spacing: 10 })(opa.image &&
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIImage)(opa.image).width(50).height(50).cornerRadius('20%'), opa.icon &&
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(opa.icon).fontSize(40).foregroundColor('white')).width(50).height(50).cornerRadius('20%').background(opa.iconBackColor || '#9A0707')
                    .shadow('0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)'), 
            // .shadow('0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)'),
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Heading)(opa.name).h4().ellipsis(true).ellipsisMaxLines(1).width(250), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Heading)(opa.description || '').h6().ellipsis(true)
                .ellipsisMaxLines(2), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cCenter })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Add'))
                .disabled(!opa.enabled)
                .kind(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ButtonType.SECONDARY)
                .size(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ButtonSize.SMALL)
                .width('100%')
                .onClick(function () {
                var _opa = findOpa(_this.opas, opa.type);
                _this.last_added_opa_type = opa.type;
                /*   createApplet({
                      name: opa.name,
                      parentId: this.parentId,
                      parentType: this.parentType,
                      opa: opa.type,
                      icon:'AAA',
                      color:'#7B68EE',
                      settings: _opa.settings
                  }) */
            })).height()).height(230).width(290)
                .padding()
                .shadow({ hover: 'var(--box-shadow-medium)' })
                .cornerRadius('var(--border-radius-medium)')
                .border({ default: 'solid 1px var(--layout-border-color)', hover: 'solid 1px var(--dialog-background-color)' })).width().height().padding();
        })).wrap('wrap').height()))
        /* ).resource('space-folder-items')
            .onSuccess((e) => {
                // alert(JSON.stringify(e))
                this.InvalidateQuerie('space-folder-items')
                this.OnOK();
                navigate(`/app/com.tuvalsoft.app.workbench/_opa/${this.last_added_opa_type}/${this.space_id}/${this.folder_id}/${e.id}/${e.id}`)

            })
    ) */
        );
    };
    SelectOpaDialog.Show = function (parentId, parentType, opas) {
        var dialog = new SelectOpaDialog();
        dialog.BindRouterParams({ parentId: parentId, parentType: parentType, opas: opas });
        return dialog.ShowDialogAsync();
    };
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ViewProperty)()
    ], SelectOpaDialog.prototype, "filtered_opas", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ViewProperty)()
    ], SelectOpaDialog.prototype, "parentId", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ViewProperty)()
    ], SelectOpaDialog.prototype, "parentType", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ViewProperty)()
    ], SelectOpaDialog.prototype, "opas", void 0);
    return SelectOpaDialog;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.DialogView));



/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDocumentId: () => (/* binding */ getDocumentId),
/* harmony export */   getListId: () => (/* binding */ getListId)
/* harmony export */ });
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


/***/ }),

/***/ "./src/views/AppletItem.ts":
/*!*********************************!*\
  !*** ./src/views/AppletItem.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppletItem: () => (/* binding */ AppletItem)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppletName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppletName */ "./src/views/AppletName.tsx");


var AppletItem = function (applet) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
    var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useOptions)(), workspaceId = _a.workspaceId, applet_id = _a.applet_id;
    var _b = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(applet_id === applet.id), expanded = _b[0], setExpanded = _b[1];
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_AppletName__WEBPACK_IMPORTED_MODULE_1__.AppletName)(applet, function () {
        setExpanded(!expanded);
    }))
        .height()
    //  .allWidth('calc(100% - 20px)')
    );
}); };


/***/ }),

/***/ "./src/views/AppletName.tsx":
/*!**********************************!*\
  !*** ./src/views/AppletName.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppletName: () => (/* binding */ AppletName)
/* harmony export */ });
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/ui */ "@realmocean/ui");
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Opas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Opas */ "./src/Opas.ts");
/* harmony import */ var _dialogs_AppletDescriptionDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialogs/AppletDescriptionDialog */ "./src/dialogs/AppletDescriptionDialog.ts");
/* harmony import */ var _dialogs_SelectOpaDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialogs/SelectOpaDialog */ "./src/dialogs/SelectOpaDialog.ts");
/* harmony import */ var _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WorkbenchIcons */ "./src/views/WorkbenchIcons.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_8__);
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









function AppletName(applet, onClickCallback) {
    var selected = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getListId)() === applet.$id;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
        var _a;
        var access_type = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useParams)().access_type;
        var workspaceId = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useOptions)().workspaceId;
        var _b = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useState)('readonly'), mode = _b[0], setMode = _b[1];
        // const [name, setName] = useState(applet?.name);
        var _c = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useState)(applet === null || applet === void 0 ? void 0 : applet.name), newName = _c[0], setNewName = _c[1];
        var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
        //const { updateAppletName } = useUpdateAppletName();
        // const {applet:_applet} = useGetApplet(applet.$id);
        return (mode === 'readonly' ?
            //UIRouteLink(team ? `/app/${getAppFullName()}/team/${team.id}/workspace/${spaceItem.id}/folder/${folder.id}/applet/${applet.id}/scope/${applet.scope_id}` : `/app/${getAppFullName()}/workspace/${spaceItem.id}/folder/${folder.id}/applet/${applet.id}/scope/${applet.scope_id}`)(
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)(_tuval_core__WEBPACK_IMPORTED_MODULE_8__.is.nullOrEmpty(applet === null || applet === void 0 ? void 0 : applet.icon_name) ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icon)(_WorkbenchIcons__WEBPACK_IMPORTED_MODULE_6__.WorkbenchIcons.ListIcon) :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIWidget)("com.tuvalsoft.widget.icons")
                    .config({
                    selectedIcon: applet === null || applet === void 0 ? void 0 : applet.icon_name,
                    selectedCategory: applet === null || applet === void 0 ? void 0 : applet.icon_category,
                    width: 16,
                    height: 16,
                    padding: 1
                }))
                //.background('#FCE8E8')
                .width().height()
                .cornerRadius(5), mode !== 'readonly' ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)() :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Heading)(applet.name).h6().ellipsisMaxLines(1).ellipsis(true)
                    .fontSize(14).fontWeight('400')
                    .fontFamily('-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji')
                    .foregroundColor(selected ? '#7b68ee' : '#151719'))
                    .height(32)
                    .onClick(function () {
                    //alert(getAppletUrl(access_type, applet.id))
                    navigate("/app/workspace/".concat(workspaceId, "/applet/com.celmino.applet.workmanagement/list/").concat(applet.$id, "/view/").concat(applet.defaultViewId));
                }), mode === 'readonly' ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)() :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.TextField)().value(newName)
                    .fontFamily('Poppins,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif')
                    .fontSize(13)
                    .height('100%')
                    .padding(0)
                    .border('dashed 1px #AAA')
                    .shadow({ focus: 'none' })
                    .onBlur(function () {
                    /* updateAppletName({
                        appletId: applet.$id,
                        name: newName
                    }) */
                    setMode('readonly');
                })
                    .onChange(function (e) { return setNewName(e); }))
                .overflow('hidden').height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTrailing })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.MenuButton)()
                .model([
                {
                    title: 'Add to sub applet',
                    type: 'Title'
                },
                {
                    title: 'More Applets',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('svg-sprite-activity-template-merged'),
                    onClick: function () { return _dialogs_SelectOpaDialog__WEBPACK_IMPORTED_MODULE_5__.SelectOpaDialog.Show(applet.$id, 'applet', _Opas__WEBPACK_IMPORTED_MODULE_3__.opas).then(function (applet) {
                        // setNewApplet(applet);
                    }); }
                },
            ])
                .icon(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icons.Add), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.MenuButton)()
                .model([
                {
                    title: 'Applet Options',
                    type: 'Title'
                },
                {
                    title: 'Rename',
                    icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_6__.WorkbenchIcons.Edit,
                    onClick: function () {
                        setMode('edit');
                    }
                },
                {
                    title: 'Copy link',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('svg-sprite-global__link'),
                    onClick: function () {
                        copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default()(location.href);
                        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ShowToast)('Copied to clipboard');
                    }
                },
                {
                    title: 'Add to favorites',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('svg-sprite-global__star'),
                    onClick: function () {
                        setMode('edit');
                    }
                },
                {
                    title: 'Dublicate',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('svg-sprite-global__copy'),
                    onClick: function () {
                        var data = __assign({}, applet);
                        delete data['id'];
                        /*  createApplet(applet, {
                             onSuccess: (newApplet) => {
                                 invalidateResourceCache();
                                 ShowSuccessToast('Dublicated.');
                                 navigate(getAppletUrl(access_type, team?.id, newApplet.id))
                             }
                         }) */
                    }
                },
                {
                    title: 'Move',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('svg-sprite-global__move'),
                    onClick: function () {
                        setMode('edit');
                    }
                },
                {
                    title: 'Description',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('svg-sprite-info4'),
                    onClick: function () {
                        _realmocean_ui__WEBPACK_IMPORTED_MODULE_0__.DynoDialog.Show((0,_dialogs_AppletDescriptionDialog__WEBPACK_IMPORTED_MODULE_4__.AppletDescriptionDialog)(applet.$id));
                    }
                },
                {
                    title: 'Delete',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('svg-sprite-global__delete', '#bc4841'),
                    color: '#bc4841',
                    onClick: function () {
                        var accept = function () {
                            /* deleteView(applet.id, {
                                onSuccess: () => {
                                    invalidateResCache();

                                    team ?
                                        navigate(`/app/${getAppFullName()}/team/${team.id}/workspace/${applet.workspace_id}`)
                                        :
                                        navigate(`/app/${getAppFullName()}/workspace/${applet.workspace_id}`);

                                }
                            }) */
                            // toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                        };
                        var reject = function () {
                            //alert('reject')
                            // toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                        };
                        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.confirmDialog)({
                            message: 'Do you want to delete this applet?',
                            header: 'Delete Confirmation',
                            icon: 'pi pi-info-circle',
                            acceptClassName: 'p-button-danger',
                            accept: accept,
                            reject: reject
                        });
                        //DynoDialog.Show(AppletDescriptionDialog(applet.id))
                    }
                }
            ])
                .icon(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icons.Menu))
                .width(64)
                .height(32).padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cHorizontal, 5)
                .display('var(--show-applet-action-buttons)')
                .onClick(function (e) {
                e.preventDefault();
                e.stopPropagation();
            }))
                // .borderLeft(selected ? 'solid 1px #7B68EE' : '')
                .background({ default: selected ? '#F5F3FD' : '', hover: '#f6f7f9' })
                .allHeight(32)
                //.padding(`0 0 0 20px`)
                .cursor('pointer')
                .draggable(true)
                .onDragStart(function (e) {
                e.dataTransfer.setData('text/plain', JSON.stringify(applet));
            })
                .variable('--show-applet-action-buttons', { default: 'none', hover: 'flex' })
            :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icon)(((_a = _Opas__WEBPACK_IMPORTED_MODULE_3__.opas.find(function (opa) { return opa.type === applet.opa; })) === null || _a === void 0 ? void 0 : _a.icon) || _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_6__.WorkbenchIcons.DocIcon).foregroundColor('#7c828d'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.TextField)().value(newName)
                    .fontFamily('Poppins,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif')
                    .fontSize(13)
                    .height('100%')
                    .padding(0)
                    .border('dashed 1px #AAA')
                    .shadow({ focus: 'none' })
                    .onBlur(function () {
                    /*  updateAppletName({
                         appletId: applet.$id,
                         name: newName
                     }, () => {
                         onSuccess: () => {
                             ShowSuccessToast('We successfully rename applet', 'Undo', () => {
                               
                             })
                         }
                     }) */
                    setMode('readonly');
                })
                    .onChange(function (e) { return setNewName(e); }))
                    //   .borderLeft(selected ? 'solid 1px #7B68EE' : '')
                    .background({ default: selected ? '#F5F3FD' : '', hover: '#f6f7f9' })
                    .allHeight(32)
                    .padding('0 0 0 40px')
                    .cursor('pointer'));
    }));
}


/***/ }),

/***/ "./src/views/DocumentItem.ts":
/*!***********************************!*\
  !*** ./src/views/DocumentItem.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentItem: () => (/* binding */ DocumentItem)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DocumentName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocumentName */ "./src/views/DocumentName.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _localStorageState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorageState */ "./src/views/localStorageState.tsx");
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @realmocean/ui */ "@realmocean/ui");
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_realmocean_ui__WEBPACK_IMPORTED_MODULE_5__);






var DocumentItem = function (document) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
    var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useOptions)(), workspaceId = _a.workspaceId, applet_id = _a.applet_id;
    var documentInLinkId = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getDocumentId)();
    return ((0,_realmocean_ui__WEBPACK_IMPORTED_MODULE_5__.UIDocument)(function (_a) {
        var documentInLink = _a.document, isLoading = _a.isLoading;
        var expandedFromUrl = (documentInLink === null || documentInLink === void 0 ? void 0 : documentInLink.path.indexOf(document.$id)) > -1;
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            if (expandedFromUrl) {
                setExpanded(true);
            }
        }, []);
        var _b = (0,_localStorageState__WEBPACK_IMPORTED_MODULE_4__.useLocalStorageState)(document.$id, (documentInLink === null || documentInLink === void 0 ? void 0 : documentInLink.path.indexOf(document.$id)) > -1), expanded = _b[0], setExpanded = _b[1];
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_DocumentName__WEBPACK_IMPORTED_MODULE_1__.DocumentName)(document, function () {
            setExpanded(!expanded);
        }), !expanded ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)() :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
                var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_3__.useListDocuments)(workspaceId, 'work_management', 'wm_documents', [
                    _realmocean_sdk__WEBPACK_IMPORTED_MODULE_3__.Query.equal('parent', document.$id)
                ]), documents = _a.documents, isDocumentsLoading = _a.isLoading;
                return (isDocumentsLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)() :
                    _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(documents)(function (document) {
                        return DocumentItem(document);
                    })).paddingLeft('20px'));
            }))
            .height());
    })
        .realmId(workspaceId)
        .databaseId('work_management')
        .collectionId('wm_documents')
        .documentId(documentInLinkId)
        .enabled(documentInLinkId != null));
}); };


/***/ }),

/***/ "./src/views/DocumentName.ts":
/*!***********************************!*\
  !*** ./src/views/DocumentName.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentName: () => (/* binding */ DocumentName)
/* harmony export */ });
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/ui */ "@realmocean/ui");
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Opas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Opas */ "./src/Opas.ts");
/* harmony import */ var _dialogs_AppletDescriptionDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialogs/AppletDescriptionDialog */ "./src/dialogs/AppletDescriptionDialog.ts");
/* harmony import */ var _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WorkbenchIcons */ "./src/views/WorkbenchIcons.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _dialogs_AddDocumentDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialogs/AddDocumentDialog */ "./src/dialogs/AddDocumentDialog.ts");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_8__);
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









function DocumentName(document, onClickCallback) {
    var selected = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getDocumentId)() === document.$id;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
        var _a;
        var access_type = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useParams)().access_type;
        var workspaceId = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useOptions)().workspaceId;
        var _b = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useState)('readonly'), mode = _b[0], setMode = _b[1];
        // const [name, setName] = useState(applet?.name);
        var _c = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useState)(document === null || document === void 0 ? void 0 : document.name), newName = _c[0], setNewName = _c[1];
        var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
        //const { updateAppletName } = useUpdateAppletName();
        // const {applet:_applet} = useGetApplet(applet.$id);
        return (mode === 'readonly' ?
            //UIRouteLink(team ? `/app/${getAppFullName()}/team/${team.id}/workspace/${spaceItem.id}/folder/${folder.id}/applet/${applet.id}/scope/${applet.scope_id}` : `/app/${getAppFullName()}/workspace/${spaceItem.id}/folder/${folder.id}/applet/${applet.id}/scope/${applet.scope_id}`)(
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)(_tuval_core__WEBPACK_IMPORTED_MODULE_8__.is.nullOrEmpty(document === null || document === void 0 ? void 0 : document.icon_name) ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icon)(_WorkbenchIcons__WEBPACK_IMPORTED_MODULE_5__.WorkbenchIcons.DocIcon2) :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIWidget)("com.tuvalsoft.widget.icons")
                    .config({
                    selectedIcon: document === null || document === void 0 ? void 0 : document.icon_name,
                    selectedCategory: document === null || document === void 0 ? void 0 : document.icon_category,
                    width: 16,
                    height: 16,
                    padding: 1
                })).foregroundColor('rgba(109,122,131,0.9)')
                //.background('#FCE8E8')
                .width().height()
                .cornerRadius(5), mode !== 'readonly' ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)() :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Heading)(document.name).h6().ellipsisMaxLines(1).ellipsis(true)
                    .fontSize(14).fontWeight('400')
                    .fontFamily('-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji')
                    .foregroundColor(selected ? '#7b68ee' : '#151719'))
                    .height(32)
                    .onClick(function () {
                    //alert(getAppletUrl(access_type, applet.id))
                    navigate("/app/workspace/".concat(workspaceId, "/applet/com.celmino.applet.workmanagement/document/").concat(document.$id));
                }), mode === 'readonly' ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)() :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.TextField)().value(newName)
                    .fontFamily('Poppins,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif')
                    .fontSize(13)
                    .height('100%')
                    .padding(0)
                    .border('dashed 1px #AAA')
                    .shadow({ focus: 'none' })
                    .onBlur(function () {
                    /* updateAppletName({
                        appletId: applet.$id,
                        name: newName
                    }) */
                    setMode('readonly');
                })
                    .onChange(function (e) { return setNewName(e); }))
                .overflow('hidden').height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTrailing })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.MenuButton)()
                .model([
                {
                    title: 'Document',
                    type: 'Title'
                },
                {
                    title: 'Add',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('svg-sprite-activity-template-merged'),
                    onClick: function () {
                        _realmocean_ui__WEBPACK_IMPORTED_MODULE_0__.DynoDialog.Show((0,_dialogs_AddDocumentDialog__WEBPACK_IMPORTED_MODULE_7__.AddDocumentDialog)(workspaceId, document.$id, "".concat(document.path, "/").concat(document.$id)));
                    }
                },
            ])
                .icon(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icons.Add), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.MenuButton)()
                .model([
                {
                    title: 'Applet Options',
                    type: 'Title'
                },
                {
                    title: 'Rename',
                    icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_5__.WorkbenchIcons.Edit,
                    onClick: function () {
                        setMode('edit');
                    }
                },
                {
                    title: 'Copy link',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('svg-sprite-global__link'),
                    onClick: function () {
                        copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default()(location.href);
                        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ShowToast)('Copied to clipboard');
                    }
                },
                {
                    title: 'Add to favorites',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('svg-sprite-global__star'),
                    onClick: function () {
                        setMode('edit');
                    }
                },
                {
                    title: 'Dublicate',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('svg-sprite-global__copy'),
                    onClick: function () {
                        var data = __assign({}, document);
                        delete data['id'];
                        /*  createApplet(applet, {
                             onSuccess: (newApplet) => {
                                 invalidateResourceCache();
                                 ShowSuccessToast('Dublicated.');
                                 navigate(getAppletUrl(access_type, team?.id, newApplet.id))
                             }
                         }) */
                    }
                },
                {
                    title: 'Move',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('svg-sprite-global__move'),
                    onClick: function () {
                        setMode('edit');
                    }
                },
                {
                    title: 'Description',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('svg-sprite-info4'),
                    onClick: function () {
                        _realmocean_ui__WEBPACK_IMPORTED_MODULE_0__.DynoDialog.Show((0,_dialogs_AppletDescriptionDialog__WEBPACK_IMPORTED_MODULE_4__.AppletDescriptionDialog)(document.$id));
                    }
                },
                {
                    title: 'Delete',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('svg-sprite-global__delete', '#bc4841'),
                    color: '#bc4841',
                    onClick: function () {
                        var accept = function () {
                            /* deleteView(applet.id, {
                                onSuccess: () => {
                                    invalidateResCache();

                                    team ?
                                        navigate(`/app/${getAppFullName()}/team/${team.id}/workspace/${applet.workspace_id}`)
                                        :
                                        navigate(`/app/${getAppFullName()}/workspace/${applet.workspace_id}`);

                                }
                            }) */
                            // toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                        };
                        var reject = function () {
                            //alert('reject')
                            // toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                        };
                        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.confirmDialog)({
                            message: 'Do you want to delete this applet?',
                            header: 'Delete Confirmation',
                            icon: 'pi pi-info-circle',
                            acceptClassName: 'p-button-danger',
                            accept: accept,
                            reject: reject
                        });
                        //DynoDialog.Show(AppletDescriptionDialog(applet.id))
                    }
                }
            ])
                .icon(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icons.Menu))
                .width(64)
                .height(32).padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cHorizontal, 5)
                .display('var(--show-applet-action-buttons)')
                .onClick(function (e) {
                e.preventDefault();
                e.stopPropagation();
            }))
                // .borderLeft(selected ? 'solid 1px #7B68EE' : '')
                .background({ default: selected ? '#F5F3FD' : '', hover: '#f6f7f9' })
                .allHeight(32)
                //.padding(`0 0 0 20px`)
                .cursor('pointer')
                .draggable(true)
                .onDragStart(function (e) {
                e.dataTransfer.setData('text/plain', JSON.stringify(document));
            })
                .variable('--show-applet-action-buttons', { default: 'none', hover: 'flex' })
            :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icon)(((_a = _Opas__WEBPACK_IMPORTED_MODULE_3__.opas.find(function (opa) { return opa.type === document.opa; })) === null || _a === void 0 ? void 0 : _a.icon) || _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_5__.WorkbenchIcons.DocIcon).foregroundColor('#7c828d'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.TextField)().value(newName)
                    .fontFamily('Poppins,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif')
                    .fontSize(13)
                    .height('100%')
                    .padding(0)
                    .border('dashed 1px #AAA')
                    .shadow({ focus: 'none' })
                    .onBlur(function () {
                    /*  updateAppletName({
                         appletId: applet.$id,
                         name: newName
                     }, () => {
                         onSuccess: () => {
                             ShowSuccessToast('We successfully rename applet', 'Undo', () => {
                               
                             })
                         }
                     }) */
                    setMode('readonly');
                })
                    .onChange(function (e) { return setNewName(e); }))
                    //   .borderLeft(selected ? 'solid 1px #7B68EE' : '')
                    .background({ default: selected ? '#F5F3FD' : '', hover: '#f6f7f9' })
                    .allHeight(32)
                    .padding('0 0 0 40px')
                    .cursor('pointer'));
    }));
}


/***/ }),

/***/ "./src/views/FolderItem.ts":
/*!*********************************!*\
  !*** ./src/views/FolderItem.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FolderItem: () => (/* binding */ FolderItem)
/* harmony export */ });
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AppletItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppletItem */ "./src/views/AppletItem.ts");
/* harmony import */ var _FolderName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FolderName */ "./src/views/FolderName.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _localStorageState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localStorageState */ "./src/views/localStorageState.tsx");
/* harmony import */ var _DocumentItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DocumentItem */ "./src/views/DocumentItem.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};







function FolderItem(parent, folder) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
        var workspaceId = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useOptions)().workspaceId;
        var listId = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getListId)();
        var documentId = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getDocumentId)();
        var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useGetDocument)({
            projectId: workspaceId,
            databaseId: 'work_management',
            collectionId: 'wm_lists',
            documentId: listId
        }, { enabled: listId != null }), list = _a.document, isListLoading = _a.isLoading;
        var _b = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useGetDocument)({
            projectId: workspaceId,
            databaseId: 'work_management',
            collectionId: 'wm_documents',
            documentId: documentId
        }, { enabled: documentId != null }), document = _b.document, isDocumentLoading = _b.isLoading;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
            var expandedFromUrl = (list === null || list === void 0 ? void 0 : list.path.indexOf(folder.$id)) > -1 || (document === null || document === void 0 ? void 0 : document.path.indexOf(folder.$id)) > -1;
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
                if (expandedFromUrl) {
                    setExpanded(true);
                }
            }, []);
            var _a = (0,_localStorageState__WEBPACK_IMPORTED_MODULE_5__.useLocalStorageState)(folder.$id, (list === null || list === void 0 ? void 0 : list.path.indexOf(folder.$id)) > -1 || (document === null || document === void 0 ? void 0 : document.path.indexOf(folder.$id)) > -1), expanded = _a[0], setExpanded = _a[1];
            //const [a, setA] = useState(true)
            var _b = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useListDocuments)(workspaceId, 'work_management', 'wm_folders', [
                _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Query.equal('parent', folder.$id)
            ]), folders = _b.documents, isLoading = _b.isLoading;
            var _c = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useListDocuments)(workspaceId, 'work_management', 'wm_lists', [
                _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Query.equal('parent', folder.$id)
            ]), applets = _c.documents, isAppletsLoading = _c.isLoading;
            var _d = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useListDocuments)(workspaceId, 'work_management', 'wm_documents', [
                _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Query.equal('parent', folder.$id)
            ]), documents = _d.documents, isDocumentsLoading = _d.isLoading;
            return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })((0,_FolderName__WEBPACK_IMPORTED_MODULE_3__.FolderName)(parent, folder, expanded, ((expanded) && (isAppletsLoading || isDocumentsLoading)), function () {
                setExpanded(!expanded);
                //  setA(!a);
            }), (!expanded) ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)() :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
                    return (_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack.apply(void 0, __spreadArray(__spreadArray(__spreadArray([], (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ForEach)(isLoading ? [] : folders)(function (childFolder) {
                        return FolderItem(parent, childFolder);
                    }), false), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ForEach)(documents)(function (document) {
                        return (0,_DocumentItem__WEBPACK_IMPORTED_MODULE_6__.DocumentItem)(document);
                    }), false), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ForEach)(applets)(function (applet) {
                        return (0,_AppletItem__WEBPACK_IMPORTED_MODULE_2__.AppletItem)(applet);
                    }), false)).paddingLeft('20px'));
                    /*  return (
                         FolderContent(team, spaceItem, folder, applets)
                     ) */
                })));
        }
        // .allWidth('calc(100% - 20px)')
        ));
    }));
}


/***/ }),

/***/ "./src/views/FolderName.ts":
/*!*********************************!*\
  !*** ./src/views/FolderName.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FolderName: () => (/* binding */ FolderName)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dialogs_SelectOpaDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialogs/SelectOpaDialog */ "./src/dialogs/SelectOpaDialog.ts");
/* harmony import */ var _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorkbenchIcons */ "./src/views/WorkbenchIcons.tsx");
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @realmocean/ui */ "@realmocean/ui");
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_realmocean_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dialogs_AddFolderDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialogs/AddFolderDialog */ "./src/dialogs/AddFolderDialog.ts");
/* harmony import */ var _Opas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Opas */ "./src/Opas.ts");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _dialogs_AddListDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialogs/AddListDialog */ "./src/dialogs/AddListDialog.ts");
/* harmony import */ var _dialogs_AddDocumentDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dialogs/AddDocumentDialog */ "./src/dialogs/AddDocumentDialog.ts");










var FolderName = function (parent, folder, isOpen, isLoading, onClickCallback) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
    var folder_id = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useParams)().folder_id;
    var workspaceId = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useOptions)().workspaceId;
    var selected = false;
    var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)('readonly'), mode = _a[0], setMode = _a[1];
    var _b = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(folder === null || folder === void 0 ? void 0 : folder.name), name = _b[0], setName = _b[1];
    var _c = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(folder === null || folder === void 0 ? void 0 : folder.name), newName = _c[0], setNewName = _c[1];
    var createList = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_7__.useCreateDocument)(workspaceId, 'work_management', 'wm_lists').createDocument;
    return (mode === 'readonly' ?
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)(isLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Loader)().size(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.LoaderSizes.XS) :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_WorkbenchIcons__WEBPACK_IMPORTED_MODULE_3__.WorkbenchIcons.CaretDown).transform(isOpen ? '' : 'rotate(-90deg)')).width().height().display('var(--display-caret)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(isOpen ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-cu3-folder-sidebar_opened', '#7C828D', '18px', '18px') : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-cu3-folder-sidebar', '#7C828D', '18px', '18px')).foregroundColor('#7C828D')).padding(2).width(20).height(20).cornerRadius(5).display('var(--display-icon)')).width(20).height(20), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Heading)(folder.name).h6().ellipsisMaxLines(1).ellipsis(true)
            .fontSize(14).fontWeight('400')
            .fontFamily('-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji')
            .foregroundColor(selected ? '#7b68ee' : '#151719')
            .borderBottom({ hover: '1px dashed #2A2D34' }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTrailing })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.MenuButton)()
            .model([
            {
                title: 'Add to space',
                type: 'Title'
            },
            {
                title: 'Table',
                icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_3__.WorkbenchIcons.TableIcon,
                onClick: function () {
                    /*  createApplet({
                         name: 'New table',
                         parentId: folder.$id,
                         parentType: 'workspace',
                         opa: 'com.celmino.applet.table',
                         icon: 'TableIcon',
                         color: '#40BC86',
                     }, () => alert('created')) */
                    //DynoDialog.Show(AddFolderDialog(space.$id))
                }
                /* .then(() => {
                    controller.InvalidateQuerie('space-folders')
                }) */
            },
            {
                title: 'Grid',
                icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_3__.WorkbenchIcons.GridIcon,
                onClick: function () {
                    /*  createApplet({
                         name: 'New grid',
                         parentId: folder.$id,
                         parentType: 'workspace',
                         opa: 'com.celmino.applet.grid',
                         icon: 'GridIcon',
                         color: '#40BC86',
                     }, () => console.log('created')) */
                }
                /* .then(() => {
                    controller.InvalidateQuerie('space-folders')
                }) */
            },
            {
                title: 'Board',
                icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_3__.WorkbenchIcons.BoardIcon,
                onClick: function () {
                    /*  createApplet({
                         name: 'New board',
                         parentId: folder.$id,
                         parentType: 'workspace',
                         opa: 'com.celmino.applet.board',
                         icon: 'BoardIcon',
                         color: '#40BC86',
                     }, () => console.log('created')) */
                }
                /* .then(() => {
                    controller.InvalidateQuerie('space-folders')
                }) */
            },
            {
                title: 'List',
                icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_3__.WorkbenchIcons.ListIcon,
                onClick: function () {
                    _realmocean_ui__WEBPACK_IMPORTED_MODULE_4__.DynoDialog.Show((0,_dialogs_AddListDialog__WEBPACK_IMPORTED_MODULE_8__.AddListDialog)(workspaceId, folder.$id, "".concat(folder.path, "/").concat(folder.$id)));
                    /*  createList({
                         data: {
                             name: 'New list',
                             parent: folder.$id,
                         }
                     }, () => console.log('created')) */
                }
                /* .then(() => {
                    controller.InvalidateQuerie('space-folders')
                }) */
            },
            {
                title: 'Timeline',
                icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_3__.WorkbenchIcons.TimelineIcon,
                onClick: function () {
                    /*   createApplet({
                          name: 'New timeline',
                          parentId: folder.$id,
                          parentType: 'workspace',
                          opa: 'com.celmino.applet.timeline',
                          icon: 'TimelineIcon',
                          color: '#40BC86',
                      }, () => console.log('created')) */
                }
                /* .then(() => {
                    controller.InvalidateQuerie('space-folders')
                }) */
            },
            {
                title: 'Calendar',
                icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_3__.WorkbenchIcons.CalendarIcon,
                onClick: function () {
                    /*  createApplet({
                         name: 'New calendar',
                         parentId: folder.$id,
                         parentType: 'workspace',
                         opa: 'com.celmino.applet.calendar',
                         icon: 'CalendarIcon',
                         color: '#40BC86',
                     }, () => console.log('created')) */
                }
                /* .then(() => {
                    controller.InvalidateQuerie('space-folders')
                }) */
            },
            {
                title: 'Report',
                icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_3__.WorkbenchIcons.ReportIcon,
                onClick: function () {
                    /*  createApplet({
                         name: 'New report',
                         parentId: folder.$id,
                         parentType: 'workspace',
                         opa: 'com.celmino.applet.report',
                         icon: 'ReportIcon',
                         color: '#40BC86',
                     }, () => console.log('created')) */
                }
                /* .then(() => {
                    controller.InvalidateQuerie('space-folders')
                }) */
            },
            {
                title: 'Feed',
                icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_3__.WorkbenchIcons.FeedIcon,
                onClick: function () {
                    /*   createApplet({
                          name: 'New feed',
                          parentId: folder.$id,
                          parentType: 'workspace',
                          opa: 'com.celmino.applet.feed',
                          icon: 'FeedIcon',
                          color: '#40BC86',
                      }, () => console.log('created')) */
                }
                /* .then(() => {
                    controller.InvalidateQuerie('space-folders')
                }) */
            },
            {
                title: 'Map',
                icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_3__.WorkbenchIcons.MapIcon,
                onClick: function () {
                    /*   createApplet({
                          name: 'New map',
                          parentId: folder.$id,
                          parentType: 'workspace',
                          opa: 'com.celmino.applet.map',
                          icon: 'MapIcon',
                          color: '#40BC86',
                      }, () => console.log('created')) */
                }
                /* .then(() => {
                    controller.InvalidateQuerie('space-folders')
                }) */
            },
            {
                type: 'Divider'
            },
            {
                title: 'Document',
                icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_3__.WorkbenchIcons.DocumentIcon,
                onClick: function () {
                    _realmocean_ui__WEBPACK_IMPORTED_MODULE_4__.DynoDialog.Show((0,_dialogs_AddDocumentDialog__WEBPACK_IMPORTED_MODULE_9__.AddDocumentDialog)(workspaceId, folder.$id, "".concat(parent.path, "/").concat(parent.$id)));
                    /*   createApplet({
                          name: 'New document',
                          parentId: folder.$id,
                          parentType: 'workspace',
                          opa: 'com.celmino.applet.document',
                          icon: 'DocumentIcon',
                          color: '#40BC86',
                      }, () => console.log('created')) */
                }
                /* .then(() => {
                    controller.InvalidateQuerie('space-folders')
                }) */
            },
            {
                title: 'Whiteboard',
                icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_3__.WorkbenchIcons.WhiteboardIcon1,
                onClick: function () {
                    _realmocean_ui__WEBPACK_IMPORTED_MODULE_4__.DynoDialog.Show((0,_dialogs_AddFolderDialog__WEBPACK_IMPORTED_MODULE_5__.AddFolderDialog)(workspaceId, folder.$id, "".concat(parent.path, "/").concat(parent.$id)));
                }
                /* .then(() => {
                    controller.InvalidateQuerie('space-folders')
                }) */
            },
            {
                title: 'Form',
                icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_3__.WorkbenchIcons.FormIcon1,
                onClick: function () {
                    _realmocean_ui__WEBPACK_IMPORTED_MODULE_4__.DynoDialog.Show((0,_dialogs_AddFolderDialog__WEBPACK_IMPORTED_MODULE_5__.AddFolderDialog)(workspaceId, folder.$id, "".concat(parent.path, "/").concat(parent.$id)));
                }
                /* .then(() => {
                    controller.InvalidateQuerie('space-folders')
                }) */
            },
            {
                type: 'Divider'
            },
            {
                title: 'Folder',
                icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_3__.WorkbenchIcons.AddFolder,
                onClick: function () {
                    _realmocean_ui__WEBPACK_IMPORTED_MODULE_4__.DynoDialog.Show((0,_dialogs_AddFolderDialog__WEBPACK_IMPORTED_MODULE_5__.AddFolderDialog)(workspaceId, folder.$id, "".concat(folder.path, "/").concat(folder.$id)));
                }
                /* .then(() => {
                    controller.InvalidateQuerie('space-folders')
                }) */
            },
            {
                title: 'More Applets',
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-activity-template-merged'),
                onClick: function () { return _dialogs_SelectOpaDialog__WEBPACK_IMPORTED_MODULE_2__.SelectOpaDialog.Show(folder.$id, 'folder', _Opas__WEBPACK_IMPORTED_MODULE_6__.opas).then(function (folder) {
                }); }
            },
        ])
            .icon(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icons.Add), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.MenuButton)()
            .model([
            {
                title: 'Space acions',
                type: 'Title'
            },
            {
                title: 'Rename',
                icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_3__.WorkbenchIcons.Edit,
                onClick: function () { return setMode('edit'); }
            },
            {
                title: 'Copy link',
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__link'),
                onClick: function () {
                    copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default()(location.href);
                    (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ShowToast)('Copied to clipboard');
                }
            },
            {
                title: 'Dublicate',
                icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_3__.WorkbenchIcons.Copy
            },
            /*  ...(is.array(folder_menu) ? folder_menu : []), */
            {
                type: 'Divider'
            },
            {
                title: 'Delete',
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__delete', '#bc4841'),
                color: '#bc4841',
                onClick: function () {
                    //  DynoDialog.Show(AppletDescriptionDialog(applet.id))
                }
            },
        ])
            .icon(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icons.Menu)).width(64).height(32).padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 5)
            .display('var(--show-folder-action-buttons)')
            .onClick(function (e) {
            e.preventDefault();
            e.stopPropagation();
        }))
            .onClick(function () {
            onClickCallback();
        })
            // .borderLeft(isOpen ? 'solid 1px #7B68EE' : '')
            .background({ default: selected ? '#F5F3FD' : '', hover: '#f6f7f9' })
            .allHeight(32)
            .width('calc(100%)')
            // .padding('0 0 0 20px')
            .cursor('pointer')
            .variable('--show-folder-action-buttons', { default: 'none', hover: 'flex' })
            .variable("--display-caret", { default: 'none', hover: 'flex' })
            .variable("--display-icon", { default: 'flex', hover: 'none' })
        :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_WorkbenchIcons__WEBPACK_IMPORTED_MODULE_3__.WorkbenchIcons.CaretDown).transform(isOpen ? '' : 'rotate(-90deg)')).width().height().opacity('var(--show-expand-icon)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(isOpen ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-cu3-folder-sidebar_opened', '#7C828D') : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-cu3-folder-sidebar', '#7C828D')).foregroundColor('#7C828D'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TextField)().value(newName)
                .fontFamily('Poppins,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif')
                .fontSize(13)
                .height('100%')
                .padding(0)
                .border('dashed 1px #AAA')
                .shadow({ focus: 'none' })
                .onBlur(function () {
                /*   if (newName !== name) {
                      setName(newName);
                      updateFolder(folder.id, {
                          name: newName
                      }, {
                          onSuccess: () => {
                              ShowSuccessToast('We successfully rename folder', 'Undo', () => {
                                  updateFolder(folder.id, {
                                      name: name
                                  }, {
                                      onSuccess: () => {
                                        
                                          setName(name);
                                          ShowSuccessToast('We successfully undo folder applet')
                                      }
                                  })
                              })
                          }
                      })
                  } */
                setMode('readonly');
            })
                .onChange(function (e) { return setNewName(e); }))
                // .borderLeft(isOpen ? 'solid 1px #7B68EE' : '')
                .background({ default: selected ? '#F5F3FD' : '', hover: '#f6f7f9' })
                .height(32)
                .width('calc(100%)')
                .padding('0 0 0 20px')
                .cursor('pointer'));
}); };


/***/ }),

/***/ "./src/views/WorkbenchIcons.tsx":
/*!**************************************!*\
  !*** ./src/views/WorkbenchIcons.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkbenchIcons: () => (/* binding */ WorkbenchIcons)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var WorkbenchIcons;
(function (WorkbenchIcons) {
    WorkbenchIcons.FormIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 16 16", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M5.529 1.529A.667.667 0 0 1 6 1.333h2.667c.176 0 .346.07.471.196L9.61 2H11c.92 0 1.667.746 1.667 1.667V5l-1.334 1.333V3.667A.333.333 0 0 0 11 3.333H9.333a.667.667 0 0 1-.471-.195l-.471-.471H6.276l-.471.471a.667.667 0 0 1-.472.195H3.667a.333.333 0 0 0-.334.334V13c0 .184.15.333.334.333H11a.333.333 0 0 0 .333-.333v-2l1.334-1.333V13c0 .92-.746 1.667-1.667 1.667H3.667C2.747 14.667 2 13.92 2 13V3.667C2 2.747 2.746 2 3.667 2h1.39l.472-.471z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { stroke: "transparent", d: "M9.333 6h-4a.667.667 0 0 1 0-1.333h4a.667.667 0 1 1 0 1.333zM8 8.667H5.333a.667.667 0 0 1 0-1.334H8a.667.667 0 0 1 0 1.334zm1.138 3.138 5.333-5.334a.667.667 0 1 0-.942-.942l-5.334 5.333a.667.667 0 1 0 .943.943z" }))); };
    WorkbenchIcons.CollapseRightIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "24", height: "24", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M13.435 8.464a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.829 2.829a1 1 0 1 1-1.414-1.415L14.556 13H3a1 1 0 1 1 0-2h11.556l-1.121-1.121a1 1 0 0 1 0-1.415z", "clip-rule": "evenodd" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M21 4.5a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0v-13a1 1 0 0 1 1-1z", fill: "currentColor" }))); };
    WorkbenchIcons.CollapseLeftIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "100%", height: "100%", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M10.565 15.536a1 1 0 0 1-1.414 0l-2.829-2.829a1 1 0 0 1 0-1.414l2.829-2.829a1 1 0 0 1 1.414 1.415L9.444 11H21a1 1 0 1 1 0 2H9.444l1.121 1.121a1 1 0 0 1 0 1.415Z", "clip-rule": "evenodd" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M3 19.5a1 1 0 0 1-1-1v-13a1 1 0 1 1 2 0v13a1 1 0 0 1-1 1Z", fill: "currentColor" }))); };
    var HomeIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 16 16", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M8.407 2.06a.6.6 0 0 0-.814 0l-6.5 6a.6.6 0 1 0 .814.881l.493-.455V13A1.6 1.6 0 0 0 4 14.6h3.1V11a.4.4 0 0 1 .4-.4h1c.22 0 .4.18.4.4v3.6H12a1.6 1.6 0 0 0 1.6-1.6V8.486l.493.455a.6.6 0 0 0 .814-.881l-6.5-6zM12.4 7.378 8 3.317 3.6 7.378V13a.4.4 0 0 0 .4.4h1.9V11a1.6 1.6 0 0 1 1.6-1.6h1a1.6 1.6 0 0 1 1.6 1.6v2.4H12a.4.4 0 0 0 .4-.4V7.378z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.DocIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M6 5a1 1 0 0 1 1-1h6.172a1 1 0 0 1 .707.293l3.828 3.828a1 1 0 0 1 .293.707V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5zm1-3a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 13.172 2H7zm2 6a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2H9zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9zm-1 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.DocIcon2 = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "25", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M6 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4.286v-4.286c0-.789.64-1.428 1.428-1.428H16V12h-4v4l4-4V6a2 2 0 0 0-2-2H6Z" })))); };
    var DraftIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M19 5H5v3h14V5zm.983 4.742A2 2 0 0 0 21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3a2 2 0 0 0 1.016 1.742A2.18 2.18 0 0 0 4 10v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9c0-.087-.006-.174-.017-.258zM18 10H6v9h12v-9zm-9 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.WhiteboardIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M18.142 4.291a3 3 0 0 1 4.242 4.243l-4.455 4.455a2 2 0 0 1-1.158.57l-1.624.209a2 2 0 0 1-2.24-2.24l.21-1.623a2 2 0 0 1 .57-1.159l4.455-4.455Zm2.828 1.414a1 1 0 0 0-1.414 0L15.1 10.16l-.21 1.624 1.624-.21L20.97 7.12a1 1 0 0 0 0-1.415Zm-16.4-.12a1.25 1.25 0 0 0-1.25 1.25v2.522l1.585-1.409a3.097 3.097 0 0 1 4.114 4.63l-.903.803a1.059 1.059 0 1 0 1.452 1.54l1.044-1.044a1 1 0 0 1 1.415 1.414l-1.045 1.044a3.059 3.059 0 1 1-4.195-4.45l.904-.802a1.097 1.097 0 1 0-1.458-1.64l-2.914 2.59v5.301c0 .69.56 1.25 1.25 1.25h13.5c.69 0 1.25-.56 1.25-1.25V14.21a1 1 0 0 1 2 0v3.125a3.25 3.25 0 0 1-3.25 3.25H4.57a3.25 3.25 0 0 1-3.25-3.25V11.59a.72.72 0 0 1 0-.01V6.835a3.25 3.25 0 0 1 3.25-3.25h9.023a1 1 0 1 1 0 2H4.57Z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.AddFolder = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M4 18c-1.105 0-2-.894-2-1.999V5.998C2 4.891 2.898 4 4 4h4.609a2 2 0 0 1 1.357.53l1.925 1.778H17a2 2 0 0 1 2 2v1.846a1 1 0 1 1-2 0V8.308h-5.109a2 2 0 0 1-1.357-.53L8.61 6H4v10h7v2H4zm7 0a1 1 0 1 0 0-2v2zm7-5a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.FolderClosed = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 16 16", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M15 5.5c0-.84-.672-1.5-1.5-1.5H7.707L5.854 2.146A.5.5 0 0 0 5.5 2h-3A1.5 1.5 0 0 0 1 3.5v8A1.5 1.5 0 0 0 2.5 13h11c.83 0 1.5-.67 1.5-1.5v-6z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.Edit = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M16.503 4.413a1.41 1.41 0 0 1 1.994 0l1.092 1.092c.55.55.55 1.443 0 1.994L18.5 8.588l-3.086-3.086 1.089-1.089zM14 6.916l3.086 3.086-9.54 9.54-3.43.343.343-3.429L14 6.916zm5.911-3.917a3.41 3.41 0 0 0-4.822 0L3.045 15.042a2 2 0 0 0-.576 1.215l-.464 4.645a1 1 0 0 0 1.094 1.095l4.645-.465a2 2 0 0 0 1.215-.576L21.003 8.913a3.41 3.41 0 0 0 0-4.822L19.91 2.999z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.Link = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M11.843 3.743a5.95 5.95 0 1 1 8.414 8.414l-2.55 2.55a1 1 0 0 1-1.414-1.414l2.55-2.55a3.95 3.95 0 1 0-5.586-5.586l-2.55 2.55a1 1 0 1 1-1.414-1.414l2.55-2.55zm2.45 4.55a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6zm-6.586 1a1 1 0 0 1 0 1.414l-2.55 2.55a3.95 3.95 0 0 0 5.586 5.586l2.55-2.55a1 1 0 1 1 1.414 1.414l-2.55 2.55a5.95 5.95 0 1 1-8.414-8.414l2.55-2.55a1 1 0 0 1 1.414 0z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.Copy = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M6 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6zM2 6a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6zm14 2h2a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4h2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2V8z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.CaretDown = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 320 512", style: { color: 'gray' }, width: "18", height: "18", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" }))); };
    WorkbenchIcons.CaretRight = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 5 6", style: { color: 'gray' }, width: "18", height: "18", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M.5 5.596V.404c0-.36.478-.54.758-.285L4.12 2.714a.378.378 0 0 1 0 .572L1.258 5.88C.978 6.135.5 5.955.5 5.596z" }))); };
    WorkbenchIcons.Gantt = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 16 16", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", stroke: "transparent", d: "M1.333 3.333c0-.368.299-.666.667-.666h4A.667.667 0 1 1 6 4H2a.667.667 0 0 1-.667-.667zm0 3.334C1.333 6.298 1.632 6 2 6h9.333a.667.667 0 1 1 0 1.333H2a.667.667 0 0 1-.667-.666zm0 3.333c0-.368.299-.667.667-.667h6.667a.667.667 0 0 1 0 1.334H2A.667.667 0 0 1 1.333 10zm0 3.333c0-.368.299-.666.667-.666h12A.667.667 0 1 1 14 14H2a.667.667 0 0 1-.667-.667z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.KanbanBoard = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 16 16", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", stroke: "transparent", d: "M2 4.078C2 2.967 2.86 2 4 2h8c1.14 0 2 .967 2 2.078v6.393c0 1.111-.86 2.078-2 2.078H8.667v.04c0 1.11-.86 2.078-2 2.078H4c-1.14 0-2-.967-2-2.079v-8.51zm5.333-.745H4c-.333 0-.667.298-.667.745v8.51c0 .448.334.745.667.745h2.667c.332 0 .666-.297.666-.745V3.333zm1.334 0v7.883H12c.333 0 .667-.297.667-.745V4.078c0-.447-.334-.745-.667-.745H8.667z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.ObjectiveIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "gray", className: "icon flat-line", "data-name": "Flat Line", viewBox: "0 0 24 24" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "#2CA9BC", strokeWidth: "2", d: "M18 3L16 5 16 8 19 8 21 6 19 5 18 3z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "none", stroke: "gray", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 12l4-4m2-5l-2 2v3h3l2-2-2-1z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "none", stroke: "gray", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21 12a9 9 0 11-9-9", "data-name": "primary" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "none", stroke: "gray", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M16 12a4 4 0 11-4-4", "data-name": "primary" }))); };
    WorkbenchIcons.DashboardIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "none", viewBox: "0 0 24 24" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { stroke: "gray", strokeLinecap: "round", strokeWidth: "2", d: "M13 12a1 1 0 011-1h5a1 1 0 011 1v7a1 1 0 01-1 1h-5a1 1 0 01-1-1v-7zM4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 17a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zM13 5a1 1 0 011-1h5a1 1 0 011 1v2a1 1 0 01-1 1h-5a1 1 0 01-1-1V5z" }))); };
    WorkbenchIcons.BPMNIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", version: "1.1", viewBox: "0 0 32 32", style: { color: 'gray' } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M29 21h-3v-3.427c0-.827-.673-1.5-1.5-1.5h-.839a.972.972 0 00-.45-.467l-5.87-2.935a2.975 2.975 0 00-.842-.259V11H20a3 3 0 003-3V7a3 3 0 00-3-3h-8a3 3 0 00-3 3v1a3 3 0 003 3h3.5v1.412a2.985 2.985 0 00-.842.259l-5.87 2.935a.976.976 0 00-.45.467H7.5c-.827 0-1.5.673-1.5 1.5V21H3a3 3 0 00-3 3v1a3 3 0 003 3h7a3 3 0 003-3v-1a3 3 0 00-3-3H7v-3.427a.5.5 0 01.5-.5h.924a.98.98 0 00.365.322l5.87 2.935a3 3 0 002.684 0l5.87-2.935a.972.972 0 00.365-.322h.922a.5.5 0 01.5.5V21h-3a3 3 0 00-3 3v1a3 3 0 003 3h7a3 3 0 003-3v-1a3 3 0 00-3-3zM10 8V7c0-1.103.897-2 2-2h8c1.103 0 2 .897 2 2v1c0 1.103-.897 2-2 2h-8c-1.103 0-2-.897-2-2zm2 16v1c0 1.103-.897 2-2 2H3c-1.103 0-2-.897-2-2v-1c0-1.103.897-2 2-2h7c1.103 0 2 .897 2 2zm4.894-4.565a2.009 2.009 0 01-1.788 0L9.236 16.5l5.87-2.935c.276-.138.586-.211.894-.211s.618.073.894.211l5.87 2.935-5.87 2.935zM31 25c0 1.103-.897 2-2 2h-7c-1.103 0-2-.897-2-2v-1c0-1.103.897-2 2-2h7c1.103 0 2 .897 2 2v1z" }))); };
    WorkbenchIcons.SpreadsheetIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", version: "1.1", viewBox: "0 0 475.636 475.636", style: { color: 'black' } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M200.811 400.719V355.39h107.377v22.353l14.315-14.89 7.176-7.463 6.845-7.119-6.694-7.201h-7.326v-7.88l-14.315-15.398v23.278H200.811v-47.011h85.319l-13.308-14.313H200.81v-49.632h58.695c4.557-7.294 11.845-12.373 20.147-14.315h-78.836v-53.686h107.378v52.755h14.312v-52.755h110.148v52.755h14.312V32.873c0-9.208-7.49-16.698-16.692-16.698H16.697C7.485 16.175 0 23.671 0 32.873v365.861c0 5.646 2.839 10.637 7.155 13.663v2.633h5.988c1.149.253 2.331.398 3.554.398h255.252l14.148-14.709h-85.286zM322.503 30.495h107.759a2.398 2.398 0 012.395 2.389v48.121H322.503v-50.51zm0 64.821h110.153v52.494H322.503V95.316zM200.811 30.495h107.377v50.509H200.811V30.495zm0 64.821h107.377v52.494H200.811V95.316zM66.005 400.719H15.458c-.673-.415-1.149-1.13-1.149-1.985V355.39h51.697v45.329zm0-59.65H14.309v-47.004h51.697v47.004zm0-61.314H14.309v-49.628h51.697v49.628zm0-63.945H14.309v-53.686h51.697v53.686zm0-68H14.309V95.316h51.697v52.494zm120.488 252.909H80.318V355.39h106.175v45.329zm0-59.65H80.318v-47.004h106.175v47.004zm0-61.314H80.318v-49.628h106.175v49.628zm0-63.945H80.318v-53.686h106.175v53.686zm0-68H80.318V95.316h106.175v52.494zm0-66.811H80.318v-50.51h106.175v50.51zm263.436 198.575v-19.376H324.007l74.103 79.69c4.637 4.988 4.562 12.748-.141 17.664l-73.271 76.201h125.231v-11.697c0-7.094 5.757-12.862 12.849-12.862s12.858 5.769 12.858 12.862v24.556c0 7.087-5.767 12.849-12.858 12.849h-168.28a12.824 12.824 0 01-11.823-7.814c-2.021-4.755-1.031-10.231 2.56-13.953l85.753-89.193-85.907-92.399a12.864 12.864 0 01-2.363-13.895 12.846 12.846 0 0111.781-7.721h168.28c7.092 0 12.858 5.768 12.858 12.854v32.23c0 7.097-5.767 12.858-12.858 12.858s-12.85-5.762-12.85-12.854z" }))); };
    WorkbenchIcons.Download = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M12 3a1 1 0 0 1 1 1v10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 14.586V4a1 1 0 0 1 1-1zM3 20a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.Import = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M8.5 3A3.5 3.5 0 0 0 5 6.5v1.056a1 1 0 0 0 2 0V6.5A1.5 1.5 0 0 1 8.5 5h9A1.5 1.5 0 0 1 19 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 7 17.5v-1.056a1 1 0 0 0-2 0V17.5A3.5 3.5 0 0 0 8.5 21h9a3.5 3.5 0 0 0 3.5-3.5v-11A3.5 3.5 0 0 0 17.5 3h-9z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M12.707 8.293a1 1 0 1 0-1.414 1.414L12.586 11H3a1 1 0 1 0 0 2h9.586l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3z" }))); };
    WorkbenchIcons.TableIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4 10a1.5 1.5 0 0 1 1.5-1.5H8a1.5 1.5 0 1 1 0 3H5.5A1.5 1.5 0 0 1 4 10ZM10.5 10A1.5 1.5 0 0 1 12 8.5h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5ZM4 14.5A1.5 1.5 0 0 1 5.5 13H8a1.5 1.5 0 0 1 0 3H5.5A1.5 1.5 0 0 1 4 14.5ZM10.5 14.5A1.5 1.5 0 0 1 12 13h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5ZM4 5.5A1.5 1.5 0 0 1 5.5 4H8a1.5 1.5 0 1 1 0 3H5.5A1.5 1.5 0 0 1 4 5.5ZM10.5 5.5A1.5 1.5 0 0 1 12 4h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5Z" })))); };
    WorkbenchIcons.GridIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4 10a1.5 1.5 0 0 1 1.5-1.5H8a1.5 1.5 0 1 1 0 3H5.5A1.5 1.5 0 0 1 4 10ZM10.5 10A1.5 1.5 0 0 1 12 8.5h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5ZM4 14.5A1.5 1.5 0 0 1 5.5 13H8a1.5 1.5 0 0 1 0 3H5.5A1.5 1.5 0 0 1 4 14.5ZM10.5 14.5A1.5 1.5 0 0 1 12 13h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5ZM4 5.5A1.5 1.5 0 0 1 5.5 4H8a1.5 1.5 0 1 1 0 3H5.5A1.5 1.5 0 0 1 4 5.5ZM10.5 5.5A1.5 1.5 0 0 1 12 4h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5Z" })))); };
    WorkbenchIcons.BoardIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4 5.5a1.5 1.5 0 1 1 3 0v5a1.5 1.5 0 0 1-3 0v-5ZM8.5 5.5a1.5 1.5 0 1 1 3 0v8a1.5 1.5 0 0 1-3 0v-8ZM14.5 4A1.5 1.5 0 0 0 13 5.5v6a1.5 1.5 0 0 0 3 0v-6A1.5 1.5 0 0 0 14.5 4Z" })))); };
    WorkbenchIcons.ListIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M5.496 4C4.67 4 4 4.672 4 5.5S4.67 7 5.496 7h9.008C15.33 7 16 6.328 16 5.5S15.33 4 14.504 4H5.496ZM8.488 8.5c-.826 0-1.496.672-1.496 1.5s.67 1.5 1.496 1.5h6.016C15.33 11.5 16 10.828 16 10s-.67-1.5-1.496-1.5H8.488ZM9.984 14.5c0-.828.67-1.5 1.497-1.5h3.023c.826 0 1.496.672 1.496 1.5s-.67 1.5-1.496 1.5H11.48a1.498 1.498 0 0 1-1.497-1.5Z" })))); };
    WorkbenchIcons.TimelineIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M9 5.5A1.5 1.5 0 0 1 10.5 4h4a1.5 1.5 0 0 1 0 3h-4A1.5 1.5 0 0 1 9 5.5ZM4 14.5A1.5 1.5 0 0 1 5.5 13h4a1.5 1.5 0 0 1 0 3h-4A1.5 1.5 0 0 1 4 14.5ZM5.5 8.5a1.5 1.5 0 1 0 0 3h9a1.5 1.5 0 0 0 0-3h-9Z" })))); };
    WorkbenchIcons.CalendarIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M12.8 5.6a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0ZM4 10a1.6 1.6 0 1 1 3.2 0A1.6 1.6 0 0 1 4 10ZM4 14.4a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0ZM10 8.4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM8.4 14.4a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0ZM14.4 8.4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM10 4a1.6 1.6 0 1 0 0 3.2A1.6 1.6 0 0 0 10 4Z" })))); };
    WorkbenchIcons.ReportIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M15.65 5a1.65 1.65 0 0 0-1.613 2l-2.812 3.4c-.057 0-.113.005-.169.011L9.893 9.206a1.65 1.65 0 1 0-3.26.174l-1.875 1.923a1.65 1.65 0 1 0 1.51 1.317l1.875-1.924a1.737 1.737 0 0 0 .389-.02l1.087 1.126a1.65 1.65 0 1 0 3.217-.21l2.723-3.294.091.002a1.65 1.65 0 0 0 0-3.3Z" })))); };
    WorkbenchIcons.FeedIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M16 12V9c0-2.047.466-3.163 1.08-3.665.426-.35.92-.783.92-1.335a1 1 0 0 0-1-1H9a4 4 0 0 0-4 4v3c0 2.047-.466 3.163-1.08 3.665-.426.35-.92.783-.92 1.335a1 1 0 0 0 1 1h8a4 4 0 0 0 4-4ZM7 7a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" })))); };
    WorkbenchIcons.MapIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M7.814 3.67h.003c.135 0 .27.03.394.093l3.945 1.972 3.412-1.95a.875.875 0 0 1 1.309.76v8.727a.875.875 0 0 1-.44.76l-3.805 2.174a.87.87 0 0 1-.862.02l-3.922-1.962-3.412 1.95a.875.875 0 0 1-1.309-.76V6.727c0-.314.168-.604.44-.76L7.32 3.825a.87.87 0 0 1 .494-.153Zm3.495 3.598v6.77l-2.62-1.31v-6.77l2.62 1.31Z" })))); };
    WorkbenchIcons.DocumentIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M6 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4.286v-4.286c0-.789.64-1.428 1.428-1.428H16V12h-4v4l4-4V6a2 2 0 0 0-2-2H6Z" })))); };
    WorkbenchIcons.WhiteboardIcon1 = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4.56 6.66a1.5 1.5 0 0 1 2.122-2.12l1.06 1.06a1.5 1.5 0 1 1-2.12 2.121L4.56 6.661ZM13.339 4.56a1.5 1.5 0 1 1 2.121 2.122l-1.06 1.06a1.5 1.5 0 1 1-2.122-2.12L13.34 4.56ZM8.5 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM7.76 12.26a1.5 1.5 0 0 0-2.12 0l-1.061 1.061A1.5 1.5 0 1 0 6.7 15.443l1.06-1.061a1.5 1.5 0 0 0 0-2.121ZM12.26 12.24a1.5 1.5 0 0 0 0 2.12l1.061 1.061a1.5 1.5 0 1 0 2.122-2.121l-1.061-1.06a1.5 1.5 0 0 0-2.121 0Z" })))); };
    WorkbenchIcons.FormIcon1 = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M16 5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v4.25a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V5.5ZM15 14.5a1.5 1.5 0 0 0-1.5-1.5h-7a1.5 1.5 0 0 0 0 3h7a1.5 1.5 0 0 0 1.5-1.5Z" })))); };
})(WorkbenchIcons || (WorkbenchIcons = {}));


/***/ }),

/***/ "./src/views/WorkspaceItem.ts":
/*!************************************!*\
  !*** ./src/views/WorkspaceItem.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkspaceItem: () => (/* binding */ WorkspaceItem)
/* harmony export */ });
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WorkspaceName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorkspaceName */ "./src/views/WorkspaceName.ts");
/* harmony import */ var _FolderItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FolderItem */ "./src/views/FolderItem.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _localStorageState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localStorageState */ "./src/views/localStorageState.tsx");






function WorkspaceItem(space) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
        var workspaceId = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useOptions)().workspaceId;
        var listId = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getListId)();
        var documentId = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getDocumentId)();
        var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useGetDocument)({
            projectId: workspaceId,
            databaseId: 'work_management',
            collectionId: 'wm_lists',
            documentId: listId
        }, { enabled: listId != null }), list = _a.document, isListLoading = _a.isLoading;
        var _b = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useGetDocument)({
            projectId: workspaceId,
            databaseId: 'work_management',
            collectionId: 'wm_documents',
            documentId: documentId
        }, { enabled: documentId != null }), document = _b.document, isDocumentLoading = _b.isLoading;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
            var expandedFromUrl = (list === null || list === void 0 ? void 0 : list.path.indexOf(space.$id)) > -1 || (document === null || document === void 0 ? void 0 : document.path.indexOf(space.$id)) > -1;
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
                if (expandedFromUrl) {
                    setExpanded(true);
                }
            }, []);
            var _a = (0,_localStorageState__WEBPACK_IMPORTED_MODULE_5__.useLocalStorageState)(space.$id, (list === null || list === void 0 ? void 0 : list.path.indexOf(space.$id)) > -1 || (document === null || document === void 0 ? void 0 : document.path.indexOf(space.$id)) > -1), expanded = _a[0], setExpanded = _a[1];
            var _b = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useListDocuments)(workspaceId, 'work_management', 'wm_folders', [
                _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Query.equal('parent', space.$id)
            ]), folders = _b.documents, isLoading = _b.isLoading;
            //const { documents: applets, isLoading: isAppletsLoading } = useListDocuments(space.$id, 'work_management', 'wm_lists');
            return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })((0,_WorkspaceName__WEBPACK_IMPORTED_MODULE_2__.WorkspaceName)(space, expanded, (isLoading && expanded), function () {
                setExpanded(!expanded);
            }), !expanded ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)() :
                (isLoading) ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)() :
                    _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ForEach)(folders)(function (folder) {
                        return (0,_FolderItem__WEBPACK_IMPORTED_MODULE_3__.FolderItem)(space, folder);
                    })).paddingLeft('20px'))
                .height()
                .allWidth('calc(100%)'));
        }));
    }));
}


/***/ }),

/***/ "./src/views/WorkspaceName.ts":
/*!************************************!*\
  !*** ./src/views/WorkspaceName.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkspaceName: () => (/* binding */ WorkspaceName)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dialogs_AddFolderDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialogs/AddFolderDialog */ "./src/dialogs/AddFolderDialog.ts");
/* harmony import */ var _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorkbenchIcons */ "./src/views/WorkbenchIcons.tsx");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @realmocean/ui */ "@realmocean/ui");
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_realmocean_ui__WEBPACK_IMPORTED_MODULE_5__);



//import { FontIcon, FontIcons } from "./FontIcons";



function WorkspaceName(space, isOpen, isLoading, onClickCallback) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
        //  const { workspace_id } = useParams();
        var selected = false;
        var workspaceId = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useOptions)().workspaceId;
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)('readonly'), mode = _a[0], setMode = _a[1];
        var _b = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(space === null || space === void 0 ? void 0 : space.name), name = _b[0], setName = _b[1];
        var _c = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(space === null || space === void 0 ? void 0 : space.name), newName = _c[0], setNewName = _c[1];
        var createDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_3__.useCreateDocument)(workspaceId, 'work_management', 'applets').createDocument;
        return (mode === 'readonly' ?
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 1 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)(isLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Loader)().size(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.LoaderSizes.XS) :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_WorkbenchIcons__WEBPACK_IMPORTED_MODULE_2__.WorkbenchIcons.CaretDown).transform(isOpen ? '' : 'rotate(-90deg)')).width().height()
                .display("var(--display-caret)"), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIWidget)("com.tuvalsoft.widget.icons")
                .config({
                selectedIcon: 'bookmark',
                color: 'gray',
                width: 18,
                height: 18,
                padding: 1
            }))
                //.background('#FCE8E8')
                .width().height()
                .cornerRadius(5)
                .display('var(--display-icon)')).width(20).height(20), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Heading)(space.name).h6().ellipsis(true)
                .fontSize(14).fontWeight('400')
                .fontFamily('-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji')
                .foregroundColor(selected ? '#7b68ee' : '#151719'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTrailing })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.MenuButton)()
                .model([
                {
                    title: 'Add to space',
                    type: 'Title'
                },
                {
                    title: 'Table',
                    icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_2__.WorkbenchIcons.TableIcon,
                    onClick: function () {
                        createDocument({
                            data: {}
                        }, function () { return alert('created'); });
                        //DynoDialog.Show(AddFolderDialog(space.$id))
                    }
                    /* .then(() => {
                        controller.InvalidateQuerie('space-folders')
                    }) */
                },
                {
                    title: 'Grid',
                    icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_2__.WorkbenchIcons.GridIcon,
                    onClick: function () {
                        createDocument({
                            data: {}
                        }, function () { return alert('created'); });
                    }
                    /* .then(() => {
                        controller.InvalidateQuerie('space-folders')
                    }) */
                },
                {
                    title: 'Board',
                    icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_2__.WorkbenchIcons.BoardIcon,
                    onClick: function () {
                        createDocument({
                            data: {}
                        }, function () { return alert('created'); });
                    }
                    /* .then(() => {
                        controller.InvalidateQuerie('space-folders')
                    }) */
                },
                {
                    title: 'List',
                    icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_2__.WorkbenchIcons.ListIcon,
                    onClick: function () {
                        createDocument({
                            data: {}
                        }, function () { return alert('created'); });
                    }
                    /* .then(() => {
                        controller.InvalidateQuerie('space-folders')
                    }) */
                },
                {
                    title: 'Timeline',
                    icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_2__.WorkbenchIcons.TimelineIcon,
                    onClick: function () {
                        createDocument({
                            data: {}
                        }, function () { return alert('created'); });
                    }
                    /* .then(() => {
                        controller.InvalidateQuerie('space-folders')
                    }) */
                },
                {
                    title: 'Calendar',
                    icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_2__.WorkbenchIcons.CalendarIcon,
                    onClick: function () {
                        createDocument({
                            data: {}
                        }, function () { return alert('created'); });
                    }
                    /* .then(() => {
                        controller.InvalidateQuerie('space-folders')
                    }) */
                },
                {
                    title: 'Report',
                    icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_2__.WorkbenchIcons.ReportIcon,
                    onClick: function () {
                        createDocument({
                            data: {}
                        }, function () { return alert('created'); });
                    }
                    /* .then(() => {
                        controller.InvalidateQuerie('space-folders')
                    }) */
                },
                {
                    title: 'Feed',
                    icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_2__.WorkbenchIcons.FeedIcon,
                    onClick: function () {
                        createDocument({
                            data: {}
                        }, function () { return alert('created'); });
                    }
                    /* .then(() => {
                        controller.InvalidateQuerie('space-folders')
                    }) */
                },
                {
                    title: 'Map',
                    icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_2__.WorkbenchIcons.MapIcon,
                    onClick: function () {
                        createDocument({
                            data: {}
                        }, function () { return alert('created'); });
                    }
                    /* .then(() => {
                        controller.InvalidateQuerie('space-folders')
                    }) */
                },
                {
                    type: 'Divider'
                },
                {
                    title: 'Document',
                    icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_2__.WorkbenchIcons.DocumentIcon,
                    onClick: function () {
                        createDocument({
                            data: {}
                        }, function () { return alert('created'); });
                    }
                    /* .then(() => {
                        controller.InvalidateQuerie('space-folders')
                    }) */
                },
                {
                    title: 'Whiteboard',
                    icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_2__.WorkbenchIcons.WhiteboardIcon1,
                    onClick: function () {
                        // DynoDialog.Show(AddFolderDialog(space.$id))
                    }
                    /* .then(() => {
                        controller.InvalidateQuerie('space-folders')
                    }) */
                },
                {
                    title: 'Form',
                    icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_2__.WorkbenchIcons.FormIcon1,
                    onClick: function () {
                        // DynoDialog.Show(AddFolderDialog(space.$id))
                    }
                    /* .then(() => {
                        controller.InvalidateQuerie('space-folders')
                    }) */
                },
                {
                    type: 'Divider'
                },
                {
                    title: 'Folder',
                    icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_2__.WorkbenchIcons.AddFolder,
                    onClick: function () {
                        _realmocean_ui__WEBPACK_IMPORTED_MODULE_5__.DynoDialog.Show((0,_dialogs_AddFolderDialog__WEBPACK_IMPORTED_MODULE_1__.AddFolderDialog)(workspaceId, space.$id, "/".concat(space.$id)));
                    }
                    /* .then(() => {
                        controller.InvalidateQuerie('space-folders')
                    }) */
                },
                {
                    title: 'More Applets',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-activity-template-merged'),
                    /*  onClick: () => SelectOpaDialog.Show(team?.id, spaceItem.id, null, opas).then((applet) => {

                     }) */
                },
            ])
                .icon(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icons.Add), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.MenuButton)()
                .model([
                {
                    title: 'Space acions',
                    type: 'Title'
                },
                {
                    title: 'Rename',
                    icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_2__.WorkbenchIcons.Edit,
                    onClick: function () { return setMode('edit'); }
                },
                {
                    title: 'Copy link',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__link'),
                    onClick: function () {
                        copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default()(location.href);
                        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ShowToast)('Copied to clipboard');
                    }
                },
                {
                    title: 'Dublicate',
                    icon: _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_2__.WorkbenchIcons.Copy
                },
                {
                    type: 'Divider'
                },
                {
                    title: 'Delete',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__delete', '#bc4841'),
                    color: '#bc4841',
                    onClick: function () {
                        // DynoDialog.Show(AppletDescriptionDialog(applet.id))
                    }
                }
            ])
                .icon(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icons.Menu))
                .onClick(function (e) {
                e.preventDefault();
                e.stopPropagation();
            })
                .width(64).height(32).padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 5)
                .display('var(--show-space-action-buttons)'))
                .onClick(function () {
                onClickCallback();
            })
                // .borderLeft(selected ? 'solid 1px #7B68EE' : '')
                .background({ default: selected ? '#F5F3FD' : '', hover: '#f6f7f9' })
                .allHeight(32)
                .width('calc(100%)')
                //.padding('0 10px')
                .cursor('pointer')
                .variable('--show-space-action-buttons', { default: 'none', hover: 'flex' })
                .variable("--display-caret", { default: 'none', hover: 'flex' })
                .variable("--display-icon", { default: 'flex', hover: 'none' })
            :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_WorkbenchIcons__WEBPACK_IMPORTED_MODULE_2__.WorkbenchIcons.CaretDown).transform(isOpen ? '' : 'rotate(-90deg)')).width().height().opacity('var(--show-space-action-buttons)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)(
                //FontIcon(FontIcons['Clock'/* spaceItem?.icon */])
                ).background('#40BC86' /* spaceItem?.color */).padding(2).width(20).height(20).cornerRadius(5))
                    // .borderLeft(selected ? 'solid 1px #7B68EE' : '')
                    .background({ default: selected ? '#F5F3FD' : '', hover: '#f6f7f9' })
                    .allHeight(32)
                    .width('calc(100%)')
                    //.padding('0 10px')
                    .cursor('pointer'));
    }));
}


/***/ }),

/***/ "./src/views/WorkspaceTree.tsx":
/*!*************************************!*\
  !*** ./src/views/WorkspaceTree.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapseLeftIcon: () => (/* binding */ CollapseLeftIcon),
/* harmony export */   CollapseRightIcon: () => (/* binding */ CollapseRightIcon),
/* harmony export */   DocIcon: () => (/* binding */ DocIcon),
/* harmony export */   LeftSideMenuView: () => (/* binding */ LeftSideMenuView),
/* harmony export */   WhiteboardIcon: () => (/* binding */ WhiteboardIcon)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _WorkspaceItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WorkspaceItem */ "./src/views/WorkspaceItem.ts");



//import { FontIcon, FontIcons } from "./FontIcons";


var indexMe = 0;
function a(strings) {
    var expr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        expr[_i - 1] = arguments[_i];
    }
    var str = '';
    strings.forEach(function (string, i) {
        if (_tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.string(expr[i])) {
            str += string + '"' + (expr[i] || '') + '"';
        }
    });
    return str;
}
var CollapseRightIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "24", height: "24", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M13.435 8.464a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.829 2.829a1 1 0 1 1-1.414-1.415L14.556 13H3a1 1 0 1 1 0-2h11.556l-1.121-1.121a1 1 0 0 1 0-1.415z", "clip-rule": "evenodd" }),
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", { d: "M21 4.5a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0v-13a1 1 0 0 1 1-1z", fill: "currentColor" }))); };
var CollapseLeftIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "100%", height: "100%", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M10.565 15.536a1 1 0 0 1-1.414 0l-2.829-2.829a1 1 0 0 1 0-1.414l2.829-2.829a1 1 0 0 1 1.414 1.415L9.444 11H21a1 1 0 1 1 0 2H9.444l1.121 1.121a1 1 0 0 1 0 1.415Z", "clip-rule": "evenodd" }),
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", { d: "M3 19.5a1 1 0 0 1-1-1v-13a1 1 0 1 1 2 0v13a1 1 0 0 1-1 1Z", fill: "currentColor" }))); };
var HomeIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("svg", { viewBox: "0 0 16 16", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M8.407 2.06a.6.6 0 0 0-.814 0l-6.5 6a.6.6 0 1 0 .814.881l.493-.455V13A1.6 1.6 0 0 0 4 14.6h3.1V11a.4.4 0 0 1 .4-.4h1c.22 0 .4.18.4.4v3.6H12a1.6 1.6 0 0 0 1.6-1.6V8.486l.493.455a.6.6 0 0 0 .814-.881l-6.5-6zM12.4 7.378 8 3.317 3.6 7.378V13a.4.4 0 0 0 .4.4h1.9V11a1.6 1.6 0 0 1 1.6-1.6h1a1.6 1.6 0 0 1 1.6 1.6v2.4H12a.4.4 0 0 0 .4-.4V7.378z", "clip-rule": "evenodd" }))); };
var DocIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M6 5a1 1 0 0 1 1-1h6.172a1 1 0 0 1 .707.293l3.828 3.828a1 1 0 0 1 .293.707V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5zm1-3a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 13.172 2H7zm2 6a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2H9zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9zm-1 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1z", "clip-rule": "evenodd" }))); };
var DraftIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M19 5H5v3h14V5zm.983 4.742A2 2 0 0 0 21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3a2 2 0 0 0 1.016 1.742A2.18 2.18 0 0 0 4 10v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9c0-.087-.006-.174-.017-.258zM18 10H6v9h12v-9zm-9 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1z", "clip-rule": "evenodd" }))); };
var WhiteboardIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M18.142 4.291a3 3 0 0 1 4.242 4.243l-4.455 4.455a2 2 0 0 1-1.158.57l-1.624.209a2 2 0 0 1-2.24-2.24l.21-1.623a2 2 0 0 1 .57-1.159l4.455-4.455Zm2.828 1.414a1 1 0 0 0-1.414 0L15.1 10.16l-.21 1.624 1.624-.21L20.97 7.12a1 1 0 0 0 0-1.415Zm-16.4-.12a1.25 1.25 0 0 0-1.25 1.25v2.522l1.585-1.409a3.097 3.097 0 0 1 4.114 4.63l-.903.803a1.059 1.059 0 1 0 1.452 1.54l1.044-1.044a1 1 0 0 1 1.415 1.414l-1.045 1.044a3.059 3.059 0 1 1-4.195-4.45l.904-.802a1.097 1.097 0 1 0-1.458-1.64l-2.914 2.59v5.301c0 .69.56 1.25 1.25 1.25h13.5c.69 0 1.25-.56 1.25-1.25V14.21a1 1 0 0 1 2 0v3.125a3.25 3.25 0 0 1-3.25 3.25H4.57a3.25 3.25 0 0 1-3.25-3.25V11.59a.72.72 0 0 1 0-.01V6.835a3.25 3.25 0 0 1 3.25-3.25h9.023a1 1 0 1 1 0 2H4.57Z", "clip-rule": "evenodd" }))); };
var LeftSideMenuView = function (selectedItem) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useOptions)(), workspaceId = _a.workspaceId, _b = _a.showAllWorkspaces, showAllWorkspaces = _b === void 0 ? true : _b;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })(
        //Spaceses
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
            var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_3__.useListDocuments)(workspaceId, 'work_management', 'wm_spaces'), spaces = _a.documents, isLoading = _a.isLoading;
            return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })(isLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTop })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Spinner)()) :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })(
                //Spaceses
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
                    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ForEach)(spaces)(function (space) {
                        return (0,_WorkspaceItem__WEBPACK_IMPORTED_MODULE_4__.WorkspaceItem)(space);
                    })).paddingRight('0px'));
                    /*  SortableListView()
                         .items(spaces).renderItem((space: Models.Space) =>
                             WorkspaceItem(space)
                         ) */
                    //.onChange((items) => setSpaceItems(items))
                    // .width('100%')
                    //  )
                }))));
        }))
            // .fontFamily(fontFamily)
            // .allWidth(282)
            .background('white')
            .borderRight('1px solid #e9ebf0')
            .transition('width .2s ease-in-out')
            .variable('--show-expand-icon', { default: '0', hover: '1' })
        // .variable('--display-caret', { default: 'none', hover: 'flex' })
        // .variable('--display-icon', { default: 'flex', hover: 'none' })
        );
    }));
};


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
/* harmony export */   RatingWidget: () => (/* binding */ RatingWidget)
/* harmony export */ });
/* harmony import */ var _AppController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppController */ "./src/AppController.ts");
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/ui */ "@realmocean/ui");
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dialogs_AddSpaceDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogs/AddSpaceDialog */ "./src/dialogs/AddSpaceDialog.ts");
/* harmony import */ var _dialogs_AddFolderDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialogs/AddFolderDialog */ "./src/dialogs/AddFolderDialog.ts");
/* harmony import */ var _dialogs_AddListDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialogs/AddListDialog */ "./src/dialogs/AddListDialog.ts");
/* harmony import */ var _dialogs_AddDocumentDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialogs/AddDocumentDialog */ "./src/dialogs/AddDocumentDialog.ts");
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
_realmocean_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveFolder', _dialogs_AddFolderDialog__WEBPACK_IMPORTED_MODULE_3__.SaveFolderAction);
_realmocean_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveList', _dialogs_AddListDialog__WEBPACK_IMPORTED_MODULE_4__.SaveListAction);
_realmocean_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveDocument', _dialogs_AddDocumentDialog__WEBPACK_IMPORTED_MODULE_5__.SaveDocumentAction);

})();

/******/ })()
;
//# sourceMappingURL=index.js.map
                    tuval$core.ModuleLoader.FireModuleLoadedEvent('com.celmino.widget.workspace-tree', tuval$core['__APPS__']['com.celmino.widget.workspace-tree']);
                    
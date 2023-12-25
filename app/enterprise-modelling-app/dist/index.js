
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

/***/ "./src/app/Routes.ts":
/*!***************************!*\
  !*** ./src/app/Routes.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Routes: () => (/* binding */ Routes)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_HomeController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/HomeController */ "./src/app/controllers/HomeController.ts");
/* harmony import */ var _controllers_LayoutController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/LayoutController */ "./src/app/controllers/LayoutController.ts");
/* harmony import */ var _controllers_NotificationsController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/NotificationsController */ "./src/app/controllers/NotificationsController.ts");
/* harmony import */ var _controllers_WorkspaceLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/WorkspaceLayout */ "./src/app/controllers/WorkspaceLayout.tsx");
/* harmony import */ var _controllers_ModelTypesController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/ModelTypesController */ "./src/app/controllers/ModelTypesController.ts");
/* harmony import */ var _controllers_ObjectTypesController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controllers/ObjectTypesController */ "./src/app/controllers/ObjectTypesController.ts");







var Routes = function () {
    var regex = /\/app\/com\.([A-Za-z]+)\.([A-Za-z]+)\.([A-Za-z]+)/i;
    // Alternative syntax using RegExp constructor
    // const regex = new RegExp('(?:^\\/app\\/+|\\G(?!^)\\.)\\K\\w+', 'g')
    var str = window.location.href;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoutes)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('/', _controllers_LayoutController__WEBPACK_IMPORTED_MODULE_2__.LayoutController).children((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('', _controllers_HomeController__WEBPACK_IMPORTED_MODULE_1__.HomeController).isIndex(true), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('home', _controllers_HomeController__WEBPACK_IMPORTED_MODULE_1__.HomeController).children((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)(':project_id(\d+)?', _controllers_HomeController__WEBPACK_IMPORTED_MODULE_1__.NullController)), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('notifications', _controllers_NotificationsController__WEBPACK_IMPORTED_MODULE_3__.NotificationsController), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('workspace/:workspaceId', _controllers_WorkspaceLayout__WEBPACK_IMPORTED_MODULE_4__.WorkspaceLayoutController).children((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('model_types', _controllers_ModelTypesController__WEBPACK_IMPORTED_MODULE_5__.ModelTypesController), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('object_types', _controllers_ObjectTypesController__WEBPACK_IMPORTED_MODULE_6__.ObjectTypesController))))));
};


/***/ }),

/***/ "./src/app/controllers/AppController.tsx":
/*!***********************************************!*\
  !*** ./src/app/controllers/AppController.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyTestController: () => (/* binding */ MyTestController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Routes */ "./src/app/Routes.ts");
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
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useParams)(), space_id = _a.space_id, folder_id = _a.folder_id, item_id = _a.item_id;
        return ((0,_Routes__WEBPACK_IMPORTED_MODULE_1__.Routes)());
    };
    return MyTestController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/app/controllers/HomeController.ts":
/*!***********************************************!*\
  !*** ./src/app/controllers/HomeController.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeController: () => (/* binding */ HomeController),
/* harmony export */   NullController: () => (/* binding */ NullController)
/* harmony export */ });
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/antd */ "@realmocean/antd");
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__);
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



var NullController = /** @class */ (function (_super) {
    __extends(NullController, _super);
    function NullController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NullController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('dfds'));
    };
    return NullController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIFormController));

var HomeController = /** @class */ (function (_super) {
    __extends(HomeController, _super);
    function HomeController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeController.prototype.LoadView = function () {
        var workspaceId = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useParams)().workspaceId;
        var _a = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.useGetMe)('console'), me = _a.me, isLoading = _a.isLoading;
        var _b = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.useListTeams)('console'), teams = _b.teams, isTeamsLoading = _b.isLoading;
        var createTeam = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.useCreateTeam)('console').createTeam;
        var deleteTeam = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.useDeleteTeam)('console').deleteTeam;
        var createProject = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.useCreateProject)().createProject;
        var databases = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.useListDatabases)(workspaceId).databases;
        var createDatabase = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.useCreateDatabase)(workspaceId).createDatabase;
        var createCollection = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.useCreateCollection)(workspaceId).createCollection;
        var team = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.useGetCurrentTeam)().team;
        //  const { workspaces, isLoading: isWOrkspacesLoading } = useListWorkspaces();
        var _c = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useState)(''), orgName = _c[0], setOrgName = _c[1];
        var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)(
        // LeftSideMenuView('Home'),
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)(
        //Text(JSON.stringify(me)),
        isTeamsLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Spinner)() :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
                return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Input)().renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_0__.InputRenderer)
                    .onChange(function (e) {
                    setOrgName(e.target.value);
                }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)().label('Create Organization')
                    .renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_0__.ButtonRenderer)
                    .onClick(function () {
                    // alert(orgName)
                    createTeam({
                        name: orgName,
                        roles: ['admin']
                    });
                }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)().label('Delete Organization')
                    .renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_0__.ButtonRenderer)
                    .onClick(function () {
                    // alert(orgName)
                    deleteTeam({
                        teamId: teams[0].$id
                    });
                }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)().label('Create Workspace')
                    .renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_0__.ButtonRenderer)
                    .onClick(function () {
                    // alert(orgName)
                    createProject({
                        name: orgName,
                        teamId: team
                    });
                }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)().label('Create Database')
                    .renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_0__.ButtonRenderer)
                    .onClick(function () {
                    // alert(orgName)
                    createDatabase({
                        name: orgName,
                        category: 'applet',
                        enabled: true
                    });
                }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)().label('Navigate')
                    .renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_0__.ButtonRenderer)
                    .onClick(function () {
                    navigate('jasldlka');
                }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)().label('Create String Attribute')
                    .renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_0__.ButtonRenderer)
                    .onClick(function () {
                    createCollection({
                        databaseId: orgName,
                        name: 'test',
                        documentSecurity: false,
                        permissions: [
                            _celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.Permission.read(_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.Role.any()),
                            _celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.Permission.write(_celmino_sdk__WEBPACK_IMPORTED_MODULE_2__.Role.any())
                        ],
                        enabled: true
                    });
                }), isTeamsLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Spinner)() : _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ForEach)(teams)(function (team) {
                    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(team.name);
                })), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(JSON.stringify(databases))));
            }))));
    };
    return HomeController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIFormController));



/***/ }),

/***/ "./src/app/controllers/LayoutController.ts":
/*!*************************************************!*\
  !*** ./src/app/controllers/LayoutController.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutController: () => (/* binding */ LayoutController)
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

var LayoutController = /** @class */ (function (_super) {
    __extends(LayoutController, _super);
    function LayoutController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayoutController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRouteOutlet)().width("100%").height("100%")));
    };
    return LayoutController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIFormController));



/***/ }),

/***/ "./src/app/controllers/ModelTypesController.ts":
/*!*****************************************************!*\
  !*** ./src/app/controllers/ModelTypesController.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModelTypesController: () => (/* binding */ ModelTypesController)
/* harmony export */ });
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/antd */ "@realmocean/antd");
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__);
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



var ModelTypesController = /** @class */ (function (_super) {
    __extends(ModelTypesController, _super);
    function ModelTypesController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModelTypesController.prototype.LoadView = function () {
        var openDialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useDialogStack)().openDialog;
        var workspaceId = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useParams)().workspaceId;
        var documents = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useListDocuments)(workspaceId, 'enterprise_modelling', 'model_types', [
            _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Query.limit(10000)
        ]).documents;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Button)().label('Test').renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_1__.ButtonRenderer).onClick(function () {
            openDialog({
                title: 'Test',
                view: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('Test'),
            });
        }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIDataTable)()
            .columns([
            {
                field: 'Name',
                header: function (data) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('Name'))
                    .padding(10); }
            },
        ])
            .model(documents)).padding());
    };
    return ModelTypesController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIFormController));



/***/ }),

/***/ "./src/app/controllers/NotificationsController.ts":
/*!********************************************************!*\
  !*** ./src/app/controllers/NotificationsController.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsController: () => (/* binding */ NotificationsController)
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

var NotificationsController = /** @class */ (function (_super) {
    __extends(NotificationsController, _super);
    function NotificationsController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationsController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Notifications'));
    };
    return NotificationsController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIFormController));



/***/ }),

/***/ "./src/app/controllers/ObjectTypesController.ts":
/*!******************************************************!*\
  !*** ./src/app/controllers/ObjectTypesController.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectTypesController: () => (/* binding */ ObjectTypesController)
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

var ObjectTypesController = /** @class */ (function (_super) {
    __extends(ObjectTypesController, _super);
    function ObjectTypesController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectTypesController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Object types'));
    };
    return ObjectTypesController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIFormController));



/***/ }),

/***/ "./src/app/controllers/WorkspaceLayout.tsx":
/*!*************************************************!*\
  !*** ./src/app/controllers/WorkspaceLayout.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkspaceLayoutController: () => (/* binding */ WorkspaceLayoutController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_LeftSideMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/LeftSideMenu */ "./src/app/views/LeftSideMenu.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
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



var WorkspaceLayoutController = /** @class */ (function (_super) {
    __extends(WorkspaceLayoutController, _super);
    function WorkspaceLayoutController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorkspaceLayoutController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_views_LeftSideMenu__WEBPACK_IMPORTED_MODULE_1__.LeftSideMenuView)('Home'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ReactView)(react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.DialogStack, null, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRouteOutlet)().width("100%").height("100%").render())))));
    };
    return WorkspaceLayoutController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIFormController));



/***/ }),

/***/ "./src/app/dialogs/AddAppletDialog.ts":
/*!********************************************!*\
  !*** ./src/app/dialogs/AddAppletDialog.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddAppletDialog: () => (/* binding */ AddAppletDialog),
/* harmony export */   SaveAppletAction: () => (/* binding */ SaveAppletAction)
/* harmony export */ });
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);


var SaveAppletAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var label = action.label, successAction = action.successAction, successActions = action.successActions;
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormController)();
    var dialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useDialog)();
    var formBuilder = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormBuilder)();
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    var _a = formController.GetFormData(), name = _a.name, workspaceId = _a.workspaceId;
    var _b = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateStringAttribute)(workspaceId), createStringAttribute = _b.createStringAttribute, isLoading = _b.isLoading;
    var createDatabase = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDatabase)(workspaceId).createDatabase;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save Applet'))
        .loading(isLoading)
        .onClick(function () {
        if (name == null) {
            alert('Name must be not null.');
            return;
        }
        createDatabase({
            name: name,
            category: 'applet',
            enabled: true
        });
    }));
}); };
var AddAppletDialog = function (workspaceId) { return ({
    "title": 'Add applet',
    "actions": [
        {
            "label": "Save",
            "type": "saveApplet"
        }
    ],
    "fieldMap": {
        "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },
        /*  "databaseId": {
             "name": "databaseId",
             "type": "virtual",
             "value": databaseId
         },
         "collectionId": {
             "name": "collectionId",
             "type": "virtual",
             "value": collectionId
         }, */
        "name": {
            "label": "Name",
            "type": "text",
            "name": "name"
        },
        /*  "description": {
             "label": "Description",
             "type": "text",
             "multiline": true,
             "name": "description"
         }, */
    }
}); };


/***/ }),

/***/ "./src/app/dialogs/AddBooleanFieldDialog.ts":
/*!**************************************************!*\
  !*** ./src/app/dialogs/AddBooleanFieldDialog.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddBooleanFieldDialog: () => (/* binding */ AddBooleanFieldDialog),
/* harmony export */   SaveBooleanFieldAction: () => (/* binding */ SaveBooleanFieldAction)
/* harmony export */ });
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);


var SaveBooleanFieldAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var label = action.label, successAction = action.successAction, successActions = action.successActions;
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormController)();
    var dialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useDialog)();
    var formBuilder = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormBuilder)();
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    var _a = formController.GetFormData(), databaseId = _a.databaseId, collectionId = _a.collectionId, name = _a.name, workspaceId = _a.workspaceId;
    var _b = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateBooleanAttribute)(workspaceId), createBooleanAttribute = _b.createBooleanAttribute, isLoading = _b.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save Field'))
        .loading(isLoading)
        .onClick(function () {
        if (databaseId == null) {
            alert('Collection is null');
            return;
        }
        createBooleanAttribute({
            databaseId: databaseId,
            collectionId: collectionId,
            key: name,
            required: false
        }, function () {
            dialog.Hide();
        });
    }));
}); };
var AddBooleanFieldDialog = function (workspaceId, databaseId, collectionId) { return ({
    "title": 'Add boolean field',
    "actions": [
        {
            "label": "Save",
            "type": "saveBooleanField"
        }
    ],
    "fieldMap": {
        "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },
        "databaseId": {
            "name": "databaseId",
            "type": "virtual",
            "value": databaseId
        },
        "collectionId": {
            "name": "collectionId",
            "type": "virtual",
            "value": collectionId
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

/***/ "./src/app/dialogs/AddCollection/actions/SaveCollectionAction.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dialogs/AddCollection/actions/SaveCollectionAction.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveCollectionAction: () => (/* binding */ SaveCollectionAction)
/* harmony export */ });
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);


var SaveCollectionAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
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
    var _a = formMeta, protocol = _a.protocol, resource = _a.resource, method = _a.method;
    var _b = formController.GetFormData(), databaseId = _b.databaseId, name = _b.name, workspaceId = _b.workspaceId;
    var _c = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateCollection)(workspaceId), createCollection = _c.createCollection, isLoading = _c.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save Collection'))
        .loading(isLoading)
        .onClick(function () {
        if (databaseId == null) {
            alert('Collection is null');
            return;
        }
        createCollection({
            databaseId: databaseId,
            name: name,
            permissions: [
                _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Permission.read(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Role.any()),
                _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Permission.update(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Role.any()),
                _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Permission.update(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Role.any()),
                _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Permission.delete(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Role.any()),
                _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Permission.delete(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Role.any()),
            ],
            enabled: true
        }, function () {
            dialog.Hide();
        });
    }));
}); };


/***/ }),

/***/ "./src/app/dialogs/AddDatetimeField.ts":
/*!*********************************************!*\
  !*** ./src/app/dialogs/AddDatetimeField.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddDatetimeFieldDialog: () => (/* binding */ AddDatetimeFieldDialog),
/* harmony export */   SaveDatetimeFieldAction: () => (/* binding */ SaveDatetimeFieldAction)
/* harmony export */ });
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);


var SaveDatetimeFieldAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var label = action.label, successAction = action.successAction, successActions = action.successActions;
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormController)();
    var dialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useDialog)();
    var formBuilder = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormBuilder)();
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    var _a = formController.GetFormData(), databaseId = _a.databaseId, collectionId = _a.collectionId, name = _a.name, workspaceId = _a.workspaceId;
    var _b = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDatetimeAttribute)(workspaceId), createDatetimeAttribute = _b.createDatetimeAttribute, isLoading = _b.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save Field'))
        .loading(isLoading)
        .onClick(function () {
        if (databaseId == null) {
            alert('Collection is null');
            return;
        }
        createDatetimeAttribute({
            databaseId: databaseId,
            collectionId: collectionId,
            key: name,
            required: false
        }, function () {
            dialog.Hide();
        });
    }));
}); };
var AddDatetimeFieldDialog = function (workspaceId, databaseId, collectionId) { return ({
    "title": 'Add datetime field',
    "actions": [
        {
            "label": "Save",
            "type": "saveDatetimeField"
        }
    ],
    "fieldMap": {
        "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },
        "databaseId": {
            "name": "databaseId",
            "type": "virtual",
            "value": databaseId
        },
        "collectionId": {
            "name": "collectionId",
            "type": "virtual",
            "value": collectionId
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

/***/ "./src/app/dialogs/AddNumberFieldDialog.ts":
/*!*************************************************!*\
  !*** ./src/app/dialogs/AddNumberFieldDialog.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddNumberFieldDialog: () => (/* binding */ AddNumberFieldDialog),
/* harmony export */   SaveNumberFieldAction: () => (/* binding */ SaveNumberFieldAction)
/* harmony export */ });
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);


var SaveNumberFieldAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var label = action.label, successAction = action.successAction, successActions = action.successActions;
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormController)();
    var dialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useDialog)();
    var formBuilder = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormBuilder)();
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    var _a = formController.GetFormData(), databaseId = _a.databaseId, collectionId = _a.collectionId, name = _a.name, workspaceId = _a.workspaceId;
    var _b = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateIntegerAttribute)(workspaceId), createIntegerAttribute = _b.createIntegerAttribute, isLoading = _b.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save Field'))
        .loading(isLoading)
        .onClick(function () {
        if (databaseId == null) {
            alert('Collection is null');
            return;
        }
        createIntegerAttribute({
            databaseId: databaseId,
            collectionId: collectionId,
            key: name,
            required: false
        }, function () {
            dialog.Hide();
        });
    }));
}); };
var AddNumberFieldDialog = function (workspaceId, databaseId, collectionId) { return ({
    "title": 'Add number field',
    "actions": [
        {
            "label": "Save",
            "type": "saveNumberField"
        }
    ],
    "fieldMap": {
        "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },
        "databaseId": {
            "name": "databaseId",
            "type": "virtual",
            "value": databaseId
        },
        "collectionId": {
            "name": "collectionId",
            "type": "virtual",
            "value": collectionId
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

/***/ "./src/app/dialogs/AddRelationDialog.ts":
/*!**********************************************!*\
  !*** ./src/app/dialogs/AddRelationDialog.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddRelationFieldDialog: () => (/* binding */ AddRelationFieldDialog),
/* harmony export */   SaveRelationFieldAction: () => (/* binding */ SaveRelationFieldAction),
/* harmony export */   SelectDBCollectionView: () => (/* binding */ SelectDBCollectionView)
/* harmony export */ });
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);


var SaveRelationFieldAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var label = action.label, successAction = action.successAction, successActions = action.successActions;
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormController)();
    var dialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useDialog)();
    var formBuilder = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormBuilder)();
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    var _a = formController.GetFormData(), databaseId = _a.databaseId, collectionId = _a.collectionId, name = _a.name, relatedCollectionId = _a.relatedCollectionId, workspaceId = _a.workspaceId;
    var _b = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateRelationshipAttribute)(workspaceId), createRelationshipAttribute = _b.createRelationshipAttribute, isLoading = _b.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save Field'))
        .loading(isLoading)
        .onClick(function () {
        if (databaseId == null) {
            alert('Collection is null');
            return;
        }
        createRelationshipAttribute({
            databaseId: databaseId,
            collectionId: collectionId,
            key: name,
            relatedCollectionId: relatedCollectionId,
            type: 'manyToMany',
            twoWay: false,
            twoWayKey: collectionId + '_' + name,
            onDelete: 'restrict'
        }, function () {
            dialog.Hide();
        });
    }));
}); };
var SelectDBCollectionView = function (textData) {
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormController)();
    var value = textData.value, name = textData.name;
    var _a = formController.GetFormData(), databaseId = _a.databaseId, workspaceId = _a.workspaceId;
    var collections = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useListCollections)(workspaceId, databaseId).collections;
    /*  if (defaultValue == null) {
         defaultValue = formController.GetValue(fieldId);
     }
 
     const formState = formController.GetFieldState(name);
 
     if (!formState.isTouched && defaultValue != null) {
         formController.SetValue(name, defaultValue, true);
     }
 
     if (query != null) {
         const { body, resource, text, key } = query; */
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Dropdown)(function (option) {
        return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(option['name']));
    })(function (option) {
        return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(option['name']))
            .paddingLeft('10px');
    })
        .floatlabel(false)
        .dataSource(collections /* textData?.options[0]?.items.map(item => ({ text: item, value: item })) */)
        .fields({ text: 'name', value: '$id' })
        //.placeHolder(params.placeholder)
        .width('100%')
        .height(38)
        .formField(name, [])
        .border('1px solid #D6E4ED')
        .shadow({ focus: 'none' })).height().marginBottom('16px'));
};
var AddRelationFieldDialog = function (workspaceId, databaseId, collectionId) { return ({
    "title": 'Add relation field',
    "actions": [
        {
            "label": "Save",
            "type": "saveRelationField"
        }
    ],
    "fieldMap": {
        "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },
        "databaseId": {
            "name": "databaseId",
            "type": "virtual",
            "value": databaseId
        },
        "collectionId": {
            "name": "collectionId",
            "type": "virtual",
            "value": collectionId
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
        "selectCollection": {
            "label": "Collection",
            "type": "collectionSelect",
            "name": "relatedCollectionId"
        },
    }
}); };


/***/ }),

/***/ "./src/app/dialogs/AddSpaceDialog.ts":
/*!*******************************************!*\
  !*** ./src/app/dialogs/AddSpaceDialog.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddSpaceDialog: () => (/* binding */ AddSpaceDialog)
/* harmony export */ });
var AddSpaceDialog = function () { return ({
    "title": 'Create project space',
    "method": "create",
    "resource": "spaces",
    /*   "mutation":"_create_workspace", */
    "actions": [
        {
            "label": "Save",
            "type": "saveSpace"
        }
    ],
    "fieldMap": {
        "space_name": {
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

/***/ "./src/app/dialogs/AddTextFieldDialog.ts":
/*!***********************************************!*\
  !*** ./src/app/dialogs/AddTextFieldDialog.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddTextFieldDialog: () => (/* binding */ AddTextFieldDialog),
/* harmony export */   SaveTextFieldAction: () => (/* binding */ SaveTextFieldAction)
/* harmony export */ });
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);


var SaveTextFieldAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var label = action.label, successAction = action.successAction, successActions = action.successActions;
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormController)();
    var dialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useDialog)();
    var formBuilder = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormBuilder)();
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    var _a = formController.GetFormData(), databaseId = _a.databaseId, collectionId = _a.collectionId, name = _a.name, workspaceId = _a.workspaceId;
    var _b = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateStringAttribute)(workspaceId), createStringAttribute = _b.createStringAttribute, isLoading = _b.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save Field'))
        .loading(isLoading)
        .onClick(function () {
        if (databaseId == null) {
            alert('Collection is null');
            return;
        }
        createStringAttribute({
            databaseId: databaseId,
            collectionId: collectionId,
            key: name,
            required: false,
            size: 255
        }, function () {
            dialog.Hide();
        });
    }));
}); };
var AddTextFieldDialog = function (workspaceId, databaseId, collectionId) { return ({
    "title": 'Add text field',
    "actions": [
        {
            "label": "Save",
            "type": "saveTextField"
        }
    ],
    "fieldMap": {
        "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },
        "databaseId": {
            "name": "databaseId",
            "type": "virtual",
            "value": databaseId
        },
        "collectionId": {
            "name": "collectionId",
            "type": "virtual",
            "value": collectionId
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

/***/ "./src/app/dialogs/FormViews/RelationFormView.ts":
/*!*******************************************************!*\
  !*** ./src/app/dialogs/FormViews/RelationFormView.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RelationFormView: () => (/* binding */ RelationFormView)
/* harmony export */ });
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/antd */ "@realmocean/antd");
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_3__);
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




var RelationFormView = function (textData) {
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.useFormController)();
    var visibleWhen = textData.visibleWhen, required = textData.required, multiline = textData.multiline, name = textData.name, description = textData.description, relatedCollection = textData.relatedCollection;
    var canRender = false;
    var _a = formController.GetFormData(), workspaceId = _a.workspaceId, databaseId = _a.databaseId, collectionId = _a.collectionId;
    var _b = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useListDocuments)(workspaceId, databaseId, relatedCollection), documents = _b.documents, isLoading = _b.isLoading;
    if (visibleWhen != null && !_tuval_core__WEBPACK_IMPORTED_MODULE_2__.is.array(visibleWhen)) {
        var field = visibleWhen.field;
        var fieldValue = visibleWhen.is;
        if (field != null) {
            var fieldFormValue = formController.GetValue(field);
            if (fieldValue == fieldFormValue) {
                canRender = true;
            }
        }
    }
    else if (visibleWhen != null && _tuval_core__WEBPACK_IMPORTED_MODULE_2__.is.array(visibleWhen)) {
        var fails = [];
        for (var i = 0; i < visibleWhen.length; i++) {
            var field = visibleWhen[i].field;
            var fieldValue = visibleWhen[i].is;
            if (field != null) {
                var fieldFormValue = formController.GetValue(field);
                if (fieldValue == fieldFormValue) {
                }
                else {
                    fails.push(0);
                }
            }
        }
        if (fails.length === 0) {
            canRender = true;
        }
    }
    else {
        canRender = true;
    }
    var rows = formController.GetValue(name) || [];
    if (canRender) {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cTopLeading, spacing: 10 }).apply(void 0, __spreadArray(__spreadArray([], (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.ForEach)(rows)(function (keyValue, index) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Select)()
                .renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_1__.SelectRenderer)
                .value(keyValue)
                .options(documents === null || documents === void 0 ? void 0 : documents.map(function (item) { return ({ value: item.$id, label: item.Name }); }))
                .onChange(function (value) {
                rows[index] = value;
                formController.SetValue(name, __spreadArray([], rows, true));
            }));
        }), false), [(0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Button)().label('Add')
                .renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_1__.ButtonRenderer)
                .onClick(function () {
                formController.SetValue(name, __spreadArray(__spreadArray([], rows, true), [''], false));
            }).height().marginBottom('16px')], false)));
    }
};


/***/ }),

/***/ "./src/app/dialogs/actions/SaveDocumentAction.ts":
/*!*******************************************************!*\
  !*** ./src/app/dialogs/actions/SaveDocumentAction.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveDocumentAction: () => (/* binding */ SaveDocumentAction)
/* harmony export */ });
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__);
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
    var _b = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId), createDocument = _b.createDocument, isLoading = _b.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save Document_'))
        .loading(isLoading)
        .onClick(function () {
        var data = __assign({}, formController.GetFormData());
        delete data.databaseId;
        delete data.collectionId;
        delete data.workspaceId;
        if (databaseId == null) {
            alert('Collection is null');
            return;
        }
        createDocument({
            databaseId: databaseId,
            collectionId: collectionId,
            data: __assign({}, data),
            permissions: [
                _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Permission.read(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Role.any()),
                _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Permission.update(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Role.any()),
                _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Permission.delete(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Role.any())
            ]
        }, function () {
            dialog.Hide();
        });
    }));
}); };


/***/ }),

/***/ "./src/app/views/DatabaseNameView.ts":
/*!*******************************************!*\
  !*** ./src/app/views/DatabaseNameView.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatabaseNameView: () => (/* binding */ DatabaseNameView)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);
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


function DatabaseNameView(database, selected, onClickCallback) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useParams)(), access_type = _a.access_type, workspaceId = _a.workspaceId;
        var _b = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)('readonly'), mode = _b[0], setMode = _b[1];
        // const [name, setName] = useState(applet?.name);
        var _c = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(database === null || database === void 0 ? void 0 : database.name), newName = _c[0], setNewName = _c[1];
        var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();
        //const { updateAppletName } = useUpdateAppletName();
        // const {applet:_applet} = useGetApplet(applet.$id);
        return (mode === 'readonly' ?
            //UIRouteLink(team ? `/app/${getAppFullName()}/team/${team.id}/workspace/${spaceItem.id}/folder/${folder.id}/applet/${applet.id}/scope/${applet.scope_id}` : `/app/${getAppFullName()}/workspace/${spaceItem.id}/folder/${folder.id}/applet/${applet.id}/scope/${applet.scope_id}`)(
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTrailing })(
            /*  Icon(WorkbenchIcons[database.icon] || WorkbenchIcons.DocIcon)
                 .foregroundColor('#7c828d').fontSize(18)
                 .onClick(() => {
                     onClickCallback();
                 }) */
            ).width(25).paddingRight('3px'), mode !== 'readonly' ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)() :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Heading)(database.name).h6().ellipsisMaxLines(1).ellipsis(true)
                    .fontSize(14).fontWeight('400')
                    .fontFamily('-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji')
                    .foregroundColor(selected ? '#7b68ee' : '#151719')).onClick(function () {
                    //alert(getAppletUrl(access_type, applet.id))
                    navigate("/app/".concat((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.getAppFullName)(), "/workspace/").concat(workspaceId, "/database/").concat(database.$id));
                }), mode === 'readonly' ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)() :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TextField)().value(newName)
                    .fontFamily('Poppins,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif')
                    .fontSize(13)
                    .height('100%')
                    .padding(0)
                    .border('dashed 1px #AAA')
                    .shadow({ focus: 'none' })
                    .onBlur(function () {
                    /*   updateAppletName({
                          appletId: database.$id,
                          name: newName
                      }) */
                    setMode('readonly');
                })
                    .onChange(function (e) { return setNewName(e); }))
                .overflow('hidden').height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTrailing })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.MenuButton)()
                .model([
                {
                    title: 'Add to sub applet',
                    type: 'Title'
                },
                {
                    title: 'More Applets',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-activity-template-merged'),
                    /*   onClick: () => SelectOpaDialog.Show(database.$id, 'applet', opas).then((applet) => {

                         
                      }) */
                },
            ])
                .icon(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icons.Add), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.MenuButton)()
                .model([
                {
                    title: 'Applet Options',
                    type: 'Title'
                },
                {
                    title: 'Rename',
                    //  icon: WorkbenchIcons.Edit,
                    onClick: function () {
                        setMode('edit');
                    }
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
                    title: 'Add to favorites',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__star'),
                    onClick: function () {
                        setMode('edit');
                    }
                },
                {
                    title: 'Dublicate',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__copy'),
                    onClick: function () {
                        var data = __assign({}, database);
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
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__move'),
                    onClick: function () {
                        setMode('edit');
                    }
                },
                {
                    title: 'Description',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-info4'),
                    onClick: function () {
                        // DynoDialog.Show(AppletDescriptionDialog(database.$id))
                    }
                },
                {
                    title: 'Delete',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__delete', '#bc4841'),
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
                        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.confirmDialog)({
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
                .icon(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icons.Menu)).width(64).height(32).padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 5)
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
                e.dataTransfer.setData('text/plain', JSON.stringify(database));
            })
                .variable('--show-applet-action-buttons', { default: 'none', hover: 'flex' })
            :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 5 })(
                // Icon((opas as any).find((opa) => opa.type === database.opa)?.icon || WorkbenchIcons.DocIcon).foregroundColor('#7c828d'),
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TextField)().value(newName)
                    .fontFamily('Poppins,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif')
                    .fontSize(13)
                    .height('100%')
                    .padding(0)
                    .border('dashed 1px #AAA')
                    .shadow({ focus: 'none' })
                    .onBlur(function () {
                    /*   updateAppletName({
                          appletId: database.$id,
                          name: newName
                      }, () => {
                          onSuccess: () => {
                              ShowSuccessToast('We successfully rename applet', 'Undo', () => { */
                    /* updateApplet(applet.id, {
                        name: name
                    }, {
                        onSuccess: () => {
                            setName(name);
                            ShowSuccessToast('We successfully undo rename applet')
                        }
                    }) */
                    /*  })
                 } */
                    //})
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

/***/ "./src/app/views/LeftSideMenu.tsx":
/*!****************************************!*\
  !*** ./src/app/views/LeftSideMenu.tsx ***!
  \****************************************/
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
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/sdk */ "@celmino/sdk");
/* harmony import */ var _celmino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @celmino/ui */ "@celmino/ui");
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_celmino_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dialogs_AddSpaceDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialogs/AddSpaceDialog */ "./src/app/dialogs/AddSpaceDialog.ts");
/* harmony import */ var _DatabaseNameView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DatabaseNameView */ "./src/app/views/DatabaseNameView.ts");
/* harmony import */ var _dialogs_AddAppletDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialogs/AddAppletDialog */ "./src/app/dialogs/AddAppletDialog.ts");
/* harmony import */ var _databases__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./databases */ "./src/app/views/databases.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};









function a(strings) {
    var expr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        expr[_i - 1] = arguments[_i];
    }
    var str = '';
    strings.forEach(function (string, i) {
        if (_tuval_core__WEBPACK_IMPORTED_MODULE_1__.is.string(expr[i])) {
            str += string + '"' + (expr[i] || '') + '"';
        }
    });
    return str;
}
var aaa = 'sfdlfk';
var b = a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["hjkhsdf\n", "\nsdfsdfsdf"], ["hjkhsdf\n", "\nsdfsdfsdf"])), aaa);
var CollapseRightIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "24", height: "24", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M13.435 8.464a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.829 2.829a1 1 0 1 1-1.414-1.415L14.556 13H3a1 1 0 1 1 0-2h11.556l-1.121-1.121a1 1 0 0 1 0-1.415z", "clip-rule": "evenodd" }),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M21 4.5a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0v-13a1 1 0 0 1 1-1z", fill: "currentColor" }))); };
var CollapseLeftIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "100%", height: "100%", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M10.565 15.536a1 1 0 0 1-1.414 0l-2.829-2.829a1 1 0 0 1 0-1.414l2.829-2.829a1 1 0 0 1 1.414 1.415L9.444 11H21a1 1 0 1 1 0 2H9.444l1.121 1.121a1 1 0 0 1 0 1.415Z", "clip-rule": "evenodd" }),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M3 19.5a1 1 0 0 1-1-1v-13a1 1 0 1 1 2 0v13a1 1 0 0 1-1 1Z", fill: "currentColor" }))); };
var HomeIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("svg", { viewBox: "0 0 16 16", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M8.407 2.06a.6.6 0 0 0-.814 0l-6.5 6a.6.6 0 1 0 .814.881l.493-.455V13A1.6 1.6 0 0 0 4 14.6h3.1V11a.4.4 0 0 1 .4-.4h1c.22 0 .4.18.4.4v3.6H12a1.6 1.6 0 0 0 1.6-1.6V8.486l.493.455a.6.6 0 0 0 .814-.881l-6.5-6zM12.4 7.378 8 3.317 3.6 7.378V13a.4.4 0 0 0 .4.4h1.9V11a1.6 1.6 0 0 1 1.6-1.6h1a1.6 1.6 0 0 1 1.6 1.6v2.4H12a.4.4 0 0 0 .4-.4V7.378z", "clip-rule": "evenodd" }))); };
var DocIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M6 5a1 1 0 0 1 1-1h6.172a1 1 0 0 1 .707.293l3.828 3.828a1 1 0 0 1 .293.707V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5zm1-3a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 13.172 2H7zm2 6a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2H9zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9zm-1 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1z", "clip-rule": "evenodd" }))); };
var DraftIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M19 5H5v3h14V5zm.983 4.742A2 2 0 0 0 21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3a2 2 0 0 0 1.016 1.742A2.18 2.18 0 0 0 4 10v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9c0-.087-.006-.174-.017-.258zM18 10H6v9h12v-9zm-9 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1z", "clip-rule": "evenodd" }))); };
var WhiteboardIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M18.142 4.291a3 3 0 0 1 4.242 4.243l-4.455 4.455a2 2 0 0 1-1.158.57l-1.624.209a2 2 0 0 1-2.24-2.24l.21-1.623a2 2 0 0 1 .57-1.159l4.455-4.455Zm2.828 1.414a1 1 0 0 0-1.414 0L15.1 10.16l-.21 1.624 1.624-.21L20.97 7.12a1 1 0 0 0 0-1.415Zm-16.4-.12a1.25 1.25 0 0 0-1.25 1.25v2.522l1.585-1.409a3.097 3.097 0 0 1 4.114 4.63l-.903.803a1.059 1.059 0 1 0 1.452 1.54l1.044-1.044a1 1 0 0 1 1.415 1.414l-1.045 1.044a3.059 3.059 0 1 1-4.195-4.45l.904-.802a1.097 1.097 0 1 0-1.458-1.64l-2.914 2.59v5.301c0 .69.56 1.25 1.25 1.25h13.5c.69 0 1.25-.56 1.25-1.25V14.21a1 1 0 0 1 2 0v3.125a3.25 3.25 0 0 1-3.25 3.25H4.57a3.25 3.25 0 0 1-3.25-3.25V11.59a.72.72 0 0 1 0-.01V6.835a3.25 3.25 0 0 1 3.25-3.25h9.023a1 1 0 1 1 0 2H4.57Z", "clip-rule": "evenodd" }))); };
var fontFamily = '-apple-system, "BlinkMacSystemFont", "Segoe UI", "Helvetica", "Apple Color Emoji", "Arial", sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"';
var menuModel = [
    {
        title: 'Home',
        icon: function () { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.ReactView)(react__WEBPACK_IMPORTED_MODULE_3___default().createElement(HomeIcon, null)).frame(true); },
        link: '/app/com.celmino.app.test/home',
        subItems: [
            {
                name: 'Overview',
                icon: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Icons.API,
                link: '/app/com.tuvalsoft.app.organizationmanager/b'
            },
            {
                name: 'Sessions',
                icon: "\\e425",
                link: '/app/com.tuvalsoft.app.organizationmanager/sessions'
            }
        ]
    },
    {
        title: 'Project Spaces',
        icon: function () { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.ReactView)(react__WEBPACK_IMPORTED_MODULE_3___default().createElement(HomeIcon, null)).frame(true); },
        link: '/app/com.celmino.app.test/home',
        subItems: [
            {
                name: 'Overview',
                icon: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Icons.API,
                link: '/app/com.tuvalsoft.app.organizationmanager/b'
            },
            {
                name: 'Sessions',
                icon: "\\e425",
                link: '/app/com.tuvalsoft.app.organizationmanager/sessions'
            }
        ]
    },
    {
        title: 'Drafts',
        icon: function () { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.ReactView)(react__WEBPACK_IMPORTED_MODULE_3___default().createElement(DraftIcon, null)).frame(true); },
        link: '/app/com.tuvalsoft.app.workbench/drafts'
    },
    {
        title: 'Teams',
        icon: function () { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Icon)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.SvgIcon)('svg-sprite-teams', '#A1A1A1')); },
        link: "/app/".concat((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.getAppFullName)(), "/teams")
    },
    {
        title: 'Whiteboards',
        icon: function () { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.ReactView)(react__WEBPACK_IMPORTED_MODULE_3___default().createElement(WhiteboardIcon, null)).frame(true); },
        link: '/app/com.tuvalsoft.app.workbench/whiteboards'
    }
];
var global_openedIDs = {};
var LeftSideMenuView = function (selectedItem) {
    var showAllWorkspaces = true;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIViewBuilder)(function () {
        var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useParams)(), team_id = _a.team_id, workspaceId = _a.workspaceId, folder_id = _a.folder_id, applet_id = _a.applet_id;
        var databases = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useListDatabases)(workspaceId, [
            _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Query.equal('category', 'applet')
        ]).databases;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.TextField)()
            .paddingLeft('30px')
            .cornerRadius(5)
            .background('#F6F7F9')
            .border('unset')).height().padding(10), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.ForEach)(menuModel)(function (menuItem) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIRouteLink)(menuItem.link)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading })(menuItem.icon().padding(7).foregroundColor(selectedItem === menuItem.title ? '#7b68ee' : '#7c828d'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)(menuItem.title).fontSize(13).fontWeight('400').foregroundColor(selectedItem === menuItem.title ? '#7b68ee' : '#53575e'))
                .borderLeft(selectedItem === menuItem.title ? 'solid 1px #7B68EE' : '')
                .background({ default: selectedItem === menuItem.title ? '#F5F3FD' : '', hover: '#f6f7f9' })
                .height(32).padding('0 10px')).width('100%');
        })).height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HDivider)().height(1).background('#e9ebf0'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HDivider)().height(1).background('#e9ebf0'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading }).apply(void 0, __spreadArray(__spreadArray([(0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('APPLETS')
                .fontSize(11)
                .fontWeight('700')).height(40).padding('1px 18px 0 20px')], (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.ForEach)(databases.databases)(function (database) {
            //    UIRouteLink(`/app/${getAppFullName()}/database/${database.$id}`)(
            return (0,_DatabaseNameView__WEBPACK_IMPORTED_MODULE_6__.DatabaseNameView)(database, false, function () { });
        }
        //    )
        ), false), [(0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIViewBuilder)(function () {
                var createProject = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateProject)().createProject;
                var workspace_id = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useParams)().workspace_id;
                return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ spacing: 5 })(
                //FontIcon(FontIcons.Add, 'sm', '#656f7d'),
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('NEW APPLET').fontSize(11).fontWeight('500'))
                    .margin('5px 20px')
                    .cornerRadius(5)
                    .cursor('pointer')
                    .foregroundColor('#7c828d')
                    .background({ default: '#f3f4f7', hover: '#e4e4e4' })
                    .height(24)
                    .transition('background .2s cubic-bezier(.785,.135,.15,.86) 0s')
                    .padding('8px 12px 8px 26px')
                    .onClick(function () {
                    _celmino_ui__WEBPACK_IMPORTED_MODULE_4__.DynoDialog.Show((0,_dialogs_AddAppletDialog__WEBPACK_IMPORTED_MODULE_7__.AddAppletDialog)(workspaceId));
                    /* createSpace({
                        name: 'New Space',
                        description: 'ksjlfjsd',
                        workspaceId: workspace
                    }); */
                }));
            })).height(),
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIViewBuilder)(function () {
                var createDatabase = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDatabase)(workspaceId).createDatabase;
                return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ spacing: 5 })(
                //FontIcon(FontIcons.Add, 'sm', '#656f7d'),
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('Install APP').fontSize(11).fontWeight('500'))
                    .margin('5px 20px')
                    .cornerRadius(5)
                    .cursor('pointer')
                    .foregroundColor('#7c828d')
                    .background({ default: '#f3f4f7', hover: '#e4e4e4' })
                    .height(24)
                    .transition('background .2s cubic-bezier(.785,.135,.15,.86) 0s')
                    .padding('8px 12px 8px 26px')
                    .onClick(function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Client.setProject(workspaceId);
                        _databases__WEBPACK_IMPORTED_MODULE_8__.databaseTemplates.forEach(function (template) { return __awaiter(void 0, void 0, void 0, function () {
                            var name, id, category, collections, db_1, error_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        name = template.name, id = template.id, category = template.category, collections = template.collections;
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.create(id, name, category)];
                                    case 2:
                                        db_1 = _a.sent();
                                        collections === null || collections === void 0 ? void 0 : collections.forEach(function (collection) { return __awaiter(void 0, void 0, void 0, function () {
                                            var name, id, attributes, documents, col, i, _a, key, type, _b;
                                            return __generator(this, function (_c) {
                                                switch (_c.label) {
                                                    case 0:
                                                        name = collection.name, id = collection.id, attributes = collection.attributes, documents = collection.documents;
                                                        return [4 /*yield*/, _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createCollection(db_1.$id, id, name, [], false)];
                                                    case 1:
                                                        col = _c.sent();
                                                        i = 0;
                                                        _c.label = 2;
                                                    case 2:
                                                        if (!(i < attributes.length)) return [3 /*break*/, 8];
                                                        _a = attributes[i], key = _a.key, type = _a.type;
                                                        _b = type;
                                                        switch (_b) {
                                                            case 'string': return [3 /*break*/, 3];
                                                            case 'number': return [3 /*break*/, 5];
                                                        }
                                                        return [3 /*break*/, 7];
                                                    case 3:
                                                        console.log('1');
                                                        return [4 /*yield*/, _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createStringAttribute(db_1.$id, col.$id, key, 256, false, '', false)];
                                                    case 4:
                                                        _c.sent();
                                                        return [3 /*break*/, 7];
                                                    case 5:
                                                        console.log('1');
                                                        return [4 /*yield*/, _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createIntegerAttribute(db_1.$id, col.$id, key, false)];
                                                    case 6:
                                                        _c.sent();
                                                        return [3 /*break*/, 7];
                                                    case 7:
                                                        i++;
                                                        return [3 /*break*/, 2];
                                                    case 8:
                                                        console.log('en son');
                                                        setTimeout(function () {
                                                            documents === null || documents === void 0 ? void 0 : documents.forEach(function (document) { return __awaiter(void 0, void 0, void 0, function () {
                                                                var doc;
                                                                return __generator(this, function (_a) {
                                                                    switch (_a.label) {
                                                                        case 0: return [4 /*yield*/, _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.Services.Databases.createDocument(db_1.$id, col.$id, _celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.ID.unique(), document)];
                                                                        case 1:
                                                                            doc = _a.sent();
                                                                            console.log(doc);
                                                                            return [2 /*return*/];
                                                                    }
                                                                });
                                                            }); });
                                                        }, 3000);
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                        return [3 /*break*/, 4];
                                    case 3:
                                        error_1 = _a.sent();
                                        console.log(error_1);
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                    });
                }); }));
            })).height(),
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('SPACES')
                .fontSize(11)
                .fontWeight('700')).height(40).padding('1px 18px 0 20px'),
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIViewBuilder)(function () {
                var createProject = (0,_celmino_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateProject)().createProject;
                var workspace_id = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useQueryParams)().workspace_id;
                return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ spacing: 5 })(
                //FontIcon(FontIcons.Add, 'sm', '#656f7d'),
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('NEW SPACE').fontSize(11).fontWeight('500'))
                    .margin('5px 20px')
                    .cornerRadius(5)
                    .cursor('pointer')
                    .foregroundColor('#7c828d')
                    .background({ default: '#f3f4f7', hover: '#e4e4e4' })
                    .height(24)
                    .transition('background .2s cubic-bezier(.785,.135,.15,.86) 0s')
                    .padding('8px 12px 8px 26px')
                    .onClick(function () {
                    _celmino_ui__WEBPACK_IMPORTED_MODULE_4__.DynoDialog.Show((0,_dialogs_AddSpaceDialog__WEBPACK_IMPORTED_MODULE_5__.AddSpaceDialog)());
                    /* createSpace({
                        name: 'New Space',
                        description: 'ksjlfjsd',
                        workspaceId: workspace
                    }); */
                }));
            }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.ScrollView)({ axes: 'cAll', alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIWidget)('com.celmino.widget.enterprise-modelling-tree')
                .config({
                workspaceId: workspaceId
            }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIWidget)('com.celmino.widget.enterprise-modelling-tree')
                .config({
                workspaceId: workspaceId
            }))
            /*  ...ForEach(spaces)(space =>
                 Text(space.name)
             ), */
            )
            /*  HStack({ spacing: 5 })(
                 //FontIcon(FontIcons.Add, 'sm', '#656f7d'),
                 Text('OPEN PROJECT SPACE').fontSize(11).fontWeight('500')
             )
                 .margin('5px 20px')
                 .cornerRadius(5)
                 .cursor('pointer')
                 .foregroundColor('#7c828d')
                 .background({ default: '#f3f4f7', hover: '#e4e4e4' })
                 .height(24)
                 .transition('background .2s cubic-bezier(.785,.135,.15,.86) 0s')
                 .padding('8px 12px 8px 26px')
                 .onClick(() => {
                     DynoDialog.Show(AddProjectSpaceDialog(team_id));
                 }) */
            ).padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cHorizontal, '1rem')
                .paddingBottom('0px')], false))))
            .fontFamily(fontFamily)
            .allWidth(282)
            .background('white')
            .borderRight('1px solid #e9ebf0')
            .transition('width .2s ease-in-out'));
    }));
};
var templateObject_1;


/***/ }),

/***/ "./src/app/views/databases.ts":
/*!************************************!*\
  !*** ./src/app/views/databases.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   databaseTemplates: () => (/* binding */ databaseTemplates)
/* harmony export */ });
var databaseTemplates = [
    {
        "name": "Enterprise Modelling",
        "id": "enterprise_modelling",
        "category": "app",
        "collections": [
            {
                "name": "Folders",
                "id": "em_folders",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    },
                    {
                        "key": "Parent",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Models",
                "id": "em_models",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    },
                    {
                        "key": "Parent",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Model Types",
                "id": "model_types",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    },
                    {
                        "key": "OrginalName",
                        "type": "string"
                    },
                    {
                        "key": "TypeNumber",
                        "type": "number"
                    },
                    {
                        "key": "ApiName",
                        "type": "string"
                    },
                    {
                        "key": "Type",
                        "type": "string"
                    }
                ],
                "documents": [
                    {
                        "Name": "Organizational chart",
                        "TypeNumber": 1,
                        "ApiName": "MT_ORG_CHRT",
                        "Type": "Default"
                    },
                    {
                        "Name": "Screen diagram",
                        "TypeNumber": 2,
                        "ApiName": "MT_SCRN_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Network topology ",
                        "TypeNumber": 3,
                        "ApiName": "MT_NW_TOPLG",
                        "Type": "Default"
                    },
                    {
                        "Name": "Network diagram",
                        "TypeNumber": 5,
                        "ApiName": "MT_NW_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "eERM",
                        "TypeNumber": 6,
                        "ApiName": "MT_EERM",
                        "Type": "Default"
                    },
                    {
                        "Name": "SAP SERM",
                        "TypeNumber": 7,
                        "ApiName": "MT_SAP_SERM",
                        "Type": "Default"
                    },
                    {
                        "Name": "eERM attribute allocation diagram",
                        "TypeNumber": 8,
                        "ApiName": "MT_EERM_ATTR_ALLOC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Relations diagram",
                        "TypeNumber": 9,
                        "ApiName": "MT_REL_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Attribute allocation diagram",
                        "TypeNumber": 10,
                        "ApiName": "MT_ATTR_ALLOC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Table diagram",
                        "TypeNumber": 11,
                        "ApiName": "MT_TBL_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Value-added chain diagram",
                        "TypeNumber": 12,
                        "ApiName": "MT_VAL_ADD_CHN_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "EPC",
                        "TypeNumber": 13,
                        "ApiName": "MT_EPC",
                        "Type": "Default"
                    },
                    {
                        "Name": "Function allocation diagram",
                        "TypeNumber": 14,
                        "ApiName": "MT_FUNC_ALLOC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Information flow diagram",
                        "TypeNumber": 15,
                        "ApiName": "MT_INFO_FLOW_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Access diagram",
                        "TypeNumber": 16,
                        "ApiName": "MT_ACS_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Access diagram (physical)",
                        "TypeNumber": 17,
                        "ApiName": "MT_ACS_DGM_PHYs",
                        "Type": "Default"
                    },
                    {
                        "Name": "PCD",
                        "TypeNumber": 18,
                        "ApiName": "MT_PCD",
                        "Type": "Default"
                    },
                    {
                        "Name": "Function tree",
                        "TypeNumber": 19,
                        "ApiName": "MT_FUNC_TREE",
                        "Type": "Default"
                    },
                    {
                        "Name": "Application system type diagram",
                        "TypeNumber": 21,
                        "ApiName": "MT_FUNC_TREE",
                        "Type": "Default"
                    },
                    {
                        "Name": "Tecnical terms model",
                        "TypeNumber": 22,
                        "ApiName": "MT_TEC_TERMS_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "Event diagram",
                        "TypeNumber": 23,
                        "ApiName": "MT_EVNT_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Rule diagram",
                        "TypeNumber": 24,
                        "ApiName": "MT_RULE_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Function organizational level diagram",
                        "TypeNumber": 25,
                        "ApiName": "MT_FUNC_ORG_LVL_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Process selection matrix",
                        "TypeNumber": 28,
                        "ApiName": "MT_PROC_SEL_MTRX",
                        "Type": "Default"
                    },
                    {
                        "Name": "Y diagram",
                        "TypeNumber": 30,
                        "ApiName": "MT_Y_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "SAP application diagram",
                        "TypeNumber": 31,
                        "ApiName": "MT_SAP_APP_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Classfication diagram",
                        "TypeNumber": 36,
                        "ApiName": "MT_CLSF_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Objective diagram",
                        "TypeNumber": 37,
                        "ApiName": "MT_OBJ_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Application system diagram",
                        "TypeNumber": 38,
                        "ApiName": "MT_APP_SYS_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "OMT Object model",
                        "TypeNumber": 39,
                        "ApiName": "MT_APP_SYS_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "OMT Dynamic model",
                        "TypeNumber": 40,
                        "ApiName": "MT_OMT_DYN_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "OMT Functional model",
                        "TypeNumber": 41,
                        "ApiName": "MT_OMT_FUNC_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "E Data model",
                        "TypeNumber": 42,
                        "ApiName": "MT_E_DATA_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "OMT Data value decomposition",
                        "TypeNumber": 43,
                        "ApiName": "MT_OMT_DATA_VAL_DCMPS",
                        "Type": "Default"
                    },
                    {
                        "Name": "Class diagram",
                        "TypeNumber": 44,
                        "ApiName": "MT_CLS_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "System attributes",
                        "TypeNumber": 45,
                        "ApiName": "MT_SYS_ATTRS",
                        "Type": "Default"
                    },
                    {
                        "Name": "System attribute domain",
                        "TypeNumber": 46,
                        "ApiName": "MT_SYS_ATTRS_DOM",
                        "Type": "Default"
                    },
                    {
                        "Name": "SeDaM model",
                        "TypeNumber": 47,
                        "ApiName": "MT_SEDAM_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "Technical resources",
                        "TypeNumber": 48,
                        "ApiName": "MT_TEC_RCS",
                        "Type": "Default"
                    },
                    {
                        "Name": "Material diagram",
                        "TypeNumber": 49,
                        "ApiName": "MT_MTRL_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "EPC (material flow)",
                        "TypeNumber": 50,
                        "ApiName": "MT_EPC_MTRL_FLOW",
                        "Type": "Default"
                    },
                    {
                        "Name": "PCD (material flow)",
                        "TypeNumber": 51,
                        "ApiName": "MT_PCD_MTRL_FLOW",
                        "Type": "Default"
                    },
                    {
                        "Name": "Communications diagram",
                        "TypeNumber": 52,
                        "ApiName": "MT_COMM_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Program flow chart",
                        "TypeNumber": 53,
                        "ApiName": "MT_PRG_FLOW_CHRT",
                        "Type": "Default"
                    },
                    {
                        "Name": "Cost category diagram",
                        "TypeNumber": 54,
                        "ApiName": "MT_CST_CAT_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "OMT Class description model",
                        "TypeNumber": 55,
                        "ApiName": "MT_OMT_CLS_DESC_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "RAMS",
                        "TypeNumber": 56,
                        "ApiName": "MT_RAMS",
                        "Type": "Default"
                    },
                    {
                        "Name": "SAP ALE function model",
                        "TypeNumber": 57,
                        "ApiName": "MT_SAP_ALE_FUNC_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "SAP ALE filter model",
                        "TypeNumber": 58,
                        "ApiName": "MT_SAP_ALE_FLTR_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "SAP ALE message flow model",
                        "TypeNumber": 59,
                        "ApiName": "MT_SAP_ALE_MSG_FLOW_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "SAP ALE message type model",
                        "TypeNumber": 60,
                        "ApiName": "MT_SAP_ALE_MSG_TYP_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "EPC (instance)",
                        "TypeNumber": 61,
                        "ApiName": "MT_EPC_INST",
                        "Type": "Default"
                    },
                    {
                        "Name": "Material flow diagram",
                        "TypeNumber": 62,
                        "ApiName": "MT_MTRL_FLOW_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "PPC",
                        "TypeNumber": 63,
                        "ApiName": "MT_PPC",
                        "Type": "Default"
                    },
                    {
                        "Name": "Information carrier diagram",
                        "TypeNumber": 64,
                        "ApiName": "MT_INFO_CRR_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Task allocation diagram",
                        "TypeNumber": 65,
                        "ApiName": "MT_TSK_ALLOC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Privileges diagram",
                        "TypeNumber": 66,
                        "ApiName": "MT_PRIV_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Event diagram (instance)",
                        "TypeNumber": 67,
                        "ApiName": "MT_EVNT_DGM_INST",
                        "Type": "Default"
                    },
                    {
                        "Name": "Business controls diagram",
                        "TypeNumber": 68,
                        "ApiName": "MT_BUS_CTRL_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Product/Service exchange diagram (graphic)",
                        "TypeNumber": 69,
                        "ApiName": "MT_PROD_EXCH_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Product/Service tree (graphic)",
                        "TypeNumber": 69,
                        "ApiName": "MT_PROD_TREE_GRAPHIC",
                        "Type": "Default"
                    },
                    {
                        "Name": "Product tree",
                        "TypeNumber": 70,
                        "ApiName": "MT_PROD_TREE",
                        "Type": "Default"
                    },
                    {
                        "Name": "Product selection matrix",
                        "TypeNumber": 71,
                        "ApiName": "MT_PROD_SEL_MTRX",
                        "Type": "Default"
                    },
                    {
                        "Name": "Office process",
                        "TypeNumber": 72,
                        "ApiName": "MT_OFFICE_PROC",
                        "Type": "Default"
                    },
                    {
                        "Name": "Product allocation diagram",
                        "TypeNumber": 73,
                        "ApiName": "MT_PROD_ALLOC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Competition model",
                        "TypeNumber": 74,
                        "ApiName": "MT_COMP_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "Industrial process",
                        "TypeNumber": 75,
                        "ApiName": "MT_IND_PROC",
                        "Type": "Default"
                    },
                    {
                        "Name": "Process instantiation model",
                        "TypeNumber": 76,
                        "ApiName": "MT_PROC_INST_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "Shift calendar",
                        "TypeNumber": 77,
                        "ApiName": "MT_SHIFT_CAL",
                        "Type": "Default"
                    },
                    {
                        "Name": "CD Diagram",
                        "TypeNumber": 78,
                        "ApiName": "MT_CD_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Input/Output diagram",
                        "TypeNumber": 79,
                        "ApiName": "MT_IN_OUT_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Knowledge structure diagram",
                        "TypeNumber": 80,
                        "ApiName": "MT_KNW_STRC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Knowledge map",
                        "TypeNumber": 81,
                        "ApiName": "MT_KNW_MAP",
                        "Type": "Default"
                    },
                    {
                        "Name": "UML Class description diagram",
                        "TypeNumber": 82,
                        "ApiName": "MT_UML_CLS_DESC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Product/Service tree",
                        "TypeNumber": 83,
                        "ApiName": "MT_PROD_SER_TREE",
                        "Type": "Default"
                    },
                    {
                        "Name": "Product/Service exchange diagram",
                        "TypeNumber": 84,
                        "ApiName": "MT_PROD_SER_EXCH_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Structuring model",
                        "TypeNumber": 85,
                        "ApiName": "MT_STRC_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "EPC (column display)",
                        "TypeNumber": 86,
                        "ApiName": "MT_EPC_COL_DPLY",
                        "Type": "Default"
                    },
                    {
                        "Name": "Program flow chart (PF)",
                        "TypeNumber": 87,
                        "ApiName": "MT_PRG_FLOW_CHRT_PF",
                        "Type": "Default"
                    },
                    {
                        "Name": "EPC (row display)",
                        "TypeNumber": 88,
                        "ApiName": "MT_EPC_ROW_DPLY",
                        "Type": "Default"
                    },
                    {
                        "Name": "Process selection diagram",
                        "TypeNumber": 89,
                        "ApiName": "MT_PROC_SEL_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Authorization map",
                        "TypeNumber": 90,
                        "ApiName": "MT_AUTH_MAP",
                        "Type": "Default"
                    },
                    {
                        "Name": "Authorization hierarchy",
                        "TypeNumber": 91,
                        "ApiName": "MT_AUTH_HIER",
                        "Type": "Default"
                    },
                    {
                        "Name": "Role diagram",
                        "TypeNumber": 92,
                        "ApiName": "MT_ROLE_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "E-Business scenario diagram",
                        "TypeNumber": 93,
                        "ApiName": "MT_E_BUS_SCN_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "KPI allocation diagram",
                        "TypeNumber": 94,
                        "ApiName": "MT_KPI_ALLOC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "DW structure",
                        "TypeNumber": 95,
                        "ApiName": "MT_DW_STRC",
                        "Type": "Default"
                    },
                    {
                        "Name": "DW transformation",
                        "TypeNumber": 96,
                        "ApiName": "MT_DW_TRNS",
                        "Type": "Default"
                    },
                    {
                        "Name": "EPC (table display)",
                        "TypeNumber": 97,
                        "ApiName": "MT_EPC_TBL_DPLY",
                        "Type": "Default"
                    },
                    {
                        "Name": "Input/Output diagram (inverse)",
                        "TypeNumber": 98,
                        "ApiName": "MT_IN_OUT_DGM_INV",
                        "Type": "Default"
                    },
                    {
                        "Name": "RAD",
                        "TypeNumber": 99,
                        "ApiName": "MT_RAD",
                        "Type": "Default"
                    },
                    {
                        "Name": "Quick model",
                        "TypeNumber": 100,
                        "ApiName": "MT_QUICK_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "DTD",
                        "TypeNumber": 101,
                        "ApiName": "MT_DTD",
                        "Type": "Default"
                    },
                    {
                        "Name": "c3 method",
                        "TypeNumber": 102,
                        "ApiName": "MT_C3_MTHD",
                        "Type": "Default"
                    },
                    {
                        "Name": "Risk diagram",
                        "TypeNumber": 103,
                        "ApiName": "MT_RISK_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Screen design",
                        "TypeNumber": 104,
                        "ApiName": "MT_SCREEN_DESIGN",
                        "Type": "Default"
                    },
                    {
                        "Name": "Screen navigation",
                        "TypeNumber": 105,
                        "ApiName": "MT_SCREEN_NAV",
                        "Type": "Default"
                    },
                    {
                        "Name": "Service architecture diagram",
                        "TypeNumber": 106,
                        "ApiName": "MT_SER_ARCH_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Service architecture diagram (column display)",
                        "TypeNumber": 107,
                        "ApiName": "MT_SER_ARCH_DGM_COL_DPLY",
                        "Type": "Default"
                    },
                    {
                        "Name": "Application system type diagram (column display)",
                        "TypeNumber": 108,
                        "ApiName": "MT_APP_SYS_TYP_DGM_COL_DPLY",
                        "Type": "Default"
                    },
                    {
                        "Name": "Service allocation diagram",
                        "TypeNumber": 109,
                        "ApiName": "MT_SER_ALLOC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "EPC (horizontal table display)",
                        "TypeNumber": 110,
                        "ApiName": "MT_EPC_HOR_TBL_DPLY",
                        "Type": "Default"
                    },
                    {
                        "Name": "SAP functions mapping (Solution Manager)",
                        "TypeNumber": 111,
                        "ApiName": "MT_SAP_FUNC_MAP_SM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Functions mapping (Solution Manager)",
                        "TypeNumber": 112,
                        "ApiName": "MT_FUNC_MAP_SM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Business segment matrix",
                        "TypeNumber": 113,
                        "ApiName": "MT_BUS_SEG_MTRX",
                        "Type": "Default"
                    },
                    {
                        "Name": "BPMN process diagram (BPMN 1.x)",
                        "TypeNumber": 114,
                        "ApiName": "MT_BPMN_PROC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "SAP integration process (XI)",
                        "TypeNumber": 115,
                        "ApiName": "MT_SAP_INT_PROC_XI",
                        "Type": "Default"
                    },
                    {
                        "Name": "Swimlane tree",
                        "TypeNumber": 116,
                        "ApiName": "MT_SWIM_TREE",
                        "Type": "Default"
                    },
                    {
                        "Name": "Service collaboration diagram",
                        "TypeNumber": 117,
                        "ApiName": "MT_SER_COL_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Process support map",
                        "TypeNumber": 118,
                        "ApiName": "MT_PROC_SUPP_MAP",
                        "Type": "Default"
                    },
                    {
                        "Name": "SAP allocation diagram",
                        "TypeNumber": 119,
                        "ApiName": "MT_SAP_ALLOC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "IT architecture mapping",
                        "TypeNumber": 120,
                        "ApiName": "MT_IT_ARCH_MAP",
                        "Type": "Default"
                    },
                    {
                        "Name": "IT architecture matrix",
                        "TypeNumber": 121,
                        "ApiName": "MT_IT_ARCH_MTRX",
                        "Type": "Default"
                    },
                    {
                        "Name": "BPMN allocation diagram (BPMN 1.x)",
                        "TypeNumber": 122,
                        "ApiName": "MT_BPMN_ALLOC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "SAP organizational elements mapping",
                        "TypeNumber": 123,
                        "ApiName": "MT_SAP_ORG_ELM_MAP",
                        "Type": "Default"
                    },
                    {
                        "Name": "Matrix model",
                        "TypeNumber": 124,
                        "ApiName": "MT_MTRX_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "Process schedule",
                        "TypeNumber": 125,
                        "ApiName": "MT_PROC_SCH",
                        "Type": "Default"
                    },
                    {
                        "Name": "Transformation",
                        "TypeNumber": 126,
                        "ApiName": "MT_TRNS",
                        "Type": "Default"
                    },
                    {
                        "Name": "Mapping model",
                        "TypeNumber": 127,
                        "ApiName": "MT_MAP_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "XML model",
                        "TypeNumber": 128,
                        "ApiName": "MT_XML_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "Schedule",
                        "TypeNumber": 129,
                        "ApiName": "MT_SCH",
                        "Type": "Default"
                    },
                    {
                        "Name": "Composite schedule",
                        "TypeNumber": 130,
                        "ApiName": "MT_COMP_SCH",
                        "Type": "Default"
                    },
                    {
                        "Name": "Project schedule",
                        "TypeNumber": 131,
                        "ApiName": "MT_PRJ_SCH",
                        "Type": "Default"
                    },
                    {
                        "Name": "Work breakdown structure",
                        "TypeNumber": 132,
                        "ApiName": "MT_WRK_BRK_STRC",
                        "Type": "Default"
                    },
                    {
                        "Name": "Requirements tree",
                        "TypeNumber": 133,
                        "ApiName": "MT_REQ_TREE",
                        "Type": "Default"
                    },
                    {
                        "Name": "Requirement allocation diagram",
                        "TypeNumber": 134,
                        "ApiName": "MT_REQ_ALLOC_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Data flow diagram",
                        "TypeNumber": 135,
                        "ApiName": "MT_DATA_FLOW_DGM",
                        "Type": "Default"
                    },
                    {
                        "Name": "Transformation profile model",
                        "TypeNumber": 136,
                        "ApiName": "MT_TRNS_PROF_MDL",
                        "Type": "Default"
                    },
                    {
                        "Name": "BPMN allocation diagram (2.0 beta)",
                        "TypeNumber": 137,
                        "ApiName": "MT_BPMN_ALLOC_DGM_2",
                        "Type": "Default"
                    },
                    {
                        "Name": "Whiteboard",
                        "TypeNumber": 138,
                        "ApiName": "MT_WHITEBOARD",
                        "Type": "Default"
                    },
                ]
            },
            // Model Type Tables Start
            {
                "name": "Organizational chart",
                "id": "MT_ORG_CHRT",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Screen diagram",
                "id": "MT_SCRN_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Network topology",
                "id": "MT_NW_TOPLG",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Network diagram",
                "id": "MT_NW_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "eERM",
                "id": "MT_EERM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "SAP SERM",
                "id": "MT_SAP_SERM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "eERM attribute allocation diagram",
                "id": "MT_EERM_ATTR_ALLOC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Relations diagram",
                "id": "MT_REL_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Attribute allocation diagram",
                "id": "MT_ATTR_ALLOC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Table diagram",
                "id": "MT_TBL_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Value-added chain diagram",
                "id": "MT_VAL_ADD_CHN_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "EPC",
                "id": "MT_EPC",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Function allocation diagram",
                "id": "MT_FUNC_ALLOC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Information flow diagram",
                "id": "MT_INFO_FLOW_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Access diagram",
                "id": "MT_ACS_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Access diagram (physical)",
                "id": "MT_ACS_DGM_PHYs",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "PCD",
                "id": "MT_PCD",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Function tree",
                "id": "MT_FUNC_TREE",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Application system type diagram",
                "id": "MT_APP_SYS_TYP_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Tecnical terms model",
                "id": "MT_TEC_TERMS_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Event diagram",
                "id": "MT_EVNT_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Rule diagram",
                "id": "MT_RULE_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Function organizational level diagram",
                "id": "MT_FUNC_ORG_LVL_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Process selection matrix",
                "id": "MT_PROC_SEL_MTRX",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Y diagram",
                "id": "MT_Y_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "SAP application diagram",
                "id": "MT_SAP_APP_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Classfication diagram",
                "id": "MT_CLSF_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Objective diagram",
                "id": "MT_OBJ_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Application system diagram",
                "id": "MT_APP_SYS_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "OMT Object model",
                "id": "MT_OMT_OBJ_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "OMT Dynamic model",
                "id": "MT_OMT_DYN_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "OMT Functional model",
                "id": "MT_OMT_FUNC_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "E Data model",
                "id": "MT_E_DATA_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "OMT Data value decomposition",
                "id": "MT_OMT_DATA_VAL_DCMPS",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Class diagram",
                "id": "MT_CLS_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "System attributes",
                "id": "MT_SYS_ATTRS",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "System attribute domain",
                "id": "MT_SYS_ATTRS_DOM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "SeDaM model",
                "id": "MT_SEDAM_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Technical resources",
                "id": "MT_TEC_RCS",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Material diagram",
                "id": "MT_MTRL_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "EPC (material flow)",
                "id": "MT_EPC_MTRL_FLOW",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "PCD (material flow)",
                "id": "MT_PCD_MTRL_FLOW",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Communications diagram",
                "id": "MT_COMM_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Program flow chart",
                "id": "MT_PRG_FLOW_CHRT",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Cost category diagram",
                "id": "MT_CST_CAT_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "OMT Class description model",
                "id": "MT_OMT_CLS_DESC_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "RAMS",
                "id": "MT_RAMS",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "SAP ALE function model",
                "id": "MT_SAP_ALE_FUNC_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "SAP ALE filter model",
                "id": "MT_SAP_ALE_FLTR_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "SAP ALE message flow model",
                "id": "MT_SAP_ALE_MSG_FLOW_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "SAP ALE message type model",
                "id": "MT_SAP_ALE_MSG_TYP_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "EPC (instance)",
                "id": "MT_EPC_INST",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Material flow diagram",
                "id": "MT_MTRL_FLOW_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "PPC",
                "id": "MT_PPC",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Information carrier diagram",
                "id": "MT_INFO_CRR_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Task allocation diagram",
                "id": "MT_TSK_ALLOC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Privileges diagram",
                "id": "MT_PRIV_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Event diagram (instance)",
                "id": "MT_EVNT_DGM_INST",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Business controls diagram",
                "id": "MT_BUS_CTRL_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Product/Service exchange diagram (graphic)",
                "id": "MT_PROD_EXCH_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Product/Service tree (graphic)",
                "id": "MT_PROD_TREE_GRAPHIC",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Product tree",
                "id": "MT_PROD_TREE",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Product selection matrix",
                "id": "MT_PROD_SEL_MTRX",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Office process",
                "id": "MT_OFFICE_PROC",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Product allocation diagram",
                "id": "MT_PROD_ALLOC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Competition model",
                "id": "MT_COMP_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Industrial process",
                "id": "MT_IND_PROC",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Process instantiation model",
                "id": "MT_PROC_INST_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Shift calendar",
                "id": "MT_SHIFT_CAL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "CD Diagram",
                "id": "MT_CD_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Input/Output diagram",
                "id": "MT_IN_OUT_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Knowledge structure diagram",
                "id": "MT_KNW_STRC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Knowledge map",
                "id": "MT_KNW_MAP",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "UML Class description diagram",
                "id": "MT_UML_CLS_DESC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Product/Service tree",
                "id": "MT_PROD_SER_TREE",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Product/Service exchange diagram",
                "id": "MT_PROD_SER_EXCH_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Structuring model",
                "id": "MT_STRC_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "EPC (column display)",
                "id": "MT_EPC_COL_DPLY",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Program flow chart (PF)",
                "id": "MT_PRG_FLOW_CHRT_PF",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "EPC (row display)",
                "id": "MT_EPC_ROW_DPLY",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Process selection diagram",
                "id": "MT_PROC_SEL_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Authorization map",
                "id": "MT_AUTH_MAP",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Authorization hierarchy",
                "id": "MT_AUTH_HIER",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Role diagram",
                "id": "MT_ROLE_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "E-Business scenario diagram",
                "id": "MT_E_BUS_SCN_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "KPI allocation diagram",
                "id": "MT_KPI_ALLOC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "DW structure",
                "id": "MT_DW_STRC",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "DW transformation",
                "id": "MT_DW_TRNS",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "EPC (table display)",
                "id": "MT_EPC_TBL_DPLY",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Input/Output diagram (inverse)",
                "id": "MT_IN_OUT_DGM_INV",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "RAD",
                "id": "MT_RAD",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Quick model",
                "id": "MT_QUICK_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "DTD",
                "id": "MT_DTD",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "c3 method",
                "id": "MT_C3_MTHD",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Risk diagram",
                "id": "MT_RISK_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Screen design",
                "id": "MT_SCREEN_DESIGN",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Screen navigation",
                "id": "MT_SCREEN_NAV",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Service architecture diagram",
                "id": "MT_SER_ARCH_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Service architecture diagram (column display)",
                "id": "MT_SER_ARCH_DGM_COL_DPLY",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Application system type diagram (column display)",
                "id": "MT_APP_SYS_TYP_DGM_COL_DPLY",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Service allocation diagram",
                "id": "MT_SER_ALLOC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "EPC (horizontal table display)",
                "id": "MT_EPC_HOR_TBL_DPLY",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "SAP functions mapping (Solution Manager)",
                "id": "MT_SAP_FUNC_MAP_SM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Functions mapping (Solution Manager)",
                "id": "MT_FUNC_MAP_SM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Business segment matrix",
                "id": "MT_BUS_SEG_MTRX",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "BPMN process diagram (BPMN 1.x)",
                "id": "MT_BPMN_PROC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "SAP integration process (XI)",
                "id": "MT_SAP_INT_PROC_XI",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Swimlane tree",
                "id": "MT_SWIM_TREE",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Service collaboration diagram",
                "id": "MT_SER_COL_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Process support map",
                "id": "MT_PROC_SUPP_MAP",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "SAP allocation diagram",
                "id": "MT_SAP_ALLOC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "IT architecture mapping",
                "id": "MT_IT_ARCH_MAP",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "IT architecture matrix",
                "id": "MT_IT_ARCH_MTRX",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "BPMN allocation diagram (BPMN 1.x)",
                "id": "MT_BPMN_ALLOC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "SAP organizational elements mapping",
                "id": "MT_SAP_ORG_ELM_MAP",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Matrix model",
                "id": "MT_MTRX_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Process schedule",
                "id": "MT_PROC_SCH",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Transformation",
                "id": "MT_TRNS",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Mapping model",
                "id": "MT_MAP_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "XML model",
                "id": "MT_XML_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Schedule",
                "id": "MT_SCH",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Composite schedule",
                "id": "MT_COMP_SCH",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Project schedule",
                "id": "MT_PRJ_SCH",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Work breakdown structure",
                "id": "MT_WRK_BRK_STRC",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Requirements tree",
                "id": "MT_REQ_TREE",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Requirement allocation diagram",
                "id": "MT_REQ_ALLOC_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Data flow diagram",
                "id": "MT_DATA_FLOW_DGM",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Transformation profile model",
                "id": "MT_TRNS_PROF_MDL",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "BPMN allocation diagram (2.0 beta)",
                "id": "MT_BPMN_ALLOC_DGM_2",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            {
                "name": "Whiteboard",
                "id": "MT_WHITEBOARD",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            },
            // Model Type Tables End
            {
                "name": "Object Types",
                "id": "object_types",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    },
                    {
                        "key": "OrginalName",
                        "type": "string"
                    },
                    {
                        "key": "TypeNumber",
                        "type": "number"
                    },
                    {
                        "key": "ApiName",
                        "type": "string"
                    },
                    {
                        "key": "Type",
                        "type": "string"
                    },
                ],
                "documents": [
                    {
                        "Name": "Action",
                        "TypeNumber": 284,
                        "ApiName": "OT_ACTION",
                        "Type": "Default"
                    },
                ]
            },
            {
                "name": "Action",
                "id": "OT_ACTION",
                "attributes": [
                    {
                        "key": "Name",
                        "type": "string"
                    }
                ]
            }
        ]
    }
];


/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/***/ ((module) => {

module.exports = {
    application: {
        name: 'com.celmino.app.enterprise-modelling',
        path: './src/Application.ts',
        displayName: "Procetra",
        docker_container_name:"celmino",
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

/***/ "@celmino/ui":
/*!*****************************!*\
  !*** external "celmino$ui" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = celmino$ui;

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
/* harmony export */   ProcessMining: () => (/* binding */ ProcessMining)
/* harmony export */ });
/* harmony import */ var _app_controllers_AppController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/controllers/AppController */ "./src/app/controllers/AppController.tsx");
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @celmino/ui */ "@celmino/ui");
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_celmino_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_dialogs_actions_SaveDocumentAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/dialogs/actions/SaveDocumentAction */ "./src/app/dialogs/actions/SaveDocumentAction.ts");
/* harmony import */ var _app_dialogs_AddTextFieldDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/dialogs/AddTextFieldDialog */ "./src/app/dialogs/AddTextFieldDialog.ts");
/* harmony import */ var _app_dialogs_AddNumberFieldDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/dialogs/AddNumberFieldDialog */ "./src/app/dialogs/AddNumberFieldDialog.ts");
/* harmony import */ var _app_dialogs_AddAppletDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/dialogs/AddAppletDialog */ "./src/app/dialogs/AddAppletDialog.ts");
/* harmony import */ var _app_dialogs_AddBooleanFieldDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/dialogs/AddBooleanFieldDialog */ "./src/app/dialogs/AddBooleanFieldDialog.ts");
/* harmony import */ var _app_dialogs_AddDatetimeField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/dialogs/AddDatetimeField */ "./src/app/dialogs/AddDatetimeField.ts");
/* harmony import */ var _app_dialogs_AddRelationDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/dialogs/AddRelationDialog */ "./src/app/dialogs/AddRelationDialog.ts");
/* harmony import */ var _app_dialogs_FormViews_RelationFormView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app/dialogs/FormViews/RelationFormView */ "./src/app/dialogs/FormViews/RelationFormView.ts");
/* harmony import */ var _app_dialogs_AddCollection_actions_SaveCollectionAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app/dialogs/AddCollection/actions/SaveCollectionAction */ "./src/app/dialogs/AddCollection/actions/SaveCollectionAction.ts");
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
        return _app_controllers_AppController__WEBPACK_IMPORTED_MODULE_0__.MyTestController;
    };
    ProcessMining = __decorate([
        App(manifest)
    ], ProcessMining);
    return ProcessMining;
}());

_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectView('collectionSelect', _app_dialogs_AddRelationDialog__WEBPACK_IMPORTED_MODULE_8__.SelectDBCollectionView);
_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectView('relation', _app_dialogs_FormViews_RelationFormView__WEBPACK_IMPORTED_MODULE_9__.RelationFormView);
//FormBuilder.injectAction('saveSpace', SaveSpaceAction);
_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveCollection', _app_dialogs_AddCollection_actions_SaveCollectionAction__WEBPACK_IMPORTED_MODULE_10__.SaveCollectionAction);
_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveDocument', _app_dialogs_actions_SaveDocumentAction__WEBPACK_IMPORTED_MODULE_2__.SaveDocumentAction);
_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveTextField', _app_dialogs_AddTextFieldDialog__WEBPACK_IMPORTED_MODULE_3__.SaveTextFieldAction);
_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveNumberField', _app_dialogs_AddNumberFieldDialog__WEBPACK_IMPORTED_MODULE_4__.SaveNumberFieldAction);
_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveApplet', _app_dialogs_AddAppletDialog__WEBPACK_IMPORTED_MODULE_5__.SaveAppletAction);
_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveBooleanField', _app_dialogs_AddBooleanFieldDialog__WEBPACK_IMPORTED_MODULE_6__.SaveBooleanFieldAction);
_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveDatetimeField', _app_dialogs_AddDatetimeField__WEBPACK_IMPORTED_MODULE_7__.SaveDatetimeFieldAction);
_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction('saveRelationField', _app_dialogs_AddRelationDialog__WEBPACK_IMPORTED_MODULE_8__.SaveRelationFieldAction);

})();

/******/ })()
;
//# sourceMappingURL=index.js.map
                     tuval$core.ModuleLoader.FireModuleLoadedEvent('com.celmino.app.enterprise-modelling', tuval$core['__APPS__']['com.celmino.app.enterprise-modelling']);
                    
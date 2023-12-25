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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/global.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/global.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./antd.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/antd.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_overrides_prime_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./overrides/prime/index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/overrides/prime/index.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_overrides_antd_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./overrides/antd.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/overrides/antd.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_overrides_exalidraw_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./overrides/exalidraw.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/overrides/exalidraw.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_animations_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./animations.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/animations.css");
// Imports








var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_antd_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_overrides_prime_index_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_overrides_antd_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_overrides_exalidraw_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_animations_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --main-theme-color:#292F4C;\n}\n\n:root {\n  --color-highlight_blue: #cce5ff;\n  --color-basic_blue: #0073ea;\n  --color-dark_blue: #0060b9;\n  --color-bazooka: #f65f7c;\n  --color-snow_white: #ffffff;\n  --color-riverstone_gray: #f6f7fb;\n  --color-ui_grey: #dcdfec;\n  --color-wolf_gray: #c3c6d4;\n  --color-asphalt: #676879;\n  --color-mud_black: #323338;\n  --color-black: #000000;\n  --color-success: #258750;\n  --color-success-hover: #007038;\n  --color-success-highlight: #bbdbc9;\n  --color-error: #d83a52;\n  --color-error-hover: #b63546;\n  --color-error-highlight: #f4c3cb;\n  --color-link_color: #1f76c2;\n  --color-surface: #292f4c;\n  --primary-color: #0073ea;\n  --primary-hover-color: #0060b9;\n  --primary-selected-color: #cce5ff;\n  --primary-selected-hover-color: #aed4fc;\n  --primary-text-color: #292d34;\n  --text-color-on-primary: #ffffff;\n  --text-color-on-inverted: #ffffff;\n  --secondary-text-color: #676879;\n  --placeholder-color: #676879;\n  --icon-color: #676879;\n  --link-color: #1f76c2;\n  --primary-background-color: #ffffff;\n  --primary-background-hover-color: #dcdfec;\n  --secondary-background-color: #ffffff;\n  --grey-background-color: #f6f7fb;\n  --allgrey-background-color: #f6f7fb;\n  --inverted-color-background: #323338;\n  --disabled-background-color: #ecedf5;\n  --disabled-text-color: rgba(50, 51, 56, var(--disabled-component-opacity));\n  --positive-color: #258750;\n  --positive-color-hover: #007038;\n  --positive-color-selected: #bbdbc9;\n  --positive-color-selected-hover: #b5cec0;\n  --negative-color: #d83a52;\n  --negative-color-hover: #b63546;\n  --negative-color-selected: #f4c3cb;\n  --negative-color-selected-hover: #ecb7bf;\n  --private-color: #f65f7c;\n  --shareable-color: #a25ddc;\n  --ui-border-color: #c3c6d4;\n  --layout-border-color: #d0d4e4;\n  --box-shadow-xs: 0px 4px 6px -4px rgba(0, 0, 0, 0.1);\n  --box-shadow-small: 0px 4px 8px rgba(0, 0, 0, 0.2);\n  --box-shadow-medium: 0px 6px 20px rgba(0, 0, 0, 0.2);\n  --box-shadow-large: 0px 15px 50px rgba(0, 0, 0, 0.3);\n  --color-grass_green: #037f4c;\n  --color-grass_green-hover: #116846;\n  --color-grass_green-selected: #81bfa5;\n  --color-done-green: #00c875;\n  --color-done-green-hover: #0f9b63;\n  --color-done-green-selected: #80e3ba;\n  --color-done-green-selected-with-opacity: rgba(128, 227, 186, 0.6);\n  --color-bright-green: #9cd326;\n  --color-bright-green-hover: #7ca32b;\n  --color-bright-green-selected: #cde992;\n  --color-saladish: #cab641;\n  --color-saladish-hover: #9d8f3e;\n  --color-saladish-selected: #e4daa0;\n  --color-egg_yolk: #ffcb00;\n  --color-egg_yolk-hover: #c29e11;\n  --color-egg_yolk-selected: #ffe580;\n  --color-egg_yolk-rgb: 255,213,51;\n  --color-working_orange: #fdab3d;\n  --color-working_orange-hover: #c0873c;\n  --color-working_orange-selected: #fed59e;\n  --color-dark-orange: #ff642e;\n  --color-dark-orange-hover: #c25531;\n  --color-dark-orange-selected: #ffb196;\n  --color-peach: #ffadad;\n  --color-peach-hover: #c2888a;\n  --color-peach-selected: #ffd6d6;\n  --color-sunset: #ff7575;\n  --color-sunset-hover: #c26163;\n  --color-sunset-selected: #ffbaba;\n  --color-sunset-selected-with-opacity: rgba(255, 186, 186, 0.6);\n  --color-stuck-red: #e2445c;\n  --color-stuck-red-hover: #ad3f51;\n  --color-stuck-red-selected: #f0a1ad;\n  --color-dark-red: #bb3354;\n  --color-dark-red-hover: #92334c;\n  --color-dark-red-selected: #dd99a9;\n  --color-sofia_pink: #ff158a;\n  --color-sofia_pink-hover: #c21e71;\n  --color-sofia_pink-selected: #ff8ac4;\n  --color-lipstick: #ff5ac4;\n  --color-lipstick-hover: #c24e9a;\n  --color-lipstick-selected: #fface1;\n  --color-bubble: #faa1f1;\n  --color-bubble-hover: #be80ba;\n  --color-bubble-selected: #fcd0f8;\n  --color-purple: #a25ddc;\n  --color-purple-hover: #8050ab;\n  --color-purple-selected: #d0aeed;\n  --color-dark_purple: #784bd1;\n  --color-dark_purple-hover: #6344a3;\n  --color-dark_purple-selected: #bba5e8;\n  --color-berry: #7e3b8a;\n  --color-berry-hover: #673971;\n  --color-berry-selected: #be9dc4;\n  --color-dark_indigo: #401694;\n  --color-dark_indigo-hover: #3c1f78;\n  --color-dark_indigo-selected: #a08bc9;\n  --color-indigo: #5559df;\n  --color-indigo-hover: #4b4ead;\n  --color-indigo-selected: #aaacef;\n  --color-navy: #225091;\n  --color-navy-hover: #274776;\n  --color-navy-selected: #90a7c8;\n  --color-bright-blue: #579bfc;\n  --color-bright-blue-hover: #4c7cc1;\n  --color-bright-blue-selected: #abcdfd;\n  --color-dark-blue: #0086c0;\n  --color-dark-blue-hover: #0f6d97;\n  --color-dark-blue-selected: #80c2df;\n  --color-aquamarine: #4eccc6;\n  --color-aquamarine-hover: #469e9b;\n  --color-aquamarine-selected: #a6e5e2;\n  --color-chili-blue: #66ccff;\n  --color-chili-blue-hover: #569ec3;\n  --color-chili-blue-selected: #b2e5ff;\n  --color-river: #68a1bd;\n  --color-river-hover: #588095;\n  --color-river-selected: #b3d0de;\n  --color-winter: #9aadbd;\n  --color-winter-hover: #7b8895;\n  --color-winter-selected: #ccd6de;\n  --color-explosive: #c4c4c4;\n  --color-explosive-hover: #98999a;\n  --color-explosive-selected: #e1e1e1;\n  --color-american_gray: #808080;\n  --color-american_gray-hover: #69696a;\n  --color-american_gray-selected: #bfbfbf;\n  --color-blackish: #333333;\n  --color-blackish-hover: #222222;\n  --color-blackish-selected: #999999;\n  --color-brown: #7f5347;\n  --color-brown-hover: #684943;\n  --color-brown-selected: #bfa9a3;\n  --color-orchid: #D974B0;\n  --color-orchid-hover: #AE5D8D;\n  --color-orchid-selected: #ECBAD7;\n  --color-tan: #AD967A;\n  --color-tan-hover: #8A7862;\n  --color-tan-selected: #D6CABC;\n  --color-sky: #A1E3F6;\n  --color-sky-hover: #81B6C5;\n  --color-sky-selected: #D0F1FA;\n  --color-coffee: #BD816E;\n  --color-coffee-hover: #976758;\n  --color-coffee-selected: #DEC0B7;\n  --color-royal: #2B76E5;\n  --color-royal-hover: #225EB7;\n  --color-royal-selected: #95BBF2;\n  --color-teal: #175A63;\n  --color-teal-hover: #12484F;\n  --color-teal-selected: #8BACB1;\n  --color-lavender: #BDA8F9;\n  --color-lavender-hover: #9786C7;\n  --color-lavender-selected: #DED4FC;\n  --color-steel: #A9BEE8;\n  --color-steel-hover: #8798BA;\n  --color-steel-selected: #D4DFF4;\n  --color-lilac: #9D99B9;\n  --color-lilac-hover: #7E7A94;\n  --color-lilac-selected: #CECCDC;\n  --color-pecan: #563E3E;\n  --color-pecan-hover: #453232;\n  --color-pecan-selected: #AB9F9F;\n  --color-dark_marble: #f1f1f1;\n  --color-marble: #f7f7f7;\n  --color-gainsboro: #e1e1e1;\n  --color-extra_light_gray: #edeef0;\n  --color-glitter: #d9f0ff;\n  --color-ultra_light_gray: #ebebeb;\n  --color-very_light_gray: #a1a1a1;\n  --color-jaco_gray: #9699a6;\n  --color-storm_gray: #6b6d77;\n  --color-trolley-grey: #808080;\n  --color-basic_light_blue: #c7e6fa;\n  --color-light_blue: #61caf7;\n  --color-turquoise: #66ccff;\n  --color-aqua: #00d1d1;\n  --color-live_blue: #009aff;\n  --color-jeans: #597bfc;\n  --color-burned_eggplant: #181d37;\n  --color-light-pink: #ff5ac4;\n  --color-dark-pink: #ff158a;\n  --color-dark_red: #bb3354;\n  --color-yellow: #ffcb00;\n  --color-mustered: #cab641;\n  --color-orange: #fdab3d;\n  --color-lime-green: #9cd326;\n  --color-jade: #03c875;\n  --color-green-haze: #00a359;\n  --color-grass-green: #037f4c;\n  --color-amethyst: #a25ddc;\n  --color-dark-purple: #784bd1;\n  --color-blue_links: #0086c0;\n  --color-blue-links: #0086c0;\n  --color-private: #f65f7c;\n  --color-public: #009aff;\n  --color-board_views_grey: #6e6f8f;\n  --color-board_views_grey_hover: #b2b3d0;\n  --color-board_views_blue: #1c1f3b;\n  --color-board_views_blue_secondary: #363a52;\n  --color-border_light_gray: #f5f6f8;\n  --color-brand-blue: #00a9ff;\n  --color-brand-charcoal: #2b2c5c;\n  --color-brand-gold: #ffcc00;\n  --color-brand-green: #11dd80;\n  --color-brand-iris: #595ad4;\n  --color-brand-light-blue: #00cff4;\n  --color-brand-malachite: #00cd6f;\n  --color-brand-purple: #a358d0;\n  --color-brand-red: #f74875;\n  --color-deadline_upcoming_indication: #5d6387;\n  --color-default_group_color: #579bfc;\n  --color-form_btn_hover: #0083d9;\n  --color-form_purple: #575c96;\n  --color-highlight: #dff0ff;\n  --color-green_shadow: #00c875;\n  --color-green-shadow: #00c875;\n  --color-red_shadow: #e2445c;\n  --color-red-shadow: #e2445c;\n  --color-pulse_bg: #f0f0f0;\n  --color-pulse_text_color: #333333;\n  --color-placholder_gray: #d8d8d8;\n  --color-placeholder_light_gray: #efefef;\n  --color-excel-green: #207245;\n  --color-media-blue: #2ea2e9;\n  --color-pdf-red: #bb0706;\n  --color-ppt-orange: #d64e2a;\n  --color-word-blue: #2a5699;\n  --color-zip-orange: #e4901c;\n  --color-like_red: #fb275d;\n  --color-scrollbar_gray: #b2b2b2;\n  --color-timeline_grid_blue: #454662;\n  --color-timeline_blue: #1c1f3b;\n  --color-highlight_blue-rgb: 204,229,255;\n  --color-snow_white-with-opacity: rgba(255, 255, 255, 0.4);\n  --color-wolf_gray-with-opacity: rgba(195, 198, 212, 0.1);\n  --color-asphalt-with-opacity: rgba(103, 104, 121, 0.1);\n  --primary-on-secondary-color: #0073ea;\n  --primary-hover-on-secondary-color: #0060b9;\n  --primary-selected-color-rgb: 204,229,255;\n  --primary-selected-on-secondary-color: #cce5ff;\n  --primary-text-on-secondary-color: #323338;\n  --text-color-on-primary-with-opacity: rgba(255, 255, 255, 0.4);\n  --secondary-text-on-secondary-color: #676879;\n  --placeholder-color-with-opacity: rgba(103, 104, 121, 0.1);\n  --placeholder-on-secondary-color: #676879;\n  --icon-on-secondary-color: #676879;\n  --link-on-secondary-color: #1f76c2;\n  --label-background-color: #cce5ff;\n  --label-background-on-secondary-color: #cce5ff;\n  --primary-background-color-rgb: 255,255,255;\n  --primary-background-hover-on-secondary-color: #dcdfec;\n  --modal-background-color: #ffffff;\n  --secondary-background-color-rgb: 255,255,255;\n  --disabled-background-on-secondary-color: #ecedf5;\n  --disabled-text-on-secondary-color: rgba(50, 51, 56, var(--disabled-component-opacity));\n  --ui-border-on-secondary-color: #c3c6d4;\n  --layout-border-on-secondary-color: #d0d4e4;\n  --dark-background-color: #f6f7fb;\n  --dark-background-on-secondary-color: #f6f7fb;\n  --dialog-background-color: #ffffff;\n  --box-shadow-mediun: 0px 6px 20px rgba(0, 0, 0, 0.2);\n}\n\n:root {\n  --motion-productive-short: 70ms;\n  --motion-productive-medium: 100ms;\n  --motion-productive-long: 150ms;\n  --motion-expressive-short: 250ms;\n  --motion-expressive-long: 400ms;\n  --motion-timing-enter: cubic-bezier(0, 0, 0.35, 1);\n  --motion-timing-exit: cubic-bezier(0.4, 0, 1, 1);\n  --motion-timing-transition: cubic-bezier(0.4, 0, 0.2, 1);\n  --motion-timing-emphasize: cubic-bezier(0, 0, 0.2, 1.4);\n  --expand-animation-timing: var(--motion-timing-enter);\n  --spacing-xs: 4px;\n  --spacing-small: 8px;\n  --spacing-medium: 16px;\n  --spacing-large: 24px;\n  --spacing-xl: 32px;\n  --spacing-xxl: 48px;\n  --spacing-xxxl: 64px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-radius-small: 4px;\n  --border-radius-medium: 8px;\n  --border-radius-big: 16px;\n  --disabled-component-opacity: 0.38;\n  --font-family: Figtree,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif;\n  /* Figtree,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif; */\n  --title-font-family: Poppins,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif;\n  --h1-font-family: var(--title-font-family);\n  --font-smoothing-webkit: antialiased;\n  --font-smoothing-moz: grayscale;\n  --font-weight-very-light: 200;\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-bold: 500;\n  --font-size: 1rem;\n  --font-size-10: 14px;\n  --font-size-20: 14px;\n  --font-size-30: 16px;\n  --font-size-40: 18px;\n  --font-size-50: 24px;\n  --font-size-60: 30px;\n  --font-line-height-10: 18px;\n  --font-line-height-20: 24px;\n  --font-line-height-30: 24px;\n  --font-line-height-40: 24px;\n  --font-line-height-50: 32px;\n  --font-line-height-60: 42px;\n  --font-size-h1: var(--font-size-60);\n  --font-size-h2: var(--font-size-50);\n  --font-size-h3: var(--font-size-50);\n  --font-size-h4: var(--font-size-40);\n  --font-size-h5: var(--font-size-30);\n  --font-size-general-label: var(--font-size-20);\n  --font-size-paragraph: var(--font-size-30);\n  --font-size-subtext: var(--font-size-10);\n  --font-line-height-h1: var(--font-line-height-60);\n  --font-line-height-h2: var(--font-line-height-50);\n  --font-line-height-h3: var(--font-line-height-50);\n  --font-line-height-h4: var(--font-line-height-40);\n  --font-line-height-h5: var(--font-line-height-30);\n  --font-line-height-general-label: var(--font-line-height-20);\n  --font-line-height-paragraph: var(--font-line-height-30);\n  --font-line-height-subtext: var(--font-line-height-10);\n  --font-h1: var(--font-weight-bold) var(--font-size-h1)/var(--font-line-height-h1) var(--title-font-family);\n  --font-h2: var(--font-weight-bold) var(--font-size-h2)/var(--font-line-height-h2) var(--title-font-family);\n  --font-h3: var(--font-weight-light) var(--font-size-h3)/var(--font-line-height-h3) var(--title-font-family);\n  --font-h4: var(--font-weight-bold) var(--font-size-h4)/var(--font-line-height-h4) var(--title-font-family);\n  --font-h5: var(--font-weight-bold) var(--font-size-h5)/var(--font-line-height-h5) var(--font-family);\n  --font-general-label: var(--font-weight-normal) var(--font-size-general-label)/var(--font-line-height-general-label) var(--font-family);\n  --font-paragraph: var(--font-weight-normal) var(--font-size-paragraph)/var(--font-line-height-paragraph) var(--font-family);\n  --font-subtext: var(--font-weight-normal) var(--font-size-subtext)/var(--font-line-height-subtext) var(--font-family);\n}\n\n:root {\n  --react-modal-background: rgba(41, 47, 76, 0.7);\n  --application-background-color: var(--color-snow_white);\n  --application-border-color: #e6e9ef;\n  --text-color-on-card: #323338;\n  --main-nav-background-color: #292f4c;\n  --pulse-background-color: #f5f6f8;\n  --pulse-background-color-rgb: 245, 246, 248;\n  --pulse-background-color-opacity: #f5f6f880;\n  --pulse-text-color: #666;\n  --pulse-hover-background-color: #e6e9ef;\n  --pulse-selected-background-color: #e5f4ff;\n  --pulse-floating-background-color: 253, 253, 250;\n  --pulse-highlight-background-color: #cce9ff;\n  --surfce-color: rgb(51, 51, 51)/* #292f4c */;\n  --surface-border-color: #4b4e69;\n  --card-background-color: var(--primary-background-color);\n  --card-hover-background-color: white;\n  --card-selected-background-color: #d9f0ff;\n  --card-selected-text-color: #0073ea;\n  --automations-hover-background-color: #f5f6f8;\n  --automations-label-background-color: #f5f6f8;\n  --automations-border-color: #e6e9ef;\n  --automations-account-usage-background-color: white;\n  --automations-account-usage-dropdown-border-color: #d9d9d9;\n  --automations-account-usage-progressbar-background-color: #e6e9ef;\n  --apps-svg-icon-invert: invert(0);\n  --apps-code-color: #5559df;\n  --apps-feature-preview-color: #e5f4ff;\n  --apps-tabs-border-color: #1c1f3b;\n  --card-border-color: #e6e9ef;\n  --avatar-border-color: var(--color-snow_white);\n  --modal-bottom-color: #f7f7f7;\n  --modal-free-indication-color: var(--primary-selected-color);\n  --notification-unread-highlight-color: #d2eaff;\n  --apps-marketplace-highlight-color: #f5f6f8;\n  --redactor-context-background-color: #323338;\n  --redactor-context-link-color: #fff;\n  --ajax-spinner-gif-path: url(https://cdn.monday.com/images/ajax_spinner.gif);\n  --scrollbar-color: var(--color-wolf_gray);\n  --monday-loader-gif-path: url(https://cdn.monday.com/images/loader/loader.gif);\n  --hint-background-color: #ccf4e3;\n  --transparent-overlay: rgba(41, 47, 76, 0.5) !important;\n  --timeline-row-hover: rgba(210, 210, 210, 0.3);\n  --timeline-value-remains: #333333;\n  --topbar-bg-color: #eceff8 ;\n}\n\n:root {\n  --_cu-grey1100: 26, 28, 32;\n  --_cu-grey1000: 42, 46, 52;\n  --_cu-grey900: 48, 53, 60;\n  --_cu-grey800: 60, 65, 74;\n  --_cu-grey700: 79, 87, 98;\n  --_cu-grey600: 101, 111, 125;\n  --_cu-grey500: 135, 144, 158;\n  --_cu-grey400: 173, 179, 189;\n  --_cu-grey300: 214, 217, 222;\n  --_cu-grey200: 232, 234, 237;\n  --_cu-grey100: 240, 241, 243;\n  --_cu-grey50: 247, 248, 249;\n  --_cu-white: 255, 255, 255;\n  --_cu-purple1100: 50, 52, 82;\n  --_cu-purple1000: 59, 58, 112;\n  --_cu-purple900: 67, 65, 141;\n  --_cu-purple800: 76, 71, 171;\n  --_cu-purple700: 84, 77, 201;\n  --_cu-purple600: 95, 85, 238;\n  --_cu-purple500: 127, 119, 241;\n  --_cu-purple400: 153, 146, 244;\n  --_cu-purple300: 178, 173, 247;\n  --_cu-purple200: 204, 201, 250;\n  --_cu-purple100: 229, 228, 252;\n  --_cu-purple50: 242, 241, 254;\n  --_cu-neonBlue1100: 46, 55, 84;\n  --_cu-neonBlue1000: 50, 64, 117;\n  --_cu-neonBlue900: 54, 73, 149;\n  --_cu-neonBlue800: 59, 82, 182;\n  --_cu-neonBlue700: 63, 91, 214;\n  --_cu-neonBlue600: 68, 102, 255;\n  --_cu-neonBlue500: 105, 133, 255;\n  --_cu-neonBlue400: 135, 157, 255;\n  --_cu-neonBlue300: 165, 182, 255;\n  --_cu-neonBlue200: 195, 206, 255;\n  --_cu-neonBlue100: 225, 231, 255;\n  --_cu-neonBlue50: 240, 243, 255;\n  --_cu-azureBlue1100: 38, 62, 80;\n  --_cu-azureBlue1000: 34, 77, 107;\n  --_cu-azureBlue900: 30, 93, 135;\n  --_cu-azureBlue800: 25, 109, 162;\n  --_cu-azureBlue700: 21, 124, 190;\n  --_cu-azureBlue600: 16, 144, 224;\n  --_cu-azureBlue500: 64, 166, 230;\n  --_cu-azureBlue400: 102, 184, 235;\n  --_cu-azureBlue300: 140, 202, 240;\n  --_cu-azureBlue200: 179, 220, 245;\n  --_cu-azureBlue100: 217, 237, 250;\n  --_cu-azureBlue50: 236, 246, 253;\n  --_cu-teal1100: 38, 64, 69;\n  --_cu-teal1000: 33, 82, 86;\n  --_cu-teal900: 29, 99, 103;\n  --_cu-teal800: 25, 117, 120;\n  --_cu-teal700: 20, 135, 138;\n  --_cu-teal600: 15, 157, 159;\n  --_cu-teal500: 63, 177, 178;\n  --_cu-teal400: 101, 192, 194;\n  --_cu-teal300: 140, 208, 209;\n  --_cu-teal200: 178, 224, 224;\n  --_cu-teal100: 217, 239, 240;\n  --_cu-teal50: 231, 245, 245;\n  --_cu-mint1100: 45, 68, 66;\n  --_cu-mint1000: 48, 90, 80;\n  --_cu-mint900: 51, 112, 94;\n  --_cu-mint800: 54, 134, 108;\n  --_cu-mint700: 57, 156, 122;\n  --_cu-mint600: 61, 184, 139;\n  --_cu-mint500: 100, 198, 162;\n  --_cu-mint400: 131, 209, 181;\n  --_cu-mint300: 162, 221, 199;\n  --_cu-mint200: 193, 232, 218;\n  --_cu-mint100: 224, 244, 236;\n  --_cu-mint50: 240, 249, 246;\n  --_cu-green1100: 35, 60, 55;\n  --_cu-green1000: 29, 75, 57;\n  --_cu-green900: 22, 89, 60;\n  --_cu-green800: 15, 104, 62;\n  --_cu-green700: 8, 118, 65;\n  --_cu-green600: 0, 136, 68;\n  --_cu-green500: 51, 160, 105;\n  --_cu-green400: 92, 179, 135;\n  --_cu-green300: 133, 198, 165;\n  --_cu-green200: 173, 217, 195;\n  --_cu-green100: 214, 236, 225;\n  --_cu-green50: 235, 245, 240;\n  --_cu-yellow1100: 75, 66, 44;\n  --_cu-yellow1000: 108, 87, 35;\n  --_cu-yellow900: 141, 107, 27;\n  --_cu-yellow800: 174, 128, 19;\n  --_cu-yellow700: 207, 148, 10;\n  --_cu-yellow600: 248, 174, 0;\n  --_cu-yellow500: 249, 190, 51;\n  --_cu-yellow400: 251, 203, 92;\n  --_cu-yellow300: 252, 216, 133;\n  --_cu-yellow200: 253, 229, 173;\n  --_cu-yellow100: 254, 242, 214;\n  --_cu-yellow50: 254, 249, 235;\n  --_cu-orange1100: 71, 56, 47;\n  --_cu-orange1000: 101, 66, 42;\n  --_cu-orange900: 130, 75, 38;\n  --_cu-orange800: 159, 85, 33;\n  --_cu-orange700: 188, 95, 28;\n  --_cu-orange600: 225, 107, 22;\n  --_cu-orange500: 231, 137, 69;\n  --_cu-orange400: 236, 160, 106;\n  --_cu-orange300: 241, 184, 143;\n  --_cu-orange200: 245, 208, 180;\n  --_cu-orange100: 250, 231, 218;\n  --_cu-orange50: 253, 243, 236;\n  --_cu-red1100: 69, 48, 55;\n  --_cu-red1000: 96, 51, 57;\n  --_cu-red900: 123, 53, 60;\n  --_cu-red800: 150, 55, 62;\n  --_cu-red700: 177, 58, 65;\n  --_cu-red600: 211, 61, 68;\n  --_cu-red500: 220, 100, 106;\n  --_cu-red400: 227, 131, 136;\n  --_cu-red300: 234, 162, 165;\n  --_cu-red200: 241, 193, 195;\n  --_cu-red100: 248, 224, 225;\n  --_cu-red50: 252, 239, 240;\n  --_cu-pink1100: 73, 54, 68;\n  --_cu-pink1000: 105, 61, 84;\n  --_cu-pink900: 136, 69, 100;\n  --_cu-pink800: 167, 77, 117;\n  --_cu-pink700: 199, 84, 133;\n  --_cu-pink600: 238, 94, 153;\n  --_cu-pink500: 241, 126, 173;\n  --_cu-pink400: 244, 152, 190;\n  --_cu-pink300: 247, 178, 206;\n  --_cu-pink200: 250, 204, 222;\n  --_cu-pink100: 252, 229, 239;\n  --_cu-pink50: 254, 242, 247;\n  --_cu-violet1100: 64, 54, 80;\n  --_cu-violet1000: 87, 62, 107;\n  --_cu-violet900: 109, 70, 135;\n  --_cu-violet800: 132, 78, 162;\n  --_cu-violet700: 154, 86, 190;\n  --_cu-violet600: 182, 96, 224;\n  --_cu-violet500: 197, 128, 230;\n  --_cu-violet400: 208, 153, 235;\n  --_cu-violet300: 220, 179, 240;\n  --_cu-violet200: 232, 204, 245;\n  --_cu-violet100: 243, 230, 250;\n  --_cu-violet50: 249, 242, 253;\n  --_cu-brown1100: 62, 61, 64;\n  --_cu-brown1000: 83, 76, 76;\n  --_cu-brown900: 103, 92, 88;\n  --_cu-brown800: 124, 107, 101;\n  --_cu-brown700: 144, 121, 113;\n  --_cu-brown600: 170, 141, 128;\n  --_cu-brown500: 187, 163, 153;\n  --_cu-brown400: 201, 182, 174;\n  --_cu-brown300: 214, 200, 194;\n  --_cu-brown200: 228, 219, 214;\n  --_cu-brown100: 241, 237, 235;\n  --_cu-brown50: 248, 246, 245;\n  --_cu-black1100: 0, 0, 0;\n  --_cu-black1000: 10, 11, 13;\n  --_cu-black900: 19, 21, 26;\n  --_cu-black800: 29, 32, 38;\n  --_cu-black700: 38, 42, 51;\n  --_cu-black600: 48, 53, 64;\n  --_cu-black500: 89, 93, 102;\n  --_cu-black400: 123, 126, 133;\n  --_cu-black300: 156, 158, 163;\n  --_cu-black200: 189, 190, 194;\n  --_cu-black100: 222, 223, 224;\n  --_cu-black50: 238, 239, 240;\n  --cu-grey1100: rgb(var(--_cu-grey1100));\n  --cu-grey1000: rgb(var(--_cu-grey1000));\n  --cu-grey1000-50: rgb(var(--_cu-grey1000), .5);\n  --cu-grey1000-20: rgb(var(--_cu-grey1000), .2);\n  --cu-grey1000-16: rgb(var(--_cu-grey1000), .16);\n  --cu-grey1000-10: rgb(var(--_cu-grey1000), .1);\n  --cu-grey900: rgb(var(--_cu-grey900));\n  --cu-grey800: rgb(var(--_cu-grey800));\n  --cu-grey700: rgb(var(--_cu-grey700));\n  --cu-grey600: rgb(var(--_cu-grey600));\n  --cu-grey500: rgb(var(--_cu-grey500));\n  --cu-grey400: rgb(var(--_cu-grey400));\n  --cu-grey300: rgb(var(--_cu-grey300));\n  --cu-grey200: rgb(var(--_cu-grey200));\n  --cu-grey100: rgb(var(--_cu-grey100));\n  --cu-grey100-50: rgb(var(--_cu-grey100), .5);\n  --cu-grey100-20: rgb(var(--_cu-grey100), .2);\n  --cu-grey100-16: rgb(var(--_cu-grey100), .16);\n  --cu-grey100-10: rgb(var(--_cu-grey100), .1);\n  --cu-grey50: rgb(var(--_cu-grey50));\n  --cu-white: rgb(var(--_cu-white));\n  --cu-white-80: rgb(var(--_cu-white), .8);\n  --cu-white-50: rgb(var(--_cu-white), .5);\n  --cu-white-20: rgb(var(--_cu-white), .2);\n  --cu-white-16: rgb(var(--_cu-white), .16);\n  --cu-white-10: rgb(var(--_cu-white), .1);\n  --cu-green1100: rgb(var(--_cu-green1100));\n  --cu-green1000: rgb(var(--_cu-green1000));\n  --cu-green900: rgb(var(--_cu-green900));\n  --cu-green800: rgb(var(--_cu-green800));\n  --cu-green700: rgb(var(--_cu-green700));\n  --cu-green600: rgb(var(--_cu-green600));\n  --cu-green500: rgb(var(--_cu-green500));\n  --cu-green400: rgb(var(--_cu-green400));\n  --cu-green300: rgb(var(--_cu-green300));\n  --cu-green200: rgb(var(--_cu-green200));\n  --cu-green100: rgb(var(--_cu-green100));\n  --cu-green50: rgb(var(--_cu-green50));\n  --cu-yellow1100: rgb(var(--_cu-yellow1100));\n  --cu-yellow1000: rgb(var(--_cu-yellow1000));\n  --cu-yellow900: rgb(var(--_cu-yellow900));\n  --cu-yellow800: rgb(var(--_cu-yellow800));\n  --cu-yellow700: rgb(var(--_cu-yellow700));\n  --cu-yellow600: rgb(var(--_cu-yellow600));\n  --cu-yellow500: rgb(var(--_cu-yellow500));\n  --cu-yellow400: rgb(var(--_cu-yellow400));\n  --cu-yellow300: rgb(var(--_cu-yellow300));\n  --cu-yellow200: rgb(var(--_cu-yellow200));\n  --cu-yellow100: rgb(var(--_cu-yellow100));\n  --cu-yellow50: rgb(var(--_cu-yellow50));\n  --cu-red1100: rgb(var(--_cu-red1100));\n  --cu-red1000: rgb(var(--_cu-red1000));\n  --cu-red900: rgb(var(--_cu-red900));\n  --cu-red800: rgb(var(--_cu-red800));\n  --cu-red700: rgb(var(--_cu-red700));\n  --cu-red600: rgb(var(--_cu-red600));\n  --cu-red600-16: rgb(var(--_cu-red600), .16);\n  --cu-red500: rgb(var(--_cu-red500));\n  --cu-red500-16: rgb(var(--_cu-red500), .16);\n  --cu-red400: rgb(var(--_cu-red400));\n  --cu-red300: rgb(var(--_cu-red300));\n  --cu-red200: rgb(var(--_cu-red200));\n  --cu-red100: rgb(var(--_cu-red100));\n  --cu-red50: rgb(var(--_cu-red50));\n  --cu-purple1100: rgb(var(--_cu-purple1100));\n  --cu-purple1000: rgb(var(--_cu-purple1000));\n  --cu-purple900: rgb(var(--_cu-purple900));\n  --cu-purple800: rgb(var(--_cu-purple800));\n  --cu-purple700: rgb(var(--_cu-purple700));\n  --cu-purple600: rgb(var(--_cu-purple600));\n  --cu-purple600-16: rgb(var(--_cu-purple600), .16);\n  --cu-purple500: rgb(var(--_cu-purple500));\n  --cu-purple500-16: rgb(var(--_cu-purple500), .16);\n  --cu-purple400: rgb(var(--_cu-purple400));\n  --cu-purple300: rgb(var(--_cu-purple300));\n  --cu-purple200: rgb(var(--_cu-purple200));\n  --cu-purple100: rgb(var(--_cu-purple100));\n  --cu-purple50: rgb(var(--_cu-purple50));\n  --cu-neonBlue1100: rgb(var(--_cu-neonBlue1100));\n  --cu-neonBlue1000: rgb(var(--_cu-neonBlue1000));\n  --cu-neonBlue900: rgb(var(--_cu-neonBlue900));\n  --cu-neonBlue800: rgb(var(--_cu-neonBlue800));\n  --cu-neonBlue700: rgb(var(--_cu-neonBlue700));\n  --cu-neonBlue600: rgb(var(--_cu-neonBlue600));\n  --cu-neonBlue600-16: rgb(var(--_cu-neonBlue600), .16);\n  --cu-neonBlue500: rgb(var(--_cu-neonBlue500));\n  --cu-neonBlue500-16: rgb(var(--_cu-neonBlue500), .16);\n  --cu-neonBlue400: rgb(var(--_cu-neonBlue400));\n  --cu-neonBlue300: rgb(var(--_cu-neonBlue300));\n  --cu-neonBlue200: rgb(var(--_cu-neonBlue200));\n  --cu-neonBlue100: rgb(var(--_cu-neonBlue100));\n  --cu-neonBlue50: rgb(var(--_cu-neonBlue50));\n  --cu-azureBlue1100: rgb(var(--_cu-azureBlue1100));\n  --cu-azureBlue1000: rgb(var(--_cu-azureBlue1000));\n  --cu-azureBlue900: rgb(var(--_cu-azureBlue900));\n  --cu-azureBlue800: rgb(var(--_cu-azureBlue800));\n  --cu-azureBlue700: rgb(var(--_cu-azureBlue700));\n  --cu-azureBlue600: rgb(var(--_cu-azureBlue600));\n  --cu-azureBlue600-16: rgb(var(--_cu-azureBlue600), .16);\n  --cu-azureBlue500: rgb(var(--_cu-azureBlue500));\n  --cu-azureBlue500-16: rgb(var(--_cu-azureBlue500), .16);\n  --cu-azureBlue400: rgb(var(--_cu-azureBlue400));\n  --cu-azureBlue300: rgb(var(--_cu-azureBlue300));\n  --cu-azureBlue200: rgb(var(--_cu-azureBlue200));\n  --cu-azureBlue100: rgb(var(--_cu-azureBlue100));\n  --cu-azureBlue50: rgb(var(--_cu-azureBlue50));\n  --cu-teal1100: rgb(var(--_cu-teal1100));\n  --cu-teal1000: rgb(var(--_cu-teal1000));\n  --cu-teal900: rgb(var(--_cu-teal900));\n  --cu-teal800: rgb(var(--_cu-teal800));\n  --cu-teal700: rgb(var(--_cu-teal700));\n  --cu-teal600: rgb(var(--_cu-teal600));\n  --cu-teal600-16: rgb(var(--_cu-teal600), .16);\n  --cu-teal500: rgb(var(--_cu-teal500));\n  --cu-teal500-16: rgb(var(--_cu-teal500), .16);\n  --cu-teal400: rgb(var(--_cu-teal400));\n  --cu-teal300: rgb(var(--_cu-teal300));\n  --cu-teal200: rgb(var(--_cu-teal200));\n  --cu-teal100: rgb(var(--_cu-teal100));\n  --cu-teal50: rgb(var(--_cu-teal50));\n  --cu-mint1100: rgb(var(--_cu-mint1100));\n  --cu-mint1000: rgb(var(--_cu-mint1000));\n  --cu-mint900: rgb(var(--_cu-mint900));\n  --cu-mint800: rgb(var(--_cu-mint800));\n  --cu-mint700: rgb(var(--_cu-mint700));\n  --cu-mint600: rgb(var(--_cu-mint600));\n  --cu-mint600-16: rgb(var(--_cu-mint600), .16);\n  --cu-mint500: rgb(var(--_cu-mint500));\n  --cu-mint500-16: rgb(var(--_cu-mint500), .16);\n  --cu-mint400: rgb(var(--_cu-mint400));\n  --cu-mint300: rgb(var(--_cu-mint300));\n  --cu-mint200: rgb(var(--_cu-mint200));\n  --cu-mint100: rgb(var(--_cu-mint100));\n  --cu-mint50: rgb(var(--_cu-mint50));\n  --cu-orange1100: rgb(var(--_cu-orange1100));\n  --cu-orange1000: rgb(var(--_cu-orange1000));\n  --cu-orange900: rgb(var(--_cu-orange900));\n  --cu-orange800: rgb(var(--_cu-orange800));\n  --cu-orange700: rgb(var(--_cu-orange700));\n  --cu-orange600: rgb(var(--_cu-orange600));\n  --cu-orange600-16: rgb(var(--_cu-orange600), .16);\n  --cu-orange500: rgb(var(--_cu-orange500));\n  --cu-orange500-16: rgb(var(--_cu-orange500), .16);\n  --cu-orange400: rgb(var(--_cu-orange400));\n  --cu-orange300: rgb(var(--_cu-orange300));\n  --cu-orange200: rgb(var(--_cu-orange200));\n  --cu-orange100: rgb(var(--_cu-orange100));\n  --cu-orange50: rgb(var(--_cu-orange50));\n  --cu-pink1100: rgb(var(--_cu-pink1100));\n  --cu-pink1000: rgb(var(--_cu-pink1000));\n  --cu-pink900: rgb(var(--_cu-pink900));\n  --cu-pink800: rgb(var(--_cu-pink800));\n  --cu-pink700: rgb(var(--_cu-pink700));\n  --cu-pink600: rgb(var(--_cu-pink600));\n  --cu-pink600-16: rgb(var(--_cu-pink600), .16);\n  --cu-pink500: rgb(var(--_cu-pink500));\n  --cu-pink500-16: rgb(var(--_cu-pink500), .16);\n  --cu-pink400: rgb(var(--_cu-pink400));\n  --cu-pink300: rgb(var(--_cu-pink300));\n  --cu-pink200: rgb(var(--_cu-pink200));\n  --cu-pink100: rgb(var(--_cu-pink100));\n  --cu-pink50: rgb(var(--_cu-pink50));\n  --cu-violet1100: rgb(var(--_cu-violet1100));\n  --cu-violet1000: rgb(var(--_cu-violet1000));\n  --cu-violet900: rgb(var(--_cu-violet900));\n  --cu-violet800: rgb(var(--_cu-violet800));\n  --cu-violet700: rgb(var(--_cu-violet700));\n  --cu-violet600: rgb(var(--_cu-violet600));\n  --cu-violet600-16: rgb(var(--_cu-violet600), .16);\n  --cu-violet500: rgb(var(--_cu-violet500));\n  --cu-violet500-16: rgb(var(--_cu-violet500), .16);\n  --cu-violet400: rgb(var(--_cu-violet400));\n  --cu-violet300: rgb(var(--_cu-violet300));\n  --cu-violet200: rgb(var(--_cu-violet200));\n  --cu-violet100: rgb(var(--_cu-violet100));\n  --cu-violet50: rgb(var(--_cu-violet50));\n  --cu-brown1100: rgb(var(--_cu-brown1100));\n  --cu-brown1000: rgb(var(--_cu-brown1000));\n  --cu-brown900: rgb(var(--_cu-brown900));\n  --cu-brown800: rgb(var(--_cu-brown800));\n  --cu-brown700: rgb(var(--_cu-brown700));\n  --cu-brown600: rgb(var(--_cu-brown600));\n  --cu-brown600-16: rgb(var(--_cu-brown600), .16);\n  --cu-brown500: rgb(var(--_cu-brown500));\n  --cu-brown500-16: rgb(var(--_cu-brown500), .16);\n  --cu-brown400: rgb(var(--_cu-brown400));\n  --cu-brown300: rgb(var(--_cu-brown300));\n  --cu-brown200: rgb(var(--_cu-brown200));\n  --cu-brown100: rgb(var(--_cu-brown100));\n  --cu-brown50: rgb(var(--_cu-brown50));\n  --cu-black1100: rgb(var(--_cu-black1100));\n  --cu-black1000: rgb(var(--_cu-black1000));\n  --cu-black900: rgb(var(--_cu-black900));\n  --cu-black800: rgb(var(--_cu-black800));\n  --cu-black700: rgb(var(--_cu-black700));\n  --cu-black600: rgb(var(--_cu-black600));\n  --cu-black600-16: rgb(var(--_cu-black600), .16);\n  --cu-black500: rgb(var(--_cu-black500));\n  --cu-black500-16: rgb(var(--_cu-black500), .16);\n  --cu-black400: rgb(var(--_cu-black400));\n  --cu-black300: rgb(var(--_cu-black300));\n  --cu-black200: rgb(var(--_cu-black200));\n  --cu-black100: rgb(var(--_cu-black100));\n  --cu-black50: rgb(var(--_cu-black50)) ;\n}\n\nbody {\n  --rem-divisor: 16;\n  --rem-return-unit: 1rem ;\n}\n\nbody {\n  --cu-size-1: calc(4 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-size-2: calc(8 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-size-3: calc(12 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-size-4: calc(16 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-size-5: calc(20 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-size-6: calc(24 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-size-7: calc(28 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-size-8: calc(32 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-size-9: calc(36 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-size-10: calc(40 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-size-11: calc(44 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-size-12: calc(48 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-radii-1: calc(2 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-radii-2: calc(4 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-radii-3: calc(6 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-radii-4: calc(8 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-radii-5: calc(10 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-radii-6: calc(12 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-radii-7: calc(16 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-radii-8: calc(20 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-radii-9: calc(24 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-radii-round: calc(666 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-border-size-1: 1px;\n  --cu-border-size-2: 2px ;\n}\n\nbody {\n  --cu-font-family: -apple-system, \"BlinkMacSystemFont\", \"Segoe UI\", \"Helvetica\", \"Apple Color Emoji\", \"Arial\", sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  --cu-font-weight-regular: 400;\n  --cu-font-weight-medium: 500;\n  --cu-font-weight-semibold: 600;\n  --cu-font-weight-bold: 700;\n  --cu-font-size-1: calc(6 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-font-size-2: calc(8 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-font-size-3: calc(10 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-font-size-4: calc(11 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-font-size-5: calc(12 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-font-size-6: calc(14 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-font-size-7: calc(16 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-font-size-8: calc(18 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-font-size-9: calc(20 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-font-size-10: calc(22 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-font-size-11: calc(24 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-font-size-12: calc(28 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-font-size-13: calc(32 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-font-size-14: calc(36 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-font-size-15: calc(40 / var(--rem-divisor) * var(--rem-return-unit));\n  --cu-label-weight: var(--cu-font-weight-regular);\n  --cu-label-weight-strong: var(--cu-font-weight-medium);\n  --cu-label-large-font-size: var(--cu-font-size-8);\n  --cu-label-large-line-height: 1.33;\n  --cu-label-medium-font-size: var(--cu-font-size-7);\n  --cu-label-medium-line-height: 1.25;\n  --cu-label-small-font-size: var(--cu-font-size-6);\n  --cu-label-small-line-height: 1.14;\n  --cu-label-xsmall-font-size: var(--cu-font-size-5);\n  --cu-label-xsmall-line-height: 1.33;\n  --cu-paragraph-weight: var(--cu-font-weight-regular);\n  --cu-paragraph-weight-strong: var(--cu-font-weight-medium);\n  --cu-paragraph-line-height: 1.5;\n  --cu-paragraph-large-font-size: var(--cu-font-size-7);\n  --cu-paragraph-large-line-height: var(--cu-paragraph-line-height);\n  --cu-paragraph-medium-font-size: var(--cu-font-size-6);\n  --cu-paragraph-medium-line-height: var(--cu-paragraph-line-height);\n  --cu-paragraph-small-font-size: var(--cu-font-size-5);\n  --cu-paragraph-small-line-height: var(--cu-paragraph-line-height);\n  --cu-heading-weight: var(--cu-font-weight-semibold);\n  --cu-heading-line-height: 1.5;\n  --cu-heading-h1-font-size: var(--cu-font-size-15);\n  --cu-heading-h2-font-size: var(--cu-font-size-13);\n  --cu-heading-h3-font-size: var(--cu-font-size-11);\n  --cu-heading-h4-font-size: var(--cu-font-size-9);\n  --cu-heading-h5-font-size: var(--cu-font-size-8);\n  --cu-heading-h6-font-size: var(--cu-font-size-7);\n  --cu-heading-xxsmall-font-size: var(--cu-font-size-6);\n  --cu-heading-xxsmall-line-height: var(--cu-heading-line-height);\n  --cu-heading-caption-font-size: var(--cu-font-size-4);\n  --cu-heading-caption-line-height: var(--cu-heading-line-height) ;\n}\n\nbody:not(.cu-purple, .cu-neonBlue, .cu-azureBlue, .cu-teal, .cu-mint, .cu-orange, .cu-pink, .cu-violet, .cu-brown, .cu-black, .cu-custom) {\n  --cu-background-primary: var(--theme-main-color, #7b68ee);\n  --cu-background-primary-hover: var(--theme-main-color-dark, #5f48ea);\n  --cu-background-primary-pressed: var(--theme-main-color-dark, #5f48ea);\n  --cu-background-primary-disabled: var(--theme-main-color-light, #d3cdf9);\n  --cu-background-primary-subtle: rgb( var(--theme-main-color-rgb, 123, 104, 238), .12 );\n  --cu-background-primary-on-subtle: rgb( var(--theme-main-color-rgb, 123, 104, 238), .18 );\n  --cu-content-primary: var(--theme-main-color, #7b68ee);\n  --cu-border-primary: var(--theme-main-color, #7b68ee);\n  --cu-border-primary-focus: var(--theme-main-color, #7b68ee);\n  --cu-effect-primary: rgb(var(--theme-main-color-rgb, 123, 104, 238), .2);\n  --cu-link-primary: var(--theme-main-color, #7b68ee);\n  --cu-link-primary-hover: var(--theme-main-color-dark, #5f48ea) ;\n}\n\nbody.dark-theme:not(.cu-purple, .cu-neonBlue, .cu-azureBlue, .cu-teal, .cu-mint, .cu-orange, .cu-pink, .cu-violet, .cu-brown, .cu-black, .cu-custom), .dark-sidebar {\n  --cu-background-primary: var(--theme-main-color, #7b68ee);\n  --cu-background-primary-hover: var(--theme-main-color-dark, #5f48ea);\n  --cu-background-primary-pressed: var(--theme-main-color, #7b68ee);\n  --cu-background-primary-disabled: rgb( var(--theme-main-color-rgb, 123, 104, 238), .5 );\n  --cu-background-primary-subtle: rgb( var(--theme-main-color-rgb, 123, 104, 238), .22 );\n  --cu-background-primary-on-subtle: rgb( var(--theme-main-color-rgb, 123, 104, 238), .3 );\n  --cu-content-primary: var(--theme-main-color, #7b68ee);\n  --cu-border-primary: var(--theme-main-color, #7b68ee);\n  --cu-border-primary-focus: var(--theme-main-color, #7b68ee);\n  --cu-effect-primary: rgb(var(--theme-main-color-rgb, 123, 104, 238), .2);\n  --cu-link-primary: var(--theme-main-color, #7b68ee);\n  --cu-link-primary-hover: var(--theme-main-color-dark, #5f48ea) ;\n}\n\nbody.dark-theme, .dark-sidebar {\n  --cu-background-main: var(--cu-grey1000);\n  --cu-background-main-hover: var(--cu-grey900);\n  --cu-background-main-hover-strong: var(--cu-grey800);\n  --cu-background-main-pressed: var(--cu-grey700);\n  --cu-background-main-offset: var(--cu-grey900);\n  --cu-background-main-inverse: var(--cu-white);\n  --cu-background-main-inverse-offset: var(--cu-grey700);\n  --cu-background-subtle: var(--cu-grey900);\n  --cu-background-subtle-hover: var(--cu-grey800);\n  --cu-background-subtle-hover-strong: var(--cu-grey700);\n  --cu-background-subtle-pressed: var(--cu-grey600);\n  --cu-background-subtle-offset: var(--cu-grey1000);\n  --cu-background-on-main: var(--cu-grey800);\n  --cu-background-on-main-hover: var(--cu-grey700);\n  --cu-background-on-main-pressed: var(--cu-grey600);\n  --cu-background-on-subtle: var(--cu-grey700);\n  --cu-background-on-subtle-hover: var(--cu-grey600);\n  --cu-background-on-subtle-pressed: var(--cu-grey700);\n  --cu-background-success: var(--cu-green500);\n  --cu-background-success-subtle: var(--cu-green1100);\n  --cu-background-warning: var(--cu-yellow500);\n  --cu-background-warning-subtle: var(--cu-yellow1100);\n  --cu-background-danger: var(--cu-red500);\n  --cu-background-danger-hover: var(--cu-red400);\n  --cu-background-danger-pressed: var(--cu-red500);\n  --cu-background-danger-disabled: var(--cu-red900);\n  --cu-background-danger-subtle: var(--cu-red1100);\n  --cu-background-danger-subtle-hover: var(--cu-red1000);\n  --cu-background-danger-subtle-pressed: var(--cu-red1100);\n  --cu-background-tooltip: var(--cu-grey700);\n  --cu-background-modal: var(--cu-grey700);\n  --cu-background-on-dark-hover: var(--cu-white-10);\n  --cu-background-on-dark-pressed: var(--cu-white-20);\n  --cu-background-on-light-hover: var(--cu-grey1000-10);\n  --cu-background-on-light-pressed: var(--cu-grey1000-20);\n  --cu-background-notification: var(--cu-pink500);\n  --cu-content-default: var(--cu-grey100);\n  --cu-content-secondary: var(--cu-grey400);\n  --cu-content-tertiary: var(--cu-grey500);\n  --cu-content-placeholder: var(--cu-grey600);\n  --cu-content-disabled: var(--cu-grey700);\n  --cu-content-success: var(--cu-green400);\n  --cu-content-warning: var(--cu-yellow400);\n  --cu-content-danger: var(--cu-red400);\n  --cu-content-danger-disabled: var(--cu-red900);\n  --cu-content-on-dark: var(--cu-white);\n  --cu-content-on-dark-disabled: var(--cu-white-50);\n  --cu-content-on-dark-secondary: var(--cu-white-80);\n  --cu-content-on-light: var(--cu-grey1000);\n  --cu-content-on-light-disabled: var(--cu-grey1000-50);\n  --cu-border-default: var(--cu-grey800);\n  --cu-border-low-contrast: var(--cu-grey900);\n  --cu-border-high-contrast: var(--cu-grey700);\n  --cu-border-hover: var(--cu-grey600);\n  --cu-border-input: var(--cu-grey600);\n  --cu-border-input-hover: var(--cu-grey500);\n  --cu-border-success: var(--cu-green500);\n  --cu-border-danger: var(--cu-red500);\n  --cu-border-danger-focus: var(--cu-red500);\n  --cu-border-warning: var(--cu-yellow500);\n  --cu-border-on-dark: var(--cu-white-50);\n  --cu-border-on-dark-focus: var(--cu-white);\n  --cu-border-on-light: var(--cu-grey1000-50);\n  --cu-border-on-light-focus: var(--cu-grey1000);\n  --cu-effect-danger: var(--cu-red500-16);\n  --cu-effect-on-dark: var(--cu-white-16);\n  --cu-effect-on-light: var(--cu-grey1000-16);\n  --cu-link-hyperlink: var(--cu-neonBlue400);\n  --cu-link-hyperlink-hover: var(--cu-neonBlue300);\n  --cu-fab-icon-pink: var(--cu-pink500);\n  --cu-fab-icon-yellow: var(--cu-yellow500);\n  --cu-fab-icon-mint: var(--cu-mint500);\n  --cu-fab-icon-azure-blue: var(--cu-azureBlue500);\n  --cu-alert-banner-background: var(--cu-grey700);\n  --cu-alert-banner-background-subtle: var(--cu-grey900);\n  --cu-alert-banner-content: var(--cu-grey100);\n  --cu-alert-banner-content-dark: var(--cu-grey1000);\n  --cu-avatar-user-bg-purple: var(--cu-purple500);\n  --cu-avatar-user-bg-neon-blue: var(--cu-neonBlue500);\n  --cu-avatar-user-bg-azure-blue: var(--cu-azureBlue500);\n  --cu-avatar-user-bg-teal: var(--cu-teal500);\n  --cu-avatar-user-bg-mint: var(--cu-mint500);\n  --cu-avatar-user-bg-yellow: var(--cu-yellow500);\n  --cu-avatar-user-bg-orange: var(--cu-orange500);\n  --cu-avatar-user-bg-red: var(--cu-red500);\n  --cu-avatar-user-bg-pink: var(--cu-pink500);\n  --cu-avatar-user-bg-violet: var(--cu-violet500);\n  --cu-avatar-user-bg-brown: var(--cu-brown500);\n  --cu-avatar-user-bg-black: var(--cu-black500);\n  --cu-avatar-user-online: var(--cu-green400);\n  --cu-avatar-user-guest: var(--cu-grey400);\n  --cu-avatar-user-remove: var(--cu-grey700);\n  --cu-automations-usage-bg-neon-blue: var(--cu-neonBlue1100);\n  --cu-automations-usage-content-neon-blue: var(--cu-neonBlue400);\n  --cu-automations-usage-bg-teal: var(--cu-teal1100);\n  --cu-automations-usage-content-teal: var(--cu-teal400);\n  --cu-avatar-space-bg-purple: var(--cu-purple900);\n  --cu-avatar-space-bg-neon-blue: var(--cu-neonBlue900);\n  --cu-avatar-space-bg-azure-blue: var(--cu-azureBlue900);\n  --cu-avatar-space-bg-teal: var(--cu-teal900);\n  --cu-avatar-space-bg-mint: var(--cu-mint900);\n  --cu-avatar-space-bg-yellow: var(--cu-yellow900);\n  --cu-avatar-space-bg-orange: var(--cu-orange900);\n  --cu-avatar-space-bg-red: var(--cu-red900);\n  --cu-avatar-space-bg-pink: var(--cu-pink900);\n  --cu-avatar-space-bg-violet: var(--cu-violet900);\n  --cu-avatar-space-bg-brown: var(--cu-brown900);\n  --cu-avatar-space-bg-black: var(--cu-black900);\n  --cu-avatar-space-content-purple: var(--cu-purple100);\n  --cu-avatar-space-content-neon-blue: var(--cu-neonBlue100);\n  --cu-avatar-space-content-azure-blue: var(--cu-azureBlue100);\n  --cu-avatar-space-content-teal: var(--cu-teal100);\n  --cu-avatar-space-content-mint: var(--cu-mint100);\n  --cu-avatar-space-content-yellow: var(--cu-yellow100);\n  --cu-avatar-space-content-orange: var(--cu-orange100);\n  --cu-avatar-space-content-red: var(--cu-red100);\n  --cu-avatar-space-content-pink: var(--cu-pink100);\n  --cu-avatar-space-content-violet: var(--cu-violet100);\n  --cu-avatar-space-content-brown: var(--cu-brown100);\n  --cu-avatar-space-content-black: var(--cu-black100);\n  --cu-quill-banner-red: var(--cu-red1100);\n  --cu-quill-banner-orange: var(--cu-orange1100);\n  --cu-quill-banner-yellow: var(--cu-yellow1100);\n  --cu-quill-banner-azure-blue: var(--cu-azureBlue1100);\n  --cu-quill-banner-purple: var(--cu-purple1100);\n  --cu-quill-banner-pink: var(--cu-pink1100);\n  --cu-quill-banner-green: var(--cu-green1100);\n  --cu-quill-banner-black: var(--cu-black1100);\n  --cu-quill-banner-border-red: var(--cu-red500);\n  --cu-quill-banner-border-orange: var(--cu-orange500);\n  --cu-quill-banner-border-yellow: var(--cu-yellow500);\n  --cu-quill-banner-border-azure-blue: var(--cu-azureBlue500);\n  --cu-quill-banner-border-purple: var(--cu-purple500);\n  --cu-quill-banner-border-pink: var(--cu-pink500);\n  --cu-quill-banner-border-green: var(--cu-green500);\n  --cu-quill-banner-border-black: var(--cu-black500);\n  --cu-background-overlay: rgba(var(--_cu-grey1100), .64);\n  --cu-background-overlay-light: rgba(var(--_cu-grey1100), .32);\n  --cu-elevation-1: 0 calc(1 / var(--rem-divisor) * var(--rem-return-unit)) calc(4 / var(--rem-divisor) * var(--rem-return-unit)) rgba(0, 0, 0, .16);\n  --cu-elevation-2: 0 calc(2 / var(--rem-divisor) * var(--rem-return-unit)) calc(8 / var(--rem-divisor) * var(--rem-return-unit)) rgba(0, 0, 0, .16);\n  --cu-elevation-3: 0 calc(4 / var(--rem-divisor) * var(--rem-return-unit)) calc(16 / var(--rem-divisor) * var(--rem-return-unit)) rgba(0, 0, 0, .16);\n  --cu-elevation-4: 0 calc(6 / var(--rem-divisor) * var(--rem-return-unit)) calc(24 / var(--rem-divisor) * var(--rem-return-unit)) rgba(0, 0, 0, .16) ;\n}\n\nbody.dark-theme.cu-purple, body.cu-purple .dark-sidebar {\n  --cu-background-primary: var(--cu-purple500);\n  --cu-background-primary-hover: var(--cu-purple400);\n  --cu-background-primary-pressed: var(--cu-purple500);\n  --cu-background-primary-disabled: var(--cu-purple900);\n  --cu-background-primary-subtle: var(--cu-purple1100);\n  --cu-background-primary-on-subtle: var(--cu-purple1000);\n  --cu-content-primary: var(--cu-purple400);\n  --cu-border-primary: var(--cu-purple500);\n  --cu-border-primary-focus: var(--cu-purple500);\n  --cu-effect-primary: var(--cu-purple500-16);\n  --cu-link-primary: var(--cu-purple400);\n  --cu-link-primary-hover: var(--cu-purple300) ;\n}\n\nbody.dark-theme.cu-neonBlue, body.cu-neonBlue .dark-sidebar {\n  --cu-background-primary: var(--cu-neonBlue500);\n  --cu-background-primary-hover: var(--cu-neonBlue400);\n  --cu-background-primary-pressed: var(--cu-neonBlue500);\n  --cu-background-primary-disabled: var(--cu-neonBlue900);\n  --cu-background-primary-subtle: var(--cu-neonBlue1100);\n  --cu-background-primary-on-subtle: var(--cu-neonBlue1000);\n  --cu-content-primary: var(--cu-neonBlue400);\n  --cu-border-primary: var(--cu-neonBlue500);\n  --cu-border-primary-focus: var(--cu-neonBlue500);\n  --cu-effect-primary: var(--cu-neonBlue500-16);\n  --cu-link-primary: var(--cu-neonBlue400);\n  --cu-link-primary-hover: var(--cu-neonBlue300) ;\n}\n\nbody.dark-theme.cu-azureBlue, body.cu-azureBlue .dark-sidebar {\n  --cu-background-primary: var(--cu-azureBlue500);\n  --cu-background-primary-hover: var(--cu-azureBlue400);\n  --cu-background-primary-pressed: var(--cu-azureBlue500);\n  --cu-background-primary-disabled: var(--cu-azureBlue900);\n  --cu-background-primary-subtle: var(--cu-azureBlue1100);\n  --cu-background-primary-on-subtle: var(--cu-azureBlue1000);\n  --cu-content-primary: var(--cu-azureBlue400);\n  --cu-border-primary: var(--cu-azureBlue500);\n  --cu-border-primary-focus: var(--cu-azureBlue500);\n  --cu-effect-primary: var(--cu-azureBlue500-16);\n  --cu-link-primary: var(--cu-azureBlue400);\n  --cu-link-primary-hover: var(--cu-azureBlue300) ;\n}\n\nbody.dark-theme.cu-teal, body.cu-teal .dark-sidebar {\n  --cu-background-primary: var(--cu-teal500);\n  --cu-background-primary-hover: var(--cu-teal400);\n  --cu-background-primary-pressed: var(--cu-teal500);\n  --cu-background-primary-disabled: var(--cu-teal900);\n  --cu-background-primary-subtle: var(--cu-teal1100);\n  --cu-background-primary-on-subtle: var(--cu-teal1000);\n  --cu-content-primary: var(--cu-teal400);\n  --cu-border-primary: var(--cu-teal500);\n  --cu-border-primary-focus: var(--cu-teal500);\n  --cu-effect-primary: var(--cu-teal500-16);\n  --cu-link-primary: var(--cu-teal400);\n  --cu-link-primary-hover: var(--cu-teal300) ;\n}\n\nbody.dark-theme.cu-mint, body.cu-mint .dark-sidebar {\n  --cu-background-primary: var(--cu-mint500);\n  --cu-background-primary-hover: var(--cu-mint400);\n  --cu-background-primary-pressed: var(--cu-mint500);\n  --cu-background-primary-disabled: var(--cu-mint900);\n  --cu-background-primary-subtle: var(--cu-mint1100);\n  --cu-background-primary-on-subtle: var(--cu-mint1000);\n  --cu-content-primary: var(--cu-mint400);\n  --cu-border-primary: var(--cu-mint500);\n  --cu-border-primary-focus: var(--cu-mint500);\n  --cu-effect-primary: var(--cu-mint500-16);\n  --cu-link-primary: var(--cu-mint400);\n  --cu-link-primary-hover: var(--cu-mint300) ;\n}\n\nbody.dark-theme.cu-orange, body.cu-orange .dark-sidebar {\n  --cu-background-primary: var(--cu-orange500);\n  --cu-background-primary-hover: var(--cu-orange400);\n  --cu-background-primary-pressed: var(--cu-orange500);\n  --cu-background-primary-disabled: var(--cu-orange900);\n  --cu-background-primary-subtle: var(--cu-orange1100);\n  --cu-background-primary-on-subtle: var(--cu-orange1000);\n  --cu-content-primary: var(--cu-orange400);\n  --cu-border-primary: var(--cu-orange500);\n  --cu-border-primary-focus: var(--cu-orange500);\n  --cu-effect-primary: var(--cu-orange500-16);\n  --cu-link-primary: var(--cu-orange400);\n  --cu-link-primary-hover: var(--cu-orange300) ;\n}\n\nbody.dark-theme.cu-pink, body.cu-pink .dark-sidebar {\n  --cu-background-primary: var(--cu-pink500);\n  --cu-background-primary-hover: var(--cu-pink400);\n  --cu-background-primary-pressed: var(--cu-pink500);\n  --cu-background-primary-disabled: var(--cu-pink900);\n  --cu-background-primary-subtle: var(--cu-pink1100);\n  --cu-background-primary-on-subtle: var(--cu-pink1000);\n  --cu-content-primary: var(--cu-pink400);\n  --cu-border-primary: var(--cu-pink500);\n  --cu-border-primary-focus: var(--cu-pink500);\n  --cu-effect-primary: var(--cu-pink500-16);\n  --cu-link-primary: var(--cu-pink400);\n  --cu-link-primary-hover: var(--cu-pink300) ;\n}\n\nbody.dark-theme.cu-violet, body.cu-violet .dark-sidebar {\n  --cu-background-primary: var(--cu-violet500);\n  --cu-background-primary-hover: var(--cu-violet400);\n  --cu-background-primary-pressed: var(--cu-violet500);\n  --cu-background-primary-disabled: var(--cu-violet900);\n  --cu-background-primary-subtle: var(--cu-violet1100);\n  --cu-background-primary-on-subtle: var(--cu-violet1000);\n  --cu-content-primary: var(--cu-violet400);\n  --cu-border-primary: var(--cu-violet500);\n  --cu-border-primary-focus: var(--cu-violet500);\n  --cu-effect-primary: var(--cu-violet500-16);\n  --cu-link-primary: var(--cu-violet400);\n  --cu-link-primary-hover: var(--cu-violet300) ;\n}\n\nbody.dark-theme.cu-brown, body.cu-brown .dark-sidebar {\n  --cu-background-primary: var(--cu-brown500);\n  --cu-background-primary-hover: var(--cu-brown400);\n  --cu-background-primary-pressed: var(--cu-brown500);\n  --cu-background-primary-disabled: var(--cu-brown900);\n  --cu-background-primary-subtle: var(--cu-brown1100);\n  --cu-background-primary-on-subtle: var(--cu-brown1000);\n  --cu-content-primary: var(--cu-brown400);\n  --cu-border-primary: var(--cu-brown500);\n  --cu-border-primary-focus: var(--cu-brown500);\n  --cu-effect-primary: var(--cu-brown500-16);\n  --cu-link-primary: var(--cu-brown400);\n  --cu-link-primary-hover: var(--cu-brown300) ;\n}\n\nbody.dark-theme.cu-black, body.cu-black .dark-sidebar {\n  --cu-background-primary: var(--cu-black500);\n  --cu-background-primary-hover: var(--cu-black400);\n  --cu-background-primary-pressed: var(--cu-black500);\n  --cu-background-primary-disabled: var(--cu-black900);\n  --cu-background-primary-subtle: var(--cu-black1100);\n  --cu-background-primary-on-subtle: var(--cu-black1000);\n  --cu-content-primary: var(--cu-black400);\n  --cu-border-primary: var(--cu-black500);\n  --cu-border-primary-focus: var(--cu-black500);\n  --cu-effect-primary: var(--cu-black500-16);\n  --cu-link-primary: var(--cu-black400);\n  --cu-link-primary-hover: var(--cu-black300) ;\n}\n\nbody.dark-theme.cu-custom, body.cu-custom .dark-sidebar {\n  --cu-custom1100: hsl(var(--cu-custom-hue, 83), 19%, 26%);\n  --cu-custom1000: hsl(var(--cu-custom-hue, 83), 27%, 33%);\n  --cu-custom900: hsl(var(--cu-custom-hue, 83), 32%, 40%);\n  --cu-custom800: hsl(var(--cu-custom-hue, 83), 35%, 47%);\n  --cu-custom700: hsl(var(--cu-custom-hue, 83), 44%, 54%);\n  --cu-custom600: hsl(var(--cu-custom-hue, 83), 67%, 63%);\n  --cu-custom600-16: hsl(var(--cu-custom-hue, 83), 67%, 63%, 16%);\n  --cu-custom500: hsl(var(--cu-custom-hue, 83), 67%, 70%);\n  --cu-custom500-16: hsl(var(--cu-custom-hue, 83), 67%, 70%, 16%);\n  --cu-custom400: hsl(var(--cu-custom-hue, 83), 67%, 76%);\n  --cu-custom300: hsl(var(--cu-custom-hue, 83), 67%, 82%);\n  --cu-custom200: hsl(var(--cu-custom-hue, 83), 67%, 88%);\n  --cu-custom100: hsl(var(--cu-custom-hue, 83), 67%, 94%);\n  --cu-custom50: hsl(var(--cu-custom-hue, 83), 73%, 97%);\n  --cu-background-primary: var(--cu-custom500);\n  --cu-background-primary-hover: var(--cu-custom400);\n  --cu-background-primary-pressed: var(--cu-custom500);\n  --cu-background-primary-disabled: var(--cu-custom900);\n  --cu-background-primary-subtle: var(--cu-custom1100);\n  --cu-background-primary-on-subtle: var(--cu-custom1000);\n  --cu-content-primary: var(--cu-custom400);\n  --cu-border-primary: var(--cu-custom500);\n  --cu-border-primary-focus: var(--cu-custom500);\n  --cu-effect-primary: var(--cu-custom500-16);\n  --cu-link-primary: var(--cu-custom400);\n  --cu-link-primary-hover: var(--cu-custom300) ;\n}\n\nbody {\n  --cu-background-main: var(--cu-white);\n  --cu-background-main-hover: var(--cu-grey50);\n  --cu-background-main-hover-strong: var(--cu-grey100);\n  --cu-background-main-pressed: var(--cu-grey200);\n  --cu-background-main-offset: var(--cu-white);\n  --cu-background-main-inverse: var(--cu-grey1000);\n  --cu-background-main-inverse-offset: var(--cu-grey1000);\n  --cu-background-subtle: var(--cu-grey50);\n  --cu-background-subtle-hover: var(--cu-grey100);\n  --cu-background-subtle-hover-strong: var(--cu-grey200);\n  --cu-background-subtle-pressed: var(--cu-grey300);\n  --cu-background-subtle-offset: var(--cu-grey50);\n  --cu-background-on-main: var(--cu-grey100);\n  --cu-background-on-main-hover: var(--cu-grey200);\n  --cu-background-on-main-pressed: var(--cu-grey300);\n  --cu-background-on-subtle: var(--cu-grey200);\n  --cu-background-on-subtle-hover: var(--cu-grey300);\n  --cu-background-on-subtle-pressed: var(--cu-grey200);\n  --cu-background-success: var(--cu-green600);\n  --cu-background-success-subtle: var(--cu-green50);\n  --cu-background-warning: var(--cu-yellow600);\n  --cu-background-warning-subtle: var(--cu-yellow50);\n  --cu-background-danger: var(--cu-red600);\n  --cu-background-danger-hover: var(--cu-red700);\n  --cu-background-danger-pressed: var(--cu-red800);\n  --cu-background-danger-disabled: var(--cu-red200);\n  --cu-background-danger-subtle: var(--cu-red50);\n  --cu-background-danger-subtle-hover: var(--cu-red100);\n  --cu-background-danger-subtle-pressed: var(--cu-red200);\n  --cu-background-tooltip: var(--cu-grey1000);\n  --cu-background-modal: var(--cu-grey1000);\n  --cu-background-on-dark-hover: var(--cu-white-10);\n  --cu-background-on-dark-pressed: var(--cu-white-20);\n  --cu-background-on-light-hover: var(--cu-grey1000-10);\n  --cu-background-on-light-pressed: var(--cu-grey1000-20);\n  --cu-background-notification: var(--cu-pink600);\n  --cu-content-default: var(--cu-grey1000);\n  --cu-content-secondary: var(--cu-grey700);\n  --cu-content-tertiary: var(--cu-grey600);\n  --cu-content-placeholder: var(--cu-grey500);\n  --cu-content-disabled: var(--cu-grey400);\n  --cu-content-success: var(--cu-green700);\n  --cu-content-warning: var(--cu-yellow700);\n  --cu-content-danger: var(--cu-red700);\n  --cu-content-danger-disabled: var(--cu-red300);\n  --cu-content-on-dark: var(--cu-white);\n  --cu-content-on-dark-disabled: var(--cu-white-50);\n  --cu-content-on-dark-secondary: var(--cu-white-80);\n  --cu-content-on-light: var(--cu-grey1000);\n  --cu-content-on-light-disabled: var(--cu-grey1000-50);\n  --cu-border-default: var(--cu-grey200);\n  --cu-border-low-contrast: rgb(var(--_cu-grey100));\n  --cu-border-high-contrast: rgb(var(--_cu-grey300));\n  --cu-border-hover: var(--cu-grey400);\n  --cu-border-input: var(--cu-grey500);\n  --cu-border-input-hover: var(--cu-grey600);\n  --cu-border-success: var(--cu-green600);\n  --cu-border-danger: var(--cu-red600);\n  --cu-border-danger-focus: var(--cu-red600);\n  --cu-border-warning: var(--cu-yellow600);\n  --cu-border-on-dark: var(--cu-white-50);\n  --cu-border-on-dark-focus: var(--cu-white);\n  --cu-border-on-light: var(--cu-grey1000-50);\n  --cu-border-on-light-focus: var(--cu-grey1000);\n  --cu-effect-danger: var(--cu-red600-16);\n  --cu-effect-on-dark: var(--cu-white-16);\n  --cu-effect-on-light: var(--cu-grey1000-16);\n  --cu-link-hyperlink: var(--cu-neonBlue600);\n  --cu-link-hyperlink-hover: var(--cu-neonBlue700);\n  --cu-fab-icon-pink: var(--cu-pink600);\n  --cu-fab-icon-yellow: var(--cu-yellow600);\n  --cu-fab-icon-mint: var(--cu-mint600);\n  --cu-fab-icon-azure-blue: var(--cu-azureBlue600);\n  --cu-alert-banner-background: var(--cu-grey1000);\n  --cu-alert-banner-background-subtle: var(--cu-grey100);\n  --cu-alert-banner-content: var(--cu-white);\n  --cu-alert-banner-content-dark: var(--cu-grey1000);\n  --cu-avatar-user-bg-purple: var(--cu-purple500);\n  --cu-avatar-user-bg-neon-blue: var(--cu-neonBlue500);\n  --cu-avatar-user-bg-azure-blue: var(--cu-azureBlue500);\n  --cu-avatar-user-bg-teal: var(--cu-teal500);\n  --cu-avatar-user-bg-mint: var(--cu-mint500);\n  --cu-avatar-user-bg-yellow: var(--cu-yellow500);\n  --cu-avatar-user-bg-orange: var(--cu-orange500);\n  --cu-avatar-user-bg-red: var(--cu-red500);\n  --cu-avatar-user-bg-pink: var(--cu-pink500);\n  --cu-avatar-user-bg-violet: var(--cu-violet500);\n  --cu-avatar-user-bg-brown: var(--cu-brown500);\n  --cu-avatar-user-bg-black: var(--cu-black500);\n  --cu-avatar-user-online: var(--cu-green500);\n  --cu-avatar-user-guest: var(--cu-grey400);\n  --cu-avatar-user-remove: var(--cu-grey1000);\n  --cu-automations-usage-bg-neon-blue: var(--cu-neonBlue50);\n  --cu-automations-usage-content-neon-blue: var(--cu-neonBlue700);\n  --cu-automations-usage-bg-teal: var(--cu-teal50);\n  --cu-automations-usage-content-teal: var(--cu-teal700);\n  --cu-avatar-space-bg-purple: var(--cu-purple200);\n  --cu-avatar-space-bg-neon-blue: var(--cu-neonBlue200);\n  --cu-avatar-space-bg-azure-blue: var(--cu-azureBlue200);\n  --cu-avatar-space-bg-teal: var(--cu-teal200);\n  --cu-avatar-space-bg-mint: var(--cu-mint200);\n  --cu-avatar-space-bg-yellow: var(--cu-yellow200);\n  --cu-avatar-space-bg-orange: var(--cu-orange200);\n  --cu-avatar-space-bg-red: var(--cu-red200);\n  --cu-avatar-space-bg-pink: var(--cu-pink200);\n  --cu-avatar-space-bg-violet: var(--cu-violet200);\n  --cu-avatar-space-bg-brown: var(--cu-brown200);\n  --cu-avatar-space-bg-black: var(--cu-black200);\n  --cu-avatar-space-content-purple: var(--cu-purple1000);\n  --cu-avatar-space-content-neon-blue: var(--cu-neonBlue1000);\n  --cu-avatar-space-content-azure-blue: var(--cu-azureBlue1000);\n  --cu-avatar-space-content-teal: var(--cu-teal1000);\n  --cu-avatar-space-content-mint: var(--cu-mint1000);\n  --cu-avatar-space-content-yellow: var(--cu-yellow1000);\n  --cu-avatar-space-content-orange: var(--cu-orange1000);\n  --cu-avatar-space-content-red: var(--cu-red1000);\n  --cu-avatar-space-content-pink: var(--cu-pink1000);\n  --cu-avatar-space-content-violet: var(--cu-violet1000);\n  --cu-avatar-space-content-brown: var(--cu-brown1000);\n  --cu-avatar-space-content-black: var(--cu-black1000);\n  --cu-quill-banner-red: var(--cu-red50);\n  --cu-quill-banner-orange: var(--cu-orange50);\n  --cu-quill-banner-yellow: var(--cu-yellow50);\n  --cu-quill-banner-azure-blue: var(--cu-azureBlue50);\n  --cu-quill-banner-purple: var(--cu-purple50);\n  --cu-quill-banner-pink: var(--cu-pink50);\n  --cu-quill-banner-green: var(--cu-green50);\n  --cu-quill-banner-black: var(--cu-black50);\n  --cu-quill-banner-border-red: var(--cu-red600);\n  --cu-quill-banner-border-orange: var(--cu-orange600);\n  --cu-quill-banner-border-yellow: var(--cu-yellow600);\n  --cu-quill-banner-border-azure-blue: var(--cu-azureBlue600);\n  --cu-quill-banner-border-purple: var(--cu-purple600);\n  --cu-quill-banner-border-pink: var(--cu-pink600);\n  --cu-quill-banner-border-green: var(--cu-green600);\n  --cu-quill-banner-border-black: var(--cu-black600);\n  --cu-background-overlay: rgba(var(--_cu-grey1000), .56);\n  --cu-background-overlay-light: rgba(var(--_cu-grey1000), .32);\n  --cu-elevation-1: 0 calc(1 / var(--rem-divisor) * var(--rem-return-unit)) calc(4 / var(--rem-divisor) * var(--rem-return-unit)) rgba(0, 0, 0, .08);\n  --cu-elevation-2: 0 calc(2 / var(--rem-divisor) * var(--rem-return-unit)) calc(8 / var(--rem-divisor) * var(--rem-return-unit)) rgba(0, 0, 0, .08);\n  --cu-elevation-3: 0 calc(4 / var(--rem-divisor) * var(--rem-return-unit)) calc(16 / var(--rem-divisor) * var(--rem-return-unit)) rgba(0, 0, 0, .08);\n  --cu-elevation-4: 0 calc(6 / var(--rem-divisor) * var(--rem-return-unit)) calc(24 / var(--rem-divisor) * var(--rem-return-unit)) rgba(0, 0, 0, .08) ;\n}\n\nbody.cu-purple {\n  --cu-background-primary: var(--cu-purple600);\n  --cu-background-primary-hover: var(--cu-purple700);\n  --cu-background-primary-pressed: var(--cu-purple800);\n  --cu-background-primary-disabled: var(--cu-purple200);\n  --cu-background-primary-subtle: var(--cu-purple50);\n  --cu-background-primary-on-subtle: var(--cu-purple100);\n  --cu-content-primary: var(--cu-purple700);\n  --cu-border-primary: var(--cu-purple600);\n  --cu-border-primary-focus: var(--cu-purple600);\n  --cu-effect-primary: var(--cu-purple600-16);\n  --cu-link-primary: var(--cu-purple600);\n  --cu-link-primary-hover: var(--cu-purple700) ;\n}\n\nbody.cu-neonBlue {\n  --cu-background-primary: var(--cu-neonBlue600);\n  --cu-background-primary-hover: var(--cu-neonBlue700);\n  --cu-background-primary-pressed: var(--cu-neonBlue800);\n  --cu-background-primary-disabled: var(--cu-neonBlue200);\n  --cu-background-primary-subtle: var(--cu-neonBlue50);\n  --cu-background-primary-on-subtle: var(--cu-neonBlue100);\n  --cu-content-primary: var(--cu-neonBlue700);\n  --cu-border-primary: var(--cu-neonBlue600);\n  --cu-border-primary-focus: var(--cu-neonBlue600);\n  --cu-effect-primary: var(--cu-neonBlue600-16);\n  --cu-link-primary: var(--cu-neonBlue600);\n  --cu-link-primary-hover: var(--cu-neonBlue700) ;\n}\n\nbody.cu-azureBlue {\n  --cu-background-primary: var(--cu-azureBlue600);\n  --cu-background-primary-hover: var(--cu-azureBlue700);\n  --cu-background-primary-pressed: var(--cu-azureBlue800);\n  --cu-background-primary-disabled: var(--cu-azureBlue200);\n  --cu-background-primary-subtle: var(--cu-azureBlue50);\n  --cu-background-primary-on-subtle: var(--cu-azureBlue100);\n  --cu-content-primary: var(--cu-azureBlue700);\n  --cu-border-primary: var(--cu-azureBlue600);\n  --cu-border-primary-focus: var(--cu-azureBlue600);\n  --cu-effect-primary: var(--cu-azureBlue600-16);\n  --cu-link-primary: var(--cu-azureBlue600);\n  --cu-link-primary-hover: var(--cu-azureBlue700) ;\n}\n\nbody.cu-teal {\n  --cu-background-primary: var(--cu-teal600);\n  --cu-background-primary-hover: var(--cu-teal700);\n  --cu-background-primary-pressed: var(--cu-teal800);\n  --cu-background-primary-disabled: var(--cu-teal200);\n  --cu-background-primary-subtle: var(--cu-teal50);\n  --cu-background-primary-on-subtle: var(--cu-teal100);\n  --cu-content-primary: var(--cu-teal700);\n  --cu-border-primary: var(--cu-teal600);\n  --cu-border-primary-focus: var(--cu-teal600);\n  --cu-effect-primary: var(--cu-teal600-16);\n  --cu-link-primary: var(--cu-teal600);\n  --cu-link-primary-hover: var(--cu-teal700) ;\n}\n\nbody.cu-mint {\n  --cu-background-primary: var(--cu-mint600);\n  --cu-background-primary-hover: var(--cu-mint700);\n  --cu-background-primary-pressed: var(--cu-mint800);\n  --cu-background-primary-disabled: var(--cu-mint200);\n  --cu-background-primary-subtle: var(--cu-mint50);\n  --cu-background-primary-on-subtle: var(--cu-mint100);\n  --cu-content-primary: var(--cu-mint700);\n  --cu-border-primary: var(--cu-mint600);\n  --cu-border-primary-focus: var(--cu-mint600);\n  --cu-effect-primary: var(--cu-mint600-16);\n  --cu-link-primary: var(--cu-mint600);\n  --cu-link-primary-hover: var(--cu-mint700) ;\n}\n\nbody.cu-orange {\n  --cu-background-primary: var(--cu-orange600);\n  --cu-background-primary-hover: var(--cu-orange700);\n  --cu-background-primary-pressed: var(--cu-orange800);\n  --cu-background-primary-disabled: var(--cu-orange200);\n  --cu-background-primary-subtle: var(--cu-orange50);\n  --cu-background-primary-on-subtle: var(--cu-orange100);\n  --cu-content-primary: var(--cu-orange700);\n  --cu-border-primary: var(--cu-orange600);\n  --cu-border-primary-focus: var(--cu-orange600);\n  --cu-effect-primary: var(--cu-orange600-16);\n  --cu-link-primary: var(--cu-orange600);\n  --cu-link-primary-hover: var(--cu-orange700) ;\n}\n\nbody.cu-pink {\n  --cu-background-primary: var(--cu-pink600);\n  --cu-background-primary-hover: var(--cu-pink700);\n  --cu-background-primary-pressed: var(--cu-pink800);\n  --cu-background-primary-disabled: var(--cu-pink200);\n  --cu-background-primary-subtle: var(--cu-pink50);\n  --cu-background-primary-on-subtle: var(--cu-pink100);\n  --cu-content-primary: var(--cu-pink700);\n  --cu-border-primary: var(--cu-pink600);\n  --cu-border-primary-focus: var(--cu-pink600);\n  --cu-effect-primary: var(--cu-pink600-16);\n  --cu-link-primary: var(--cu-pink600);\n  --cu-link-primary-hover: var(--cu-pink700) ;\n}\n\nbody.cu-violet {\n  --cu-background-primary: var(--cu-violet600);\n  --cu-background-primary-hover: var(--cu-violet700);\n  --cu-background-primary-pressed: var(--cu-violet800);\n  --cu-background-primary-disabled: var(--cu-violet200);\n  --cu-background-primary-subtle: var(--cu-violet50);\n  --cu-background-primary-on-subtle: var(--cu-violet100);\n  --cu-content-primary: var(--cu-violet700);\n  --cu-border-primary: var(--cu-violet600);\n  --cu-border-primary-focus: var(--cu-violet600);\n  --cu-effect-primary: var(--cu-violet600-16);\n  --cu-link-primary: var(--cu-violet600);\n  --cu-link-primary-hover: var(--cu-violet700) ;\n}\n\nbody.cu-brown {\n  --cu-background-primary: var(--cu-brown600);\n  --cu-background-primary-hover: var(--cu-brown700);\n  --cu-background-primary-pressed: var(--cu-brown800);\n  --cu-background-primary-disabled: var(--cu-brown200);\n  --cu-background-primary-subtle: var(--cu-brown50);\n  --cu-background-primary-on-subtle: var(--cu-brown100);\n  --cu-content-primary: var(--cu-brown700);\n  --cu-border-primary: var(--cu-brown600);\n  --cu-border-primary-focus: var(--cu-brown600);\n  --cu-effect-primary: var(--cu-brown600-16);\n  --cu-link-primary: var(--cu-brown600);\n  --cu-link-primary-hover: var(--cu-brown700) ;\n}\n\nbody.cu-black {\n  --cu-background-primary: var(--cu-black600);\n  --cu-background-primary-hover: var(--cu-black700);\n  --cu-background-primary-pressed: var(--cu-black800);\n  --cu-background-primary-disabled: var(--cu-black200);\n  --cu-background-primary-subtle: var(--cu-black50);\n  --cu-background-primary-on-subtle: var(--cu-black100);\n  --cu-content-primary: var(--cu-black700);\n  --cu-border-primary: var(--cu-black600);\n  --cu-border-primary-focus: var(--cu-black600);\n  --cu-effect-primary: var(--cu-black600-16);\n  --cu-link-primary: var(--cu-black600);\n  --cu-link-primary-hover: var(--cu-black700) ;\n}\n\nbody.cu-custom {\n  --cu-custom1100: hsl(var(--cu-custom-hue, 83), 24%, 25%);\n  --cu-custom1000: hsl(var(--cu-custom-hue, 83), 31%, 33%);\n  --cu-custom900: hsl(var(--cu-custom-hue, 83), 36%, 40%);\n  --cu-custom800: hsl(var(--cu-custom-hue, 83), 41%, 47%);\n  --cu-custom700: hsl(var(--cu-custom-hue, 83), 53%, 54%);\n  --cu-custom600: hsl(var(--cu-custom-hue, 83), 81%, 63%);\n  --cu-custom600-16: hsl(var(--cu-custom-hue, 83), 81%, 63%, 16%);\n  --cu-custom500: hsl(var(--cu-custom-hue, 83), 81%, 70%);\n  --cu-custom500-16: hsl(var(--cu-custom-hue, 83), 81%, 70%, 16%);\n  --cu-custom400: hsl(var(--cu-custom-hue, 83), 81%, 76%);\n  --cu-custom300: hsl(var(--cu-custom-hue, 83), 82%, 82%);\n  --cu-custom200: hsl(var(--cu-custom-hue, 83), 83%, 88%);\n  --cu-custom100: hsl(var(--cu-custom-hue, 83), 80%, 94%);\n  --cu-custom50: hsl(var(--cu-custom-hue, 83), 86%, 97%);\n  --cu-background-primary: var(--cu-custom600);\n  --cu-background-primary-hover: var(--cu-custom700);\n  --cu-background-primary-pressed: var(--cu-custom800);\n  --cu-background-primary-disabled: var(--cu-custom200);\n  --cu-background-primary-subtle: var(--cu-custom50);\n  --cu-background-primary-on-subtle: var(--cu-custom100);\n  --cu-content-primary: var(--cu-custom700);\n  --cu-border-primary: var(--cu-custom600);\n  --cu-border-primary-focus: var(--cu-custom600);\n  --cu-effect-primary: var(--cu-custom600-16);\n  --cu-link-primary: var(--cu-custom600);\n  --cu-link-primary-hover: var(--cu-custom700) ;\n}\n\n.monday-style-menu--large {\n  width: unset;\n}\n\n.monday-style-dialog-content-wrapper {\n  z-index: 10001;\n}\n\n.p-dialog {\n  border-radius: 15px;\n  /*  border-radius: 12px; */\n  border: 1px solid rgba(255, 255, 255, 50%) !important;\n  /*  outline: rgba(120, 120, 120, 10%) solid 1px; */\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  overflow: hidden;\n  background: white;\n  max-height: 100%;\n}\n\ndiv.p-component-overlay.p-component-overlay-enter.p-dialog-mask {\n  z-index: 100 !important;\n}\n\n.p-confirm-dialog .p-dialog-content {\n  padding: 20px !important;\n}\n\n.p-dialog-right .p-dialog {\n  outline: rgba(120, 120, 120, 10%) solid 1px;\n  border-radius: 0px !important;\n  margin-top: 100px !important;\n  padding-bottom: 45px;\n}\n\n.p-dialog:before {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  box-shadow: 0 0 130px 5px rgba(0, 0, 0, 0.3294117647);\n}\n\n.p-dialog-top .p-dialog, .p-dialog-bottom .p-dialog, .p-dialog-left .p-dialog, .p-dialog-right .p-dialog, .p-dialog-top-left .p-dialog, .p-dialog-top-right .p-dialog, .p-dialog-bottom-left .p-dialog, .p-dialog-bottom-right .p-dialog {\n  margin: 0;\n}\n\n.p-dialog .p-dialog-header {\n  border-bottom: 1px solid #D6E4ED;\n  color: #212529;\n  padding: 1rem;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  background: #F8FAFF;\n}\n\n.p-dialog .p-dialog-header .p-dialog-title {\n  font-size: 20px;\n  font-family: source sans pro semibold;\n  font-weight: normal;\n  line-height: 24px;\n  letter-spacing: normal;\n  color: #333D47;\n  flex-grow: 1;\n  word-break: break-word;\n}\n\n.p-dialog .p-dialog-content {\n  padding: 0px;\n}\n\n.p-dialog .p-dialog-footer {\n  border: none;\n}\n\n.p-overlaypanel:before {\n  border-width: 10px !important;\n}\n\n.p-overlaypanel:after {\n  border-width: 8px !important;\n}\n\n.p-overlaypanel:before {\n  border: solid transparent !important;\n  border-color: rgba(255, 255, 255, 0) !important;\n  border-bottom-color: #f2f2f2 !important;\n}\n\n.p-overlaypanel:after {\n  border: solid transparent !important;\n  border-color: rgba(255, 255, 255, 0) !important;\n  border-bottom-color: #ffffff !important;\n}\n\n.p-overlaypanel {\n  background: #ffffff !important;\n  color: rgba(0, 0, 0, 0.87) !important;\n  border: 0 none !important;\n  border-radius: 4px !important;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12) !important;\n}\n\n.p-component-overlay {\n  background-color: rgba(46, 67, 84, 0.38) !important;\n}\n\n.p-fileupload .p-fileupload-content {\n  padding: 0px !important;\n  border: none !important;\n}\n\n.switch-group {\n  position: absolute;\n  width: 200%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  transition: left 0.35s;\n  -webkit-transition: left 0.35s;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n\n.switch-handle {\n  position: relative;\n  margin: 0 auto;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  height: 100%;\n  width: 0px;\n  border-width: 0 1px;\n  background-color: #fff !important;\n}\n\n.switch.btn {\n  min-width: auto !important;\n  min-height: auto !important;\n}\n\n.switch.btn.btn-light,\n.switch.btn.btn-outline-light {\n  border: solid 1px rgba(0, 0, 0, 0.15);\n}\n\n.switch-on {\n  line-height: 20px;\n  font-size: 13px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 50%;\n  margin: 0;\n  border: 0;\n  border-radius: 0;\n}\n\n.switch-on.btn {\n  padding-right: 1.5rem;\n}\n\n.switch-off {\n  line-height: 20px;\n  font-size: 13px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  right: 0;\n  margin: 0;\n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n\n.switch-off.btn {\n  padding-left: 1.5rem;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #d34416;\n  border: solid 1px #d34416;\n}\n\n.btn-primary:hover {\n  color: #fff;\n  background-color: #d34416;\n  border: solid 1px #d34416;\n}\n\n.btn-light {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\ntd {\n  /* text-align: center; */\n  vertical-align: middle;\n}\n\n.tabs--wrapper {\n  padding: 0px !important;\n}\n\na.tab-inner.tabs-list_tab-inner {\n  padding: 0px !important;\n}\n\nli.tab--wrapper.tabs-list_tab--wrapper {\n  height: calc(100% - 2px) !important;\n  border-bottom: 0px !important;\n}\n\nli.tab--wrapper.tabs-list_tab--wrapper.tab-focus-visible-inset {\n  box-shadow: none;\n}\n\n/*HStack alignment bottom leading yap*/\nul.tabs-list {\n  height: 100% !important;\n}\n\n/* kanban */\nth.e-header-cells.e-template.e-toggle-header div.e-header-wrap {\n  height: 100%;\n  align-items: center;\n}\n\n.p-fileupload .p-fileupload-content {\n  background: transparent;\n}\n\n.monday-style-menu-title {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 11px;\n  font-weight: 600;\n  flex-grow: 1;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #656f7d;\n  white-space: nowrap;\n}\n\n.monday-style-toast {\n  max-width: 500px;\n  z-index: 1000;\n}\n\ndiv.e-spinner-inner {\n  display: none !important;\n}\n\ndiv.e-spin-show.e-spinner-pane {\n  display: none !important;\n}\n\n@keyframes pop {\n  0% {\n    transform: scale(1);\n    box-shadow: var(--box-shadow);\n  }\n  100% {\n    transform: scale(var(--scale));\n    box-shadow: var(--box-shadow-picked-up);\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.size-xxs {\n  font-size: 14px;\n}\n\n:root {\n  --editor-max-width: 100%;\n  --editor-font-size: 16px;\n  --editor-line-height: 1.5;\n  --editor-paragraph-spacing: 0rem;\n  --editor-font-family: ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n}\n\n.codex-editor__loader {\n  display: none !important;\n}\n\n/* .ce-block__content,\n.ce-toolbar__content {\n    max-width: var(--editor-max-width);\n}\n */\n.ce-block {\n  font-size: var(--editor-font-size);\n  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n\n.ce-paragraph {\n  font-size: var(--editor-font-size);\n  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n\n.codex-editor {\n  height: fit-content;\n  z-index: 100 !important;\n  color: #212526;\n  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n\nh1.ce-header {\n  color: #212526;\n  font-weight: 500;\n  font-size: 28px;\n  line-height: 1.25;\n}\n\nh2.ce-header {\n  color: #212526;\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 1.25;\n}\n\n.ce-toolbar__actions {\n  right: 100% !important;\n}\n\n.ce-toolbar__settings-btn {\n  color: gray !important;\n}\n\n.ce-toolbar__plus {\n  color: gray !important;\n}\n\n@media (min-width: 651px) {\n  .codex-editor--narrow .ce-toolbox .ce-popover {\n    right: auto !important;\n  }\n}\n.ce-block__content, .ce-toolbar__content {\n  max-width: 100% !important;\n}\n\n.codex-editor__redactor {\n  padding-bottom: 50px !important;\n}\n\n.editable-heading--wrapper {\n  width: auto !important;\n}\n\n/* .editable-heading-input{\n    height: 50px !important;\n} */\n/* .heading-component{\n    line-height: 48px !important;\n} */\n/* h4[data-testid='heading'] {\n    background-color: yellow;\n  } */\n/*   div[data-testid='dialog-content-container'] {\n    padding: 0px !important;\n  } \n   */\ndiv.bottom.react-flow__attribution.react-flow__panel.right[data-message=\"Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev\"][style=\"pointer-events: all;\"] {\n  display: none !important;\n}\n\n@media screen and (min-width: 1400px) {\n  html {\n    font-size: 14px;\n  }\n}\n@media screen and (min-width: 1600px) {\n  html {\n    font-size: 14px;\n  }\n}\n@media screen and (min-width: 1900px) {\n  html {\n    font-size: 14px;\n  }\n}\nhtml,\nbody {\n  margin: 0px;\n  padding: 0;\n  border: 0;\n  color: #505A64;\n  height: 100%;\n  -webkit-user-select: none;\n  position: relative;\n  overflow: hidden;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -webkit-font-smoothing: subpixel-antialiased !important;\n  /*  -webkit-font-smoothing: antialiased;\n  */\n  text-size-adjust: 100%;\n  text-rendering: optimizeLegibility;\n}\n\nbody {\n  cursor: var(--system-cursor-default), auto;\n  font-family: var(--font-family);\n  font-size: 1rem;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 0;\n}\n\na {\n  color: inherit;\n}\n\na,\nu {\n  text-decoration: none;\n}\n\n* {\n  /*-webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: grayscale;*/\n  box-sizing: border-box;\n}", "",{"version":3,"sources":["webpack://./src/css/theme.css","webpack://./src/css/global.scss","webpack://./src/css/overrides.css","webpack://./src/css/sizes.css","webpack://./src/css/editor.css","webpack://./src/css/EditableHeading.css"],"names":[],"mappings":"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;EACA,gCAAA;EACA,gCAAA;EACA,gCAAA;EACA,gCAAA;EACA,iCAAA;EACA,iCAAA;EACA,iCAAA;EACA,iCAAA;EACA,gCAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,2BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,0BAAA;EACA,2BAAA;EACA,0BAAA;EACA,0BAAA;EACA,4BAAA;EACA,4BAAA;EACA,6BAAA;EACA,6BAAA;EACA,6BAAA;EACA,4BAAA;EACA,4BAAA;EACA,6BAAA;EACA,6BAAA;EACA,6BAAA;EACA,6BAAA;EACA,4BAAA;EACA,6BAAA;EACA,6BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,6BAAA;EACA,4BAAA;EACA,6BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,6BAAA;EACA,6BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,6BAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,0BAAA;EACA,0BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,2BAAA;EACA,4BAAA;EACA,6BAAA;EACA,6BAAA;EACA,6BAAA;EACA,6BAAA;EACA,6BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,6BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,6BAAA;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","sourcesContent":[":root {\n    --main-theme-color:#292F4C;\n}\n\n:root {\n    --color-highlight_blue: #cce5ff;\n    --color-basic_blue: #0073ea;\n    --color-dark_blue: #0060b9;\n    --color-bazooka: #f65f7c;\n    --color-snow_white: #ffffff;\n    --color-riverstone_gray: #f6f7fb;\n    --color-ui_grey: #dcdfec;\n    --color-wolf_gray: #c3c6d4;\n    --color-asphalt: #676879;\n    --color-mud_black: #323338;\n    --color-black: #000000;\n    --color-success: #258750;\n    --color-success-hover: #007038;\n    --color-success-highlight: #bbdbc9;\n    --color-error: #d83a52;\n    --color-error-hover: #b63546;\n    --color-error-highlight: #f4c3cb;\n    --color-link_color: #1f76c2;\n    --color-surface: #292f4c;\n    --primary-color: #0073ea;\n    --primary-hover-color: #0060b9;\n    --primary-selected-color: #cce5ff;\n    --primary-selected-hover-color: #aed4fc;\n    --primary-text-color: #292d34;\n    --text-color-on-primary: #ffffff;\n    --text-color-on-inverted: #ffffff;\n    --secondary-text-color: #676879;\n    --placeholder-color: #676879;\n    --icon-color: #676879;\n    --link-color: #1f76c2;\n    --primary-background-color: #ffffff;\n    --primary-background-hover-color: #dcdfec;\n    --secondary-background-color: #ffffff;\n    --grey-background-color: #f6f7fb;\n    --allgrey-background-color: #f6f7fb;\n    --inverted-color-background: #323338;\n    --disabled-background-color: #ecedf5;\n    --disabled-text-color: rgba(50, 51, 56, var(--disabled-component-opacity));\n    --positive-color: #258750;\n    --positive-color-hover: #007038;\n    --positive-color-selected: #bbdbc9;\n    --positive-color-selected-hover: #b5cec0;\n    --negative-color: #d83a52;\n    --negative-color-hover: #b63546;\n    --negative-color-selected: #f4c3cb;\n    --negative-color-selected-hover: #ecb7bf;\n    --private-color: #f65f7c;\n    --shareable-color: #a25ddc;\n    --ui-border-color: #c3c6d4;\n    --layout-border-color: #d0d4e4;\n    --box-shadow-xs: 0px 4px 6px -4px rgba(0, 0, 0, 0.1);\n    --box-shadow-small: 0px 4px 8px rgba(0, 0, 0, 0.2);\n    --box-shadow-medium: 0px 6px 20px rgba(0, 0, 0, 0.2);\n    --box-shadow-large: 0px 15px 50px rgba(0, 0, 0, 0.3);\n    --color-grass_green: #037f4c;\n    --color-grass_green-hover: #116846;\n    --color-grass_green-selected: #81bfa5;\n    --color-done-green: #00c875;\n    --color-done-green-hover: #0f9b63;\n    --color-done-green-selected: #80e3ba;\n    --color-done-green-selected-with-opacity: rgba(128, 227, 186, 0.6);\n    --color-bright-green: #9cd326;\n    --color-bright-green-hover: #7ca32b;\n    --color-bright-green-selected: #cde992;\n    --color-saladish: #cab641;\n    --color-saladish-hover: #9d8f3e;\n    --color-saladish-selected: #e4daa0;\n    --color-egg_yolk: #ffcb00;\n    --color-egg_yolk-hover: #c29e11;\n    --color-egg_yolk-selected: #ffe580;\n    --color-egg_yolk-rgb: 255,213,51;\n    --color-working_orange: #fdab3d;\n    --color-working_orange-hover: #c0873c;\n    --color-working_orange-selected: #fed59e;\n    --color-dark-orange: #ff642e;\n    --color-dark-orange-hover: #c25531;\n    --color-dark-orange-selected: #ffb196;\n    --color-peach: #ffadad;\n    --color-peach-hover: #c2888a;\n    --color-peach-selected: #ffd6d6;\n    --color-sunset: #ff7575;\n    --color-sunset-hover: #c26163;\n    --color-sunset-selected: #ffbaba;\n    --color-sunset-selected-with-opacity: rgba(255, 186, 186, 0.6);\n    --color-stuck-red: #e2445c;\n    --color-stuck-red-hover: #ad3f51;\n    --color-stuck-red-selected: #f0a1ad;\n    --color-dark-red: #bb3354;\n    --color-dark-red-hover: #92334c;\n    --color-dark-red-selected: #dd99a9;\n    --color-sofia_pink: #ff158a;\n    --color-sofia_pink-hover: #c21e71;\n    --color-sofia_pink-selected: #ff8ac4;\n    --color-lipstick: #ff5ac4;\n    --color-lipstick-hover: #c24e9a;\n    --color-lipstick-selected: #fface1;\n    --color-bubble: #faa1f1;\n    --color-bubble-hover: #be80ba;\n    --color-bubble-selected: #fcd0f8;\n    --color-purple: #a25ddc;\n    --color-purple-hover: #8050ab;\n    --color-purple-selected: #d0aeed;\n    --color-dark_purple: #784bd1;\n    --color-dark_purple-hover: #6344a3;\n    --color-dark_purple-selected: #bba5e8;\n    --color-berry: #7e3b8a;\n    --color-berry-hover: #673971;\n    --color-berry-selected: #be9dc4;\n    --color-dark_indigo: #401694;\n    --color-dark_indigo-hover: #3c1f78;\n    --color-dark_indigo-selected: #a08bc9;\n    --color-indigo: #5559df;\n    --color-indigo-hover: #4b4ead;\n    --color-indigo-selected: #aaacef;\n    --color-navy: #225091;\n    --color-navy-hover: #274776;\n    --color-navy-selected: #90a7c8;\n    --color-bright-blue: #579bfc;\n    --color-bright-blue-hover: #4c7cc1;\n    --color-bright-blue-selected: #abcdfd;\n    --color-dark-blue: #0086c0;\n    --color-dark-blue-hover: #0f6d97;\n    --color-dark-blue-selected: #80c2df;\n    --color-aquamarine: #4eccc6;\n    --color-aquamarine-hover: #469e9b;\n    --color-aquamarine-selected: #a6e5e2;\n    --color-chili-blue: #66ccff;\n    --color-chili-blue-hover: #569ec3;\n    --color-chili-blue-selected: #b2e5ff;\n    --color-river: #68a1bd;\n    --color-river-hover: #588095;\n    --color-river-selected: #b3d0de;\n    --color-winter: #9aadbd;\n    --color-winter-hover: #7b8895;\n    --color-winter-selected: #ccd6de;\n    --color-explosive: #c4c4c4;\n    --color-explosive-hover: #98999a;\n    --color-explosive-selected: #e1e1e1;\n    --color-american_gray: #808080;\n    --color-american_gray-hover: #69696a;\n    --color-american_gray-selected: #bfbfbf;\n    --color-blackish: #333333;\n    --color-blackish-hover: #222222;\n    --color-blackish-selected: #999999;\n    --color-brown: #7f5347;\n    --color-brown-hover: #684943;\n    --color-brown-selected: #bfa9a3;\n    --color-orchid: #D974B0;\n    --color-orchid-hover: #AE5D8D;\n    --color-orchid-selected: #ECBAD7;\n    --color-tan: #AD967A;\n    --color-tan-hover: #8A7862;\n    --color-tan-selected: #D6CABC;\n    --color-sky: #A1E3F6;\n    --color-sky-hover: #81B6C5;\n    --color-sky-selected: #D0F1FA;\n    --color-coffee: #BD816E;\n    --color-coffee-hover: #976758;\n    --color-coffee-selected: #DEC0B7;\n    --color-royal: #2B76E5;\n    --color-royal-hover: #225EB7;\n    --color-royal-selected: #95BBF2;\n    --color-teal: #175A63;\n    --color-teal-hover: #12484F;\n    --color-teal-selected: #8BACB1;\n    --color-lavender: #BDA8F9;\n    --color-lavender-hover: #9786C7;\n    --color-lavender-selected: #DED4FC;\n    --color-steel: #A9BEE8;\n    --color-steel-hover: #8798BA;\n    --color-steel-selected: #D4DFF4;\n    --color-lilac: #9D99B9;\n    --color-lilac-hover: #7E7A94;\n    --color-lilac-selected: #CECCDC;\n    --color-pecan: #563E3E;\n    --color-pecan-hover: #453232;\n    --color-pecan-selected: #AB9F9F;\n    --color-dark_marble: #f1f1f1;\n    --color-marble: #f7f7f7;\n    --color-gainsboro: #e1e1e1;\n    --color-extra_light_gray: #edeef0;\n    --color-glitter: #d9f0ff;\n    --color-ultra_light_gray: #ebebeb;\n    --color-very_light_gray: #a1a1a1;\n    --color-jaco_gray: #9699a6;\n    --color-storm_gray: #6b6d77;\n    --color-trolley-grey: #808080;\n    --color-basic_light_blue: #c7e6fa;\n    --color-light_blue: #61caf7;\n    --color-turquoise: #66ccff;\n    --color-aqua: #00d1d1;\n    --color-live_blue: #009aff;\n    --color-jeans: #597bfc;\n    --color-burned_eggplant: #181d37;\n    --color-light-pink: #ff5ac4;\n    --color-dark-pink: #ff158a;\n    --color-dark_red: #bb3354;\n    --color-yellow: #ffcb00;\n    --color-mustered: #cab641;\n    --color-orange: #fdab3d;\n    --color-lime-green: #9cd326;\n    --color-jade: #03c875;\n    --color-green-haze: #00a359;\n    --color-grass-green: #037f4c;\n    --color-amethyst: #a25ddc;\n    --color-dark-purple: #784bd1;\n    --color-blue_links: #0086c0;\n    --color-blue-links: #0086c0;\n    --color-private: #f65f7c;\n    --color-public: #009aff;\n    --color-board_views_grey: #6e6f8f;\n    --color-board_views_grey_hover: #b2b3d0;\n    --color-board_views_blue: #1c1f3b;\n    --color-board_views_blue_secondary: #363a52;\n    --color-border_light_gray: #f5f6f8;\n    --color-brand-blue: #00a9ff;\n    --color-brand-charcoal: #2b2c5c;\n    --color-brand-gold: #ffcc00;\n    --color-brand-green: #11dd80;\n    --color-brand-iris: #595ad4;\n    --color-brand-light-blue: #00cff4;\n    --color-brand-malachite: #00cd6f;\n    --color-brand-purple: #a358d0;\n    --color-brand-red: #f74875;\n    --color-deadline_upcoming_indication: #5d6387;\n    --color-default_group_color: #579bfc;\n    --color-form_btn_hover: #0083d9;\n    --color-form_purple: #575c96;\n    --color-highlight: #dff0ff;\n    --color-green_shadow: #00c875;\n    --color-green-shadow: #00c875;\n    --color-red_shadow: #e2445c;\n    --color-red-shadow: #e2445c;\n    --color-pulse_bg: #f0f0f0;\n    --color-pulse_text_color: #333333;\n    --color-placholder_gray: #d8d8d8;\n    --color-placeholder_light_gray: #efefef;\n    --color-excel-green: #207245;\n    --color-media-blue: #2ea2e9;\n    --color-pdf-red: #bb0706;\n    --color-ppt-orange: #d64e2a;\n    --color-word-blue: #2a5699;\n    --color-zip-orange: #e4901c;\n    --color-like_red: #fb275d;\n    --color-scrollbar_gray: #b2b2b2;\n    --color-timeline_grid_blue: #454662;\n    --color-timeline_blue: #1c1f3b;\n    --color-highlight_blue-rgb: 204,229,255;\n    --color-snow_white-with-opacity: rgba(255, 255, 255, 0.4);\n    --color-wolf_gray-with-opacity: rgba(195, 198, 212, 0.1);\n    --color-asphalt-with-opacity: rgba(103, 104, 121, 0.1);\n    --primary-on-secondary-color: #0073ea;\n    --primary-hover-on-secondary-color: #0060b9;\n    --primary-selected-color-rgb: 204,229,255;\n    --primary-selected-on-secondary-color: #cce5ff;\n    --primary-text-on-secondary-color: #323338;\n    --text-color-on-primary-with-opacity: rgba(255, 255, 255, 0.4);\n    --secondary-text-on-secondary-color: #676879;\n    --placeholder-color-with-opacity: rgba(103, 104, 121, 0.1);\n    --placeholder-on-secondary-color: #676879;\n    --icon-on-secondary-color: #676879;\n    --link-on-secondary-color: #1f76c2;\n    --label-background-color: #cce5ff;\n    --label-background-on-secondary-color: #cce5ff;\n    --primary-background-color-rgb: 255,255,255;\n    --primary-background-hover-on-secondary-color: #dcdfec;\n    --modal-background-color: #ffffff;\n    --secondary-background-color-rgb: 255,255,255;\n    --disabled-background-on-secondary-color: #ecedf5;\n    --disabled-text-on-secondary-color: rgba(50, 51, 56, var(--disabled-component-opacity));\n    --ui-border-on-secondary-color: #c3c6d4;\n    --layout-border-on-secondary-color: #d0d4e4;\n    --dark-background-color: #f6f7fb;\n    --dark-background-on-secondary-color: #f6f7fb;\n    --dialog-background-color: #ffffff;\n    --box-shadow-mediun: 0px 6px 20px rgba(0, 0, 0, 0.2);\n}\n\n:root {\n    --motion-productive-short: 70ms;\n    --motion-productive-medium: 100ms;\n    --motion-productive-long: 150ms;\n    --motion-expressive-short: 250ms;\n    --motion-expressive-long: 400ms;\n    --motion-timing-enter: cubic-bezier(0, 0, 0.35, 1);\n    --motion-timing-exit: cubic-bezier(0.4, 0, 1, 1);\n    --motion-timing-transition: cubic-bezier(0.4, 0, 0.2, 1);\n    --motion-timing-emphasize: cubic-bezier(0, 0, 0.2, 1.4);\n    --expand-animation-timing: var(--motion-timing-enter);\n    --spacing-xs: 4px;\n    --spacing-small: 8px;\n    --spacing-medium: 16px;\n    --spacing-large: 24px;\n    --spacing-xl: 32px;\n    --spacing-xxl: 48px;\n    --spacing-xxxl: 64px;\n    --border-width: 1px;\n    --border-style: solid;\n    --border-radius-small: 4px;\n    --border-radius-medium: 8px;\n    --border-radius-big: 16px;\n    --disabled-component-opacity: 0.38;\n    --font-family: Figtree,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif;;\n/* Figtree,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif; */\n    \n\n    --title-font-family: Poppins,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif;\n    --h1-font-family: var(--title-font-family);\n    --font-smoothing-webkit: antialiased;\n    --font-smoothing-moz: grayscale;\n    --font-weight-very-light: 200;\n    --font-weight-light: 300;\n    --font-weight-normal: 400;\n    --font-weight-bold: 500;\n    --font-size: 1rem;\n    --font-size-10: 14px;\n    --font-size-20: 14px;\n    --font-size-30: 16px;\n    --font-size-40: 18px;\n    --font-size-50: 24px;\n    --font-size-60: 30px;\n    --font-line-height-10: 18px;\n    --font-line-height-20: 24px;\n    --font-line-height-30: 24px;\n    --font-line-height-40: 24px;\n    --font-line-height-50: 32px;\n    --font-line-height-60: 42px;\n    --font-size-h1: var(--font-size-60);\n    --font-size-h2: var(--font-size-50);\n    --font-size-h3: var(--font-size-50);\n    --font-size-h4: var(--font-size-40);\n    --font-size-h5: var(--font-size-30);\n    --font-size-general-label: var(--font-size-20);\n    --font-size-paragraph: var(--font-size-30);\n    --font-size-subtext: var(--font-size-10);\n    --font-line-height-h1: var(--font-line-height-60);\n    --font-line-height-h2: var(--font-line-height-50);\n    --font-line-height-h3: var(--font-line-height-50);\n    --font-line-height-h4: var(--font-line-height-40);\n    --font-line-height-h5: var(--font-line-height-30);\n    --font-line-height-general-label: var(--font-line-height-20);\n    --font-line-height-paragraph: var(--font-line-height-30);\n    --font-line-height-subtext: var(--font-line-height-10);\n    --font-h1: var(--font-weight-bold) var(--font-size-h1)/var(--font-line-height-h1) var(--title-font-family);\n    --font-h2: var(--font-weight-bold) var(--font-size-h2)/var(--font-line-height-h2) var(--title-font-family);\n    --font-h3: var(--font-weight-light) var(--font-size-h3)/var(--font-line-height-h3) var(--title-font-family);\n    --font-h4: var(--font-weight-bold) var(--font-size-h4)/var(--font-line-height-h4) var(--title-font-family);\n    --font-h5: var(--font-weight-bold) var(--font-size-h5)/var(--font-line-height-h5) var(--font-family);\n    --font-general-label: var(--font-weight-normal) var(--font-size-general-label)/var(--font-line-height-general-label) var(--font-family);\n    --font-paragraph: var(--font-weight-normal) var(--font-size-paragraph)/var(--font-line-height-paragraph) var(--font-family);\n    --font-subtext: var(--font-weight-normal) var(--font-size-subtext)/var(--font-line-height-subtext) var(--font-family);\n}\n\n\n:root  {\n    --react-modal-background: rgba(41, 47, 76, 0.7);\n    --application-background-color: var(--color-snow_white);\n    --application-border-color: #e6e9ef;\n    --text-color-on-card: #323338;\n    --main-nav-background-color: #292f4c;\n    --pulse-background-color: #f5f6f8;\n    --pulse-background-color-rgb: 245, 246, 248;\n    --pulse-background-color-opacity: #f5f6f880;\n    --pulse-text-color: #666;\n    --pulse-hover-background-color: #e6e9ef;\n    --pulse-selected-background-color: #e5f4ff;\n    --pulse-floating-background-color: 253, 253, 250;\n    --pulse-highlight-background-color: #cce9ff;\n    --surfce-color: rgb(51, 51, 51)/* #292f4c */;\n    --surface-border-color: #4b4e69;\n    --card-background-color: var(--primary-background-color);\n    --card-hover-background-color: white;\n    --card-selected-background-color: #d9f0ff;\n    --card-selected-text-color: #0073ea;\n    --automations-hover-background-color: #f5f6f8;\n    --automations-label-background-color: #f5f6f8;\n    --automations-border-color: #e6e9ef;\n    --automations-account-usage-background-color: white;\n    --automations-account-usage-dropdown-border-color: #d9d9d9;\n    --automations-account-usage-progressbar-background-color: #e6e9ef;\n    --apps-svg-icon-invert: invert(0);\n    --apps-code-color: #5559df;\n    --apps-feature-preview-color: #e5f4ff;\n    --apps-tabs-border-color: #1c1f3b;\n    --card-border-color: #e6e9ef;\n    --avatar-border-color: var(--color-snow_white);\n    --modal-bottom-color: #f7f7f7;\n    --modal-free-indication-color: var(--primary-selected-color);\n    --notification-unread-highlight-color: #d2eaff;\n    --apps-marketplace-highlight-color: #f5f6f8;\n    --redactor-context-background-color: #323338;\n    --redactor-context-link-color: #fff;\n    --ajax-spinner-gif-path: url(https://cdn.monday.com/images/ajax_spinner.gif);\n    --scrollbar-color: var(--color-wolf_gray);\n    --monday-loader-gif-path: url(https://cdn.monday.com/images/loader/loader.gif);\n    --hint-background-color: #ccf4e3;\n    --transparent-overlay: rgba(41, 47, 76, 0.5) !important;\n    --timeline-row-hover: rgba(210, 210, 210, 0.3);\n    --timeline-value-remains: #333333;\n    --topbar-bg-color: #eceff8\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n:root {\n    --_cu-grey1100: 26, 28, 32;\n    --_cu-grey1000: 42, 46, 52;\n    --_cu-grey900: 48, 53, 60;\n    --_cu-grey800: 60, 65, 74;\n    --_cu-grey700: 79, 87, 98;\n    --_cu-grey600: 101, 111, 125;\n    --_cu-grey500: 135, 144, 158;\n    --_cu-grey400: 173, 179, 189;\n    --_cu-grey300: 214, 217, 222;\n    --_cu-grey200: 232, 234, 237;\n    --_cu-grey100: 240, 241, 243;\n    --_cu-grey50: 247, 248, 249;\n    --_cu-white: 255, 255, 255;\n    --_cu-purple1100: 50, 52, 82;\n    --_cu-purple1000: 59, 58, 112;\n    --_cu-purple900: 67, 65, 141;\n    --_cu-purple800: 76, 71, 171;\n    --_cu-purple700: 84, 77, 201;\n    --_cu-purple600: 95, 85, 238;\n    --_cu-purple500: 127, 119, 241;\n    --_cu-purple400: 153, 146, 244;\n    --_cu-purple300: 178, 173, 247;\n    --_cu-purple200: 204, 201, 250;\n    --_cu-purple100: 229, 228, 252;\n    --_cu-purple50: 242, 241, 254;\n    --_cu-neonBlue1100: 46, 55, 84;\n    --_cu-neonBlue1000: 50, 64, 117;\n    --_cu-neonBlue900: 54, 73, 149;\n    --_cu-neonBlue800: 59, 82, 182;\n    --_cu-neonBlue700: 63, 91, 214;\n    --_cu-neonBlue600: 68, 102, 255;\n    --_cu-neonBlue500: 105, 133, 255;\n    --_cu-neonBlue400: 135, 157, 255;\n    --_cu-neonBlue300: 165, 182, 255;\n    --_cu-neonBlue200: 195, 206, 255;\n    --_cu-neonBlue100: 225, 231, 255;\n    --_cu-neonBlue50: 240, 243, 255;\n    --_cu-azureBlue1100: 38, 62, 80;\n    --_cu-azureBlue1000: 34, 77, 107;\n    --_cu-azureBlue900: 30, 93, 135;\n    --_cu-azureBlue800: 25, 109, 162;\n    --_cu-azureBlue700: 21, 124, 190;\n    --_cu-azureBlue600: 16, 144, 224;\n    --_cu-azureBlue500: 64, 166, 230;\n    --_cu-azureBlue400: 102, 184, 235;\n    --_cu-azureBlue300: 140, 202, 240;\n    --_cu-azureBlue200: 179, 220, 245;\n    --_cu-azureBlue100: 217, 237, 250;\n    --_cu-azureBlue50: 236, 246, 253;\n    --_cu-teal1100: 38, 64, 69;\n    --_cu-teal1000: 33, 82, 86;\n    --_cu-teal900: 29, 99, 103;\n    --_cu-teal800: 25, 117, 120;\n    --_cu-teal700: 20, 135, 138;\n    --_cu-teal600: 15, 157, 159;\n    --_cu-teal500: 63, 177, 178;\n    --_cu-teal400: 101, 192, 194;\n    --_cu-teal300: 140, 208, 209;\n    --_cu-teal200: 178, 224, 224;\n    --_cu-teal100: 217, 239, 240;\n    --_cu-teal50: 231, 245, 245;\n    --_cu-mint1100: 45, 68, 66;\n    --_cu-mint1000: 48, 90, 80;\n    --_cu-mint900: 51, 112, 94;\n    --_cu-mint800: 54, 134, 108;\n    --_cu-mint700: 57, 156, 122;\n    --_cu-mint600: 61, 184, 139;\n    --_cu-mint500: 100, 198, 162;\n    --_cu-mint400: 131, 209, 181;\n    --_cu-mint300: 162, 221, 199;\n    --_cu-mint200: 193, 232, 218;\n    --_cu-mint100: 224, 244, 236;\n    --_cu-mint50: 240, 249, 246;\n    --_cu-green1100: 35, 60, 55;\n    --_cu-green1000: 29, 75, 57;\n    --_cu-green900: 22, 89, 60;\n    --_cu-green800: 15, 104, 62;\n    --_cu-green700: 8, 118, 65;\n    --_cu-green600: 0, 136, 68;\n    --_cu-green500: 51, 160, 105;\n    --_cu-green400: 92, 179, 135;\n    --_cu-green300: 133, 198, 165;\n    --_cu-green200: 173, 217, 195;\n    --_cu-green100: 214, 236, 225;\n    --_cu-green50: 235, 245, 240;\n    --_cu-yellow1100: 75, 66, 44;\n    --_cu-yellow1000: 108, 87, 35;\n    --_cu-yellow900: 141, 107, 27;\n    --_cu-yellow800: 174, 128, 19;\n    --_cu-yellow700: 207, 148, 10;\n    --_cu-yellow600: 248, 174, 0;\n    --_cu-yellow500: 249, 190, 51;\n    --_cu-yellow400: 251, 203, 92;\n    --_cu-yellow300: 252, 216, 133;\n    --_cu-yellow200: 253, 229, 173;\n    --_cu-yellow100: 254, 242, 214;\n    --_cu-yellow50: 254, 249, 235;\n    --_cu-orange1100: 71, 56, 47;\n    --_cu-orange1000: 101, 66, 42;\n    --_cu-orange900: 130, 75, 38;\n    --_cu-orange800: 159, 85, 33;\n    --_cu-orange700: 188, 95, 28;\n    --_cu-orange600: 225, 107, 22;\n    --_cu-orange500: 231, 137, 69;\n    --_cu-orange400: 236, 160, 106;\n    --_cu-orange300: 241, 184, 143;\n    --_cu-orange200: 245, 208, 180;\n    --_cu-orange100: 250, 231, 218;\n    --_cu-orange50: 253, 243, 236;\n    --_cu-red1100: 69, 48, 55;\n    --_cu-red1000: 96, 51, 57;\n    --_cu-red900: 123, 53, 60;\n    --_cu-red800: 150, 55, 62;\n    --_cu-red700: 177, 58, 65;\n    --_cu-red600: 211, 61, 68;\n    --_cu-red500: 220, 100, 106;\n    --_cu-red400: 227, 131, 136;\n    --_cu-red300: 234, 162, 165;\n    --_cu-red200: 241, 193, 195;\n    --_cu-red100: 248, 224, 225;\n    --_cu-red50: 252, 239, 240;\n    --_cu-pink1100: 73, 54, 68;\n    --_cu-pink1000: 105, 61, 84;\n    --_cu-pink900: 136, 69, 100;\n    --_cu-pink800: 167, 77, 117;\n    --_cu-pink700: 199, 84, 133;\n    --_cu-pink600: 238, 94, 153;\n    --_cu-pink500: 241, 126, 173;\n    --_cu-pink400: 244, 152, 190;\n    --_cu-pink300: 247, 178, 206;\n    --_cu-pink200: 250, 204, 222;\n    --_cu-pink100: 252, 229, 239;\n    --_cu-pink50: 254, 242, 247;\n    --_cu-violet1100: 64, 54, 80;\n    --_cu-violet1000: 87, 62, 107;\n    --_cu-violet900: 109, 70, 135;\n    --_cu-violet800: 132, 78, 162;\n    --_cu-violet700: 154, 86, 190;\n    --_cu-violet600: 182, 96, 224;\n    --_cu-violet500: 197, 128, 230;\n    --_cu-violet400: 208, 153, 235;\n    --_cu-violet300: 220, 179, 240;\n    --_cu-violet200: 232, 204, 245;\n    --_cu-violet100: 243, 230, 250;\n    --_cu-violet50: 249, 242, 253;\n    --_cu-brown1100: 62, 61, 64;\n    --_cu-brown1000: 83, 76, 76;\n    --_cu-brown900: 103, 92, 88;\n    --_cu-brown800: 124, 107, 101;\n    --_cu-brown700: 144, 121, 113;\n    --_cu-brown600: 170, 141, 128;\n    --_cu-brown500: 187, 163, 153;\n    --_cu-brown400: 201, 182, 174;\n    --_cu-brown300: 214, 200, 194;\n    --_cu-brown200: 228, 219, 214;\n    --_cu-brown100: 241, 237, 235;\n    --_cu-brown50: 248, 246, 245;\n    --_cu-black1100: 0, 0, 0;\n    --_cu-black1000: 10, 11, 13;\n    --_cu-black900: 19, 21, 26;\n    --_cu-black800: 29, 32, 38;\n    --_cu-black700: 38, 42, 51;\n    --_cu-black600: 48, 53, 64;\n    --_cu-black500: 89, 93, 102;\n    --_cu-black400: 123, 126, 133;\n    --_cu-black300: 156, 158, 163;\n    --_cu-black200: 189, 190, 194;\n    --_cu-black100: 222, 223, 224;\n    --_cu-black50: 238, 239, 240;\n    --cu-grey1100: rgb(var(--_cu-grey1100));\n    --cu-grey1000: rgb(var(--_cu-grey1000));\n    --cu-grey1000-50: rgb(var(--_cu-grey1000), .5);\n    --cu-grey1000-20: rgb(var(--_cu-grey1000), .2);\n    --cu-grey1000-16: rgb(var(--_cu-grey1000), .16);\n    --cu-grey1000-10: rgb(var(--_cu-grey1000), .1);\n    --cu-grey900: rgb(var(--_cu-grey900));\n    --cu-grey800: rgb(var(--_cu-grey800));\n    --cu-grey700: rgb(var(--_cu-grey700));\n    --cu-grey600: rgb(var(--_cu-grey600));\n    --cu-grey500: rgb(var(--_cu-grey500));\n    --cu-grey400: rgb(var(--_cu-grey400));\n    --cu-grey300: rgb(var(--_cu-grey300));\n    --cu-grey200: rgb(var(--_cu-grey200));\n    --cu-grey100: rgb(var(--_cu-grey100));\n    --cu-grey100-50: rgb(var(--_cu-grey100), .5);\n    --cu-grey100-20: rgb(var(--_cu-grey100), .2);\n    --cu-grey100-16: rgb(var(--_cu-grey100), .16);\n    --cu-grey100-10: rgb(var(--_cu-grey100), .1);\n    --cu-grey50: rgb(var(--_cu-grey50));\n    --cu-white: rgb(var(--_cu-white));\n    --cu-white-80: rgb(var(--_cu-white), .8);\n    --cu-white-50: rgb(var(--_cu-white), .5);\n    --cu-white-20: rgb(var(--_cu-white), .2);\n    --cu-white-16: rgb(var(--_cu-white), .16);\n    --cu-white-10: rgb(var(--_cu-white), .1);\n    --cu-green1100: rgb(var(--_cu-green1100));\n    --cu-green1000: rgb(var(--_cu-green1000));\n    --cu-green900: rgb(var(--_cu-green900));\n    --cu-green800: rgb(var(--_cu-green800));\n    --cu-green700: rgb(var(--_cu-green700));\n    --cu-green600: rgb(var(--_cu-green600));\n    --cu-green500: rgb(var(--_cu-green500));\n    --cu-green400: rgb(var(--_cu-green400));\n    --cu-green300: rgb(var(--_cu-green300));\n    --cu-green200: rgb(var(--_cu-green200));\n    --cu-green100: rgb(var(--_cu-green100));\n    --cu-green50: rgb(var(--_cu-green50));\n    --cu-yellow1100: rgb(var(--_cu-yellow1100));\n    --cu-yellow1000: rgb(var(--_cu-yellow1000));\n    --cu-yellow900: rgb(var(--_cu-yellow900));\n    --cu-yellow800: rgb(var(--_cu-yellow800));\n    --cu-yellow700: rgb(var(--_cu-yellow700));\n    --cu-yellow600: rgb(var(--_cu-yellow600));\n    --cu-yellow500: rgb(var(--_cu-yellow500));\n    --cu-yellow400: rgb(var(--_cu-yellow400));\n    --cu-yellow300: rgb(var(--_cu-yellow300));\n    --cu-yellow200: rgb(var(--_cu-yellow200));\n    --cu-yellow100: rgb(var(--_cu-yellow100));\n    --cu-yellow50: rgb(var(--_cu-yellow50));\n    --cu-red1100: rgb(var(--_cu-red1100));\n    --cu-red1000: rgb(var(--_cu-red1000));\n    --cu-red900: rgb(var(--_cu-red900));\n    --cu-red800: rgb(var(--_cu-red800));\n    --cu-red700: rgb(var(--_cu-red700));\n    --cu-red600: rgb(var(--_cu-red600));\n    --cu-red600-16: rgb(var(--_cu-red600), .16);\n    --cu-red500: rgb(var(--_cu-red500));\n    --cu-red500-16: rgb(var(--_cu-red500), .16);\n    --cu-red400: rgb(var(--_cu-red400));\n    --cu-red300: rgb(var(--_cu-red300));\n    --cu-red200: rgb(var(--_cu-red200));\n    --cu-red100: rgb(var(--_cu-red100));\n    --cu-red50: rgb(var(--_cu-red50));\n    --cu-purple1100: rgb(var(--_cu-purple1100));\n    --cu-purple1000: rgb(var(--_cu-purple1000));\n    --cu-purple900: rgb(var(--_cu-purple900));\n    --cu-purple800: rgb(var(--_cu-purple800));\n    --cu-purple700: rgb(var(--_cu-purple700));\n    --cu-purple600: rgb(var(--_cu-purple600));\n    --cu-purple600-16: rgb(var(--_cu-purple600), .16);\n    --cu-purple500: rgb(var(--_cu-purple500));\n    --cu-purple500-16: rgb(var(--_cu-purple500), .16);\n    --cu-purple400: rgb(var(--_cu-purple400));\n    --cu-purple300: rgb(var(--_cu-purple300));\n    --cu-purple200: rgb(var(--_cu-purple200));\n    --cu-purple100: rgb(var(--_cu-purple100));\n    --cu-purple50: rgb(var(--_cu-purple50));\n    --cu-neonBlue1100: rgb(var(--_cu-neonBlue1100));\n    --cu-neonBlue1000: rgb(var(--_cu-neonBlue1000));\n    --cu-neonBlue900: rgb(var(--_cu-neonBlue900));\n    --cu-neonBlue800: rgb(var(--_cu-neonBlue800));\n    --cu-neonBlue700: rgb(var(--_cu-neonBlue700));\n    --cu-neonBlue600: rgb(var(--_cu-neonBlue600));\n    --cu-neonBlue600-16: rgb(var(--_cu-neonBlue600), .16);\n    --cu-neonBlue500: rgb(var(--_cu-neonBlue500));\n    --cu-neonBlue500-16: rgb(var(--_cu-neonBlue500), .16);\n    --cu-neonBlue400: rgb(var(--_cu-neonBlue400));\n    --cu-neonBlue300: rgb(var(--_cu-neonBlue300));\n    --cu-neonBlue200: rgb(var(--_cu-neonBlue200));\n    --cu-neonBlue100: rgb(var(--_cu-neonBlue100));\n    --cu-neonBlue50: rgb(var(--_cu-neonBlue50));\n    --cu-azureBlue1100: rgb(var(--_cu-azureBlue1100));\n    --cu-azureBlue1000: rgb(var(--_cu-azureBlue1000));\n    --cu-azureBlue900: rgb(var(--_cu-azureBlue900));\n    --cu-azureBlue800: rgb(var(--_cu-azureBlue800));\n    --cu-azureBlue700: rgb(var(--_cu-azureBlue700));\n    --cu-azureBlue600: rgb(var(--_cu-azureBlue600));\n    --cu-azureBlue600-16: rgb(var(--_cu-azureBlue600), .16);\n    --cu-azureBlue500: rgb(var(--_cu-azureBlue500));\n    --cu-azureBlue500-16: rgb(var(--_cu-azureBlue500), .16);\n    --cu-azureBlue400: rgb(var(--_cu-azureBlue400));\n    --cu-azureBlue300: rgb(var(--_cu-azureBlue300));\n    --cu-azureBlue200: rgb(var(--_cu-azureBlue200));\n    --cu-azureBlue100: rgb(var(--_cu-azureBlue100));\n    --cu-azureBlue50: rgb(var(--_cu-azureBlue50));\n    --cu-teal1100: rgb(var(--_cu-teal1100));\n    --cu-teal1000: rgb(var(--_cu-teal1000));\n    --cu-teal900: rgb(var(--_cu-teal900));\n    --cu-teal800: rgb(var(--_cu-teal800));\n    --cu-teal700: rgb(var(--_cu-teal700));\n    --cu-teal600: rgb(var(--_cu-teal600));\n    --cu-teal600-16: rgb(var(--_cu-teal600), .16);\n    --cu-teal500: rgb(var(--_cu-teal500));\n    --cu-teal500-16: rgb(var(--_cu-teal500), .16);\n    --cu-teal400: rgb(var(--_cu-teal400));\n    --cu-teal300: rgb(var(--_cu-teal300));\n    --cu-teal200: rgb(var(--_cu-teal200));\n    --cu-teal100: rgb(var(--_cu-teal100));\n    --cu-teal50: rgb(var(--_cu-teal50));\n    --cu-mint1100: rgb(var(--_cu-mint1100));\n    --cu-mint1000: rgb(var(--_cu-mint1000));\n    --cu-mint900: rgb(var(--_cu-mint900));\n    --cu-mint800: rgb(var(--_cu-mint800));\n    --cu-mint700: rgb(var(--_cu-mint700));\n    --cu-mint600: rgb(var(--_cu-mint600));\n    --cu-mint600-16: rgb(var(--_cu-mint600), .16);\n    --cu-mint500: rgb(var(--_cu-mint500));\n    --cu-mint500-16: rgb(var(--_cu-mint500), .16);\n    --cu-mint400: rgb(var(--_cu-mint400));\n    --cu-mint300: rgb(var(--_cu-mint300));\n    --cu-mint200: rgb(var(--_cu-mint200));\n    --cu-mint100: rgb(var(--_cu-mint100));\n    --cu-mint50: rgb(var(--_cu-mint50));\n    --cu-orange1100: rgb(var(--_cu-orange1100));\n    --cu-orange1000: rgb(var(--_cu-orange1000));\n    --cu-orange900: rgb(var(--_cu-orange900));\n    --cu-orange800: rgb(var(--_cu-orange800));\n    --cu-orange700: rgb(var(--_cu-orange700));\n    --cu-orange600: rgb(var(--_cu-orange600));\n    --cu-orange600-16: rgb(var(--_cu-orange600), .16);\n    --cu-orange500: rgb(var(--_cu-orange500));\n    --cu-orange500-16: rgb(var(--_cu-orange500), .16);\n    --cu-orange400: rgb(var(--_cu-orange400));\n    --cu-orange300: rgb(var(--_cu-orange300));\n    --cu-orange200: rgb(var(--_cu-orange200));\n    --cu-orange100: rgb(var(--_cu-orange100));\n    --cu-orange50: rgb(var(--_cu-orange50));\n    --cu-pink1100: rgb(var(--_cu-pink1100));\n    --cu-pink1000: rgb(var(--_cu-pink1000));\n    --cu-pink900: rgb(var(--_cu-pink900));\n    --cu-pink800: rgb(var(--_cu-pink800));\n    --cu-pink700: rgb(var(--_cu-pink700));\n    --cu-pink600: rgb(var(--_cu-pink600));\n    --cu-pink600-16: rgb(var(--_cu-pink600), .16);\n    --cu-pink500: rgb(var(--_cu-pink500));\n    --cu-pink500-16: rgb(var(--_cu-pink500), .16);\n    --cu-pink400: rgb(var(--_cu-pink400));\n    --cu-pink300: rgb(var(--_cu-pink300));\n    --cu-pink200: rgb(var(--_cu-pink200));\n    --cu-pink100: rgb(var(--_cu-pink100));\n    --cu-pink50: rgb(var(--_cu-pink50));\n    --cu-violet1100: rgb(var(--_cu-violet1100));\n    --cu-violet1000: rgb(var(--_cu-violet1000));\n    --cu-violet900: rgb(var(--_cu-violet900));\n    --cu-violet800: rgb(var(--_cu-violet800));\n    --cu-violet700: rgb(var(--_cu-violet700));\n    --cu-violet600: rgb(var(--_cu-violet600));\n    --cu-violet600-16: rgb(var(--_cu-violet600), .16);\n    --cu-violet500: rgb(var(--_cu-violet500));\n    --cu-violet500-16: rgb(var(--_cu-violet500), .16);\n    --cu-violet400: rgb(var(--_cu-violet400));\n    --cu-violet300: rgb(var(--_cu-violet300));\n    --cu-violet200: rgb(var(--_cu-violet200));\n    --cu-violet100: rgb(var(--_cu-violet100));\n    --cu-violet50: rgb(var(--_cu-violet50));\n    --cu-brown1100: rgb(var(--_cu-brown1100));\n    --cu-brown1000: rgb(var(--_cu-brown1000));\n    --cu-brown900: rgb(var(--_cu-brown900));\n    --cu-brown800: rgb(var(--_cu-brown800));\n    --cu-brown700: rgb(var(--_cu-brown700));\n    --cu-brown600: rgb(var(--_cu-brown600));\n    --cu-brown600-16: rgb(var(--_cu-brown600), .16);\n    --cu-brown500: rgb(var(--_cu-brown500));\n    --cu-brown500-16: rgb(var(--_cu-brown500), .16);\n    --cu-brown400: rgb(var(--_cu-brown400));\n    --cu-brown300: rgb(var(--_cu-brown300));\n    --cu-brown200: rgb(var(--_cu-brown200));\n    --cu-brown100: rgb(var(--_cu-brown100));\n    --cu-brown50: rgb(var(--_cu-brown50));\n    --cu-black1100: rgb(var(--_cu-black1100));\n    --cu-black1000: rgb(var(--_cu-black1000));\n    --cu-black900: rgb(var(--_cu-black900));\n    --cu-black800: rgb(var(--_cu-black800));\n    --cu-black700: rgb(var(--_cu-black700));\n    --cu-black600: rgb(var(--_cu-black600));\n    --cu-black600-16: rgb(var(--_cu-black600), .16);\n    --cu-black500: rgb(var(--_cu-black500));\n    --cu-black500-16: rgb(var(--_cu-black500), .16);\n    --cu-black400: rgb(var(--_cu-black400));\n    --cu-black300: rgb(var(--_cu-black300));\n    --cu-black200: rgb(var(--_cu-black200));\n    --cu-black100: rgb(var(--_cu-black100));\n    --cu-black50: rgb(var(--_cu-black50))\n}\n\nbody {\n    --rem-divisor: 16;\n    --rem-return-unit: 1rem\n}\n\nbody {\n    --cu-size-1: calc(4 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-size-2: calc(8 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-size-3: calc(12 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-size-4: calc(16 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-size-5: calc(20 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-size-6: calc(24 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-size-7: calc(28 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-size-8: calc(32 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-size-9: calc(36 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-size-10: calc(40 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-size-11: calc(44 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-size-12: calc(48 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-radii-1: calc(2 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-radii-2: calc(4 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-radii-3: calc(6 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-radii-4: calc(8 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-radii-5: calc(10 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-radii-6: calc(12 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-radii-7: calc(16 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-radii-8: calc(20 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-radii-9: calc(24 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-radii-round: calc(666 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-border-size-1: 1px;\n    --cu-border-size-2: 2px\n}\n\nbody {\n    --cu-font-family: -apple-system, \"BlinkMacSystemFont\", \"Segoe UI\", \"Helvetica\", \"Apple Color Emoji\", \"Arial\", sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    --cu-font-weight-regular: 400;\n    --cu-font-weight-medium: 500;\n    --cu-font-weight-semibold: 600;\n    --cu-font-weight-bold: 700;\n    --cu-font-size-1: calc(6 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-font-size-2: calc(8 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-font-size-3: calc(10 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-font-size-4: calc(11 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-font-size-5: calc(12 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-font-size-6: calc(14 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-font-size-7: calc(16 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-font-size-8: calc(18 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-font-size-9: calc(20 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-font-size-10: calc(22 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-font-size-11: calc(24 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-font-size-12: calc(28 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-font-size-13: calc(32 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-font-size-14: calc(36 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-font-size-15: calc(40 / var(--rem-divisor) * var(--rem-return-unit));\n    --cu-label-weight: var(--cu-font-weight-regular);\n    --cu-label-weight-strong: var(--cu-font-weight-medium);\n    --cu-label-large-font-size: var(--cu-font-size-8);\n    --cu-label-large-line-height: 1.33;\n    --cu-label-medium-font-size: var(--cu-font-size-7);\n    --cu-label-medium-line-height: 1.25;\n    --cu-label-small-font-size: var(--cu-font-size-6);\n    --cu-label-small-line-height: 1.14;\n    --cu-label-xsmall-font-size: var(--cu-font-size-5);\n    --cu-label-xsmall-line-height: 1.33;\n    --cu-paragraph-weight: var(--cu-font-weight-regular);\n    --cu-paragraph-weight-strong: var(--cu-font-weight-medium);\n    --cu-paragraph-line-height: 1.5;\n    --cu-paragraph-large-font-size: var(--cu-font-size-7);\n    --cu-paragraph-large-line-height: var(--cu-paragraph-line-height);\n    --cu-paragraph-medium-font-size: var(--cu-font-size-6);\n    --cu-paragraph-medium-line-height: var(--cu-paragraph-line-height);\n    --cu-paragraph-small-font-size: var(--cu-font-size-5);\n    --cu-paragraph-small-line-height: var(--cu-paragraph-line-height);\n    --cu-heading-weight: var(--cu-font-weight-semibold);\n    --cu-heading-line-height: 1.5;\n    --cu-heading-h1-font-size: var(--cu-font-size-15);\n    --cu-heading-h2-font-size: var(--cu-font-size-13);\n    --cu-heading-h3-font-size: var(--cu-font-size-11);\n    --cu-heading-h4-font-size: var(--cu-font-size-9);\n    --cu-heading-h5-font-size: var(--cu-font-size-8);\n    --cu-heading-h6-font-size: var(--cu-font-size-7);\n    --cu-heading-xxsmall-font-size: var(--cu-font-size-6);\n    --cu-heading-xxsmall-line-height: var(--cu-heading-line-height);\n    --cu-heading-caption-font-size: var(--cu-font-size-4);\n    --cu-heading-caption-line-height: var(--cu-heading-line-height)\n}\n\nbody:not(.cu-purple,.cu-neonBlue,.cu-azureBlue,.cu-teal,.cu-mint,.cu-orange,.cu-pink,.cu-violet,.cu-brown,.cu-black,.cu-custom) {\n    --cu-background-primary: var(--theme-main-color, #7b68ee);\n    --cu-background-primary-hover: var(--theme-main-color-dark, #5f48ea);\n    --cu-background-primary-pressed: var(--theme-main-color-dark, #5f48ea);\n    --cu-background-primary-disabled: var(--theme-main-color-light, #d3cdf9);\n    --cu-background-primary-subtle: rgb( var(--theme-main-color-rgb, 123, 104, 238), .12 );\n    --cu-background-primary-on-subtle: rgb( var(--theme-main-color-rgb, 123, 104, 238), .18 );\n    --cu-content-primary: var(--theme-main-color, #7b68ee);\n    --cu-border-primary: var(--theme-main-color, #7b68ee);\n    --cu-border-primary-focus: var(--theme-main-color, #7b68ee);\n    --cu-effect-primary: rgb(var(--theme-main-color-rgb, 123, 104, 238), .2);\n    --cu-link-primary: var(--theme-main-color, #7b68ee);\n    --cu-link-primary-hover: var(--theme-main-color-dark, #5f48ea)\n}\n\nbody.dark-theme:not(.cu-purple,.cu-neonBlue,.cu-azureBlue,.cu-teal,.cu-mint,.cu-orange,.cu-pink,.cu-violet,.cu-brown,.cu-black,.cu-custom),.dark-sidebar {\n    --cu-background-primary: var(--theme-main-color, #7b68ee);\n    --cu-background-primary-hover: var(--theme-main-color-dark, #5f48ea);\n    --cu-background-primary-pressed: var(--theme-main-color, #7b68ee);\n    --cu-background-primary-disabled: rgb( var(--theme-main-color-rgb, 123, 104, 238), .5 );\n    --cu-background-primary-subtle: rgb( var(--theme-main-color-rgb, 123, 104, 238), .22 );\n    --cu-background-primary-on-subtle: rgb( var(--theme-main-color-rgb, 123, 104, 238), .3 );\n    --cu-content-primary: var(--theme-main-color, #7b68ee);\n    --cu-border-primary: var(--theme-main-color, #7b68ee);\n    --cu-border-primary-focus: var(--theme-main-color, #7b68ee);\n    --cu-effect-primary: rgb(var(--theme-main-color-rgb, 123, 104, 238), .2);\n    --cu-link-primary: var(--theme-main-color, #7b68ee);\n    --cu-link-primary-hover: var(--theme-main-color-dark, #5f48ea)\n}\n\nbody.dark-theme,.dark-sidebar {\n    --cu-background-main: var(--cu-grey1000);\n    --cu-background-main-hover: var(--cu-grey900);\n    --cu-background-main-hover-strong: var(--cu-grey800);\n    --cu-background-main-pressed: var(--cu-grey700);\n    --cu-background-main-offset: var(--cu-grey900);\n    --cu-background-main-inverse: var(--cu-white);\n    --cu-background-main-inverse-offset: var(--cu-grey700);\n    --cu-background-subtle: var(--cu-grey900);\n    --cu-background-subtle-hover: var(--cu-grey800);\n    --cu-background-subtle-hover-strong: var(--cu-grey700);\n    --cu-background-subtle-pressed: var(--cu-grey600);\n    --cu-background-subtle-offset: var(--cu-grey1000);\n    --cu-background-on-main: var(--cu-grey800);\n    --cu-background-on-main-hover: var(--cu-grey700);\n    --cu-background-on-main-pressed: var(--cu-grey600);\n    --cu-background-on-subtle: var(--cu-grey700);\n    --cu-background-on-subtle-hover: var(--cu-grey600);\n    --cu-background-on-subtle-pressed: var(--cu-grey700);\n    --cu-background-success: var(--cu-green500);\n    --cu-background-success-subtle: var(--cu-green1100);\n    --cu-background-warning: var(--cu-yellow500);\n    --cu-background-warning-subtle: var(--cu-yellow1100);\n    --cu-background-danger: var(--cu-red500);\n    --cu-background-danger-hover: var(--cu-red400);\n    --cu-background-danger-pressed: var(--cu-red500);\n    --cu-background-danger-disabled: var(--cu-red900);\n    --cu-background-danger-subtle: var(--cu-red1100);\n    --cu-background-danger-subtle-hover: var(--cu-red1000);\n    --cu-background-danger-subtle-pressed: var(--cu-red1100);\n    --cu-background-tooltip: var(--cu-grey700);\n    --cu-background-modal: var(--cu-grey700);\n    --cu-background-on-dark-hover: var(--cu-white-10);\n    --cu-background-on-dark-pressed: var(--cu-white-20);\n    --cu-background-on-light-hover: var(--cu-grey1000-10);\n    --cu-background-on-light-pressed: var(--cu-grey1000-20);\n    --cu-background-notification: var(--cu-pink500);\n    --cu-content-default: var(--cu-grey100);\n    --cu-content-secondary: var(--cu-grey400);\n    --cu-content-tertiary: var(--cu-grey500);\n    --cu-content-placeholder: var(--cu-grey600);\n    --cu-content-disabled: var(--cu-grey700);\n    --cu-content-success: var(--cu-green400);\n    --cu-content-warning: var(--cu-yellow400);\n    --cu-content-danger: var(--cu-red400);\n    --cu-content-danger-disabled: var(--cu-red900);\n    --cu-content-on-dark: var(--cu-white);\n    --cu-content-on-dark-disabled: var(--cu-white-50);\n    --cu-content-on-dark-secondary: var(--cu-white-80);\n    --cu-content-on-light: var(--cu-grey1000);\n    --cu-content-on-light-disabled: var(--cu-grey1000-50);\n    --cu-border-default: var(--cu-grey800);\n    --cu-border-low-contrast: var(--cu-grey900);\n    --cu-border-high-contrast: var(--cu-grey700);\n    --cu-border-hover: var(--cu-grey600);\n    --cu-border-input: var(--cu-grey600);\n    --cu-border-input-hover: var(--cu-grey500);\n    --cu-border-success: var(--cu-green500);\n    --cu-border-danger: var(--cu-red500);\n    --cu-border-danger-focus: var(--cu-red500);\n    --cu-border-warning: var(--cu-yellow500);\n    --cu-border-on-dark: var(--cu-white-50);\n    --cu-border-on-dark-focus: var(--cu-white);\n    --cu-border-on-light: var(--cu-grey1000-50);\n    --cu-border-on-light-focus: var(--cu-grey1000);\n    --cu-effect-danger: var(--cu-red500-16);\n    --cu-effect-on-dark: var(--cu-white-16);\n    --cu-effect-on-light: var(--cu-grey1000-16);\n    --cu-link-hyperlink: var(--cu-neonBlue400);\n    --cu-link-hyperlink-hover: var(--cu-neonBlue300);\n    --cu-fab-icon-pink: var(--cu-pink500);\n    --cu-fab-icon-yellow: var(--cu-yellow500);\n    --cu-fab-icon-mint: var(--cu-mint500);\n    --cu-fab-icon-azure-blue: var(--cu-azureBlue500);\n    --cu-alert-banner-background: var(--cu-grey700);\n    --cu-alert-banner-background-subtle: var(--cu-grey900);\n    --cu-alert-banner-content: var(--cu-grey100);\n    --cu-alert-banner-content-dark: var(--cu-grey1000);\n    --cu-avatar-user-bg-purple: var(--cu-purple500);\n    --cu-avatar-user-bg-neon-blue: var(--cu-neonBlue500);\n    --cu-avatar-user-bg-azure-blue: var(--cu-azureBlue500);\n    --cu-avatar-user-bg-teal: var(--cu-teal500);\n    --cu-avatar-user-bg-mint: var(--cu-mint500);\n    --cu-avatar-user-bg-yellow: var(--cu-yellow500);\n    --cu-avatar-user-bg-orange: var(--cu-orange500);\n    --cu-avatar-user-bg-red: var(--cu-red500);\n    --cu-avatar-user-bg-pink: var(--cu-pink500);\n    --cu-avatar-user-bg-violet: var(--cu-violet500);\n    --cu-avatar-user-bg-brown: var(--cu-brown500);\n    --cu-avatar-user-bg-black: var(--cu-black500);\n    --cu-avatar-user-online: var(--cu-green400);\n    --cu-avatar-user-guest: var(--cu-grey400);\n    --cu-avatar-user-remove: var(--cu-grey700);\n    --cu-automations-usage-bg-neon-blue: var(--cu-neonBlue1100);\n    --cu-automations-usage-content-neon-blue: var(--cu-neonBlue400);\n    --cu-automations-usage-bg-teal: var(--cu-teal1100);\n    --cu-automations-usage-content-teal: var(--cu-teal400);\n    --cu-avatar-space-bg-purple: var(--cu-purple900);\n    --cu-avatar-space-bg-neon-blue: var(--cu-neonBlue900);\n    --cu-avatar-space-bg-azure-blue: var(--cu-azureBlue900);\n    --cu-avatar-space-bg-teal: var(--cu-teal900);\n    --cu-avatar-space-bg-mint: var(--cu-mint900);\n    --cu-avatar-space-bg-yellow: var(--cu-yellow900);\n    --cu-avatar-space-bg-orange: var(--cu-orange900);\n    --cu-avatar-space-bg-red: var(--cu-red900);\n    --cu-avatar-space-bg-pink: var(--cu-pink900);\n    --cu-avatar-space-bg-violet: var(--cu-violet900);\n    --cu-avatar-space-bg-brown: var(--cu-brown900);\n    --cu-avatar-space-bg-black: var(--cu-black900);\n    --cu-avatar-space-content-purple: var(--cu-purple100);\n    --cu-avatar-space-content-neon-blue: var(--cu-neonBlue100);\n    --cu-avatar-space-content-azure-blue: var(--cu-azureBlue100);\n    --cu-avatar-space-content-teal: var(--cu-teal100);\n    --cu-avatar-space-content-mint: var(--cu-mint100);\n    --cu-avatar-space-content-yellow: var(--cu-yellow100);\n    --cu-avatar-space-content-orange: var(--cu-orange100);\n    --cu-avatar-space-content-red: var(--cu-red100);\n    --cu-avatar-space-content-pink: var(--cu-pink100);\n    --cu-avatar-space-content-violet: var(--cu-violet100);\n    --cu-avatar-space-content-brown: var(--cu-brown100);\n    --cu-avatar-space-content-black: var(--cu-black100);\n    --cu-quill-banner-red: var(--cu-red1100);\n    --cu-quill-banner-orange: var(--cu-orange1100);\n    --cu-quill-banner-yellow: var(--cu-yellow1100);\n    --cu-quill-banner-azure-blue: var(--cu-azureBlue1100);\n    --cu-quill-banner-purple: var(--cu-purple1100);\n    --cu-quill-banner-pink: var(--cu-pink1100);\n    --cu-quill-banner-green: var(--cu-green1100);\n    --cu-quill-banner-black: var(--cu-black1100);\n    --cu-quill-banner-border-red: var(--cu-red500);\n    --cu-quill-banner-border-orange: var(--cu-orange500);\n    --cu-quill-banner-border-yellow: var(--cu-yellow500);\n    --cu-quill-banner-border-azure-blue: var(--cu-azureBlue500);\n    --cu-quill-banner-border-purple: var(--cu-purple500);\n    --cu-quill-banner-border-pink: var(--cu-pink500);\n    --cu-quill-banner-border-green: var(--cu-green500);\n    --cu-quill-banner-border-black: var(--cu-black500);\n    --cu-background-overlay: rgba(var(--_cu-grey1100), .64);\n    --cu-background-overlay-light: rgba(var(--_cu-grey1100), .32);\n    --cu-elevation-1: 0 calc(1 / var(--rem-divisor) * var(--rem-return-unit)) calc(4 / var(--rem-divisor) * var(--rem-return-unit)) rgba(0, 0, 0, .16);\n    --cu-elevation-2: 0 calc(2 / var(--rem-divisor) * var(--rem-return-unit)) calc(8 / var(--rem-divisor) * var(--rem-return-unit)) rgba(0, 0, 0, .16);\n    --cu-elevation-3: 0 calc(4 / var(--rem-divisor) * var(--rem-return-unit)) calc(16 / var(--rem-divisor) * var(--rem-return-unit)) rgba(0, 0, 0, .16);\n    --cu-elevation-4: 0 calc(6 / var(--rem-divisor) * var(--rem-return-unit)) calc(24 / var(--rem-divisor) * var(--rem-return-unit)) rgba(0, 0, 0, .16)\n}\n\nbody.dark-theme.cu-purple,body.cu-purple .dark-sidebar {\n    --cu-background-primary: var(--cu-purple500);\n    --cu-background-primary-hover: var(--cu-purple400);\n    --cu-background-primary-pressed: var(--cu-purple500);\n    --cu-background-primary-disabled: var(--cu-purple900);\n    --cu-background-primary-subtle: var(--cu-purple1100);\n    --cu-background-primary-on-subtle: var(--cu-purple1000);\n    --cu-content-primary: var(--cu-purple400);\n    --cu-border-primary: var(--cu-purple500);\n    --cu-border-primary-focus: var(--cu-purple500);\n    --cu-effect-primary: var(--cu-purple500-16);\n    --cu-link-primary: var(--cu-purple400);\n    --cu-link-primary-hover: var(--cu-purple300)\n}\n\nbody.dark-theme.cu-neonBlue,body.cu-neonBlue .dark-sidebar {\n    --cu-background-primary: var(--cu-neonBlue500);\n    --cu-background-primary-hover: var(--cu-neonBlue400);\n    --cu-background-primary-pressed: var(--cu-neonBlue500);\n    --cu-background-primary-disabled: var(--cu-neonBlue900);\n    --cu-background-primary-subtle: var(--cu-neonBlue1100);\n    --cu-background-primary-on-subtle: var(--cu-neonBlue1000);\n    --cu-content-primary: var(--cu-neonBlue400);\n    --cu-border-primary: var(--cu-neonBlue500);\n    --cu-border-primary-focus: var(--cu-neonBlue500);\n    --cu-effect-primary: var(--cu-neonBlue500-16);\n    --cu-link-primary: var(--cu-neonBlue400);\n    --cu-link-primary-hover: var(--cu-neonBlue300)\n}\n\nbody.dark-theme.cu-azureBlue,body.cu-azureBlue .dark-sidebar {\n    --cu-background-primary: var(--cu-azureBlue500);\n    --cu-background-primary-hover: var(--cu-azureBlue400);\n    --cu-background-primary-pressed: var(--cu-azureBlue500);\n    --cu-background-primary-disabled: var(--cu-azureBlue900);\n    --cu-background-primary-subtle: var(--cu-azureBlue1100);\n    --cu-background-primary-on-subtle: var(--cu-azureBlue1000);\n    --cu-content-primary: var(--cu-azureBlue400);\n    --cu-border-primary: var(--cu-azureBlue500);\n    --cu-border-primary-focus: var(--cu-azureBlue500);\n    --cu-effect-primary: var(--cu-azureBlue500-16);\n    --cu-link-primary: var(--cu-azureBlue400);\n    --cu-link-primary-hover: var(--cu-azureBlue300)\n}\n\nbody.dark-theme.cu-teal,body.cu-teal .dark-sidebar {\n    --cu-background-primary: var(--cu-teal500);\n    --cu-background-primary-hover: var(--cu-teal400);\n    --cu-background-primary-pressed: var(--cu-teal500);\n    --cu-background-primary-disabled: var(--cu-teal900);\n    --cu-background-primary-subtle: var(--cu-teal1100);\n    --cu-background-primary-on-subtle: var(--cu-teal1000);\n    --cu-content-primary: var(--cu-teal400);\n    --cu-border-primary: var(--cu-teal500);\n    --cu-border-primary-focus: var(--cu-teal500);\n    --cu-effect-primary: var(--cu-teal500-16);\n    --cu-link-primary: var(--cu-teal400);\n    --cu-link-primary-hover: var(--cu-teal300)\n}\n\nbody.dark-theme.cu-mint,body.cu-mint .dark-sidebar {\n    --cu-background-primary: var(--cu-mint500);\n    --cu-background-primary-hover: var(--cu-mint400);\n    --cu-background-primary-pressed: var(--cu-mint500);\n    --cu-background-primary-disabled: var(--cu-mint900);\n    --cu-background-primary-subtle: var(--cu-mint1100);\n    --cu-background-primary-on-subtle: var(--cu-mint1000);\n    --cu-content-primary: var(--cu-mint400);\n    --cu-border-primary: var(--cu-mint500);\n    --cu-border-primary-focus: var(--cu-mint500);\n    --cu-effect-primary: var(--cu-mint500-16);\n    --cu-link-primary: var(--cu-mint400);\n    --cu-link-primary-hover: var(--cu-mint300)\n}\n\nbody.dark-theme.cu-orange,body.cu-orange .dark-sidebar {\n    --cu-background-primary: var(--cu-orange500);\n    --cu-background-primary-hover: var(--cu-orange400);\n    --cu-background-primary-pressed: var(--cu-orange500);\n    --cu-background-primary-disabled: var(--cu-orange900);\n    --cu-background-primary-subtle: var(--cu-orange1100);\n    --cu-background-primary-on-subtle: var(--cu-orange1000);\n    --cu-content-primary: var(--cu-orange400);\n    --cu-border-primary: var(--cu-orange500);\n    --cu-border-primary-focus: var(--cu-orange500);\n    --cu-effect-primary: var(--cu-orange500-16);\n    --cu-link-primary: var(--cu-orange400);\n    --cu-link-primary-hover: var(--cu-orange300)\n}\n\nbody.dark-theme.cu-pink,body.cu-pink .dark-sidebar {\n    --cu-background-primary: var(--cu-pink500);\n    --cu-background-primary-hover: var(--cu-pink400);\n    --cu-background-primary-pressed: var(--cu-pink500);\n    --cu-background-primary-disabled: var(--cu-pink900);\n    --cu-background-primary-subtle: var(--cu-pink1100);\n    --cu-background-primary-on-subtle: var(--cu-pink1000);\n    --cu-content-primary: var(--cu-pink400);\n    --cu-border-primary: var(--cu-pink500);\n    --cu-border-primary-focus: var(--cu-pink500);\n    --cu-effect-primary: var(--cu-pink500-16);\n    --cu-link-primary: var(--cu-pink400);\n    --cu-link-primary-hover: var(--cu-pink300)\n}\n\nbody.dark-theme.cu-violet,body.cu-violet .dark-sidebar {\n    --cu-background-primary: var(--cu-violet500);\n    --cu-background-primary-hover: var(--cu-violet400);\n    --cu-background-primary-pressed: var(--cu-violet500);\n    --cu-background-primary-disabled: var(--cu-violet900);\n    --cu-background-primary-subtle: var(--cu-violet1100);\n    --cu-background-primary-on-subtle: var(--cu-violet1000);\n    --cu-content-primary: var(--cu-violet400);\n    --cu-border-primary: var(--cu-violet500);\n    --cu-border-primary-focus: var(--cu-violet500);\n    --cu-effect-primary: var(--cu-violet500-16);\n    --cu-link-primary: var(--cu-violet400);\n    --cu-link-primary-hover: var(--cu-violet300)\n}\n\nbody.dark-theme.cu-brown,body.cu-brown .dark-sidebar {\n    --cu-background-primary: var(--cu-brown500);\n    --cu-background-primary-hover: var(--cu-brown400);\n    --cu-background-primary-pressed: var(--cu-brown500);\n    --cu-background-primary-disabled: var(--cu-brown900);\n    --cu-background-primary-subtle: var(--cu-brown1100);\n    --cu-background-primary-on-subtle: var(--cu-brown1000);\n    --cu-content-primary: var(--cu-brown400);\n    --cu-border-primary: var(--cu-brown500);\n    --cu-border-primary-focus: var(--cu-brown500);\n    --cu-effect-primary: var(--cu-brown500-16);\n    --cu-link-primary: var(--cu-brown400);\n    --cu-link-primary-hover: var(--cu-brown300)\n}\n\nbody.dark-theme.cu-black,body.cu-black .dark-sidebar {\n    --cu-background-primary: var(--cu-black500);\n    --cu-background-primary-hover: var(--cu-black400);\n    --cu-background-primary-pressed: var(--cu-black500);\n    --cu-background-primary-disabled: var(--cu-black900);\n    --cu-background-primary-subtle: var(--cu-black1100);\n    --cu-background-primary-on-subtle: var(--cu-black1000);\n    --cu-content-primary: var(--cu-black400);\n    --cu-border-primary: var(--cu-black500);\n    --cu-border-primary-focus: var(--cu-black500);\n    --cu-effect-primary: var(--cu-black500-16);\n    --cu-link-primary: var(--cu-black400);\n    --cu-link-primary-hover: var(--cu-black300)\n}\n\nbody.dark-theme.cu-custom,body.cu-custom .dark-sidebar {\n    --cu-custom1100: hsl(var(--cu-custom-hue, 83), 19%, 26%);\n    --cu-custom1000: hsl(var(--cu-custom-hue, 83), 27%, 33%);\n    --cu-custom900: hsl(var(--cu-custom-hue, 83), 32%, 40%);\n    --cu-custom800: hsl(var(--cu-custom-hue, 83), 35%, 47%);\n    --cu-custom700: hsl(var(--cu-custom-hue, 83), 44%, 54%);\n    --cu-custom600: hsl(var(--cu-custom-hue, 83), 67%, 63%);\n    --cu-custom600-16: hsl(var(--cu-custom-hue, 83), 67%, 63%, 16%);\n    --cu-custom500: hsl(var(--cu-custom-hue, 83), 67%, 70%);\n    --cu-custom500-16: hsl(var(--cu-custom-hue, 83), 67%, 70%, 16%);\n    --cu-custom400: hsl(var(--cu-custom-hue, 83), 67%, 76%);\n    --cu-custom300: hsl(var(--cu-custom-hue, 83), 67%, 82%);\n    --cu-custom200: hsl(var(--cu-custom-hue, 83), 67%, 88%);\n    --cu-custom100: hsl(var(--cu-custom-hue, 83), 67%, 94%);\n    --cu-custom50: hsl(var(--cu-custom-hue, 83), 73%, 97%);\n    --cu-background-primary: var(--cu-custom500);\n    --cu-background-primary-hover: var(--cu-custom400);\n    --cu-background-primary-pressed: var(--cu-custom500);\n    --cu-background-primary-disabled: var(--cu-custom900);\n    --cu-background-primary-subtle: var(--cu-custom1100);\n    --cu-background-primary-on-subtle: var(--cu-custom1000);\n    --cu-content-primary: var(--cu-custom400);\n    --cu-border-primary: var(--cu-custom500);\n    --cu-border-primary-focus: var(--cu-custom500);\n    --cu-effect-primary: var(--cu-custom500-16);\n    --cu-link-primary: var(--cu-custom400);\n    --cu-link-primary-hover: var(--cu-custom300)\n}\n\nbody {\n    --cu-background-main: var(--cu-white);\n    --cu-background-main-hover: var(--cu-grey50);\n    --cu-background-main-hover-strong: var(--cu-grey100);\n    --cu-background-main-pressed: var(--cu-grey200);\n    --cu-background-main-offset: var(--cu-white);\n    --cu-background-main-inverse: var(--cu-grey1000);\n    --cu-background-main-inverse-offset: var(--cu-grey1000);\n    --cu-background-subtle: var(--cu-grey50);\n    --cu-background-subtle-hover: var(--cu-grey100);\n    --cu-background-subtle-hover-strong: var(--cu-grey200);\n    --cu-background-subtle-pressed: var(--cu-grey300);\n    --cu-background-subtle-offset: var(--cu-grey50);\n    --cu-background-on-main: var(--cu-grey100);\n    --cu-background-on-main-hover: var(--cu-grey200);\n    --cu-background-on-main-pressed: var(--cu-grey300);\n    --cu-background-on-subtle: var(--cu-grey200);\n    --cu-background-on-subtle-hover: var(--cu-grey300);\n    --cu-background-on-subtle-pressed: var(--cu-grey200);\n    --cu-background-success: var(--cu-green600);\n    --cu-background-success-subtle: var(--cu-green50);\n    --cu-background-warning: var(--cu-yellow600);\n    --cu-background-warning-subtle: var(--cu-yellow50);\n    --cu-background-danger: var(--cu-red600);\n    --cu-background-danger-hover: var(--cu-red700);\n    --cu-background-danger-pressed: var(--cu-red800);\n    --cu-background-danger-disabled: var(--cu-red200);\n    --cu-background-danger-subtle: var(--cu-red50);\n    --cu-background-danger-subtle-hover: var(--cu-red100);\n    --cu-background-danger-subtle-pressed: var(--cu-red200);\n    --cu-background-tooltip: var(--cu-grey1000);\n    --cu-background-modal: var(--cu-grey1000);\n    --cu-background-on-dark-hover: var(--cu-white-10);\n    --cu-background-on-dark-pressed: var(--cu-white-20);\n    --cu-background-on-light-hover: var(--cu-grey1000-10);\n    --cu-background-on-light-pressed: var(--cu-grey1000-20);\n    --cu-background-notification: var(--cu-pink600);\n    --cu-content-default: var(--cu-grey1000);\n    --cu-content-secondary: var(--cu-grey700);\n    --cu-content-tertiary: var(--cu-grey600);\n    --cu-content-placeholder: var(--cu-grey500);\n    --cu-content-disabled: var(--cu-grey400);\n    --cu-content-success: var(--cu-green700);\n    --cu-content-warning: var(--cu-yellow700);\n    --cu-content-danger: var(--cu-red700);\n    --cu-content-danger-disabled: var(--cu-red300);\n    --cu-content-on-dark: var(--cu-white);\n    --cu-content-on-dark-disabled: var(--cu-white-50);\n    --cu-content-on-dark-secondary: var(--cu-white-80);\n    --cu-content-on-light: var(--cu-grey1000);\n    --cu-content-on-light-disabled: var(--cu-grey1000-50);\n    --cu-border-default: var(--cu-grey200);\n    --cu-border-low-contrast: rgb(var(--_cu-grey100));\n    --cu-border-high-contrast: rgb(var(--_cu-grey300));\n    --cu-border-hover: var(--cu-grey400);\n    --cu-border-input: var(--cu-grey500);\n    --cu-border-input-hover: var(--cu-grey600);\n    --cu-border-success: var(--cu-green600);\n    --cu-border-danger: var(--cu-red600);\n    --cu-border-danger-focus: var(--cu-red600);\n    --cu-border-warning: var(--cu-yellow600);\n    --cu-border-on-dark: var(--cu-white-50);\n    --cu-border-on-dark-focus: var(--cu-white);\n    --cu-border-on-light: var(--cu-grey1000-50);\n    --cu-border-on-light-focus: var(--cu-grey1000);\n    --cu-effect-danger: var(--cu-red600-16);\n    --cu-effect-on-dark: var(--cu-white-16);\n    --cu-effect-on-light: var(--cu-grey1000-16);\n    --cu-link-hyperlink: var(--cu-neonBlue600);\n    --cu-link-hyperlink-hover: var(--cu-neonBlue700);\n    --cu-fab-icon-pink: var(--cu-pink600);\n    --cu-fab-icon-yellow: var(--cu-yellow600);\n    --cu-fab-icon-mint: var(--cu-mint600);\n    --cu-fab-icon-azure-blue: var(--cu-azureBlue600);\n    --cu-alert-banner-background: var(--cu-grey1000);\n    --cu-alert-banner-background-subtle: var(--cu-grey100);\n    --cu-alert-banner-content: var(--cu-white);\n    --cu-alert-banner-content-dark: var(--cu-grey1000);\n    --cu-avatar-user-bg-purple: var(--cu-purple500);\n    --cu-avatar-user-bg-neon-blue: var(--cu-neonBlue500);\n    --cu-avatar-user-bg-azure-blue: var(--cu-azureBlue500);\n    --cu-avatar-user-bg-teal: var(--cu-teal500);\n    --cu-avatar-user-bg-mint: var(--cu-mint500);\n    --cu-avatar-user-bg-yellow: var(--cu-yellow500);\n    --cu-avatar-user-bg-orange: var(--cu-orange500);\n    --cu-avatar-user-bg-red: var(--cu-red500);\n    --cu-avatar-user-bg-pink: var(--cu-pink500);\n    --cu-avatar-user-bg-violet: var(--cu-violet500);\n    --cu-avatar-user-bg-brown: var(--cu-brown500);\n    --cu-avatar-user-bg-black: var(--cu-black500);\n    --cu-avatar-user-online: var(--cu-green500);\n    --cu-avatar-user-guest: var(--cu-grey400);\n    --cu-avatar-user-remove: var(--cu-grey1000);\n    --cu-automations-usage-bg-neon-blue: var(--cu-neonBlue50);\n    --cu-automations-usage-content-neon-blue: var(--cu-neonBlue700);\n    --cu-automations-usage-bg-teal: var(--cu-teal50);\n    --cu-automations-usage-content-teal: var(--cu-teal700);\n    --cu-avatar-space-bg-purple: var(--cu-purple200);\n    --cu-avatar-space-bg-neon-blue: var(--cu-neonBlue200);\n    --cu-avatar-space-bg-azure-blue: var(--cu-azureBlue200);\n    --cu-avatar-space-bg-teal: var(--cu-teal200);\n    --cu-avatar-space-bg-mint: var(--cu-mint200);\n    --cu-avatar-space-bg-yellow: var(--cu-yellow200);\n    --cu-avatar-space-bg-orange: var(--cu-orange200);\n    --cu-avatar-space-bg-red: var(--cu-red200);\n    --cu-avatar-space-bg-pink: var(--cu-pink200);\n    --cu-avatar-space-bg-violet: var(--cu-violet200);\n    --cu-avatar-space-bg-brown: var(--cu-brown200);\n    --cu-avatar-space-bg-black: var(--cu-black200);\n    --cu-avatar-space-content-purple: var(--cu-purple1000);\n    --cu-avatar-space-content-neon-blue: var(--cu-neonBlue1000);\n    --cu-avatar-space-content-azure-blue: var(--cu-azureBlue1000);\n    --cu-avatar-space-content-teal: var(--cu-teal1000);\n    --cu-avatar-space-content-mint: var(--cu-mint1000);\n    --cu-avatar-space-content-yellow: var(--cu-yellow1000);\n    --cu-avatar-space-content-orange: var(--cu-orange1000);\n    --cu-avatar-space-content-red: var(--cu-red1000);\n    --cu-avatar-space-content-pink: var(--cu-pink1000);\n    --cu-avatar-space-content-violet: var(--cu-violet1000);\n    --cu-avatar-space-content-brown: var(--cu-brown1000);\n    --cu-avatar-space-content-black: var(--cu-black1000);\n    --cu-quill-banner-red: var(--cu-red50);\n    --cu-quill-banner-orange: var(--cu-orange50);\n    --cu-quill-banner-yellow: var(--cu-yellow50);\n    --cu-quill-banner-azure-blue: var(--cu-azureBlue50);\n    --cu-quill-banner-purple: var(--cu-purple50);\n    --cu-quill-banner-pink: var(--cu-pink50);\n    --cu-quill-banner-green: var(--cu-green50);\n    --cu-quill-banner-black: var(--cu-black50);\n    --cu-quill-banner-border-red: var(--cu-red600);\n    --cu-quill-banner-border-orange: var(--cu-orange600);\n    --cu-quill-banner-border-yellow: var(--cu-yellow600);\n    --cu-quill-banner-border-azure-blue: var(--cu-azureBlue600);\n    --cu-quill-banner-border-purple: var(--cu-purple600);\n    --cu-quill-banner-border-pink: var(--cu-pink600);\n    --cu-quill-banner-border-green: var(--cu-green600);\n    --cu-quill-banner-border-black: var(--cu-black600);\n    --cu-background-overlay: rgba(var(--_cu-grey1000), .56);\n    --cu-background-overlay-light: rgba(var(--_cu-grey1000), .32);\n    --cu-elevation-1: 0 calc(1 / var(--rem-divisor) * var(--rem-return-unit)) calc(4 / var(--rem-divisor) * var(--rem-return-unit)) rgba(0, 0, 0, .08);\n    --cu-elevation-2: 0 calc(2 / var(--rem-divisor) * var(--rem-return-unit)) calc(8 / var(--rem-divisor) * var(--rem-return-unit)) rgba(0, 0, 0, .08);\n    --cu-elevation-3: 0 calc(4 / var(--rem-divisor) * var(--rem-return-unit)) calc(16 / var(--rem-divisor) * var(--rem-return-unit)) rgba(0, 0, 0, .08);\n    --cu-elevation-4: 0 calc(6 / var(--rem-divisor) * var(--rem-return-unit)) calc(24 / var(--rem-divisor) * var(--rem-return-unit)) rgba(0, 0, 0, .08)\n}\n\nbody.cu-purple {\n    --cu-background-primary: var(--cu-purple600);\n    --cu-background-primary-hover: var(--cu-purple700);\n    --cu-background-primary-pressed: var(--cu-purple800);\n    --cu-background-primary-disabled: var(--cu-purple200);\n    --cu-background-primary-subtle: var(--cu-purple50);\n    --cu-background-primary-on-subtle: var(--cu-purple100);\n    --cu-content-primary: var(--cu-purple700);\n    --cu-border-primary: var(--cu-purple600);\n    --cu-border-primary-focus: var(--cu-purple600);\n    --cu-effect-primary: var(--cu-purple600-16);\n    --cu-link-primary: var(--cu-purple600);\n    --cu-link-primary-hover: var(--cu-purple700)\n}\n\nbody.cu-neonBlue {\n    --cu-background-primary: var(--cu-neonBlue600);\n    --cu-background-primary-hover: var(--cu-neonBlue700);\n    --cu-background-primary-pressed: var(--cu-neonBlue800);\n    --cu-background-primary-disabled: var(--cu-neonBlue200);\n    --cu-background-primary-subtle: var(--cu-neonBlue50);\n    --cu-background-primary-on-subtle: var(--cu-neonBlue100);\n    --cu-content-primary: var(--cu-neonBlue700);\n    --cu-border-primary: var(--cu-neonBlue600);\n    --cu-border-primary-focus: var(--cu-neonBlue600);\n    --cu-effect-primary: var(--cu-neonBlue600-16);\n    --cu-link-primary: var(--cu-neonBlue600);\n    --cu-link-primary-hover: var(--cu-neonBlue700)\n}\n\nbody.cu-azureBlue {\n    --cu-background-primary: var(--cu-azureBlue600);\n    --cu-background-primary-hover: var(--cu-azureBlue700);\n    --cu-background-primary-pressed: var(--cu-azureBlue800);\n    --cu-background-primary-disabled: var(--cu-azureBlue200);\n    --cu-background-primary-subtle: var(--cu-azureBlue50);\n    --cu-background-primary-on-subtle: var(--cu-azureBlue100);\n    --cu-content-primary: var(--cu-azureBlue700);\n    --cu-border-primary: var(--cu-azureBlue600);\n    --cu-border-primary-focus: var(--cu-azureBlue600);\n    --cu-effect-primary: var(--cu-azureBlue600-16);\n    --cu-link-primary: var(--cu-azureBlue600);\n    --cu-link-primary-hover: var(--cu-azureBlue700)\n}\n\nbody.cu-teal {\n    --cu-background-primary: var(--cu-teal600);\n    --cu-background-primary-hover: var(--cu-teal700);\n    --cu-background-primary-pressed: var(--cu-teal800);\n    --cu-background-primary-disabled: var(--cu-teal200);\n    --cu-background-primary-subtle: var(--cu-teal50);\n    --cu-background-primary-on-subtle: var(--cu-teal100);\n    --cu-content-primary: var(--cu-teal700);\n    --cu-border-primary: var(--cu-teal600);\n    --cu-border-primary-focus: var(--cu-teal600);\n    --cu-effect-primary: var(--cu-teal600-16);\n    --cu-link-primary: var(--cu-teal600);\n    --cu-link-primary-hover: var(--cu-teal700)\n}\n\nbody.cu-mint {\n    --cu-background-primary: var(--cu-mint600);\n    --cu-background-primary-hover: var(--cu-mint700);\n    --cu-background-primary-pressed: var(--cu-mint800);\n    --cu-background-primary-disabled: var(--cu-mint200);\n    --cu-background-primary-subtle: var(--cu-mint50);\n    --cu-background-primary-on-subtle: var(--cu-mint100);\n    --cu-content-primary: var(--cu-mint700);\n    --cu-border-primary: var(--cu-mint600);\n    --cu-border-primary-focus: var(--cu-mint600);\n    --cu-effect-primary: var(--cu-mint600-16);\n    --cu-link-primary: var(--cu-mint600);\n    --cu-link-primary-hover: var(--cu-mint700)\n}\n\nbody.cu-orange {\n    --cu-background-primary: var(--cu-orange600);\n    --cu-background-primary-hover: var(--cu-orange700);\n    --cu-background-primary-pressed: var(--cu-orange800);\n    --cu-background-primary-disabled: var(--cu-orange200);\n    --cu-background-primary-subtle: var(--cu-orange50);\n    --cu-background-primary-on-subtle: var(--cu-orange100);\n    --cu-content-primary: var(--cu-orange700);\n    --cu-border-primary: var(--cu-orange600);\n    --cu-border-primary-focus: var(--cu-orange600);\n    --cu-effect-primary: var(--cu-orange600-16);\n    --cu-link-primary: var(--cu-orange600);\n    --cu-link-primary-hover: var(--cu-orange700)\n}\n\nbody.cu-pink {\n    --cu-background-primary: var(--cu-pink600);\n    --cu-background-primary-hover: var(--cu-pink700);\n    --cu-background-primary-pressed: var(--cu-pink800);\n    --cu-background-primary-disabled: var(--cu-pink200);\n    --cu-background-primary-subtle: var(--cu-pink50);\n    --cu-background-primary-on-subtle: var(--cu-pink100);\n    --cu-content-primary: var(--cu-pink700);\n    --cu-border-primary: var(--cu-pink600);\n    --cu-border-primary-focus: var(--cu-pink600);\n    --cu-effect-primary: var(--cu-pink600-16);\n    --cu-link-primary: var(--cu-pink600);\n    --cu-link-primary-hover: var(--cu-pink700)\n}\n\nbody.cu-violet {\n    --cu-background-primary: var(--cu-violet600);\n    --cu-background-primary-hover: var(--cu-violet700);\n    --cu-background-primary-pressed: var(--cu-violet800);\n    --cu-background-primary-disabled: var(--cu-violet200);\n    --cu-background-primary-subtle: var(--cu-violet50);\n    --cu-background-primary-on-subtle: var(--cu-violet100);\n    --cu-content-primary: var(--cu-violet700);\n    --cu-border-primary: var(--cu-violet600);\n    --cu-border-primary-focus: var(--cu-violet600);\n    --cu-effect-primary: var(--cu-violet600-16);\n    --cu-link-primary: var(--cu-violet600);\n    --cu-link-primary-hover: var(--cu-violet700)\n}\n\nbody.cu-brown {\n    --cu-background-primary: var(--cu-brown600);\n    --cu-background-primary-hover: var(--cu-brown700);\n    --cu-background-primary-pressed: var(--cu-brown800);\n    --cu-background-primary-disabled: var(--cu-brown200);\n    --cu-background-primary-subtle: var(--cu-brown50);\n    --cu-background-primary-on-subtle: var(--cu-brown100);\n    --cu-content-primary: var(--cu-brown700);\n    --cu-border-primary: var(--cu-brown600);\n    --cu-border-primary-focus: var(--cu-brown600);\n    --cu-effect-primary: var(--cu-brown600-16);\n    --cu-link-primary: var(--cu-brown600);\n    --cu-link-primary-hover: var(--cu-brown700)\n}\n\nbody.cu-black {\n    --cu-background-primary: var(--cu-black600);\n    --cu-background-primary-hover: var(--cu-black700);\n    --cu-background-primary-pressed: var(--cu-black800);\n    --cu-background-primary-disabled: var(--cu-black200);\n    --cu-background-primary-subtle: var(--cu-black50);\n    --cu-background-primary-on-subtle: var(--cu-black100);\n    --cu-content-primary: var(--cu-black700);\n    --cu-border-primary: var(--cu-black600);\n    --cu-border-primary-focus: var(--cu-black600);\n    --cu-effect-primary: var(--cu-black600-16);\n    --cu-link-primary: var(--cu-black600);\n    --cu-link-primary-hover: var(--cu-black700)\n}\n\nbody.cu-custom {\n    --cu-custom1100: hsl(var(--cu-custom-hue, 83), 24%, 25%);\n    --cu-custom1000: hsl(var(--cu-custom-hue, 83), 31%, 33%);\n    --cu-custom900: hsl(var(--cu-custom-hue, 83), 36%, 40%);\n    --cu-custom800: hsl(var(--cu-custom-hue, 83), 41%, 47%);\n    --cu-custom700: hsl(var(--cu-custom-hue, 83), 53%, 54%);\n    --cu-custom600: hsl(var(--cu-custom-hue, 83), 81%, 63%);\n    --cu-custom600-16: hsl(var(--cu-custom-hue, 83), 81%, 63%, 16%);\n    --cu-custom500: hsl(var(--cu-custom-hue, 83), 81%, 70%);\n    --cu-custom500-16: hsl(var(--cu-custom-hue, 83), 81%, 70%, 16%);\n    --cu-custom400: hsl(var(--cu-custom-hue, 83), 81%, 76%);\n    --cu-custom300: hsl(var(--cu-custom-hue, 83), 82%, 82%);\n    --cu-custom200: hsl(var(--cu-custom-hue, 83), 83%, 88%);\n    --cu-custom100: hsl(var(--cu-custom-hue, 83), 80%, 94%);\n    --cu-custom50: hsl(var(--cu-custom-hue, 83), 86%, 97%);\n    --cu-background-primary: var(--cu-custom600);\n    --cu-background-primary-hover: var(--cu-custom700);\n    --cu-background-primary-pressed: var(--cu-custom800);\n    --cu-background-primary-disabled: var(--cu-custom200);\n    --cu-background-primary-subtle: var(--cu-custom50);\n    --cu-background-primary-on-subtle: var(--cu-custom100);\n    --cu-content-primary: var(--cu-custom700);\n    --cu-border-primary: var(--cu-custom600);\n    --cu-border-primary-focus: var(--cu-custom600);\n    --cu-effect-primary: var(--cu-custom600-16);\n    --cu-link-primary: var(--cu-custom600);\n    --cu-link-primary-hover: var(--cu-custom700)\n}\n","@import './theme';\n@import './overrides';\n@import './sizes';\n@import './editor';\n@import './EditableHeading';\n@import './antd.css';\n\n@import './normalize.css';\n\n@import './overrides/prime/index.css';\n\n@import './overrides/antd.css';\n\n@import './overrides/exalidraw.css';\n@import './animations.css';\n\n\n\n\n@media screen and (min-width: 1400px) {\n  html {\n    font-size: 14px;\n\n  }\n}\n\n@media screen and (min-width: 1600px) {\n  html {\n    font-size: 14px;\n  }\n}\n\n@media screen and (min-width: 1900px) {\n  html {\n    font-size: 14px;\n  }\n}\n\n\nhtml,\nbody {\n\n  margin: 0px;\n\n  padding: 0;\n  border: 0;\n\n  color: #505A64;\n  height: 100%;\n  -webkit-user-select: none;\n  position: relative;\n  overflow: hidden;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n   -webkit-font-smoothing: subpixel-antialiased !important; \n/*  -webkit-font-smoothing: antialiased;\n*/\n  text-size-adjust: 100%;\n  text-rendering: optimizeLegibility;\n\n}\n\nbody {\n  cursor: var(--system-cursor-default), auto;\n\n  font-family: var(--font-family);\n  font-size: 1rem;\n\n  //-webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 0;\n}\n\na {\n  color: inherit;\n}\n\na,\nu {\n  text-decoration: none;\n}\n\n* {\n  /*-webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: grayscale;*/\n  box-sizing: border-box;\n}",".monday-style-menu--large {\n    width: unset;\n}\n\n.monday-style-dialog-content-wrapper {\n    z-index: 10001;\n}\n\n.p-dialog {\n    border-radius: 15px;\n   /*  border-radius: 12px; */\n    border: 1px solid rgba(255, 255, 255, 50%) !important;\n   /*  outline: rgba(120, 120, 120, 10%) solid 1px; */\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    overflow: hidden;\n    background: white;\n    max-height: 100%\n}\n\n\ndiv.p-component-overlay.p-component-overlay-enter.p-dialog-mask {\n    z-index: 100 !important;\n}\n.p-confirm-dialog .p-dialog-content  {\n    padding: 20px !important;\n}\n\n.p-dialog-right .p-dialog  {\n    outline: rgba(120, 120, 120, 10%) solid 1px;\n    border-radius: 0px !important;\n     margin-top: 100px !important;\n     padding-bottom: 45px;\n }\n\n\n.p-dialog:before {\n    content: \"\";\n    position: absolute;\n    right: 0;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    box-shadow: 0 0 130px 5px #00000054;\n}\n.p-dialog-top .p-dialog, .p-dialog-bottom .p-dialog, .p-dialog-left .p-dialog, .p-dialog-right .p-dialog, .p-dialog-top-left .p-dialog, .p-dialog-top-right .p-dialog, .p-dialog-bottom-left .p-dialog, .p-dialog-bottom-right .p-dialog {\n    margin: 0;\n}\n\n.p-dialog .p-dialog-header {\n    border-bottom: 1px solid #D6E4ED;\n    color: #212529;\n    padding: 1rem;\n    border-top-right-radius: 4px;\n    border-top-left-radius: 4px;\n    background: #F8FAFF;\n}\n.p-dialog .p-dialog-header .p-dialog-title {\n    font-size: 20px;\n    font-family: source sans pro semibold;\n    font-weight: normal;\n    line-height: 24px;\n    letter-spacing: normal;\n    color: #333D47;\n    flex-grow: 1;\n    word-break: break-word;\n}\n\n.p-dialog .p-dialog-content {\n    padding: 0px;\n}\n\n.p-dialog .p-dialog-footer {\n    border: none;\n}\n\n.p-overlaypanel:before {\n    border-width: 10px !important;\n}\n\n.p-overlaypanel:after {\n    border-width: 8px !important;\n}\n\n\n.p-overlaypanel:before {\n    border: solid transparent !important;\n    border-color: rgba(255, 255, 255, 0) !important;\n    border-bottom-color: #f2f2f2 !important;\n}\n\n.p-overlaypanel:after {\n    border: solid transparent !important;\n    border-color: rgba(255, 255, 255, 0) !important;\n    border-bottom-color: #ffffff !important;\n}\n\n.p-overlaypanel {\n    background: #ffffff !important;\n    color: rgba(0, 0, 0, 0.87) !important;\n    border: 0 none !important;\n    border-radius: 4px !important;\n    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12) !important;\n}\n\n.p-component-overlay {\n    background-color: rgba(46,67,84,.38) !important;\n}\n\n\n.p-fileupload .p-fileupload-content {\n    padding: 0px !important;\n    border: none !important;\n}\n\n\n.switch-group {\n    position: absolute;\n    width: 200%;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    transition: left 0.35s;\n    -webkit-transition: left 0.35s;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n}\n\n.switch-handle {\n    position: relative;\n    margin: 0 auto;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    height: 100%;\n    width: 0px;\n    border-width: 0 1px;\n    background-color: #fff !important;\n}\n\n.switch.btn {\n    min-width: auto !important;\n    min-height: auto !important;\n}\n\n.switch.btn.btn-light,\n.switch.btn.btn-outline-light {\n    border: solid 1px rgba(0, 0, 0, .15);\n}\n\n.switch-on {\n    line-height: 20px;\n    font-size: 13px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 50%;\n    margin: 0;\n    border: 0;\n    border-radius: 0;\n}\n\n.switch-on.btn {\n    padding-right: 1.5rem;\n}\n\n.switch-off {\n    line-height: 20px;\n    font-size: 13px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 50%;\n    right: 0;\n    margin: 0;\n    border: 0;\n    border-radius: 0;\n    box-shadow: none;\n}\n\n.switch-off.btn {\n    padding-left: 1.5rem;\n}\n\n.btn-primary {\n    color: #fff;\n    background-color: #d34416;\n    border: solid 1px #d34416;\n}\n\n.btn-primary:hover {\n    color: #fff;\n    background-color: #d34416;\n    border: solid 1px #d34416;\n}\n\n.btn-light {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa;\n}\n\n.btn {\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    vertical-align: middle;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    padding: 0.375rem 0.75rem;\n    border-radius: 0.25rem;\n    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n}\n\n\n\ntd {\n    /* text-align: center; */\n    vertical-align: middle;\n}\n\n.tabs--wrapper {\n    padding: 0px !important;\n\n}\n\na.tab-inner.tabs-list_tab-inner {\n    padding: 0px !important;\n}\n\nli.tab--wrapper.tabs-list_tab--wrapper {\n    height: calc(100% - 2px) !important;\n    border-bottom: 0px !important;\n}\n\nli.tab--wrapper.tabs-list_tab--wrapper.tab-focus-visible-inset {\n    box-shadow: none;\n}\n\n/*HStack alignment bottom leading yap*/\nul.tabs-list {\n    height: 100% !important;\n}\n\n/* kanban */\n\nth.e-header-cells.e-template.e-toggle-header div.e-header-wrap {\n    height: 100%;\n    align-items: center;\n}\n\n.p-fileupload .p-fileupload-content {\n    background: transparent;\n}\n\n.monday-style-menu-title {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-size: 11px;\n    font-weight: 600;\n    flex-grow: 1;\n    text-transform: uppercase;\n    letter-spacing: .05em;\n    color: #656f7d;\n    white-space: nowrap;\n}\n\n.monday-style-toast {\n    max-width: 500px;\n    z-index: 1000;\n}\n\n\ndiv.e-spinner-inner {\n    display: none !important;\n}\n\ndiv.e-spin-show.e-spinner-pane {\n    display: none !important;\n}\n\n\n@keyframes pop {\n    0% {\n      transform: scale(1);\n      box-shadow: var(--box-shadow);\n    }\n    100% {\n      transform: scale(var(--scale));\n      box-shadow: var(--box-shadow-picked-up);\n    }\n  }\n  \n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  ",".size-xxs {\n    font-size: 14px;\n}",":root {\n    --editor-max-width: 100%;\n    --editor-font-size: 16px;\n    --editor-line-height: 1.5;\n    --editor-paragraph-spacing: 0rem;\n    --editor-font-family: ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n}\n\n.codex-editor__loader {\n    display: none !important;\n  }\n\n/* .ce-block__content,\n.ce-toolbar__content {\n    max-width: var(--editor-max-width);\n}\n */\n .ce-block {\n    font-size: var(--editor-font-size);\n    font-family: ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n\n }\n.ce-paragraph {\n    font-size: var(--editor-font-size);\n    font-family: ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n\n}\n\n.codex-editor {\n    height: fit-content;\n    z-index: 100 !important;\n    color: #212526;\n    font-family: ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n}\n\nh1.ce-header {\n    color: #212526;\n     font-weight: 500;\n     font-size: 28px;\n     line-height:  1.25;\n    \n }\n\nh2.ce-header {\n   color: #212526;\n    font-weight: 500;\n    font-size: 22px;\n    line-height:  1.25;\n   \n}\n\n.ce-toolbar__actions {\n    right: 100% !important;\n}\n.ce-toolbar__settings-btn {\n    color: gray !important;\n}\n.ce-toolbar__plus {\n    color: gray !important;\n}\n\n@media (min-width: 651px) {\n.codex-editor--narrow .ce-toolbox .ce-popover {\n    right: auto !important;\n}\n\n}\n\n.ce-block__content, .ce-toolbar__content {\n    max-width: 100% !important;\n}\n\n .codex-editor__redactor {\n    padding-bottom: 50px !important;\n} ",".editable-heading--wrapper{\n    width: auto !important;\n}\n\n/* .editable-heading-input{\n    height: 50px !important;\n} */\n/* .heading-component{\n    line-height: 48px !important;\n} */\n\n/* h4[data-testid='heading'] {\n    background-color: yellow;\n  } */\n\n/*   div[data-testid='dialog-content-container'] {\n    padding: 0px !important;\n  } \n   */\n\n   div.bottom.react-flow__attribution.react-flow__panel.right[data-message='Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev'][style='pointer-events: all;'] {\n    display: none !important;\n    }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/animations.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/animations.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n@keyframes rubberBand {\n    0%{\n        transform: scaleX(1);\n    }\n    40%{\n        transform: scaleX(1.12) scaleY(0.75);\n    }\n    55%{\n        transform: scaleX(0.85) scaleY(1);\n    }\n    65%{\n        transform: scaleX(1.09) scaleY(0.85);\n    }\n    75%{\n        transform: scaleX(0.9)  scaleY(1);\n    }\n    90%{\n        transform: scaleX(1.05) scaleY(0.95);\n    }\n    100%{\n        transform: scaleX(1) scaleY(1);\n    }\n}", "",{"version":3,"sources":["webpack://./src/css/animations.css"],"names":[],"mappings":";AACA;IACI;QACI,oBAAoB;IACxB;IACA;QACI,oCAAoC;IACxC;IACA;QACI,iCAAiC;IACrC;IACA;QACI,oCAAoC;IACxC;IACA;QACI,iCAAiC;IACrC;IACA;QACI,oCAAoC;IACxC;IACA;QACI,8BAA8B;IAClC;AACJ","sourcesContent":["\n@keyframes rubberBand {\n    0%{\n        transform: scaleX(1);\n    }\n    40%{\n        transform: scaleX(1.12) scaleY(0.75);\n    }\n    55%{\n        transform: scaleX(0.85) scaleY(1);\n    }\n    65%{\n        transform: scaleX(1.09) scaleY(0.85);\n    }\n    75%{\n        transform: scaleX(0.9)  scaleY(1);\n    }\n    90%{\n        transform: scaleX(1.05) scaleY(0.95);\n    }\n    100%{\n        transform: scaleX(1) scaleY(1);\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/antd.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/antd.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ant-picker-dropdown {\n    z-index: 1200 !important;\n}", "",{"version":3,"sources":["webpack://./src/css/antd.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;AAC5B","sourcesContent":[".ant-picker-dropdown {\n    z-index: 1200 !important;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n   /*  line-height: 1.15; */\n    /* 1 */\n    -webkit-text-size-adjust: 100%;\n    /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n    margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n    display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n    box-sizing: content-box;\n    /* 1 */\n    height: 0;\n    /* 1 */\n    overflow: visible;\n    /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n    background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n    border-bottom: none;\n    /* 1 */\n    text-decoration: underline;\n    /* 2 */\n    text-decoration: underline dotted;\n    /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\nsup {\n    top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n    border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit;\n    /* 1 */\n    font-size: 100%;\n    /* 1 */\n    line-height: 1.15;\n    /* 1 */\n    margin: 0;\n    /* 2 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n    /* 1 */\n    overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n    /* 1 */\n    text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n    -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n    padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n    box-sizing: border-box;\n    /* 1 */\n    color: inherit;\n    /* 2 */\n    display: table;\n    /* 1 */\n    max-width: 100%;\n    /* 1 */\n    padding: 0;\n    /* 3 */\n    white-space: normal;\n    /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n    vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n    overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n    box-sizing: border-box;\n    /* 1 */\n    padding: 0;\n    /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type=\"search\"] {\n    -webkit-appearance: textfield;\n    /* 1 */\n    outline-offset: -2px;\n    /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    /* 1 */\n    font: inherit;\n    /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n    display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n    display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n    display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n    display: none;\n}\n\nul {\n\n    margin-block-start: 0px;\n    margin-block-end: 0px;\n    padding-inline-start: 0px;\n}\n\n\n\n table,\n thead,\n tbody,\n tfoot,\n tr,\n th,\n td {\n   \n    margin: 0;\n    padding: 0;\n    border: none;\n    border-collapse: inherit;\n    border-spacing: 0;\n    border-color: inherit;\n    vertical-align: inherit;\n    text-align: left;\n    font-weight: inherit;\n    font-size: inherit;\n    -webkit-border-horizontal-spacing: 0;\n    -webkit-border-vertical-spacing: 0;\n}\n\n", "",{"version":3,"sources":["webpack://./src/css/normalize.css"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n   /*  line-height: 1.15; */\n    /* 1 */\n    -webkit-text-size-adjust: 100%;\n    /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n    margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n    display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n    box-sizing: content-box;\n    /* 1 */\n    height: 0;\n    /* 1 */\n    overflow: visible;\n    /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n    background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n    border-bottom: none;\n    /* 1 */\n    text-decoration: underline;\n    /* 2 */\n    text-decoration: underline dotted;\n    /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\nsup {\n    top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n    border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit;\n    /* 1 */\n    font-size: 100%;\n    /* 1 */\n    line-height: 1.15;\n    /* 1 */\n    margin: 0;\n    /* 2 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n    /* 1 */\n    overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n    /* 1 */\n    text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n    -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n    padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n    box-sizing: border-box;\n    /* 1 */\n    color: inherit;\n    /* 2 */\n    display: table;\n    /* 1 */\n    max-width: 100%;\n    /* 1 */\n    padding: 0;\n    /* 3 */\n    white-space: normal;\n    /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n    vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n    overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n    box-sizing: border-box;\n    /* 1 */\n    padding: 0;\n    /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type=\"search\"] {\n    -webkit-appearance: textfield;\n    /* 1 */\n    outline-offset: -2px;\n    /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    /* 1 */\n    font: inherit;\n    /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n    display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n    display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n    display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n    display: none;\n}\n\nul {\n\n    margin-block-start: 0px;\n    margin-block-end: 0px;\n    padding-inline-start: 0px;\n}\n\n\n\n table,\n thead,\n tbody,\n tfoot,\n tr,\n th,\n td {\n   \n    margin: 0;\n    padding: 0;\n    border: none;\n    border-collapse: inherit;\n    border-spacing: 0;\n    border-color: inherit;\n    vertical-align: inherit;\n    text-align: left;\n    font-weight: inherit;\n    font-size: inherit;\n    -webkit-border-horizontal-spacing: 0;\n    -webkit-border-vertical-spacing: 0;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/overrides/antd.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/overrides/antd.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ant-tree-switcher {\n    display: list-item ;\n}\n\n.ant-tree-title {\n    white-space: nowrap;\n}\n\n.ant-tree-iconEle {\n    vertical-align: sub !important;\n}", "",{"version":3,"sources":["webpack://./src/css/overrides/antd.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;AAClC","sourcesContent":[".ant-tree-switcher {\n    display: list-item ;\n}\n\n.ant-tree-title {\n    white-space: nowrap;\n}\n\n.ant-tree-iconEle {\n    vertical-align: sub !important;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/overrides/exalidraw.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/overrides/exalidraw.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ndiv.App-menu__left.Island{\n    left: calc(100% - 220px);\n}\n\n.excalidraw.excalidraw-container {\n    overflow: visible;\n\n}\n\n.excalidraw .library-menu-browse-button {\n    display: none !important;\n}\n\n.excalidraw .library-menu-items-container__header--excal{\n    display: none !important;\n}\n\n\n\ndiv.dropdown-menu-group {\n    display: none !important;\n} \n\n", "",{"version":3,"sources":["webpack://./src/css/overrides/exalidraw.css"],"names":[],"mappings":";AACA;IACI,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;;AAErB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;AAC5B;;;;AAIA;IACI,wBAAwB;AAC5B","sourcesContent":["\ndiv.App-menu__left.Island{\n    left: calc(100% - 220px);\n}\n\n.excalidraw.excalidraw-container {\n    overflow: visible;\n\n}\n\n.excalidraw .library-menu-browse-button {\n    display: none !important;\n}\n\n.excalidraw .library-menu-items-container__header--excal{\n    display: none !important;\n}\n\n\n\ndiv.dropdown-menu-group {\n    display: none !important;\n} \n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/overrides/prime/DataTable/index.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/overrides/prime/DataTable/index.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".p-datatable {\n    width: 100%;\n    border: none;\n}\n\n.p-column-title {\n  width: 100%;\n}\n .p-datatable .p-datatable-thead > tr > th {\n    /* font-size: 16px;\n    font-family: source sans pro semibold;\n    text-align: left;\n    padding: 1rem 1rem; */\n  /*   border: none;\n    border-width: 0 0 1px 0; */\n    font-weight: 500;\n    color: #343a40;\n    background: #F9FAFB;\n    transition: box-shadow 0.2s;\n    padding: 0px;\n} \n\n.p-datatable .p-datatable-tbody> tr > td {\n  padding-left: 8px !important;\n  padding-right: 8px !important;\n  height: 38px;\n  padding: 0px;\n} ", "",{"version":3,"sources":["webpack://./src/css/overrides/prime/DataTable/index.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;EACE,WAAW;AACb;CACC;IACG;;;yBAGqB;EACvB;8BAC4B;IAC1B,gBAAgB;IAChB,cAAc;IACd,mBAAmB;IACnB,2BAA2B;IAC3B,YAAY;AAChB;;AAEA;EACE,4BAA4B;EAC5B,6BAA6B;EAC7B,YAAY;EACZ,YAAY;AACd","sourcesContent":[".p-datatable {\n    width: 100%;\n    border: none;\n}\n\n.p-column-title {\n  width: 100%;\n}\n .p-datatable .p-datatable-thead > tr > th {\n    /* font-size: 16px;\n    font-family: source sans pro semibold;\n    text-align: left;\n    padding: 1rem 1rem; */\n  /*   border: none;\n    border-width: 0 0 1px 0; */\n    font-weight: 500;\n    color: #343a40;\n    background: #F9FAFB;\n    transition: box-shadow 0.2s;\n    padding: 0px;\n} \n\n.p-datatable .p-datatable-tbody> tr > td {\n  padding-left: 8px !important;\n  padding-right: 8px !important;\n  height: 38px;\n  padding: 0px;\n} "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/overrides/prime/component.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/overrides/prime/component.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.p-component  {\n    font-family: Figtree,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif\n}\n\n.p-component {\n     font-size: 1rem;\n}\n\n\n\n.p-dialog-content {\n    overflow: hidden;\n}", "",{"version":3,"sources":["webpack://./src/css/overrides/prime/component.css"],"names":[],"mappings":";AACA;IACI;AACJ;;AAEA;KACK,eAAe;AACpB;;;;AAIA;IACI,gBAAgB;AACpB","sourcesContent":["\n.p-component  {\n    font-family: Figtree,Roboto,Rubik,Noto Kufi Arabic,Noto Sans JP,sans-serif\n}\n\n.p-component {\n     font-size: 1rem;\n}\n\n\n\n.p-dialog-content {\n    overflow: hidden;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/overrides/prime/dropdown/index.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/overrides/prime/dropdown/index.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* .p-dropdown-label.p-inputtext {\n    padding: 0px;\n}\n\n.p-dropdown-label-empty {\n    visibility: visible !important;\n}\n\n.p-dropdown:not(.p-disabled).p-focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: none !important;\n    border-color: none !important;\n  } */", "",{"version":3,"sources":["webpack://./src/css/overrides/prime/dropdown/index.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;KAaK","sourcesContent":["/* .p-dropdown-label.p-inputtext {\n    padding: 0px;\n}\n\n.p-dropdown-label-empty {\n    visibility: visible !important;\n}\n\n.p-dropdown:not(.p-disabled).p-focus {\n    outline: 0 none;\n    outline-offset: 0;\n    box-shadow: none !important;\n    border-color: none !important;\n  } */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/overrides/prime/index.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/overrides/prime/index.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!./component.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/overrides/prime/component.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_DataTable_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!./DataTable/index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/overrides/prime/DataTable/index.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dropdown_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!./dropdown/index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/overrides/prime/dropdown/index.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_selectbutton_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!./selectbutton.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/overrides/prime/selectbutton.css");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_DataTable_index_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_dropdown_index_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_selectbutton_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/overrides/prime/selectbutton.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/overrides/prime/selectbutton.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n.p-selectbutton .p-button {\n    background: rgb(255, 255, 255);\n    border: 1px solid rgb(206, 212, 218);\n    color: rgb(73, 80, 87);\n    transition: background-color 0.2s ease 0s, color 0.2s ease 0s, border-color 0.2s ease 0s, box-shadow 0.2s ease 0s;\n}\n\n.p-selectbutton .p-button.p-highlight {\n    background: rgb(59, 130, 246);\n    border-color: rgb(59, 130, 246);\n    color: rgb(255, 255, 255);\n}\n\n.p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover {\n    background: rgb(233, 236, 239);\n    border-color: rgb(206, 212, 218);\n    color: rgb(73, 80, 87);\n}\n\n.p-button:enabled:hover, .p-button:not(button):not(a):not(.p-disabled):hover {\n    background: rgb(59, 130, 246);\n    color: rgb(255, 255, 255);\n    border-color: rgb(59, 130, 246);\n}\n\n.p-selectbutton .p-button.p-highlight:hover {\n    background: rgb(59, 130, 246);\n    border-color: rgb(59, 130, 246);\n    color: rgb(255, 255, 255);\n}", "",{"version":3,"sources":["webpack://./src/css/overrides/prime/selectbutton.css"],"names":[],"mappings":";;AAEA;IACI,8BAA8B;IAC9B,oCAAoC;IACpC,sBAAsB;IACtB,iHAAiH;AACrH;;AAEA;IACI,6BAA6B;IAC7B,+BAA+B;IAC/B,yBAAyB;AAC7B;;AAEA;IACI,8BAA8B;IAC9B,gCAAgC;IAChC,sBAAsB;AAC1B;;AAEA;IACI,6BAA6B;IAC7B,yBAAyB;IACzB,+BAA+B;AACnC;;AAEA;IACI,6BAA6B;IAC7B,+BAA+B;IAC/B,yBAAyB;AAC7B","sourcesContent":["\n\n.p-selectbutton .p-button {\n    background: rgb(255, 255, 255);\n    border: 1px solid rgb(206, 212, 218);\n    color: rgb(73, 80, 87);\n    transition: background-color 0.2s ease 0s, color 0.2s ease 0s, border-color 0.2s ease 0s, box-shadow 0.2s ease 0s;\n}\n\n.p-selectbutton .p-button.p-highlight {\n    background: rgb(59, 130, 246);\n    border-color: rgb(59, 130, 246);\n    color: rgb(255, 255, 255);\n}\n\n.p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover {\n    background: rgb(233, 236, 239);\n    border-color: rgb(206, 212, 218);\n    color: rgb(73, 80, 87);\n}\n\n.p-button:enabled:hover, .p-button:not(button):not(a):not(.p-disabled):hover {\n    background: rgb(59, 130, 246);\n    color: rgb(255, 255, 255);\n    border-color: rgb(59, 130, 246);\n}\n\n.p-selectbutton .p-button.p-highlight:hover {\n    background: rgb(59, 130, 246);\n    border-color: rgb(59, 130, 246);\n    color: rgb(255, 255, 255);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/react-promise-suspense/build/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-promise-suspense/build/index.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var deepEqual = __webpack_require__(/*! fast-deep-equal */ "./node_modules/react-promise-suspense/node_modules/fast-deep-equal/index.js");
var promiseCaches = [];
var usePromise = function (promise, inputs, lifespan) {
    var e_1, _a;
    if (lifespan === void 0) { lifespan = 0; }
    try {
        for (var promiseCaches_1 = __values(promiseCaches), promiseCaches_1_1 = promiseCaches_1.next(); !promiseCaches_1_1.done; promiseCaches_1_1 = promiseCaches_1.next()) {
            var promiseCache_1 = promiseCaches_1_1.value;
            if (deepEqual(inputs, promiseCache_1.inputs)) {
                if (Object.prototype.hasOwnProperty.call(promiseCache_1, "error")) {
                    throw promiseCache_1.error;
                }
                else if (Object.prototype.hasOwnProperty.call(promiseCache_1, "response")) {
                    return promiseCache_1.response;
                }
                throw promiseCache_1.promise;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (promiseCaches_1_1 && !promiseCaches_1_1.done && (_a = promiseCaches_1.return)) _a.call(promiseCaches_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var promiseCache = {
        promise: promise.apply(void 0, __spreadArray([], __read(inputs), false)).then(function (response) {
            promiseCache.response = response;
        })
            .catch(function (e) {
            promiseCache.error = e;
        })
            .then(function () {
            if (lifespan > 0) {
                setTimeout(function () {
                    var index = promiseCaches.indexOf(promiseCache);
                    if (index !== -1) {
                        promiseCaches.splice(index, 1);
                    }
                }, lifespan);
            }
        }),
        inputs: inputs,
    };
    promiseCaches.push(promiseCache);
    throw promiseCache.promise;
};
module.exports = usePromise;


/***/ }),

/***/ "./node_modules/react-promise-suspense/node_modules/fast-deep-equal/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-promise-suspense/node_modules/fast-deep-equal/index.js ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return a!==a && b!==b;
};


/***/ }),

/***/ "./src/css/global.scss":
/*!*****************************!*\
  !*** ./src/css/global.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./global.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/global.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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

/***/ "./src/LayoutController.tsx":
/*!**********************************!*\
  !*** ./src/LayoutController.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutController": () => (/* binding */ LayoutController)
/* harmony export */ });
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_LeftSideMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/LeftSideMenu */ "./src/views/LeftSideMenu.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
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
    LayoutController.prototype.BindRouterParams = function () {
    };
    LayoutController.prototype.LoadView = function () {
        var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
        var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useGetMe)('console'), me = _a.me, isLoading = _a.isLoading, isError = _a.isError;
        var deleteSessions = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useDeleteSessions)('console').deleteSessions;
        var _b = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useParams)(), team_id = _b.team_id, project_id = _b.project_id;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIScene)(
        /*  VStack(
             Text(isError?.toString()),
             isLoading ? Fragment() :
                 isError ? UINavigate('/login') :
                     VStack(
                         Button(
                             Text('Logout')
                         ).onClick(() => {
                             deleteSessions();
                             navigate('/login');
                         }),

                         UIRouteOutlet().width('100%').height('100%')
                     )
         ) */
        //isLoading ? Fragment() :
        isError ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UINavigate)('/login') :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('dfsdfsdf'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icon)(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icons.Add).fontSize(20))
                .width(50).height(50)
                .cornerRadius('50%')
                .onClick(function () {
            })).width().height().position('absolute').right('10px').bottom('10px')
                //.tooltip('Create support ticker')
                .zIndex(100000), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ReactView)(react__WEBPACK_IMPORTED_MODULE_3___default().createElement("svg", { width: "130", viewBox: "1.7000000476837158 -35.900001525878906 248.24000549316406 36.400001525878906", height: "35", "data-palette-color": "#233565" },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M19.7 0.5L19.7 0.5Q16.25 0.5 13.03-0.3 9.8-1.1 7.25-3.1 4.7-5.1 3.2-8.65 1.7-12.2 1.7-17.7L1.7-17.7Q1.7-22.65 3.15-26.13 4.6-29.6 7.1-31.75 9.6-33.9 12.85-34.9 16.1-35.9 19.7-35.9L19.7-35.9Q22.25-35.9 24.68-35.5 27.1-35.1 28.2-34.6L28.2-34.6 34.25-29.55 29.25-21.3 19.7-25.7Q18-25.7 16.53-24.78 15.05-23.85 14.13-22.08 13.2-20.3 13.2-17.7L13.2-17.7Q13.2-14.4 14.23-12.63 15.25-10.85 17.18-10.2 19.1-9.55 21.75-9.55L21.75-9.55Q24.3-9.55 26.58-10.08 28.85-10.6 30.6-11.3 32.35-12 33.25-12.5L33.25-12.5 33.25-2.5Q32.25-2 30.43-1.28 28.6-0.55 25.93-0.03 23.25 0.5 19.7 0.5ZM67.7 0L39.75 0 38.75-3 39.75-8 39.75-35.4 65.5-35.4 68-33.9 64.7-25.4 60.2-25.9 50.85-25.9 50.85-21.9 63.2-21.9 63.2-13.65 56.3-13.65 50.85-14.15 50.85-9.5 64.7-9.5 70.65-3.2 67.7 0ZM100.6 0L74.65 0 73.65-3 74.65-8 74.65-35.4 85.65-35.4 85.65-16.35 85.15-9.5 86.15-9.5 95.1-10 98.65-10.5 103.05-3.2 100.6 0ZM118.74 0L107.04 0 107.04-27.35 106.04-32.35 107.09-35.35 118.74-35.35 128.54-17.85 129.54-17.85 137.64-35.35 149.59-35.35 150.09-32.35 149.59-27.55 149.59 0 138.54 0 138.69-4.25 138.69-18.2 138.14-18.2 136.24-12.95 132.64-5 124.64-5 118.74-18.2 118.24-18.2 118.24-14.15 118.74 0ZM167.64 0L156.59 0 156.59-27.4 156.09-32.4 156.59-35.4 167.64-35.4 167.64 0ZM186.24 0L174.64 0 174.64-27.35 173.64-32.35 174.64-35.35 184.69-35.35 194.79-22.75 197.19-18.6 197.69-18.6 197.69-35.35 209.24-35.35 209.24-32.35 208.74-27.35 208.74 0 198.79 0 186.24-17.1 185.74-17.1 185.74-14.1 186.24 0ZM231.94 0.5L231.94 0.5Q228.74 0.5 225.56-0.28 222.39-1.05 219.76-3.05 217.14-5.05 215.54-8.6 213.94-12.15 213.94-17.7L213.94-17.7Q213.94-23.25 215.54-26.8 217.14-30.35 219.76-32.35 222.39-34.35 225.56-35.13 228.74-35.9 231.94-35.9L231.94-35.9Q235.14-35.9 238.31-35.1 241.49-34.3 244.11-32.3 246.74-30.3 248.34-26.75 249.94-23.2 249.94-17.7L249.94-17.7Q249.94-12.2 248.34-8.65 246.74-5.1 244.11-3.1 241.49-1.1 238.31-0.3 235.14 0.5 231.94 0.5ZM231.94-9.5L231.94-9.5Q235.19-9.5 236.84-11.48 238.49-13.45 238.49-17.7L238.49-17.7Q238.49-21.9 236.84-23.9 235.19-25.9 231.94-25.9L231.94-25.9Q225.44-25.9 225.44-17.7L225.44-17.7Q225.44-13.5 227.06-11.5 228.69-9.5 231.94-9.5Z", opacity: "1", transform: "matrix(1,0,0,1,0,0)", fill: "white", "data-fill-palette-color": "primary" }),
                " ")).frame(true).paddingLeft('15px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VDivider)().width(1).height(30).background('#e6e6e6').marginLeft(15)).height().width(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
                var teams = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useListTeams)('console').teams;
                // const { setTeam } = Hooks.Teams.useSetTeam();
                var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage)('teamId', null), team = _a[0], setTeam = _a[1];
                // alert(team)
                //   const {team, isLoading} = useGetCurrentTeam();
                var _b = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useState)(null), org = _b[0], setOrg = _b[1];
                return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIWidget)('com.tuvalsoft.widget.topdropdown')
                    .config({
                    title: 'Organization',
                    selectedValue: team,
                    width: '350px',
                    onClick: function (selectedItem) {
                        setOrg(selectedItem.value);
                        setTeam(selectedItem.value);
                        navigate("/app/com.celmino.app.test/organization/".concat(selectedItem.value));
                        console.log(selectedItem.value);
                    }
                })
                    .data({
                    dataSource: function () {
                        return (teams === null || teams === void 0 ? void 0 : teams.map(function (team) {
                            return {
                                text: team.name,
                                value: team.$id
                            };
                        }));
                    }
                }));
            }))
                .width(250), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VDivider)().width(1).height(30).background('#e6e6e6').marginLeft(15), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
                var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage)('teamId', null), team = _a[0], setTeam = _a[1];
                var project = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useGetProject)(project_id, (team_id == null && project_id != null)).project;
                var projects = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useListProjects)((team != null || (project === null || project === void 0 ? void 0 : project.teamId) != null), [
                    _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Query.equal('teamId', team !== null && team !== void 0 ? team : project === null || project === void 0 ? void 0 : project.teamId)
                ]).projects;
                var _b = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage)('projectId', null), currentProject = _b[0], setCurrentProject = _b[1];
                return (
                //  (team_id || project?.teamId) ?
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIWidget)('com.tuvalsoft.widget.topdropdown')
                    .config({
                    title: 'Workspace',
                    selectedValue: currentProject,
                    width: '350px',
                    onClick: function (selectedItem) {
                        //alert(JSON.stringify(selectedItem));
                        setCurrentProject(selectedItem.value);
                        navigate("/app/com.celmino.app.test/workspace/".concat(selectedItem.value));
                        /* setTeam({
                           teamId: selectedItem.value
                       }); */
                        /*  if (selectedItem.value !== useSessionService().TenantId) {
                             window.location.href = `/?tenant_id=${selectedItem.value}`
                         } */
                        //alert(selectedItem)
                        //navigate(`/newconsole/organization/${organization_id}/app/${selectedItem.value}/page/${page_id}`);
                    }
                })
                    .data({
                    dataSource: function () {
                        return (projects === null || projects === void 0 ? void 0 : projects.map(function (workspace) {
                            return {
                                text: workspace.name,
                                value: workspace.$id
                            };
                        }));
                    }
                })
                //  : Fragment()
                );
            }))
                .width(250), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Spacer)())
                .fontSize('1.2rem')
                .height(50).minHeight('50px')
                .foregroundColor('white'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTop })((0,_views_LeftSideMenu__WEBPACK_IMPORTED_MODULE_2__.LeftSidemenu)(false), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })(
            //DialogContainer(),
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)(
            // UIRouteOutlet().width('100%').height('100%')
            //Desktop('')
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIRouteOutlet)().width('100%').height('100%')
            // UIRouteOutlet().width('100%').height('100%')
            )
                .overflow('hidden')
                .cornerRadius(20))
                .cornerRadius(20)
                .background('#F6F7FB')
                .overflow('hidden')
                .width('100%'))
                .height('calc(100% - 50px)'))
                .background('var(--main-theme-color)')));
    };
    return LayoutController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIController));



/***/ }),

/***/ "./src/NewBiosController.tsx":
/*!***********************************!*\
  !*** ./src/NewBiosController.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BiosMainController": () => (/* binding */ BiosMainController),
/* harmony export */   "MainController": () => (/* binding */ MainController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Routes */ "./src/Routes.ts");
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


var queryClient = new _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5000 * 60 * 1000,
            retry: false
        }
    },
});
var BiosMainController = /** @class */ (function (_super) {
    __extends(BiosMainController, _super);
    function BiosMainController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BiosMainController.prototype.LoadView = function () {
        return ((0,_Routes__WEBPACK_IMPORTED_MODULE_1__.Routes)());
    };
    return BiosMainController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));

var MainController = /** @class */ (function (_super) {
    __extends(MainController, _super);
    function MainController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainController.prototype.LoadBiosView = function () {
        return ((0,_Routes__WEBPACK_IMPORTED_MODULE_1__.Routes)());
    };
    return MainController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.BiosController));



/***/ }),

/***/ "./src/Routes.ts":
/*!***********************!*\
  !*** ./src/Routes.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Routes": () => (/* binding */ Routes)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LayoutController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutController */ "./src/LayoutController.tsx");
/* harmony import */ var _controllers_HomeController_HomeController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/HomeController/HomeController */ "./src/controllers/HomeController/HomeController.tsx");
/* harmony import */ var _controllers_LoginController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/LoginController */ "./src/controllers/LoginController.ts");
/* harmony import */ var _controllers_AppletController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/AppletController */ "./src/controllers/AppletController.tsx");





var Routes = function () {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoutes)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('/', _LayoutController__WEBPACK_IMPORTED_MODULE_1__.LayoutController).children((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('*', _controllers_HomeController_HomeController__WEBPACK_IMPORTED_MODULE_2__.HomeController), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('applet/:applet_id/*', _controllers_AppletController__WEBPACK_IMPORTED_MODULE_4__.AppletController)), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('/login', _controllers_LoginController__WEBPACK_IMPORTED_MODULE_3__.LoginController), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('/logout', _controllers_LoginController__WEBPACK_IMPORTED_MODULE_3__.LoginController)));
};


/***/ }),

/***/ "./src/controllers/AppletController.tsx":
/*!**********************************************!*\
  !*** ./src/controllers/AppletController.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppletController": () => (/* binding */ AppletController),
/* harmony export */   "OPA": () => (/* binding */ OPA),
/* harmony export */   "OpaLoader": () => (/* binding */ OpaLoader),
/* harmony export */   "Paths": () => (/* binding */ Paths),
/* harmony export */   "getAppName": () => (/* binding */ getAppName)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_promise_suspense__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-promise-suspense */ "./node_modules/react-promise-suspense/build/index.js");
/* harmony import */ var react_promise_suspense__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_promise_suspense__WEBPACK_IMPORTED_MODULE_3__);
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




var OPA = /** @class */ (function (_super) {
    __extends(OPA, _super);
    function OPA(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Object.defineProperty(OPA.prototype, "Name", {
        get: function () {
            return this.props.name;
        },
        enumerable: false,
        configurable: true
    });
    OPA.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(this.props.controller, { content: this.props.content, onSave: this.props.onSave }));
    };
    return OPA;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component)));

function getAppName() {
    try {
        var regex = /\/app\/com\.([A-Za-z]+)\.([A-Za-z]+)\.([A-Za-z]+)/i;
        // Alternative syntax using RegExp constructor
        // const regex = new RegExp('(?:^\\/app\\/+|\\G(?!^)\\.)\\K\\w+', 'g')
        var str = window.location.href;
        var m = void 0;
        console.log(m = regex.exec(str));
        return m[3];
    }
    catch (_a) {
        return '';
    }
}
var AppCache = {};
var Paths = {};
var OpaLoader = function (_a) {
    var opa_name = _a.opa_name;
    //const { opa_name } = useParams();
    //let opa_name = 'com.tuvalsoft.opa.task';
    var location = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
    /* if (`/app/${app_name}` === location.pathname && Paths[app_name] != null && Paths[app_name] !== `/app/${app_name}`) {
        console.log(`/app/${app_name}` === location.pathname)
        return (<Navigate to={Paths[app_name]}></Navigate>)
    } else {
        Paths[app_name] = location.pathname;
    } */
    var controllerPromise = new Promise(function (resolve, reject) {
        if (AppCache[opa_name]) {
            resolve(AppCache[opa_name]);
        }
        else {
            var app_path = "/realmocean/store/app/open-testing/".concat(opa_name);
            // alert(app_path)
            var app_path_local = "/static/applications/".concat(opa_name);
            _tuval_core__WEBPACK_IMPORTED_MODULE_0__.ModuleLoader.LoadBundledModuleWithDecode(app_path_local, opa_name).then(function (_app) {
                if (_app != null) {
                    var app = new _app();
                    AppCache[opa_name] = app.GetMainController();
                    resolve(app.GetMainController());
                }
                else {
                }
            });
        }
        /*   setTimeout(() => {
              const app = AppStore.find(app => app.name === app_name)
              resolve(app.controller)
          }, 2000
          ) */
    });
    var fetchController = function (input) { return controllerPromise.then(function (res) { return res; }); };
    var contoller = react_promise_suspense__WEBPACK_IMPORTED_MODULE_3___default()(fetchController, [opa_name]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(OPA, { name: opa_name, controller: contoller }));
};
var AppletController = /** @class */ (function (_super) {
    __extends(AppletController, _super);
    function AppletController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppletController.prototype.LoadView = function () {
        var applet_id = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useParams)().applet_id;
        var _a = {}, applet = _a.applet, isLoading = _a.isLoading; //useGetApplet(applet_id);
        return (isLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Applet Loading...') :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })(
            // LeftSideMenuView(''),
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)(
            //  NotesLeftMenu(note_id),
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ReactView)(react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Suspense), { fallback: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Spinner)()).render()) },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ErrorBoundary, null,
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(OpaLoader, { opa_name: applet_id })))).frame(true).width('100%').height('100%'))).overflow('hidden')).background('white'))).background('#FAFBFC')));
    };
    return AppletController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIFormController));

/**
 * NEW: The error boundary has a function component wrapper.
 */
function ErrorBoundary(_a) {
    var children = _a.children;
    var _b = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useState)(false), hasError = _b[0], setHasError = _b[1];
    var location = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
    (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (hasError) {
            setHasError(false);
        }
    }, [location.key]);
    return (
    /**
     * NEW: The class component error boundary is now
     *      a child of the functional component.
     */
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ErrorBoundaryInner, { hasError: hasError, setHasError: setHasError }, children));
}
/**
 * NEW: The class component accepts getters and setters for
 *      the parent functional component's error state.
 */
var ErrorBoundaryInner = /** @class */ (function (_super) {
    __extends(ErrorBoundaryInner, _super);
    function ErrorBoundaryInner(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { hasError: false };
        _this.ref = react__WEBPACK_IMPORTED_MODULE_2___default().createRef();
        return _this;
    }
    ErrorBoundaryInner.getDerivedStateFromError = function (_error) {
        return { hasError: true };
    };
    ErrorBoundaryInner.prototype.componentDidUpdate = function (prevProps, _previousState) {
        if (!this.props.hasError && prevProps.hasError) {
            this.setState({ hasError: false });
        }
    };
    ErrorBoundaryInner.prototype.componentDidCatch = function (_error, _errorInfo) {
        if (_errorInfo && _errorInfo.componentStack) {
            // The component stack is sometimes useful in development mode
            // In production it can be somewhat obfuscated, so feel free to omit this line.
            //console.log(_errorInfo.componentStack);
        }
        _error['Hey'] = 'sdfsdf';
        _error['Mert'] = 'sdfsdf';
        //Tracker.track(_error);
        this.props.setHasError(true);
        this.setState({ errorText: JSON.stringify(_error) });
    };
    ErrorBoundaryInner.prototype.render = function () {
        return this.state.hasError
            ? react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, this.state.errorText)
            : this.props.children;
    };
    return ErrorBoundaryInner;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component)));


/***/ }),

/***/ "./src/controllers/HomeController/HomeController.tsx":
/*!***********************************************************!*\
  !*** ./src/controllers/HomeController/HomeController.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeController": () => (/* binding */ HomeController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_LeftSideMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/LeftSideMenu */ "./src/controllers/HomeController/views/LeftSideMenu.tsx");
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


var HomeController = /** @class */ (function (_super) {
    __extends(HomeController, _super);
    function HomeController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_views_LeftSideMenu__WEBPACK_IMPORTED_MODULE_1__.LeftSideMenuView)('Home'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRouteOutlet)().width("100%").height("100%")));
    };
    return HomeController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/controllers/HomeController/views/DatabaseNameView.tsx":
/*!*******************************************************************!*\
  !*** ./src/controllers/HomeController/views/DatabaseNameView.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseNameView": () => (/* binding */ DatabaseNameView)
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
                    navigate("/app/com.celmino.app.test/workspace/".concat(workspaceId, "/database/").concat(database.$id));
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

/***/ "./src/controllers/HomeController/views/LeftSideMenu.tsx":
/*!***************************************************************!*\
  !*** ./src/controllers/HomeController/views/LeftSideMenu.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollapseLeftIcon": () => (/* binding */ CollapseLeftIcon),
/* harmony export */   "CollapseRightIcon": () => (/* binding */ CollapseRightIcon),
/* harmony export */   "DocIcon": () => (/* binding */ DocIcon),
/* harmony export */   "LeftSideMenuView": () => (/* binding */ LeftSideMenuView),
/* harmony export */   "WhiteboardIcon": () => (/* binding */ WhiteboardIcon)
/* harmony export */ });
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DatabaseNameView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DatabaseNameView */ "./src/controllers/HomeController/views/DatabaseNameView.tsx");
/* harmony import */ var _dialogs_SelectAppletDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../dialogs/SelectAppletDialog */ "./src/dialogs/SelectAppletDialog.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useParams)(), team_id = _a.team_id, workspaceId = _a.workspaceId, listId = _a.listId, applet_id = _a.applet_id;
        var databases = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useListDatabases)(workspaceId, [
            _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.Query.equal('category', 'applet')
        ]).databases;
        var documents = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useListDocuments)(workspaceId, 'workspace', 'applets', [
        // Query.equal('opa', 'com.celmino.widget.enterprise-modelling-tree')
        ]).documents;
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
            return (0,_DatabaseNameView__WEBPACK_IMPORTED_MODULE_4__.DatabaseNameView)(database, false, function () { });
        }
        //    )
        ), false), [(0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading, spacing: 5 })(documents ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.ScrollView)({ axes: 'cAll', alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.ForEach)(documents)(function (applet) {
                return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIWidget)(applet['opa'])
                    .config(__assign({}, ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useParams)() || {})));
            })) : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Fragment)()
            /*  ...ForEach(spaces)(space =>
                 Text(space.name)
             ), */
            ),
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIViewBuilder)(function () {
                var createProject = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateProject)().createProject;
                var workspace_id = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useParams)().workspace_id;
                return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ spacing: 5 })(
                //FontIcon(FontIcons.Add, 'sm', '#656f7d'),
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('New Applet').fontSize(11).fontWeight('500'))
                    .margin('5px 20px')
                    .cornerRadius(5)
                    .cursor('pointer')
                    .foregroundColor('#7c828d')
                    .background({ default: '#f3f4f7', hover: '#e4e4e4' })
                    .height(24)
                    .transition('background .2s cubic-bezier(.785,.135,.15,.86) 0s')
                    .padding('8px 12px 8px 26px')
                    .onClick(function () {
                    // DynoDialog.Show(AddAppletDialog(workspaceId));
                }));
            })).height(),
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIViewBuilder)(function () {
                var createDatabase = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDatabase)(workspaceId).createDatabase;
                return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ spacing: 5 })(
                //FontIcon(FontIcons.Add, 'sm', '#656f7d'),
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('Install Applet').fontSize(11).fontWeight('500'))
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
                        _dialogs_SelectAppletDialog__WEBPACK_IMPORTED_MODULE_5__.SelectAppletDialog.Show(workspaceId);
                        return [2 /*return*/];
                    });
                }); }));
            })).height(),
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIViewBuilder)(function () {
                var createDatabase = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDatabase)(workspaceId).createDatabase;
                return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ spacing: 5 })(
                //FontIcon(FontIcons.Add, 'sm', '#656f7d'),
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('Templates').fontSize(11).fontWeight('500'))
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
                        _dialogs_SelectAppletDialog__WEBPACK_IMPORTED_MODULE_5__.SelectAppletDialog.Show(workspaceId);
                        return [2 /*return*/];
                    });
                }); }));
            })).height()], false))))
            .fontFamily(fontFamily)
            .allWidth(282)
            .background('white')
            .borderRight('1px solid #e9ebf0')
            .transition('width .2s ease-in-out'));
    }));
};
var templateObject_1;


/***/ }),

/***/ "./src/controllers/LoginController.ts":
/*!********************************************!*\
  !*** ./src/controllers/LoginController.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginController": () => (/* binding */ LoginController)
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


var LoginController = /** @class */ (function (_super) {
    __extends(LoginController, _super);
    function LoginController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginController.prototype.LoadView = function () {
        var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateEmailSession)('console'), createEmailSession = _a.createEmailSession, isSuccess = _a.isSuccess, isError = _a.isError, error = _a.error;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)().width(200), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TextField)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TextField)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Login'))
            .onClick(function () {
            createEmailSession({
                email: 'stan@bimser.com.tr',
                password: 'password'
            }, function () { return console.log('success'); });
        }), isError && (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(error === null || error === void 0 ? void 0 : error.message), isSuccess && (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UINavigate)('/main'))));
    };
    return LoginController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/dialogs/Applets.ts":
/*!********************************!*\
  !*** ./src/dialogs/Applets.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Applets": () => (/* binding */ Applets)
/* harmony export */ });
var Applets = [
    {
        name: 'Enterprise Modelling',
        type: 'com.celmino.widget.enterprise-modelling-tree',
        description: 'Monitor your process details in timeframe chart.',
        // image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        icon: '\\d320',
        enabled: true,
        databases: [
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
                                "TypeNumber": 1,
                                "ApiName": "OT_ACTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Activity graph",
                                "TypeNumber": 2,
                                "ApiName": "OT_ACT_GRAPH",
                                "Type": "Default"
                            },
                            {
                                "Name": "Actor",
                                "TypeNumber": 3,
                                "ApiName": "OT_ACTOR",
                                "Type": "Default"
                            },
                            {
                                "Name": "Application system",
                                "TypeNumber": 4,
                                "ApiName": "OT_APP_SYS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Application system class",
                                "TypeNumber": 5,
                                "ApiName": "OT_APP_SYS_CLS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Application system type",
                                "TypeNumber": 6,
                                "ApiName": "OT_APP_SYS_TYP",
                                "Type": "Default"
                            },
                            {
                                "Name": "Architecture element",
                                "TypeNumber": 7,
                                "ApiName": "OT_ARCH_ELEM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Argument",
                                "TypeNumber": 8,
                                "ApiName": "OT_ARGUMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Artifact",
                                "TypeNumber": 9,
                                "ApiName": "OT_ARTIFACT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Association",
                                "TypeNumber": 10,
                                "ApiName": "OT_ASSOCIATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Association class",
                                "TypeNumber": 11,
                                "ApiName": "OT_ASSOCIATION_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Association instance",
                                "TypeNumber": 12,
                                "ApiName": "OT_ASSOCIATION_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Association role",
                                "TypeNumber": 13,
                                "ApiName": "OT_ASSOCIATION_ROLE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Attribute",
                                "TypeNumber": 14,
                                "ApiName": "OT_ATTRIBUTE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Attribute link",
                                "TypeNumber": 15,
                                "ApiName": "OT_ATTRIBUTE_LINK",
                                "Type": "Default"
                            },
                            {
                                "Name": "Attribute type",
                                "TypeNumber": 16,
                                "ApiName": "OT_ATTRIBUTE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Attribute type group",
                                "TypeNumber": 17,
                                "ApiName": "OT_ATTRIBUTE_TYPE_GROUP",
                                "Type": "Default"
                            },
                            {
                                "Name": "Authorization condition",
                                "TypeNumber": 18,
                                "ApiName": "OT_AUTH_COND",
                                "Type": "Default"
                            },
                            {
                                "Name": "Bitmap",
                                "TypeNumber": 18,
                                "ApiName": "OT_AUTH_COND",
                                "Type": "Default"
                            },
                            {
                                "Name": "Break",
                                "TypeNumber": 18,
                                "ApiName": "OT_AUTH_COND",
                                "Type": "Default"
                            },
                            {
                                "Name": "Business object",
                                "TypeNumber": 19,
                                "ApiName": "OT_BUSINESS_OBJECT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Business rule",
                                "TypeNumber": 20,
                                "ApiName": "OT_BUSINESS_RULE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Business segment",
                                "TypeNumber": 21,
                                "ApiName": "OT_BUSINESS_SEGMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Button",
                                "TypeNumber": 22,
                                "ApiName": "OT_BUTTON",
                                "Type": "Default"
                            },
                            {
                                "Name": "Calendar event",
                                "TypeNumber": 23,
                                "ApiName": "OT_CALENDAR_EVENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Capability",
                                "TypeNumber": 24,
                                "ApiName": "OT_CAPABILITY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Capability",
                                "TypeNumber": 25,
                                "ApiName": "OT_CAPABILITY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Class",
                                "TypeNumber": 26,
                                "ApiName": "OT_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Classification criterion",
                                "TypeNumber": 27,
                                "ApiName": "OT_CLASSIFICATION_CRITERION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Classifier-in-state",
                                "TypeNumber": 28,
                                "ApiName": "OT_CLASSIFICATION_CRITERION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Classifier role",
                                "TypeNumber": 29,
                                "ApiName": "OT_CLASSIFIER_ROLE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Cluster instance",
                                "TypeNumber": 30,
                                "ApiName": "OT_CLUSTER_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Cluster/Data model",
                                "TypeNumber": 31,
                                "ApiName": "OT_CLUSTER_DATA_MODEL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Collaboration",
                                "TypeNumber": 32,
                                "ApiName": "OT_COLLABORATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Collaboration instance set",
                                "TypeNumber": 33,
                                "ApiName": "OT_COLLABORATION_INST_SET",
                                "Type": "Default"
                            },
                            {
                                "Name": "Column",
                                "TypeNumber": 34,
                                "ApiName": "OT_COLLABORATION_INST_SET",
                                "Type": "Default"
                            },
                            {
                                "Name": "Combo box",
                                "TypeNumber": 35,
                                "ApiName": "OT_COMBO_BOX",
                                "Type": "Default"
                            },
                            {
                                "Name": "Communication",
                                "TypeNumber": 36,
                                "ApiName": "OT_COMMUNICATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Complex object",
                                "TypeNumber": 37,
                                "ApiName": "OT_COMPLEX_OBJECT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Complex object type",
                                "TypeNumber": 38,
                                "ApiName": "OT_COMPLEX_OBJECT_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Component",
                                "TypeNumber": 39,
                                "ApiName": "OT_COMPONENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Component instance",
                                "TypeNumber": 40,
                                "ApiName": "OT_COMPONENT_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Conditional section",
                                "TypeNumber": 41,
                                "ApiName": "OT_CONDITIONAL_SECTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Connector",
                                "TypeNumber": 42,
                                "ApiName": "OT_CONNECTOR",
                                "Type": "Default"
                            },
                            {
                                "Name": "Constant",
                                "TypeNumber": 43,
                                "ApiName": "OT_CONSTANT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Constraint",
                                "TypeNumber": 44,
                                "ApiName": "OT_CONSTRAINT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Contents",
                                "TypeNumber": 45,
                                "ApiName": "OT_CONTENTS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Context information",
                                "TypeNumber": 46,
                                "ApiName": "OT_CONTEXT_INFO",
                                "Type": "Default"
                            },
                            {
                                "Name": "Conversation",
                                "TypeNumber": 47,
                                "ApiName": "OT_CONVERSATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Cost category",
                                "TypeNumber": 48,
                                "ApiName": "OT_COST_CATEGORY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Cost driver",
                                "TypeNumber": 49,
                                "ApiName": "OT_COST_DRIVER",
                                "Type": "Default"
                            },
                            {
                                "Name": "COT attribute",
                                "TypeNumber": 50,
                                "ApiName": "OT_COT_ATTRIBUTE",
                                "Type": "Default"
                            },
                            {
                                "Name": "COT attribute (instance)",
                                "TypeNumber": 51,
                                "ApiName": "OT_COT_ATTRIBUTE_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Critical factor",
                                "TypeNumber": 52,
                                "ApiName": "OT_CRITICAL_FACTOR",
                                "Type": "Default"
                            },
                            {
                                "Name": "Data store",
                                "TypeNumber": 53,
                                "ApiName": "OT_DATA_STORE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Data value",
                                "TypeNumber": 54,
                                "ApiName": "OT_DATA_STORE",
                                "Type": "Default"
                            },
                            {
                                "Name": "DBMS",
                                "TypeNumber": 55,
                                "ApiName": "OT_DBMS",
                                "Type": "Default"
                            },
                            {
                                "Name": "DBMS type",
                                "TypeNumber": 56,
                                "ApiName": "OT_DBMS_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Deployment unit",
                                "TypeNumber": 57,
                                "ApiName": "OT_DEPLOYMENT_UNIT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Distribution channel",
                                "TypeNumber": 58,
                                "ApiName": "OT_DISTRIBUTION_CHANNEL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Documented knowledge",
                                "TypeNumber": 59,
                                "ApiName": "OT_DOCUMENTED_KNOWLEDGE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Domain",
                                "TypeNumber": 60,
                                "ApiName": "OT_DOMAIN",
                                "Type": "Default"
                            },
                            {
                                "Name": "Domain (physical)",
                                "TypeNumber": 61,
                                "ApiName": "OT_DOMAIN_PHYSICAL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Draft list",
                                "TypeNumber": 62,
                                "ApiName": "OT_DRAFT_LIST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Element",
                                "TypeNumber": 63,
                                "ApiName": "OT_ELEMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Element type",
                                "TypeNumber": 64,
                                "ApiName": "OT_ELEMENT_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Employee variable",
                                "TypeNumber": 65,
                                "ApiName": "OT_EMPLOYEE_VARIABLE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Entity",
                                "TypeNumber": 66,
                                "ApiName": "OT_ENTITY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Entity type",
                                "TypeNumber": 67,
                                "ApiName": "OT_ENTITY_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Enumeration",
                                "TypeNumber": 68,
                                "ApiName": "OT_ENUMERATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Enumeration attribute type",
                                "TypeNumber": 69,
                                "ApiName": "OT_ENUMERATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Enumeration literal",
                                "TypeNumber": 70,
                                "ApiName": "OT_ENUMERATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Enumeration occurrence",
                                "TypeNumber": 71,
                                "ApiName": "OT_ENUMERATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "ERM attribute",
                                "TypeNumber": 72,
                                "ApiName": "OT_ERM_ATTRIBUTE",
                                "Type": "Default"
                            },
                            {
                                "Name": "ERM attribute instance",
                                "TypeNumber": 73,
                                "ApiName": "OT_ERM_ATTRIBUTE_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "ERM domain",
                                "TypeNumber": 74,
                                "ApiName": "OT_ERM_DOMAIN",
                                "Type": "Default"
                            },
                            {
                                "Name": "Event",
                                "TypeNumber": 75,
                                "ApiName": "OT_EVENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Event instance",
                                "TypeNumber": 76,
                                "ApiName": "OT_EVENT_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Exception",
                                "TypeNumber": 77,
                                "ApiName": "OT_EXCEPTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Extension point",
                                "TypeNumber": 78,
                                "ApiName": "OT_EXTENSION_POINT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Field",
                                "TypeNumber": 79,
                                "ApiName": "OT_FIELD",
                                "Type": "Default"
                            },
                            {
                                "Name": "Field (specimen)",
                                "TypeNumber": 80,
                                "ApiName": "OT_FIELD",
                                "Type": "Default"
                            },
                            {
                                "Name": "Filter object type",
                                "TypeNumber": 81,
                                "ApiName": "OT_FILTER_OBJECT_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Function",
                                "TypeNumber": 82,
                                "ApiName": "OT_FUNCTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Gate",
                                "TypeNumber": 83,
                                "ApiName": "OT_GATE",
                                "Type": "Default"
                            },
                            {
                                "Name": "General resource",
                                "TypeNumber": 84,
                                "ApiName": "OT_GENERAL_RESOURCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Generalization type",
                                "TypeNumber": 85,
                                "ApiName": "OT_GENERAL_RESOURCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Graphical user interface type",
                                "TypeNumber": 86,
                                "ApiName": "OT_GRAPHICAL_USER_INTERFACE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Group",
                                "TypeNumber": 87,
                                "ApiName": "OT_GROUP",
                                "Type": "Default"
                            },
                            {
                                "Name": "Hardware component",
                                "TypeNumber": 88,
                                "ApiName": "OT_HARDWARE_COMPONENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Hardware component class",
                                "TypeNumber": 84,
                                "ApiName": "OT_HARDWARE_COMPONENT_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Hardware component type",
                                "TypeNumber": 85,
                                "ApiName": "OT_HARDWARE_COMPONENT_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Improvement potential",
                                "TypeNumber": 85,
                                "ApiName": "OT_IMP_POTENTIAL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Index",
                                "TypeNumber": 85,
                                "ApiName": "OT_HINDEX",
                                "Type": "Default"
                            },
                            {
                                "Name": "Information carrier",
                                "TypeNumber": 86,
                                "ApiName": "OT_INFO_CARRIER",
                                "Type": "Default"
                            },
                            {
                                "Name": "Information flow",
                                "TypeNumber": 87,
                                "ApiName": "OT_INFO_FLOW",
                                "Type": "Default"
                            },
                            {
                                "Name": "Instantiation cycle",
                                "TypeNumber": 88,
                                "ApiName": "OT_INST_CYCLE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Instantiation interval",
                                "TypeNumber": 89,
                                "ApiName": "OT_INST_INTERVAL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Instantiation plan",
                                "TypeNumber": 90,
                                "ApiName": "OT_INST_PLAN",
                                "Type": "Default"
                            },
                            {
                                "Name": "Interaction instance set",
                                "TypeNumber": 91,
                                "ApiName": "OT_INTERACTION_INST_SET",
                                "Type": "Default"
                            },
                            {
                                "Name": "IS service",
                                "TypeNumber": 92,
                                "ApiName": "OT_IS_SERVICE",
                                "Type": "Default"
                            },
                            {
                                "Name": "IT function",
                                "TypeNumber": 93,
                                "ApiName": "OT_IT_FUNCTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "IT function class",
                                "TypeNumber": 94,
                                "ApiName": "OT_IT_FUNCTION_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "IT function type",
                                "TypeNumber": 95,
                                "ApiName": "OT_IT_FUNCTION_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Knowledge category",
                                "TypeNumber": 96,
                                "ApiName": "OT_KNOWLEDGE_CATEGORY",
                                "Type": "Default"
                            },
                            {
                                "Name": "KPI instance",
                                "TypeNumber": 97,
                                "ApiName": "OT_KPI_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Lane",
                                "TypeNumber": 98,
                                "ApiName": "OT_LANE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Layout",
                                "TypeNumber": 99,
                                "ApiName": "OT_LAYOUT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Link object",
                                "TypeNumber": 100,
                                "ApiName": "OT_LINK_OBJECT",
                                "Type": "Default"
                            },
                            {
                                "Name": "List",
                                "TypeNumber": 101,
                                "ApiName": "OT_LIST",
                                "Type": "Default"
                            },
                            {
                                "Name": "List control",
                                "TypeNumber": 102,
                                "ApiName": "OT_LIST_CONTROL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Location",
                                "TypeNumber": 103,
                                "ApiName": "OT_LOCATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Loop start",
                                "TypeNumber": 104,
                                "ApiName": "OT_LOOP_START",
                                "Type": "Default"
                            },
                            {
                                "Name": "Main process",
                                "TypeNumber": 105,
                                "ApiName": "OT_MAIN_PROCESS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Marketing instrument",
                                "TypeNumber": 106,
                                "ApiName": "OT_MARKETING_INSTRUMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Material class",
                                "TypeNumber": 106,
                                "ApiName": "OT_MARKETING_INSTRUMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Material flow",
                                "TypeNumber": 107,
                                "ApiName": "OT_MATERIAL_FLOW",
                                "Type": "Default"
                            },
                            {
                                "Name": "Material type",
                                "TypeNumber": 108,
                                "ApiName": "OT_MATERIAL_FLOW",
                                "Type": "Default"
                            },
                            {
                                "Name": "Measurement unit",
                                "TypeNumber": 109,
                                "ApiName": "OT_MEASUREMENT_UNIT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Measurement unit number",
                                "TypeNumber": 110,
                                "ApiName": "OT_MEASUREMENT_UNIT_NUMBER",
                                "Type": "Default"
                            },
                            {
                                "Name": "Memory location",
                                "TypeNumber": 111,
                                "ApiName": "OT_MEMORY_LOCATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Message",
                                "TypeNumber": 112,
                                "ApiName": "OT_MESSAGE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Message type",
                                "TypeNumber": 113,
                                "ApiName": "OT_MESSAGE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Module",
                                "TypeNumber": 114,
                                "ApiName": "OT_MODULE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Module class",
                                "TypeNumber": 115,
                                "ApiName": "OT_MODULE_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Module type",
                                "TypeNumber": 116,
                                "ApiName": "OT_MODULE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Need",
                                "TypeNumber": 117,
                                "ApiName": "OT_NEED",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network",
                                "TypeNumber": 118,
                                "ApiName": "OT_NETWORK",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network class",
                                "TypeNumber": 119,
                                "ApiName": "OT_NETWORK_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network connection",
                                "TypeNumber": 120,
                                "ApiName": "OT_NETWORK_CONNECTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network connection class",
                                "TypeNumber": 121,
                                "ApiName": "OT_NETWORK_CONNECTION_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network connection type",
                                "TypeNumber": 122,
                                "ApiName": "OT_NETWORK_CONNECTION_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network node",
                                "TypeNumber": 123,
                                "ApiName": "OT_NETWORK_NODE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network node class",
                                "TypeNumber": 124,
                                "ApiName": "OT_NETWORK_NODE_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network node type",
                                "TypeNumber": 125,
                                "ApiName": "OT_NETWORK_NODE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network type",
                                "TypeNumber": 126,
                                "ApiName": "OT_NETWORK_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Note",
                                "TypeNumber": 127,
                                "ApiName": "OT_NOTE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Object element",
                                "TypeNumber": 128,
                                "ApiName": "OT_OBJECT_ELEMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Object instance",
                                "TypeNumber": 129,
                                "ApiName": "OT_OBJECT_INSTANCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Object type class",
                                "TypeNumber": 130,
                                "ApiName": "OT_OBJECT_TYPE_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Objective",
                                "TypeNumber": 131,
                                "ApiName": "OT_OBJECTIVE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Operating resource",
                                "TypeNumber": 132,
                                "ApiName": "OT_OPERATING_RESOURCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Operating resource class",
                                "TypeNumber": 133,
                                "ApiName": "OT_OPERATING_RESOURCE_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Operating resource type",
                                "TypeNumber": 134,
                                "ApiName": "OT_OPERATING_RESOURCE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Operating system",
                                "TypeNumber": 135,
                                "ApiName": "OT_OPERATING_SYSTEM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Operating system type",
                                "TypeNumber": 136,
                                "ApiName": "OT_OPERATING_SYSTEM_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Operation",
                                "TypeNumber": 137,
                                "ApiName": "OT_OPERATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Operator",
                                "TypeNumber": 138,
                                "ApiName": "OT_OPERATOR",
                                "Type": "Default"
                            },
                            {
                                "Name": "Organizational chart",
                                "TypeNumber": 139,
                                "ApiName": "OT_ORGANIZATIONAL_CHART",
                                "Type": "Default"
                            },
                            {
                                "Name": "Organizational level",
                                "TypeNumber": 140,
                                "ApiName": "OT_ORGANIZATIONAL_LEVEL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Organizational unit",
                                "TypeNumber": 141,
                                "ApiName": "OT_ORGANIZATIONAL_UNIT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Organizational unit type",
                                "TypeNumber": 142,
                                "ApiName": "OT_ORGANIZATIONAL_UNIT_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Package",
                                "TypeNumber": 143,
                                "ApiName": "OT_PACKAGE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Packaging material class",
                                "TypeNumber": 144,
                                "ApiName": "OT_PACKAGING_MATERIAL_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Packaging material type",
                                "TypeNumber": 145,
                                "ApiName": "OT_PACKAGING_MATERIAL_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Page",
                                "TypeNumber": 146,
                                "ApiName": "OT_PAGE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Panel",
                                "TypeNumber": 147,
                                "ApiName": "OT_PANEL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Parameter",
                                "TypeNumber": 148,
                                "ApiName": "OT_PANEL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Participant",
                                "TypeNumber": 149,
                                "ApiName": "OT_PARTICIPANT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Partition",
                                "TypeNumber": 150,
                                "ApiName": "OT_PARTITION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Partner link",
                                "TypeNumber": 151,
                                "ApiName": "OT_PARTNER_LINK",
                                "Type": "Default"
                            },
                            {
                                "Name": "Person",
                                "TypeNumber": 152,
                                "ApiName": "OT_PERSON",
                                "Type": "Default"
                            },
                            {
                                "Name": "Person type",
                                "TypeNumber": 153,
                                "ApiName": "OT_PERSON_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Position",
                                "TypeNumber": 154,
                                "ApiName": "OT_POSITION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Process",
                                "TypeNumber": 155,
                                "ApiName": "OT_PROCESS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Process component",
                                "TypeNumber": 156,
                                "ApiName": "OT_PROCESS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Process support unit",
                                "TypeNumber": 157,
                                "ApiName": "OT_PROCESS_SUPPORT_UNIT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Product/Service",
                                "TypeNumber": 158,
                                "ApiName": "OT_PRODUCT_SERVICE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Product/Service characteristic",
                                "TypeNumber": 159,
                                "ApiName": "OT_PRODUCT_SERVICE_CHARACTERISTIC",
                                "Type": "Default"
                            },
                            {
                                "Name": "Profile",
                                "TypeNumber": 160,
                                "ApiName": "OT_PROFILE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Program library",
                                "TypeNumber": 161,
                                "ApiName": "OT_PROGRAM_LIBRARY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Program module",
                                "TypeNumber": 162,
                                "ApiName": "OT_PROGRAM_MODULE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Program module type",
                                "TypeNumber": 163,
                                "ApiName": "OT_PROGRAM_MODULE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Programming language",
                                "TypeNumber": 164,
                                "ApiName": "OT_PROGRAMMING_LANGUAGE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Protocol",
                                "TypeNumber": 165,
                                "ApiName": "OT_PROTOCOL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Quick object",
                                "TypeNumber": 166,
                                "ApiName": "OT_QUICK_OBJECT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Radio button/Check box",
                                "TypeNumber": 167,
                                "ApiName": "OT_RADIO_BUTTON_CHECK_BOX",
                                "Type": "Default"
                            },
                            {
                                "Name": "Reception",
                                "TypeNumber": 168,
                                "ApiName": "OT_RECEPTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Relation",
                                "TypeNumber": 169,
                                "ApiName": "OT_RELATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Relationship",
                                "TypeNumber": 170,
                                "ApiName": "OT_RELATIONSHIP",
                                "Type": "Default"
                            },
                            {
                                "Name": "Relationship type",
                                "TypeNumber": 171,
                                "ApiName": "OT_RELATIONSHIP_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Requirement",
                                "TypeNumber": 172,
                                "ApiName": "OT_REQUIREMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Risk",
                                "TypeNumber": 173,
                                "ApiName": "OT_RISK",
                                "Type": "Default"
                            },
                            {
                                "Name": "Risk category",
                                "TypeNumber": 174,
                                "ApiName": "OT_RISK_CATEGORY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Rule",
                                "TypeNumber": 175,
                                "ApiName": "OT_RULE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Rule instance",
                                "TypeNumber": 176,
                                "ApiName": "OT_RULE_INSTANCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Schedule",
                                "TypeNumber": 177,
                                "ApiName": "OT_SCHEDULE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Screen",
                                "TypeNumber": 178,
                                "ApiName": "OT_SCREEN",
                                "Type": "Default"
                            },
                            {
                                "Name": "Screen design",
                                "TypeNumber": 179,
                                "ApiName": "OT_SCREEN_DESIGN",
                                "Type": "Default"
                            },
                            {
                                "Name": "Screen table",
                                "TypeNumber": 180,
                                "ApiName": "OT_SCREEN_TABLE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Section",
                                "TypeNumber": 181,
                                "ApiName": "OT_SECTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Security protocol",
                                "TypeNumber": 182,
                                "ApiName": "OT_SECURITY_PROTOCOL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Separator",
                                "TypeNumber": 183,
                                "ApiName": "OT_SEPARATOR",
                                "Type": "Default"
                            },
                            {
                                "Name": "Sequence",
                                "TypeNumber": 184,
                                "ApiName": "OT_SEQUENCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Service interface",
                                "TypeNumber": 185,
                                "ApiName": "OT_SERVICE_INTERFACE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Service request",
                                "TypeNumber": 186,
                                "ApiName": "OT_SERVICE_REQUEST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Service type",
                                "TypeNumber": 187,
                                "ApiName": "OT_SERVICE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Shift",
                                "TypeNumber": 187,
                                "ApiName": "OT_SERVICE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Shift cycle",
                                "TypeNumber": 188,
                                "ApiName": "OT_SERVICE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Shift plan",
                                "TypeNumber": 189,
                                "ApiName": "OT_SERVICE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Signal",
                                "TypeNumber": 190,
                                "ApiName": "OT_SIGNAL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Socket",
                                "TypeNumber": 191,
                                "ApiName": "OT_SOCKET",
                                "Type": "Default"
                            },
                            {
                                "Name": "Sp./gen. operator",
                                "TypeNumber": 192,
                                "ApiName": "OT_SP_GEN_OPERATOR",
                                "Type": "Default"
                            },
                            {
                                "Name": "Spin box",
                                "TypeNumber": 193,
                                "ApiName": "OT_SPIN_BOX",
                                "Type": "Default"
                            },
                            {
                                "Name": "State",
                                "TypeNumber": 194,
                                "ApiName": "OT_STATE",
                                "Type": "Default"
                            },
                            {
                                "Name": "State machine",
                                "TypeNumber": 195,
                                "ApiName": "OT_STATE_MACHINE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Stereotype",
                                "TypeNumber": 196,
                                "ApiName": "OT_STEREOTYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Structural element",
                                "TypeNumber": 197,
                                "ApiName": "OT_STRUCTURAL_ELEMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Subsystem",
                                "TypeNumber": 198,
                                "ApiName": "OT_SUBSYSTEM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Subsystem instance",
                                "TypeNumber": 199,
                                "ApiName": "OT_SUBSYSTEM_INSTANCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "System attribute",
                                "TypeNumber": 200,
                                "ApiName": "OT_SYSTEM_ATTRIBUTE",
                                "Type": "Default"
                            },
                            {
                                "Name": "System attribute domain",
                                "TypeNumber": 201,
                                "ApiName": "OT_SYSTEM_ATTRIBUTE_DOMAIN",
                                "Type": "Default"
                            },
                            {
                                "Name": "System organizational unit",
                                "TypeNumber": 202,
                                "ApiName": "OT_SYSTEM_ORGANIZATIONAL_UNIT",
                                "Type": "Default"
                            },
                            {
                                "Name": "System organizational unit type",
                                "TypeNumber": 203,
                                "ApiName": "OT_SYSTEM_ORGANIZATIONAL_UNIT_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Table",
                                "TypeNumber": 204,
                                "ApiName": "OT_TABLE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Tables (specimen)",
                                "TypeNumber": 205,
                                "ApiName": "OT_TABLES",
                                "Type": "Default"
                            },
                            {
                                "Name": "Tag definition",
                                "TypeNumber": 206,
                                "ApiName": "OT_TAG_DEFINITION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Tagged value",
                                "TypeNumber": 207,
                                "ApiName": "OT_TAGGED_VALUE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Task",
                                "TypeNumber": 208,
                                "ApiName": "OT_TASK",
                                "Type": "Default"
                            },
                            {
                                "Name": "Tech. operating supply class",
                                "TypeNumber": 209,
                                "ApiName": "OT_TECH_OPERATING_SUPPLY_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Technical operating supply",
                                "TypeNumber": 210,
                                "ApiName": "OT_TECH_OPERATING_SUPPLY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Technical operating supply type",
                                "TypeNumber": 211,
                                "ApiName": "OT_TECH_OPERATING_SUPPLY_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Technical term",
                                "TypeNumber": 212,
                                "ApiName": "OT_TECH_OPERATING_SUPPLY_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Technical terms instance",
                                "TypeNumber": 213,
                                "ApiName": "OT_TECH_OPERATING_SUPPLY_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Test definition",
                                "TypeNumber": 214,
                                "ApiName": "OT_TEST_DEFINITION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Text",
                                "TypeNumber": 215,
                                "ApiName": "OT_TEXT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Text annotation",
                                "TypeNumber": 216,
                                "ApiName": "OT_TEXT_ANNOTATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Text box",
                                "TypeNumber": 217,
                                "ApiName": "OT_TEXT_BOX",
                                "Type": "Default"
                            },
                            {
                                "Name": "Tool",
                                "TypeNumber": 218,
                                "ApiName": "OT_TOOL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transaction folder",
                                "TypeNumber": 219,
                                "ApiName": "OT_TRANSACTION_FOLDER",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transformation pattern",
                                "TypeNumber": 220,
                                "ApiName": "OT_TRANSFORMATION_PATTERN",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transformation pattern component",
                                "TypeNumber": 221,
                                "ApiName": "OT_TRANSFORMATION_PATTERN_COMPONENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transformation profile",
                                "TypeNumber": 222,
                                "ApiName": "OT_TRANSFORMATION_PROFILE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transport system",
                                "TypeNumber": 223,
                                "ApiName": "OT_TRANSPORT_SYSTEM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transport system class",
                                "TypeNumber": 224,
                                "ApiName": "OT_TRANSPORT_SYSTEM_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transport system type",
                                "TypeNumber": 225,
                                "ApiName": "OT_TRANSPORT_SYSTEM_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Tree control",
                                "TypeNumber": 226,
                                "ApiName": "OT_TREE_CONTROL",
                                "Type": "Default"
                            },
                            {
                                "Name": "UML Model",
                                "TypeNumber": 227,
                                "ApiName": "OT_UML_MODEL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Use case instance",
                                "TypeNumber": 228,
                                "ApiName": "OT_USE_CASE_INSTANCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "View",
                                "TypeNumber": 229,
                                "ApiName": "OT_VIEW",
                                "Type": "Default"
                            },
                            {
                                "Name": "View (physical)",
                                "TypeNumber": 230,
                                "ApiName": "OT_VIEW_PHYSICAL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Warehouse equipment",
                                "TypeNumber": 231,
                                "ApiName": "OT_WAREHOUSE_EQUIPMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Warehouse equipment class",
                                "TypeNumber": 232,
                                "ApiName": "OT_WAREHOUSE_EQUIPMENT_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Warehouse equipment type",
                                "TypeNumber": 233,
                                "ApiName": "OT_WAREHOUSE_EQUIPMENT_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "XOR",
                                "TypeNumber": 234,
                                "ApiName": "OT_XOR",
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
                    },
                    {
                        "name": "Activity graph",
                        "id": "OT_ACT_GRAPH",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Actor",
                        "id": "OT_ACTOR",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Work Management',
        type: 'com.celmino.widget.workspace-tree',
        description: 'Monitor your process details in timeframe chart.',
        // image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        icon: '\\d320',
        enabled: true,
        databases: [
            {
                "name": "Work Management",
                "id": "work_management",
                "category": "app",
                "collections": [
                    {
                        "name": "Spaces",
                        "id": "wm_spaces",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "Parent",
                                "type": "string"
                            },
                            {
                                "key": "path",
                                "type": "string"
                            },
                            {
                                "key": "icon_name",
                                "type": "string"
                            },
                            {
                                "key": "icon_category",
                                "type": "string"
                            },
                            {
                                "key": "bg_color",
                                "type": "string"
                            },
                            {
                                "key": "fg_color",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Folders",
                        "id": "wm_folders",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "parent",
                                "type": "string"
                            },
                            {
                                "key": "path",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Lists",
                        "id": "wm_lists",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "parent",
                                "type": "string"
                            },
                            {
                                "key": "path",
                                "type": "string"
                            },
                            {
                                "key": "defaultViewId",
                                "type": "string"
                            },
                            {
                                "key": "icon_name",
                                "type": "string"
                            },
                            {
                                "key": "icon_category",
                                "type": "string"
                            },
                            {
                                "key": "bg_color",
                                "type": "string"
                            },
                            {
                                "key": "fg_color",
                                "type": "string"
                            }
                        ],
                    },
                    {
                        "name": "Documents",
                        "id": "wm_documents",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "parent",
                                "type": "string"
                            },
                            {
                                "key": "path",
                                "type": "string"
                            },
                            {
                                "key": "icon_name",
                                "type": "string"
                            },
                            {
                                "key": "icon_category",
                                "type": "string"
                            },
                            {
                                "key": "bg_color",
                                "type": "string"
                            },
                            {
                                "key": "fg_color",
                                "type": "string"
                            }
                        ],
                    },
                    {
                        "name": "views",
                        "id": "wm_views",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "parent",
                                "type": "string"
                            },
                            {
                                "key": "type",
                                "type": "string"
                            }
                        ],
                    }
                ]
            }
        ]
    },
    {
        name: 'Meeting Management',
        type: 'com.celmino.applet.enterprise-modelling',
        description: 'Monitor your process details in timeframe chart.',
        // image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        icon: '\\d320',
        enabled: true
    }
];


/***/ }),

/***/ "./src/dialogs/SelectAppletDialog.ts":
/*!*******************************************!*\
  !*** ./src/dialogs/SelectAppletDialog.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectAppletDialog": () => (/* binding */ SelectAppletDialog)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Applets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Applets */ "./src/dialogs/Applets.ts");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__);
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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



var SelectAppletDialog = /** @class */ (function (_super) {
    __extends(SelectAppletDialog, _super);
    function SelectAppletDialog() {
        var _this = _super.call(this) || this;
        _this.ShowHeader = true;
        _this.Header = 'Form';
        _this.Width = '80vw';
        _this.Height = '600px';
        _this.filtered_opas = _Applets__WEBPACK_IMPORTED_MODULE_1__.Applets;
        return _this;
    }
    SelectAppletDialog.prototype.BindRouterParams = function (_a) {
        var workspaceId = _a.workspaceId;
        this.workspaceId = workspaceId;
    };
    SelectAppletDialog.prototype.OnOK = function (applet) {
        this.ShowDialogAsyncResolve(applet);
        this.Hide();
    };
    SelectAppletDialog.prototype.OnCancel = function () {
        this.Hide();
    };
    SelectAppletDialog.prototype.LoadView = function () {
        var _this = this;
        var createDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__.useCreateDocument)(this.workspaceId, 'workspace', 'applets').createDocument;
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(''), installingOpa = _a[0], setInstallingOpa = _a[1];
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Heading)('Install Applet').h3()), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icons.Close).onClick(function () { return _this.OnCancel(); })).height(50).padding().background('#F9FAFB'), 
        /*     Search().width(300).allHeight(70).padding()
                .onChange((e) => this.filtered_opas = opas.filter(opa => opa.name.toLowerCase().indexOf(e.toLowerCase()) > -1)), */
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(this.filtered_opas)(function (opa) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading, spacing: 10 })(opa.image &&
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIImage)(opa.image).width(50).height(50).cornerRadius('20%'), 
            // .shadow('0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)'),
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Heading)(opa.name).h4(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Heading)(opa.description || '').h6().ellipsis(true)
                .ellipsisMaxLines(2), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cCenter })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Add'))
                // .loading(isLoading && (opa.type === this.last_added_opa_type))
                .disabled(!opa.enabled)
                .kind(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ButtonType.SECONDARY)
                .size(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ButtonSize.SMALL)
                .loading(installingOpa === opa.type)
                .width('100%')
                .onClick(function () { return __awaiter(_this, void 0, void 0, function () {
                var _loop_1, this_1, i;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: 
                        /*  this.SetValue('name', opa.name);
                         this.SetValue('folder_id', this.folder_id);
                         this.SetValue('space_id', this.space_id);
                        this.SetValue('item_type', 'opa');
                         this.SetValue('item_sub_type', opa.type);
                         this.SetValue('app_id', 'com.tuvalsoft.app.workbench');
                         this.SetValue('content', '')

                         this.last_added_opa_type = opa.type; */
                        /* fetch('./data.json')
                        .then((response) => response.json())
                        .then((json) => console.log(json)); */
                        return [4 /*yield*/, createDocument({
                                data: {
                                    name: opa.name,
                                    opa: opa.type
                                }
                            })];
                        case 1:
                            /*  this.SetValue('name', opa.name);
                             this.SetValue('folder_id', this.folder_id);
                             this.SetValue('space_id', this.space_id);
                            this.SetValue('item_type', 'opa');
                             this.SetValue('item_sub_type', opa.type);
                             this.SetValue('app_id', 'com.tuvalsoft.app.workbench');
                             this.SetValue('content', '')

                             this.last_added_opa_type = opa.type; */
                            /* fetch('./data.json')
                            .then((response) => response.json())
                            .then((json) => console.log(json)); */
                            _a.sent();
                            if (!opa.databases) return [3 /*break*/, 6];
                            setInstallingOpa(opa.type);
                            _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__.Services.Client.setProject(this.workspaceId);
                            _loop_1 = function (i) {
                                var template, name_1, id, category, collections, db_1, _loop_2, j, error_1;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            template = opa.databases[i];
                                            name_1 = template.name, id = template.id, category = template.category, collections = template.collections;
                                            _b.label = 1;
                                        case 1:
                                            _b.trys.push([1, 7, , 8]);
                                            return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__.Services.Databases.create(this_1.workspaceId, id, name_1, category)];
                                        case 2:
                                            db_1 = _b.sent();
                                            _loop_2 = function (j) {
                                                var collection, name_2, id_1, attributes, documents, col, i_1, _c, key, type, _d;
                                                return __generator(this, function (_e) {
                                                    switch (_e.label) {
                                                        case 0:
                                                            collection = collections[j];
                                                            name_2 = collection.name, id_1 = collection.id, attributes = collection.attributes, documents = collection.documents;
                                                            return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__.Services.Databases.createCollection(this_1.workspaceId, db_1.$id, id_1, name_2, [], false)];
                                                        case 1:
                                                            col = _e.sent();
                                                            i_1 = 0;
                                                            _e.label = 2;
                                                        case 2:
                                                            if (!(i_1 < attributes.length)) return [3 /*break*/, 8];
                                                            _c = attributes[i_1], key = _c.key, type = _c.type;
                                                            _d = type;
                                                            switch (_d) {
                                                                case 'string': return [3 /*break*/, 3];
                                                                case 'number': return [3 /*break*/, 5];
                                                            }
                                                            return [3 /*break*/, 7];
                                                        case 3:
                                                            console.log('1');
                                                            return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__.Services.Databases.createStringAttribute(this_1.workspaceId, db_1.$id, col.$id, key, 256, false, '', false)];
                                                        case 4:
                                                            _e.sent();
                                                            return [3 /*break*/, 7];
                                                        case 5:
                                                            console.log('1');
                                                            return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__.Services.Databases.createIntegerAttribute(this_1.workspaceId, db_1.$id, col.$id, key, false)];
                                                        case 6:
                                                            _e.sent();
                                                            return [3 /*break*/, 7];
                                                        case 7:
                                                            i_1++;
                                                            return [3 /*break*/, 2];
                                                        case 8:
                                                            setTimeout(function () {
                                                                documents === null || documents === void 0 ? void 0 : documents.forEach(function (document) { return __awaiter(_this, void 0, void 0, function () {
                                                                    var doc;
                                                                    return __generator(this, function (_a) {
                                                                        switch (_a.label) {
                                                                            case 0: return [4 /*yield*/, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__.Services.Databases.createDocument(this.workspaceId, db_1.$id, col.$id, _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__.ID.unique(), document)];
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
                                            };
                                            j = 0;
                                            _b.label = 3;
                                        case 3:
                                            if (!(j < collections.length)) return [3 /*break*/, 6];
                                            return [5 /*yield**/, _loop_2(j)];
                                        case 4:
                                            _b.sent();
                                            _b.label = 5;
                                        case 5:
                                            j++;
                                            return [3 /*break*/, 3];
                                        case 6: return [3 /*break*/, 8];
                                        case 7:
                                            error_1 = _b.sent();
                                            console.log(error_1);
                                            return [3 /*break*/, 8];
                                        case 8: return [2 /*return*/];
                                    }
                                });
                            };
                            this_1 = this;
                            i = 0;
                            _a.label = 2;
                        case 2:
                            if (!(i < opa.databases.length)) return [3 /*break*/, 5];
                            return [5 /*yield**/, _loop_1(i)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            i++;
                            return [3 /*break*/, 2];
                        case 5:
                            setInstallingOpa('');
                            this.OnOK({
                                name: opa.name,
                                type: opa.type
                            });
                            return [3 /*break*/, 7];
                        case 6:
                            this.OnOK({
                                name: opa.name,
                                type: opa.type
                            });
                            _a.label = 7;
                        case 7: return [2 /*return*/];
                    }
                });
            }); })).height()).height(230).width(290)
                .padding()
                .shadow({ hover: 'var(--box-shadow-medium)' })
                .cornerRadius('var(--border-radius-medium)')
                .border({ default: 'solid 1px var(--layout-border-color)', hover: 'solid 1px var(--dialog-background-color)' })).width().height().padding();
        })).wrap('wrap').height()));
    };
    SelectAppletDialog.Show = function (workspaceId) {
        var dialog = new SelectAppletDialog();
        dialog.ShowHeader = false;
        /*  if (width) {
             dialog.Width = width;
         } */
        dialog.BindRouterParams({ workspaceId: workspaceId });
        return dialog.ShowDialogAsync();
    };
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ViewProperty)(),
        __metadata("design:type", Array)
    ], SelectAppletDialog.prototype, "filtered_opas", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ViewProperty)(),
        __metadata("design:type", String)
    ], SelectAppletDialog.prototype, "workspaceId", void 0);
    return SelectAppletDialog;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.DialogView));



/***/ }),

/***/ "./src/views/LeftSideMenu.tsx":
/*!************************************!*\
  !*** ./src/views/LeftSideMenu.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeftSidemenu": () => (/* binding */ LeftSidemenu),
/* harmony export */   "MainLogo": () => (/* binding */ MainLogo),
/* harmony export */   "accountImage": () => (/* binding */ accountImage),
/* harmony export */   "applicationsElement": () => (/* binding */ applicationsElement),
/* harmony export */   "boxElement": () => (/* binding */ boxElement),
/* harmony export */   "helpElement": () => (/* binding */ helpElement),
/* harmony export */   "invitePeopleElement": () => (/* binding */ invitePeopleElement),
/* harmony export */   "myFavoritesElement": () => (/* binding */ myFavoritesElement),
/* harmony export */   "myProducts": () => (/* binding */ myProducts),
/* harmony export */   "myTaskElement": () => (/* binding */ myTaskElement),
/* harmony export */   "notifyElement": () => (/* binding */ notifyElement),
/* harmony export */   "searchElement": () => (/* binding */ searchElement),
/* harmony export */   "svgElement": () => (/* binding */ svgElement)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



var svgElement = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("svg", { width: "29", height: "25", viewBox: "0 0 29 25", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", { d: "M2.5063 0.983153C0.782691 2.23087 0.3638 4.68688 1.57068 6.46881L11.7573 21.509C12.5031 22.6101 13.6951 23.1962 14.9037 23.1889C16.1107 23.1945 17.3004 22.6086 18.0451 21.509L28.2344 6.46481C29.4413 4.68289 29.0224 2.22688 27.2988 0.979157C25.5752 -0.268562 23.1995 0.164499 21.9927 1.94643L14.9012 12.4168L7.81243 1.95042C6.60555 0.168496 4.22991 -0.264566 2.5063 0.983153Z", fill: "#D7D7FF" }),
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", { d: "M2.50923 23.8352C0.785618 22.5875 0.366728 20.1315 1.57361 18.3495L11.7558 3.31581C12.499 2.21855 13.6853 1.63274 14.8897 1.6359C16.1013 1.62581 17.2971 2.21204 18.0447 3.3157L28.2269 18.3495C29.4338 20.1315 29.0149 22.5875 27.2913 23.8352C25.5677 25.0829 23.1921 24.6499 21.9852 22.8679L14.9003 12.4073L7.81536 22.8679C6.60848 24.6499 4.23284 25.0829 2.50923 23.8352Z", fill: "url(#paint0_linear_1640_88925)" }),
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", { d: "M10.2475 19.2773L5.59619 12.4098L10.2475 5.54228L14.8988 12.4098L10.2475 19.2773Z", fill: "#C1C1FF" }),
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("defs", null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("linearGradient", { id: "paint0_linear_1640_88925", x1: "18.3366", y1: "19.6173", x2: "15.7336", y2: "1.25856", gradientUnits: "userSpaceOnUse" },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("stop", { "stop-color": "#8F8FFF" }),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("stop", { offset: "1", "stop-color": "#C2C2FF" })))));
var notifyElement = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'white' }, width: "23", height: "23", "aria-hidden": "true", className: "icon_component surface-item-icon icon_component--no-focus-style" },
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", { d: "M10 2.04999C10.4143 2.04999 10.75 2.38577 10.75 2.79999V3.61058C12.0546 3.75821 13.2785 4.34336 14.2159 5.28079C15.309 6.37389 15.9231 7.85644 15.9231 9.4023C15.9231 11.7406 16.1727 13.0548 16.3959 13.758C16.5068 14.1075 16.6088 14.2984 16.6645 14.3868C16.6835 14.4168 16.697 14.435 16.7038 14.4435C16.9179 14.6455 16.9953 14.9565 16.8964 15.2377C16.7908 15.538 16.5072 15.7389 16.1889 15.7389H12.9529C12.9516 15.8038 12.9418 15.8695 12.9226 15.9348C12.7439 16.5449 12.3725 17.0809 11.864 17.4623C11.3554 17.8437 10.7371 18.05 10.1015 18.05C9.46584 18.05 8.84746 17.8437 8.33891 17.4623C7.83037 17.0809 7.45905 16.5449 7.28027 15.9348C7.26115 15.8695 7.2513 15.8038 7.24997 15.7389H4.00001C3.71313 15.7389 3.45138 15.5752 3.32575 15.3173C3.20248 15.0643 3.23145 14.764 3.39963 14.5394C3.40133 14.5369 3.40486 14.5316 3.41004 14.5235C3.42459 14.5005 3.45231 14.4542 3.48918 14.3812C3.56285 14.2352 3.67358 13.9813 3.78854 13.5917C4.01863 12.812 4.26574 11.4886 4.26574 9.4023C4.26574 7.85644 4.87984 6.37389 5.97293 5.28079C6.865 4.38872 8.01646 3.81567 9.25004 3.63507V2.79999C9.25004 2.38577 9.58582 2.04999 10 2.04999ZM8.80705 15.7389C8.90698 15.9443 9.05465 16.1241 9.2389 16.2623C9.488 16.4491 9.79062 16.55 10.1015 16.55C10.4123 16.55 10.7149 16.4491 10.964 16.2623C11.1483 16.1241 11.2959 15.9443 11.3959 15.7389H8.80705ZM7.03359 6.34145C7.84538 5.52967 8.9464 5.07361 10.0944 5.07361C11.2425 5.07361 12.3435 5.52967 13.1553 6.34145C13.9671 7.15324 14.4231 8.25426 14.4231 9.4023C14.4231 11.8353 14.6814 13.3144 14.9661 14.2117L14.9748 14.2389H5.15815C5.18119 14.1682 5.20426 14.0941 5.22721 14.0163C5.50499 13.075 5.76574 11.6052 5.76574 9.4023C5.76574 8.25426 6.2218 7.15324 7.03359 6.34145Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" })));
var boxElement = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'white' }, width: "23", height: "23", "aria-hidden": "true", className: "icon_component surface-item-icon icon_component--no-focus-style" },
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", { d: "M1.91632 11.0669C1.91632 10.6527 2.25211 10.3169 2.66632 10.3169H7.44893C7.86314 10.3169 8.19893 10.6527 8.19893 11.0669V11.6764C8.19893 11.9011 8.40478 12.1455 8.72429 12.1455H11.5939C11.9134 12.1455 12.1192 11.9011 12.1192 11.6764V11.0669C12.1192 10.6527 12.455 10.3169 12.8692 10.3169H17.333C17.7472 10.3169 18.083 10.6527 18.083 11.0669V13.3336C18.083 14.8523 16.8518 16.0836 15.333 16.0836H4.66632C3.14754 16.0836 1.91632 14.8523 1.91632 13.3336V11.0669ZM3.41632 11.8169V13.3336C3.41632 14.0239 3.97597 14.5836 4.66632 14.5836H15.333C16.0233 14.5836 16.583 14.0239 16.583 13.3336V11.8169H13.6142C13.5391 12.8634 12.6313 13.6455 11.5939 13.6455H8.72429C7.68683 13.6455 6.77904 12.8634 6.70395 11.8169H3.41632Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }),
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", { d: "M5.84564 5.41675C5.59751 5.41675 5.37654 5.57371 5.29484 5.808L3.37482 11.3137C3.23843 11.7048 2.8108 11.9113 2.41968 11.7749C2.02857 11.6385 1.82208 11.2109 1.95847 10.8198L3.87849 5.31407C4.17029 4.47733 4.95947 3.91675 5.84564 3.91675H14.1543C15.0405 3.91675 15.8297 4.47733 16.1215 5.31407L18.0415 10.8198C18.1779 11.2109 17.9714 11.6385 17.5803 11.7749C17.1892 11.9113 16.7615 11.7048 16.6251 11.3137L14.7051 5.808C14.6234 5.57371 14.4024 5.41675 14.1543 5.41675H5.84564Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" })));
var myTaskElement = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'white' }, width: "23", height: "23", "aria-hidden": "true", className: "icon_component surface-item-icon icon_component--no-focus-style" },
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", { d: "M5.99986 1.82129C6.41407 1.82129 6.74986 2.15708 6.74986 2.57129V4.10701H13.2499V2.57129C13.2499 2.15708 13.5856 1.82129 13.9999 1.82129C14.4141 1.82129 14.7499 2.15708 14.7499 2.57129V4.107H16.2856C16.7876 4.107 17.269 4.30643 17.624 4.66141C17.979 5.01639 18.1784 5.49784 18.1784 5.99986V16.2856C18.1784 16.7876 17.979 17.269 17.624 17.624C17.269 17.979 16.7876 18.1784 16.2856 18.1784H3.71415C3.21213 18.1784 2.73067 17.979 2.37569 17.624C2.02071 17.269 1.82129 16.7876 1.82129 16.2856V5.99986C1.82129 5.49784 2.02071 5.01639 2.37569 4.66141C2.73067 4.30643 3.21213 4.107 3.71415 4.107C3.763 4.107 3.81077 4.11168 3.85702 4.1206C3.90326 4.11168 3.95102 4.10701 3.99986 4.10701H5.24986V2.57129C5.24986 2.15708 5.58565 1.82129 5.99986 1.82129ZM5.24986 7.14272V5.60701H3.99986C3.95101 5.60701 3.90324 5.60234 3.85699 5.59342C3.81075 5.60233 3.76299 5.607 3.71415 5.607C3.60995 5.607 3.51003 5.64839 3.43635 5.72207C3.36268 5.79574 3.32129 5.89567 3.32129 5.99986V16.2856C3.32129 16.3898 3.36268 16.4897 3.43635 16.5634C3.51003 16.637 3.60995 16.6784 3.71415 16.6784H16.2856C16.3898 16.6784 16.4897 16.637 16.5634 16.5634C16.637 16.4897 16.6784 16.3898 16.6784 16.2856V5.99986C16.6784 5.89567 16.637 5.79574 16.5634 5.72207C16.4897 5.64839 16.3898 5.607 16.2856 5.607H14.7499V7.14272C14.7499 7.55693 14.4141 7.89272 13.9999 7.89272C13.5856 7.89272 13.2499 7.55693 13.2499 7.14272V5.60701H6.74986V7.14272C6.74986 7.55693 6.41407 7.89272 5.99986 7.89272C5.58565 7.89272 5.24986 7.55693 5.24986 7.14272ZM13.4214 9.92231C13.6942 9.61058 13.6626 9.13676 13.3509 8.864C13.0392 8.59124 12.5653 8.62283 12.2926 8.93455L8.75058 12.9825L7.02129 11.6856C6.68992 11.437 6.21982 11.5042 5.97129 11.8356C5.72276 12.1669 5.78992 12.637 6.12129 12.8856L8.407 14.5999C8.72086 14.8353 9.16309 14.789 9.42144 14.4937L13.4214 9.92231Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" })));
var myFavoritesElement = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'white' }, width: "23", height: "23", "aria-hidden": "true", className: "icon_component surface-item-icon icon_component--no-focus-style" },
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", { d: "M10 3.90449L8.30061 7.34943C8.20168 7.5491 8.05582 7.72182 7.87554 7.85278C7.69525 7.98374 7.4859 8.06904 7.26543 8.10138L3.46267 8.65796L6.21005 11.3431C6.21018 11.3432 6.20992 11.343 6.21005 11.3431C6.37003 11.499 6.48998 11.6919 6.55878 11.9044C6.6275 12.1167 6.64348 12.3425 6.60534 12.5624C6.60528 12.5628 6.60521 12.5632 6.60514 12.5636L5.95599 16.3534L9.3594 14.563C9.5569 14.4592 9.77687 14.4048 10 14.4048C10.2231 14.4048 10.4429 14.4591 10.6404 14.5629L14.0349 16.3477L13.3857 12.5579C13.3856 12.5574 13.3856 12.5569 13.3855 12.5565C13.3474 12.3367 13.3634 12.1109 13.4321 11.8987C13.5009 11.6862 13.6204 11.4936 13.7804 11.3378C13.7805 11.3376 13.7803 11.3379 13.7804 11.3378L16.5322 8.65463L12.7353 8.10149C12.5148 8.06915 12.3048 7.98374 12.1245 7.85278C11.9442 7.72182 11.7983 7.54911 11.6994 7.34943L10 3.90449ZM10.5623 3.34904L11.2344 3.01626C11.1205 2.78619 10.9446 2.59254 10.7265 2.45714C10.5083 2.32175 10.2567 2.25 10 2.25C9.74328 2.25 9.49166 2.32175 9.27355 2.45714C9.05543 2.59254 8.87949 2.78619 8.76558 3.01626L6.98466 6.6265L2.99539 7.21037L2.99209 7.21086C2.73857 7.24912 2.50078 7.35743 2.30552 7.52359C2.11027 7.68974 1.9653 7.90714 1.88697 8.15127C1.80864 8.39539 1.80006 8.65655 1.8622 8.90529C1.92422 9.15357 2.05423 9.37963 2.23762 9.55808C2.23796 9.55842 2.2383 9.55875 2.23865 9.55909L5.11621 12.3715L4.43615 16.3417C4.43605 16.3422 4.43594 16.3428 4.43584 16.3434C4.39159 16.5975 4.41961 16.8589 4.51674 17.0979C4.6141 17.3374 4.77694 17.5446 4.98662 17.6958C5.1963 17.8471 5.44434 17.9362 5.70233 17.953C5.95874 17.9697 6.21467 17.9142 6.44115 17.793L10 15.9209L13.5498 17.7874C13.7763 17.9085 14.0322 17.964 14.2885 17.9473C14.5465 17.9305 14.7946 17.8414 15.0042 17.6901C15.2139 17.5389 15.3768 17.3317 15.4741 17.0922C15.5712 16.8532 15.5993 16.5918 15.555 16.3378C15.5549 16.3372 15.5548 16.3365 15.5547 16.3359L14.8747 12.3658L17.7568 9.55566C17.7571 9.55536 17.7574 9.55505 17.7577 9.55475C17.9412 9.37628 18.0712 9.15018 18.1332 8.90186C18.1954 8.65312 18.1868 8.39196 18.1085 8.14784C18.0301 7.90371 17.8852 7.68632 17.6899 7.52016C17.4946 7.354 17.2569 7.24569 17.0033 7.20743L13.0153 6.62645L11.2349 3.01724L10.5623 3.34904Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" })));
var applicationsElement = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'white' }, width: "23", height: "23", "aria-hidden": "true", className: "icon_component surface-item-icon icon_component--no-focus-style" },
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", { d: "M5.6579 4.88C5.6579 3.28943 6.9472 2 8.53766 2C10.1281 2 11.4174 3.28943 11.4174 4.88C11.4174 4.89526 11.4173 4.91051 11.4171 4.92572H13.0502C14.1675 4.92572 15.0732 5.83153 15.0732 6.94891V8.58332C15.0889 8.58307 15.1045 8.58295 15.1202 8.58295C16.7107 8.58295 18 9.87237 18 11.4629C18 13.0535 16.7107 14.3429 15.1202 14.3429C15.1045 14.3429 15.0889 14.3428 15.0732 14.3426V15.9768C15.0732 17.0942 14.1675 18 13.0502 18H4.02304C2.90574 18 2 17.0942 2 15.9768V13.5322C2 13.3096 2.10806 13.1009 2.28982 12.9723C2.47157 12.8438 2.70441 12.8115 2.91427 12.8858C3.07072 12.9411 3.23976 12.9715 3.41737 12.9715C4.25045 12.9715 4.9258 12.2961 4.9258 11.4629C4.9258 10.6298 4.25045 9.95437 3.41737 9.95437C3.23975 9.95437 3.07072 9.98478 2.91427 10.0401C2.70441 10.1143 2.47157 10.0821 2.28982 9.95353C2.10806 9.82501 2 9.61625 2 9.39363V6.9489C2 5.83153 2.90575 4.92572 4.02304 4.92572H5.65825C5.65802 4.91051 5.6579 4.89526 5.6579 4.88ZM8.53766 3.37143C7.70458 3.37143 7.02923 4.04683 7.02923 4.88C7.02923 5.05755 7.05961 5.22652 7.11489 5.38292C7.18906 5.5928 7.15675 5.82562 7.02824 6.00736C6.89972 6.1891 6.69099 6.29715 6.46841 6.29715H4.02304C3.66311 6.29715 3.37133 6.58895 3.37133 6.9489V8.5833C3.38665 8.58306 3.402 8.58294 3.41737 8.58294C5.00783 8.58294 6.29714 9.87237 6.29714 11.4629C6.29714 13.0535 5.00783 14.3429 3.41737 14.3429C3.402 14.3429 3.38665 14.3428 3.37133 14.3426V15.9768C3.37133 16.3368 3.66311 16.6286 4.02304 16.6286H13.0502C13.4101 16.6286 13.7019 16.3368 13.7019 15.9768V13.5319C13.7019 13.3092 13.81 13.1004 13.9918 12.9719C14.1737 12.8434 14.4066 12.8112 14.6165 12.8855C14.7731 12.941 14.9424 12.9715 15.1202 12.9715C15.9533 12.9715 16.6287 12.2961 16.6287 11.4629C16.6287 10.6298 15.9533 9.95438 15.1202 9.95438C14.9424 9.95438 14.7731 9.98488 14.6165 10.0404C14.4066 10.1147 14.1737 10.0825 13.9918 9.95399C13.81 9.82548 13.7019 9.61667 13.7019 9.39399V6.94891C13.7019 6.58895 13.4101 6.29715 13.0502 6.29715H10.6069C10.3843 6.29715 10.1756 6.1891 10.0471 6.00736C9.91857 5.82562 9.88626 5.5928 9.96044 5.38292C10.0157 5.22652 10.0461 5.05755 10.0461 4.88C10.0461 4.04683 9.37074 3.37143 8.53766 3.37143Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" })));
var invitePeopleElement = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'white' }, width: "23", height: "23", "aria-hidden": "true", className: "icon_component surface-item-icon icon_component--no-focus-style" },
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", { d: "M7.27093 2.34404C7.7399 2.14979 8.24254 2.0498 8.75015 2.0498C9.25776 2.0498 9.7604 2.14979 10.2294 2.34404C10.6983 2.53829 11.1245 2.82302 11.4834 3.18195C11.8423 3.54088 12.127 3.967 12.3213 4.43597C12.5156 4.90494 12.6155 5.40758 12.6155 5.91519C12.6155 6.4228 12.5156 6.92544 12.3213 7.39441C12.127 7.86338 11.8423 8.28949 11.4834 8.64843C11.1245 9.00736 10.6983 9.29208 10.2294 9.48634C9.7604 9.68059 9.25776 9.78057 8.75015 9.78057C8.24254 9.78057 7.7399 9.68059 7.27093 9.48634C6.80196 9.29209 6.37584 9.00736 6.01691 8.64843C5.65798 8.28949 5.37325 7.86338 5.179 7.39441C4.98475 6.92544 4.88477 6.4228 4.88477 5.91519C4.88477 5.40758 4.98475 4.90494 5.179 4.43597C5.37325 3.967 5.65798 3.54088 6.01691 3.18195C6.37584 2.82302 6.80196 2.53829 7.27093 2.34404ZM8.75015 3.5498C8.43952 3.5498 8.13194 3.61099 7.84496 3.72986C7.55797 3.84873 7.29722 4.02296 7.07757 4.24261C6.85792 4.46226 6.68369 4.72301 6.56482 5.01C6.44595 5.29698 6.38477 5.60456 6.38477 5.91519C6.38477 6.22582 6.44595 6.5334 6.56482 6.82038C6.68369 7.10736 6.85792 7.36812 7.07757 7.58777C7.29722 7.80742 7.55798 7.98165 7.84496 8.10052C8.13194 8.21939 8.43952 8.28057 8.75015 8.28057C9.06078 8.28057 9.36836 8.21939 9.65534 8.10052C9.94232 7.98165 10.2031 7.80742 10.4227 7.58777C10.6424 7.36812 10.8166 7.10736 10.9355 6.82038C11.0544 6.5334 11.1155 6.22582 11.1155 5.91519C11.1155 5.60456 11.0544 5.29698 10.9355 5.01C10.8166 4.72301 10.6424 4.46226 10.4227 4.24261C10.2031 4.02296 9.94233 3.84873 9.65534 3.72986C9.36836 3.61099 9.06078 3.5498 8.75015 3.5498Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }),
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", { d: "M8.33935 10.7312C8.3512 10.7307 8.36306 10.7305 8.37491 10.7305H9.12469C9.13838 10.7305 9.15198 10.7308 9.1655 10.7314 9.7888 10.7566 10.4024 10.8595 10.9888 11.0353 11.4913 11.1859 11.4963 11.8685 11.0942 12.2054 10.9063 12.3628 10.6558 12.4142 10.4202 12.3465 9.99646 12.2249 9.55476 12.1529 9.10634 12.1337H8.39335C7.53853 12.1703 6.70811 12.3988 5.97999 12.7977 5.24701 13.1992 4.64204 13.7602 4.22255 14.4273 3.80542 15.0907 3.58548 15.8372 3.58328 16.5965H9.12469L9.12963 16.5965H9.21466C9.47166 16.5965 9.69353 16.7699 9.78802 17.0089 9.96102 17.4465 9.67351 17.9997 9.203 17.9997H9.12509L9.12014 17.9997H2.79163C2.35443 17.9997 2 17.6856 2 17.2981V16.6097C1.9997 15.6068 2.2887 14.6203 2.83955 13.7443 3.39044 12.8682 4.18491 12.1314 5.14751 11.6041 6.1101 11.0767 7.20884 10.7762 8.33935 10.7312zM14.7002 11.5C15.1144 11.5 15.4502 11.8358 15.4502 12.25V14H17.2002C17.6144 14 17.9502 14.3358 17.9502 14.75 17.9502 15.1642 17.6144 15.5 17.2002 15.5H15.4502V17.25C15.4502 17.6642 15.1144 18 14.7002 18 14.286 18 13.9502 17.6642 13.9502 17.25V15.5H12.2002C11.786 15.5 11.4502 15.1642 11.4502 14.75 11.4502 14.3358 11.786 14 12.2002 14H13.9502V12.25C13.9502 11.8358 14.286 11.5 14.7002 11.5z", fill: "currentColor" })));
var searchElement = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'white' }, width: "23", height: "23", "aria-hidden": "true", className: "icon_component surface-item-icon icon_component--no-focus-style" },
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", { d: "M8.65191 2.37299C6.9706 2.37299 5.35814 3.04089 4.16927 4.22976C2.9804 5.41863 2.3125 7.03108 2.3125 8.7124C2.3125 10.3937 2.9804 12.0062 4.16927 13.195C5.35814 14.3839 6.9706 15.0518 8.65191 15.0518C10.0813 15.0518 11.4609 14.5691 12.5728 13.6939L16.4086 17.5303C16.7014 17.8232 17.1763 17.8232 17.4692 17.5303C17.7621 17.2375 17.7622 16.7626 17.4693 16.4697L13.6334 12.6333C14.5086 11.5214 14.9913 10.1418 14.9913 8.7124C14.9913 7.03108 14.3234 5.41863 13.1346 4.22976C11.9457 3.04089 10.3332 2.37299 8.65191 2.37299ZM12.091 12.1172C12.9878 11.2113 13.4913 9.98783 13.4913 8.7124C13.4913 7.42891 12.9815 6.19798 12.0739 5.29042C11.1663 4.38285 9.9354 3.87299 8.65191 3.87299C7.36842 3.87299 6.1375 4.38285 5.22993 5.29042C4.32237 6.19798 3.8125 7.42891 3.8125 8.7124C3.8125 9.99589 4.32237 11.2268 5.22993 12.1344C6.1375 13.0419 7.36842 13.5518 8.65191 13.5518C9.92736 13.5518 11.1509 13.0483 12.0568 12.1514C12.0623 12.1455 12.0679 12.1397 12.0737 12.134C12.0794 12.1283 12.0851 12.1227 12.091 12.1172Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" })));
var helpElement = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'white' }, width: "23", height: "23", "aria-hidden": "true", className: "icon_component surface-item-icon icon_component--no-focus-style" },
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", { d: "M10.4397 3.50655C9.93674 3.47178 9.43392 3.57593 8.98617 3.80762C8.53842 4.03931 8.16298 4.38962 7.90088 4.82027C7.63877 5.25092 7.5001 5.74533 7.5 6.24948C7.49992 6.66369 7.16407 6.99941 6.74986 6.99933C6.33564 6.99925 5.99992 6.6634 6 6.24919C6.00015 5.47006 6.21447 4.70597 6.61954 4.04042C7.02461 3.37487 7.60484 2.83347 8.29681 2.47541C8.98878 2.11734 9.76587 1.95638 10.5431 2.01012C11.3204 2.06386 12.068 2.33024 12.7041 2.78013C13.3402 3.23002 13.8404 3.84611 14.15 4.56107C14.4596 5.27604 14.5667 6.06236 14.4597 6.83409C14.3526 7.60582 14.0354 8.33327 13.5429 8.93693C13.0503 9.54059 12.4012 9.99723 11.6667 10.2569C11.4716 10.3259 11.3028 10.4537 11.1834 10.6226C11.064 10.7916 10.9999 10.9934 11 11.2003V12.3743C11 12.7885 10.6642 13.1243 10.25 13.1243C9.83579 13.1243 9.5 12.7885 9.5 12.3743V11.2011C9.49981 10.684 9.65995 10.1792 9.95838 9.75691C10.2569 9.33453 10.679 9.01513 11.1667 8.84273C11.642 8.67468 12.0619 8.37921 12.3807 7.9886C12.6994 7.598 12.9046 7.1273 12.9739 6.62794C13.0432 6.12858 12.9739 5.61979 12.7735 5.15717C12.5732 4.69454 12.2495 4.29589 11.8379 4.00479C11.4263 3.71368 10.9426 3.54132 10.4397 3.50655ZM10.25 15.1246C10.0151 15.1246 9.78555 15.1942 9.59026 15.3247C9.39498 15.4552 9.24277 15.6406 9.15289 15.8576C9.06301 16.0746 9.0395 16.3134 9.08532 16.5437C9.13114 16.7741 9.24423 16.9857 9.41031 17.1518C9.57639 17.3178 9.78798 17.4309 10.0183 17.4768C10.2487 17.5226 10.4874 17.4991 10.7044 17.4092C10.9214 17.3193 11.1069 17.1671 11.2374 16.9718C11.3679 16.7765 11.4375 16.5469 11.4375 16.3121C11.4375 15.9971 11.3124 15.6951 11.0897 15.4724C10.867 15.2497 10.5649 15.1246 10.25 15.1246Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" })));
var myProducts = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("svg", { viewBox: "0 0 32 32", style: { color: 'white' }, width: "36", height: "36", role: "button", tabIndex: 0, "aria-hidden": "false", className: "icon_component icon_component--clickable icon_component--no-focus-style" },
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", { d: "M5 7.6551C5 6.19071 6.18712 5 7.65151 5 9.1159 5 10.303 6.19071 10.303 7.6551 10.303 9.11949 9.1159 10.3102 7.65151 10.3102 6.18712 10.3102 5 9.11949 5 7.6551zM5 15.9996C5 14.5352 6.18712 13.3445 7.65151 13.3445 9.1159 13.3445 10.303 14.5352 10.303 15.9996 10.303 17.464 9.1159 18.6547 7.65151 18.6547 6.18712 18.6547 5 17.464 5 15.9996zM7.65151 21.6899C6.18712 21.6899 5 22.8807 5 24.345 5 25.8094 6.18712 27.0001 7.65151 27.0001 9.1159 27.0001 10.303 25.8094 10.303 24.345 10.303 22.8807 9.1159 21.6899 7.65151 21.6899zM13.3333 7.6551C13.3333 6.19071 14.5204 5 15.9848 5 17.4491 5 18.6363 6.19071 18.6363 7.6551 18.6363 9.11949 17.4491 10.3102 15.9848 10.3102 14.5204 10.3102 13.3333 9.11949 13.3333 7.6551zM24.3483 5C22.8839 5 21.6968 6.19071 21.6968 7.6551 21.6968 9.11949 22.8839 10.3102 24.3483 10.3102 25.8127 10.3102 26.9998 9.11949 26.9998 7.6551 26.9998 6.19071 25.8127 5 24.3483 5zM13.3333 15.9996C13.3333 14.5352 14.5204 13.3445 15.9848 13.3445 17.4491 13.3445 18.6363 14.5352 18.6363 15.9996 18.6363 17.464 17.4491 18.6547 15.9848 18.6547 14.5204 18.6547 13.3333 17.464 13.3333 15.9996zM15.9848 21.6897C14.5204 21.6897 13.3333 22.8804 13.3333 24.3448 13.3333 25.8092 14.5204 26.9999 15.9848 26.9999 17.4491 26.9999 18.6363 25.8092 18.6363 24.3448 18.6363 22.8804 17.4491 21.6897 15.9848 21.6897zM21.6667 15.9996C21.6667 14.5352 22.8539 13.3445 24.3183 13.3445 25.7826 13.3445 26.9698 14.5352 26.9698 15.9996 26.9698 17.464 25.7826 18.6547 24.3183 18.6547 22.8539 18.6547 21.6667 17.464 21.6667 15.9996zM24.3183 21.6899C22.8539 21.6899 21.6667 22.8807 21.6667 24.345 21.6667 25.8094 22.8539 27.0001 24.3183 27.0001 25.7826 27.0001 26.9698 25.8094 26.9698 24.345 26.9698 22.8807 25.7826 21.6899 24.3183 21.6899z", fill: "currentColor" })));
var accountImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4QjhDMEYzRkM5QjAxMUU0OUEzNzg3NkQ1Q0JCMDAzQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4QjhDMEY0MEM5QjAxMUU0OUEzNzg3NkQ1Q0JCMDAzQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhCOEMwRjNEQzlCMDExRTQ5QTM3ODc2RDVDQkIwMDNDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhCOEMwRjNFQzlCMDExRTQ5QTM3ODc2RDVDQkIwMDNDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+X/uSsgAADDtJREFUeNrsXXlQ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';
//export const MainLogo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABVpJREFUeNrsnT1yGkEQhWc5AT6BVqkSQ6DQVVJEKBE5NJzAcIJFJxA6gSB0BA4VCZdDBVonpMI3WJ/A7maHKgrD/s70jOB9VVsKZEHXvOmeefOzVgoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwHv+fvrc9CaWF9X0ua2CdyBmSD++0nNFT2vn1wk9C3q+Bz+/TYTE7NFzo+PZZc6x8M/gch0bBM7J0nvdoEVY0TMkoeeWhB3QExX8Exb3jkQeQ+D94nKmPtNTpfxNSOS+QXG5gsz2VI8icHXpuszm4MjENSqyFve1ZiwxPdeuRG54WJbrisv06LNGBkKaGYiFO+yjqzZteJbAjwYadEOkJ2hVs3dUsSzv45Y+7/akBSYxuAFMN0JUUdxW1b/N4P5kx2BdmnmsCy18/Acaj5OSAj8fsEF1adNYHJ9iBkeWxFVlqwKJO7AkLvPl5Eq0njUPLH7Fx5J+N7IYS+vkBBaYYbZKxuL10uO7Epiyd+CiVx/I3isLk7zTFVhbmEjgq5IC4jZdetVjzeB7oXL4q8C/GVic5JXqbEchsCXPe4jYgec9xI+jF3hrl0iCpMDukuQCxPwUMtim593lwaHn/U/c4HK9pSlKIJy9XA5fpbKXnvNDq1h6YvUmaIvOXQgsncGSM9V+zhKlpOe9cyGuaAZrzys13i1I3Oscz/ssFMuKxD0/apsk6Hk3pbnvkeftK4dIlWgpz7ueWFH2rjzwvMyEsnfhUuBAIHvZ786kPC+J287xvLKTPMenKxuWxZX0vMzQI8879OHorO0SLel5x5S9C08874LEnSgPCCxmr+RMFZ7XQQZLlkN4XskM1kdWpWwRPK9kBm/dJYLnPdISLVsO4XnlSjQ8rx83Cq1ksPa8PpVDyViGPoprukRHgqWZPW+c43mlDvN543mtlWhhz8tjbjvD84aq/o1A85532eG4eAi70Z1vOz4eu7nDTtXFU+yjwK+CGdPNOoZDAs+U3Hkv9ryjHGHLXmRnsYemhA4MiCvpeeckbjdDXNlJ3qVq54h7papfQb0jkUdOx2AHnneY43n92dhYdm5VvbvOEX3Go1OBPfO8shsbWZ532TF16btHn1Xr3lZQI3t98rws7Js3nnfZMXn9lL+nTeV6JZ3BUqW5iOeNJGPJEbenzG5L1rrx2KiYvaGS21vN9LwaqVkze968w+s3Fr63p2fjYhksJe5qPZvM6mzpbpHEPCBRxTYTbHW2K0mBpSYzwwKvX5Dy3w+5CxqpLbJFS1LgMyHPW+Quj0T2xrkLGp5SVWDbC+uJyj9AJ4kPsZxJCvzHsefdHafdeV45fksKbLNR2fOWeYmnzdcSJXmTPMF2SSQFttmjSx170e+dsjVk9Evt86aLEbZEnosJrMunjcvMRTzvPiaOPO8+pjZicbGS9SDteXNiMZnFiap+gG5soaJUbZfqAutbBCZfeN0v+8rBrTJdp3Psn+RVPdt88WTaAczpMxfiAm/1rNhIg2ZcOyko8thQqZ7UflP7xdPEUCyxqnkU18SG/+Ydz1VXlHjcNdbj/76st+l6NcQ1d7Y53c/t1RD3WlcE5SqDuVQneiuvbInkEtg1Ka7O5L4ukWUaZl1WjYqbZjJ/XrfCmDw2Ia6RDN7J5lCl24jca5sZPXOq0tfuW1sR2/qPNPgNr2FGJ5vqxQx7q3PpTlBPt02Y0cnmKj2qY8xq2bxduDk52NLBrz1iiRUqk2KHumFDHVOs0ntE4rHo05W7sSSmT1MCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPCMfwIMAE+t3eZL7HeYAAAAAElFTkSuQmCC'
var MainLogo = 'data:image/png;base64,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TMJX7mEnScXfRyk4wKS/i4rfvTOkjduwHYYrt/74t7YjLbiAHvuDf7cA+9g0UMcXUYTeBrDGkVlERINjMEJERANjMHLEQx0qXMBehGAEAP7B5eszAJZgu0gif6FvDBB0ePrhJvettAFgE8DmX914fi2xe82QcLzWEoCn062kOE52lZRUAM8p7iishIxFIHJSGJAsgT+flIzm/pD1W3/8W+vplpI/j/3Bv5uG/XldQo99QUQR2AFQRfgzy6XqRETDYzBCREQDYzByxIEPF3a2VFGCkVZhSDIDYBbAdMufM8jH2ZEbALYRhiAAtsalM6Rff/+f/OsZ2BBsEcCjadZCFLqN8KDPz/7od9bTLSVdj/7en0zD/nwuAJgHD7rS6G4D2MLR78XNW3/8W5vplVMsYQfJAuzPax6eJ1H23cbRz2uVnSFERNFhMEJERANjMHKk6MFIL//g8vVp2LAEsGHJTJu/A9GPhWke2AGOgg+Ef27DdoJsR3yfhReGJPOwX9NZ5CcAo3jcgv15itsmWgLMn/3R72wlcJ+5FO4imYX92ZwPL55BcX5ON9IuoIctHP3uSdo2jn7XDfyxDD+SF3aSzOL0c6Km2fDPzQTKyYMtxPfzNQt7Yk8ebML+vG//9J/9+maqlRARFRyDESIiGhiDkSMKGh7s8slxDEZGcSJU6YYhBxERERERERFFxu19FSIiIqLohWFHNeUyiIiIiIiIiGjMjO8pvkRERERERERERERENHYYjBARERERERERERER0dhgMEJERERERERERERERGODwQgREREREREREREREY0NBiNERERERERERERERDQ2GIwQERFFRIlOuwQiIiIiIiIiIuqBwQgREdEIBAxDiIiIiIiIiIjyhMEIERERERERERERERGNDQYjREREI1DsGCEiIiIiIiIiyhUGI0RERERERERERERENDYYjBAREY2AHSNERERERERERPnCYISIiIiIiIiIiIiIiMYGgxEiIqIhCczxfwu7R4iIiIiIiIiIso7BCBER0ZBOBSMn/k1ERERERERERNnDYISIiIiIiIiIiIiIiMYGgxEiIqIhCRevExERERERERHlDoMRIiIiIiIiIiIiIiIaGwxGiIiIhiQtf1cSpFYHERERERERERH1j8EIERHRkDhKi4iIiIiIiIgofxiMEBERERERERERERHR2GAwQkREFAHpfRUiIiIiIiIiIsoABiNERERDUi2jtLhjhIiIiIiIiIgoHxiMEBERERERERERERHR2GAwQkREREREREREREREY4PBCBERUQSU6N5XIiIiIiIiIiKi1DEYISIiGkLrfhEiIiIiIiIiIsoPBiNEREQREHaMEBERERERERHlAoMRIiKiCAhM2iUQEREREREREVEfGIwQEREREREREREREdHYYDBCREQ0hNYOESVBipUQEREREREREdEgGIwQERENhaOziIiIiIiIiIjyiMEIERHRiBx2jBARERERERER5YabdgFEREREREREeeQu/vksgOlu1/HX/rPqqPfzyOsfzQCYCf85DWC2y9XbvX8rfCOi/swPeP1pAI9GX0ZHGy1/3wawifDn/P3nLlYTrIOIKLcYjBAREY1IiU67hMS5X/r+LOwLxmnYgy/TfXzYJuwLt1HNR3AbebYN+7kc9jqb/r/9x9sA4C7++TSOvn6z4fvnhy8t07bAg4KttjBmn48oDk4Xjbv45/PhX6dx9BiwCfsY0nrZIGbR3++ETrbR/vFrCy3fs/18PZ3/7v/VrGW+y9Wat7sV/OF/utX6Dnfxz2dgw4h5HP99N9DBT3fxz9td3O6gJrwzEw9O/8//3sctNT85yH11EdXtEFE2nPyZfrr5l0de/wiwjzHrANbff+7iVmJVERHliBjDGelERDSYibk/XAbwIgA0UIIew8mMDny48AEAZefg2AJ2T2lMlxrNf77013/2zeXEC4xBGIYsAVgAcD7NWigCngc8+BnAcdKuhIgG1zyovg17QH0TwKa/9p9t9frAMAxZQstBtJzbwVGQUjUTU78J5XwWIr885G39e9m7vwcdfA7ApaiKHMTZS38HlQf4a5aIIrMBYO395y6upV0IEVGWsGOEiIhoCNKyfF0VfMeI+6XvzwNYBs82LZZGA/jgQ+DMGWBqkgEJUb60Ph4fBhzu4p/fhj1DeM2cOT8LG2RPA9iCDm7K3v3fQ/Eey8/j6P/pSakdwExMjXJbX4BSgE7vd/u923fQuLeP0vQZOCUP7kQ5tVqIxonWQGBan+MDjpIUK4rMkwCefOT1j5YBLL3/3MX1dMshIsoGBiNERDSMzbQLSFszGGkNSIrG/dL3pwGsAHgm3UooNloDn35q35SyXSStAh/wYzg46Hn2/tKmBPBK0d+u0T5E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';
var getTypedView = function (type) {
    if (type === 'divider') {
        return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HDivider)().height(1).marginBottom('12px').background('#676879');
    }
    else if (type === 'spacer') {
        return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Spacer)();
    }
};
var LeftSidemenu = function (isLoading) {
    if (isLoading === void 0) { isLoading = false; }
    var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useState)(null), selectedMenuItem = _a[0], setSelectedMenuItem = _a[1];
    // const [currentAppName, setCurrentAppName] = useState(getAppName());
    var menu = [
        {
            name: 'Home',
            selectable: true,
            view: function () { return (
            //  UIRouteLink('/app/com.tuvalsoft.app.organizationmanager')(
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ReactView)(react__WEBPACK_IMPORTED_MODULE_2___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", "data-name": "Glyph Icon", viewBox: "7.210000038146973 4 49.58000183105469 56", x: "409.4248", y: "0", height: "58.89519999999999", width: "52.14328792572021", "data-fill-palette-color": "accent", id: "s-0" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", { d: "M49.13 20.84l-16-9.26V4L55.7 17.05ZM32 50.52L16 41.26V22.74l16-9.26 16 9.26V41.26ZM30.91 11.58l-16 9.26L8.3 17.05 30.91 4ZM13.77 22.74V41.26L7.21 45.05V19Zm1.1 20.42l16 9.26V60L8.3 47Zm18.22 9.26l16-9.26L55.7 47 33.09 60ZM50.23 41.26V22.74L56.79 19v26.1Z", fill: "#8bd8bc", "data-fill-palette-color": "accent" }))))
            //)
            ); },
            onClick: function () {
            }
        },
        {
            type: 'divider'
        },
        {
            name: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.getAppName)(),
            app_name: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.getAppName)(),
            tooltip: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.getAppName)(),
            selectable: true,
            view: function () {
                if ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.getAppFullName)() != null) {
                    //  runningApps.add(getAppFullName());
                }
                return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)());
            },
            onClick: function () {
            }
        },
        {
            name: '1',
            selectable: true,
            tooltip: 'Notifications',
            view: function () { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIRouteLink)("/app/com.tuvalsoft.app.procetra")((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ReactView)(notifyElement))); }
        },
        {
            name: '2',
            selectable: true,
            tooltip: 'Inbox',
            view: function () { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ReactView)(boxElement)); }
        },
        {
            name: '3',
            selectable: true,
            tooltip: 'Task Center',
            view: function () { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ReactView)(myTaskElement)); },
            onClick: function () {
            }
        },
        {
            name: '4',
            tooltip: 'Favorites',
            view: function () { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ReactView)(myFavoritesElement)); }
        },
        {
            name: '5',
            type: 'spacer'
        },
        {
            name: '6',
            tooltip: 'Apps Marketplace',
            view: function () { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ReactView)(applicationsElement)); },
            onClick: function () {
                //  AppCenter.Show()
            }
        },
        {
            name: '7',
            view: function () { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ReactView)(invitePeopleElement)); },
            onClick: function () {
                // DynoDialog.Show(AddUserDialog())
            }
        },
        {
            name: '8',
            tooltip: 'Search',
            view: function () { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ReactView)(searchElement)); }
        },
        {
            name: '9',
            tooltip: 'Help',
            view: function () { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ReactView)(helpElement)); }
        },
        {
            type: 'divider'
        },
        {
            name: '10',
            view: function () { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.PopupButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ReactView)(myProducts))(
            //AppSelectMenu()
            )
                .dialogPosition(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.DialogPosition.TOP_START)
                .dialogOffset({ main: -30, secondary: 55 })); },
            onClick: function () { }
        },
        {
            name: '11',
            tooltip: 'Logout',
            view: function () { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIImage)(accountImage).width(44).height(44).imageBorder('2px solid white')).height().width()
                .onClick(function () {
                window.localStorage.setItem('tenant', null);
                window.location.replace('/logout');
            })); }
        }
    ];
    var func = function () {
        //alert(getAppName())
        setSelectedMenuItem((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.getAppName)());
    };
    (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.EventBus.Default.on('history.changed', func);
        return function () { return _tuval_core__WEBPACK_IMPORTED_MODULE_0__.EventBus.Default.off('history.changed', func); };
    });
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading }).apply(void 0, __spreadArray(__spreadArray([
        /*  HStack(
             HStack(
                 Text('Planlara goz atin').transform('rotate(-90deg)').foregroundColor(Color.white).whiteSpace('nowrap').fontSize(15).lineHeight(22)
             ).width({ hover: '42px', default: '34px' }).cornerRadius('0 16px 16px 0').transition('background-color 200ms ease,width 200ms ease')
                 .background({ hover: '#007038', default: '#258750' })
                 .transform('translateY(-50%)')
         )
             .width()
             .height(158)
             .position(PositionTypes.Fixed)
             .top('50%'), */
        isLoading && (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Spinner)())
            .zIndex(1)
            .height(54).width(64).background('#333').position(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.PositionTypes.Absolute).left('0px').top('0px')], (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ForEach)(menu)(function (item) {
        return item.type != null ? getTypedView(item.type)
            :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)(item.view()).height(36).width(36)
                    .cursor('pointer')
                    .background({ hover: (selectedMenuItem === item.name ? 'rgba(255,255,255,.2)' : 'rgba(0,0,0,.6)'), default: selectedMenuItem === item.name ? 'rgba(255,255,255,.2)' : '' })
                    .cornerRadius(8), (item.selectable && ((selectedMenuItem === item.name) || (selectedMenuItem == null && (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.getAppName)() === item.name))) ?
                    (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)()
                        .borderTop('dashed 8px transparent')
                        .borderRight('dashed 6px white')
                        .borderBottom('dashed 8px transparent')
                        .borderLeft('dashed 0px white')
                        .position(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.PositionTypes.Absolute)
                        .width(6).height(16)
                        .left('calc(100% - 6px)')
                    : null)
                    .tooltip(item.tooltip)
                    .tooltipPosition(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.TooltipPositions.RIGHT)
                    .height()
                    .marginBottom('8px')
                    .onClick(function () {
                    if (item.selectable) {
                        setSelectedMenuItem(item.name);
                    }
                    item.onClick ? item.onClick() : void 0;
                });
    }), false), [
        /*  HStack(
             HStack(
                 DynamicView(svgElement)
             ).height(36).width(36).backgroundColor('rgba(255,255,255,.2)').cornerRadius(8),
             RoundedRectangle()
                 .borderTop('dashed 8px transparent')
                 .borderRight('dashed 6px white')
                 .borderBottom('dashed 8px transparent')
                 .borderLeft('dashed 0px white')
                 .position(PositionTypes.Absolute)


                 .width(6).height(16)

                 .left('calc(100% - 6px)')
         ).height().marginBottom('8px'), */
        /*  HStack(
             HStack(
                 DynamicView(notifyElement)
             ).height(36).width(36).cornerRadius(8)

         ).height().marginBottom('8px'), */
        /*  HStack(
             HStack(
                 DynamicView(boxElement)
             ).height(36).width(36).cornerRadius(8)

         ).height().marginBottom('8px'),
         HStack(
             HStack(
                 DynamicView(myTaskElement)
             ).height(36).width(36).cornerRadius(8)

         ).height().marginBottom('8px'),
         HStack(
             HStack(
                 DynamicView(myFavoritesElement)
             ).height(36).width(36).cornerRadius(8)

         ).height().marginBottom('8px'), */
        /*  Spacer(),
         HStack(
             UIContextMenu(
                 Text('asdsad').width(200).height(200)
             )(
                 HStack(
                     DynamicView(applicationsElement)
                 ).height(36).width(36).cornerRadius(8)
             )

         ).height().marginBottom('8px'), */
        /*  HStack(
             HStack(
                 DynamicView(invitePeopleElement)
             ).height(36).width(36).cornerRadius(8)

         ).height().marginBottom('8px'),
         HStack(
             HStack(
                 DynamicView(searchElement)
             ).height(36).width(36).cornerRadius(8)

         ).height().marginBottom('8px'),
         HStack(
             HStack(
                 DynamicView(helpElement)
             ).height(36).width(36).cornerRadius(8)

         ).height().marginBottom('8px'), */
        /*  HDivider().height(1).marginBottom('12px').background('#676879'),
         HStack(
             HStack(
                 DynamicView(myProducts)
             ).height(36).width(36).cornerRadius(8)

         ).height().marginBottom('8px'),

         HStack(
             HStack(
                 UIImage(accountImage).width(44).height(44).imageBorder('2px solid white')
             ).height(36).width(36).cornerRadius(8)

         ).height().marginBottom('8px'), */
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Standart').fontSize(13).fontWeight('500').foregroundColor('#00c875')).height(32).background('#181d37')], false)).maxWidth('66px').minWidth('66px').background('var(--main-theme-color)').paddingTop('10px').zIndex(2));
};
function Divider() {
    throw new Error("Function not implemented.");
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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NewBiosController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewBiosController */ "./src/NewBiosController.tsx");
/* harmony import */ var _css_global_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/global.scss */ "./src/css/global.scss");




(function (history) {
    var pushState = history.pushState;
    history.pushState = function (state) {
        var result = pushState.apply(history, arguments);
        if (typeof history.onpushstate == "function") {
            history.onpushstate({ state: state });
        }
        return result;
    };
})(window.history);
window.onpopstate = history.onpushstate = function (e) {
    _tuval_core__WEBPACK_IMPORTED_MODULE_0__.EventBus.Default.fire('history.changed', { url: window.location.href });
};
//RM.install({
//  token: 'a2kx9xb:n9iz4ut',
//    ingestUrl: 'https://in.requestmetrics.com/v1'
/* ingestUrl: scriptEl.getAttribute("data-rm-ingest"),
monitorSelfCalls: !!scriptEl.getAttribute("data-rm-monitor-self"),
tags: tags */
// });
var params = new Proxy(new URLSearchParams(window.location.search), {
    get: function (searchParams, prop) { return searchParams.get(prop); },
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
//let value = params.some_key; // "some_value"
window.addEventListener("load", function (event) {
    (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.StartBios)(_NewBiosController__WEBPACK_IMPORTED_MODULE_2__.MainController);
    /*  if (params.tenant_id) {
         RealmBrokerClient.SetTenantAndGetSessionInfo(params.tenant_id).then((session_info: any) => {
           
             StateService.SetStateVariable('session', session_info);
             StateService.SetSessionId(session_info.session_id);
 
             container.register('IStateService', { useValue: StateService });
 
             Tracker.configure({
                 userId: session_info.account_id,
                 sessionId: session_info.session_id
             });
 
 
             Tracker.addMetadata('realm', useSessionService().RealmId);
             Tracker.addMetadata('tenant', useSessionService().TenantId);
 
 
             StartBios(BiosController);
 
         })
     } else {
         RealmBrokerClient.GetSessionInfo().then((session_info: any) => {
          
             StateService.SetStateVariable('session', session_info);
             StateService.SetSessionId(session_info.session_id);
 
             container.register('IStateService', { useValue: StateService });
 
             Tracker.configure({
                 userId: session_info.account_id,
                 sessionId: session_info.session_id
             });
 
             Tracker.addMetadata('realm', useSessionService().RealmId);
             Tracker.addMetadata('tenant', useSessionService().TenantId);
 
             StartBios(BiosController);
 
         })
     } */
});
//StartBios(BiosController)

})();

/******/ })()
;
//# sourceMappingURL=index.js.map
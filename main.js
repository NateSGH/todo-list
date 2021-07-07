/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --header-bg-color: rgb(90, 117, 115);\\n  --sections-bg-color: rgba(108, 138, 136, 0.2);\\n  --btn-bg-color: #ffd6ba;\\n  --font-color: #fff;\\n  --header-sections-left-margin: 30px;\\n  --sections-icons-color: #555b6e;\\n  --form-margin: 10px;\\n  --btn-color: rgba(90, 117, 115, 0.8);\\n  --btn-hover-color: rgba(90, 117, 115, 0.9);\\n  --font-dark: rgb(55, 71, 70);\\n}\\n\\nbody {\\n  font-family: \\\"Nanum Myeongjo\\\", serif;\\n  width: 100%;\\n  height: 100%;\\n  display: grid;\\n  grid-template-columns: 30vw 70vw;\\n  grid-template-rows: 7vh 93vh;\\n  grid-template-areas:\\n    \\\"header header\\\"\\n    \\\"sections content\\\";\\n  overflow: hidden;\\n  margin: 0;\\n}\\n\\nheader {\\n  grid-area: header;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  background-color: var(--header-bg-color);\\n  align-items: center;\\n}\\n\\nh1 {\\n  color: var(--font-color);\\n  font-size: 38px;\\n  font-weight: lighter;\\n  margin: 0 0 0 var(--header-sections-left-margin);\\n}\\n\\n.sections-panel {\\n  grid-area: sections;\\n  display: flex;\\n  flex-direction: column;\\n  background-color: var(--sections-bg-color);\\n}\\n\\nbutton {\\n  font-family: inherit;\\n  font-size: 25px;\\n  font-weight: 500;\\n  border: none;\\n  background: none;\\n  cursor: pointer;\\n  padding: 25px;\\n  text-align: left;\\n}\\n\\n.section {\\n  padding-left: var(--header-sections-left-margin);\\n}\\n\\n.fa-inbox,\\n.fa-calendar-day,\\n.fa-calendar-week,\\n.fa-project-diagram {\\n  color: var(--sections-icons-color);\\n}\\n\\n#projects {\\n  border-top: 2px solid var(--sections-icons-color);\\n}\\n\\n.main-content {\\n  grid-area: content;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.todo-content {\\n  display: grid;\\n  grid-template-columns: auto 1fr auto auto auto;\\n  margin: 15px;\\n  align-items: center;\\n}\\n\\n.todo-icon {\\n  margin: 5px;\\n}\\n\\n#add-task {\\n  color: #fff;\\n  justify-self: end;\\n  border: none;\\n  width: auto;\\n  height: auto;\\n}\\n\\n.fa-plus {\\n  margin-right: 20px;\\n  font-size: 20px;\\n}\\n\\n#add-project {\\n  font-size: 14px;\\n  text-align: right;\\n  font-weight: bolder;\\n  width: fit-content;\\n  height: fit-content;\\n  align-self: flex-end;\\n  padding: 10px;\\n  margin: 5px 20px 0 0;\\n  border: 1px solid var(--sections-icons-color);\\n}\\n\\n.form-container {\\n  position: fixed;\\n  z-index: 1;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  overflow: auto;\\n  background-color: rgba(0, 0, 0, 0.2);\\n  backdrop-filter: blur(2px);\\n  color: var(--font-dark);\\n}\\n\\n.form-wrapper {\\n  background-color: rgba(255, 255, 255, 0.8);\\n  position: fixed;\\n  border: 2px solid var(--header-bg-color);\\n  border-radius: 8px;\\n  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);\\n  width: 30vw;\\n  top: 30%;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: repeat(2, auto);\\n  grid-template-areas:\\n    \\\"heading close\\\"\\n    \\\"form form\\\";\\n}\\n\\n.form-wrapper h3 {\\n  grid-area: heading;\\n  align-self: center;\\n  margin-left: var(--form-margin);\\n  font-size: 1.3rem;\\n}\\n\\n#close-form {\\n  grid-area: close;\\n  justify-self: end;\\n  align-self: start;\\n  padding: 0;\\n  margin: 5px var(--form-margin) 0 0;\\n}\\n\\n#close-form i {\\n  font-size: 20px;\\n  color: var(--font-dark);\\n  cursor: pointer;\\n}\\n\\n#close-form i:hover {\\n  color: var(--btn-hover-color);\\n}\\n\\n#close-form i:active {\\n  color: var(--btn-hover-color);\\n  transform: scale(0.95);\\n}\\n\\n#add-task-form {\\n  font: inherit;\\n  grid-area: form;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: repeat(4, 1fr);\\n  grid-template-areas:\\n    \\\"title duedate\\\"\\n    \\\"description priority\\\"\\n    \\\"description project\\\"\\n    \\\". submit\\\";\\n  grid-gap: 10px;\\n}\\n\\n#add-task-form label {\\n  font-weight: bold;\\n  margin-bottom: 5px;\\n}\\n\\ninput,\\nselect,\\ntextarea {\\n  color: var(--font-dark);\\n}\\n\\n.form-title {\\n  grid-area: title;\\n}\\n\\n.form-description {\\n  grid-area: description;\\n}\\n\\n.form-due_date {\\n  grid-area: duedate;\\n}\\n\\n.form-priority {\\n  grid-area: priority;\\n}\\n\\n.form-project {\\n  grid-area: project;\\n}\\n\\n.form-title,\\n.form-description,\\n.form-due_date,\\n.form-priority,\\n.form-project {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 0 var(--form-margin);\\n}\\n\\n#form-submit {\\n  grid-area: submit;\\n  width: 80px;\\n  height: 30px;\\n  justify-self: end;\\n  align-self: center;\\n  margin-right: var(--form-margin);\\n  background-color: var(--btn-color);\\n  color: #fff;\\n  font-size: 15px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  border: none;\\n}\\n\\n#form-submit:hover {\\n  background-color: var(--btn-hover-color);\\n}\\n\\n#form-submit:active {\\n  background-color: var(--btn-hover-color);\\n  transform: scale(0.95);\\n}\\n\\n@keyframes fade-in {\\n  0% {\\n    opacity: 0;\\n  }\\n\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n\\n@keyframes fade-out {\\n  0% {\\n    opacity: 1;\\n  }\\n\\n  100% {\\n    opacity: 0;\\n  }\\n}\\n\\n@media (max-width: 1100px) {\\n  .form-wrapper {\\n    width: 60vw;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./src/domRelated.js":
/*!***************************!*\
  !*** ./src/domRelated.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom\": () => (/* binding */ dom)\n/* harmony export */ });\n// DOM module (module pattern)\nconst dom = (() => {\n  const pageContent = document.querySelector(\".main-content\");\n  const addTaskBtn = document.getElementById(\"add-task\");\n  // create todo\n  function addTodoToPage(object) {\n    const todo = document.createElement(\"div\");\n    todo.classList.add(\"todo-content\");\n\n    const checkbox = document.createElement(\"i\");\n    checkbox.classList.add(\"far\");\n    checkbox.classList.add(\"fa-square\");\n    checkbox.classList.add(\"checkbox\");\n    checkbox.classList.add(\"todo-icon\");\n\n    const title = document.createElement(\"p\");\n    title.classList.add(\"todo-title\");\n    title.innerText = object.getTitle();\n\n    const edit = document.createElement(\"i\");\n    edit.classList.add(\"fas\");\n    edit.classList.add(\"fa-pencil-alt\");\n    edit.classList.add(\"todo-icon\");\n\n    const priority = document.createElement(\"i\");\n    priority.classList.add(\"fas\");\n    priority.classList.add(\"fa-flag\");\n    priority.classList.add(\"todo-icon\");\n\n    setPriorityOnPage(object.getPriority(), priority);\n\n    const deleteBtn = document.createElement(\"i\");\n    deleteBtn.classList.add(\"fas\");\n    deleteBtn.classList.add(\"fa-trash-alt\");\n    deleteBtn.classList.add(\"todo-icon\");\n\n    todo.appendChild(checkbox);\n    todo.appendChild(title);\n    todo.appendChild(priority);\n    todo.appendChild(edit);\n    todo.appendChild(deleteBtn);\n    pageContent.appendChild(todo);\n  }\n\n  // create project\n  function addProjectToPage(object) {}\n\n  // update main-content on section click\n  // inbox\n\n  //today\n\n  // this week\n\n  // projects\n\n  // change priority\n  function setPriorityOnPage(priority, iconEl) {\n    switch (priority) {\n      case \"low\":\n        iconEl.style.color = \"green\";\n        break;\n      case \"medium\":\n        iconEl.style.color = \"orange\";\n        break;\n      case \"high\":\n        iconEl.style.color = \"red\";\n        break;\n\n      default:\n        break;\n    }\n  }\n\n  function createAddTodoForm(params) {\n    const formContainer = document.createElement(\"div\");\n    formContainer.classList.add(\"form-container\");\n\n    formContainer.innerHTML = `\n    <div class=\"form-wrapper\">\n      <button id=\"close-form\"><i class=\"fas fa-times\"></i></button>\n      <h3>Add New Task</h3>\n      <form id=\"add-task-form\">\n        <div class=\"form-control form-title\">\n          <label for=\"title\">Title</label>\n          <input type=\"text\" name=\"title\" id=\"title\"\n              placeholder=\"Enter todo title\">\n        </div>\n\n        <div class=\"form-control form-description\">\n          <label for=\"description\">Description</label>\n          <textarea name=\"description\" id=\"description\" rows=\"5\" \n            placeholder=\"Enter todo description\"></textarea>\n        </div>\n\n        <div class=\"form-control form-due_date\">\n          <label for=\"due_date\">Due Date</label>\n          <input type=\"date\" name=\"due_date\" id=\"due_date\"\n              placeholder=\"Enter the title\">\n        </div>\n\n        <div class=\"form-control form-priority\">\n          <label for=\"priority\">Priority</label>\n          <select name=\"priority\" id=\"priority\">\n              <option value=\"low\">Low</option>\n              <option value=\"medium\">Medium</option>\n              <option value=\"high\">High</option>\n          </select>\n        </div>\n\n        <div class=\"form-control form-project\">\n          <label for=\"project\">Project</label>\n          <select name=\"project\" id=\"project\">\n              <option value=\"test\">Low</option>\n          </select>\n        </div>\n\n          <input type=\"submit\" value=\"Submit\" id=\"form-submit\">\n      </form>\n    </div>`;\n    formContainer.style.animation = \"fade-in 0.5s\";\n    document.querySelector(\"body\").appendChild(formContainer);\n  }\n\n  function removeForm() {\n    const formContainer = document.querySelector(\".form-container\");\n    formContainer.style.animation = \"fade-out 0.5s\";\n    setTimeout(() => formContainer.remove(), 450);\n  }\n\n  addTaskBtn.addEventListener(\"click\", () => {\n    if (!document.getElementById(\"add-task-form\")) {\n      createAddTodoForm();\n      const closeFormBtn = document.getElementById(\"close-form\");\n      closeFormBtn.addEventListener(\"click\", () => {\n        removeForm();\n      });\n    }\n  });\n\n  window.addEventListener(\"click\", (event) => {\n    if (event.target == document.querySelector(\".form-container\")) {\n      removeForm();\n    }\n  });\n\n  return {\n    addTodoToPage,\n    setPriorityOnPage,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/domRelated.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _domRelated_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domRelated.js */ \"./src/domRelated.js\");\n\n\n\n\nconst testTodo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.todoFactory)(\"Test TODO\", \"Todo to test\", 10, \"low\");\nconst test1Todo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.todoFactory)(\"Test 1 TODO\", \"Todo to test\", 10, \"medium\");\nconst test2Todo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.todoFactory)(\"Test 2 TODO\", \"Todo to test\", 10, \"high\");\n\nconsole.log(testTodo.getProperties());\n\n_domRelated_js__WEBPACK_IMPORTED_MODULE_2__.dom.addTodoToPage(testTodo);\n_domRelated_js__WEBPACK_IMPORTED_MODULE_2__.dom.addTodoToPage(test1Todo);\n_domRelated_js__WEBPACK_IMPORTED_MODULE_2__.dom.addTodoToPage(test2Todo);\n_domRelated_js__WEBPACK_IMPORTED_MODULE_2__.dom.addTodoToPage(testTodo);\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoFactory\": () => (/* binding */ todoFactory)\n/* harmony export */ });\nconst todoFactory = (title, description, dueDate, priority) => {\n  const todoObj = {\n    title,\n    description,\n    dueDate,\n    priority,\n  };\n\n  const getTitle = () => title;\n  const getDescription = () => description;\n  const getDueDate = () => dueDate;\n  const getPriority = () => priority;\n\n  const getProperties = () => todoObj;\n\n  return {\n    getTitle,\n    getDescription,\n    getDueDate,\n    getPriority,\n    getProperties,\n  };\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
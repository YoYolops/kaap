module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/botao/Botao.js":
/*!***********************************!*\
  !*** ./components/botao/Botao.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Botao_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Botao.module.css */ \"./components/botao/Botao.module.css\");\n/* harmony import */ var _Botao_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Botao_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_Teclado__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/Teclado */ \"./components/context/Teclado.js\");\n\nvar _jsxFileName = \"/home/yo/Documentos/kaap/components/botao/Botao.js\";\n\n\n\n\nfunction Botao(props) {\n  const {\n    0: colorized,\n    1: setColorized\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    changeText,\n    allCleaned\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_Teclado__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    setColorized(false);\n  }, [allCleaned]);\n\n  function handleClick() {\n    setColorized(true);\n    changeText(props.val);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    onClick: handleClick,\n    className: colorized ? _Botao_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.activeBtn : _Botao_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.unactiveBtn,\n    children: props.exibir\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Botao);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JvdGFvL0JvdGFvLmpzP2E2MTciXSwibmFtZXMiOlsiQm90YW8iLCJwcm9wcyIsImNvbG9yaXplZCIsInNldENvbG9yaXplZCIsInVzZVN0YXRlIiwiY2hhbmdlVGV4dCIsImFsbENsZWFuZWQiLCJ1c2VDb250ZXh0IiwiVGV4dENvbnRleHQiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDbGljayIsInZhbCIsInN0eWxlcyIsImFjdGl2ZUJ0biIsInVuYWN0aXZlQnRuIiwiZXhpYmlyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQ25CLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQyxLQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFFQyxjQUFGO0FBQWNDO0FBQWQsTUFBNkJDLHdEQUFVLENBQUNDLHdEQUFELENBQTdDO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNaTixnQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNILEdBRlEsRUFFTixDQUFDRyxVQUFELENBRk0sQ0FBVDs7QUFJQSxXQUFTSSxXQUFULEdBQXNCO0FBQ2xCUCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBRSxjQUFVLENBQUNKLEtBQUssQ0FBQ1UsR0FBUCxDQUFWO0FBQ0g7O0FBRUQsc0JBQ0k7QUFBUSxXQUFPLEVBQUVELFdBQWpCO0FBQThCLGFBQVMsRUFBRVIsU0FBUyxHQUFHVSx3REFBTSxDQUFDQyxTQUFWLEdBQXNCRCx3REFBTSxDQUFDRSxXQUEvRTtBQUFBLGNBQ0tiLEtBQUssQ0FBQ2M7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSDs7QUFFY2Ysb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvdGFvL0JvdGFvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Cb3Rhby5tb2R1bGUuY3NzJztcbmltcG9ydCBUZXh0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L1RlY2xhZG8nO1xuXG5mdW5jdGlvbiBCb3RhbyAocHJvcHMpIHtcbiAgICBjb25zdCBbY29sb3JpemVkLCBzZXRDb2xvcml6ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgeyBjaGFuZ2VUZXh0LCBhbGxDbGVhbmVkIH0gPSB1c2VDb250ZXh0KFRleHRDb250ZXh0KVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Q29sb3JpemVkKGZhbHNlKVxuICAgIH0sIFthbGxDbGVhbmVkXSlcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCl7XG4gICAgICAgIHNldENvbG9yaXplZCh0cnVlKVxuICAgICAgICBjaGFuZ2VUZXh0KHByb3BzLnZhbClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9e2NvbG9yaXplZCA/IHN0eWxlcy5hY3RpdmVCdG4gOiBzdHlsZXMudW5hY3RpdmVCdG59PlxuICAgICAgICAgICAge3Byb3BzLmV4aWJpcn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb3RhbzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/botao/Botao.js\n");

/***/ }),

/***/ "./components/botao/Botao.module.css":
/*!*******************************************!*\
  !*** ./components/botao/Botao.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"activeBtn\": \"Botao_activeBtn__2jJ-C\",\n\t\"unactiveBtn\": \"Botao_unactiveBtn__1umXQ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JvdGFvL0JvdGFvLm1vZHVsZS5jc3M/MjgxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ib3Rhby9Cb3Rhby5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWN0aXZlQnRuXCI6IFwiQm90YW9fYWN0aXZlQnRuX18yakotQ1wiLFxuXHRcInVuYWN0aXZlQnRuXCI6IFwiQm90YW9fdW5hY3RpdmVCdG5fXzF1bVhRXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/botao/Botao.module.css\n");

/***/ }),

/***/ "./components/context/Teclado.js":
/*!***************************************!*\
  !*** ./components/context/Teclado.js ***!
  \***************************************/
/*! exports provided: TextProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextProvider\", function() { return TextProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/yo/Documentos/kaap/components/context/Teclado.js\";\n\nconst TextContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction TextProvider({\n  children\n}) {\n  const {\n    0: typedText,\n    1: setTypedText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: allCleaned,\n    1: setAllCleaned\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n\n  function changeText(value) {\n    const novoTexto = typedText + value.toUpperCase();\n    setTypedText(novoTexto);\n  }\n\n  function clearAll() {\n    setTypedText('');\n    setAllCleaned(!allCleaned);\n  }\n\n  function deletar() {\n    setTypedText(typedText.slice(0, -1));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TextContext.Provider, {\n    value: {\n      typedText,\n      changeText,\n      clearAll,\n      allCleaned,\n      deletar\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, this);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRleHQvVGVjbGFkby5qcz8wZTI3Il0sIm5hbWVzIjpbIlRleHRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidHlwZWRUZXh0Iiwic2V0VHlwZWRUZXh0IiwidXNlU3RhdGUiLCJhbGxDbGVhbmVkIiwic2V0QWxsQ2xlYW5lZCIsImNoYW5nZVRleHQiLCJ2YWx1ZSIsIm5vdm9UZXh0byIsInRvVXBwZXJDYXNlIiwiY2xlYXJBbGwiLCJkZWxldGFyIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxXQUFXLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBakM7QUFFTyxTQUFTQyxZQUFULENBQXNCO0FBQUNDO0FBQUQsQ0FBdEIsRUFBa0M7QUFDckMsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDLEVBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJGLHNEQUFRLENBQUMsS0FBRCxDQUE1Qzs7QUFFQSxXQUFTRyxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUN2QixVQUFNQyxTQUFTLEdBQUdQLFNBQVMsR0FBR00sS0FBSyxDQUFDRSxXQUFOLEVBQTlCO0FBQ0FQLGdCQUFZLENBQUNNLFNBQUQsQ0FBWjtBQUNIOztBQUVELFdBQVNFLFFBQVQsR0FBb0I7QUFDaEJSLGdCQUFZLENBQUMsRUFBRCxDQUFaO0FBQ0FHLGlCQUFhLENBQUMsQ0FBQ0QsVUFBRixDQUFiO0FBQ0g7O0FBRUQsV0FBU08sT0FBVCxHQUFtQjtBQUNmVCxnQkFBWSxDQUFDRCxTQUFTLENBQUNXLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBQyxDQUFwQixDQUFELENBQVo7QUFDSDs7QUFFRCxzQkFDSSxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFDekJYLGVBRHlCO0FBRXpCSyxnQkFGeUI7QUFHekJJLGNBSHlCO0FBSXpCTixnQkFKeUI7QUFLekJPO0FBTHlCLEtBQTdCO0FBQUEsY0FRS1g7QUFSTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDtBQUVjSCwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY29udGV4dC9UZWNsYWRvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFRleHRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBUZXh0UHJvdmlkZXIoe2NoaWxkcmVufSkge1xuICAgIGNvbnN0IFt0eXBlZFRleHQsIHNldFR5cGVkVGV4dF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbYWxsQ2xlYW5lZCwgc2V0QWxsQ2xlYW5lZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGZ1bmN0aW9uIGNoYW5nZVRleHQodmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm92b1RleHRvID0gdHlwZWRUZXh0ICsgdmFsdWUudG9VcHBlckNhc2UoKVxuICAgICAgICBzZXRUeXBlZFRleHQobm92b1RleHRvKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyQWxsKCkge1xuICAgICAgICBzZXRUeXBlZFRleHQoJycpXG4gICAgICAgIHNldEFsbENsZWFuZWQoIWFsbENsZWFuZWQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRhcigpIHtcbiAgICAgICAgc2V0VHlwZWRUZXh0KHR5cGVkVGV4dC5zbGljZSgwLCAtMSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRleHRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XG4gICAgICAgICAgICB0eXBlZFRleHQsXG4gICAgICAgICAgICBjaGFuZ2VUZXh0LFxuICAgICAgICAgICAgY2xlYXJBbGwsXG4gICAgICAgICAgICBhbGxDbGVhbmVkLFxuICAgICAgICAgICAgZGVsZXRhcixcbiAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1RleHRDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dENvbnRleHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/context/Teclado.js\n");

/***/ }),

/***/ "./components/teclado/Teclado.js":
/*!***************************************!*\
  !*** ./components/teclado/Teclado.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _botao_Botao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../botao/Botao */ \"./components/botao/Botao.js\");\n/* harmony import */ var _Teclado_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Teclado.module.css */ \"./components/teclado/Teclado.module.css\");\n/* harmony import */ var _Teclado_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Teclado_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/yo/Documentos/kaap/components/teclado/Teclado.js\";\n\n\n\nfunction Teclado() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Teclado_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tecladoContainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Aa\",\n      val: \"a\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Bb\",\n      val: \"b\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Cc\",\n      val: \"c\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Dd\",\n      val: \"d\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Ee\",\n      val: \"e\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Ff\",\n      val: \"f\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Gg\",\n      val: \"g\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Hh\",\n      val: \"h\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Ii\",\n      val: \"i\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Jj\",\n      val: \"j\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Kk\",\n      val: \"k\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Ll\",\n      val: \"l\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Mm\",\n      val: \"m\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Nn\",\n      val: \"n\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Oo\",\n      val: \"o\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Pp\",\n      val: \"p\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Qq\",\n      val: \"q\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Rr\",\n      val: \"r\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Ss\",\n      val: \"s\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Tt\",\n      val: \"t\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Uu\",\n      val: \"u\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Vv\",\n      val: \"v\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Ww\",\n      val: \"w\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Xx\",\n      val: \"x\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Yy\",\n      val: \"y\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_botao_Botao__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      exibir: \"Zz\",\n      val: \"z\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Teclado);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RlY2xhZG8vVGVjbGFkby5qcz81ZGNlIl0sIm5hbWVzIjpbIlRlY2xhZG8iLCJzdHlsZXMiLCJ0ZWNsYWRvQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxHQUFtQjtBQUNmLHNCQUNJO0FBQUssYUFBUyxFQUFFQywwREFBTSxDQUFDQyxnQkFBdkI7QUFBQSw0QkFDSSxxRUFBQyxvREFBRDtBQUFPLFlBQU0sRUFBQyxJQUFkO0FBQW1CLFNBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQyxvREFBRDtBQUFPLFlBQU0sRUFBQyxJQUFkO0FBQW1CLFNBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSSxxRUFBQyxvREFBRDtBQUFPLFlBQU0sRUFBQyxJQUFkO0FBQW1CLFNBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFJSSxxRUFBQyxvREFBRDtBQUFPLFlBQU0sRUFBQyxJQUFkO0FBQW1CLFNBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFLSSxxRUFBQyxvREFBRDtBQUFPLFlBQU0sRUFBQyxJQUFkO0FBQW1CLFNBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFNSSxxRUFBQyxvREFBRDtBQUFPLFlBQU0sRUFBQyxJQUFkO0FBQW1CLFNBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkosZUFPSSxxRUFBQyxvREFBRDtBQUFPLFlBQU0sRUFBQyxJQUFkO0FBQW1CLFNBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosZUFRSSxxRUFBQyxvREFBRDtBQUFPLFlBQU0sRUFBQyxJQUFkO0FBQW1CLFNBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkosZUFTSSxxRUFBQyxvREFBRDtBQUFPLFlBQU0sRUFBQyxJQUFkO0FBQW1CLFNBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEosZUFVSSxxRUFBQyxvREFBRDtBQUFPLFlBQU0sRUFBQyxJQUFkO0FBQW1CLFNBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkosZUFXSSxxRUFBQyxvREFBRDtBQUFPLFlBQU0sRUFBQyxJQUFkO0FBQW1CLFNBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEosZUFZSSxxRUFBQyxvREFBRDtBQUFPLFlBQU0sRUFBQyxJQUFkO0FBQW1CLFNBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkosZUFhSSxxRUFBQyxvREFBRDtBQUFPLFlBQU0sRUFBQyxJQUFkO0FBQW1CLFNBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkosZUFjSSxxRUFBQyxvREFBRDtBQUFPLFlBQU0sRUFBQyxJQUFkO0FBQW1CLFNBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEosZUFlSSxxRUFBQyxvREFBRDtBQUFPLFlBQU0sRUFBQyxJQUFkO0FBQW1CLFNBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkosZUFnQkkscUVBQUMsb0RBQUQ7QUFBTyxZQUFNLEVBQUMsSUFBZDtBQUFtQixTQUFHLEVBQUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCSixlQWlCSSxxRUFBQyxvREFBRDtBQUFPLFlBQU0sRUFBQyxJQUFkO0FBQW1CLFNBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJKLGVBa0JJLHFFQUFDLG9EQUFEO0FBQU8sWUFBTSxFQUFDLElBQWQ7QUFBbUIsU0FBRyxFQUFDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkosZUFtQkkscUVBQUMsb0RBQUQ7QUFBTyxZQUFNLEVBQUMsSUFBZDtBQUFtQixTQUFHLEVBQUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CSixlQW9CSSxxRUFBQyxvREFBRDtBQUFPLFlBQU0sRUFBQyxJQUFkO0FBQW1CLFNBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEJKLGVBcUJJLHFFQUFDLG9EQUFEO0FBQU8sWUFBTSxFQUFDLElBQWQ7QUFBbUIsU0FBRyxFQUFDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQkosZUFzQkkscUVBQUMsb0RBQUQ7QUFBTyxZQUFNLEVBQUMsSUFBZDtBQUFtQixTQUFHLEVBQUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCSixlQXVCSSxxRUFBQyxvREFBRDtBQUFPLFlBQU0sRUFBQyxJQUFkO0FBQW1CLFNBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkJKLGVBd0JJLHFFQUFDLG9EQUFEO0FBQU8sWUFBTSxFQUFDLElBQWQ7QUFBbUIsU0FBRyxFQUFDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkosZUF5QkkscUVBQUMsb0RBQUQ7QUFBTyxZQUFNLEVBQUMsSUFBZDtBQUFtQixTQUFHLEVBQUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpCSixlQTBCSSxxRUFBQyxvREFBRDtBQUFPLFlBQU0sRUFBQyxJQUFkO0FBQW1CLFNBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBOEJIOztBQUVjRixzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdGVjbGFkby9UZWNsYWRvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvdGFvIGZyb20gJy4uL2JvdGFvL0JvdGFvJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZWNsYWRvLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBUZWNsYWRvKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVjbGFkb0NvbnRhaW5lcn0+XG4gICAgICAgICAgICA8Qm90YW8gZXhpYmlyPSdBYScgdmFsPVwiYVwiLz5cbiAgICAgICAgICAgIDxCb3RhbyBleGliaXI9J0JiJyB2YWw9XCJiXCIvPlxuICAgICAgICAgICAgPEJvdGFvIGV4aWJpcj0nQ2MnIHZhbD1cImNcIi8+XG4gICAgICAgICAgICA8Qm90YW8gZXhpYmlyPSdEZCcgdmFsPVwiZFwiLz5cbiAgICAgICAgICAgIDxCb3RhbyBleGliaXI9J0VlJyB2YWw9XCJlXCIvPlxuICAgICAgICAgICAgPEJvdGFvIGV4aWJpcj0nRmYnIHZhbD1cImZcIi8+XG4gICAgICAgICAgICA8Qm90YW8gZXhpYmlyPSdHZycgdmFsPVwiZ1wiLz5cbiAgICAgICAgICAgIDxCb3RhbyBleGliaXI9J0hoJyB2YWw9XCJoXCIvPlxuICAgICAgICAgICAgPEJvdGFvIGV4aWJpcj0nSWknIHZhbD1cImlcIi8+XG4gICAgICAgICAgICA8Qm90YW8gZXhpYmlyPSdKaicgdmFsPVwialwiLz5cbiAgICAgICAgICAgIDxCb3RhbyBleGliaXI9J0trJyB2YWw9XCJrXCIvPlxuICAgICAgICAgICAgPEJvdGFvIGV4aWJpcj0nTGwnIHZhbD1cImxcIi8+XG4gICAgICAgICAgICA8Qm90YW8gZXhpYmlyPSdNbScgdmFsPVwibVwiLz5cbiAgICAgICAgICAgIDxCb3RhbyBleGliaXI9J05uJyB2YWw9XCJuXCIvPlxuICAgICAgICAgICAgPEJvdGFvIGV4aWJpcj0nT28nIHZhbD1cIm9cIi8+XG4gICAgICAgICAgICA8Qm90YW8gZXhpYmlyPSdQcCcgdmFsPVwicFwiLz5cbiAgICAgICAgICAgIDxCb3RhbyBleGliaXI9J1FxJyB2YWw9XCJxXCIvPlxuICAgICAgICAgICAgPEJvdGFvIGV4aWJpcj0nUnInIHZhbD1cInJcIi8+XG4gICAgICAgICAgICA8Qm90YW8gZXhpYmlyPSdTcycgdmFsPVwic1wiLz5cbiAgICAgICAgICAgIDxCb3RhbyBleGliaXI9J1R0JyB2YWw9XCJ0XCIvPlxuICAgICAgICAgICAgPEJvdGFvIGV4aWJpcj0nVXUnIHZhbD1cInVcIi8+XG4gICAgICAgICAgICA8Qm90YW8gZXhpYmlyPSdWdicgdmFsPVwidlwiLz5cbiAgICAgICAgICAgIDxCb3RhbyBleGliaXI9J1d3JyB2YWw9XCJ3XCIvPlxuICAgICAgICAgICAgPEJvdGFvIGV4aWJpcj0nWHgnIHZhbD1cInhcIi8+XG4gICAgICAgICAgICA8Qm90YW8gZXhpYmlyPSdZeScgdmFsPVwieVwiLz5cbiAgICAgICAgICAgIDxCb3RhbyBleGliaXI9J1p6JyB2YWw9XCJ6XCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlY2xhZG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/teclado/Teclado.js\n");

/***/ }),

/***/ "./components/teclado/Teclado.module.css":
/*!***********************************************!*\
  !*** ./components/teclado/Teclado.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"tecladoContainer\": \"Teclado_tecladoContainer__2MZu6\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RlY2xhZG8vVGVjbGFkby5tb2R1bGUuY3NzPzEyNTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL3RlY2xhZG8vVGVjbGFkby5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGVjbGFkb0NvbnRhaW5lclwiOiBcIlRlY2xhZG9fdGVjbGFkb0NvbnRhaW5lcl9fMk1adTZcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/teclado/Teclado.module.css\n");

/***/ }),

/***/ "./components/visor/Visor.js":
/*!***********************************!*\
  !*** ./components/visor/Visor.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_Teclado__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/Teclado */ \"./components/context/Teclado.js\");\n/* harmony import */ var _Visor_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Visor.module.css */ \"./components/visor/Visor.module.css\");\n/* harmony import */ var _Visor_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Visor_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/yo/Documentos/kaap/components/visor/Visor.js\";\n\n\n\n\nfunction Visor() {\n  const {\n    typedText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_Teclado__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Visor_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.visor,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _Visor_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.textBox,\n      children: typedText\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, this);\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Visor);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Zpc29yL1Zpc29yLmpzP2EzN2EiXSwibmFtZXMiOlsiVmlzb3IiLCJ0eXBlZFRleHQiLCJ1c2VDb250ZXh0IiwiVGV4dENvbnRleHQiLCJzdHlsZXMiLCJ2aXNvciIsInRleHRCb3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUNiLFFBQU07QUFBRUM7QUFBRixNQUFnQkMsd0RBQVUsQ0FBQ0Msd0RBQUQsQ0FBaEM7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUMsd0RBQU0sQ0FBQ0MsS0FBdkI7QUFBQSwyQkFDSTtBQUFHLGVBQVMsRUFBRUQsd0RBQU0sQ0FBQ0UsT0FBckI7QUFBQSxnQkFDS0w7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBT0g7O0FBQUE7QUFFY0Qsb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Zpc29yL1Zpc29yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUZXh0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L1RlY2xhZG8nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Zpc29yLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBWaXNvcigpIHtcbiAgICBjb25zdCB7IHR5cGVkVGV4dCB9ID0gdXNlQ29udGV4dChUZXh0Q29udGV4dCk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlzb3J9PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dEJveH0+XG4gICAgICAgICAgICAgICAge3R5cGVkVGV4dH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlzb3I7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/visor/Visor.js\n");

/***/ }),

/***/ "./components/visor/Visor.module.css":
/*!*******************************************!*\
  !*** ./components/visor/Visor.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"visor\": \"Visor_visor__wP8hW\",\n\t\"textContainer\": \"Visor_textContainer__1Vgrt\",\n\t\"textBox\": \"Visor_textBox__37u77\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Zpc29yL1Zpc29yLm1vZHVsZS5jc3M/MzQ1OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Zpc29yL1Zpc29yLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ2aXNvclwiOiBcIlZpc29yX3Zpc29yX193UDhoV1wiLFxuXHRcInRleHRDb250YWluZXJcIjogXCJWaXNvcl90ZXh0Q29udGFpbmVyX18xVmdydFwiLFxuXHRcInRleHRCb3hcIjogXCJWaXNvcl90ZXh0Qm94X18zN3U3N1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/visor/Visor.module.css\n");

/***/ }),

/***/ "./components/vitals/Vitals.js":
/*!*************************************!*\
  !*** ./components/vitals/Vitals.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Vitals_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vitals.module.css */ \"./components/vitals/Vitals.module.css\");\n/* harmony import */ var _Vitals_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Vitals_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_Teclado__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/Teclado */ \"./components/context/Teclado.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"react-icons/ai\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bi */ \"react-icons/bi\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/home/yo/Documentos/kaap/components/vitals/Vitals.js\";\n\n\n\n\n\n\n\nfunction Vitals() {\n  const {\n    clearAll,\n    changeText,\n    deletar\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_context_Teclado__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Vitals_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.vitalButtons,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: clearAll,\n      className: _Vitals_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.vitalBTN,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__[\"AiOutlineDelete\"], {\n        size: \"25px\",\n        color: \"white\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: () => {\n        changeText(' ');\n      },\n      className: _Vitals_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.vitalBTN,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__[\"BiSpaceBar\"], {\n        size: \"25px\",\n        color: \"white\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: deletar,\n      className: _Vitals_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.vitalBTN,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__[\"FaBackspace\"], {\n        size: \"25px\",\n        color: \"white\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 21\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vitals);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ZpdGFscy9WaXRhbHMuanM/YWY5OSJdLCJuYW1lcyI6WyJWaXRhbHMiLCJjbGVhckFsbCIsImNoYW5nZVRleHQiLCJkZWxldGFyIiwidXNlQ29udGV4dCIsIlRleHRDb250ZXh0Iiwic3R5bGVzIiwidml0YWxCdXR0b25zIiwidml0YWxCVE4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUNkLFFBQU07QUFBRUMsWUFBRjtBQUFZQyxjQUFaO0FBQXdCQztBQUF4QixNQUFvQ0Msd0RBQVUsQ0FBQ0Msd0RBQUQsQ0FBcEQ7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUMseURBQU0sQ0FBQ0MsWUFBdkI7QUFBQSw0QkFDSTtBQUFRLGFBQU8sRUFBRU4sUUFBakI7QUFBMkIsZUFBUyxFQUFFSyx5REFBTSxDQUFDRSxRQUE3QztBQUFBLDZCQUNJLHFFQUFDLDhEQUFEO0FBQ0ksWUFBSSxFQUFDLE1BRFQ7QUFFSSxhQUFLLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBT0k7QUFBUSxhQUFPLEVBQUUsTUFBTTtBQUFDTixrQkFBVSxDQUFDLEdBQUQsQ0FBVjtBQUFnQixPQUF4QztBQUEwQyxlQUFTLEVBQUVJLHlEQUFNLENBQUNFLFFBQTVEO0FBQUEsNkJBQ0kscUVBQUMseURBQUQ7QUFDUSxZQUFJLEVBQUMsTUFEYjtBQUVRLGFBQUssRUFBQztBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosZUFhSTtBQUFRLGFBQU8sRUFBRUwsT0FBakI7QUFBMEIsZUFBUyxFQUFFRyx5REFBTSxDQUFDRSxRQUE1QztBQUFBLDZCQUNRLHFFQUFDLDBEQUFEO0FBQ0ksWUFBSSxFQUFDLE1BRFQ7QUFFSSxhQUFLLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBc0JIOztBQUVjUixxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdml0YWxzL1ZpdGFscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9WaXRhbHMubW9kdWxlLmNzcydcbmltcG9ydCBUZXh0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L1RlY2xhZG8nO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZhQmFja3NwYWNlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHsgQWlPdXRsaW5lRGVsZXRlIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xuaW1wb3J0IHsgQmlTcGFjZUJhciB9IGZyb20gJ3JlYWN0LWljb25zL2JpJztcblxuZnVuY3Rpb24gVml0YWxzKCkge1xuICAgIGNvbnN0IHsgY2xlYXJBbGwsIGNoYW5nZVRleHQsIGRlbGV0YXIgfSA9IHVzZUNvbnRleHQoVGV4dENvbnRleHQpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aXRhbEJ1dHRvbnN9PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbGVhckFsbH0gY2xhc3NOYW1lPXtzdHlsZXMudml0YWxCVE59PlxuICAgICAgICAgICAgICAgIDxBaU91dGxpbmVEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT0nMjVweCdcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9J3doaXRlJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge2NoYW5nZVRleHQoJyAnKX19IGNsYXNzTmFtZT17c3R5bGVzLnZpdGFsQlROfT5cbiAgICAgICAgICAgICAgICA8QmlTcGFjZUJhclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0nMjVweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSd3aGl0ZSdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RlbGV0YXJ9IGNsYXNzTmFtZT17c3R5bGVzLnZpdGFsQlROfT5cbiAgICAgICAgICAgICAgICAgICAgPEZhQmFja3NwYWNlXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPScyNXB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J3doaXRlJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVml0YWxzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/vitals/Vitals.js\n");

/***/ }),

/***/ "./components/vitals/Vitals.module.css":
/*!*********************************************!*\
  !*** ./components/vitals/Vitals.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"vitalButtons\": \"Vitals_vitalButtons__1-cmW\",\n\t\"vitalBTN\": \"Vitals_vitalBTN__myvuS\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ZpdGFscy9WaXRhbHMubW9kdWxlLmNzcz80ZDM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL3ZpdGFscy9WaXRhbHMubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInZpdGFsQnV0dG9uc1wiOiBcIlZpdGFsc192aXRhbEJ1dHRvbnNfXzEtY21XXCIsXG5cdFwidml0YWxCVE5cIjogXCJWaXRhbHNfdml0YWxCVE5fX215dnVTXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/vitals/Vitals.module.css\n");

/***/ }),

/***/ "./pages/Home.module.css":
/*!*******************************!*\
  !*** ./pages/Home.module.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"homeContainer\": \"Home_homeContainer__65BQB\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Ib21lLm1vZHVsZS5jc3M/MjU2OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhvbWVDb250YWluZXJcIjogXCJIb21lX2hvbWVDb250YWluZXJfXzY1QlFCXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Home.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_teclado_Teclado__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/teclado/Teclado */ \"./components/teclado/Teclado.js\");\n/* harmony import */ var _components_visor_Visor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/visor/Visor */ \"./components/visor/Visor.js\");\n/* harmony import */ var _components_vitals_Vitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/vitals/Vitals */ \"./components/vitals/Vitals.js\");\n/* harmony import */ var _components_context_Teclado__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/context/Teclado */ \"./components/context/Teclado.js\");\n/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Home.module.css */ \"./pages/Home.module.css\");\n/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/home/yo/Documentos/kaap/pages/index.js\";\n\n\n\n\n\n\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_context_Teclado__WEBPACK_IMPORTED_MODULE_5__[\"TextProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.homeContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_visor_Visor__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_vitals_Vitals__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_teclado_Teclado__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJzdHlsZXMiLCJob21lQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLFNBQVNBLElBQVQsR0FBZ0I7QUFDWixzQkFDSSxxRUFBQyx3RUFBRDtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFFQyx1REFBTSxDQUFDQyxhQUF2QjtBQUFBLDhCQUNJLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFTSDs7QUFFY0YsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGVjbGFkbyBmcm9tICcuLi9jb21wb25lbnRzL3RlY2xhZG8vVGVjbGFkbyc7XG5pbXBvcnQgVmlzb3IgZnJvbSAnLi4vY29tcG9uZW50cy92aXNvci9WaXNvcic7XG5pbXBvcnQgVml0YWxzIGZyb20gJy4uL2NvbXBvbmVudHMvdml0YWxzL1ZpdGFscydcbmltcG9ydCB7IFRleHRQcm92aWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGV4dC9UZWNsYWRvJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ib21lLm1vZHVsZS5jc3MnO1xuXG5cblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dFByb3ZpZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8Vmlzb3IgLz5cbiAgICAgICAgICAgICAgICA8Vml0YWxzIC8+XG4gICAgICAgICAgICAgICAgPFRlY2xhZG8gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1RleHRQcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/ai\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9haVwiPzQ4OTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvYWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9haVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/ai\n");

/***/ }),

/***/ "react-icons/bi":
/*!*********************************!*\
  !*** external "react-icons/bi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/bi\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9iaVwiPzEyNDkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvYmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9iaVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/bi\n");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiP2Q2NmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/fa\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });
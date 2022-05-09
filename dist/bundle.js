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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard */ \"./src/keyboard.js\");\n\r\n\r\n\r\n//import KeyboardActions from './buttons';\r\n\r\nconst body = document.getElementById('body');\r\n\r\nconst keyboard = new _keyboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nkeyboard.create(body);\r\n\r\n//const buttons = new KeyboardActions();\r\n\r\nconsole.log('index')\r\n\n\n//# sourceURL=webpack://virtual-keybord/./src/index.js?");

/***/ }),

/***/ "./src/keyboard.js":
/*!*************************!*\
  !*** ./src/keyboard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ KeyboardCreator)\n/* harmony export */ });\n/* harmony import */ var _lang_En__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang_En */ \"./src/lang_En.js\");\n\r\n\r\n\r\nconsole.log('key')\r\n\r\nclass KeyboardCreator {\r\n    constructor() {        \r\n        this.textarea = document.querySelector('textarea');        \r\n        console.log(this.textarea);\r\n        this.addClassActionOnPhisicalKeyboard();\r\n    }\r\n\r\n    createContainer() {\r\n        const divContainer = document.createElement('div');\r\n        divContainer.className = 'container';\r\n        divContainer.prepend(this.createTextarea());\r\n        divContainer.append(this.createRowContainer());\r\n        divContainer.onclick = this.buttonHandler.bind(this);\r\n        return divContainer;\r\n    }\r\n\r\n    createTextarea() {    \r\n        const textarea = document.createElement('textarea');\r\n        textarea.className = 'textarea';\r\n        textarea.focus();\r\n        textarea.placeholder = 'Press Ctrl + Alt for change language';\r\n        return textarea;\r\n    }\r\n\r\n    createRowContainer() {    \r\n        const rowContainer = document.createElement('div');\r\n        rowContainer.className = 'row-container';\r\n\r\n        for (let i = 0; i < _lang_En__WEBPACK_IMPORTED_MODULE_0__.eng.length; i++) {\r\n            const row = document.createElement('div');\r\n            row.className = 'row';\r\n            rowContainer.append(row);\r\n\r\n            for (let j = 0; j < _lang_En__WEBPACK_IMPORTED_MODULE_0__.eng[i].length; j++) {\r\n                row.append(this.createButton(_lang_En__WEBPACK_IMPORTED_MODULE_0__.eng[i][j]));\r\n            } \r\n        }                \r\n        return rowContainer;\r\n    }\r\n\r\n    createButton (btnInfo) {\r\n        const button = document.createElement('button');\r\n        button.className = 'key-usual';\r\n        button.id = btnInfo.keyCode;\r\n        if (btnInfo.hasOwnProperty('specialClass')) {\r\n            button.setAttribute(btnInfo.keyCode, 'disabled');\r\n            button.className = btnInfo.specialClass;\r\n        } else if (btnInfo.hasOwnProperty('keyLength')) {\r\n            button.classList.add(btnInfo.keyLength);\r\n        }\r\n        button.innerHTML = btnInfo.small;\r\n        return button;\r\n    }\r\n\r\n    buttonHandler (event) {\r\n            console.log(event.target.tagName);\r\n            if (event.target.tagName === 'BUTTON'){\r\n                console.log(event.target.classList)\r\n                const currentElemText = event.target.innerText;\r\n                const currentElem = event.target;                \r\n                if (event.target.classList.contains('key-usual') || \r\n                    event.target.classList.contains('arrow') || \r\n                    event.target.classList.contains('numbers')) {\r\n                    document.querySelector('textarea').value += currentElemText;\r\n                    document.querySelector('.textarea').focus();\r\n                } else if (event.target.classList.contains('key-special') || event.target.classList.contains('space')) {\r\n                    this.buttonSpecialHandler(currentElem);\r\n                    document.querySelector('.textarea').focus();\r\n                }                \r\n                return;\r\n            }\r\n            event.stopPropagation();\r\n    }\r\n\r\n    buttonSpecialHandler (currentElem) {        \r\n        if (currentElem.hasAttribute('enter')) {\r\n            document.querySelector('textarea').value += '\\n';\r\n        } else if (currentElem.hasAttribute('backspace')) {\r\n            document.querySelector('textarea').value = document.querySelector('textarea').value.slice(0, -1); \r\n        } else if (currentElem.hasAttribute('space')) {\r\n            document.querySelector('textarea').value += ' ';\r\n        } else if (currentElem.hasAttribute('tab')) {\r\n            document.querySelector('textarea').value += '\\t';\r\n        }\r\n    }\r\n\r\n    addClassActionOnPhisicalKeyboard () {\r\n        document.addEventListener('keydown', (event) => {\r\n            console.log(event.code);\r\n            if (document.getElementById(event.code).hasAttribute('tab')) {\r\n                event.preventDefault();\r\n                document.getElementById(event.code).classList.add('onFocus');\r\n                document.querySelector('.textarea').focus();                \r\n                document.querySelector('.textarea').value += '\\t';\r\n            }\r\n            document.getElementById(event.code).classList.add('onFocus');\r\n            //document.querySelector('.textarea').value += event.code;\r\n            \r\n        });\r\n        document.addEventListener('keyup', (event) => {\r\n            console.log(event.code);\r\n            document.getElementById(event.code).classList.remove('onFocus');\r\n            document.querySelector('.textarea').focus();\r\n        })\r\n    }\r\n\r\n    create(body) {\r\n        body.prepend(this.createContainer());\r\n    }\r\n}\n\n//# sourceURL=webpack://virtual-keybord/./src/keyboard.js?");

/***/ }),

/***/ "./src/lang_En.js":
/*!************************!*\
  !*** ./src/lang_En.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eng\": () => (/* binding */ eng)\n/* harmony export */ });\nlet eng = \r\n[\r\n[{\r\n    keyCode: 'Backquote',\r\n    small: '`',\r\n    upper: '~',    \r\n    specialClass: 'key-special numbers',\r\n  },\r\n  {\r\n    keyCode: 'Digit1',\r\n    small: '1',\r\n    upper: '!',    \r\n  },\r\n  {\r\n    keyCode: 'Digit2',\r\n    small: '2',\r\n    upper: '@',    \r\n  },\r\n  {\r\n    keyCode: 'Digit3',\r\n    small: '3',\r\n    upper: '#',    \r\n  },\r\n  {\r\n    keyCode: 'Digit4',\r\n    small: '4',\r\n    upper: '$',    \r\n  },\r\n  {\r\n    keyCode: 'Digit5',\r\n    small: '5',\r\n    upper: '%',    \r\n  },\r\n  {\r\n    keyCode: 'Digit6',\r\n    small: '6',\r\n    upper: '^',    \r\n  },\r\n  {\r\n    keyCode: 'Digit7',\r\n    small: '7',\r\n    upper: '&',    \r\n  },\r\n  {\r\n    keyCode: 'Digit8',\r\n    small: '8',\r\n    upper: '*',    \r\n  },\r\n  {\r\n    keyCode: 'Digit9',\r\n    small: '9',\r\n    upper: '(',    \r\n  },\r\n  {\r\n    keyCode: 'Digit0',\r\n    small: '0',\r\n    upper: ')',    \r\n  },\r\n  {\r\n    keyCode: 'Minus',\r\n    small: '-',\r\n    upper: '_',    \r\n  },\r\n  {\r\n    keyCode: 'Equal',\r\n    small: '=',\r\n    upper: '+',    \r\n  },\r\n  {\r\n    keyCode: 'Backspace',\r\n    small: 'Backspace',\r\n    upper: 'Backspace',\r\n    specialClass: 'key-special key-special-long',    \r\n  }], \r\n  [{\r\n    keyCode: 'Tab',\r\n    small: 'Tab',\r\n    upper: 'Tab',    \r\n    specialClass: 'key-special',\r\n  },\r\n  {\r\n    keyCode: 'KeyQ',\r\n    small: 'q',\r\n    upper: 'Q',    \r\n  },\r\n  {\r\n    keyCode: 'KeyW',\r\n    small: 'w',\r\n    upper: 'W',   \r\n  },\r\n  {\r\n    keyCode: 'KeyE',\r\n    small: 'e',\r\n    upper: 'E',   \r\n  },\r\n  {\r\n    keyCode: 'KeyR',\r\n    small: 'r',\r\n    upper: 'R',    \r\n  },\r\n  {\r\n    keyCode: 'KeyT',\r\n    small: 't',\r\n    upper: 'T',    \r\n  },\r\n  {\r\n    keyCode: 'KeyY',\r\n    small: 'y',\r\n    upper: 'Y',    \r\n  },\r\n  {\r\n    keyCode: 'KeyU',\r\n    small: 'u',\r\n    upper: 'U',    \r\n  },\r\n  {\r\n    keyCode: 'KeyI',\r\n    small: 'i',\r\n    upper: 'I',   \r\n  },\r\n  {\r\n    keyCode: 'KeyO',\r\n    small: 'o',\r\n    upper: 'O',    \r\n  },\r\n  {\r\n    keyCode: 'KeyP',\r\n    small: 'p',\r\n    upper: 'P',    \r\n  },\r\n  {\r\n    keyCode: 'BracketLeft',\r\n    small: '[',\r\n    upper: '{',    \r\n  },\r\n  {\r\n    keyCode: 'BracketRight',\r\n    small: ']',\r\n    upper: '}',    \r\n  },\r\n  {\r\n    keyCode: 'Delete',\r\n    small: 'Del',\r\n    upper: 'Del',    \r\n    specialClass: 'key-special',\r\n  }], \r\n  [{\r\n    keyCode: 'CapsLock',\r\n    small: 'CapsLock',\r\n    upper: 'CapsLock',  \r\n    specialClass: 'key-special key-special-long',\r\n  },\r\n  {\r\n    keyCode: 'KeyA',\r\n    small: 'a',\r\n    upper: 'A',    \r\n  },\r\n  {\r\n    keyCode: 'KeyS',\r\n    small: 's',\r\n    upper: 'S',    \r\n  },\r\n  {\r\n    keyCode: 'KeyD',\r\n    small: 'd',\r\n    upper: 'D',    \r\n  },\r\n  {\r\n    keyCode: 'KeyF',\r\n    small: 'f',\r\n    upper: 'F',    \r\n  },\r\n  {\r\n    keyCode: 'KeyG',\r\n    small: 'g',\r\n    upper: 'G',    \r\n  },\r\n  {\r\n    keyCode: 'KeyH',\r\n    small: 'h',\r\n    upper: 'H',    \r\n  },\r\n  {\r\n    keyCode: 'KeyJ',\r\n    small: 'j',\r\n    upper: 'J',    \r\n  },\r\n  {\r\n    keyCode: 'KeyK',\r\n    small: 'k',\r\n    upper: 'K',    \r\n  },\r\n  {\r\n    keyCode: 'KeyL',\r\n    small: 'l',\r\n    upper: 'L',    \r\n  },\r\n  {\r\n    keyCode: 'Semicolon',\r\n    small: ';',\r\n    upper: ':',    \r\n  },\r\n  {\r\n    keyCode: 'Quote',\r\n    small: \"'\",\r\n    upper: '\"',    \r\n  },\r\n  {\r\n    keyCode: 'Enter',\r\n    small: 'Enter',\r\n    upper: 'Enter',    \r\n    specialClass: 'key-special key-special-long',\r\n  }], \r\n [{\r\n    keyCode: 'ShiftLeft',\r\n    small: 'Shift',\r\n    upper: 'Shift',    \r\n    specialClass: 'key-special key-special-long',\r\n  },\r\n  {\r\n    keyCode: 'Backslash',\r\n    small: '\\\\',\r\n    upper: '|',    \r\n  },    \r\n  {\r\n    keyCode: 'KeyZ',\r\n    small: 'z',\r\n    upper: 'Z',    \r\n  },\r\n  {\r\n    keyCode: 'KeyX',\r\n    small: 'x',\r\n    upper: 'X',    \r\n  },\r\n  {\r\n    keyCode: 'KeyC',\r\n    small: 'c',\r\n    upper: 'C',    \r\n  },\r\n  {\r\n    keyCode: 'KeyV',\r\n    small: 'v',\r\n    upper: 'V',    \r\n  },\r\n  {\r\n    keyCode: 'KeyB',\r\n    small: 'b',\r\n    upper: 'B',    \r\n  },\r\n  {\r\n    keyCode: 'KeyN',\r\n    small: 'n',\r\n    upper: 'N',    \r\n  },\r\n  {\r\n    keyCode: 'KeyM',\r\n    small: 'm',\r\n    upper: 'M',    \r\n  },\r\n  {\r\n    keyCode: 'Comma',\r\n    small: ',',\r\n    upper: '<',    \r\n  },\r\n  {\r\n    keyCode: 'Period',\r\n    small: '.',\r\n    upper: '>',    \r\n  },\r\n  {\r\n    keyCode: 'Slash',\r\n    small: '/',\r\n    upper: '?',    \r\n  },\r\n  {\r\n    keyCode: 'ArrowUp',\r\n    small: '▲',\r\n    upper: '▲',    \r\n    specialClass: 'special arrow',\r\n  },\r\n  {\r\n    keyCode: 'ShiftRight',\r\n    small: 'Shift',\r\n    upper: 'Shift',    \r\n    specialClass: 'key-special key-special-long',\r\n  }], \r\n  [{\r\n    keyCode: 'ControlLeft',\r\n    small: 'Ctrl',\r\n    upper: 'Ctrl',    \r\n    specialClass: 'key-special',\r\n  },\r\n  {\r\n    keyCode: 'AltLeft',\r\n    small: 'Alt',\r\n    upper: 'Alt',    \r\n    specialClass: 'key-special',\r\n  },\r\n  {\r\n    keyCode: 'MetaLeft',\r\n    small: 'Win',\r\n    upper: 'Win',    \r\n    specialClass: 'key-special',\r\n  },\r\n  {\r\n    keyCode: 'Space',\r\n    small: ' ',\r\n    upper: ' ',    \r\n    specialClass: 'space',\r\n  },\r\n  {\r\n    keyCode: 'AltRight',\r\n    small: 'Alt',\r\n    upper: 'Alt',\r\n    specialClass: 'key-special',\r\n  },\r\n  {\r\n    keyCode: 'ArrowLeft',\r\n    small: '◄',\r\n    upper: '◄&larr;',    \r\n    specialClass: 'key-special arrow',\r\n  },  \r\n  {\r\n    keyCode: 'ArrowDown',\r\n    small: '▼',\r\n    upper: '▼',    \r\n    specialClass: 'key-special arrow',\r\n  },\r\n  {\r\n    keyCode: 'ArrowRight',\r\n    small: '►',\r\n    upper: '►',    \r\n    specialClass: 'key-special arrow',\r\n  },\r\n  {\r\n    keyCode: 'ControlRight',\r\n    small: 'Ctrl',\r\n    upper: 'Ctrl',    \r\n    specialClass: 'key-special',\r\n  }]\r\n];\r\n\n\n//# sourceURL=webpack://virtual-keybord/./src/lang_En.js?");

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